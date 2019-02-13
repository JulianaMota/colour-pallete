"use strict";

//window.addEventListener("DOMContentLoaded", init);

let colorPicker;
let defaultColor = "#0000ff";

window.addEventListener("load", colorValue, false);

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
}

/*function getHexNumber() {
  console.log(hexCode);
}*/
