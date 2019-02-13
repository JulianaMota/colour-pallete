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
  let hexCode = document.querySelector(".hexCode");
  let color1 = document.querySelector(".color1");
  if (color1) {
    color1.style.backgroundColor = event.target.value;
    hexCode.textContent = event.target.value;
  }
}

/*colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("chan\ge", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}*/

/*function getColor(e) {
  e.preventDefault();
  const colorValue = document.getElementById("color1").value;
  console.log(colorValue);
  document.querySelector(".color1").innerHTML = colorValue;
}

getColor();*/
