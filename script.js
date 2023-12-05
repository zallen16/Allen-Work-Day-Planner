// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


dayjs().format('hh:mm:ss a');
$('#currentDay').text(dayjs());

//var dayInput = document.querySelector("#details");
var dayInput = $("#details")
//var saveButton = document.querySelector("#btn");
var saveButton = $(".btn")
console.log(saveButton)

dayInput.val(localStorage.getItem("input"));

var d1 =

  $(document).ready(function () {
    saveButton.on("click", function () {


      var myButton = $(this)
      console.log(myButton)
      console.log(myButton.siblings())
      console.log(myButton.siblings("textarea"))
      console.log(myButton.siblings("textarea").val())

      var input = dayInput.value;

      localStorage.setItem("input", input);
      localStorage.getItem("input");

    })

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //



    // saveButton.on("click", function(event) {
    //   event.preventDefault();
    //   var input = dayInput.val().trim();
    //   console.log(input)

    //    localStorage.setItem("input", JSON.stringify(input));
    //    dayInput.innerHTML = localStorage.getItem(input)
    // })



    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    var currentTime = dayjs().hour();
    console.log(currentTime)

    // Calculate milliseconds in a year
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    // Compare two times with same date in Javascript
    var d1 = document.getElementById("#currentDay");
    var d2 = document.getElementById("#hour-09", "#hour-10,", "#hour-11", "#hour-12", "#hour-13", "#hour-14", "#hour-15", "#hour-16", "#hour-17");

    // const hourNumber = d2.split()
    // if (9 < currentTime) {
    //   console.log("past")
    //   $("#hour-09").addClass("past")
    // }
    // if (9 > currentTime) {
    //   console.log("future")
    //   $("#hour-09").addClass("future")
    // }
    // if (9 === currentTime) {
    //   console.log("present")
    //   $("#hour-09").addClass("present")
    // }
    // if (10 < currentTime) {
    //   console.log("past")
    //   $("#hour-10").addClass("past")
    // }
    // if (10 > currentTime) {
    //   console.log("future")
    //   $("#hour-10").addClass("future")
    // }
    // if (10 === currentTime) {
    //   console.log("present")
    //   $("#hour-10").addClass("present")
    // }
    for (var i = 9; i < 18; i++) {

      // console.log(i);
      if (i < currentTime) {
        // console.log("past")
        // console.log("#hour"+i)
        $("#hour-" + i).addClass("past")
      }
      if (i > currentTime) {
        // console.log("future")
        $("#hour-" + i).addClass("future")
      }
      if (i === currentTime) {
        // console.log("present")
        $("#hour-" + i).addClass("present")
      }


    }

    // $('#hour-10').text(dayjs());
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
