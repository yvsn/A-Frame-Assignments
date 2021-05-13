

// // changing individual properties with code and using setInterval
var rotationSpeed = -0.05;
var rotationSpeed_2 = 0.02;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
myOtherBox.object3D.rotation.x += rotationSpeed;
myOtherBox.object3D.rotation.y += rotationSpeed_2;
myOtherBox.object3D.location.z += rotationSpeed;
console.log(myOtherBox.object3D.rotation.x);
console.log(myOtherBox.object3D.rotation.y);
console.log(myOtherBox.object3D.location.z);
}
setInterval(spin, 16); //equivalent to 60 fps