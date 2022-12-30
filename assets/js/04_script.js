let color = "white";
document.addEventListener('keydown' , (event) => {
    if (event.key === 'a') color = "red";
    if (event.key === 's') color = "green";
    if (event.key === 'd') color = "blue";
    console.log("key [" + event.key + "] => " + color)
});

document.addEventListener('click', (event) => {
    if (event.target.id === "") return;
    console.log("click en el div id: " + event.target.id)
    let currentDiv = document.querySelector("#" + event.target.id)
    currentDiv.style.backgroundColor = color;
});