let mnu_btn = document.getElementById("mnu_btn");
let mnu = document.querySelector(".mnu");
let opsions = document.querySelectorAll(".opsion");

let pages = document.querySelectorAll(".page");
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let calculate = document.querySelector(".calculate");
let draw = document.querySelector(".draw");
let rndm_clr = document.querySelector(".clr_gnrtr");
let hm_txt = document.querySelector(".home_text");
let hmPage = document.querySelector(".home-page");

let display = document.getElementById("display");
let clr_out = document.getElementById("clr_output");
let gnrt_btn = document.getElementById("gnrt_btn");

let rndm_color;

home.style.display = "block";
hmPage.classList.add("actve");
setInterval(()=>{
  if (home.style.display == "block") {
    let clr = "#" + Math.floor(Math.random() * 16777125).toString(16).padStart(6, "0") + "55";
    home.style.background = clr;
    }
},1000);

mnu_btn.addEventListener("click",()=>{
  mnu.classList.toggle("actv");
});
mnu.addEventListener("click",()=>{
  mnu.classList.remove("actv");
});

opsions.forEach(opsion => {
  opsion.addEventListener("click",()=>{
    opsions.forEach(op => {op.classList.remove("actve")});
    opsion.classList.add("actve");
    pages.forEach(page => {
      page.style.display = "none";
      if (opsion.id == "about") {
        about.style.display = "block";
      } else if (opsion.id == "calculator") {
        calculate.style.display = "block";
      } else if (opsion.id == "draw") {
        draw.style.display = "block";
      } else if (opsion.id == "rndm-clr") {
        rndm_clr.style.display = "block";
      } else {
        home.style.display = "block";
      }
    });
  });
});

const calc = (x) => {
  if (display.innerText.length >= 10) {
    return;
  } else {
    display.innerText += x;
  }
}
const eq = () => {
  let result = eval(display.innerText);
  display.innerText = result;
}
const clr = () => {
  display.innerText = "";
}

draw.addEventListener("touchmove",(e) => {
  let line = document.createElement("div");
  line.className = "line";
  let x = e.touches[0];
  line.style.top = x.clientY - 12 + "px";
  line.style.left = x.clientX - 12 + "px";
  draw.appendChild(line);
  setTimeout(() =>{line.remove()}, 2000);
});

gnrt_btn.addEventListener("click", ()=>{
  rndm_color = "#" + Math.floor(Math.random() * 16777135).toString(16).padStart(6, "0");
  let rotate = Math.floor(Math.random() * 360) + "deg";
  clr_out.style.background = rndm_color;
  clr_out.style.boxShadow = `0 0 30px ${rndm_color}, inset 5px 5px 10px #FFFFFF, inset -5px -5px 10px #000000`;
  clr_out.style.transform = `rotate(${rotate})`;
  clr_out.innerText = "";
});
clr_out.addEventListener("click", ()=>{
  if (rndm_color === undefined) clr_out.innerText = "Please generate a colour first.";
  else {
    navigator.clipboard.writeText(rndm_color).then(()=>{clr_out.innerText = "Colour Copied!!!"}).catch(()=>{clr_out.innerText = "Couldn't copy the colour!"});
  }
});

hm_txt.addEventListener("click", ()=>{
  mnu_btn.click();
});