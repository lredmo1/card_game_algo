# this solution is still in progress
def war(playerOne, playerTwo, breakOut=None):

	result = None

	while result is None:
		if len(playerOne) == 0:
			result = 2
		elif len(playerTwo) == 0:
			result = 1
		elif playerOne[0] > playerTwo[0]:
			playerOne.append(playerOne[0])
			playerOne.append(playerTwo[0])
			playerOne.pop(0)
			playerTwo.pop(0)	
			if (breakOut):
				return 1 
		elif playerOne[0] < playerTwo[0]:
			playerTwo.append(playerTwo[0])
			playerTwo.append(playerOne[0])
			playerOne.pop(0)
			playerTwo.pop(0)		
			if (breakOut):
				return 2 
		elif playerOne[0] == playerTwo[0]:
			if len(playerOne[1:]) >= 4 and len(playerTwo[1:]) >= 4:
				result = handleWar(playerOne, playerTwo, 4)
			elif len(playerOne[1:]) >= 3 and len(playerTwo[1:]) >= 3:
				result = handleWar(playerOne, playerTwo, 3)
			elif len(playerOne[1:]) >= 2 and len(playerTwo[1:]) >= 2:
				result = handleWar(playerOne, playerTwo, 2)
			elif len(playerOne[1:]) >= 1 and len(playerTwo[1:]) >= 1:
				result = handleWar(playerOne, playerTwo, 1)
			else:
				result = 0

	return result

def handleWar(playerOne, playerTwo, cardCount):
	winner = war(playerOne[cardCount:], playerTwo[cardCount:], True)
	addCardsWon(winner, 1, playerOne, playerTwo)
	return winner

def addCardsWon(result, num, playerOne, playerTwo):

	if result == 1:
		for val in range(1, num + 1):
			playerOne.append(playerOne[val])
		for val in range(1, num + 1):
			playerOne.append(playerTwo[val])
		playerOne.append(playerOne[0])
		playerOne.append(playerTwo[0])
		del playerOne[0: num + 1]
		del playerTwo[0: num + 1]

	if result == 2:
		for val in range(1, num + 1):
			playerTwo.append(playerTwo[val])
		for val in range(1, num + 1):
			playerTwo.append(playerOne[val])
		playerTwo.append(playerTwo[0])
		playerTwo.append(playerOne[0])
		del playerOne[0: num + 1]
		del playerTwo[0: num + 1]

	return [playerOne, playerTwo]

playerOneCards1 = [5, 1, 13, 10, 11, 3, 2, 10, 4, 12, 5, 11, 10, 5, 7, 6, 6, 11, 9, 6, 3, 13, 6, 1, 8, 1]
playerTwoCards1 = [9, 12, 8, 3, 11, 10, 1, 4, 2, 4, 7, 9, 13, 8, 2, 13, 7, 4, 2, 8, 9, 12, 3, 12, 7, 5]

playerOneCards2 = [3, 11, 6, 12, 2, 13, 5, 7, 10, 3, 10, 4, 12, 11, 1, 13, 12, 2, 1, 7, 10, 6, 12, 5, 8, 1]
playerTwoCards2 = [9, 10, 7, 9, 5, 2, 6, 1, 11, 11, 7, 9, 3, 4, 8, 3, 4, 8, 8, 4, 6, 9, 13, 2, 13, 5]

playerOneCards3 = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
playerTwoCards3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


print(war(playerOneCards1,  playerTwoCards1)) # expect 1
print(war(playerOneCards2, playerTwoCards2)) # expect 2
print(war(playerOneCards3, playerTwoCards3)) # expect 0