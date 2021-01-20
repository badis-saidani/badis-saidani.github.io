"use strict";

window.onload = loadJS;
var btnBigger;
var chkBling;
var txtDeco;

function loadJS() {

    txtDeco = document.getElementById('txtDeco');
    btnBigger = document.getElementById('biggerdeco');
    chkBling = document.getElementById('chkBling');

    txtDeco.style.fontSize = "24pt";

    btnBigger.addEventListener('click', biggerDeco);
    chkBling.addEventListener('change', blink);
}

function biggerDeco() {
    
    var timer = setInterval(()=>{
        let s = txtDeco.style.fontSize;
        let x = parseInt(s.slice(0, s.indexOf("pt")));
        txtDeco.style.fontSize = x+2+"pt";
    },500);
}

function blink() {
    
    txtDeco.style.fontWeight = (chkBling.checked)?"bold":"normal";

    if (txtDeco.style.fontWeight == "bold") {
        txtDeco.style.color = "green";
        txtDeco.style.textDecoration = "underlind";
    }
}