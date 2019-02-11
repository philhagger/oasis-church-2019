<?php
    print_r($_POST);

    $to_email = "philip.hagger@gmail.com";
    $subject = "Oasis Website: $_POST[name] wants to get in touch";
    $body = $_POST[message];
    $from_email = "info@theoasis.church";

    mail($to_email, $subject, $body, "From : $from_email rn")


    // if(mail($to_email, $subject, $body, "From : $from_email rn")){
    //     echo "Email sent successfully";
    // }else{
    //     echo "Email sending failed";
    // }

?>