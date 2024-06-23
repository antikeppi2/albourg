<?php
require 'config.php';
if(isset($_POST['submit'])){
  $username = @$_POST['username'];
  $username = @$_POST['password'];
  $username = @$_POST['repassword'];
  $duplicate = mysqli_query($conn, "SELECT * FROM tb_user WHERE username = '$username'");
  if(mysqli_num_rows($duplicate) > 0){
    echo
    "<script> alert('Username Has Already Been Used')</script>";
  } else {
    if($password == $confirmpassword) {
      $query = "INSERT INTO tb_user VALUES('','$username','$password')";
      mysqli_query($conn,$query);
      echo
      "<script> alert('Registration Successful')</script>";
    } else {
      echo
      "<script> alert('Password Does Not Match')</script>";
    }
  }
}
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
      <meta charset="utf-8">
      <title>Registration</title>
  </head>
  <body>
    <h2>Registration</h2>
    <form class="" actions="" method="post" autocomplete="off">
      <label for="username">Username : </label>
      <input type="text" name="username" id = "username" required value=""> <br>
      <label for="password">Password : </label>
      <input type="password" name="password" id = "password" required value=""> <br>
      <label for="confirmpassword">Confirm Password : </label>
      <input type="password" name="confirmpassword" id = "confirmpassword" required value=""> <br>
      <button type="submit" name="submit">Register</button>
    </form>
    <br>
    <a href="login">Login</a>
  </body>
