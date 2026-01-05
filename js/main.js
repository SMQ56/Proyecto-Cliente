import { loadSessions } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  loadSessions();
});

function renderHome() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section>
      <h2>Welcome</h2>
      <p>Select an option from the menu.</p>
    </section>
  `;
}

function formatPrice(value) {
  return `${value} €`;
}
