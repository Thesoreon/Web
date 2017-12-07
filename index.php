<?php 

if (isset($_POST["email"]))
{
    echo $_POST["email"];
}
else
{
    echo "Failure!";
}

?>