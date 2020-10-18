// Step 1: Hide all elements
disableAll('.entry__summary')
disableAll('.entry')

document.getElementById('cases').style.display = 'flex'

const menuItems = document.querySelectorAll('.nav__item')

for (let i = 0; i < menuItems.length; i++) {

    if (menuItems[i].getAttribute('href') == '#cases') {
        menuItems[i].classList.add('nav__item_active')
    }

    menuItems[i].addEventListener('click', revealData, false)
}

function revealData() {
    const id = this.getAttribute('href')

    // Open detail-summary 
    document.querySelector(id).open = true

    // Make element active
    makeLinkActive(this)

    disableAll('.entry')

    document.querySelector(id).style.display = 'flex'
}

function disableAll(classname) {
    const entryDetails = document.querySelectorAll(classname)

    for (let i = 0; i < entryDetails.length; i++) {
        entryDetails[i].style.display = 'none'
    }
}

function makeLinkActive(element) {
    const menuItems = document.querySelectorAll('.nav__item')

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('nav__item_active')
    }

    // Make element active
    element.classList.add('nav__item_active')
}
