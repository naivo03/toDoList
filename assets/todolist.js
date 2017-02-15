function getXMLHttpRequest() {
	var xhr = null;
	
	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest(); 
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}
	
	return xhr;
}

function	showAllTaches(){
	//console.log("on essaye d'afficher tous nos articles");

	var xhr = getXMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			var tabTaches = JSON.parse(xhr.response);
			//console.log(tabTaches);

			var allTaches = document.getElementById('Taches');
			while (allTaches.firstChild) allTaches.removeChild(allTaches.firstChild);

			tabTaches.forEach(function (tache){

				/* templating de la conversation */
				var elem = document.createElement('tr');
	  			var todo = '<td>'+tache.content+'</td><td><button type="button" class="btn btn-primary">Modifier</button></td><td><button type="button" onClick="suppTache('+tache.id+', this.parentNode.parentNode.rowIndex)" class="btn btn-danger">Supprimer</button></td>';
	  			elem.innerHTML = todo;
	  			allTaches.appendChild(elem);

			});
		}
	};

	xhr.open("GET", "getAllTache.php", true);
	xhr.send(null);
}

function	addTache(){
	var tache = document.getElementById('tache').value;

	//console.log("voici la nouvelle tache: "+tache);

	/* Envoi en AJAX*/

	var xhr = getXMLHttpRequest();

	xhr.onreadystatechange = function() {
		var status = JSON.parse(xhr.response);

		if (xhr.readyState == 4 && xhr.status == 200 && status.ajout == "ok") {
			console.log("votre tache a ete ajouter");
			showAllTaches();
		}
	};

	xhr.open("POST", "addTache.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("tache="+tache);
}



function	suppTache(idTache, tabRow){

	//console.log(idTache, tabRow);

	var xhr = getXMLHttpRequest();

	xhr.onreadystatechange = function() {
		//console.log(xhr.response);
		if (xhr.readyState == 4 && xhr.status == 200 && xhr.response) {
				
				var response = JSON.parse(xhr.response);
				document.getElementById("tabTaches").deleteRow(tabRow);
				showAllTaches();
				
		}
	};

	xhr.open("GET", "suppTache.php?tacheId="+idTache, true);
	xhr.send(null);
}

