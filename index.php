<?php 

if (isset($_POST["email"]))
{
    echo $_POST["email"];

    mail("thesoreply@seznam.cz", "First mail", "Test");
}
else
{
    echo "Failure!";
}

?>