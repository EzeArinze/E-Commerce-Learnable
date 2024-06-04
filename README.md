# E-commerce Platform (Bandage)

## Overview

This project is an e-commerce platform built using React and Redux Toolkit. It features a shopping cart, a favorite products list, product browsing, and product detail views. The application state is managed using Redux slices, and data is fetched from an external API.

## Features

- View a list of products
- View product details
- Add products to a shopping cart
- Add products to a favorites list
- Persist cart and favorite list data in local storage

## Technologies Used

- React
- Redux Toolkit
- Redux Toolkit Query
- React Router
- Local Storage API

## State Management

### Store Configuration

The store is configured using @reduxjs/toolkit and @reduxjs/toolkit/query. The configuration includes reducers for cart, favorites, products, and product details.

## Slices

### Cart Slice

Manages the state of the shopping cart, including adding, removing, and adjusting the quantity of items. State is persisted to local storage.

## Favorite Slice

Manages the state of favorite products, including adding and removing products. State is persisted to local storage.

## Product Slice

Manages the state of product listings, including loading more products.

## Product Detail Slice

Manages the state of product details, including the current image index for the carousel.

## API Integration

The application uses @reduxjs/toolkit/query to interact with a dummy products API.
