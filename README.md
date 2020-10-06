## To Strt

Clone or download the repo. Run `npm install` from the project directory to install the necessary dependencies.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Items to update of fix.

- Adding an item to the cart is currently broken. There a action from the redux store, addToCart, which will do this. It is currently not being correctly passed down to the Item component through it's props.
- The blue pants are sold out, but you can still click on the add to cart button.
- The price is not showing up next to a product.
- You can currently add only one item at a time, see if you can change it to add multiple items.
- There isn't an option to remove an item once it's been added to the cart. Can you change this? There isn't currently any code for this.
- Styling fix. Update the products to appear inside a block with at least 20px padding and border radius of 8px. See if you can get them to appear in a grid.
