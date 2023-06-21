<?php

use PHPMailer\PHPMailer\PHPMailer;
require __DIR__ . '/vendor/autoload.php';

error_reporting(E_ALL);
ini_set('display_errors', '1');


if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['url']))
$url = $_POST['url'];
if(isset( $_POST['acatoken']))
$acatoken = $_POST['acatoken'];

//$roboco = $_POST['pacabotrobjim'];

// $mail = new PHPMailer();

//google sheets integration

    $client = new \Google_Client();

    $client->setApplicationName('ACA TOKEN SOCIAL CLAIMS');

    $client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);

    $client->setAccessType('offline');

    $client->setAuthConfig(__DIR__ . '/credentials.json');

    $service = new Google_Service_Sheets($client);

    $spreadsheetId = "1wR5Jl9jLYl4AQAqCMEJ3TBNK8uUNpj5sgOzSfQZLK8M"; //It is present in your URL

    $get_range = "A1:G1";

    //Request to get data from spreadsheet.

    $response = $service->spreadsheets_values->get($spreadsheetId, $get_range);

    $values = $response->getValues();
    $amt = $str = preg_replace('/[^0-9.]+/', '', $_POST['reward_amount']);
    
    $range = 'A1:B1';
        $values = [
            [
                $email,
                $url,
                $acatoken.','.$amt,
                "{$_POST['reward_title']}",         
            ],
        ];


        $body = new Google_Service_Sheets_ValueRange([
            'values' => $values
        ]);
        $params = [
            'valueInputOption' => 'USER_ENTERED'
        ];
        $result = $service->spreadsheets_values->append($spreadsheetId, $range, $body, $params);
        header('Location: rewards.html');


    // var_dump($response);


// specify SMTP credentials
   //       $mail->isSMTP();
   //       $mail->Host = 'smtp.zoho.com';
   //    $mail->SMTPAuth = true;
   //     $mail->Username = 'noreply@acatoken.io';
   //      $mail->Password = 'Norep@aca!2021@123';
   //      $mail->SMTPSecure = 'tls';
   //      $mail->Port = 587;
   //      $mail->SMTPDebug = 2;
   //      $mail->SMTPOptions = array(
   // 'ssl' => array(
   //           'verify_peer' => false,
   //           'verify_peer_name' => false,
   //           'allow_self_signed' => true
   //          )
   //      );

   //      $mail->setFrom('noreply@acatoken.io', 'ACATOKEN');
   //      $mail->addAddress('social@acatoken.io', 'ACATOKEN');
   //      $mail->Subject = 'New Message From ACATOKEN';

   //      // Enable HTML if needed
   //      $mail->isHTML(true);

   //      $bodyParagraphs = [
   //              "From: {$email}",
   //              "Subject: Social Mining Claim Reward Review",
   //              "You have a new claim to review from {$email}",
   //              "Link to review: {$url}",
   //              "ACA Token Wallet Address: {$acatoken}",
   //              "-------------------------------------------------------------------------",
   //              "Rewards Details:", 
   //              "{$_POST['reward_title']}",
   //              "{$_POST['reward_description']}",
   //              "{$_POST['reward_amount']}",
   //              "{$_POST['reward_type']}",
   //              "{$_POST['reward_network']}"
   //              ];
   //              $body = join('<br/>', $bodyParagraphs);
   //              $mail->Body = $body;
   //         $user_ip = $_SERVER['REMOTE_ADDR'];

        
        
   //      if(isset($_COOKIE['IPADDR']) == $user_ip){

   //              header('Location: index.html');

   //      }else{
        
   //        setcookie('IPADDR',$user_ip, time() + (86400 *30));//set for a day

   //        if(!isset($roboco) || trim($roboco) == '')
   //         {
   //          if($mail->send()){

   //              header('Location: rewards.html');
   //          } else {
   //              $errorMessage = 'Oops, something went wrong. Mailer Error: ' . $mail->ErrorInfo;
   //              var_dump($errorMessage);
   //          }
   //      }else{
   //         header('Location: index.html');
   //       }

   //  } 
       
       header('Location: rewards.html');

        

?>