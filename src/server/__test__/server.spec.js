// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'

const request = require('supertest')
const { app } = require('../index')

describe('API Test', () => {
  test('Should go To index.html', (done) => {
    request(app)
      .get('/')
      .send('./dist/index.html')
      .then((response) => {
        expect(response.statusCode).toEqual(200)
        done()
      })
  })
  test('It give not found as add-url', (done) => {
    request(app)
      .get('/add-url')
      .then((response) => {
        expect(response.statusCode).toBe(404)
        done()
      })
  })
  test('It response with error for wrong path', (done) => {
    request(app)
      .get('/ahmed')
      .then((response) => {
        expect(response.statusCode).toBe(404)
        done()
      })
  })
})