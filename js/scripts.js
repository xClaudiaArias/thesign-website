let dr_btn = document.querySelectorAll(".dr-btn");

let hire_btn = document.getElementById("hire");
let teach_btn = document.getElementById("teach");
let tuts_btn = document.getElementById("tuts");
let community_btn = document.getElementById("community");

let hire_drop = document.getElementById("hire-drop");
let teach_drop = document.getElementById("teach-drop");
let tuts_drop = document.getElementById("tuts-drop");
let community_drop = document.getElementById("community-drop");

hire_drop.style.display = "none";
teach_drop.style.display = "none";
tuts_drop.style.display = "none";
community_drop.style.display = "none";

dr_btn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.id === "hire") {
      teach_drop.style.display = "none";
      tuts_drop.style.display = "none";
      hire_drop.style.display = "block";
      community_drop.style.display = "none";
    } else if (e.target.id === "teach") {
      teach_drop.style.display = "block";
      tuts_drop.style.display = "none";
      hire_drop.style.display = "none";
      community_drop.style.display = "none";
    } else if (e.target.id === "tuts") {
      teach_drop.style.display = "none";
      tuts_drop.style.display = "block";
      hire_drop.style.display = "none";
      community_drop.style.display = "none";
    } else {
      teach_drop.style.display = "none";
      tuts_drop.style.display = "none";
      hire_drop.style.display = "none";
      community_drop.style.display = "block";
    }
  });
});

// ---------------------------- SLIDER

let slider = document.getElementById("slider");
// buttons
let left_btn = document.getElementById("left");
let right_btn = document.getElementById("right");
// images container
let slider_imgs = document.getElementById("slider-imgs");
// images
let slide_img = document.querySelectorAll(".slide-img");
// dots
let dots = document.querySelectorAll(".dot");
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");

// function slideShow() {
//   let index = 1;

//   left_btn.addEventListener("click", function() {
//     slider_imgs.forEach((slide, i) => {
//       con
//     })
//   })
// }

slider_img.forEach((slide, i) => {
  console.log(slide, i, " :slide, i");
});
