# Demo APIs

This is a simple demo API project built with Node.js, Express, and MongoDB. It provides basic Create and Read operations for managing products. The project structure is organized into controllers, models, routes, and utility functions.

## Project Structure

```
.
├── index.js
├── package.json
├── pnpm-lock.yaml
└── src
    ├── controllers
    │   └── product.controllers.js
    ├── models
    │   └── product.model.js
    ├── routes
    │   └── product.routes.js
    └── utils
        ├── connectDB.js
        └── handlers.js
```

- **index.js**: The main entry point of the application, where the server is configured and started.

- **package.json**: Configuration file for Node.js project, including dependencies and scripts.

- **pnpm-lock.yaml**: Lock file for package manager (PNPM, in this case).

- **src**: Source code directory containing controllers, models, routes, and utility functions.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```
   PORT=8000
   MONGO_URI=mongodb://localhost:27017/demo-apis
   ```

   Adjust the `MONGO_URI` to your MongoDB connection string.

4. Run the application:

   ```bash
   pnpm run dev
   ```

   This command uses `nodemon` for development, which automatically restarts the server when changes are detected.

## Endpoints

### 1. Welcome Message

- **Endpoint**: `/api`
- **Method**: GET
- **Description**: Display a welcome message.

### 2. Product Operations

#### a. Get All Products

- **Endpoint**: `/api/v1/products`
- **Method**: GET
- **Description**: Fetch all products.

#### b. Create a Product

- **Endpoint**: `/api/v1/products`
- **Method**: POST
- **Description**: Create a new product.
- **Request Body**:

  ```json
  {
    "name": "Product Name",
    "price": 19.99,
    "description": "Product Description",
    "countInStock": 10,
    "imageUrl": "https://example.com/image.jpg"
  }
  ```

## Testing Endpoints

You can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to test the endpoints.

1. Open Postman or use curl commands to interact with the API.

2. Use the provided endpoints and methods to test various operations.

### 1. Welcome Message

#### Request:

- **Endpoint**: `GET http://localhost:8000/api`
- **Method**: GET

#### Response:

```json
{
  "message": "Welcome to the API"
}
```

### 2. Product Operations

#### a. Get All Products

#### Request:

- **Endpoint**: `GET http://localhost:8000/api/v1/products`
- **Method**: GET

#### Response:

```json
{
  "message": "Product fetched successfully",
  "data": [
    {
      "_id": "product_id_1",
      "name": "Product 1",
      "price": 19.99,
      "description": "Product 1 Description",
      "countInStock": 10,
      "imageUrl": "https://example.com/product1.jpg",
      "createdAt": "2023-01-01T12:00:00Z",
      "updatedAt": "2023-01-01T12:30:00Z"
    },
    {
      "_id": "product_id_2",
      "name": "Product 2",
      "price": 29.99,
      "description": "Product 2 Description",
      "countInStock": 5,
      "imageUrl": "https://example.com/product2.jpg",
      "createdAt": "2023-01-02T10:00:00Z",
      "updatedAt": "2023-01-02T10:45:00Z"
    }
  ]
}
```

#### b. Create a Product

#### Request:

- **Endpoint**: `POST http://localhost:8000/api/v1/products`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "name": "New Product",
    "price": 39.99,
    "description": "New Product Description",
    "countInStock": 15,
    "imageUrl": "https://example.com/newproduct.jpg"
  }
  ```

#### Response:

```json
{
  "message": "Product created successfully",
  "data": {
    "_id": "new_product_id",
    "name": "New Product",
    "price": 39.99,
    "description": "New Product Description",
    "countInStock": 15,
    "imageUrl": "https://example.com/newproduct.jpg",
    "createdAt": "2023-01-03T08:00:00Z",
    "updatedAt": "2023-01-03T08:15:00Z"
  }
}
```

These examples assume you have the server running locally on `http://localhost:8000`. Adjust the base URL accordingly if your server is hosted elsewhere.

Remember to replace placeholder values (e.g., product_id_1, new_product_id) with actual values from your API responses. These examples demonstrate how to interact with your API using different endpoints and methods in Postman.

## Additional Notes

- The project uses `dotenv` for environment variable management.
- Validation of request bodies is handled using `joi`.
- MongoDB is used as the database, and the connection is established using Mongoose.
- Error handling is centralized using utility functions in `handlers.js`.
