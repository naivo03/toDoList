<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8"> <!--charset pour comprendre le francais (accents, cedille, etc..) sinon met des @, #,etc...-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>To do list</title> <!--nom onglet-->

    <!-- Bootstrap core CSS -->
    <link href="assets/bootstrap.min.css" rel="stylesheet">
</head>

<body>
	<div class="container">
		<h1>TO DO LIST</h1>
		<form class="form-inline">

			<div class="form-group">
		    	<p><label for="tache">Tache</label></p>
		    	<textarea name="content" class="form-control" id="tache"></textarea>
	  		</div>

			
			<p><button type="button" onClick="addTache()" class="btn btn-success">Creer</button></p>

		</form>

		<div class="table-responsive">
		  <table id="tabTaches" class="table table-striped" >
		  	<thead>
		  		<tr>
		  			<th>Taches</th>
		  			<th>Modification</th>
		  			<th>Suppression</th>
		  		</tr>
		  	</thead>

		  	<tbody id="Taches">

		  	</tbody>
		  </table>
		</div>



	</div>

	<script type="text/javascript" src="assets/todolist.js"></script>
	<script type="text/javascript" src="assets/app.js"></script>
</body>
</html>