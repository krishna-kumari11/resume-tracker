const form = document.getElementById("resumeForm");
const tableBody = document.querySelector("#resumeTable tbody");

const BACKEND_URL = "https://replit.com/@kk1965621/resumetracker#backend/script.js"; // Replace this!

// Fetch resumes on page load
window.onload = function () {
  fetch(BACKEND_URL)
    .then((res) => res.json())
    .then((resumes) => {
      resumes.forEach(addRowToTable);
    });
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const jobTitle = document.getElementById("jobTitle").value;
  const companyName = document.getElementById("companyName").value;
  const status = document.getElementById("status").value;
  const notes = document.getElementById("notes").value;

  const resumeData = {
    jobTitle,
    companyName,
    status,
    notes,
  };

  fetch(BACKEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(resumeData),
  })
    .then((res) => res.json())
    .then((data) => {
      addRowToTable(data.resume);
      form.reset();
    });
});

function addRowToTable(data) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${data.jobTitle}</td>
    <td>${data.companyName}</td>
    <td>${data.status}</td>
    <td>${data.notes}</td>
  `;
  tableBody.appendChild(newRow);
}