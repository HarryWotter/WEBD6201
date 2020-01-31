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

    let firstParagraph;


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
        largeButton.textContent = "Learn More";

        // Part 1b.
        // creates a new h3 element
        h3 = document.createElement("h3");
        // sets the content of the element 
        h3.textContent = "Name: Roshan Persaud 100560748";
        // references the first h3 tag
        let h3 = document.getElementsByTagName("h3")[0];
        // inserts it before the button
        h3.parentNode.insertBefore(largeButton, h3);

        // Part 1c.
        // links the variable to the element id and then changes the content of the element
        firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.textContent = "JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods.";

        // Part 1d.
        // hides the content of the first paragraph element
        firstParagraph.style.display = "none";

        // Part 2a.
        // creates a click event for the large button
        largeButton.addEventListener("click", function(){
            // Part 2b.
            // makes it so the you can toggle between the two text contents whenever you click the button
            largeButton.textContent = (largeButton.textContent == "Hide Details") ? "Learn More" : "Hide Details";
            
            // Part 2c.
            // makes the first paragraph text hidden if the large button content is Learn More
            if( largeButton.textContent == "Learn More")
            {
                firstParagraph.style.display = "none";
            }
        });

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

