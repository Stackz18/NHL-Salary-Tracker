
# 🏒 NHL Salary Cap Tracker

A simple and intuitive React app that allows users to explore NHL team and player salary cap details. It provides an overview of each team’s current cap situation and includes player contract data, all organized and searchable in a clean UI.

## 🚀 Features

- 📊 **Team Cap Overview**  
  Displays current cap hit, remaining cap space, and LTIR relief for every NHL team.

- 🧑‍💼 **Player Contract Tracking**  
  Browse key player information including cap hit, position, and contract length.

- 🔍 **Live Search**  
  Filter by team or player name instantly.

- 🧭 **Tabbed Interface**  
  Easily switch between Teams and Players views.

## 🛠️ Tech Stack

- React (with Vite)
- ShadCN UI for styling components
- Tailwind CSS (via utility-first classnames)
- Lucide Icons

## 📁 Folder Structure

```
nhl-salary-cap-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ui/                  # ShadCN UI components (Card, Tabs, Progress, Input, etc.)
│   ├── data/
│   │   ├── teams.json           # Static team salary cap data
│   │   └── players.json         # Static player data
│   ├── styles/
│   │   └── styles.css           # Custom styles
│   ├── App.jsx                  # App entry point
│   └── main.jsx                 # Vite entry script
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## 🧪 Local Development

### 1. Clone the repo:

```bash
git clone https://github.com/yourusername/nhl-salary-cap-tracker.git
cd nhl-salary-cap-tracker
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## 📦 Build for Production

```bash
npm run build
```

Output will be generated in the `dist/` directory.

## 📄 Data Sources

Team and player salary data are currently static and loaded from local JSON files located in `src/data/`. You can update or extend them as needed.

## ✅ To Do

- [ ] Add more players and complete rosters
- [ ] Add filter by position or contract length
- [ ] Fetch live cap data from NHL APIs (if public)
- [ ] Improve mobile responsiveness

## 📃 License

This project is open-source under the MIT License.
