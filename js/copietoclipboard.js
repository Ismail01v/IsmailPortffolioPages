function myFunction() {
    // Get the text field
    var copyText = document.getElementById("Contact");
    
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.vb );
    
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  
  }