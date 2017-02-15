<?php 
	require_once('TacheRepository.php');

	TacheRepository::removeTacheById($_GET['tacheId']);
	exit;
 ?>