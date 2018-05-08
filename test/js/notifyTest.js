import notify from '../../js/notify';

describe('Notify', function() {
  
    // The class should initialise & print msg
    it('should notify & print msg', function(){
        notify.showmessage("Printing test msg");
    });
});
