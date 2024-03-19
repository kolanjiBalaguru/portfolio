/****************navbar*********************/ 

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick =()=>{
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active")
}



let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a')

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset + height){
            navLinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        };
    });

/***sticky navbar***/ 

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);



    /***remove toggle navbar***/
    
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin:'right'});



const typed = new Typed('.multiple-text',{
    strings:['Python Full Stack Developer','Backend Developer','Frontend Developer','Web Designer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true
});



document.getElementById('contact-from').addEventListener('submit',function(event){
event.preventDefault();
var data=new FormData(event.target);
fetch("https://mail.google.com/mail/u/0/#inbox",{
    method:'POST',
    body:data,
}).then(response=>{
    if(response.ok){
        alert('Success')
    }else{
        alert('Error')
    }
});
document.getElementById('contact-form').reset();
});
    
