# Expense Control System

A web application to manage your personal finances easily, recording and monitoring your income and expenses. Built with **Next.js**, **React**, **Tailwind CSS**, and **TypeScript**  to offer a fast and modern experience.

## 🚀 Technologies Used

- **React**: A library for building user interfaces.
- **Next.js**: Framework for server-side rendering and optimization.
- **TypeScript**: JavaScript superset with static typing.
- **Tailwind CSS**: CSS utility framework for rapid and efficient design.

## ⚙️ Installation and Setup

Follow these steps to install and run the project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Freddyz5/control_gastos.git

2. **Navigate to the project directory**:
    ```bash
    cd control_gastos

3. **Install dependencies**:
    ```bash
    npm install

4. **Run the development server:**:
    ```bash
    npm run dev

5. **Open your browser and go to http://localhost:3000 o see the application.**:

> Nota: Make sure you have Node.js >=18.17.0 and npm installed.

## 🛠️ Project Structure
 
The project is organized as follows:

    .
    ├── app/                    # Route folders with Next.js App Router model
    │   ├── (menu)/             # Route group (shared layout for the section)
    │   │   ├── category/       # Categories page
    │   │   ├── dashboard/      # Dashboard page
    │   │   ├── data/           # User data page
    │   │   └── preferences/    # User preferences information page
    │   │   └── layout.tsx      # Shared context or logic provider
    │   ├── login/              # Login page
    │   └── register/           # Registration page
    ├── public/                 # Publicly accessible files (images, fonts)
    ├── src/                    # Source of the project
    │   ├── category/           # Category-related functionalities
    │   ├── dashboard/          # Dashboard functionalities
    │   ├── data/               # Static data or shared models
    │   ├── login/              # Login-specific logic or components
    │   ├── preferences/        # User preferences functionalities
    │   ├── register/           # Registration-specific functionalities
    │   ├── shared/             # Shared code across different modules
    │   ├── sideMenu/           # Logic or components for the side menu
    │   └── titleBar/           # Logic or components for the title bar
    └── .vscode/                # Development environment configuration

## 📂 Folder Structure for Modules

CEach module in the project (e.g., register, login, dashboard, etc.) should follow this basic structure. This organization ensures consistency, scalability, and clarity in the code.

    📂 [Module Name]/
    ├── 📂 components/    # Module-specific React components
    ├── 📂 hooks/         # Custom hooks for module logic
    ├── 📂 services/      # Functions for data handling or API communication
    ├── 📂 types/         # TypeScript interfaces and types definitions
    ├── 📂 utils/         # Module-specific utility functions
    └── index.tsx         # Main file exporting or initializing the module

### components/ 
- Contains the React components specific to this module.
- Components should be small, reusable, and follow the single-responsibility principle.
- Example:
    ```
    📂 components/
    ├── Form.tsx       # Main form component  
    ├── InputField.tsx # Reusable input field for the module  
    └── Header.tsx     # Header for the module's page  

### hooks/
- Stores custom hooks related to this module.
- These hooks encapsulate reusable logic, such as state management, effects, or data interactions.
- Example:
    ```
    📂 hooks/
    ├── useRegisterForm.ts  # Hook to manage registration form logic  
    └── useAuthStatus.ts    # Hook to handle authentication status  

### services/
- Includes functions for interacting with APIs or other data sources.
- This is where HTTP requests or functions that abstract backend logic go.
- Example:
    ```
    📂 services/
    ├── registerUser.ts      # Service to send user data to the backend  
    └── validateUsername.ts  # Service to validate usernames  

### types/
- Contains TypeScript interface and type definitions specific to the module.
- This helps maintain strong and centralized typing.
- Example:
    ```
    📂 types
    ├── User.ts      # Interface for a user  
    └── FormTypes.ts # Specific types for the form  

### utils/
- Stores utility functions specific to the module that don't fit in other categories.
- Example:
    ```
    📂 utils/
    ├── formatPhone.ts   # Function to format phone numbers  
    └── validateEmail.ts # Email validation function  

### index.tsx
- The module's main file that can:
- Export all key elements of the module (components, hooks, services, etc.).
- Act as an entry point to initialize any module-specific logic.

## 🌟 Features

  - Expense tracking: Add and categorize your transactions.
  - Statistics visualization: View interactive charts of your finances.
  - Advanced filters: Filter expenses by category, date, and more.
  - Responsive design: Designed to work on both mobile and desktop devices.

## License

This project is **private and proprietary**. Unauthorized copying, modification, or distribution of the code is strictly prohibited. All rights reserved © 2025 HardCode Labs.
