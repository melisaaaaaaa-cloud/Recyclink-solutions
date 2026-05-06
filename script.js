// SAVE DATA
document.getElementById("wasteForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let type = document.getElementById("type").value;
    let amount = parseFloat(document.getElementById("amount").value);


    if(!type || !amount){
        document.getElementById("message").innerText = "Fill all fields!";
        return;
    }

    let data = JSON.parse(localStorage.getItem("wasteData")) || [];
    data.push({ type, amount})

    localStorage.setItem("wasteData", JSON.stringify(data));

    document.getElementById("message").innerText = "Saved!";
});

// DISPLAY DATA
function displayData() {
    let data = 
}









 













// DISPLAY DATA
function displayData() {
    let data = JSON.parse(localStorage.getItem("wasteData")) || [];
    let list = document.getElementById("dataList");

    if (!list) return;

    list.innerHTML = "";

    let totals = {};

    data.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `${item.type} - ${item.amount}kg`;
        list.appendChild(li);

        totals[item.type] = (totals[item.type] || 0) + item.amount;
    });

    drawChart(totals);
}

// DRAW SIMPLE CHART
function drawChart(totals) {
    let canvas = document.getElementById("chart");
    if (!canvas) return;

    let ctx = canvas.getContext("2d");
    let keys = Object.keys(totals);
    let values = Object.values(totals);

    let total = values.reduce((a, b) => a + b, 0);
    let start = 0;

    keys.forEach((key, i) => {
        let slice = (values[i] / total) * 2 * Math.PI;

        ctx.beginPath();
        ctx.moveTo(150,150);
        ctx.arc(150,150,100,start,start + slice);
        ctx.fillStyle = `hsl(${i * 80}, 70%, 50%)`;
        ctx.fill();

        start += slice;
    });
}

displayData();