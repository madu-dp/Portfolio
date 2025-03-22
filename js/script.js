/* toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/* Scroll sections active link*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let currentSection = '';
    
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            currentSection = id;
        }
    });
    
    // Remove active class from all links and add to current section link
    navlinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });

    /*Sticky navbar*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*remove toggle icon and navbar when scroll*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/*scroll reveal*/
ScrollReveal({  
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* typed js*/

const typed = new Typed('.mutliple-text',{
    strings: ['UI Designer.','Frontend Developer.','Youtuber.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})

let certificates = [
    "/images/CC-BA0204BBAA.jpg",
    "/images/Certification of Competition-SQL.jpg",
    "/images/CertificateOfCompletion_React Essential Training.jpg",
    "/images/MS Champs November.jpg",
    "/images/ijse.jpeg"
];
let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    document.getElementById("fullCertificate").src = certificates[currentIndex];
    document.getElementById("certificateModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
}

function prevCertificate() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : certificates.length - 1;
    document.getElementById("fullCertificate").src = certificates[currentIndex];
}

function nextCertificate() {
    currentIndex = (currentIndex < certificates.length - 1) ? currentIndex + 1 : 0;
    document.getElementById("fullCertificate").src = certificates[currentIndex];
}

// Initialize EmailJS
(function() {
    emailjs.init("xPL2Y4_AdHjIvdEbN"); // Keep your public key
})();

function sendEmail() {
    const name = document.getElementById('user_name').value;
    const email = document.getElementById('user_email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill all the fields');
        return;
    }

    const templateParams = {
        name: name,
        email: email,
        message: message,
        subject: `Portfolio Contact from ${name}`
    };

    emailjs.send('service_qokrx9b', 'template_o2g7srk', templateParams)
        .then(function() {
            alert(`Thank you ${name}! I will get back to you soon.`);
            // Clear form fields
            document.getElementById('user_name').value = '';
            document.getElementById('user_email').value = '';
            document.getElementById('message').value = '';
            // Alternative method to clear form
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.error('Failed to send message:', error);
            alert('Sorry, there was an error. Please try again or email me directly at madushitharaka1913@gmail.com');
        });
}

/* Add click event listeners to navigation links */
document.addEventListener('DOMContentLoaded', function() {
    // Make navigation links smooth scroll to sections
    navlinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
            
            // Close mobile menu when a link is clicked
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        });
    });

    // Add form validation before submission
    const contactForm = document.getElementById('contact-form');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        validateAndSubmit();
    });
});

// Improved form validation and submission
function validateAndSubmit() {
    const name = document.getElementById('user_name');
    const email = document.getElementById('user_email');
    const message = document.getElementById('message');
    
    // Reset previous error styling
    [name, email, message].forEach(field => {
        field.style.borderColor = '';
    });
    
    // Validate fields
    let isValid = true;
    
    if (!name.value.trim()) {
        name.style.borderColor = 'red';
        isValid = false;
    }
    
    if (!email.value.trim() || !isValidEmail(email.value)) {
        email.style.borderColor = 'red';
        isValid = false;
    }
    
    if (!message.value.trim()) {
        message.style.borderColor = 'red';
        isValid = false;
    }
    
    if (isValid) {
        sendEmail();
    } else {
        alert('Please fill all fields correctly');
    }
}

// Email validation helper
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Fix navigation active state and smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Fix mobile menu toggle
    menuIcon.addEventListener('click', function() {
        this.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
    
    // Add additional click events to properly close the mobile menu
    navlinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        });
    });
    
    // Initialize the active state on page load
    updateActiveLink();
});

// Helper function to update active navigation link
function updateActiveLink() {
    let scrollPosition = window.scrollY + 150; // Adjust offset for better detection
    
    // Find the current section in view
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.offsetTop) {
            const id = section.getAttribute('id');
            
            // Remove active class from all links
            navlinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to current section link
            const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
            break;
        }
    }
}

// Use a throttled scroll event for better performance
let throttleTimer;
window.addEventListener('scroll', function() {
    if (throttleTimer) return;
    
    throttleTimer = setTimeout(function() {
        updateActiveLink();
        
        // Apply sticky header
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
        
        throttleTimer = null;
    }, 100);
});

