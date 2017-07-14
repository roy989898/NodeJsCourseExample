const expect = require("expect");
const rewire = require("rewire");
let app = rewire("./app.js");


describe("APP", () => {
    let db = {
        saveUser: expect.createSpy()
    };

    app.__set__("db", db);

    it("should call the spy correctly", () => {
        let spy = expect.createSpy();
        spy("Roy", 25);
        expect(spy).toHaveBeenCalledWith("Roy", 25);
    });

    it("should call save user with user object", () => {
        let email = "email";
        let password = "123abc";
        app.handleSigup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});

    });

});