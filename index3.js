var currentDate = new Date();
console.log(currentDate);
var currentMonth = currentDate.getMonth() + 1;
var currentDay = currentDate.getDate();
var currentHour = currentDate.getHours();
var currentMinute = currentDate.getMinutes();
var currentSeconds = currentDate.getSeconds();

$(".Submit-btn").on("click", function () {
    countdownInterval = setInterval(function () {
        timeUntilDate();
    }, 1000);
});

function saveInputDate() {
    return $(".dateInput").val();
}

function saveInputHours() {
    var hours = $("#hoursInput").val();
    if (hours >= 24) {
        return 23;
    } else {
        return hours;
    }
}

function saveInputMinutes() {
    var minutes = $("#minutesInput").val();
    if (minutes >= 60) {
        return 59;
    } else {
        return minutes;
    }
}

function timeUntilDate() {
    var dateComponents = saveInputDate().split("-");
    var chosenMonth = parseInt(dateComponents[1], 10);
    var chosenDay = parseInt(dateComponents[2], 10);
    var chosenYear = 2024;
    var chosenHour = saveInputHours();
    var chosenMinutes = saveInputMinutes();

    var targetDate = new Date(chosenYear, chosenMonth - 1, chosenDay, chosenHour, chosenMinutes, 0).getTime();

    var now = new Date().getTime();

    var difference = targetDate - now;
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    $('.countdown').html(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's');

    if (difference <= 0) {
        clearInterval(countdownInterval);
        $('.countdown').html('Time Up!');

    }
}


