<?php 

require "autoload.php";

$m = new PHPMailer\PHPMailer\PHPMailer();

$m->isSMTP();
$m->SMTPAuth = true;
$m->SMTPDebug = 0;

$m->SMTPOptions = array(
                    'ssl' => array(
                        'verify_peer' => false,
                        'verify_peer_name' => false,
                        'allow_self_signed' => true
                    )
                );

$m->Host = "smtp.seznam.cz";
$m->Username= "thesoreply@seznam.cz";
$m->Password = "28m9vnce";
$m->SMTPSecure = "tls";
$m->Port = 25;

$m->From = "thesoreply@seznam.cz";
$m->FromName = "Thesoreon corporation";
$m->addReplyTo("thesoreply@seznam.cz", "Reply address");
$m->addAddress("thesoreply@seznam.cz", "Thesoreon");

$m->Subject = "Reply";
$m->Body = $_POST["message"] . "<br />" . $_POST["email"];
$m->AltBody = "We have received your apply, thank you!";

var_dump($m->send()); //true or false

?>