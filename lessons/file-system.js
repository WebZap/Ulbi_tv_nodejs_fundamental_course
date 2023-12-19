const { log } = require('console')
const e = require('express')
const fs = require('fs')
const path = require('path')

const PATH = path.join(__dirname, 'text.txt')
const DATA_FOR_WRITE_V1 = 'Привет из функции'
const DATA_FOR_WRITE_V2 = 'Привет из функции 2'

const writeAsync_V1 = async (path, data) => {
	return new Promise((resolve, reject) => {
		return fs.writeFile(path, data, err => {
			if (err) {
				reject(err.message)
			}
			resolve()
		})
	})
}

const readAsync_V1 = async path => {
	return new Promise((resolve, reject) => {
		return fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
			if (err) reject(err.message)
			console.log('file success read')
			resolve(data)
		})
	})
}

const appendAsync_V1 = async (path, data) => {
	return new Promise((resolve, reject) => {
		return fs.appendFile(path, data, err => {
			if (err) return err.message
			resolve()
		})
	})
}

const deleteAsync_V1 = async path => {
	return new Promise((resolve, reject) => {
		return fs.unlink(path, err => {
			if (err) return err.message
			resolve()
		})
	})
}

readAsync_V1(PATH)
	.then(data => console.log(data))
	.then(() => appendAsync_V1(PATH, DATA_FOR_WRITE_V1))
	.then(() => deleteAsync_V1(PATH))
