// =====
// MISSION BUTTON 
// =====
function showMission() {

    let mission =
    document.getElementById("mission");

    if(mission){

        mission.innerText =
        "Our mission is to reduce pullution by truning waste into reusable resources.";
    }
}

// =====
// WATER RECYCLING INFO
// =====

function showWaterInfo() {
    let info =
    document.getElementById("innovationInfo");

    if(info){
        info.innerText = 
        "Dirty water is purified using treated animal dung, charcoal, sand and gravel filtration systems.";
    }
}

//====
// PLASTIC RECYCLING INFO
// ====
function showPlasticInfo() {
    let info =
    document.getElementById("innovationInfo");

    if(info){
        info.innerText = 
        "plastic waste is collected, melted, and transformed into reusable water bottles.";
    }
}

// ====
// SERVICES PAGE INFO
// ====
function showService(type) {

    let serviceInfo = 
    document.getElementById("serviceInfo");

    if(!serviceInfo) return;

    let message = "";
    if(type === "water") {

        message =
        "Our recyling system uses treated animal dung and natural filtration to clean dirty water safely.";
    }

    else if(type === "plastic") {

        message = 
        "Plastic waste is recycled into reusable water bottle to reduce environmental pollution.";
    }

    else if(type === "collection") {
        message =
        "Residents can request waste collection while lorry owners can join our network.";
    }

    serviceInfo.innerText = message;
}

// ====
// SAVE WASTE DATA 
// ====
let wasteForm =
document.getElementById("wasteForm");
if(wasteForm){

    wasteForm.addEventListener("submit",
function(e){

    e.preventDefault();

    let type =
    document.getElementById("type").value

    let amount =
    parseFloat(
        document.getElementById("amount").value
        );

        let date 
        document.getElementById("date")



}

    )

}












// ===============================
// SAVE WASTE DATA
// ===============================

let wasteForm =
document.getElementById("wasteForm");

if(wasteForm){

wasteForm.addEventListener("submit",
function(e){

    e.preventDefault();

    let type =
    document.getElementById("type").value;

    let amount =
    parseFloat(
    document.getElementById("amount").value
    );

    let date =
    document.getElementById("date").value;

    let message =
    document.getElementById("message");

    // VALIDATION

    if(
        !type.trim() ||
        isNaN(amount) ||
        amount <= 0
    ){

        message.innerText =
        "Please enter valid data.";

        return;
    }

    // LOCAL STORAGE

    let data =
    JSON.parse(
    localStorage.getItem("wasteData")
    ) || [];

    data.push({
        type,
        amount,
        date
    });

    localStorage.setItem(
        "wasteData",
        JSON.stringify(data)
    );

    message.innerText =
    "Waste data saved successfully!";

    wasteForm.reset();

});
}


// ===============================
// DISPLAY SAVED DATA
// ===============================

function displayData() {

    let data =
    JSON.parse(
    localStorage.getItem("wasteData")
    ) || [];

    let list =
    document.getElementById("dataList");

    if(!list) return;

    list.innerHTML = "";

    let totals = {};

    data.forEach(item => {

        let li =
        document.createElement("li");

        li.innerText =
        `${item.type} - ${item.amount}kg (${item.date})`;

        list.appendChild(li);

        totals[item.type] =
        (totals[item.type] || 0)
        + item.amount;

    });

    drawChart(totals);
}

displayData();


// ===============================
// PIE CHART
// ===============================

function drawChart(totals) {

    let canvas =
    document.getElementById("chart");

    if(!canvas) return;

    let ctx =
    canvas.getContext("2d");

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    let keys =
    Object.keys(totals);

    let values =
    Object.values(totals);

    let total =
    values.reduce((a,b)=>a+b,0);

    let start = 0;

    keys.forEach((key, index)=>{

        let slice =
        (values[index] / total)
        * 2 * Math.PI;

        ctx.beginPath();

        ctx.moveTo(150,150);

        ctx.arc(
            150,
            150,
            100,
            start,
            start + slice
        );

        ctx.fillStyle =
        `hsl(${index * 80},
        70%,50%)`;

        ctx.fill();

        start += slice;

    });
}


// ===============================
// POLLUTION BAR CHART
// ===============================

function drawPollutionChart() {

    let canvas =
    document.getElementById(
    "pollutionChart"
    );

    if(!canvas) return;

    let ctx =
    canvas.getContext("2d");

    let labels = [
        "Plastic",
        "Dirty Water",
        "Air",
        "Glass",
        "Organic"
    ];

    let values = [
        90,
        75,
        60,
        45,
        55
    ];

    let barWidth = 70;

    let gap = 25;

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    values.forEach((value,index)=>{

        let x =
        index * (barWidth + gap)
        + 40;

        let y =
        300 - value * 2;

        ctx.fillStyle =
        "#2e7d32";

        ctx.fillRect(
            x,
            y,
            barWidth,
            value * 2
        );

        ctx.fillStyle =
        "#000";

        ctx.font =
        "14px Arial";

        ctx.fillText(
            labels[index],
            x,
            320
        );

        ctx.fillText(
            value + "%",
            x + 10,
            y - 10
        );

    });

}

drawPollutionChart();


// ===============================
// SEARCH FUNCTION
// ===============================

function filterData() {

    let input =
    document.getElementById("search");

    if(!input) return;

    let filter =
    input.value.toLowerCase();

    let items =
    document.querySelectorAll(
    "#dataList li"
    );

    items.forEach(item => {

        item.style.display =
        item.innerText
        .toLowerCase()
        .includes(filter)

        ? "block"

        : "none";

    });
}


// ===============================
// CLEAR DATA
// ===============================

function clearData() {

    localStorage.removeItem(
    "wasteData"
    );

    location.reload();
}


// ===============================
// DARK MODE
// ===============================

function toggleDark() {

    document.body.classList.toggle(
    "dark"
    );
}
 















