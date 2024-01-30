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

function openPDF(pdfPath, closeButtonId, openButtonId) {
    
    closeAllPDFs();
    
    var pdfContainer = document.getElementById("pdfContainer");
    var pdfEmbed = document.getElementById("pdfEmbed");
    var closeButton = document.getElementById(closeButtonId);
    var openButton = document.getElementById(openButtonId);

    // Close any other open PDFs
    

    pdfEmbed.src = pdfPath;
    pdfContainer.style.display = "block";
    closeButton.style.display = "block";
    openButton.style.display = "none";
}

function closePDF(openButtonId, closeButtonId) {
    var pdfContainer = document.getElementById("pdfContainer");
    var pdfEmbed = document.getElementById("pdfEmbed");
    var closeButton = document.getElementById(closeButtonId);
    var openButton = document.getElementById(openButtonId);

    pdfEmbed.src = "";
    pdfContainer.style.display = "none";
    closeButton.style.display = "none";
    openButton.style.display = "block";
}

function closeAllPDFs() {
    var openButtons = document.querySelectorAll('[id^="openButton"]');
    var closeButtons = document.querySelectorAll('[id^="closeButton"]');

    openButtons.forEach(function(button) {
        button.style.display = "block";
    });

    closeButtons.forEach(function(button) {
        button.style.display = "none";
    });
}
