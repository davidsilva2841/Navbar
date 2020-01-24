# Navbar


## Description
- Navbar component for West Buy

## Structure
- Navbar is made up of 3 smaller navbars and the company logo
- Top navbar
    - src/components/header.jsx
    - Contains: Top Deals, Deal of the Day, Credit Cards, etc.

- Middle navbar
    - src/components/navbar.jsx
    - Contains: Search bar, Local store, cart

- Bottom navbar
    - src/components/menu.jsx
    - Contains: Products, Brands, Deals, Services, Account, Shopping History, Order Status, Saved Items
    
## NPM commands
- Run webpack-live-server for development with webpack (Requests sent to express api @ deployed server)
    - npm start
- Run webpack-live-server for development with webpack (Requests sent to express api @ local host)
    - npm run dev
- Compile in webpack (production mode)
    - npm run build
- Compile in webpack and upload to S3 (Requires s3_uploader.js -- see s3_uploader.example.js)
    - npm run deploy

![Component](./documentation/Navbar.gif)


