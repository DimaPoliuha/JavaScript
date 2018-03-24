'use strict';

function Device(capacity, CPU) {
  var self = this;

  self._capacity = capacity;
  self._CPU = CPU;

  self._enabled = false;

  self.enable = () => {
    self._enabled = true;
    console.log( "Device enabled" );
  };

  self.disable = () => {
    self._enabled = false;
    console.log( "Device disabled" );
  };

  self._currentCapacity = 0;
  
  self.getTimeToDischarge = (() => {
    return self._currentCapacity * 0.0025;
  });

  self.getTimeToDischargeFull = (() => {
    return self._capacity * 0.0025;
  });

  self.getTimeToCharge = (() => {
    return self._currentCapacity * 0.000375;
  });

  self.currentCapacity = function(amount) {
    // вызов без параметра возвращаем свойство
    if (!arguments.length) return self._currentCapacity;

    // иначе записываем
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Невозможно иметь больше заряда, чем емкость батареи: " + capacity + " mAh");
    }

    self._currentCapacity = amount;
  };

  function charged() {
    alert( 'Телефон заряжен!' );
  }

  self.charging = () => {
    var result = confirm( "Поставить на зарядку?" );
    if(result){
      setTimeout( charged, self.getTimeToCharge() * 4000 );
      self._currentCapacity = capacity;
      console.log( "Текущий заряд " + self.currentCapacity() + " mAh" );
    }
  };
}


function Phone(capacity, CPU) {
  Device.apply(this, arguments);
  var screenSize = 4;
  var camera = 2;

  this.screenSize = function(amount) {
    // вызов без параметра возвращаем свойство
    if (!arguments.length) return screenSize;

    // иначе записываем
    if (amount < 0) {
      throw new Error( "Значение должно быть положительным" );
    }
    if (amount > 7) {
      throw new Error( "Больше 7 дюмов - планшет" );
    }
    screenSize = amount;
  };

  this.camera = function(amount) {
    // вызов без параметра возвращаем свойство
    if (!arguments.length) return camera;

    // иначе записываем
    if (amount < 0) {
      throw new Error( "Значение должно быть положительным" );
    }
    if (amount > 30) {
      throw new Error( "Слишком много" );
    }
    camera = amount;
  };

}

var phone = new Phone(4000, "Snapdragon 625");
phone.enable();
phone.currentCapacity(2250);
console.log( "Текущий заряд " + phone.currentCapacity() + " mAh" );
console.log( "Время для зарядки " + phone.getTimeToCharge() + " часа(ов)" );
alert( "Время для разрядки " + phone.getTimeToDischarge() + " часа(ов)" );
console.log( "Время для разрядки полной батареи " + phone.getTimeToDischargeFull() + " часа(ов)" );
phone.charging();
phone.screenSize(5.5);
console.log( "Размер экрана " + phone.screenSize() + " дюймов" );
phone.camera(12);
console.log( "Камера " + phone.camera() + " мегапикселей" );
phone.disable();

function SmartBand(capacity, CPU, brand){
  Device.apply(this, arguments);

  var parentEnable = this.enable;
  this.enable = function() {
      parentEnable(); // теперь можно вызывать как угодно, this не важен
      console.log( "Время для разрядки полной батареи " + this.getTimeToDischargeFull() + " часа(ов)" );
    }
}

var smartBand = new SmartBand(40, "12dwes", "xiaomi");
smartBand.enable();