# Full Stack Food Delivery App

This project is a comprehensive online food delivery platform developed with a full-stack approach.


## Tech Stack

**Frontend:** React.js, HTML, CSS

**Backend:** Node.js, Express.js

**Database:** MongoDB

**Payment Integration:** Stripe

## Features

**User Interface:** Dynamic pages for browsing, ordering, and payment. Includes responsive design, CSS styling, and smooth scroll effects.

**User Authentication:** Login and registration with JWT token-based authentication, password hashing with bcrypt.

**Cart Management:** Add, remove, and manage items in the cart with real-time updates.

**Order Management:** Place orders with Stripe payment integration, view and update order status.

**Admin Panel:** Manage food items, categories, and orders. Includes image upload and data management.

**API Integration:** CRUD operations for food items, user management, and order processing.

## Roadmap

### *Phase 1: Planning and Design:*

* **Week 1: Requirement Gathering and Analysis** 

    - Define project scope and objectives.

    - Identify target audience and user personas.

    - Document functional and non-functional requirements.

    - Create initial wireframes and mockups.

* **Week 2: Design** 

    - Design UI/UX with tools like Figma or Adobe XD.

    - Develop high-fidelity prototypes.

    - Create a design system for consistency (colors, fonts, components).

### *Phase 2: Frontend Development*

* **Week 3: Setup and Initial Development** 

    - Set up the React.js project with Create React App or Vite.

    - Implement project structure and configure linting and formatting tools.

    - Develop reusable components (buttons, forms, cards).

* **Week 4: Core Features** 

    - Implement dynamic routing using React Router.

    - Build pages for browsing, ordering, and user authentication.

    - Add responsive design using CSS and media queries.

* **Week 5: State Management and Styling** 

    - Integrate Context API

    - Apply CSS styling and theme the application.

    - Add smooth scroll effects and animations.

### *Phase 3: Backend Development*

* **Week 6: Setup and Initial Development** 

    - Set up Node.js and Express.js project.

    - Configure environment variables and database connection.

    - Implement basic API endpoints and database schemas with MongoDB.

* **Week 7: Core Features** 

    - Develop user authentication endpoints (register, login, logout).

    - Implement CRUD operations for food items and categories.

    - Build endpoints for order management and cart operations.

* **Week 8: Payment Integration** 

    - Integrate Stripe API for payment processing.

    - Implement endpoints for payment handling and transaction verification.

    - Test payment workflows and handle edge cases.

### *Phase 4: Integration and Testing*

* **Week 9: Integration** 

    - Connect frontend with backend API endpoints.

    - Ensure data flow between frontend and backend is seamless.

    - Integrate Stripe payment frontend components with backend.

* **Week 10: Testing** 

    - Perform unit testing for frontend components and backend endpoints.

    - Conduct integration testing to ensure all components work together.

### *Phase 5: Deployment and Launch*

* **Week 11: Deployment Preparation** 

    - Set up production environment.

    - Prepare and finalize deployment documentation.

## Development Highlights

**Frontend:** Created a responsive design with multiple React components, dynamic routing, and state management using Context API.

**Backend:** Set up Express server, API endpoints, middleware for JWT authentication, and MongoDB models for data storage.

**Payment Integration:** Integrated Stripe for payment processing and verified transactions.

## Api Reference

### Add Food Items

```http
POST/api/food/add
```

#### Request Body

| Field       | Type     | Value    
| :---:       | :---:    | :---: 
| name        | String   | demo1   
| description | String   | This is demo description   
| price       | Number   | 10   
| category    | String   | non-veg   

#### Response

{
  "success": true,
  "message": "Food Added"
}

### Show Food List

```http
POST/api/food/list
```

#### Response

{
  "success": true,
  "data": [
    {
      "_id": "66c1be1f8d2693eb6c857a5c",
      "name": "Green salad",
      "description": "Food provides essential nutrients for overall health and well-being",
      "price": 20,
      "image": "1723973151868food_1.png",
      "category": "Salad",
      "__v": 0
    },
    {
      "_id": "66c1be518d2693eb6c857a60",
      "name": "Veg salad",
      "description": "Food provides essential nutrients for overall health and well-being",
      "price": 10,
      "image": "1723973201433food_2.png",
      "category": "Salad",
      "__v": 0
    },
    {
      "_id": "66cd553631d24e002243d5a0",
      "name": "demo1",
      "description": "This is demo description",
      "price": 10,
      "image": "1724732726532food_2.png",
      "category": "non-veg",
      "__v": 0
    }
  ]
}

### Remove Food Items

```http
POST/api/food/remove
```

#### Request Body

| Field       | Type     | Value    
| :---:       | :---:    | :---: 
| id        | String   | 66c1be1f8d2693eb6c857a5c   

#### Response

{
  "success": true,
  "message": "Food Removed"
}

### Show Cart Details

```http
POST/api/cart/get
```

#### Response

{
  "success": true,
  "cartData": {
    "66c1be1f8d2693eb6c857a5c": 10
  }
}

### User Order List

```http
POST/api/order/userorders
```

#### Response

{
  "success": true,
  "data": []
}

### Check User Order Status

```http
POST/api/order/status
```

#### Request Body
{
  "orderId": "66ca1eeacdd45d7f1d398b1e",
  "status": "Out of Delivery"
}

#### Response

{
  "success": true,
  "message": "Status Updated"
}

### Show Order List

```http
GET/api/order/list
``` 

#### Response

{
  "success": true,
  "data": [
    {
      "_id": "66ca1eeacdd45d7f1d398b1e",
      "userId": "66c20422d422165744ce1067",
      "items": [
        {
          "_id": "66c1be1f8d2693eb6c857a5c",
          "name": "Green salad",
          "description": "Food provides essential nutrients for overall health and well-being",
          "price": 20,
          "image": "1723973151868food_1.png",
          "category": "Salad",
          "__v": 0,
          "quantity": 1
        },
        {
          "_id": "66c1be518d2693eb6c857a60",
          "name": "Veg salad",
          "description": "Food provides essential nutrients for overall health and well-being",
          "price": 10,
          "image": "1723973201433food_2.png",
          "category": "Salad",
          "__v": 0,
          "quantity": 4
        }
      ],
      "amount": 62,
      "address": {
        "firstName": "Joy",
        "lastName": "Dutta",
        "email": "joy@gmail.com",
        "street": "dhd",
        "city": "ss",
        "state": "ff",
        "zipcode": "700101",
        "country": "India",
        "phone": "9870014256"
      },
      "status": "Out of Delivery",
      "date": "2024-08-24T15:02:27.213Z",
      "payment": false,
      "__v": 0
    },
}
## Getting Started

To start this project

```bash
Clone the Repository: git clone <repo-url>
```

```bash
Install Dependencies: Run npm install for both frontend and backend.
```

```bash
Run the Application: Follow the setup instructions in README.md for both frontend and backend.
```
