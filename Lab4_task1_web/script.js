document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.color-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const color = button.getAttribute('data-color');
            document.body.style.backgroundColor = color;
        });
    });
});
