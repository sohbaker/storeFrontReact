## Storefront
- To do: description

## Preview

coming soon

## Features:

### Frontend
The user can:
- View the products, category, price and availability information
- Add and remove a product from the shopping cart
- View the total price for the products they have added to the shopping cart
- Apply a voucher to the shopping cart
- View the total price for the products in their cart, with discounts applied
- See an alert when they enter an invalid voucher to their cart
- Not add out of stock products to their shopping cart

### Backend
- The product data (id, name, category, image, price, shop_quantity) is stored in a database (PostgreSQL)
- When the user clicks "proceed to checkout" button in the cart, the stock on the server should be decremented
- **To do:** a user can log in
- **To do:** the items a user puts into their basket updates the available stock (the number other users see)
- **To do:** if the user abandon's their basket, the stock numbers are restored


## Install

Note: You can download node and npm from [here](https://www.npmjs.com/get-npm), if not already installed.

```
git clone https://github.com/itsellej/react-storefront.git
cd react-storefront
```

You'll need to add an .env file in the root directory, containing the following environment variables: DATABASE_USER, DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT

```
npm install
npm run dev
```

Navigate to `http://localhost:3000` in your browser.

## Testing

[Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) are used for testing. 

Note: mocks are in place for functions which initiate a request to the server.

#### To run tests:

Type `npm t` in the terminal.

## To Do
- Deploy