describe("Memory", function() {

  beforeEach(function() {
    var $Mock = { get: null };
    memory = new Memory($Mock);
  });

  describe("create Memory", function() {
    it("should create new Memory instance", function() {
      expect(memory.get).toBeDefined();
    });
  });

  describe("Make GET requests", function() {
    it("should GET /memory URL", function() {
      spyOn($Mock, "get");
      subject.get(jasmine.createSpy("callback"));

      expect($Mock.get).toHaveBeenCalledWith("/count", jasmine.any(Function));

    });
  });

});
