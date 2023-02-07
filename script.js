// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //beginning of the input reading function for the event listener
  function handleCalendarEntries() {
    console.log(event.target);
    //console.log($(calendarListDiv.children('div').children('textarea')).val());
  }

  

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  //saves current dayjs time as variable "today"
var today = dayjs();
//sets the display header to show today's date (look into updating every second)********
    $('#currentDay').text(today.format('MMMM DD, YYYY'));

    
var calendarListDiv = $("#event-list-div");
    calendarListDiv.on('click', '.btn', handleCalendarEntries);
});
