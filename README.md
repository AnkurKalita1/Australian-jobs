## ✨ Features

* **Dual View Interface:** Browse job listings in a clean list on the left while simultaneously viewing their locations on an interactive map of Australia on the right.
* **Interactive Highlighting:** Hover over a job card in the list to highlight its corresponding pin on the map, instantly showing you its location.
* **Dynamic Filtering:** Easily filter the job listings by **State** and **Industry** to narrow down your search to relevant opportunities.
* **Contact Tracking:** Mark employers you've already contacted with a single click. This state is temporary and resets on page reload, allowing for a fresh start to each job-hunting session.
* **Responsive Design:** The layout is designed to be usable on both desktop and tablet devices.

---

## 🛠️ Technical Stack

This project was built using a modern frontend stack:

* **Framework:** [React](https://reactjs.org/) (with JavaScript)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Mapping Library:** [Leaflet](https://leafletjs.com/) & [React Leaflet](https://react-leaflet.js.org/)
* **Package Manager:** [npm](https://www.npmjs.com/)

---

## 📂 Project Structure

The project follows a standard Vite + React structure. Key directories include:


/src
├── /components   # All reusable React components (JobCard, MapView, etc.)
├── /data         # Contains the static jobs.json data file
├── App.jsx       # The main application component that manages state
└── main.jsx      # The entry point for the React application


---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 16 or later) and `npm` installed on your computer.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will now be running on `http://localhost:5173` (or the next available port).

---

## Usage

1.  **Browse Jobs:** Scroll through the list on the left to see available positions.
2.  **Filter:** Use the "Location" and "Industry" dropdowns at the top of the list to refine your search. The list and map will update automatically.
3.  **Locate on Map:** Hover your mouse over any job card to see its red pin on the map.
4.  **Track Applications:** Click the "Mark as Contacted" button on a job card to gray it out, helping you keep track of who you've already reached out to.
