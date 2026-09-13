# Paradise Nursery Shopping Application

Project name: Paradise Nursery Shopping Application

Paradise Nursery is a React and Redux e-commerce application for an online plant store.
Applicazione di e-commerce per un negozio online di piante chiamato Paradise Nursery.

## Description

The application lets users browse houseplants grouped by category, view each plant with
its thumbnail, name, description and price, add plants to a shopping cart and manage the
items in the cart.

## Features

- Landing page with background image, company name and a "Get Started" button
- About Us section with details about the company
- Product listing page with nine plants grouped into three categories
- "Add to Cart" button for every plant, disabled once the plant has been added
- Navigation bar with links to Home, Plants and Cart, shown on both pages
- Cart icon displaying the total number of items in the cart
- Shopping cart page showing total cart amount and total cost per plant
- Increase, decrease and delete controls for every item in the cart
- Checkout button and Continue Shopping button

## Tech stack

- React
- Redux Toolkit
- React Redux
- Vite
- CSS

## Project structure

- src/App.jsx: landing page with the company name and the Get Started button
- src/App.css: styling of the landing page, including the background image
- src/AboutUs.jsx: details about the company
- src/ProductList.jsx: product listing page, categories and navigation bar
- src/CartItem.jsx: shopping cart page
- src/CartSlice.jsx: Redux slice with addItem, removeItem and updateQuantity reducers
- src/store.js: Redux store configuration

## Getting started

Install the dependencies with npm install and start the development server with npm run dev.