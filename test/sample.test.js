const Chai = require('chai');
const expect = Chai.expect;
const SampleModel = require('../models/sample-model.js');

describe('Sample Model test', function() {
    it ('Should return true', function() {
        const result = SampleModel.sampleMethod();

        expect(result).to.equal(true);
    });
})