<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
require __DIR__ . '/vendor/autoload.php';


if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['url']))
$url = $_POST['url'];
if(isset( $_POST['acatoken']))
$acatoken = $_POST['acatoken'];
$roboco = $_POST['pacabotrobjim'];

     $mail = new PHPMailer();

// specify SMTP credentials
        $mail->isSMTP();
        $mail->Host = 'smtp.zoho.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'noreply@acatoken.io';
        $mail->Password = 'Norep@aca!2021@123';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
        $mail->SMTPDebug = 2;
        $mail->SMTPOptions = array(
   'ssl' => array(
             'verify_peer' => false,
             'verify_peer_name' => false,
             'allow_self_signed' => true
            )
        );

        $mail->setFrom('noreply@acatoken.io', 'ACATOKEN');
        $mail->addAddress('support@acatoken.io', 'ACATOKEN');
        $mail->Subject = 'New Message From ACATOKEN';
 
        // Enable HTML if needed
        $mail->isHTML(true);

        $bodyParagraphs = [
                "From: {$email}",
                "Subject: New Support Request",
                "You have a new enquiry from {$email}",
                "-------------------------------------------------------------------------",
                "Enquiry Details:", 
                "Email: {$_POST['email']}",
                "Title: {$_POST['title']}",
                "Description {$_POST['description']}",
                
                ];
                $body = join('<br />', $bodyParagraphs);
                $mail->Body = $body;

       
          if(!isset($roboco) || trim($roboco) == '')
         {
          if($mail->send()){

                header('Location: faq.html');
            } else {
                $errorMessage = 'Oops, something went wrong. Mailer Error: ' . $mail->ErrorInfo;
                var_dump($errorMessage);
            

        }
       }else{
    header('Location: index.html');
       }
           

?>