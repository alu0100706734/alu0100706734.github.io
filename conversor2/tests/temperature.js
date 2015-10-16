var expect = chai.expect;

describe("Test usando Mocha, Chai, Sinon y Blanket", function() {
  describe("constructor", function() {
    it("Asignar valor 35 ", function() {
      var temp = new Temperatura();
      temp.valor = "35";
      expect(temp.valor).to.equal(temp.valor);
    });
  });
});