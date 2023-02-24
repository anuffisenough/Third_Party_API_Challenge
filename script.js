
$(function () {  
  
  //saves current dayjs time as variable "today"
  var today = dayjs();

  //sets the display header to show today's date (look into updating every second)********
  $('#currentDay').text(today.format('MMMM DD, YYYY'));

  //array of hour block divs to iterate over to set past, current and future stylings
  var hourBlockDivs = $("#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16");
  //current hour in 24 hour format to compare timeslot times for class stylings
  var currentHour = dayjs().format("H");
    for (let i = 0; i < hourBlockDivs.length; i++) {
      if (parseInt(hourBlockDivs[i].dataset.hour) < parseInt(currentHour)) {
        $(hourBlockDivs[i]).addClass("past");
      } else if (parseInt(hourBlockDivs[i].dataset.hour) === parseInt(currentHour)) {
        $(hourBlockDivs[i]).addClass("present");
      } else if (parseInt(hourBlockDivs[i].dataset.hour) > parseInt(currentHour)) {
        $(hourBlockDivs[i]).addClass("future");
      };
    }

  //saves calendar div for event listener
  var calendar = $("#event-list-div");
  //adds event listener to calendar div and sets variables for button targets, corresponding text area
  calendar.on('click', '.btn', function(event) {
    let clickedButton = event.target.parentElement;
    let timeSlot = $(clickedButton.parentElement).attr('id');
    let timeSlotTextArea = $(clickedButton.parentElement.children[1]);
    let toDoEntry = timeSlotTextArea.val();
    
  //saves text content to local storage
    localStorage.setItem(`${timeSlot}`, toDoEntry);
  });
  //variable for jquery text areas
  var textAreas = $("textarea");
  //for loop to pull locally-stored todos and render them if available
    for (let i = 0; i < textAreas.length; i++) {
      var timeSlotId = $(textAreas[i].parentElement).attr('id');
      if (localStorage.getItem(`${timeSlotId}`) !== null) {
      $(textAreas[i]).text(localStorage.getItem(`${timeSlotId}`));
   }
}});
