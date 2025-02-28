const images = document.querySelectorAll('.image-container img');
let currentIndex = 0;

function showNextImage() {

    images[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000);

images[currentIndex].classList.add('active');


// =========================================
document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const agree = document.getElementById('agree').checked;

    if (!name) {
        alert('Please enter your name');
        return;
    }

    if (!email || !email.includes('@')) {
        alert('Please enter a valid email');
        return;
    }

    if (!agree) {
        alert('Please agree to the privacy policy');
        return;
    }

    alert('The form has been successfully submitted!');
    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Согласие:', agree);

    this.reset();
});


// =================MAP--=================/

function initMap() {
    var myLatLng = { lat: 40.7128, lng: -74.0060 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10, 
        center: myLatLng 
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'New York'
    });
}


// ====================scroll section2======================

document.addEventListener('scroll', function() {
    const sectionRight = document.querySelector('.section__inner-right');
    const sectionLeft = document.querySelector('.section__inner-left');
    const sectionRightPosition = sectionRight.getBoundingClientRect().top;
    const sectionLeftPosition = sectionLeft.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionRightPosition < screenPosition) {
        sectionRight.classList.add('visible');
    }

    if (sectionLeftPosition < screenPosition) {
        sectionLeft.classList.add('visible');
    }
});

// ==================scroll section3====================

document.addEventListener('scroll', function() {
    const contactForm = document.querySelector('.contact-form');
    const formPosition = contactForm.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (formPosition < screenPosition) {
        contactForm.classList.add('visible');
    }
});
