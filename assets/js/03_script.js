//function pintar(){
//    ele = document.getElementById("ele1")
//    ele.style.backgroundColor = 'yellow'
//}
//ele = document.getElementById("ele1");
//ele.addEventListener("click", pintar);

pintar = (ele, color) => ele.style.backgroundColor = color;
ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele, 'yellow'));