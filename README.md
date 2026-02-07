# This Project is based on Chronos Web Dashboard

a modern **web-based configuration and control dashboard for Chronos ESP32**

This project allows you to **connect to a Chronos ESP32 directly from the browser**, control device settings, and **upload GIF animations** to the device display using standard browser APIs -- no native apps, no drivers, no backend required.

---

## ✨Features

-🔌Connect to Chronos ESP32 via **Web Serial API**

- 🎛 Control device settings (brightness, modes, etc.)
- 📊 Read device info (battery, status)
- 🖼 Upload **GIF animations** from the browser
- 🎞 Client-side GIF decoding & RGB565 conversion
- 🧩 Clean command-based protocol between web ↔ hardware
- 🎨 Modern UI using **shadcn/ui + Tailwind**
- ⚡ Bun-powered development workflow
- 🧠 Fully written in **TypeScript**

---

## 🧠 How It Works

### Communication Flow

Browser (React + TS)
↓ Web Serial API
Chronos ESP32 (USB)
↓
Display / Storage / Sensors

The browser communicates directly with the Chronos device using:

- **Web Serial API** for USB communication
- A custom **text + binary protocol** for commands and data transfer

No code from other projects is reused — everything is implemented independently.

---

## 🖼 GIF Upload Pipeline

Uploading a GIF works like this:

GIF file
→ Decoded in browser
→ Frames extracted
→ Converted to RGB565
→ Sent frame-by-frame over Serial
→ Rendered on Chronos display

This approach keeps the firmware simple and leverages browser performance for heavy processing.

---

## 🧱 Tech Stack

### Frontend

- **Bun**
- **Vite**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Zustand** (state management)

### Hardware

- **Chronos ESP32**
- Arduino / PlatformIO firmware
- TFT display (RGB565)

---
