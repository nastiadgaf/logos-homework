<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  
    <div id="form2" class="forms">
        <div class="top_green"></div>
        <div class=<?php $_REQUEST['gender']?>></div>
        <p class="name" ><?= $_REQUEST['name']?><?= $_REQUEST['surname']?></p>
        <p class="email"><?= $_REQUEST['email']?></p>
        <p class="proffesion"></p>
        <input type="submit" value="Sign out"  id="signOut">
        <div class="bottom_green"></div>
    </div>


</body>
</html>