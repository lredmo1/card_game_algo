// The card game War
const war = (playerOne, playerTwo, breakOut) => {
  
	let result
  
	while (result === undefined) {

		// If Player 1 has no cards, set the result to 2 to exit the while loop and indicate Player 2 has won
		if (playerOne.length === 0) {

			result = 2

		// If Player 2 has no cards, set the result to 1 to exit the while loop and indicate Player 1 has won	
		} else if (playerTwo.length === 0) {

			result = 1

		// If Player 1's card is greater than Player 2's card
		} else if (playerOne[0] > playerTwo[0]) {
			
			// Add both cards to the bottom of Player 1's deck, remove from the top of both players decks, and continue the game from the start	
			playerOne.push(playerOne.splice(0, 1)[0], playerTwo.splice(0, 1)[0])

			// If a true value has been passed into the recursive use of the function, exit the loop because Player 1 has won  the war
			if (breakOut) return 1 
		
		// If Player 2's card is greater than Player 1's card
		} else if (playerOne[0] < playerTwo[0]) {
		
			// Add both cards to the bottom of Player 2's deck, remove from the top of both players decks, and continue the game from the start
			playerTwo.push(playerTwo.splice(0, 1)[0], playerOne.splice(0, 1)[0])
			
			// If a true value has been passed into the recursive use of the function, exit the loop because Player 1 has won the war
			if (breakOut) return 2
		
		// If players have equal cards, initiate a war	
		} else if (playerOne[0] === playerTwo[0]) {
		
			// If both players have at least four cards remaining
			if (playerOne.slice(1).length >= 4 && playerTwo.slice(1).length >= 4) {
				
				// Call the handleWar helperFunction for a war with at least four remaining cards
				result = handleWar(playerOne, playerTwo, 4)

			// If one player has only three cards remaining
			} else if (playerOne.slice(1).length >= 3 && playerTwo.slice(1).length >= 3) {
				
				// Call the handleWar helperFunction for a war with at least three remaining cards
				result = handleWar(playerOne, playerTwo, 3)
				
			// If one player has only two cards remaining
			} else if (playerOne.slice(1).length >= 2 && playerTwo.slice(1).length >= 2) {

				// Call the handleWar helperFunction for a war with at least two remaining cards
				result = handleWar(playerOne, playerTwo, 2)

			// If one player has only one card remaining
			} else if (playerOne.slice(1).length >= 1 && playerTwo.slice(1).length >= 1) {
				
				// Call the handleWar helperFunction for a war with at least one remaining cards
				result = handleWar(playerOne, playerTwo, 1)
			
			// Else, exit the loop and indicate a tie	
			} else {

				result = 0

			} 

		}

	}
  
	// Return 1 for a Player 1 win, 2 for a Player 2 Win, or 0 for a tie
	return result 
  
}

const handleWar = (playerOne, playerTwo, cardCount) => {

	let winner
	let cardsWon

	// Recursively pass the cards, beginning from the "face up" card, into a new battle sequence 
	// Pass in `true` to indicate the recursion should end after the first battle is won
	winner = war(playerOne.slice(cardCount), playerTwo.slice(cardCount), true)

	// Add the necessary cards to the winner's deck
	cardsWon = addCardsWon(winner, cardCount, playerOne, playerTwo)

	// Exit the loop when a winner is resolved from recursive battles
	return winner

}

// Helper function for adding cards to the bottom of the deck after a War is won
const addCardsWon = (result, num, playerOne, playerTwo) => {

	// If Player 1 wins the war, add face down cards then face up card to the bottom of their deck and remove from the top of the deck
	if (result === 1) {
	  
	  for (let i = 1; i <= num; i++) {
		playerOne.push(playerOne[i])
	  }

	// Next add Player 2's face down cards then face up card to the bottom of Player 1's deck and remove from the top of Player 2's deck
	  for (let i = 1; i <= num; i++) {
		playerOne.push(playerTwo.push[i])
	  }

	// Then add the original equal cards that triggered the war to the bottom of Player 1's deck
		playerOne.push(playerOne[0])
		playerOne.push(playerTwo[0])
	
	// If Player 2 wins the war, follow the same process but add the cards to the bottom of Player 2's deck  
	} else if (result === 2) {
	  
	  for (let i = 1; i <= num; i++) {
		playerTwo.push(playerTwo.push[i])
	  }

	  for (let i = 1; i <= num; i++) {
		playerTwo.push(playerOne.push[i])
	  }

	  	playerTwo.push(playerTwo[0])
	  	playerTwo.push(playerOne[0])
	 
	}

	// Return the decks in their new order
	return [playerOne, playerTwo]

}


// Test Cases  
const playerOneCards1 = [5, 1, 13, 10, 11, 3, 2, 10, 4, 12, 5, 11, 10, 5, 7, 6, 6, 11, 9, 6, 3, 13, 6, 1, 8, 1]
const playerTwoCards1 = [9, 12, 8, 3, 11, 10, 1, 4, 2, 4, 7, 9, 13, 8, 2, 13, 7, 4, 2, 8, 9, 12, 3, 12, 7, 5]

const playerOneCards2 = [3, 11, 6, 12, 2, 13, 5, 7, 10, 3, 10, 4, 12, 11, 1, 13, 12, 2, 1, 7, 10, 6, 12, 5, 8, 1]
const playerTwoCards2 = [9, 10, 7, 9, 5, 2, 6, 1, 11, 11, 7, 9, 3, 4, 8, 3, 4, 8, 8, 4, 6, 9, 13, 2, 13, 5]

const playerOneCards3 = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const playerTwoCards3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


console.log(war(playerOneCards1,  playerTwoCards1)) // expect 1
console.log(war(playerOneCards2, playerTwoCards2)) // expect 2
console.log(war(playerOneCards3, playerTwoCards3)) // expect 0