<?php
  $to      = '';
  $subject = 'agentur-vergleiche';

  $radio1 = $_POST['step-1'];
  $radio3 = $_POST['step-3'];
  $radio4 = $_POST['step-4'];
  $radio5 = $_POST['step-5'];
  $radio6 = $_POST['step-6'];
  $radio7 = $_POST['step-7'];
  $agreement = $_POST['agreement'];
  $branches = $_POST['branches'];

  $name = $_POST['user_name'];
  $email = $_POST['user_email'];
  $phone = $_POST['user_phone'];

  $c = "\r\n";

  $text_message =
  '1. Um welche Projektart handelt es sich?' . $c . $radio1 . $c .
  '2. In welcher Branche sind Sie tätig?' . $c . $branches . $c .
  '3. Was soll gemacht werden?' . $c . $radio3 . $c .
  '4. Ist ein Domain- und Hostingpaket vorhanden?' . $c  . $radio4 . $c .
  '5. Wer soll die Inhalte pflegen?' . $c . $radio5 . $c .
  '6. Wann soll das Projekt abgeschlossen sein?' . $c  . $radio6 . $c .
  '7. Wie hoch ist Ihr Budget für dieses Projekt?' . $c  . $radio7 . $c .
  'Name: ' . $name . $c .
  'Email: ' . $email . $c .
  'Phone: ' . $phone;

  $headers = 'From: getplanr.ch' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();
  mail($to, $subject, $text_message, $headers);


  header("Location: index.html");
  exit;
?>
