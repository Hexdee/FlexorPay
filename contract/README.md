# FlexorPay Smart Contract

FlexorPay is a Solidity smart contract that facilitates cryptocurrency payments, allowing businesses to receive payments in various tokens and withdraw funds directly to their bank accounts. The contract is built using the Hardhat development framework.

## Features

- Accept payments in different tokens
- Convert tokens to a stablecoin for stability
- Withdraw funds to a bank account
- Integration with the Circle Payout API
- Multichain support using the Circle Cross Chain API

## Prerequisites

Before running the FlexorPay smart contract, make sure you have the following prerequisites installed on your system:

- Node.js
- Hardhat
- Solidity compiler

## Getting Started

1. Clone this repository:

```
git clone https://github.com/hexdee/flexorpay
```

2. Install the dependencies:

```
cd flexorpay/contract
npm install
```

3. Customize the contract parameters:

Open the `contracts/FlexorPay.sol` file and update the following variables according to your requirements:

- `slippage`: The slippage percentage for token swaps
- `swapRouter`: The address of the Uniswap V2 Router contract
- `stableCoin`: The address of the stablecoin contract

4. Create the environment file
Create a `.env` file and include these parameters

```
PRIVATE_KEY="YOUR PRIVATE KEY"
APP_ID="MATIC VIGIL APP ID"
API_KEY="MUMBAI SCAN API KEY"
```

5. Deploy the contract to mumbai network:

```
npx hardhat run scripts/deploy.js
```

## Contributing

Contributions to the FlexorPay smart contract are welcome! If you'd like to contribute, please follow these guidelines:

1. Fork the repository and create a new branch for your contributions.
2. Make your changes and ensure that the code adheres to the Solidity style guide.
3. Write tests to cover your changes.
4. Run the tests and ensure that they pass successfully.
5. Submit a pull request describing the purpose and details of your contributions.
