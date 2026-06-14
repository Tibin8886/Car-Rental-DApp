# Car Rental DApp

A React + Solidity + Hardhat decentralized car rental application. Users can connect MetaMask, choose a car, select rental dates, and create a blockchain booking.

## Tech Stack

- React 18
- Solidity 0.8.9
- Hardhat
- Ethers.js v5
- MetaMask

## Run the frontend

```bash
npm install
npm start
```

Open:

```text
http://localhost:3000
```

Do not open `public/index.html` directly. This is a React app and must be run with `npm start`.

## Run the smart contract locally

Terminal 1:

```bash
npm run node
```

Terminal 2:

```bash
npm run deploy:local
```

Copy the deployed contract address into a `.env` file:

```text
REACT_APP_CAR_RENTAL_CONTRACT=PASTE_CONTRACT_ADDRESS_HERE
```

Then restart the React app:

```bash
npm start
```

## Deploy to Sepolia

Create a `.env` file based on `.env.example`, then run:

```bash
npm run deploy:sepolia
```

## Important notes

- Install MetaMask to use blockchain booking.
- Use test ETH only for development.
- Never upload your real private key to GitHub.


## Multi-page update

This version includes React Router pages for Home, About, Cars, Booking, Reviews, and Contact. Run with `npm install` and `npm start`, then open `http://localhost:3000`.
