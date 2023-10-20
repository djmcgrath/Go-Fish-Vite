# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Go-Fish

Running/Installation:
    1. git clone in your terminal with the copied SSH from the github code in the Go-Fish-Vite repository 
    2. cd into the Go-Fish-Vite in your terminal after the clone
    3. run code . once you have cd'd into Go-Fish-Vite
    4. once the code is opened in VS code run "npm run dev" in the terminal this runs vite
    5. then in a second terminal run "json-server --watch db.json" to access the information in the db.json

To-Play:
    1. First you will either select a player from the drop down or type in your own player name and hit enter and then find that name in the drop down and click on it.
    2. Once you select the player from the drop down it will take you to the game page where you click the "click to start" button it is green. This will deal 7 cards to each hand ("player" and computer)
    3. Then it will start on your turn where you look at your hand and click on the card you want to see if the computer has. If the computer has that card you will get that card from the computers' hand and you will continue this process until the computer doesn't have the card you ask for making you draw a card from the deck.
    4. There is a header that lets you know whose turn it is and on the computers turn you will click the "CPU's turn" button it is yellow. This will run the computers functionality and you will have to keep clicking it until it says it is your turn.
    5. You repeat this process until there are no more cards in the deck which will trigger a navigate to the scorecard page.
    6. In the scorecard page there is a table that will show all the scores and names from the db.json and will show you your updated score under the name you have chosen. 
