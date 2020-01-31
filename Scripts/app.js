/*
    Student Name  : Roshan Persaud
    StudentID     : 100560748
    Date Completed: Jan. 30, 2020
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    let largeButton = document.getElementById("largeButton");

    let h3;

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
        largeButton.textContent = "Learn More"

        h3 = document.createElement("h3");
        h3.textContent = "Name: Roshan Persaud 100560748"
        h3.insertBefore(largeButton);

        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

