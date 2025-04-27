# KYC Hub - Frontend Engineering Assignment

## 📊 Project Overview

This is a Credit Risk & Financial Insights Dashboard built for the KYC Hub Frontend Engineering Assignment.

The dashboard is a responsive, data-driven platform that provides:

- Visual financial metrics (Income vs Expenses)
- Risk score distribution
- Customer management workflow (Review/Approval/Rejection)

The project uses React, JavaScript, Ant Design, Recharts, Axios, and React Router.

---

## 📂 Project Structure

---

## 🔥 Features Implemented

- Responsive Sidebar Layout (Ant Design Menu)
- 📈 Line Chart: Income vs Expenses (Recharts)
- 🥧 Pie Chart: Risk Score Distribution (Recharts)
- 📋 Sortable + Filterable Customer Table (Ant Design)
- ⚠️ Risk Assessment:
  - Dynamic Risk Scoring (based on Credit Score, Loan History, Income Ratio)
  - Dynamic Progress Bar colors (Green/Yellow/Red)
- 🔁 Workflow Automation:
  - Update Customer Status (Review, Approved, Rejected)
  - Simulated Alerts for High Risk customers (> 70 score)

---

## 🛠 Tech Stack

- React (JavaScript)
- Vite
- Ant Design (UI Library)
- Recharts (Charts and Visualizations)
- Axios (HTTP Client)
- React Router DOM (Routing)
- Deployed on Vercel

---

## 🚀 Live Demo

👉 [Live Site on Vercel](https://your-vercel-app-link.vercel.app)  
(Replace `your-vercel-app-link` with your actual deployed link.)

---

## 📦 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/kyc-hub-dashboard.git
   cd kyc-hub-dashboard
   ```

✨ AI Tool Usage
As part of the assignment guidelines, I used ChatGPT extensively to assist with coding, problem solving, and bug fixing during the project:

1. Risk Score Calculation Algorithm
   I used ChatGPT to design the risk score calculation formula based on credit score, repayment history, and income vs loan ratio.

2. Risk Assessment Page Debugging
   ChatGPT helped me fix the color coding bug where AntD Progress bar did not reflect correct risk levels.

3. Customer Table Filtering & Sorting
   ChatGPT guided how to implement proper filtering and sorting on AntD Tables for customer data.

ChatGPT Assistance Screenshots
Risk Score Logic Suggestion

Risk Assessment Page Bug Fix

Customer Table Filtering & Sorting

📊 Risk Scoring Explanation
The Risk Score for each customer is calculated based on:

Credit Score (higher is better)

Loan Repayment History (1 = paid on time, 0 = missed)

Outstanding Loans vs Monthly Income Ratio (lower is better)

The final risk score is normalized between 0 to 100.

Low Risk: 0-40 (Green)

Medium Risk: 41-70 (Yellow)

High Risk: 71-100 (Red)

🎯 Challenges Faced
Handling dynamic Progress color changes for risk levels.

Implementing proper table sorting and filtering logic.

Making the dashboard layout responsive for different devices.

✉️ Submission
GitHub Repo Link: [Private Repository Link]

Drive Folder Link: [Google Drive Link] (for AI screenshots and video walkthrough if any)
