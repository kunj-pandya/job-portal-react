## 🚀 What is Supabase?

**Supabase** is an **open-source Backend-as-a-Service (BaaS)** platform that gives you everything you need to build modern apps — without writing a custom backend.

It’s built on top of **PostgreSQL**, a powerful open-source database.

🔹 Supabase provides:
- **Database (PostgreSQL)**
- **Auto-generated APIs**
- **Authentication (email, Google, etc.)**
- **Storage for files**
- **Real-time data updates**
- **Edge Functions** (for server logic)

---

## 🧩 Why Use Supabase?

| Feature   | Description |
|-----------|--------------|
| Database  | Uses PostgreSQL — a relational SQL database |
| APIs      | Instantly generated for every table you create |
| Auth      | Handles login/signup (email, OAuth, etc.) |
| Storage   | Upload and serve files |
| Real-time | Subscribe to data changes (e.g., chat apps) |
| Functions | Run server-side code securely |

---

## ❓ How It Works?

Your React app communicates with Supabase using **JavaScript SDK**, not SQL directly.  
But knowing a little SQL helps you understand what’s happening behind the scenes.

## 🧠 PostgreSQL Crash Course (for React + Supabase)

### What is PostgreSQL?
PostgreSQL (Postgres) is a **relational database**.  
Data is stored in **tables** → each table has **rows (records)** and **columns (fields)**.

Think of it like an Excel sheet:
- Each sheet = a table
- Each row = one data entry
- Each column = a property (name, email, etc.)

---

## PostgreSQL Data Types

| Type        | Description       | Example                 |
| ----------- | ----------------- | ----------------------- |
| `TEXT`      | String            | `'Kunj'`                |
| `INTEGER`   | Whole number      | `23`                    |
| `BOOLEAN`   | True/False        | `true`                  |
| `TIMESTAMP` | Date & time       | `'2025-11-01 10:00:00'` |
| `UUID`      | Unique identifier | `'8b68e...d97'`         |
| `JSONB`     | JSON object       | `{'theme':'dark'}`      |

---

##  Basic SQL Operations (CRUD)

### 🔹 Create Table

```sql
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
  );
```

### 🔹 Insert Data

```sql
  INSERT INTO users (name, email)
  VALUES ('Kunj', 'kunj@gmail.com');
```

### 🔹 Read Data

```
  SELECT * FROM users;
  SELECT name FROM users WHERE email LIKE '%.com';
```

### 🔹 Update Data

```
  UPDATE users
  SET name = 'Parth'
  WHERE id = 1;
```

### 🔹 Delete Data

```sql
  DELETE FROM users WHERE id = 1;
```

### ⚙️ Filtering, Sorting & Limiting

```sql
  -- Sort users by newest
  SELECT * FROM users ORDER BY created_at DESC;

  -- Limit to 5 users
  SELECT * FROM users LIMIT 5;

  -- Filter
  SELECT * FROM users WHERE name = 'Kunj';
```

### 🔐 Relationships (Foreign Keys)

- Link tables using foreign keys:

```
  CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    user_id INTEGER REFERENCES users(id)
  );
```

Each job belongs to a user who created it.

### 🧩 SQL → Supabase JS Equivalents

| SQL                     | Supabase JS SDK                                    |
| ----------------------- | -------------------------------------------------- |
| `SELECT * FROM users;`  | `supabase.from('users').select('*')`               |
| `INSERT INTO users ...` | `supabase.from('users').insert({...})`             |
| `UPDATE users ...`      | `supabase.from('users').update({...}).eq('id', 1)` |
| `DELETE FROM users ...` | `supabase.from('users').delete().eq('id', 1)`      |

