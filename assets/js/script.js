'use strict';

const images = [
    { 'id': '1', 'url':'assets/img/foto1.jpg' },
    { 'id': '2', 'url':'assets/img/foto2.jpg' },
    { 'id': '3', 'url':'assets/img/foto3.jpg' },
    { 'id': '4', 'url':'assets/img/foto4.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll(".item")

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll(".item")
}

const next = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore( lastItem, items[0] )
    items = document.querySelectorAll(".item")
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)

// Responsividade do Menu

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}