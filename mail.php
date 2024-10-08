<?php

$name = $_POST["name"];
$company = $_POST["company"];
$from = $_POST["mail"];
$subject = "Wiadomość z formularza kontaktowego PROcess Consulting.";
$to = "kontakt@processconsulting.pl";
$message = $_POST["msg"];

$txt = "Imię i nazwisko: " . $name . "\r\n" . "Nazwa firmy: " . $company . "\r\n" . "Email: " . $from . "\r\n" . "Wiadomość: " . $message;

$headers = "From: " . $from "\r\n";
$headers .= "Reply-To: " . $from "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status) {
    header("Location: /kontakt.html?mail_status=sent");
} else{
    header("Location: /kontakt.html?mail_status=error");

}

