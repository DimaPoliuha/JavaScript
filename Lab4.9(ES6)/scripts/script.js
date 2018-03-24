'use strict';

class Device {
  constructor(capacity, CPU) {
    this._capacity = capacity;
    this._CPU = CPU;
    this._enabled = false;
    this._currentCapacity = 0;
  }
  
  enable() {
    this._enabled = true;
    console.log("Device enabled");
  };

  disable() {
    this._enabled = false;
    console.log("Device disabled");
  };

  getTimeToDischarge() {
    return this._currentCapacity * 0.0025;
  };

  getTimeToDischargeFull() {
    return this._capacity * 0.0025;
  };

  getTimeToCharge() {
    return this._currentCapacity * 0.000375;
  };

  currentCapacity(amount) {
    // вызов без параметра возвращаем свойство
    if (!arguments.length) return this._currentCapacity;

    // иначе записываем
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > this._capacity) {
      throw new Error("Невозможно иметь больше заряда, чем емкость батареи: " + this._capacity + " mAh");
    }

    this._currentCapacity = amount;
  };

  charging() {
    var result = confirm("Поставить на зарядку?");
    if (result) {
      setTimeout(alert('Телефон заряжен!'), this.getTimeToCharge() * 4000);
      this._currentCapacity = this._capacity;
      console.log("Текущий заряд " + this.currentCapacity() + " mAh");
    }
  };

  static createNewDevice() {
    return new Device(2110, "Adr 505");
  }
}


class Phone extends Device {
  constructor (capacity, CPU){
    super(capacity, CPU);
    this.screenSize = 4;
    this.camera = 2;
  }

  screenSize(amount) {
    // вызов без параметра возвращаем свойство
    if (!arguments.length) return this.screenSize;

    // иначе записываем
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > 7) {
      throw new Error("Больше 7 дюмов - планшет");
    }
    this.screenSize = amount;
  };

  camera(amount) {
    // вызов без параметра возвращаем свойство
    if (!arguments.length) return this.camera;

    // иначе записываем
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > 30) {
      throw new Error("Слишком много");
    }
    this.camera = amount;
  };
}

let phone = new Phone(4000, "Snapdragon 625");
phone.enable();
phone.currentCapacity(2250);
console.log("Текущий заряд " + phone.currentCapacity() + " mAh");
console.log("Время для зарядки " + phone.getTimeToCharge() + " часа(ов)");
alert("Время для разрядки " + phone.getTimeToDischarge() + " часа(ов)");
console.log("Время для разрядки полной батареи " + phone.getTimeToDischargeFull() + " часа(ов)");
phone.charging();
phone.screenSize(5.5);
console.log("Размер экрана " + phone.screenSize() + " дюймов");
phone.camera(12);
console.log("Камера " + phone.camera() + " мегапикселей");
phone.disable();