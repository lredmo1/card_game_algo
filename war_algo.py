# this solution is still in progress
def war(player_one, player_two, break_out=None):

	result = None

	while result is None:
		if len(player_one) == 0:
			result = 2
		elif len(player_two) == 0:
			result = 1
		elif player_one[0] > player_two[0]:
			player_one.extend((player_one[0], player_two[0]))
			player_one.pop(0)
			player_two.pop(0)	
			if (break_out):
				return 1 
		elif player_one[0] < player_two[0]:
			player_two.extend((player_two[0], player_one[0]))
			player_one.pop(0)
			player_two.pop(0)		
			if (break_out):
				return 2 
		elif player_one[0] == player_two[0]:
			if len(player_one[1:]) >= 4 and len(player_two[1:]) >= 4:
				result = handleWar(player_one, player_two, 4)
			elif len(player_one[1:]) >= 3 and len(player_two[1:]) >= 3:
				result = handleWar(player_one, player_two, 3)
			elif len(player_one[1:]) >= 2 and len(player_two[1:]) >= 2:
				result = handleWar(player_one, player_two, 2)
			elif len(player_one[1:]) >= 1 and len(player_two[1:]) >= 1:
				result = handleWar(player_one, player_two, 1)
			else:
				result = 0

	return result

def handleWar(player_one, player_two, cardCount):
	winner = war(player_one[cardCount:], player_two[cardCount:], True)
	addCardsWon(winner, 1, player_one, player_two)
	return winner

def addCardsWon(result, num, player_one, player_two):

	if result == 1:
		for val in range(1, num + 1):
			player_one.append(player_one[val])
		for val in range(1, num + 1):
			player_one.append(player_two[val])
		player_one.extend((player_one[0], player_two[0]))
		del player_one[0: num + 1]
		del player_two[0: num + 1]

	if result == 2:
		for val in range(1, num + 1):
			player_two.append(player_two[val])
		for val in range(1, num + 1):
			player_two.append(player_one[val])
		player_two.extend((player_two[0], player_one[0]))
		del player_one[0: num + 1]
		del player_two[0: num + 1]

	return [player_one, player_two]

player_one_cards_1 = [5, 1, 13, 10, 11, 3, 2, 10, 4, 12, 5, 11, 10, 5, 7, 6, 6, 11, 9, 6, 3, 13, 6, 1, 8, 1]
player_two_cards_1 = [9, 12, 8, 3, 11, 10, 1, 4, 2, 4, 7, 9, 13, 8, 2, 13, 7, 4, 2, 8, 9, 12, 3, 12, 7, 5]

player_one_cards_2 = [3, 11, 6, 12, 2, 13, 5, 7, 10, 3, 10, 4, 12, 11, 1, 13, 12, 2, 1, 7, 10, 6, 12, 5, 8, 1]
player_two_cards_2 = [9, 10, 7, 9, 5, 2, 6, 1, 11, 11, 7, 9, 3, 4, 8, 3, 4, 8, 8, 4, 6, 9, 13, 2, 13, 5]

player_one_cards_3 = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
player_two_cards_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


print(war(player_one_cards_1, player_two_cards_1)) # expect 1
print(war(player_one_cards_2, player_two_cards_2)) # expect 2
print(war(player_one_cards_3, player_two_cards_3)) # expect 0