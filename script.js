let dayPlanner;
let currTime = moment().format('MMMM Do YYYY, h:mm:ss a');

//Applies correct hour class style to all blocks
function loadTimeClass() {
    continue;
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
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
        }
    }
}

//Saves apppointment information of hour block in localStorage
function saveApt() {
    
}

//click listener for apt block editing


refreshPlanner();
loadTimeClass();
