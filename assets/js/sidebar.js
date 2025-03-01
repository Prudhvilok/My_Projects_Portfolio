document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".dropdown-toggle").forEach(function(btn) {
        btn.addEventListener("click", function() {
            let dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle("active");
        });
    });
});
