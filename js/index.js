// Your code goes here
function getNavItems(){
    const header = document.querySelector('.main-navigation');
    const navLinks = header.querySelectorAll('nav-link');
    return {
        header, 
        logoHeading: header.querySelector('.logo-heading'),
        nav: header.querySelector('nav'),
        home: navLinks[0],
        aboutUs: navLinks[1],        
        blog: navLinks[2],
        contact: navLink[3],
    }
} 

