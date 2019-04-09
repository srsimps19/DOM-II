
// ===============================================
//                   Main
// ===============================================

wireNavItems();
wireH2s();

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

function wireH2s() {
    const h2s = [...document.querySelectorAll('h2')]
    h2s.forEach(h2 => {
        // img.addEventListener('dblclick', renderModal)
        h2.addEventListener('dblclick', event => {
            event.target.style.backgroundColor = '#17a2b8'
        })
    })
}

// function renderModal(event) {
//     event.target.classList.remove('modal--on')
//     if (!(Array.from(event.target.classList).includes('modal'))) {
//         event.target.classList.add('modal')
//     }
//     event.target.classList.add('modal--off')
//     console.log(event.target.classList)
// }

// function hideModal(evtTarget) {
//     evtTarget.classList.remove('modal--off')
//     evtTarget.classList.add('modal--on')
//     console.log(evtTarget.classList)
// }
