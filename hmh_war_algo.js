const addBattleCards = (result, num, playerOne, playerTwo) => {

	if (result === 1) {
	  
	  for (let i = 1; i <= num; i++) {
		playerOne.push(playerOne[i])
	  }
	  for (let i = 1; i <= num; i++) {
		playerOne.push(playerTwo[i])
	  }
	  playerOne.push(playerOne[0])
	  playerOne.push(playerTwo[0])
	  playerOne.splice(0, num + 1)
	  playerTwo.splice(0, num + 1)
	  
	} else if (result === 2) {
	  
	  for (let i = 1; i <= num; i++) {
		playerTwo.push(playerTwo[i])
	  }
	  for (let i = 1; i <= num; i++) {
		playerTwo.push(playerOne[i])
	  }
	  playerTwo.push(playerTwo[0])
	  playerTwo.push(playerOne[0])
	  playerTwo.splice(0, num + 1)
	  playerOne.splice(0, num + 1)
	  
	} else if (result === 3) {
	  playerOne = []
	  playerTwo = []
	 
	}
	return [playerOne, playerTwo ]
  }
  
  const battle = (arr1, arr2, breakOut) => {
  
	let result;
	let battleCards;
	let i = 0;
  
	while (result === undefined) {
	  if (arr1.length == 0 && arr2.length == 0) {
		
		result = 0
	  } else if (arr1.length === 0) {
		
		result = 2
	  } else if (arr2.length === 0) {
	   
		result = 1
	  } else if (arr1[i] > arr2[i]) {
		
		arr1.push(arr1[i], arr2[i])
		arr1.splice(i, 1)
		arr2.splice(i, 1)
		if (breakOut) return 1 
	  } else if (arr1[i] < arr2[i]) {
		
		arr2.push(arr2[i], arr1[i])
		arr1.splice(i, 1)
		arr2.splice(i, 1)
		
		if (breakOut) return 2
	  } else if (arr1[i] == arr2[i]) {
		
		if (arr1.slice(i + 1).length >= 4 && arr2.slice(i + 1).length >= 4) {
		  
		  winner = battle(arr1.slice(i + 4), arr2.slice(i + 4), true)
		  
		  if (winner === 0) {
			result = 0
		  }
		  battleCards = addBattleCards(winner, 4, arr1, arr2)
		  
		  arr1 = battleCards[0]
		  arr2 = battleCards[1]
		  
		  result = winner
		} else if (arr1.slice(i + 1).length >= 3 && arr2.slice(i + 1).length >= 3) {
		  
		  winner = battle(arr1.slice(i + 3), arr2.slice(i + 3))
		  if (winner === 0) {
			result = 0
		  }
		  battleCards = addBattleCards(winner, 3, arr1, arr2, true)
		  arr1.concat(battleCards[0])
		  arr2.concat(battleCards[1])
		  result = winner
		} else if (arr1.slice(i + 1).length >= 2 && arr2.slice(i + 1).length >= 2) {
		  
		  winner = battle(arr1.slice(i + 2), arr2.slice(i + 2))
		  if (winner === 0) {
			result = 0
		  }
		  battleCards = addBattleCards(winner, 2, arr1, arr2, true)
		  arr1.concat(battleCards[0])
		  arr2.concat(battleCards[1])
		  result = winner
		} else if (arr1.slice(i + 1).length >= 1 && arr2.slice(i + 1).length >= 1) {
		  
		  winner = battle(arr1.slice(i + 1), arr2.slice(i + 1)) 
		  if (winner === 0) {
			result = 0
		  }
		  battleCards = addBattleCards(winner, 1, arr1, arr2, true)
		  arr1.concat(battleCards[0])
		  arr2.concat(battleCards[1])
		  result = winner
		} else if (arr1.slice(i + 1).length >= 0 && arr2.slice(i + 1).length >= 0) {
   
		  result = 0
		} 
	 
  
		break
	  }
	}
  
  
	return result 
  
  }
  

  
  const playerOneCards1 = [5, 1, 13, 10, 11, 3, 2, 10, 4, 12, 5, 11, 10, 5, 7, 6, 6, 11, 9, 6, 3, 13, 6, 1, 8, 1]
  const playerTwoCards1 = [9, 12, 8, 3, 11, 10, 1, 4, 2, 4, 7, 9, 13, 8, 2, 13, 7, 4, 2, 8, 9, 12, 3, 12, 7, 5]
  
  const playerOneCards2 = [3, 11, 6, 12, 2, 13, 5, 7, 10, 3, 10, 4, 12, 11, 1, 13, 12, 2, 1, 7, 10, 6, 12, 5, 8, 1]
  const playerTwoCards2 = [9, 10, 7, 9, 5, 2, 6, 1, 11, 11, 7, 9, 3, 4, 8, 3, 4, 8, 8, 4, 6, 9, 13, 2, 13, 5]
  // 
  const playerOneCards3 = [1,2,3,4,5, 6,7,8,9,10,11,12,13,1,2,3,4,5, 6,7,8,9,10,11,12,13]
  const playerTwoCards3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5, 6,7,8,9,10,11,12,13]
  

  console.log(battle(playerOneCards1, playerTwoCards1))
  console.log(battle(playerOneCards2, playerTwoCards2))
  console.log(battle(playerOneCards3, playerTwoCards3))