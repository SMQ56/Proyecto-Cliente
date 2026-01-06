const CART_KEY = "spiritual_cart";

let cart = loadCart();

function loadCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// add session
export function addSession(session) {
  const line = findLine(session.id);

  if (line) {
    line.quantity += 1;
    line.subtotal = +(line.quantity * session.price).toFixed(2);
  } else {
    cart.push({
      id: session.id,
      name: session.name,
      quantity: 1,
      subtotal: +session.price.toFixed(2),
    });
  }

  saveCart();
  return cart;
}

export function clearCart() {
  cart = [];
  saveCart();
  return cart;
}

export function getCart() {
  return cart;
}
