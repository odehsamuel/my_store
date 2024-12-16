const sqlite = require("better-sqlite3");
const db = sqlite("products.sqlite");

export function getProducts() {
  return db.prepare(`SELECT * FROM products`).all();
}

export function getProduct(id) {
  return db.prepare(`SELECT * FROM products WHERE id = ?`).all(id);
}

export function addProduct(name, price, image) {
  db.prepare(
    `
      INSERT INTO products (name, price, image) VALUES (?, ?, ?)
      `
  ).run(name, price, image);
}

export function updateProduct(name, price, image, id) {
  db.prepare(
    `
      UPDATE products SET name = ?, price = ?, image = ? WHERE id = ?
      `
  ).run(name, price, image, id);
}
