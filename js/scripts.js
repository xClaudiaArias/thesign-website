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
// seperate imgs
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");

let index = 1;
slide_img[index].style.display = "block";

// ------ right btn slide

right_btn.addEventListener("click", function () {
  index++;

  if (index >= slide_img.length) {
    index = 0;
  }
  let next_img = slide_img[index];

  slide_img.forEach((slide) => {
    slide.style.display = "none";
  });
  console.log(index, " index TOP");
  console.log(index, " index BOTTOM");

  console.log(next_img, " next_img");
  next_img.style.display = "block";
});

// ------ left btn slide

left_btn.addEventListener("click", function () {
  index--;

  if (index < 0) {
    index = 2;
  }
  let prev_img = slide_img[index];

  slide_img.forEach((slide) => {
    slide.style.display = "none";
  });
  console.log(index, " index TOP");
  console.log(index, " index BOTTOM");

  console.log(prev_img, " prev_img");
  prev_img.style.display = "block";
});
