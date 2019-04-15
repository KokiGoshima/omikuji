(function(){

"use strict"

let result = document.getElementById("result");
let btn = document.getElementById("btn");
let destinies = ["大凶",　"凶",　"小吉",　"吉",　"中吉",　"大吉"]
let omikuji;

omikuji = function(arrays){
	let num = Math.floor(Math.random() * destinies.length);
	result.innerHTML = arrays[num];
	// result.innerHTML = "hello";
}

btn.addEventListener("click", omikuji(destinies));



})();

