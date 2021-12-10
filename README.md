# 📈 Crypto Investment App

# Table of contents

- [📈 Crypto Investment App](#-crypto-investment-app)
- [Table of contents](#table-of-contents)
- [Introduction](#introduction)
	- [Tech Stack](#tech-stack)
	- [Project Demo](#project-demo)
		- [🤳 Screenshots](#-screenshots)
		- [🚶 Walkthrough](#-walkthrough)
- [Project Scope](#project-scope)
	- [Requirements](#requirements)
		- [Functionalities](#functionalities)
	- [Project Architecture](#project-architecture)
		- [Backend](#backend)
		- [Frontend](#frontend)
		- [Folder Structure](#folder-structure)
			- [Backend](#backend-1)
			- [Frontend](#frontend-1)
- [User Flow](#user-flow)
	- [Backend](#backend-2)
	- [Frontend](#frontend-2)
- [Project Management](#project-management)
- [Installation](#installation)
- [Hosted Link](#hosted-link)

# Introduction

Crypto Trading is a web app that displays information about the price, market cap, change in price over time, price charts of various cryptocurrencies like Bitcoin and Ethereum. The app also lets users add assets to their watchlist and mint NFTs on Solana Devnet. (Trading options are coming soon!)

## Tech Stack

| Languages                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Back-End                                                                                                                                                                                                                                                                                                                                                                            | Database                                                                                                                                                                                     | Web3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Front-End                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | UI Framework                                                                                                                                                                                                 | Hosting                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" alt="typescript" width="24" height="24"/></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="typescript" width="24" height="24"/></a> | <a href="https://nodejs.org" target="_blank" rel="noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="nodejs" width="24" height="24"/></a><a href="https://expressjs.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="expressjs" width="40" height="24"/></a> | <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="24" height="24"/></a> | <a href="https://solana.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/tapabratadey/Just-Gifs/main/public/solana.svg" alt="Solana" width="24" height="24"/></a><a href="https://phantom.app/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/tapabratadey/Just-Gifs/main/public/phantom.svg" alt="Phantom" width="24" height="24"/></a><a href="https://www.metaplex.com/" target="_blank" rel="noreferrer"> <img src="https://assets.website-files.com/6182ee30b608385a15466a3f/61830a3b2fae13390f52a5e0_Metaplex%20Logo%20Mark_blue.svg" alt="Metaplex" width="24" height="24"/></a> | <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="24" height="24"/></a><a href="https://redux-toolkit.js.org/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux-toolkit" width="24" height="24"/></a><a href="https://mobx.js.org/README.html" target="_blank" rel="noreferrer"> <img src="https://mobx.js.org/img/mobx.png" alt="mobx" width="24" height="24"/></a> | <a href="https://mui.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="Materiul UI" width="24" height="24"/></a> | <a href="https://www.netlify.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/netlify.svg" alt="Netlify" width="24" height="24"/></a><a href="https://www.heroku.com/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" alt="Heroku" width="24" height="24"/></a> |

## Project Demo

Fusce at mollis justo. Suspendisse eleifend neque diam, et ullamcorper urna gravida vitae.

### 🤳 Screenshots

|                 Cryptos Table View                 |                 Crypto Stats Page                 |               Watchlist Page                |                   NFT Mint Page                   |
| :------------------------------------------------: | :-----------------------------------------------: | :-----------------------------------------: | :-----------------------------------------------: |
| ![Cryptocurrencies](./readme_assets/TableView.png) | ![Statistics](./readme_assets/StatisticsPage.png) | ![Watchlist](./readme_assets/Watchlist.png) | ![NFT Mint Page](./readme_assets/NFTDropPage.png) |

|                Landing Page                 |                 Register                  |                 Login                 |                   NFT Auth Page                    |
| :-----------------------------------------: | :---------------------------------------: | :-----------------------------------: | :------------------------------------------------: |
| ![Landing](./readme_assets/LandingPage.png) | ![Register](./readme_assets/Register.png) | ![Landing](./readme_assets/Login.png) | ![Web3 Auth Page](./readme_assets/NFTAuthPage.png) |

### 🚶 Walkthrough

<p align="center" width="100%">
	<img src="./readme_assets/demo.gif" alt="Project Demo"/>
</p>

# Project Scope

Donec ultricies egestas augue non dignissim.

## Requirements

| Requirements                                                                                                   | Status | Details                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use of a modern JS Library / Framework like React, Angular, etc                                                | ✅     | React                                                                                                                                                                                       |
| Create an application that can be interacted with in a minimum of three different ways by the user             | ✅     | Login/Register, Cryptocurrencies Table View, Watchlist                                                                                                                                      |
| The usage of a specified architectural pattern (MVC, MVP, MWM,etc.)                                            | ✅     | MVVM                                                                                                                                                                                        |
| Integration with a backend service developed by you with CRUD(create, read, update, delete) operations         | ✅     | RESTful API with NodeJs, Express, Firestore.                                                                                                                                                |
| Integration with a 3rd party RESTful API.                                                                      | ✅     | `CoinGecko API`                                                                                                                                                                             |
| Usage of at least 5 UI components from the material-ui/@core                                                   | ✅     | `Box`, `MuiAppBar`, `MuiDrawer`, `Toolbar`, `List`, `ListItemIcon`, `ListItem`, `Divider`, `IconButton`, `Menu`, `MenuItem`, `Alert`, `AlertTitle`, `Table`, `Card`, `Card Content`, `Grid` |
| An example of a reusable component that you have created and used in the app (e.g. Ul component, service, etc) | ✅     | `<DashboardHeader/>`, `<LandingPageNavBar/>`, `<LoginFormView/>`, `<FooterComponent/>`, `<Home/>`, `<Login/>`, `<Register/>`, `<Assets/>`, `<Crypto/>`, `<Watchlist/>`, `<NFT/>`            |

### Functionalities

| A user can...                                                                   |
| ------------------------------------------------------------------------------- |
|                                                                                 |
| View prices, market cap, change %, and price charts of various cryptocurrencies |
| View Watchlist                                                                  |
| Register                                                                        |
| Login                                                                           |
| Logout                                                                          |
| Mint an NFT                                                                     |

## Project Architecture

Talk about the implemented architecture\*. V1: MVVM. V2: Flux

### Backend

Layered architecture with RESTful API with CRUD operations.

### Frontend

MVVM architecture for this project using MobX for state management for React Components.

### Folder Structure

#### Backend

![Backend](./readme_assets/Backend.png)

#### Frontend

![Frontend](./readme_assets/Frontend.png)

# User Flow

Talk about how users can interact w/ the app.

<p align="center" width="100%">
	<img src="./readme_assets/UserFlow.png" alt="User Flow"/>
</p>

## Backend

## Frontend

# Project Management

I'm using GitHub Kanban to plan and organize different stages of this project.

You can view public my GitHub board [here](https://github.com/tapabratadey/crypto-trading/projects/1).

# Installation

Write the installation instructions here.

# Hosted Link

[crypto-trading-btc.netlify.com](https://crypto-trading-btc.netlify.app/)
