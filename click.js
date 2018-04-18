$(document).ready(function () {

    var numClicked;
    var lastClickHrNotation;
    var lastClickMinutesAgo;

    var timePassed;
    
    // initialize the first "data" when the page loads
    var seconds = new Date();
    localStorage.setItem("seconds", seconds)


    // check if no variables are in local storage
    if (!localStorage.getItem('numClicked')) {
        numClicked = 0;
        lastClickHrNotation = "never";
        lastClickMinutesAgo = "never";

        $("#timesClicked").html("Button clicked: " + numClicked + " times")
        $("#lastClick").html("Last click at " + lastClickHrNotation + " ( " + lastClickMinutesAgo + " minutes ago )");
    } else {
        numClicked = localStorage.getItem('numClicked');
        lastClickHrNotation = localStorage.getItem('lastClickedHr');
        lastClickMinutesAgo = localStorage.getItem('lastClickedMin');

        $("#timesClicked").html("Button clicked: " + numClicked + " times")
        $("#lastClick").html("Last click at " + lastClickHrNotation + " ( " + lastClickMinutesAgo + " minutes ago )");
    }

    
    $("#theButtonToClick").on("click", function (event) {
        numClicked++;

        lastClickHrNotation = (new Date).toLocaleTimeString();

        timePassed = Date.parse(localStorage.getItem('seconds'));

        console.log("L1: " + timePassed);

        timePassed = Math.floor((new Date() - timePassed) / 1000);

        lastClickMinutesAgo = Math.floor(timePassed / 31536000);
        lastClickMinutesAgo = Math.floor(timePassed / 60);



        $("#timesClicked").html("Button clicked: " + numClicked + " times");
        $("#lastClick").html("Last click at " + lastClickHrNotation + " ( " + lastClickMinutesAgo + " minutes ago  or " + timePassed + " seconds ago )");

        localStorage.setItem('seconds', new Date());
        localStorage.setItem('numClicked', numClicked);
        localStorage.setItem('lastClickedHr', lastClickHrNotation);
        localStorage.setItem('lastClickedMin', lastClickMinutesAgo);
        localStorage.setItem('lastClickedSec', timePassed);

        console.log("L2: " + localStorage.getItem('seconds'));
    })
});