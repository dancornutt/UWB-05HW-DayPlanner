let dayPlanner;
let currTime = moment().format('MMMM Do YYYY, h:mm:ss a');

//Applies correct hour class style to all blocks
function loadTimeClass() {
    console.log("Clicked loadTimeClass function!");
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
        };
    };
    console.log("Dayplanner object: ", dayPlanner);
    let timeBlocks = Object.keys(dayPlanner);
    timeBlocks.forEach(element => {
        // console.log($(`#${element}`)[0].children[1]); //can't get this to set val of textarea
        let temp = $(`#${element}text`);
        temp.html(dayPlanner[element]);

    });
}

//click listener for apt block editing, save to local storage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    //update dayPlanner in memory
    let rowClickedId = $(this).parent()[0].id;
    dayPlanner[rowClickedId] = $(`#${rowClickedId}text`).val();
    //push dayPlanner to local storage
    localStorage.setItem("planner", JSON.stringify(dayPlanner));
})


refreshPlanner();
loadTimeClass();
