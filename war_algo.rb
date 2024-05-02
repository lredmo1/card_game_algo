def war player_one, player_two, break_out=nil

	result = nil

	while result == nil do
		if player_one.length == 0
			result = 2
		elsif player_two.length == 0
			result = 1
		elsif player_one[0] > player_two[0]
			player_one.push(player_one[0], player_two[0])
			player_one.shift()
			player_two.shift()	
			if break_out
				return 1 
			end
		elsif player_one[0] < player_two[0]
			player_two.push(player_two[0], player_one[0])
			player_one.shift()
			player_two.shift()
			if break_out
				return 2 
			end
		elsif player_one[0] == player_two[0]
			if player_one[1..].length >= 4 && player_two[1..].length >= 4
				result = handleWar(player_one, player_two, 4)
			elsif player_one[1..].length >= 3 && player_two[1..].length >= 3
				result = handleWar(player_one, player_two, 3)
			elsif player_one[1..].length >= 2 && player_two[1..].length >= 2
				result = handleWar(player_one, player_two, 2)
			elsif player_one[1..].length >= 1 && player_two[1..].length >= 1
				result = handleWar(player_one, player_two, 1)
			else 
				result = 0
			end
		end
	end

	return result

end

def handleWar(player_one, player_two, cardCount)
	winner = war(player_one[cardCount..], player_two[cardCount..], true)
	addCardsWon(winner, 1, player_one, player_two)
	return winner
end

def addCardsWon(result, num, player_one, player_two)

	if result == 1

		for i in 1..num
			player_one.push(player_one[i])
		end

		for i in 1..num
			player_one.push(player_two[i])
		end

		player_one.push(player_one[0], player_two[0])
		player_one.slice!(0..num + 1)
		player_two.slice!(0..num + 1)

	elsif result == 2

		for i in 1..num
			player_two.push(player_two[i])
		end

		for i in 1..num
			player_two.push(player_one[i])
		end

		player_two.push(player_two[0], player_one[0])
		player_two.slice!(0..num + 1)
		player_one.slice!(0..num + 1)

	end
	
end


player_one_cards_1 = [5, 1, 13, 10, 11, 3, 2, 10, 4, 12, 5, 11, 10, 5, 7, 6, 6, 11, 9, 6, 3, 13, 6, 1, 8, 1]
player_two_cards_1 = [9, 12, 8, 3, 11, 10, 1, 4, 2, 4, 7, 9, 13, 8, 2, 13, 7, 4, 2, 8, 9, 12, 3, 12, 7, 5]

player_one_cards_2 = [3, 11, 6, 12, 2, 13, 5, 7, 10, 3, 10, 4, 12, 11, 1, 13, 12, 2, 1, 7, 10, 6, 12, 5, 8, 1]
player_two_cards_2 = [9, 10, 7, 9, 5, 2, 6, 1, 11, 11, 7, 9, 3, 4, 8, 3, 4, 8, 8, 4, 6, 9, 13, 2, 13, 5]

player_one_cards_3 = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
player_two_cards_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

puts war player_one_cards_1,  player_two_cards_1 # expect 1
puts war player_one_cards_2, player_two_cards_2 # expect 2
puts war player_one_cards_3, player_two_cards_3 # expect 0
