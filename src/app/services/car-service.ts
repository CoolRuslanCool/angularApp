export class CarService {

  cars = [
    {name: 'Ford', sold: false},
    {name: 'Mazda', sold: false},
    {name: 'Mercedes', sold: true},
    {name: 'Opel', sold: false}
    ];

  addCar(name: string) {
    this.cars.push({name, sold: false});
  }

  deleteCar(name: string) {
    this.cars = this.cars.filter(car => car.name !== name);
  }

}
