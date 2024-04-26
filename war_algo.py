def war(arr1, arr2, breakOut=None):

	result = None

	while result is None:
		if len(arr1) == 0:
			result = 2
		elif len(arr2) == 0:
			result = 1
		elif arr1[0] > arr2[0]:
			arr1.append(arr1[0])
			arr1.append(arr2[0])
			arr1.pop(0)
			arr2.pop(0)		
			if (breakOut):
				return 1 
		elif arr1[0] < arr2[0]:
			arr2.append(arr2[0])
			arr2.append(arr1[0])
			arr1.pop(0)
			arr2.pop(0)		
			if (breakOut):
				return 2 
		elif arr1[0] == arr2[0]:
			if len(arr1[1:]) >= 4 and len(arr2[1:]) >= 4:
				winner = war(arr1[1:], arr2[1:], True)
				cardsWon = addCardsWon(winner, 4, arr1, arr2)
				arr1 = cardsWon[0]
				arr2 = cardsWon[1]
				result = winner
			elif len(arr1[1:]) >= 3 and len(arr2[1:]) >= 3:
				winner = war(arr1[1:], arr2[1:], True)
				cardsWon = addCardsWon(winner, 3, arr1, arr2)
				arr1 = cardsWon[0]
				arr2 = cardsWon[1]
				result = winner
			elif len(arr1[1:]) >= 2 and len(arr2[1:]) >= 2:
				winner = war(arr1[1:], arr2[1:], True)
				cardsWon = addCardsWon(winner, 2, arr1, arr2)
				arr1 = cardsWon[0]
				arr2 = cardsWon[1]
				result = winner
			elif len(arr1[1:]) >= 1 and len(arr2[1:]) >= 1:
				winner = war(arr1[1:], arr2[1:], True)
				cardsWon = addCardsWon(winner, 1, arr1, arr2)
				arr1 = cardsWon[0]
				arr2 = cardsWon[1]
				result = winner
			else:
				result = 0

	return result

def addCardsWon(result, num, playerOne, playerTwo):
	if result == 1:
		for val in range(1, num):
			playerOne.append(playerOne.pop(val))
		for val in range(1, num):
			playerOne.append(playerTwo.pop(val))
		playerOne.append(playerOne[0])
		playerOne.append(playerTwo[0])

	if result == 2:
		for val in range(1, num):
			playerTwo.append(playerTwo.pop(val))
		for val in range(1, num):
			playerTwo.append(playerOne.pop(val))
		playerTwo.append(playerTwo[0])
		playerTwo.append(playerOne[0])

	return [playerOne, playerTwo]

playerOneCards1 = [5, 1, 13, 10, 11, 3, 2, 10, 4, 12, 5, 11, 10, 5, 7, 6, 6, 11, 9, 6, 3, 13, 6, 1, 8, 1]
playerTwoCards1 = [9, 12, 8, 3, 11, 10, 1, 4, 2, 4, 7, 9, 13, 8, 2, 13, 7, 4, 2, 8, 9, 12, 3, 12, 7, 5]

playerOneCards2 = [3, 11, 6, 12, 2, 13, 5, 7, 10, 3, 10, 4, 12, 11, 1, 13, 12, 2, 1, 7, 10, 6, 12, 5, 8, 1]
playerTwoCards2 = [9, 10, 7, 9, 5, 2, 6, 1, 11, 11, 7, 9, 3, 4, 8, 3, 4, 8, 8, 4, 6, 9, 13, 2, 13, 5]

playerOneCards3 = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
playerTwoCards3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


print(war(playerOneCards1,  playerTwoCards1))
print(war(playerOneCards2, playerTwoCards2))
print(war(playerOneCards3, playerTwoCards3))