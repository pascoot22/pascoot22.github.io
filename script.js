function openPDF(pdfPath, closePath, closePath2) {
    var openButtons = document.querySelectorAll('[id^="openButton"]');
    
    openButtons.forEach(function(button) {
        button.style.display = "block";
    });
    
   
    var pdfContainer = document.getElementById(pdfPath);
    pdfContainer.height = "600px";

    var pdfContainer = document.getElementById(closePath);
    pdfContainer.height="0px";
    var pdfContainer = document.getElementById(closePath2);
    pdfContainer.height="0px";


    
}


