<?php

use PHPMailer\PHPMailer\PHPMailer;
require __DIR__ . '/vendor/autoload.php';

if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['url']))
$url = $_POST['url'];
if(isset( $_POST['acatoken']))
$acatoken = $_POST['acatoken'];

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
        $mail->addAddress('social@acatoken.io', 'ACATOKEN');
        $mail->Subject = 'New Message From ACATOKEN';

        // Enable HTML if needed
        $mail->isHTML(true);

        $bodyParagraphs = [
                "From: {$email}",
                "Subject: Social Mining Claim Reward Review",
                "You have a new claim to review from {$email}",
                "Link to review: {$url}",
                "ACA Token Wallet Address: {$acatoken}",
                "-------------------------------------------------------------------------",
                "Rewards Details:", 
                "{$_POST['reward_title']}",
                "{$_POST['reward_description']}",
                "{$_POST['reward_amount']}",
                "{$_POST['reward_type']}",
                "{$_POST['reward_network']}"
                ];
                $body = join('<br />', $bodyParagraphs);
                $mail->Body = $body;

        if(!isset($_POST['pacabotrobjim'])){
            var_dump($_POST['pacabotrobjim']);
        }else{

            if($mail->send()){

                header('Location: rewards.html');
            } else {
                $errorMessage = 'Oops, something went wrong. Mailer Error: ' . $mail->ErrorInfo;
                var_dump($errorMessage);
            }

        }

?>