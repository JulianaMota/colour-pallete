"use strict";

//window.addEventListener("DOMContentLoaded", init);

let colorPicker;
let defaultColor = "#0000ff";

window.addEventListener("load", colorValue, false);
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const color5 = document.querySelector(".color5");
const colorHarmony = document.querySelector("#colorselect");
let anaSelect = false;
let monoSelect = false;

function colorValue() {
  colorPicker = document.querySelector("#colorPicker");
  console.log(colorPicker);
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateFirst, false);
  colorPicker.select();
}

function updateFirst(event) {
  let color1 = document.querySelector(".color1");
  let hexCode = document.querySelector(".hexCode span");
  if (color1) {
    color1.style.backgroundColor = event.target.value;
    hexCode.textContent = event.target.value;
    console.log(event.target.value);
    let rgbCode = color1.style.backgroundColor;
    console.log(rgbCode);
    rgbCodeFuntion(color1.style.backgroundColor);
  }
  console.log(event);
}

colorHarmony.addEventListener("change", optionsFunction, false);
function optionsFunction(ev) {
  console.log(ev);
  if (ev.target.value == "Analogous") {
    anaSelect = true;
    monoSelect = false;
  }
  if (ev.target.value == "Monochromatic") {
    anaSelect = false;
    monoSelect = true;
  }
}

function rgbCodeFuntion(rgbCode) {
  console.log(rgbCode);
  const sliceRGB = rgbCode.slice(4, -1);
  const splitRGB = sliceRGB.split(", ");
  const r = splitRGB[0];
  const g = splitRGB[1];
  const b = splitRGB[2];
  console.log(r, g, b);

  RGBtoHSL(r, g, b);
}

function RGBtoHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  if (anaSelect) {
    analogfuntion(h, s, l);
  }
  if (monoSelect) {
    monocromaticfunction(h, s, l);
  }
}

/*document
  .querySelector(".ana")
  .addEventListener("click", analogfuntion(h, s, l));*/

function analogfuntion(h, s, l) {
  console.log(h, s, l);
  const hAnalog2 = h + 10;
  console.log(hAnalog2);
  color2.style.backgroundColor = `hsl(${hAnalog2},${s}%,${l}%)`;

  const hAnalog3 = h + 20;
  console.log(hAnalog3);
  color3.style.backgroundColor = `hsl(${hAnalog3},${s}%,${l}%)`;

  const hAnalog4 = h + 40;
  console.log(hAnalog4);
  color4.style.backgroundColor = `hsl(${hAnalog4},${s}%,${l}%)`;

  const hAnalog5 = h + 50;
  console.log(hAnalog5);
  color5.style.backgroundColor = `hsl(${hAnalog5},${s}%,${l}%)`;
}

/*document
  .querySelector(".mono")
  .addEventListener("click", monocromaticfunction(h, s, l));*/

function monocromaticfunction(h, s, l) {
  console.log(h, s, l);
  const lmono2 = l + 10;
  console.log(lmono2);
  color2.style.backgroundColor = `hsl(${h},${s}%,${lmono2}%)`;

  const lmono3 = l + 20;
  console.log(lmono3);
  color3.style.backgroundColor = `hsl(${h},${s}%,${lmono3}%)`;

  const lmono4 = l + 40;
  console.log(lmono4);
  color4.style.backgroundColor = `hsl(${h},${s}%,${lmono4}%)`;

  const lmono5 = l + 50;
  console.log(lmono5);
  color5.style.backgroundColor = `hsl(${h},${s}%,${lmono5}%)`;
}

/*function getHexNumber() {
  console.log(hexCode);
}*/
