<?php 
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    isset($_POST["site"]) ? $site = $_POST["site"] : $site ="";
    isset($_POST["mensagem"]) ? $mensagem = $_POST["mensagem"] : "";    
?>

<!DOCTYPE html>
<head>    
    <title>Imprimindo Dados</title>
</head>
<body>
    <span>Nome: <?= $nome ?> </span> <br>
    <span>E-mail: <?= $email ?> </span> <br>
    <span>Site: <?= $site ?> </span> <br> 
    <span>Mensagem: <?= $mensagem ?> </span> <br>
</body>
</html>
