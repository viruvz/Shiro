'use strict'

let name_inp = document.querySelector('#name');
let start = document.querySelector('#start');
let click = document.querySelector('#click');
let timer = document.querySelector('#timer')
let player_name = document.querySelector('#player_name')
let timerId


name_inp.addEventListener('blur', disable)


function disable() {
    if (name_inp.value.length <= 0) {
        start.disabled = true
    } else if (name_inp.value.length !== 0) {
        start.disabled=false
    }
}

start.addEventListener('click', function() {
    timer.textContent = 0;
    timerId = setInterval(function() {
        timer.textContent++
    }, 1000);

    name_inp.value = "";


});