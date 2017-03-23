var app = {
	newjob: function (e, type, input){
		var jobname = $(input).val();

		var event = window.event || e;

		if(event.keyCode === 13 && jobname.trim() !== ''){
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
		var item = $(span).parent();

		modal.modal('open');

		$('#btn-delete').on('click', function(){
			item.remove();
			modal.modal('close');
		});
	}
};

$( function() {
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