# 🎯 Todo - Retro To-Do List

Get your tasks done with **Todo** – a minimalist, retro-styled task companion 🐤. A small and playful to-do list app featuring pixel-art style. Built with HTML, CSS, JavaScript, and Tauri to run as a fast, lightweight desktop application.

![alt text](screenshots/demo.png)

---

## ✨ Features

- Add, delete, and check off daily tasks
- Navigate through days (yesterday/today/tomorrow)
- Persistent local task storage (per date)
- Animated progress tracker
- Stylish pixel-art UI & themed checkboxes
- Fast & tiny desktop app via Tauri
- macOS & Windows support

![alt text](screenshots/demo2.png) ![alt text](screenshots/demo3.png)

---

## 🛠️ Prerequisites

- Node.js (v16 or higher) — https://nodejs.org/
- Rust (latest stable) — https://rustup.rs/

---

## 🖥️ Installation

### macOS

1. Clone this repository:
   git clone https://github.com/ivcabb/TodoList.git
   cd TodoList
2.	Install dependencies:
    npm install
3.	Run the app in development:
    npm run tauri:dev
4.	Build the final app:
    npm run tauri:build

After building, you’ll find your macOS .app bundle in: 
    src-tauri/target/release/bundle/macos/
    
To add the app to your Applications folder, copy the .app bundle there:
    cp -R src-tauri/target/release/bundle/macos/Todo.app /Applications/ 

### Windows

1. Clone this repository:
   git clone https://github.com/ivcabb/TodoList.git
   cd TodoList
2.	Install dependencies:
    npm install
3.	Run the app in development:
    npm run tauri:dev
4.	Build the final app:
    npm run tauri:build

After building, you’ll find your Windows .exe installer and executable here:
src-tauri\target\release\bundle\msi\ (for installer) or
src-tauri\target\release\bundle\exe\ (for standalone executable)

To install the app, run the .msi installer or use the .exe directly.
You can also create a shortcut to the .exe file for easy access.

---

## 👤 Author

Created by @ivcabb
Pixel art & design: original artwork
Icons: original creations
