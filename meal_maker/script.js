const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  get appetizers() {
    return this.appetizers;
  },
  set appetizers(appetizerIn) {
    this.appetizers.push(appetizerIn);
  },
	get mains() {
    return this.mains;
  },
  set mains(mainIn) {
    this.mains.push(mainIn);
  },
	get desserts() {
    return this.desserts;
  },
  set desserts(dessertIn) {
    this.desserts.push(dessertIn);
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    }
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const index = Math.random() * dishes.length;
    return dishes[Math.floor(index)];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the price is ${totalPrice}.`;
  },
};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('mains', 'Pork stew', 8.50);
menu.addDishToCourse('desserts', 'Vanila icecream', 1.75);
let meal = menu.generateRandomMeal();
console.log(meal);
