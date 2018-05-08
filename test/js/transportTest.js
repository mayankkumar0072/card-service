import TransportTypes from '../../js/transportTypes';

describe('TransportTypes', function(){

    // The class should initialise & return transport type bus
    it('should create a new instance with transport type bus', function(){
        let transportTypeBus = new TransportTypes('BUS');
        expect(transportTypeBus instanceof TransportTypes).toBeTruthy();
        expect(transportTypeBus._transportType).toBe('BUS');
    });

    // The class should initialise & return transport type tube
    it('should create a new instance with transport type tube', function(){
        let transportTypeTube = new TransportTypes('TUBE');
        expect(transportTypeTube instanceof TransportTypes).toBeTruthy();
        expect(transportTypeTube._transportType).toBe('TUBE');
    });
});
