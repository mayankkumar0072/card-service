import Fares from '../../js/fares';

const assert = require('assert');

describe('Fares', function() {
      let fares = new Fares(30);

    it('should create a new instance', function(){
        expect(fares instanceof Fares).toBeTruthy();
    });

    it('should create a credit of 30', function(){
        expect(fares.credit).toBe(30);
    });

    it('should create a BARRIER_ENTRY', function(){
      expect(fares.enterBarrier).toBe('BARRIER_ENTRY');
    });

    it('should create a BARRIER_LEAVE', function(){
        expect(fares.leaveBarrier).toBe('BARRIER_LEAVE');
    });

});
