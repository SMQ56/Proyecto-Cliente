export function renderHome() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section>
      <h2>Welcome</h2>
      <p>Select an option from the menu.</p>
    </section>
  `;
}

export function renderSessions(data) {
  const app = document.getElementById("app");

  if (data.length === 0) {
    app.innerHTML = "<p>No sessions available.</p>";
    return;
  }

  const sessionCards = data
    .map(
      (session) =>
        ` <article class="session-card">
        <h3>${session.name}</h3>
        <p>Price: ${session.price} €</p>
        <button data-id="${session.id}">Add to cart</button>
      </article>
    `
    )
    .join("");
  app.innerHTML = `
    <section>
      <h2>Available Sessions</h2>
      <div class="sessions-container">
        ${sessionCards}
      </div>
    </section>
  `;
}

export function renderCartView(lines = []) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section>
    
      <h2>Your cart</h2>
      <ul id="cartList"></ul>
      <p id="cartUnits"></p>
      <p id="cartTotal"></p>

      <button id="btnClearCart">Clear cart</button>

    </section>
  `;

  const ul = document.getElementById("cartList");
  const txtUnits = document.getElementById("cartUnits");
  const txtTotal = document.getElementById("cartTotal");

  if (lines.length === 0) {
    ul.innerHTML = "<li>Cart is empty</li>";
    txtUnits.textContent = "";
    txtTotal.textContent = "";
    return;
  }

  let totalUnits = 0;
  let totalAmount = 0;

  for (const l of lines) {
    const li = document.createElement("li");
    li.textContent = `${l.name} - ${l.quantity} uds - ${l.subtotal.toFixed(
      2
    )} €`;
    ul.appendChild(li);

    totalUnits += l.quantity;
    totalAmount += l.subtotal;
  }

  txtUnits.textContent = `${totalUnits} units`;
  txtTotal.textContent = `Total: ${totalAmount.toFixed(2)} €`;
}
