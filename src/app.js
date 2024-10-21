/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

window.onload = function() {
  let subjects = ["El perro", "Mi abuela", "El coche", "El profesor Javier"];
  let actions = ["se comió", "rompió", "perdió", "olvidó"];
  let objects = ["mis deberes", "la tarea", "el proyecto", "la clase"];
  let places = ["en el parque", "en la academia", "en su casa"];

  function generateExcuse() {
    let subject = subjects[Math.floor(Math.random() * subjects.length)];
    let action = actions[Math.floor(Math.random() * actions.length)];
    let object = objects[Math.floor(Math.random() * objects.length)];
    let place = places[Math.floor(Math.random() * places.length)];

    return `${subject} ${action} ${object} ${place}`;
  }  

    document.getElementById("generateExcuse").addEventListener("click", () => {
      document.getElementById("excuse").innerHTML = generateExcuse();
    });
  };
