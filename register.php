<html>
<head>
<title>REGISTER</title>
  

</head>
<body>
  <form action="register.php" method="POST">
    Minecraft IGN (In Game Name): <input type="text" name="username">
    <br />Password:<input type="password" name="password">
    <br />Confirm Password:<input type="password" name="repassword">
    <br /><input type="submit" name="submit" value="Register"> or <a href="login.php">Login</a>
</body>
</html>
<?php
$username = @$_POST['username'];
$username = @$_POST['password'];
$username = @$_POST['repassword'];

if(isset($_POST['submit'])){
  echo "Username - ".$username"
  echo "Passoword - ".$password"
  echo "Repassword - ".$repassword"
?>
