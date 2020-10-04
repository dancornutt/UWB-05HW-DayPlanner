let dayPlanner;
let currTime = moment().format('MMMM Do YYYY, h:mm:ss a');

function setTimeStyle(timeBlockId) {
    let now = parseInt(moment().format("H"));
    timeBlockId = parseInt(timeBlockId);
    if (timeBlockId < now) {
        $(`#${timeBlockId}text`).removeClass( "present future" ).addClass( "past" );
    }
    else if (timeBlockId > now) {
        $(`#${timeBlockId}text`).removeClass( "past present" ).addClass( "future" );
    } else {
        $(`#${timeBlockId}text`).removeClass( "past future" ).addClass( "present" );
    }
}

//Iterates through timeslots and calls function to apply correct style
function loadTimeClass() {
    let timeBlocks = Object.keys(dayPlanner);
    timeBlocks.forEach(element => {
        setTimeStyle(element);
    });
}

//Update UI based on data in local storage
function refreshPlanner() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    dayPlanner = JSON.parse(localStorage.getItem("planner"));
    if (!dayPlanner) {
        dayPlanner = {
            9: "",
            10: "",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
            16: "",
            17: "",
        };
    };
    let timeBlocks = Object.keys(dayPlanner);
    timeBlocks.forEach(element => {
        $(`#${element}text`).html(dayPlanner[element]);
    });
}

//click listener for appt. block editing, save to local storage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    let rowClickedId = $(this).parent()[0].id;
    dayPlanner[rowClickedId] = $(`#${rowClickedId}text`).val();
    //push dayPlanner to local storage
    localStorage.setItem("planner", JSON.stringify(dayPlanner));
})

refreshPlanner();
loadTimeClass();
