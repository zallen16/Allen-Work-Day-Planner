dayjs().format('hh:mm:ss a');
$('#currentDay').text(dayjs());


var dayInput = $("#details")

var saveButton = $(".btn")
console.log(saveButton)

dayInput.val(localStorage.getItem("plan"));

var d1 =

  $(document).ready(function () {
    saveButton.on("click", function () {


      var myButton = $(this)
      console.log(myButton)
      console.log(myButton.siblings())
      console.log(myButton.siblings("textarea"))
      console.log(myButton.siblings("textarea").val())
      
      var plan = dayInput.value;

      localStorage.setItem("plan", plan);
      localStorage.getItem("plan");

    })

  
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
    
    // code below was written before implementation of "for" loop
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
  });
