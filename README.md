# Cartify - E-commerce Website

Cartify is a modern, responsive e-commerce website built with React and Vite. It provides a seamless shopping experience with features like user authentication, product browsing, shopping cart, wishlist, and more.

## Features

- **User Authentication**: Login and signup functionality for users.
- **Product Catalog**: Browse products with categories and search.
- **Shopping Cart**: Add, remove, and manage items in the cart.
- **Wishlist**: Save favorite products for later.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Fast Performance**: Built with Vite for quick development and builds.

## Technologies Used

- **Frontend**: React, Vite
- **Styling**: CSS
- **State Management**: React Context (for Wishlist)
- **Build Tool**: Vite
- **Linting**: ESLint

## Design

The design for Cartify was created in Figma. You can view the design file here: [Figma Design](https://www.figma.com/design/ZmcEdgamVaY1AO43eZPDPq/Cartify?node-id=0-1&t=xg3lRjRrruSRXBZl-1)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cartify.git
   cd cartify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Deployment

### Netlify
1. Push your code to a GitHub repository.
2. Connect your repository to Netlify.
3. Set the build settings:
   - **Base directory**: `my-react-app`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Deploy!

The app includes a `_redirects` file to handle client-side routing.

## Usage

- **Home Page**: Browse featured products and popular items.
- **Shop**: View all products with filtering options.
- **Product Details**: Click on a product to view details and add to cart.
- **Cart**: Manage your shopping cart.
- **Wishlist**: Add products to your wishlist.
- **Login/Signup**: Create an account or log in to access personalized features.

## Project Structure

```
src/
├── components/
│   ├── Nav.jsx          # Navigation bar
│   ├── Footer.jsx       # Footer component
│   ├── PopularProducts.jsx  # Popular products section
│   └── ...
├── pages/
│   ├── Home.jsx         # Home page
│   ├── Shop.jsx         # Shop page
│   ├── Product.jsx      # Product details page
│   ├── Cart.jsx         # Shopping cart
│   ├── Wishlist.jsx     # Wishlist page
│   ├── Login.jsx        # Login page
│   ├── Signup.jsx       # Signup page
│   └── ...
├── context/
│   ├── WishlistContext.jsx  # Wishlist state management
│   └── ...
├── assets/              # Static assets
└── App.jsx              # Main app component
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [your-email@example.com].
