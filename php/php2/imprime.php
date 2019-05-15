<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Dados</title>
  </head>
  <body>
    <h1>Dados do Formulário</h1>
    <?php
      $user = 'root';
      $psw = 'icomp123';

      try {
        $conn = new PDO('mysql: host=localhost; dbname=ski-free', $user, $psw);
        $conn->exec("set names utf-8");

        $query = $conn->query("SELECT nome, email, site, mensagem FROM mensagem");
        while($row = $query->fetch(PDO::FETCH_OBJ)){
  			     echo 'Nome:  ' . $row->nome . ' ';
             echo '</br>';
             echo 'Email:  ' . $row->email . ' ';
             echo '</br>';
             echo 'Site:  ' . $row->site . ' ';
             echo '</br>';
             echo 'Mensagem:  '. $row->mensagem .  ' ';
             echo '</br>'; echo '</br>';
  		  }
      } catch (Exception $e) {
          echo $e -> getMessage();
      }

    ?>
  </body>
</html>
