import { loadSessions } from "./api.js";
import { renderHome, renderSessions, renderCartView } from "./ui.js";
import { addSession, getCart, clearCart } from "./cart.js";

let sessions = [];

document.addEventListener("DOMContentLoaded", () => {
  renderHome();

  const btnSessions = document.getElementById("btn-sessions");

  btnSessions.addEventListener("click", async () => {
    sessions = await loadSessions();
    renderSessions(sessions);
  });

  document.getElementById("btn-cart").addEventListener("click", () => {
    const cart = getCart();
    renderCartView(cart);
  });

  // Btn on click add session and clear cart
  document.getElementById("app").addEventListener("click", (ev) => {
    const btn = ev.target.closest("button[data-id]");

    if (btn) {
      const id = +btn.dataset.id;
      const session = sessions.find((s) => s.id === id);
      if (session) addSession(session);
      return;
    }

    if (ev.target.id === "btnClearCart") {
      clearCart();
      renderCartView([]);
    }
  });
});
