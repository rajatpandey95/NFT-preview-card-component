let equiImage = document.getElementById("equiImage");
let equiImageChild = document.getElementById("equiImageChild");

let iconView = document.getElementById("iconView");

equiImage.addEventListener("mouseover", function(){
    equiImageChild.style.bottom = "0px";
    iconView.style.visibility ="visible";
});
equiImage.addEventListener("mouseout", function(){
    equiImageChild.style.bottom = "100%";
    iconView.style.visibility ="hidden";
});
