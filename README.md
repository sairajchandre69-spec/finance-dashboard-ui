#  Finance Dashboard UI

A simple and responsive finance dashboard built with **React.js** to help users track and understand their financial activity.

This project is designed as an **evaluation assignment submission** focusing on:
- dashboard overview
- financial insights
- role-based UI
- transaction management
- responsiveness
- clean code structure

---

##  Features

###  Dashboard Overview
- Total Balance card
- Total Income card
- Total Expenses card
- Balance trend line chart
- Spending breakdown pie chart

### Transactions Section
- Transaction list table
- Search transactions
- Filter by type (income / expense)
- Clean table layout

### Role Based UI
- Admin role
  - add transaction button
  - edit transaction button
- Viewer role
  - only view access

###  Insights
- Highest spending category
- Total income
- Total expenses
- useful financial observations

###  Responsive Design
- Mobile friendly layout
- Tablet support
- Desktop optimized
- Responsive charts and tables

---

##  Tech Stack
- React.js
- CSS3
- Recharts
- JavaScript (ES6)

---

##  Folder Structure
```bash
src
 ┣ components
 ┃ ┣ Navbar.jsx
 ┃ ┣ SummaryCards.jsx
 ┃ ┣ ChartsSection.jsx
 ┃ ┣ TransactionsTable.jsx
 ┃ ┗ RoleBasedDashboard.jsx
 ┣ styles
 ┃ ┣ Navbar.css
 ┃ ┣ SummaryCards.css
 ┃ ┣ ChartsSection.css
 ┃ ┣ TransactionsTable.css
 ┃ ┗ RoleBasedDashboard.css
 ┣ App.jsx
 ┗ main.jsx
```

---

##  Setup Instructions

### 1) Clone repository
```bash
git clone your-repository-link
```

### 2) Install dependencies
```bash
npm install
```

### 3) Run project
```bash
npm run dev
```

---

##  Approach
The project was built using a **component-based structure** for better scalability and maintainability.

Each section of the dashboard is divided into reusable components:
- Navbar
- Summary Cards
- Charts
- Transactions Table
- Role Based Dashboard

State is managed using **React useState** for:
- selected role
- search filters
- transaction filtering

---


##  Future Improvements
- local storage support
- dark mode
- CSV export
- mock API integration
- advanced filters
- transaction modal
- animations

---

##  Author
**Sairaj Chandre**
Full Stack Developer


#github
https://github.com/sairajchandre69-spec/finance-dashboard-ui