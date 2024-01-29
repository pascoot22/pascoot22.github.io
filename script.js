function sendEmail() {
    var message = document.getElementById("message").value;

    // Perform basic client-side validation
    if (message.trim() === "") {
        alert("Please enter a message.");
        return;
    }

    // Send the data to the server-side script using a method like AJAX
    var xhr = new XMLHttpRequest();
    var url = "sendEmail.php"; // Replace with the actual server-side script URL
    var params = "message=" + encodeURIComponent(message);

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Handle the server's response if needed
            alert(xhr.responseText);
        }
    };

    xhr.send(params);
}

function openPDF() {
    var pdfContainer = document.getElementById("pdfContainer");
    pdfContainer.style.display = "block";

    var pdfButton = document.getElementById("pdfButton");
    pdfButton.style.display = "none";
}

