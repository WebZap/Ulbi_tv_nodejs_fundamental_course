// Импорт метода 'log' из модуля 'console'
const { log } = console

// Импорт модуля 'path' для работы с путями к файлам
const path = require('path')

// Создание относительного пути к файлу с использованием метода 'path.join'
const relativePath = path.join('src', 'path.js') // Результат: src\path.js

// Создание абсолютного пути к файлу с использованием метода 'path.join'
const absolutePath = path.join(__dirname, 'src', 'path.js') // Результат: c:\Users\webzap\Documents\Documents\Учеба\Programming\UlbiTV\NodeJs_fundamental_course\lessons\src\path.js

// Получение относительного пути относительно текущего рабочего каталога
const relativeToCurrentPath = path.relative(__dirname, 'src/path.js') // Результат: src\path.js

// Вывод созданных путей в консоль
log('Относительный путь:', relativePath)
log('Абсолютный путь:', absolutePath)
log('Относительно текущего каталога:', relativeToCurrentPath)
