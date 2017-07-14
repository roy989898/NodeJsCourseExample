
const expect = require("expect");
const utils = require("./utils");

it("should add two numbers", () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA("number");
});

it("should async add two numbers", (done) => {
    utils.asyncAdd(3, 4, (sum) => {
        expect(sum).toBe(7).toBeA("number");
        done();
    });


});

it("It should async square a number", (done) => {
    utils.squareAsync(3, (squareResult) => {
        expect(squareResult).toBe(9).toBeA("number");
        done();
    });

});

it("should square the number", () => {
    let res = utils.square(4);
    

    expect(res).toBe(16).toBeA("number");

});

// should verify firstand last names are set
// assert it includes firstName and lastName with proper values
it("should set firstName and lastName", () => {
    let user = { location: "HK", age: 25 };
    let res = utils.setName(user, "Roy Leung");
    expect(res).toInclude({
        firstName: "Roy",
        lastName: "Leung"

    });


});



it("should expect some values", () => {
    // expect(12).tonotBe(12);
    // expect({ name: "Andrew" }).toNotEqual({ name: "Andrew" });
    // expect([2, 3, 4]).toInclude(5);
    expect({
        name: "andrew",
        age: 25,
        location: "HK"
    }).toInclude({
        age: 25
    });

});