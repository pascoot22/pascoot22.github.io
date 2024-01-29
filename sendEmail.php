<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST["message"];
    $to = "pscotty33@gmail.com"; // Replace with your actual email address
    $subject = "New Contact Form Submission";

    $body = "Message: $message";

    // Additional headers
    $headers = "From: webmaster@example.com"; // Replace with your email address

    // Send the email
    mail($to, $subject, $body, $headers);

    // You can send a response back to the JavaScript if needed
    echo "Email sent successfully.";
} else {
    // Return an error response if the request method is not POST
    header("HTTP/1.1 405 Method Not Allowed");
    echo "Method Not Allowed";
}
?>
