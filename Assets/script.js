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


