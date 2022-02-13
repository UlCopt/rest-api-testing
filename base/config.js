const request = require('supertest');
const chai = require('chai');
const jsonschema = require('jsonschema');


exports.app = request('https://young-woodland-83292.herokuapp.com');
exports.expect = chai.expect;
exports.schemaValidator = jsonschema.Validator;
