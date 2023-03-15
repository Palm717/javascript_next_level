// JavaScript is the dynamic element to the webpage. The King of styling is CSS, however.
//we want to still do our main styling in CSS and use JS as a style injector.
//element target selectors and global variables are always placed at the top of the page
//the values of those element selectors or new variables come after

var h1 = document.querySelector("h1");
var button = document.querySelector("button");
var body = document.body;
var ul = document.querySelector("ul");
var h3 = document.querySelector("h3");
//below is our value
var darkModeActive = false;
var count = 10;
h1.innerText = "JS Next Level";

//step 1: create a toggle between two modes of color
//step 2: create a variable that tracks if dark mode is active on the webpage
//step 3: if variable is true, switch to light, else switch to dark

// button.addEventListener("click", function () {
//   if (!darkModeActive) {
//     //switch to dark mode
//     body.classList.add("darkmode");
//     //change innerText to Light Mode
//     button.innerText = "Light Mode";
//     //darkmode is now active
//     darkModeActive = true;
//   } else {
//     body.classList.remove("darkmode");
//     button.innerText = "Dark Mode";
//     darkModeActive = false;
//   }
// });
//   console.log("clicked");
//   body.classList.add("darkmode"); // adds a class
//   body.classList.remove("main_styles"); // removes a class
//   body.setAttribute("class", "darkmode"); // built a darkmode class into my css and called it through JS to style the element
//changes the background gray and the color of the text to white for a darkmode style

// function newStuff(num, str, callBack, anotherNum) {
//   callBack("make me console out"); //how can I get this out. someVal -- passing an argument to it's param function
//   console.log(anotherNum);
// }

// //drill call backs to get a great understanding and a higher level of developer knowledge
// newStuff(
//   10,
//   "something",
//   function (someVal) {
//     console.log("Make this Print");
//     console.log("another");
//     console.log(someVal);
//   },
//   1500
// );

//the code above can be combined and cleaned up

//functions work the same no matter if they are a method of an object, a global direction, or a callBack that was passed in as an argument. They ALWAYS work the same
// they take an argument and are referenced with the matching parameters

//syncronous is a block of code without delay. It's run and completed at the same time
//async is a delayed code block

//using setInterval()

//var h3 = document.querySelector('h3');
//var count = 0; arbitrary number

//On page load initialize eventListeners and run any functions that need to process when
//the page first loads

//initialize our app

function setHeaderText() {
  h1.innerText = "JS Next Level";
}

function toggleDarkMode() {
  button.addEventListener("click", function () {
    if (!darkModeActive) {
      //switch to dark mode
      body.classList.add("darkmode");
      //change innerText to Light Mode
      button.innerText = "Light Mode";
      //darkmode is now active
      darkModeActive = true;
    } else {
      body.classList.remove("darkmode");
      button.innerText = "Dark Mode";
      darkModeActive = false;
    }
  });
}

function countdownTimer() {
  var timer = setInterval(function () {
    //   count++; //adds time
    count--; //reduces time
    h3.innerText = "Count: " + count;
    // console.log("run this");
    //check count and if = 0; clear the interval
    if (count === 0) {
      clearInterval(timer);
      alert("Times up");
    }
  }, 1000);
}

function init() {
  setHeaderText(); //runs  this first and then this functions job is over
  countdownTimer(); // function runs and ends
  toggleDarkMode(); //function runs and ends

  // var lis = document.querySelectorAll("li");

  // for (var li of lis) {
  //   li.addEventListener("click", function (eventObj) {
  //     console.log(this.innerText); //is a fast way to use a target to get to the scene (element) of the action (event)
  //     // console.log(eventObj.target.innerText); //-- grabs the innerText from the element on the click event//this is our callBack -- the element that we clicked on -- my target
  //     // console.log("li clicked");
  //   });
  // }

  ul.addEventListener("click", function (eventObj) {
    console.log(eventObj.target);
  });
  //target returns the scene of the
  //the target property is the element that caused the action (event) -- I must target the element in order to trigger the callback
  // returns me every li as an object after the loop
  //events are actions!!!!!!!
  //events are actions !!!!!! they trigger a callback function

  //how can we use preventDefault and stopPropagation?
  //

  //   var bubbleDiv = document.querySelector(".bubble");
  //   bubbleDiv.addEventListener("click", function () {
  //     console.log("do I still work?");
  //   });

  //   var link = document.querySelector("#link");
  //   link.addEventListener("click", function (obj) {
  //     obj.preventDefault(); //prevents the page from loading when clicked. overrides the default DOM

  //     window.location = "https://github.com"; // relocates  the link from google to github. overrides the link destination
  //     console.log("wait! Link clicked");
  //   });
}

//preventDefault -- stops the DOM override
//stopPropogation -- stop bubbling
//propogation -- stop propogation -- override the browser DOM defualt settings
//this is a page load function. when the page loads there's no delay for this information to be loaded onto our browser
//short for initialize
init();

// function myFunc(num, cb) {
//   cb("something");//cb was given a paramter of str and becomes an argument
// }

// myFunc(10, function (str) {
//   console.log(str);
// }); // by using a parameter we gave this funtion a name

// remember a function within a function is referenced as a callback function
//setInterval() is a loop of the callback function until we stop it
//this would be done with a clearInterval() function

//setTimeout() is similar to setInterval except it runs once
// setTimeout(function () {
//   console.log("this is a timeout");
// }, 3000);

//learn about localStorage for high scores
