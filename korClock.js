// configuration object
var korClockConfig = {
    whatToDo: function() { // example, write your own function
        "use strict";
        console.log("boingBoomTschak");
        var audio = document.querySelector('audio');
        audio.pause(); // there is no stop method, this is an alternative
        if (audio.currentTime !== 0) {audio.currentTime = 0;} // there is no stop method, this is an alternative
        audio.play();
    },
    timeToWait: 2500 // time between two function calls, in miliseconds
};

var korClock = function (theOptions) {
    "use strict";
    var alreadyPlayed = false;

    if (theOptions === undefined || !theOptions.hasOwnProperty("whatToDo") || !theOptions.hasOwnProperty("timeToWait")) {
        console.log("Not enough information. Cannot continu.");
        return;
    }

    // repeat a function a certain number of times, with a certain interval
    function repeater(theFunction, numberOfTimes, timeToWait) {
        var i = 1;
        function t() {
            theFunction();
            if (i < numberOfTimes) {
                i++;
                setTimeout(t, timeToWait);
            }
        }
        t();
    }

    function createNewDate() {
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();

        if (hour > 12) {
            hour = hour - 12;
        } else {
            if (hour === 0) {
                hour = 12;
            }
        }
        return {
            hour: hour,
            minute: minute
        };
    }

    function playActualHour() {
        switch (createNewDate().hour) {
            case 1:
                repeater(theOptions.whatToDo, 1, theOptions.timeToWait);
                break;
            case 2:
                repeater(theOptions.whatToDo, 2, theOptions.timeToWait);
                break;
            case 3:
                repeater(theOptions.whatToDo, 3, theOptions.timeToWait);
                break;
            case 4:
                repeater(theOptions.whatToDo, 4, theOptions.timeToWait);
                break;
            case 5:
                repeater(theOptions.whatToDo, 5, theOptions.timeToWait);
                break;
            case 6:
                repeater(theOptions.whatToDo, 6, theOptions.timeToWait);
                break;
            case 7:
                repeater(theOptions.whatToDo, 7, theOptions.timeToWait);
                break;
            case 8:
                repeater(theOptions.whatToDo, 8, theOptions.timeToWait);
                break;
            case 9:
                repeater(theOptions.whatToDo, 9, theOptions.timeToWait);
                break;
            case 10:
                repeater(theOptions.whatToDo, 10, theOptions.timeToWait);
                break;
            case 11:
                repeater(theOptions.whatToDo, 11, theOptions.timeToWait);
                break;
            case 12:
                repeater(theOptions.whatToDo, 12, theOptions.timeToWait);
                break;
            default:
        }
    }

    function checkTime() {
        var actualMinute = createNewDate().minute;
        if ((actualMinute === 0) && (alreadyPlayed === false)) {
            playActualHour();
            alreadyPlayed = true;
        } else if (actualMinute !== 0) {
            alreadyPlayed = false;
        }
        setTimeout(checkTime, 10000); // every 10 seconds the system clock will be checked
    }
    checkTime();
};

korClock(korClockConfig);