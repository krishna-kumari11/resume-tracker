const form = document.getElementById("resumeForm");
const tableBody = document.getElementById("resumeTableBody");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const company = document.getElementById("company").value;
  const role = document.getElementById("role").value;
  const location = document.getElementById("location").value;
  const status = document.getElementById("status").value;

  const row = document.createElement("tr");
  row.innerHTML = `<td>${company}</td><td>${role}</td><td>${location}</td><td>${status}</td>`;
  tableBody.appendChild(row);

  form.reset();
});
