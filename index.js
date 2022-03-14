const btn = document.getElementById("btn");
const toolTip = document.getElementById("tooltip");

btn.onclick = () => toolTip.classList.toggle("onclick");
window.onresize = () => toolTip.classList.remove("onclick");

