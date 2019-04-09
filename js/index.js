
// ===============================================
//                   Main
// ===============================================

window.onload = greetUser
prepareImagesForAnimation()
wireImgScrollAnimation()
wireNavItems()
wireH2s()
createForm()


// ===============================================
//                  Helpers
// ===============================================

function greetUser() {
    alert('Welcome to the Fun Bus!')
    console.log('welcome')
}

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

function prepareImagesForAnimation() {
    const funBus = document.getElementById('funBus') // l
    const adventure = document.getElementById('adventure') // r
    const fun = document.getElementById('fun') // l
    const destination = document.getElementById('destination') // r

    funBus.classList.add('left', 'slide-in')
    fun.classList.add('left', 'slide-in')

    adventure.classList.add('right', 'slide-in')
    destination.classList.add('right', 'slide-in')
}

function wireImgScrollAnimation () {
    window.addEventListener('scroll', debounce(checkSlide))
}

function debounce(func, wait = 20, immediate = true) {
    var timeout
    return function() {
        var context = this, args = arguments
        var later = function() {
            timeout = null
            if (!immediate) func.apply(context, args)
        }

        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}


function checkSlide() {
    const sliderImages = document.querySelectorAll('img')
    sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height
        const isHalfShown = slideInAt > sliderImage.offsetTop
        const isNotScrolledPast = window.scrollY < imageBottom
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active')
        } else {
            sliderImage.classList.remove('active')
        }
    })
}

function createForm() {
    const homeContainer = document.querySelector('.home')
    const container = document.createElement('section')
    const heading = document.createElement('h2')
    const form = document.createElement('form')
    const fName = document.createElement('input')
    const lName = document.createElement('input')
    const email = document.createElement('input')
    const emailLabel = document.createElement('label')
    const fNameLabel = document.createElement('label')
    const lNameLabel = document.createElement('label')

    heading.textContent = 'Contact'

    fName.placeHolder = 'Enter your first name'
    lName.placeHolder = 'Enter your last name'
    email.placeHolder = 'johndoe@example.com'
    fName.id = 'firstName'
    lName.id = 'lastName'
    email.id = 'email'

    emailLabel.textContent = 'Email'
    fNameLabel.textContent = 'First Name'
    lNameLabel.textContent = 'Last Name'
    fNameLabel.htmlFor = 'firstName'
    lNameLabel.htmlFor = 'lastName'
    emailLabel.htmlFor = 'email'
    

    container.appendChild(heading)
    container.appendChild(form)

    form.appendChild(fNameLabel)
    form.appendChild(fName)
    form.appendChild(lNameLabel)
    form.appendChild(lName)
    form.appendChild(emailLabel)
    form.appendChild(email)

    console.log(homeContainer)
    homeContainer.appendChild(container)
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
