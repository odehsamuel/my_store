const sqlite = require("better-sqlite3");

const db = sqlite("products.sqlite");

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS products(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    image TEXT) 
    `
).run();

// db.prepare(
//   `
//     INSERT INTO products (name, price, image) VALUES ('Laptop', 230, 'laptop.jpeg')
//     `
// ).run();

// db.prepare(
//   `
//         INSERT INTO products (name, price, image) VALUES ('eye-glasses', 150, 'eye-glasses.jpg')
//         `
// ).run();

// db.prepare(`
//     UPDATE products SET name = 'laptop-stand', price = 105, image = 'laptop-stand.jpeg' WHERE id = 2
//     `).run()   

// const [products] = db.prepare(`
//     SELECT * FROM products WHERE id = 11
//     `).all()   
// console.log(products)

// db.prepare(`
//     DELETE FROM products WHERE id = 4
//     `).run()    