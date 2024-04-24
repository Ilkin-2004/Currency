// https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_eI9vCmHvEFCXiVfhcbN24WpaQAAnz6dKouZw4qsE
const valyuta_left = document.querySelector('.valyuta-menu-left')
let first_Rub = valyuta_left.querySelector(':nth-child(1)')
let first_Usd = valyuta_left.querySelector(':nth-child(2)')
let first_Eur = valyuta_left.querySelector(':nth-child(3)')
let first_Gbp = valyuta_left.querySelector(':nth-child(4)')
let left_menu = valyuta_left.querySelectorAll('button')

const valyuta_right = document.querySelector('.valyuta-menu-right')
let second_Rub = valyuta_right.querySelector(':nth-child(1)')
let second_Usd = valyuta_right.querySelector(':nth-child(2)')
let second_Eur = valyuta_right.querySelector(':nth-child(3)')
let second_Gbp = valyuta_right.querySelector(':nth-child(4)')
let right_menu = valyuta_right.querySelectorAll('button')
let input_right = document.querySelector('.input_right')
let input_left = document.querySelector('.input_left')

function left_buttons() {
    let valyuta = ""
    left_menu.forEach((element) => {
        if (element.style.background === "purple") {
            valyuta = element.innerText;
        }
    })
    return valyuta;
}

function right_buttons() {
    let valyuta = ""
    right_menu.forEach((element) => {
        if (element.style.background === "purple") {
            valyuta = element.innerText;
        }
    })
    return valyuta;
}
function chanceFromRight(left_button, right_button, input_right) {
    fetch(`https://v6.exchangerate-api.com/v6/95640758702a8dbcee79e935/pair/${left_button}/${right_button}/${input_right.value}`)
        .then(responce => responce.json())
        .then((data) => {
            input_left.value = data.conversion_rate * input_right.value
        }).catch(error => console.log(error))
}
function chanceFromLeft(left_button, right_button, input_left) {
    fetch(`https://v6.exchangerate-api.com/v6/95640758702a8dbcee79e935/pair/${left_button}/${right_button}/${input_left.value}`)
        .then(responce => responce.json())
        .then((data) => {
            input_right.value = data.conversion_rate * input_left.value
        }).catch(error => console.log(error))
}

input_right.addEventListener("click", (even) => {
    let input_right = document.querySelector('.input_right')
    let input_left = document.querySelector('.input_left')
    let right_button = right_buttons();
    let left_button = left_buttons()
    if (right_button === "") {
        console.log("saq  bosdu")
        right_button = "RUB"
        chanceFromRight(left_button, right_button, input_right)
    }
    else {
        chanceFromRight(left_button, right_button, input_right)
    }
})
input_left.addEventListener("click", (even) => {
    let input_right = document.querySelector('.input_right')
    let input_left = document.querySelector('.input_left')
    let right_button = right_buttons();
    let left_button = left_buttons()
    if (right_button === "") {
        console.log("saq  bosdu")
        right_button = "RUB"
        chanceFromLeft(left_button, right_button, input_left)
    }
    else {
        chanceFromLeft(left_button, right_button, input_left)
    }
})
function change(left_button, right_button) {
    let input_right = document.querySelector('.input_right')
    let input_left = document.querySelector('.input_left')
    if (input_left.value === "") {
        input_left.value = 5000;
        if (right_button === "") {
            right_button = "RUB"
            chanceFromLeft(left_button, right_button, input_left)
        } else {
            console.log(left_button, right_button)
            chanceFromLeft(left_button, right_button, input_left)
        }
    }
    else {
        if (right_button === "") {
            console.log("saq bosdu")
            right_button = "RUB"
            console.log(left_button, right_button)
            chanceFromLeft(left_button, right_button, input_left)
        } else {
            chanceFromLeft(left_button, right_button, input_left)
        }
    }
}
function leftChangePurple(even) {
    left_menu.forEach((element) => {
        element.style.background = "none"
    })
    even.target.style.background = "purple";
}
function rightChangePurple(even) {
    right_menu.forEach((element) => {
        element.style.background = "none"
    })
    even.target.style.background = "purple";
}
left_menu.forEach((element) => {
    element.addEventListener('click', (even) => {
        leftChangePurple(even)
    })
})
right_menu.forEach((element) => {
    element.addEventListener('click', (even) => {
        rightChangePurple(even)
    })
})
left_menu.forEach((left_element) => {
    left_element.addEventListener('click', (even) => {
        if (left_element.style.background === "purple") {
            let right_button = right_buttons()
            let left_button = left_buttons()
            change(left_button, right_button)
        }
    })
})
right_menu.forEach((right_element) => {
    right_element.addEventListener('click', (event) => {
        if (event.target.style.background === "purple") {
            let right_button = right_buttons()
            let left_button = left_buttons()
            change(left_button, right_button)
        }
    })
})