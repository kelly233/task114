const main = require('../main/main');

describe('main()', function(){
    var Testnumber = 1234;
   beforeAll(function () {
       console.log("Please give me four numbers:(like 1111)");
   })
    it("0A0B",function () {
        var Mynumber = 5678;
        console.log("\n"+Mynumber);
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("0A0B");
        console.log("0A0B");
    })
    it("0A1B",function () {
        var Mynumber = 5378;
        console.log("\n"+Mynumber);
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("0A1B");
        console.log("0A1B");
    })
    it("0A2B",function () {
        var Mynumber = 5328;
        console.log("\n"+Mynumber);
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("0A2B");
        console.log("0A2B");
    })
    it("0A3B",function () {
        var Mynumber = 4328;
        console.log("\n"+Mynumber);
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("0A3B");
        console.log("0A3B");
    })

    it("0A4B",function () {
        var Mynumber = 4321;
        console.log("\n"+Mynumber);
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("0A4B");
        console.log("0A4B");
    })
    it("1A0B",function () {
        var Mynumber = 1678;
        console.log("\n"+Mynumber);
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("1A0B");
        console.log("1A0B");
    })
    it("1A1B",function () {
        var Mynumber = 1378;
        console.log("\n"+Mynumber);
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("1A1B");
        console.log("1A1B");
    })
    it("1A2B",function () {
        var Mynumber = 1328;
        console.log("\n"+Mynumber);
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("1A2B");
        console.log("1A2B");
    })
    it("1A3B",function () {
        var Mynumber = 1423;
        console.log("\n"+Mynumber);
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("1A3B");
        console.log("1A3B");
    })
    it("2A0B",function () {
        var Mynumber = 1278;
        console.log("\n"+Mynumber);
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("2A0B");
        console.log("2A0B");
    })
    it("2A1B",function () {
        var Mynumber = 1248;
        console.log("\n"+Mynumber);
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("2A1B");
        console.log("2A1B");
    })
    it("2A2B",function () {
        var Mynumber = 1243;
        console.log("\n"+Mynumber);
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("2A2B");
        console.log("2A2B");
    })
    it("3A0B",function () {
        var Mynumber = 1238;
        console.log("\n"+Mynumber);
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("3A0B");
        console.log("3A0B");
    })
    it("4A0B",function () {
        var Mynumber = 1234;
        console.log("\n"+Mynumber);
        var result = main(Testnumber,Mynumber);
        expect(result).toEqual("4A0B");
        console.log("4A0B");
        console.log("\nOh,you just got me,winner!")
    })

});