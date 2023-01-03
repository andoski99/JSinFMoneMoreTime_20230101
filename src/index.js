//Here we're importing items we'll need. You can add other imports here.

import c3 from "c3";

window.loadChart = function (json) {

console.log ("loadChart",json);

const obj = JSON.parse(json);

const data = obj.data;
const chartType = obj.chartType;
const chartLabels = obj.chartLabels;


console.log(obj);

    // <h1>Alright. You're set.</h1>
    // <h2>Now build something amazing!</h2>
    // <button type="button">Click Me!</button>);

// data = [
//   {
//     month: "Jan",
//     Apples: 327,
//     Peaches: 437,
//     Pears: 111,
//   },
//   {
//     month: "Feb",
//     Apples: 555,
//     Peaches: 454,
//     Pears: 222,
//   },
//   {
//     month: "Mar",
//     Apples: 242,
//     Peaches: 864,
//     Pears: 343,
//   },
//   {
//     month: "Apr",
//     Apples: 222,
//     Peaches: 454,
//     Pears: 434,
//   },
// ];

const options = {
  bindto: "#chart",
  size: {
    width: 640,
    height: 300,
  },

  data: {

    
    onclick: function (d, element) { 
  
},
    type: chartType,
    labels: chartLabels,

    json: data,
    keys: { x: "month", value: ["Apples", "Peaches", "Pears"] },
    // columns: [
    //   ["Apples", 130, 200, 100, 400, 150, 250],
    //   ["Pears", 50, 120, 10, 240, 15, 125],
    // ],
  },
  axis: { x: { type: "category" }, y: {} },
};


const chart = c3.generate(options);

// //The first function. Remove this.
// const btn = document.querySelector("button");
// btn.onclick = function () {
//   alert("You ran some JavaScript");
// };

};
