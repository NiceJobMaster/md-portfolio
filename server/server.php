<?php 
if(isset($_POST)){
    $to = "biuro@woodpeckers-productions.pl";
    $data = json_decode(file_get_contents('php://input'), true);
    $from = $data['email'];
    $first_name = $data['first_name'];
    $last_name = $data['last_name'];
    $subject = "Złożenie formularza";
    $subject2 = "Kopia przesłanego formularza";
    $message = $from . " ". $first_name . " " . $last_name . " napisał wiadomość:" . "\n\n" . $data['message'];
    $message2 = "Oto kopia Twojej wiadomości wysłana do " . $to . "\n\n" . $data['message'];

    $headers = "Od:" . $from;
    $headers2 = "Od:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2);
    echo json_encode("Wiadomość wysłana. Dziękuję " . $first_name . ", skontaktujemy się z Tobą wkrótce.");
    }
?>