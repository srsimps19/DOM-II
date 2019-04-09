
// ===============================================
//                   Main
// ===============================================

wireNavItems();

// ===============================================
//                  Helpers
// ===============================================

function wireNavItems() {
    const navItems = [...document.querySelectorAll('nav .nav-link')]
    navItems.forEach(item => {
        item.addEventListener('mouseover', event => {
            event.target.style.color = "#FFEBCD"
        })
        item.addEventListener('mouseleave',  event => {
            event.target.style.color = 'black'
        })
        item.addEventListener('click',  event => {
            event.preventDefault()
        })
    })
} 

