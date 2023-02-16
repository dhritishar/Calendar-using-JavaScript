function timeDisplay() {
    const timeSelector = document.getElementById("currentDay")
    let rightNow = moment().fortmat('MMMM do YYYY, h:mm:ss A');
    timeSelector.innerHTML = rightNow
};

function auditTimes() {
    let currentHour = moment().hour();
    $(".time-block").each(function () {
        const timeBlock = parseInt($(this).attr("id"))
        //if the time has passed, it is in the past
        if (currentHour > timeBlock) {
            $(this).addClass("past")
            $(this).removeClass("present")
            $(this).removeClass("future")
        }
        
        //if the time is current, it is in the present

        else if (currentHour === timeBlock) {
            $(this).removeClass("past")
            $(this).addClass("present")
            $(this).removeClass("future")
        }
        
        //if the time has yet to come, it is in the future

        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
};

function saveSchedule() {
    $(".saveBtn").on("click", function() {
        time = $(this).parent($(".row time-block")).attr("id")
        text = $(this).siblings(".description").val()
        localStorage.setItem(time, text)
    })
}

//fill in text areas by retrieving from local storage

$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));

timeDisplay()
auditTimes()
saveSchedule();
loadSchedule();





// // //starting time of workday is 9am

// // //current time in hours
// var hour = moment().format('H');
// console.log(hour);

// function time() {
//     //display today, spell out day (dddd) and month (mmm), date and time
//     var displayCurrentTime = document.querySelector("#currentDay");
//     var currentTime = moment();
//     displayCurrentTime.textContent = currentTime.format("dddd MMM Do YYYY, HH:mm:ss A");
// }

// //update date and time every 30 secs
// setInterval(time, 30000);

// //save schedule in local storage
// $(".saveBtn").on("click", function() {
//     var time = $(this).parent().attr("id");
//     console.log(time);
//     var desc = $(this).siblings(".description").val();
//     console.log(desc);
//     localStorage.setItem(time, desc);
// });

// //---------9AM---------//
// //if time is coming up
// if(hour <9) {
//     $("#9am-description").addClass("future");
// }
// //if time is current
// else if (hour == 9) {
//     $("#9am-description").addClass("present");
// }
// //if time has passed
// else (hour > 9) {
//     $("9am-description").addClass("past");
// }

// //---------10AM---------//
// //if time is coming up
// if(hour <10) {
//     $("#10am-description").addClass("future");
// }
// //if time is current
// else if (hour == 10) {
//     $("#10am-description").addClass("present");
// }
// //if time has passed
// else (hour > 10) {
//     $("10am-description").addClass("past");
// }

// //---------11AM---------//
// //if time is coming up
// if(hour <11) {
//     $("#11am-description").addClass("future");
// }
// //if time is current
// else if (hour == 11) {
//     $("#11am-description").addClass("present");
// }
// //if time has passed
// else (hour > 11) {
//     $("11am-description").addClass("past");
// }

// //---------12PM---------//
// //if time is coming up
// if(hour <12) {
//     $("#12pm-description").addClass("future");
// }
// //if time is current
// else if (hour == 12) {
//     $("#12pm-description").addClass("present");
// }
// //if time has passed
// else (hour > 12) {
//     $("12pm-description").addClass("past");
// }

// //---------1PM---------//
// //if time is coming up
// if(hour <13) {
//     $("#1pm-description").addClass("future");
// }
// //if time is current
// else if (hour == 13) {
//     $("#1pm-description").addClass("present");
// }
// //if time has passed
// else (hour > 13) {
//     $("1pm-description").addClass("past");
// }

// //---------2PM---------//
// //if time is coming up
// if(hour <14) {
//     $("#2PM-description").addClass("future");
// }
// //if time is current
// else if (hour == 14) {
//     $("#2pm-description").addClass("present");
// }
// //if time has passed
// else (hour > 14) {
//     $("2pm-description").addClass("past");
// }

// //---------3PM---------//
// //if time is coming up
// if(hour <15) {
//     $("#3pm-description").addClass("future");
// }
// //if time is current
// else if (hour == 15) {
//     $("#3pm-description").addClass("present");
// }
// //if time has passed
// else (hour > 15) {
//     $("3pm-description").addClass("past");
// }

// //---------4PM---------//
// //if time is coming up
// if(hour <16) {
//     $("#4pm-description").addClass("future");
// }
// //if time is current
// else if (hour == 16) {
//     $("#4pm-description").addClass("present");
// }
// //if time has passed
// else (hour > 16) {
//     $("4pm-description").addClass("past");
// }

// //---------5PM---------//
// //if time is coming up
// if(hour <17) {
//     $("#5pm-description").addClass("future");
// }
// //if time is current
// else if (hour == 17) {
//     $("#5pm-description").addClass("present");
// }
// //if time has passed
// else (hour > 17) {
//     $("5pm-description").addClass("past");
// }

// //fill in text areas by retrieving from local storage
// $("#9am .description").val(localStorage.getItem("9am"));
// $("#10am .description").val(localStorage.getItem("10am"));
// $("#11am .description").val(localStorage.getItem("11am"));
// $("#12pm .description").val(localStorage.getItem("12pm"));
// $("#1pm .description").val(localStorage.getItem("1pm"));
// $("#2pm .description").val(localStorage.getItem("2pm"));
// $("#3pm .description").val(localStorage.getItem("3pm"));
// $("#4pm .description").val(localStorage.getItem("4pm"));
// $("#5pm .description").val(localStorage.getItem("5pm"));






