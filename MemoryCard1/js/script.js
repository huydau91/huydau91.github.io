var cards = ['luffy', 'zoro', 'nami', 'law', 'ace', 'frank', 'robin', 'shank', 'sanji', 'hawkeye', 'kid', 'brook'];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}

$(function(){
	cards = cards.concat(cards);
	cards = shuffle(cards);
	var loadcards = '';
	for(var i = 0; i < cards.length; i++){
 		loadcards += '<div class="card">' +
			'<div class="front"><img src="img/back.jpg" class="img-responsive"></div>' + 
				'<div class="back"><img src="img/' + cards[i] + '.jpg" class="img-responsive"></div></div>'
	};
	$('.grid').html(loadcards);
});

$(function(){
	$('.card').click(function(){
	
	$(this).toggleClass('flipped');
	$(this).css('pointer-events', 'none');
	})
});