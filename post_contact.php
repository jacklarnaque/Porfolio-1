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
      echo '<pre>';
      var_dump($data);
      echo '</pre>';
      return $data;
    }

    $msg = wordwrap($msg, 70, "\r\n");
  }
  $mail = validateData($_POST['mail']);
  $nom = validateData($_POST['name']);
  $prenom = validateData($_POST['firstname']);
  $msg = validateData($_POST['message']);
  $company = validateData($_POST['company']);

  echo'<pre>';
  var_dump($mail);
  var_dump($nom);
  var_dump($prenom);
  var_dump($company);
  var_dump($msg);
  echo'</pre>';

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
  <p style = "color: blue"> vous pouvez lui répondre à l\'adresse email suivante :</p>
  </html>
  ';
  $message .= $mail;
  
  // END Message

  var_dump($message);

  
  $to = "contact@webdev72.fr";
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

echo '<pre>';
var_dump($_POST);
echo '</pre>';

sendMail();
