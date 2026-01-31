# Fullstack Modular Strategy Game ⚔️

[![Telegram Devlog](https://img.shields.io/badge/Devlog-Telegram-blue?logo=telegram)](https://t.me/+t33m79WtNnw4MWUy)

A real-time multiplayer tactical strategy game built with a modular ability system. This project features a robust Node.js backend handling game logic, a React frontend for the interface, and Socket.io for seamless real-time synchronization between players.


## ✨ Key Features
- **Real-time Multiplayer**: Matchmaking queue and live gameplay via Socket.io.
- **Advanced Modular System**: Characters are dynamically built using interchangeable modules (Attack, Move, Teleport, Vampirism).
- **Persistent Game State**: Game sessions and queues are managed using a MySQL database.
- **Scalable Architecture**: Strict separation of concerns with dedicated layers for Listeners, Database Queries, and Game Logic.
- **State Management**: Frontend powered by Redux Toolkit for predictable UI updates.

## 🛠 Tech Stack

**Backend:**
- **Runtime**: Node.js
- **Communication**: Socket.io (WebSockets)
- **Database**: MySQL (with custom SQL script integration)
- **Design Patterns**: Interface-based design, Module Pattern

**Frontend:**
- **Library**: React.js
- **State Management**: Redux Toolkit (Slices)
- **Styling**: CSS Modules

## ⚙️ System Architecture

The project is divided into two main parts:

### 1. Backend (`/server`)
Handles the "Source of Truth" for the game state.
- **`classes/`**: Core entities like `Room`, `Person`, and `BoardCell`.
- **`listeners/`**: Event handlers for socket actions (`play`, `useModule`, `resign`).
- **`database/`**: SQL-driven logic for matchmaking and session recovery.

### 2. Frontend (`/client`)
A modern React application.
- **`components/`**: Modular UI components (Board, Cell, SelectPersons).
- **`store/`**: Centralized game state management.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MySQL Server

### Installation
1. **Clone the repo:**
  ```bash
    git clone https://github.com/khe4oyan/strategy_game.git
  ```

2. **Setup Backend:**
  ```bash
    cd backend
    npm install
    # Configure mysql.js and socket.js in /src/config
    npm start
  ```

3. **Setup Frontend:**
  ```bash
    cd ../client
    npm install
    npm start
  ```

## 📢 Stay Updated
If you're interested in the development process, I share regular updates, technical challenges, and upcoming features in my Telegram Devlog.

👉 **Join here:** [Devlog: Strategy Game](https://t.me/+t33m79WtNnw4MWUy)
