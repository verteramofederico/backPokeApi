const request = require('supertest')
const server = require('../app')
const chai = require('chai')
const expect = require('chai').expect
chai.should()

describe('GET /api', () => {
  it('GET all poke', (done) => {
    request(server)
      .get('/api')
      .set('Acept', 'application/json')
      .end((error, response) => {
        expect(response.status).to.eql(200)
        done()
      })     
    }) 
  }) 

describe('GET by ID /api/id', () => {
  it('GET one poke by id', (done) => {
    request(server)
      .get('/api/1')
      .set('Acept', 'application/json')
      .end((error, response) => {
        expect(response.status).to.eql(200)
        done()
      })     
    }) 
  }) 