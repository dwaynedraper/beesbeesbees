var HoneyMakerBee = function(age) {
  Bee.call(this, age)
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot = this.honeyPot + 1;
};
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot = this.honeyPot - 1;
}