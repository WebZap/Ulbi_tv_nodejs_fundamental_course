// Импорт метода 'log' из модуля 'console'
const { log } = console

//!______________________________ PROCESS _____________________________-
/* Объект 'process' - глобальный объект, предоставляющий информацию о текущем процессе */

// Вывод идентификатора текущего процесса
log(process.pid) // Пример результата: 18208

// Получение переменных окружения
// Первый способ - использование пакета 'cross-env'
// Установка пакета: npm install cross-env --save-dev
// Пример использования: "start": "cross-env PORT=5000 NODE_ENV=production node ./lessons/procces.js"
log(process.env.PORT) // Вывод значения переменной окружения PORT
log(process.env.NODE_ENV) // Вывод значения переменной окружения NODE_ENV

// Второй способ - использование пакета 'dotenv'
// Установка пакета: npm install dotenv --save
// Создание файла .env с переменными, например: MODE=production
const dotenv = require('dotenv')
dotenv.config() // Импортирование переменных окружения из файла .env
log(process.env.PORT) // Вывод значения переменной окружения PORT

//!___________________ ДОБАВЛЕНИЕ ПЕРЕМЕННЫХ ________________________-

// Использование аргументов при запуске программы
const ARG_START = process.argv.slice(2) // Получение аргументов, начиная с третьего элемента массива
log(ARG_START)

// Пример обработки аргументов
let booleanArg = ARG_START[0]?.toLowerCase() === 'true' // Проверка наличия и приведение к нижнему регистру
if (booleanArg) {
	booleanArg = true
} else {
	log('Процесс завершен')
	process.exit() // Завершение процесса
}
