<?php
   try {
     $user = 'root';
     $psw = 'icomp123';
     $conn = new PDO('mysql: host=localhost; dbname=ski-free', $user, $psw);
     $conn->exec("set names utf-8");

     $stmt = $conn->prepare('INSERT INTO mensagem (nome, email, site, mensagem) VALUES (:nome, :email, :site, :mensagem)');
     $stmt->bindValue(':nome',$_POST['nome']);
     $stmt->bindValue(':email',$_POST['email']);
     $stmt->bindValue(':site',$_POST['site']);
     $stmt->bindValue(':mensagem',$_POST['mensagem']);
     $stmt->execute();
   } catch (PDOException $e) {
     echo $e -> getMessage();
   }

   header('location: imprime.php');
?>
