# 3D Spotify 🎵

An interactive, 3D-revisited Spotify concept that brings music visualization and audio interaction into a responsive, immersive web interface. 

🔗 **Live Demo:** [3d-spotify.vercel.app](https://vercel.app)

---

## 📁 Repository Structure

The project relies on standard web technologies structured as follows:

* **`gif/`** – Contains animated visual assets and UI previews.
* **`image/`** – Holds visual components, UI icons, and background textures.
* **`song/`** – Contains local audio tracks utilized by the player application.
* **`index.html`** – The main entry point and skeleton layout of the 3D application.
* **`style.css`** – Custom layouts, UI skinning, and presentation rules.
* **`logic.js`** – Core application engine managing the interactive logic and 3D states.

---

## 🚀 Getting Started

### Prerequisites
To run this application locally, you just need a standard web browser and a simple local development server to bypass local file access restrictions (CORS) for loading local audio and asset paths.

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```

2. **Navigate to the directory:**
   ```bash
   cd 3D-Spotify
   ```

3. **Launch a local server:**
   If you have Python installed, run:
   ```bash
   python -m http.server 8000
   ```
   Or if you prefer Node.js/npm:
   ```bash
   npx serve .
   ```

4. **Open your browser:**
   Go to `http://localhost:8000` (or the port specified by your terminal) to explore the app.

---

## 🛠️ Built With

* **HTML5** – Application architecture and DOM structures.
* **CSS3** – Immersive visual components and styling rules.
* **JavaScript** – Procedural logic handling and audio event states.

---

## 📄 License

This project is open-source and free to use. Refer to local project conditions for distribution terms.
