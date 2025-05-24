document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const alertDiv = document.getElementById("alertDiv");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Clear previous alerts
    alertDiv.innerHTML = "";

    // Create new alert
    const alert = document.createElement("div");
    alert.classList.add("alert", "alert-success", "alert-dismissible", "fade", "show");
    alert.setAttribute("role", "alert");
    alert.innerHTML = `
      Successfully reserved!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    // Append alert to the alertDiv
    alertDiv.appendChild(alert);

    // Auto-dismiss after 5 seconds
//     setTimeout(() => {
//       alert.classList.remove("show");
//       alert.classList.add("fade");
//       setTimeout(() => {
//         if (alert.parentNode) {
//           alert.remove();
//         }
//       }, 300);
//     }, 5000);


  });
});


