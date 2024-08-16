

---

# Product CRUD API

This is a simple CRUD (Create, Read, Update, Delete) API for managing products. It is built using Node.js, Express.js, MongoDB, and Mongoose.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SaltonDev/ExpressJS-CRUD-API.git
   cd ExpressJS-CRUD-API
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of the project and add your MongoDB connection string:
   ```plaintext
   PORT=preffered port to run on you server
   DB=connection string of your mongodb database
   ```

4. **Start the server**:
   ```bash
   npm run dev
   ```

   

## Usage

### API Endpoints

- **Create a Product**  
  `POST /api/products`  
  Request Body:
  ```json
  {
    "name": "Product Name",
    "quantity": "Product quantity",
    "price": 100,
    "image[optional]": "image source link "
  }
  ```

- **Get All Products**  
  `GET /api/products`

- **Get a Single Product**  
  `GET /api/products/:id`

- **Update a Product**  
  `PUT /api/products/:id`  
  Request Body:
  ```json
   {
    "name": "Product Name",
    "quantity": "Product quantity",
    "price": 100,
    "image[optional]": "image source link "
  }
  ```

- **Delete a Product**  
  `DELETE /api/products/:id`

### Models

The Product model is defined using Mongoose. It includes the following fields:

- `name`: String (required)
- `quantity`: Number (required)
- `price`: Number (required)
- `image`: String (optional)
- `createdAt`: Date (default: Date.now)
- `updatedAt`: Date (default: Date.now)

Example:
```javascript
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

---

This `README.md` provides a comprehensive overview of this CRUD API project, including how to set it up, the available API endpoints, and the models you're using. Adjust the content to fit your specific project's needs.
