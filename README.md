# Tasty Orders

A full-stack food ordering application built with **React (frontend)** and **Node.js/Express (backend)**.  
The app demonstrates core React concepts (state, context, reducers, custom hooks), reusable UI components, form handling, and HTTP communication with a backend API.

---

## Features

### Frontend (React)

-   **Meals Listing**

    -   Fetch meals data via HTTP requests from the backend
    -   Render meals dynamically using reusable components
    -   Format & display prices as currency

-   **Reusable Components**

    -   `MealItem` component for displaying meals
    -   Configurable `Button` and `Input` components
    -   Modal component with `useEffect`

-   **Cart Functionality**

    -   Add/remove meals from the cart
    -   Cart state managed with **Context + Reducer**
    -   Cart displayed inside a modal

-   **Order Management**

    -   Checkout form with validation
    -   Form submission to backend (POST request)
    -   Error handling & loading states

-   **Custom Hooks**
    -   `useHttp` hook for clean, reusable HTTP requests
    -   Built-in loading and error handling

---

### Backend (Node/Express)

-   Serves meals data via REST API
-   Receives and stores order submissions
-   Runs on a separate server, consumed by the React frontend
-   Configurable endpoints for development

---

## Tech Stack

-   **Frontend:** React 19, JavaScript (ES6+), Context API & Reducer, Fetch API, CSS
-   **Backend:** Node.js, Express.js
-   **HTTP:** REST API (GET meals, POST orders)

---

## ⚙️ Installation & Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/danielleconeva/react-tasty-orders.git
    cd react-tasty-orders
    ```

2. Install & run the backend:

    ```bash
    cd backend
    npm install
    npm start
    ```

    Runs the Express server on http://localhost:3000

3. Install & run the frontend
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```
    Runs the React app on http://localhost:5173
