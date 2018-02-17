const Session = require('../../database/Session');
const assert = require('assert');
const expect = require('chai').expect;

describe('test db connection', function(){
    it('should not be null', function(){
        let session = new Session();

        //expect(session.pool).not.to.be(null);
        assert.notEqual(session.pool, null);
    })
})