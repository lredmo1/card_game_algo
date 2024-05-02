def war playerOne, playerTwo, breakOut=nil

	result = nil

	while result == nil do
		if playerOne.length == 0
			result = 2
		elsif playerTwo.length == 0
			result = 1
		elsif playerOne[0] > playerTwo[0]
			playerOne.push(playerOne[0], playerTwo[0])
			playerOne.shift()
			playerTwo.shift()	
			if breakOut
				return 1 
			end
		elsif playerOne[0] < playerTwo[0]
			playerTwo.push(playerTwo[0], playerOne[0])
			playerOne.shift()
			playerTwo.shift()
			if breakOut
				return 2 
			end
		elsif playerOne[0] == playerTwo[0]
			if playerOne[1..].length >= 4 && playerTwo[1..].length >= 4
				result = handleWar(playerOne, playerTwo, 4)
			elsif playerOne[1..].length >= 3 && playerTwo[1..].length >= 3
				result = handleWar(playerOne, playerTwo, 3)
			elsif playerOne[1..].length >= 2 && playerTwo[1..].length >= 2
				result = handleWar(playerOne, playerTwo, 2)
			elsif playerOne[1..].length >= 1 && playerTwo[1..].length >= 1
				result = handleWar(playerOne, playerTwo, 1)
			else 
				result = 0
			end
		end
	end

	return result

end

def handleWar(playerOne, playerTwo, cardCount)
	winner = war(playerOne[cardCount..], playerTwo[cardCount..], true)
	addCardsWon(winner, 1, playerOne, playerTwo)
	return winner
end

def addCardsWon(result, num, playerOne, playerTwo)

	if result == 1

		for i in 1..num
			playerOne.push(playerOne[i])
		end

		for i in 1..num
			playerOne.push(playerTwo[i])
		end

		playerOne.push(playerOne[0], playerTwo[0])
		playerOne.slice!(0..num + 1)
		playerTwo.slice!(0..num + 1)

	elsif result == 2

		for i in 1..num
			playerTwo.push(playerTwo[i])
		end

		for i in 1..num
			playerTwo.push(playerOne[i])
		end

		playerTwo.push(playerTwo[0], playerOne[0])
		playerTwo.slice!(0..num + 1)
		playerOne.slice!(0..num + 1)

	end
	
end


playerOneCards1 = [5, 1, 13, 10, 11, 3, 2, 10, 4, 12, 5, 11, 10, 5, 7, 6, 6, 11, 9, 6, 3, 13, 6, 1, 8, 1]
playerTwoCards1 = [9, 12, 8, 3, 11, 10, 1, 4, 2, 4, 7, 9, 13, 8, 2, 13, 7, 4, 2, 8, 9, 12, 3, 12, 7, 5]

playerOneCards2 = [3, 11, 6, 12, 2, 13, 5, 7, 10, 3, 10, 4, 12, 11, 1, 13, 12, 2, 1, 7, 10, 6, 12, 5, 8, 1]
playerTwoCards2 = [9, 10, 7, 9, 5, 2, 6, 1, 11, 11, 7, 9, 3, 4, 8, 3, 4, 8, 8, 4, 6, 9, 13, 2, 13, 5]

playerOneCards3 = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
playerTwoCards3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

puts war playerOneCards1,  playerTwoCards1 # expect 1
puts war playerOneCards2, playerTwoCards2 # expect 2
puts war playerOneCards3, playerTwoCards3 # expect 0
