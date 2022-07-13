<?php

function sendMail()
{
  function validateData($data)
  {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
  
    
    if (!empty($data))
    {
      return $data;
    }

  }

  $mail = validateData($_POST['mail']);
  $nom = validateData($_POST['name']);
  $prenom = validateData($_POST['firstname']);
  $msg = validateData($_POST['message']);
  $company = validateData($_POST['company']);
  $msg = wordwrap(($_POST['message']), 70, "\r\n");

  // START Message
  
  $message = '
  <html>
  <h2 style = "color: blue">Bonjour,</h2>
  </html>
  ';
  $message .= $nom . ' ' . $prenom . ' <strong>de l\'entreprise ou association : </strong>' . $company;
  $message .= '
  <html>
  <p style = "color: blue"> vient de vous envoyer un message depuis le formulaire de contact de votre site :</p>
  </html>
  ';
  $message .= $msg;
  $message .= '
  <html>
  <p style = "color: blue"> Vous pouvez lui répondre à l\'adresse email suivante :</p>
  </html>
  ';
  $message .= $mail;
  
  // END Message

  
  $to = "vesque.cedric@bbox.fr";
  $subject = "Un message depuis votre site";
  $headers = "Content-Type: text/html; charset=utf-_8\r\n";
  $headers .= "From: $mail";
  
  if (mail ($to, $subject, $message, $headers)) {
    header ('Location: index.php');
  }
  else
  {
    echo 'Erreur envoi!';
  }
}
sendMail();
