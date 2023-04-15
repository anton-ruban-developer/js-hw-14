function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function () {
  return this.length * this.width;
};

function Square(side) {
  this.side = side;
}

Square.prototype.getArea = function () {
  return this.side * this.side;
};

const rectangle = new Rectangle(4, 8);
const square = new Square(4);

console.log(`Площадь прямоугольника равна: ${rectangle.getArea()} квадратных метра`);
console.log(`Площадь квадрата равна: ${square.getArea()} квадратных метра`);
