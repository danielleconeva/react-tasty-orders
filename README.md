# Tasty Orders

A React-based food ordering application that demonstrates core React concepts, state management with Context & Reducers, reusable components, form handling, and HTTP communication.  
Built as part of a practice project to explore **React fundamentals, advanced patterns, and best practices**.

---

## Features

-   **Meals Listing**

    -   Fetch meals data via HTTP requests
    -   Render meals dynamically using reusable components
    -   Format & display prices as currency

-   **Reusable Components**

    -   Custom `MealItem` component
    -   Flexible custom `Button` component
    -   Configurable `Input` component

-   **Cart Functionality**

    -   Add/remove meals from the cart
    -   Cart state managed with React Context + Reducer
    -   Open cart inside a modal
    -   Cart items update dynamically

-   **Reusable Modal System**

    -   Modal component implemented with React `useEffect`
    -   Modal used for cart display and form interactions

-   **Order Management**

    -   Checkout form with validation
    -   Form submission handling
    -   POST request with order data
    -   Loading & error state handling for HTTP requests

-   **Custom Hooks**

    -   Reusable custom HTTP hook (`useHttp`) for data fetching
    -   Built-in error handling and loading states

-   **Best Practices**
    -   Clean component structure
    -   State lifting & separation of concerns
    -   Clear reducer logic for data transformations

---

## Tech Stack

-   **React 19** (functional components + hooks)
-   **JavaScript (ES6+)**
-   **Context API & Reducer** for state management
-   **CSS** for styling (custom styles)
-   **Fetch API** for HTTP requests

---
