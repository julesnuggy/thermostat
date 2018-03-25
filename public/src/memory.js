function Memory($) {
  this._$ = $;
};

//Memory.prototype = {
  Memory.prototype.get_req = function(callback) {
    this._$.get("/memory", function(response) {
      callback(response.temp);
    });
  };

  Memory.prototype.post_req = function(temp, callback) {
    this._$.post("/memory", { temp: temp }, callback);
  };
