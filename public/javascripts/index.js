const socket = io()

const click = document.getElementById("click")
let timer = null

document.onclick = e => {
  socket.emit("click", { x: event.clientX, y: event.clientY, timer: timer });
};

document.onmousedown = e => {
    timer = new Date()
};

document.onmouseup = e => {
    timer = new Date - timer
};

window.ontouchstart = e => {
    console.log('ontouchstart');    
    timer = new Date
};

window.ontouchend = e => {
  
    console.log('ontouchend');  
    timer = new Date - timer
  socket.emit("click", { x: event.clientX, y: event.clientY, timer: timer });
};

socket.on("remoteClick", data => {
  console.log(data);
  click.classList.remove("hidden");
  click.style.left = data.x + "px";
  click.style.top = data.y + "px";
  click.innerText = data.timer/1000

  setTimeout(() => {
    addClass();
  }, 3000);
});

const addClass = () => {
  click.classList.add("hidden");
};
