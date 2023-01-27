//Here we're importing items we'll need. You can add other imports here.

import c3 from "c3";
const months = [
  "Jan","Feb","Mar","Apr","May","Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
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

    
  onclick: function (d) {
    console.log("data",d);
    const name = d.name;
    const index = d.index;
    const value = d.value;  
    const month = months[index];
    console.log("Index",index);
    console.log("Month",month);
    const newObj = {month,name,value}; 

    console.log("NewOBJ",newObj);//     const {value, id, index} = d;
//     const month = months[index];
// // console.log("data", d);
//     const obj = {id,value,month};
    FileMaker.PerformScript("onChartClick",JSON.stringify(newObj))


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

window.transformChart = function(type){

  chart.transform(type);
};

window.loadNewData = function(json){
  
const obj = JSON.parse(json);
const data = obj.data;
console.log(data);
chart.load({
  json: data,
  keys: { x: "month", value: ["Bananas"] },
});

};

};
