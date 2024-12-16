"use server";
const sqlite = require("better-sqlite3");
const db = sqlite("products.sqlite");

export async function removeProduct(id) {
  db.prepare(
    `
        DELETE FROM products WHERE id = ?
        `
  ).run(id);
}
