'use strict';

/* DOM */
var dom = function(){
  return{
      id: (id) => document.getElementById(id)
      ,q: (selector) => document.querySelector(selector)
      ,tag: (tag) => document.getElementsByTagName(tag)
      ,create:  (tag) => document.createElement(tag)
      ,add: (parent, child) => parent.appendChild(child)
  }
}();
//1
var arr = dom.tag("p");
for (var x = 0; x < arr.length; x++) {
  arr[x].innerHTML = "Hi there";
}
//2
var a = dom.id("insert");
var arr = a.childNodes;
for(var x = 0; x < arr.length; x++) {
  arr[x].innerHTML = `new ${x} text`;
}
//3
var el = dom.id("myimg");
el.addEventListener("click", im);
function im (){
  el.src = "images/apple.png";
  el.removeEventListener("click", im);
  el.addEventListener("click", imm);
};
function imm (){
  el.src = "images/orange.ico";
  el.removeEventListener("click", imm);
  el.addEventListener("click", im);
};
//4
var x = dom.id("demo");
x.style.color = "red";
x.onclick = function () {
  alert( Date() );
  x.style.fontSize = 200+"%";
}

//5
var p = dom.create("p");
var node = document.createTextNode("This is new");
dom.add(p, node);
var parent = dom.id("demo1");
var child = dom.id("p1");
parent.replaceChild(p, child);
//6

// starting position
var pos = 0;
var posY = 0;
//our box element
var box = dom.id("box");
var t = setInterval(move, 10);

function move() {
  if(pos < 150) {
    pos += 1;
    box.style.left = pos+"px";
  }
  if(pos == 150) {
    posY += 1;
    box.style.top = posY+"px";
  }
  if(posY == 150){
    pos = 1;
    posY = 1;
    box.style.background = "cyan";
    //clearInterval(t);
  }
}

var btn = dom.id("demo2");
btn.addEventListener("click", clr);

function clr() {
 container.style.background = "purple";
}

var btn = dom.id("demo3");
btn.addEventListener("click", myFunction);

function myFunction() {
 box.style.background = "pink";
}

var btn1 = dom.id("demo4");
btn1.addEventListener("click", () => {
  pos = 0;
  box.style.left = pos+"px";
  posY = 0;
  box.style.top = posY+"px";
});

var btn2 = dom.id("demo5");
btn2.addEventListener("click", stop);
function stop() {
  clearInterval(t);
}

var btn3 = dom.id("demo6");
btn3.addEventListener("click", () => {
  var t = setInterval(move, 10);
});
//7
function change() {
  var x = dom.id("name");
  x.value= x.value.toUpperCase();
 }
 
//8
 var images = [
  "images/berry.png", 
  "images/cherry.png", 
  "images/pineapple.png"
  ];
  var num = 0;

function next() {
  var slider = dom.id("slider");
  num++;
  if(num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
  }

function prev() {
  var slider = dom.id("slider");
  num--;
  if(num < 0) {
    num = images.length-1;
  }
  slider.src = images[num];
}

//9
function validate() {
  var n1 = dom.id("num1");
  var n2 = dom.id("num2");
  if(n1.value != "" && n2.value != "") {
    if(n1.value == n2.value) {
      alert("УСПЕШНО");
      return true;
    }
  }
  alert("ЗНАЧЕНИЕ ДОЛЖНО БЫТЬ ОДИНАКОВЫМ");
}