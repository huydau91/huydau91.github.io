var cards = ['luffy', 'zoro', 'nami', 'law', 'ace', 'frank', 'robin', 'shank', 'sanji', 'hawkeye', 'kid', 'brook'];
var current = null;
var count = 0;
var remainingtime = 100;
var runningtime = 0;
var i = 0;
var a = [];

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
});


function normal(){
	var time = 90;
	var rate = 100/90;
	$('.batdau').hide();
	$('.batdau').css('z-index', '0');
	$('#nhacnen').trigger('play');
	var run = setInterval(function(){
		$('.timer').width(remainingtime + '%');
		runningtime += rate;
		remainingtime = 100 - runningtime;
		time--;
		console.log(time);

	if(time < 0){
		clearInterval(run);
		$('#nhacnen').trigger('pause');
		$('#hetgio').trigger('play');
		$('.card').css('pointer-events', 'none');
		$(".lose > .dialog > h1").html("YOUR SCORE: " + count);
		$('.lose').show();
		}

	if(count == 12){
		clearInterval(run);
		$('#nhacnen').trigger('pause');
		$('#victory').trigger('play');
		$('.card').css('pointer-events', 'none');
		$(".win > .dialog > h1").html("YOU ARE VICTORY!!!");
		$('.win').show();
	};

	}, 1000);
};

function hard(){
	var time = 60;
	var rate = 100/60;
	$('.batdau').hide();
	$('.batdau').css('z-index', '0');
	$('#nhacnen').trigger('play');
	var run = setInterval(function(){
		$('.timer').width(remainingtime + '%');
		runningtime += rate;
		remainingtime = 100 - runningtime;
		time--;
		console.log(time);

	if(time < 0){
		clearInterval(run);
		$('#nhacnen').trigger('pause');
		$('#hetgio').trigger('play');
		$('.card').css('pointer-events', 'none');
		$(".lose > .dialog > h1").html("YOUR SCORE: " + count);
		$('.lose').show();
		}

	if(count == 12){
		clearInterval(run);
		$('#nhacnen').trigger('pause');
		$('#victory').trigger('play');
		$('.card').css('pointer-events', 'none');
		$(".win > .dialog > h1").html("YOU ARE VICTORY!!!");
		$('.win').show();
	};
	}, 1000);
};

$(function(){
	$('.card').click(function(){
	
	$('#click').trigger('play');
	$(this).toggleClass('flipped');
	$(this).css('pointer-events', 'none');

	var checked = $(this);
	
	if(!current){
		current = checked;
	}
	else{
		if(current.attr('name') != checked.attr('name')){
			setTimeout(function(){
				checked.toggleClass('flipped');
				current.toggleClass('flipped');
				$('#sai').trigger('play');
				current.css('pointer-events', 'auto');
				checked.css('pointer-events', 'auto');
				// $('.grid').css('pointer-events', 'auto');

				current = null;
			}, 500);
		}
		else{
			setTimeout(function(){
				checked.css('opacity', '0');
				current.css('opacity', '0');
				// checked.fadeOut('normal');
				// current.fadeOut('normal');
				$('#dung').trigger('play');

				// $('.grid').css('pointer-events', 'auto');
				checked.css('pointer-events', 'none');
				current.css('pointer-events', 'none');

				current = null;

				count++;
			}, 500);
		}
	}
	});
});