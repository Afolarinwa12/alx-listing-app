# ALX Listing App

## Project Description

This project is a simplified listing application, inspired by platforms like Airbnb. The goal is to create a user-friendly interface for browsing and potentially viewing details of various listings. This initial phase focuses on building the foundational structure and displaying a basic listing page.

## Project Structure

The project follows a standard Next.js structure with the following key directories:

-   **`pages/`**: This directory contains the application's routes. Each file in this directory (or within its subdirectories) becomes a different page on the website.
    -   `index.tsx`: This is the main homepage of the application, displaying the listing overview.

-   **`components/`**: This directory houses reusable React components that make up the user interface.
    -   `common/`: This subdirectory contains general-purpose components used across different parts of the application.
        -   `Card.tsx`: A component designed to display individual listing information in a card format.
        -   `Button.tsx`: A reusable button component for various actions within the application.

-   **`interfaces/`**: This directory contains TypeScript interface definitions. These interfaces define the structure of data used throughout the application, ensuring type safety and better code maintainability.
    -   `index.ts`: This file likely exports all the defined interfaces, making them easily accessible across the project.

-   **`constants/`**: This directory stores application-wide constants. These can include API endpoints, fixed values, or any other data that remains consistent throughout the application.
    -   `index.ts`: This file likely exports all the defined constants.

-   **`public/assets/`**: This directory contains static assets such as images, fonts, and other media files used by the application. These assets are served directly by Next.js.

## How to Run Locally

Follow these steps to get the project running on your local machine:

1.  **Install Dependencies:**
    Navigate to the root directory of the project in your terminal and run the following command to install all the necessary packages:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

2.  **Run the Development Server:**
    Once the dependencies are installed, you can start the Next.js development server using the following command:

    ```bash
    npm run dev
    ```

    or

    ```bash
    yarn dev
    ```

    This command will start the server, and you can usually view the application in your web browser by navigating to `http://localhost:3000`.

