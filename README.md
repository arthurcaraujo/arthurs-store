# Arthur's Store: E-Commerce Frontend — React + Tailwind CSS

A single-page e-commerce frontend built with React (Vite) and Tailwind CSS. It consumes the Fake Store API for product data and implements a complete UX flow: browsing, product details, shopping cart, mocked authentication, protected checkout, order persistence (localStorage), and GitHub Pages deployment.

## Table of contents

1. [Key features](#1-key-features)
2. [Tech stack](#2-tech-stack)
3. [Repository structure](#3-repository-structure)
4. [Installation and quick start](#4-installation-and-quick-start)
5. [Development workflow (commands)](#5-development-workflow-commands)
6. [Code overview — important components](#6-code-overview--important-components)
7. [Deployment to GitHub Pages](#7-deployment-to-github-pages)
8. [Known limitations](#8-known-limitations)
9. [Contributing](#9-contributing)
10. [Author](#10-author)

## 1. Key features

* Product listing with images, title, price
* Product details page
* Add/remove items from cart
* Cart page with summary and remove actions
* Mocked authentication (email-only, persisted)
* Protected Checkout and Orders pages
* Mock payment flow that creates persisted orders
* Order history persisted in localStorage
* Responsive, accessible-friendly UI
* Deployable to GitHub Pages

## 2. Tech stack

|              |                                  |
|--------------|----------------------------------|
| React (Vite) | fast dev server and modern build |
| Tailwind CSS | utility-first styling |
| React Router | client-side routing |
| React Context | cart and auth global state |
| gh-pages | GitHub Pages deployment tool |

Fake Store API: https://fakestoreapi.com — used for product data

## 3. Repository structure

* public/
* src/
    * assets/
    * components/
        * Footer.jsx
        * Header.jsx
        * ProtectedRoute.jsx
    * context/
        * AuthContext.jsx
        * CartContext.jsx
    * pages/
        * Cart.jsx
        * Checkout.jsx
        * Home.jsx
        * Login.jsx
        * OrderConfirmation.jsx
        * Orders.jsx
        * ProductDetails.jsx
    * App.jsx — provider composition and route definitions
    * index.css — Tailwind imports + small global utilities
    * main.jsx — app bootstrap and BrowserRouter
* eslint.config.js
* index.html
* package-lock.json
* package.json
* README.md
* vite.config.js

## 4. Installation and quick start

Clone the repository and install dependencies

```bash
git clone https://github.com/arthurcaraujo/arthurs-store.git
cd arthurs-store
npm install
```

Run the dev server

```bash
npm run dev
# Open the address shown by Vite (typically http://localhost:5173)
```

Build for production

```bash
npm run build
```

Preview the production build locally

```bash
npm run preview
```

## 5. Development workflow (commands)

* Start dev server: `npm run dev`
* Build production bundle: `npm run build`
* Preview production build locally: `npm run preview`
* Deploy to GitHub Pages (after configuration): `npm run deploy`

Install dev helper (gh-pages):

```bash
npm install --save-dev gh-pages
```

Set base in **vite.config.js** for GitHub Pages, then add the deploy script in **package.json**:

```json
"deploy": "gh-pages -d dist"
```

## 6. Code overview — important components

This section explains responsibilities and important implementation notes.

### Contexts
* CartContext.jsx
    * State: cart array
    * Actions: addToCart(product), removeFromCart(id), clearCart()
    * Keep cart item shape consistent with the API (id, title, price, image, ...)
* AuthContext.jsx
    * State: user object or null
    * Actions: login(email), logout()
    * Persists auth in localStorage to simulate a persistent session

### Routing
* React Router defines routes:
    * / → Home
    * /product/:id → ProductDetails
    * /cart → Cart
    * /login → Login
    * /checkout → Checkout (protected)
    * /orders → Orders (protected)
    * /confirmation → OrderConfirmation (protected)
* ProtectedRoute component checks auth state and redirects to /login when unauthenticated.

### Product fetching
* Home uses fetch('https://fakestoreapi.com/products') to retrieve a products array.
* ProductDetails fetches an individual product by id.
* Always handle loading and error states in the UI. Example:
    * Show spinner while loading
    * Show a friendly message if fetch fails

## 7. Deployment to GitHub Pages

In vite.config.js set base to '/REPO_NAME/' (replace REPO_NAME with your GitHub repo name)
```js
export default defineConfig({
  plugins: [react()],
  base: '/arthurs-store/' // change to /your-repo/
})
```

Add gh-pages and scripts in package.json:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

Commit and push changes to main. Then run:
```bash
npm run build
npm run deploy
```

In GitHub repository settings → Pages, verify the site is published from the gh-pages branch. The site will be available at https://YOUR_USERNAME.github.io/REPO_NAME/.

## 8. Known limitations

* Authentication is mocked (email-only, no password verification). Replace with real auth for production.
* Payment flow is mocked (no third-party gateway).
* No server-side order validation; orders are stored in localStorage only.
* No automated tests included by default.
* Error handling for fetch calls is minimal; production app should handle network and API failures thoroughly.

## 9. Contributing

Contributions are welcome. Suggested process:
* Fork the repo and create a branch: `feature/your-feature`
* Make small, focused commits
* Open a pull request to `main` with a clear description of changes
* Include screenshots or short GIFs for UI changes

## 10. Author

Developed by Arthur C. Araújo