document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName('close')[0];

    // Show the modal
    modal.style.display = 'block';

    // Close the modal when clicking the close button
    span.onclick = function() {
        modal.style.display = 'none';
    };

    // Close the modal when clicking outside the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});