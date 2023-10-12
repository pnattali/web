// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Функція для зміни кольорів
    function changeColors() {
        // Зміна кольору фону
        document.body.style.backgroundColor = getRandomColor();

        // Зміна кольору заголовка
        var header = document.querySelector('header h1');
        if (header) {
            header.style.color = getRandomColor();
        }

        // Зміна кольору тексту
        var paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(function(paragraph) {
            paragraph.style.color = getRandomColor();
        });
    }

    // Функція для отримання випадкового кольору
    function getRandomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    // Викликати функцію при завантаженні сторінки
    changeColors();
});