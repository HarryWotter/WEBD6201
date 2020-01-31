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

    let largeButton;

    let h3;

    let fisrtParagraph;

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
        // Part 1a.
        // links the variable to the element id
        largeButton = document.getElementById("largeButton");
        // changes button text to learn more
        largeButton.textContent = "Learn More"

        // Part 1b.
        // creates a new h3 element
        h3 = document.createElement("h3");
        // sets the content of the element and inserts it before the button
        h3.textContent = "Name: Roshan Persaud 100560748"
        h3.insertBefore(largeButton);

        // Part 1c.
        // links the variable to the element id and then changes the content of the element
        fisrtParagraph = document.getElementById("firstParagraph")
        fisrtParagraph.textContent = "JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods."

        // Part 1d.
        // hides the content of the first paragraph element
        fisrtParagraph.style.display = "none";

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

