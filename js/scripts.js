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

// tuts_btn.addEventListener("mouseover", function () {
//   tuts_drop.style.display = "block";
// });

// community_btn.addEventListener("mouseover", function () {
//   community_drop.style.display = "block";
// });
