const main = require('../main/main');

describe('main()', function(){
   beforeAll(function () {
       console.log("The testnumber is 1234");
   })
    it("0A0B",function () {
        var Testnumber = 1234;
        var Mynumber = 5678;
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("0A0B");
        console.log("\n0A0B");
    })
    it("0A1B",function () {
        var Testnumber = 1234;
        var Mynumber = 5378;
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("0A1B");
        console.log("\n0A1B");
    })
    it("0A2B",function () {
        var Testnumber = 1234;
        var Mynumber = 5328;
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("0A2B");
        console.log("\n0A2B");
    })
    it("0A3B",function () {
        var Testnumber = 1234;
        var Mynumber = 4328;
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("0A3B");
        console.log("\n0A3B");
    })

    it("0A4B",function () {
        var Testnumber = 1234;
        var Mynumber = 4321;
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("0A4B");
        console.log("\n0A4B");
    })
    it("1A0B",function () {
        var Testnumber = 1234;
        var Mynumber = 1678;
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("1A0B");
        console.log("\n1A0B");
    })
    it("1A1B",function () {
        var Testnumber = 1234;
        var Mynumber = 1378;
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("1A1B");
        console.log("\n1A1B");
    })
    it("1A2B",function () {
        var Testnumber = 1234;
        var Mynumber = 1328;
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("1A2B");
        console.log("\n1A2B");
    })
    it("1A3B",function () {
        var Testnumber = 1234;
        var Mynumber = 1423;
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("1A3B");
        console.log("\n1A3B");
    })
    it("2A0B",function () {
        var Testnumber = 1234;
        var Mynumber = 1278;
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("2A0B");
        console.log("\n2A0B");
    })
    it("2A1B",function () {
        var Testnumber = 1234;
        var Mynumber = 1248;
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("2A1B");
        console.log("\n2A1B");
    })
    it("2A2B",function () {
        var Testnumber = 1234;
        var Mynumber = 1243;
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("2A2B");
        console.log("\n2A2B");
    })
    it("3A0B",function () {
        var Testnumber = 1234;
        var Mynumber = 1238;
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("3A0B");
        console.log("\n3A0B");
    })
    it("4A0B",function () {
        var Testnumber = 1234;
        var Mynumber = 1234;
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("4A0B");
        console.log("\n4A0B");
    })

});