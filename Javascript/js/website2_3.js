console.log("Events & event");

document.getElementById("heading").addEventListener("click",function(e){
    console.log("You clicked on heading");
    // location.href = 'https://google.com';
  let variable;
  variable = e.target;
  variable = e.target.className;
  variable = e.target.classList;
  variable = Array.from(e.target.className);
  variable = e.offsetX;
  variable = e.offsetY;
  variable = e.clientX;
  variable = e.clientY;
  
    console.log(variable);

})



// Some properties of the event object used in the above program are:

// type: This will tell the event type, here it is "click".
// currentTarget:It returns the element whose event listeners triggered the event.
// clientX / event.clientY: It returns the window-relative coordinates of the cursor, for pointer events.

//Event Properties and Methods:-
// Property/Method

// Description

// altKey

// It will return whether the "ALT" key was pressed when the mouse event was triggered.

// button

// It will return which mouse button was pressed when the mouse event was triggered.

// charCode

// It will return the Unicode character code of the key that triggered the onkeypress event.

// clientX

// It will return the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered.

// clientY

// It will return the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered.

// code

// It will return the code of the key that triggered the event.

// deltaX

// It will return the horizontal scroll amount of a mouse wheel (x-axis).

// deltaY

// It will return the vertical scroll amount of a mouse wheel (y-axis).

// deltaZ

// It will return the scroll amount of a mouse wheel for the z-axis.

// detail

// It will return a number that indicates how many times the mouse was clicked.

// keyCode

// It will return the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event.

// location

// It will return the location of a key on the keyboard or device.

// pageX

// It will return the horizontal coordinate of the mouse pointer, relative to the document, when the mouse event was triggered.

// pageY

// It will return the vertical coordinate of the mouse pointer, relative to the document, when the mouse event was triggered.

// screenX

// It will return the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered.

// screenY

// It will return the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered.

// shiftKey

// It will return whether the "SHIFT" key was pressed when an event was triggered.

// type

// It will return the name of the event.

// which

// It will return which mouse button was pressed when the mouse event was triggered.

// view

// It will return a reference to the Window object where the event occurred.

 