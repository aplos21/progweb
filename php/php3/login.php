<?php
  session_start();
  if($_POST[login] == 'demo' && $_POST[senha] == 'demo'){
    $_SESSION['logado'] = true;
    header("Location: http://localhost/progweb/php/php2/index.php");
	}

  if(!isset($_SESSION['logado'])){
    header("Location: erro.php");
  }
?>
