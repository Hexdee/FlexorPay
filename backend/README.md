# FlexorPay Backend

FlexorPay Backend is a Node.js application that serves as the backend for the FlexorPay payment platform. It provides RESTful APIs for user registration, authentication, payment handling, and user balance management. The application is built using Express.js framework and interacts with a MongoDB database.

## Prerequisites

Before running the FlexorPay backend, make sure you have the following prerequisites installed on your system:

- Node.js
- MongoDB

## Getting Started

1. Clone this repository:

```
git clone https://github.com/hexdee/flexorpay
```

2. Install the dependencies:

```
cd flexorapy/backend
npm install
```

3. Set up environment variables:

Create a `.env` file in the project root directory and provide the following variables:

```
TOKEN_KEY=your_token_secret_key
MATIC_VIGIL_API_KEY=your_matic_vigil_api_key
API_PORT=your_preferred_port
MONGO_URI=your_mongodb_uri
```

Replace `your_token_secret_key` with a secure secret key for JSON Web Token (JWT) generation. Replace `your_matic_vigil_api_key` with your Matic Vigil API key.

4. Start the application:

```
npm start
```

The application will run on `http://localhost:3000`.

## API Endpoints

The following are the available API endpoints provided by the FlexorPay backend:

- `POST /register`: Register a new user.
- `POST /login`: User login.
- `GET /user/:username`: Get user details by username.
- `GET /:username`: Render the payment page for a specific merchant.
- `POST /auth`: Authenticate user and return user details.

You can use tools like Postman or cURL to interact with the APIs.

## Event Listening

The backend application listens to events emitted by the FlexorPay smart contract deployed on the Ethereum network. When a payment is successfully made, the backend updates the user's balance and transaction history.

## Contributing

Contributions to the FlexorPay backend are welcome! If you'd like to contribute, please follow these guidelines:

1. Fork the repository and create a new branch for your contributions.
2. Make your changes and ensure that the code adheres to the Node.js style guide.
3. Write tests to cover your changes.
4. Run the tests and ensure that they pass successfully.
5. Submit a pull request describing the purpose and details of your contributions.