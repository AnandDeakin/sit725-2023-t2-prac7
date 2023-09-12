const { expect } = require("chai");
const request = require("request");
let city = {
    title : 'Melbourne' ,
    subTitle : 'Melbourne,VIC' ,
    path : 'images/melbourne.jpg' ,
    description : 'Welcome to the details of Melbourne ' ,
};

describe('get request' , function(){
    it('return status of get api if it gets success', function(done){
        request('http://localhost:3000/api/city', function(a,b,c){            
            let body = JSON.parse(c);
            expect(body.message).to.equal('success');
            done();
        });
    });
});

describe('post request', function(){
    it("return status of post api if it gets success", function(done){
        request.post({url:'http://localhost:3000/api/city',form:city}, function(a,b,c){
            let body = JSON.parse(c);
            expect(body.message).to.equal('success');
            done();
        });     
    });
});

describe('Delete request', function(){
    it('returns the status of delete function', function(done){
        request.delete({url:'http://localhost:3000/api/city', form:city}, function (a,b,c){
            let body_obj = JSON.parse(c);
            expect(body_obj.statusCode).to.equal(400);
            done();            
        });
    });
});


