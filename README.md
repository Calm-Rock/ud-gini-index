# UD-Transactions
A Really simple DApp to get a user's recent transactions info from their address incorporating the use of Unstoppable Domains login feature.

This project is a submission for the [Unstoppable Domains](https://gitcoin.co/issue/unstoppabledomains/gitcoin-bounties/1/100027208) Gitcoin GR12 hackathon.

# Project Repo
You can find it [here](https://github.com/Calm-Rock/ud-transactions)

# Video Demo
A video demo of the app can be found [here](https://youtu.be/-LQk7HozBos)

# Live Website
You can find a live version of the webapp [here](https://ud-transactions.vercel.app)

# Contact info
**Discord** : Cheeto.da#0105 <br>
**Email** : cheetoda0x@gmail.com <br>
**Twitter** : [@cheetoda0x](https://twitter.com/cheetoda0x) <br>

# Steps to setup locally

1. Clone the repo and cd in to the direcotry
``` 
git clone https://github.com/Calm-Rock/ud-transactions.git
cd ud-transactions
```
2. Install the dependencies
``` 
npm install

```
3. Create a .env file in the root folder and populate it wiht the following variables:
```
REACT_APP_UAUTH_CLIENT_ID=
REACT_APP_UAUTH_CLIENT_SECRET=
REACT_APP_UAUTH_REDIRECT_URI=
REACT_APP_UAUTH_LOGOUT_REDIRECT_URI=
REACT_APP_ETHPLORER_API_KEY=
```
4. Run the local development environment
```
npm start
```
It should open up the localhost window in the browser.

A cool feature that I'd like to include in the future version of the DApp would be to throw out the [Gini-Coefficient](https://en.wikipedia.org/wiki/Gini_coefficient) values for all the tokens that a user holds.

Hope you like it ❤️
