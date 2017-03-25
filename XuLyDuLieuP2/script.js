var COLUMN_TYPE = ['todo', 'doing', 'done'];

var DB = {
	getData: function(){
		if (typeof(Storage) !== "undefined") {
			var data;
			try {
				data = JSON.parse(localStorage.getItem('list')) || {};
			}	catch (error){
				data = {};
			}

				return data;
		} else {
			    alert("Trình duyệt không được hỗ trợ");
		}
	},

	setData: function(data){
		localStorage.setItem('list', JSON.stringify(data));
	}
};

var list = DB.getData();


var app = {
	newjob: function (e, type, input){
		var jobname = $(input).val();

		var event = window.event || e;

		if(event.keyCode === 13 && jobname.trim() !== ''){
			if (!list[type]) list[type] = [];
			list[type].push(jobname);
			DB.setData(list);

			this.addjobtolist(type, jobname);


			$(input).val('');
		}
	},

	addjobtolist: function (type, jobname){
		var item = '<li class="collection-item">' + jobname + '<span class="badge" onclick="app.deletejob(this)"><i class="material-icons">delete</i></span></li>';

		$('#' + type).append(item);
	},

	deletejob: function (span){
		$('#delete-confirm').modal();

		var modal = $('#delete-confirm');
		var btn =  $('#btn-delete');
		var item = $(span).parent();

		modal.modal('open');

		btn.off('click');

		btn.on('click', function(){
			var columntype = item.parent().attr('id');
			var itemPosition = $('#' + columntype + ' .collection-item').index(item);

			list[columntype].splice(itemPosition, 1);
			DB.setData(list);

			item.remove();
			modal.modal('close');
		});
	}
};

$( function() {
	COLUMN_TYPE.forEach(function(type){
		var columntype = list[type] || [];
		columntype.forEach(function(jobname){
			app.addjobtolist(type, jobname);
		})
	});

	// var doing = list['doing'] || [];

	// doing.forEach(function(job){
	// 	app.addjobtolist('doing', job);
	// });

    $( '.sorted-list' ).sortable({
      connectWith: '.sorted-list',
      placeholder: 'ui-state-highlight',
      start: function (event, ui){
      	$(ui.item[0]).addClass('dragging');
      },

      stop: function (event, ui){
      	$(ui.item[0]).removeClass('dragging');
      }
    });
} );