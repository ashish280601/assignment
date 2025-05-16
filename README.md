# 🛒 Hypermart Checkout System

A real-time queue-based checkout system designed for a hypermarket environment. The application allows customers to enter the number of items they want to check out, and automatically assigns them to the most optimal counter based on the current queue load.

---

## 📌 Features

- Dynamic counter allocation based on least total items.
- Visual representation of queues per counter.
- Real-time updates to customer list and total items per counter.
- Manual removal of customers from a queue (for simulation purposes).

---

## 🧠 Solution Overview

This system simulates a **multi-counter checkout process** using queue-based logic.

- Each counter maintains a list (array) of customers.
- A customer is defined by the number of items they wish to checkout.
- When a customer is added, the system:
  1. Calculates the total number of items in each queue.
  2. Assigns the customer to the counter with the **least total items** (greedy approach).
  3. Updates the UI to reflect the new state of the queue.

---

## 🕒 Time Complexity

| Operation            | Complexity | Explanation |
|----------------------|------------|-------------|
| Add Customer         | O(n)       | Loops through `n = number of counters` to find the one with least total items. Each queue's total is computed using `reduce`. |
| Remove Customer      | O(1)       | Removes customer from the queue by index using `splice(i, 1)`. |
| Update UI            | O(k)       | Renders `k = number of customers` in the selected counter. |

- **Overall Complexity**: Efficient for small to medium-sized systems with a fixed number of counters.

---

## 🧱 Tech Stack

- **HTML** – Page structure.
- **CSS** – Styling and responsive layout.
- **JavaScript (Vanilla)** – Application logic and DOM manipulation.

---

## 🧾 Assumptions Made

- The number of checkout counters is fixed at **three**.
- A customer is represented only by the **number of items** they want to checkout.
- Customers are removed from queues manually (simulating checkout completion).
- All customers are added manually through a form (no backend or database).
- No user authentication or persistence is implemented.

---

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hypermart-checkout.git
   cd hypermart-checkout
