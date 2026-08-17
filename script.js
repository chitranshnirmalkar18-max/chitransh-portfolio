const text =💻Future Software Devloper";
cont typing=
document.getElementById("typing");
let i=0;
function typewriter(){
if (i<text.length){
typing.innerHTML+=
text.charAt(i);
i++;
setTimeout(typewriter,100);
}
}
window.onload = function(){
typewriter();
};
