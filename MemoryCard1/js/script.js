var cards = ['luffy', 'zoro', 'nami', 'law', 'ace', 'frank', 'robin', 'shank', 'sanji', 'hawkeye', 'kid', 'brook'];
var current = null;
var count = 0;
var time = 30;

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
 		loadcards += '<div class="card" name="' + cards[i] + '">' +
			'<div class="front"><img src="img/back.jpg" class="img-responsive"></div>' + 
				'<div class="back"><img src="img/' + cards[i] + '.jpg" class="img-responsive"></div></div>'
	};
	$('.grid').html(loadcards);

	var run = setInterval(function(){
		time--;
		console.log(time);

		if(time == 0){
			clearInterval(run);
			// $('#thongbao').modal('open');
			// loadcards = "Bạn đã thua cuộc, số điểm của bạn là: " + count;
			// $('.grid').html(loadcards);
			alert("Bạn đã thua cuộc, số điểm của bạn là: " + count);
			$('.card').css('pointer-events', 'none');
		}
	}, 1000);
});

$(function(){
	$('.card').click(function(){
	
	$(this).toggleClass('flipped');
	$(this).css('pointer-events', 'none');

	var checked = $(this);
	
	if(!current){
		current = checked;
	}
	else{
		if(current.attr('name') != $(checked).attr('name')){
			setTimeout(function(){
				checked.toggleClass('flipped');
				current.toggleClass('flipped');
				current = null;
			}, 500);
			$('.card').css('pointer-events', 'auto');
		}
		else{
			setTimeout(function(){
				checked.css('opacity', '0');
				checked.css('pointer-events', 'none');
				current.css('opacity', '0');
				current.css('pointer-events', 'none');
				current = null;

				count++;

				if(count == 12) alert("Chúc mừng bạn đã qua màn!!!");
			}, 200);
		}
	}
	});
});