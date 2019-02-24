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
    it("has to pay less than 2 kilometres", function(){
        let number=1;
        let time=20;
        let result=main(number,time );
        expect(result).to.equal(6);
    });
    it("has to pay more than 2 kilometres and less than 8 kilometres ", function(){
        let number=5;
        let time=20;
        let result=main(number,time );
        expect(result).to.equal(9);
    });
    it("has to pay more than 8 kilometres ", function(){
        let number=12;
        let time=20;
        let result=main(number,time );
        expect(result).to.equal(16);
    });

});
