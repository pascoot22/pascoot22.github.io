<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST["message"];
    $to = "pscotty33@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";

    // You can customize the email body as needed
    $body = "Message: $message";

    // Additional headers
    $headers = "pscotty33@gmail.com"; // Replace with your email address

    // Send the email
    mail($to, $subject, $body, $headers);
}
?>
