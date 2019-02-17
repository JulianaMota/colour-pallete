"use strict";

// 1st I made 2 variable to of color picker and define the default hex code
let colorPicker;
let defaultColor = "#e66465";

// 2nd create an event lissner for the color picker
window.addEventListener("load", colorValue, false);

// In here I made all the variables for each div where color is applied
let color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const color5 = document.querySelector(".color5");

// Here I have defined where is the select section of all color harmonies
const colorHarmony = document.getElementById("colorselect");

// In this part I define all variables for each color harmonie and put them all in false so they dont appear when the page Loads
let anaSelect = false;
let monoSelect = false;
let shadSelect = false;
let triSelect = false;
let compleSelect = false;
let compoSelect = false;

// This part is where I define all the variables of RGB text code to appear in the DOM
let rgbtext1 = document.querySelector(".hexCode");
const rgbtext2 = document.querySelector(".rgbcode2");
const rgbtext3 = document.querySelector(".rgbcode3");
const rgbtext4 = document.querySelector(".rgbcode4");
const rgbtext5 = document.querySelector(".rgbcode5");

function colorValue() {
  // On the function colorValue I define where the variable colorPicker is on html document.
  colorPicker = document.querySelector("#colorPicker");
  // define the default value for the Picker
  colorPicker.value = defaultColor;
  //Add an event listener to the input of the color picker so we can make a function to change the (div)color1
  colorPicker.addEventListener("input", updateFirst, false);
}

//Function update first
function updateFirst(event) {
  if (color1) {
    // Here I add the to color 1 (first div) the value of the color picker
    color1.style.backgroundColor = event.target.value;
    //then I place the text content of the first color in RGB to the dom
    rgbtext1.textContent = color1.style.backgroundColor;
    //and use this variable to find the rgb code inside of the (div)color1
    let rgbCode = color1.style.backgroundColor;
    //And then I call the function with the RGB value in string
    rgbCodeFuntion(color1.style.backgroundColor);
  }
}
// After having RGB Code I used this next function to slice the rgb code and splite in an array[]
function rgbCodeFuntion(rgbCode) {
  const sliceRGB = rgbCode.slice(4, -1);
  const splitRGB = sliceRGB.split(", ");
  //then I can define each value for R, G and B using the folowing varaibles
  const r = splitRGB[0];
  const g = splitRGB[1];
  const b = splitRGB[2];
  // Afterwards I can call the function to pass rgb to hsl and use r, g, b as parameters
  RGBtoHSL(r, g, b);
}

function RGBtoHSL(r, g, b) {
  //In the folowing function I use the math to transform to rgb to hsl
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

  // and to get all the hsl values to each harmony funtion I use a if statment
  //that connects the variable created in the begining to each function
  if (anaSelect) {
    analogfuntion(h, s, l);
  }
  if (monoSelect) {
    monocromaticfunction(h, s, l);
  }
  if (shadSelect) {
    shadefunction(h, s, l);
  }
  if (triSelect) {
    triadfunction(h, s, l);
  }
  if (compleSelect) {
    complementaryfunction(h, s, l);
  }
  if (compoSelect) {
    compoundfunction(h, s, l);
  }

  //And In here I also define the text content of each (div)color.
  rgbtext1.textContent = color1.style.backgroundColor;
  rgbtext2.textContent = color2.style.backgroundColor;
  rgbtext3.textContent = color3.style.backgroundColor;
  rgbtext4.textContent = color4.style.backgroundColor;
  rgbtext5.textContent = color5.style.backgroundColor;
}

// In the folowing funtions I define the values of hsl in each color
// so they can change color depending of each harmony
// analog colors
function analogfuntion(h, s, l) {
  const hAnalog2 = h + 10;
  color2.style.backgroundColor = `hsl(${hAnalog2},${s}%,${l}%)`;
  const hAnalog3 = h + 20;
  color3.style.backgroundColor = `hsl(${hAnalog3},${s}%,${l}%)`;
  const hAnalog4 = h + 40;
  color4.style.backgroundColor = `hsl(${hAnalog4},${s}%,${l}%)`;
  const hAnalog5 = h + 50;
  color5.style.backgroundColor = `hsl(${hAnalog5},${s}%,${l}%)`;
}
// monocromatic colors
function monocromaticfunction(h, s, l) {
  const lmono2 = l + 10;
  color2.style.backgroundColor = `hsl(${h},${s}%,${lmono2}%)`;
  const lmono3 = l + 20;
  color3.style.backgroundColor = `hsl(${h},${s}%,${lmono3}%)`;
  const lmono4 = l + 40;
  color4.style.backgroundColor = `hsl(${h},${s}%,${lmono4}%)`;
  const lmono5 = l + 50;
  color5.style.backgroundColor = `hsl(${h},${s}%,${lmono5}%)`;
}
// shades colors
function shadefunction(h, s, l) {
  const sShade2 = s - 30;
  color2.style.backgroundColor = `hsl(${h},${sShade2}%,${l}%)`;
  const sShade3 = s - 50;
  color3.style.backgroundColor = `hsl(${h},${sShade3}%,${l}%)`;
  const sShade4 = s - 70;
  color4.style.backgroundColor = `hsl(${h},${sShade4}%,${l}%)`;
  const sShade5 = s - 90;
  color5.style.backgroundColor = `hsl(${h},${sShade5}%,${l}%)`;
}
// triad colors
function triadfunction(h, s, l) {
  const hTri2 = h + 120;
  color2.style.backgroundColor = `hsl(${hTri2},${s}%,${l}%)`;
  const hTri3 = h + 120;
  const sTri3 = s - 50;
  color3.style.backgroundColor = `hsl(${hTri3},${sTri3}%,${l}%)`;
  const hTri4 = h - 120;
  color4.style.backgroundColor = `hsl(${hTri4},${s}%,${l}%)`;
  const hTri5 = h - 120;
  const sTri5 = s - 50;
  color5.style.backgroundColor = `hsl(${hTri5},${sTri5}%,${l}%)`;
}
// complementary colors
function complementaryfunction(h, s, l) {
  const lcompl2 = l - 7;
  color2.style.backgroundColor = `hsl(${h},${s}%,${lcompl2}%)`;
  const lcompl3 = l + 7;
  color3.style.backgroundColor = `hsl(${h},${s}%,${lcompl3}%)`;
  const hcompl4 = h + 180;
  const lcompl4 = l + 7;
  color4.style.backgroundColor = `hsl(${hcompl4},${s}%,${lcompl4}%)`;
  const hcompl5 = h + 180;
  color5.style.backgroundColor = `hsl(${hcompl5},${s}%,${l}%)`;
}
// compound colors
function compoundfunction(h, s, l) {
  const hcompo2 = h + 30;
  color2.style.backgroundColor = `hsl(${hcompo2},${s}%,${l}%)`;
  const hcompo3 = h + 60;
  color3.style.backgroundColor = `hsl(${hcompo3},${s}%,${l}%)`;
  const hcompo4 = h + 140;
  color4.style.backgroundColor = `hsl(${hcompo4},${s}%,${l}%)`;
  const hcompo5 = h + 180;
  color5.style.backgroundColor = `hsl(${hcompo5},${s}%,${l}%)`;
}

// At last I created a event listener to change the harmony depending on the option selected
// using bolleans to define whitch function should appear or not
colorHarmony.addEventListener(
  "change",
  function optionFunction() {
    if (this.value === "") {
      color2.style.backgroundColor = "rgb(255,255,255)";
      color3.style.backgroundColor = "rgb(255,255,255)";
      color4.style.backgroundColor = "rgb(255,255,255)";
      color5.style.backgroundColor = "rgb(255,255,255)";
    }
    if (this.value === "Analogous") {
      anaSelect = true;
      monoSelect = false;
      shadSelect = false;
      triSelect = false;
      compleSelect = false;
      compoSelect = false;
    }
    if (this.value === "Monochromatic") {
      anaSelect = false;
      monoSelect = true;
      shadSelect = false;
      triSelect = false;
      compleSelect = false;
      compoSelect = false;
    }
    if (this.value === "Shades") {
      anaSelect = false;
      monoSelect = false;
      shadSelect = true;
      triSelect = false;
      compleSelect = false;
      compoSelect = false;
    }
    if (this.value === "Triad") {
      anaSelect = false;
      monoSelect = false;
      shadSelect = false;
      triSelect = true;
      compleSelect = false;
      compoSelect = false;
    }
    if (this.value === "Complementary") {
      anaSelect = false;
      monoSelect = false;
      shadSelect = false;
      triSelect = false;
      compleSelect = true;
      compoSelect = false;
    }
    if (this.value === "Compound") {
      anaSelect = false;
      monoSelect = false;
      shadSelect = false;
      triSelect = false;
      compleSelect = false;
      compoSelect = true;
    }
    updateFirst(event);
  },
  false
);
