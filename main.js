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
input_right.addEventListener("click", (even) => {
    let input_right = document.querySelector('.input_right')
    let input_left = document.querySelector('.input_left')
    let right_button = right_buttons();
    let left_button = left_buttons()
    if (right_button === "") {
        console.log("saq  bosdu")
        right_button = "RUB"
        fetch(`https://v6.exchangerate-api.com/v6/95640758702a8dbcee79e935/pair/${left_button}/${right_button}/${even.target.value}`)
            .then(responce => responce.json())
            .then((data) => {
                input_left.value = data.conversion_rate * input_right.value
            }).catch(error => console.log(error))
    }
    else {
        fetch(`https://v6.exchangerate-api.com/v6/95640758702a8dbcee79e935/pair/${left_button}/${right_button}/${even.target.value}`)
            .then(responce => responce.json())
            .then((data) => {
                input_left.value = data.conversion_rate * input_right.value
            }).catch(error => console.log(error))
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
        fetch(`https://v6.exchangerate-api.com/v6/95640758702a8dbcee79e935/pair/${left_button}/${right_button}/${even.target.value}`)
            .then(responce => responce.json())
            .then((data) => {
                input_right.value = data.conversion_rate * input_left.value
            }).catch(error => console.log(error))
    }
    else {
        fetch(`https://v6.exchangerate-api.com/v6/95640758702a8dbcee79e935/pair/${left_button}/${right_button}/${even.target.value}`)
            .then(responce => responce.json())
            .then((data) => {
                input_right.value = data.conversion_rate * input_left.value
            }).catch(error => console.log(error))
    }
})

function change(left_button, right_button) {
    let input_right = document.querySelector('.input_right')
    let input_left = document.querySelector('.input_left')
    if (input_left.value === "") {
        input_left.value = 5000;
        if (right_button === "" ) {
            right_button = "RUB"
            fetch(`https://v6.exchangerate-api.com/v6/95640758702a8dbcee79e935/pair/${left_button}/${right_button}/${input_left.value}`)
                .then(responce => responce.json())
                .then((data) => {
                    input_right.value = data.conversion_rate * input_left.value
                }).catch(error => console.log(error))

        } else {
            console.log(left_button, right_button)
            fetch(`https://v6.exchangerate-api.com/v6/95640758702a8dbcee79e935/pair/${left_button}/${right_button}/${input_left.value}`)
                .then(responce => responce.json())
                .then((data) => {
                    input_right.value = data.conversion_rate * input_left.value
                }).catch(error => console.log(error))
        }

    }
    else {
        if (right_button === "" || left_button === "") {
            console.log("saq yada sol bosdu")
            right_button = "RUB"
            left_button = "RUB"
            console.log(left_button, right_button)
            fetch(`https://v6.exchangerate-api.com/v6/95640758702a8dbcee79e935/pair/${left_button}/${right_button}/${input_left.value}`)
                .then(responce => responce.json())
                .then((data) => {
                    input_right.value = data.conversion_rate * input_left.value
                }).catch(error => console.log(error))

        } else {
            fetch(`https://v6.exchangerate-api.com/v6/95640758702a8dbcee79e935/pair/${left_button}/${right_button}/${input_left.value}`)
                .then(responce => responce.json())
                .then((data) => {
                    input_right.value = data.conversion_rate * input_left.value
                }).catch(error => console.log(error))
        }
    }
}
function leftChangePurple(even){
    left_menu.forEach((element) => {
        element.style.background = "none"
    })
    even.target.style.background = "purple";
}
function rightChangePurple(even){
    right_menu.forEach((element) => {
        element.style.background = "none"
    })
    even.target.style.background = "purple";
}

first_Rub.addEventListener('click', (even) => {
    leftChangePurple(even)
})
first_Usd.addEventListener('click', (even) => {
    leftChangePurple(even)
})
first_Eur.addEventListener('click', (even) => {
    leftChangePurple(even)
})
first_Gbp.addEventListener('click', (even) => {
    leftChangePurple(even)
})
second_Rub.addEventListener('click', (even) => {
    rightChangePurple(even)
})
second_Usd.addEventListener('click', (even) => {
    rightChangePurple(even)
})
second_Eur.addEventListener('click', (even) => {
    rightChangePurple(even)
})
second_Gbp.addEventListener('click', (even) => {
    rightChangePurple(even)
})
left_menu.forEach((left_element) => {
    left_element.addEventListener('click', (even) => {
        if (left_element.style.background === "purple" ) {
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