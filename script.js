
$(function () {  
  
  //saves current dayjs time as variable "today"
var today = dayjs();
//var hours = [9, 10, 11, 12, 13, 14, 15, 16];
//sets the display header to show today's date (look into updating every second)********
    $('#currentDay').text(today.format('MMMM DD, YYYY'));
  
  //beginning of the input reading function for the event listener
  function handleCalendarEntries() {
    
  }
  //array of hour block divs to iterate over to set past, current and future stylings

  var hourBlockDivs = $("#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16");

  var currentHour = dayjs().format("H");
    for (let i = 0; i < hourBlockDivs.length; i++) {
      if (hourBlockDivs[i].dataset.hour < currentHour) {
        $(hourBlockDivs[i]).addClass("past");
      } else if (hourBlockDivs[i].dataset.hour === currentHour) {
        $(hourBlockDivs[i]).addClass("present");
      } else if (hourBlockDivs[i].dataset.hour > currentHour) {
        $(hourBlockDivs[i]).addClass("future");
      };
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
  


    
var calendarListDiv = $("#event-list-div");
    calendarListDiv.on('click', '.saveBtn', handleCalendarEntries);
});

