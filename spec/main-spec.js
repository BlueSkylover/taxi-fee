"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../main/main");
describe('taxi fee', function () {
    // write your tests here...
    it("returns the error when given the number is wrong", function(){
        let number=-5;
        let time=20;
        let result=main(number,time);
        expect(result).to.equal("Input value is abnormal.");
    });
    it("returns the money when the distance less than 2 kilometres", function(){
        let number=1;
        let time=20;
        let result=main(number,time );
        expect(result).to.equal(6);
    });
    it("returns the money when the distance more than 2 kilometres and less than 8 kilometres ", function(){
        let number=5;
        let time=20;
        let result=main(number,time );
        expect(result).to.equal(9);
    });
    it("returns the money when the distance more than 8 kilometres ", function(){
        let number=12;
        let time=20;
        let result=main(number,time );
        expect(result).to.equal(16);
    });

});
