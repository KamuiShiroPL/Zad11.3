
function Phone(brand, price, color, system) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  this.system = system;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + "Operation system is " + this.system  + ".");
}


var iPhone6S = new Phone("Apple", 2250, "silver", "ios");
var OnePlusOne = new Phone("OnePlus", 2000, "black", "Android");
var SamsungGalaxyS6 = new Phone("Samsung", 1500, "silver", "Android");
