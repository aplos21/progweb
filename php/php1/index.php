<!DOCTYPE html>
<head>
    <meta charset="UTF-8">        
    <title>Formulário de Contato</title>
</head>
<body>
    <h1>Formulário de Contato</h1>
    <p>Por favor, preencha o formulário abaixo e clique no botão <em>Enviar</em>. <br> Agradecemos seu contato</p>
    
    <div>
        <form action="dados.php" method="post">
            <fieldset>
                <legend>Dados Básicos</legend>
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome"> <br>
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" required placeholder="seunome@mail.com"> <br>
                <label for="site">Site</label>
                <input type="text" id="site"  name="site" value="http://"> <br>
            </fieldset>
            
            <fieldset>
            <legend>Digite sua mensagem</legend>
            <textarea id="mensagem" cols="80" rows="8" name="mensagem"></textarea>
            </fieldset>
            
            <button type="submit">Enviar</button>
        </form>
        
    </div>
</body>
</html>