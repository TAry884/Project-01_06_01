/*

Author: Ty Ary
Date: 8.15.18

Filename: script.js

*/

"use strict";

var formValidity = true;

//Sets the page up 
function setUpPage() {
    createEventListeners();
}
//Validates that the form has been completed
function validateForm(evt) {
    formValidity = true;
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    validateRequired();

    if (formValidity) {
        document.getElementsByTagName("form")[0].submit();
    }
}
//Function to validate the required fields
function validateRequired() {
    var inputElements = document.querySelectorAll("#contactinfo" + " input");
    var divvy = document.getElementById("errorText");
    var fieldsetValidity = true;
    var numOElement = inputElements.length;
    var currentElement = null;
    try {
        for (var i = 0; i < numOElement; i++) {
            currentElement = inputElements[i];
            if (currentElement.value === "") {
                fieldsetValidity = false;
                currentElement.style.background = "rgb(255,233,233)";
            } else {
                currentElement.style.background = "white";
            }
        }
        if (fieldsetValidity) {
            divvy.style.display = "none";
            divvy.innerHTML = "";
        } else {
            formValidity = false;
            throw "Please complete the entire form.";
        }

    } catch (msg) {
        divvy.style.display = "block";
        divvy.innerHTML = msg;
        
    }
}
//Creates evevnt listeners for the page
function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.addEventListener("onsubmit", validateForm);
    }
}


//Enables load Event handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.addEventListener("onload", setUpPage);
}
