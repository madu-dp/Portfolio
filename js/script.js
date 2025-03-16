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
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            })
        }
    })

    /*Sticky navbar*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*remove toggole icon and navbar when click navbar link(scroll)*/
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
    strings: ['UI/UX Designer.','Frontend Developer.','Mobile Application Developer.','Youtuber.'],
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

