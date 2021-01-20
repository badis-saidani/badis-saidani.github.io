"use strict";

window.onload = loadJS;

var accountInfoList;
var txt;
var btn;
var nameField;
var depositField;
function loadJS() {
    accountInfoList = [];
    txt = document.getElementById('txt');
    btn = document.getElementById('create');
    nameField =  document.getElementById('name');
    depositField = document.getElementById('deposit');

    btn.addEventListener('click', createACC);

}

const myModule = (function(){
const display = function(){
    let str = "";
    accountInfoList.forEach(a => {
        str += ('Account name: '+a.name+' '+'Balance: '+a.deposit+'\n');
    });
    txt.value = str;
};
const createAccount = function(name, deposit){
    accountInfoList.push({name,deposit});
    display();
};

    return {
        createAccount: createAccount
    };

})();

function createACC() {
    myModule.createAccount(nameField.value, depositField.value)
}