document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('All fields are required!');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address!');
        } else {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Interactive menu
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Dynamic content update
    const detailsSection = document.getElementById('details');
    const dynamicContentButton = document.createElement('button');
    dynamicContentButton.textContent = 'Load More Details';
    detailsSection.appendChild(dynamicContentButton);

    dynamicContentButton.addEventListener('click', () => {
        const newContent = document.createElement('p');
        newContent.textContent = 'This is additional dynamic content loaded on button click.';
        detailsSection.appendChild(newContent);
    });
});
