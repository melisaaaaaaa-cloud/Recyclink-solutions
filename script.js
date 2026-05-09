// ===============================
// RECYCLINK SOLUTIONS JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  // ===============================
  // WASTE DATA
  // ===============================

  const wasteData = [
    "♻️ Plastic Waste - 120kg",
    "🗑️ Organic Waste - 95kg",
    "📦 Paper Waste - 70kg",
    "🔋 Electronic Waste - 40kg",
    "🧴 Glass Waste - 55kg",
  ];

  // DISPLAY DATA
  const dataList = document.getElementById("dataList");

  wasteData.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;

    dataList.appendChild(li);
  });

  // ===============================
  // WASTE DASHBOARD SIMPLE PIE CHART
  // ===============================

  const chartCanvas = document.getElementById("chart");

  if (chartCanvas) {
    const ctx = chartCanvas.getContext("2d");

    const data = [120, 95, 70, 40, 55];

    const colors = ["#16a34a", "#22c55e", "#4ade80", "#86efac", "#14532d"];

    const total = data.reduce((a, b) => a + b, 0);

    let startAngle = 0;

    for (let i = 0; i < data.length; i++) {
      let sliceAngle = (data[i] / total) * 2 * Math.PI;

      ctx.beginPath();

      ctx.moveTo(150, 150);

      ctx.arc(150, 150, 120, startAngle, startAngle + sliceAngle);

      ctx.closePath();

      ctx.fillStyle = colors[i];

      ctx.fill();

      startAngle += sliceAngle;
    }
  }

  // ===============================
  // POLLUTION FREQUENCY BAR CHART
  // ===============================

  const pollutionCanvas = document.getElementById("pollutionChart");

  if (pollutionCanvas) {
    const ptx = pollutionCanvas.getContext("2d");

    const pollutionData = [90, 70, 50, 85, 60];

    const labels = ["Air", "Water", "Plastic", "Noise", "Land"];

    const barWidth = 80;
    const gap = 25;

    for (let i = 0; i < pollutionData.length; i++) {
      let x = 50 + i * (barWidth + gap);

      let y = 300 - pollutionData[i] * 2;

      let height = pollutionData[i] * 2;

      // DRAW BAR
      ptx.fillStyle = "#16a34a";

      ptx.fillRect(x, y, barWidth, height);

      // LABELS
      ptx.fillStyle = "#000";

      ptx.font = "16px Arial";

      ptx.fillText(labels[i], x + 10, 330);

      // VALUES
      ptx.fillText(pollutionData[i], x + 20, y - 10);
    }
  }
});

// ===============================
// MISSION BUTTON
// ===============================

function showMission() {
  let mission = document.getElementById("mission");

  mission.innerText =
    "Our mission is to reduce pollution by turning waste into reusable resources through smart recycling technology and community partnerships.";
}

// ===============================
// WATER RECYCLING INFO
// ===============================

function showWaterInfo() {
  let info = document.getElementById("innovationInfo");

  info.innerText =
    "Dirty water is purified using eco-friendly filtration systems, treated animal waste technology, and natural purification methods.";
}

// ===============================
// PLASTIC RECYCLING INFO
// ===============================

function showPlasticInfo() {
  let info = document.getElementById("innovationInfo");

  info.innerText =
    "Plastic waste is collected, cleaned, melted, and transformed into reusable bottles and sustainable eco-products.";
}

// ===============================
// DARK MODE TOGGLE
// ===============================

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

window.onscroll = function () {
  const topButton = document.getElementById("topBtn");

  if (topButton) {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
