const express = require("express");
const cors = require("cors");
const db = require("./db"); 

const app = express();
app.use(cors());
app.use(express.json());

// 1. GET BOOKS
app.get("/api/books", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM books");
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/api/books/:id", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM books WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json("Not Found");
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 2. AUTH
app.post("/api/login", async (req, res) => {
  try {
    const [users] = await db.query("SELECT * FROM users WHERE email = ?", [req.body.email]);
    if (users.length === 0) return res.status(404).json("User not found");
    if (req.body.password != users[0].password) return res.status(400).json("Wrong password");
    res.status(200).json({ user: users[0] });
  } catch (err) { res.status(500).json(err); }
});

app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password]);
    res.status(201).json("User created");
  } catch (err) { res.status(500).json("Error"); }
});

// 3. CHECKOUT (Port 5002 Compatible)
app.post("/api/checkout", async (req, res) => {
  console.log("🛒 Processing Checkout on Port 5002...");
  const { items, userId, total, paymentMethod } = req.body;

  if (!items || !userId) return res.status(400).json({ message: "Cart is empty or User not found" });

  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    // A. Save Order
    const [orderResult] = await connection.query(
      "INSERT INTO orders (user_id, total_price, payment_method, order_date) VALUES (?, ?, ?, NOW())",
      [userId, total, paymentMethod || 'Card']
    );
    const newOrderId = orderResult.insertId;

    // B. Save Items
    for (const item of items) {
      await connection.query(
        "INSERT INTO order_items (order_id, book_id, quantity, price) VALUES (?, ?, ?, ?)",
        [newOrderId, item.id, item.quantity || 1, item.price]
      );
    }

    await connection.commit();
    console.log("✅ Order Success! ID:", newOrderId);
    res.json({ success: true, message: "Order Placed!" });

  } catch (err) {
    await connection.rollback();
    console.error("❌ Error:", err);
    res.status(500).json({ message: "Server Error" });
  } finally {
    connection.release();
  }
});

// --- CHANGE IS HERE: PORT 5002 ---
const PORT = 5002;
app.listen(PORT, () => {
  console.log(`✅ SERVER RUNNING ON PORT ${PORT}`);
});