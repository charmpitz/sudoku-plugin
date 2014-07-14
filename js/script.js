$(document).ready(function(){
	$('#sudoku2, #sudoku1').sudoku({
		editable	: false,
		touch 		: false,
		touchKeyboard : false,
		fullscreenMode : false,
		showOptions : false
	});
	$('#sudoku3').sudoku({
		editable	: true,
		touch 		: true,
		touchKeyboard : true,
		fullscreenEnterText : '<span class="glyph-large icon-resize-enlarge"></span>',
		fullscreenExitText : '<span class="glyph-large icon-resize-shrink"></span>',
		pauseText : '<span class="glyph-large icon-pause"></span>',
		unpauseText : '<span class="glyph-large icon-play"></span>',
		resetText : '<span class="glyph-large icon-cycle"></span>',
		onPause: function() {
			elem = $(this);
			elem.children().eq(2).addClass('active magictime tinUpIn');
		},
		onUnpause: function() {
			elem = $(this);
			elem.children().eq(2).removeClass('active magictime tinUpIn');
		},
		onFill : function(elem) {
			s = 0, rows = 0, cols = 0, zones = 0;

			for (i=0; i<9; i++)
			{

				// Check values on rows
				s = 0;
				elem.find(".r" + i).each(function(){
				   value = $(this).data('val');
				   if (isInt(parseInt(value))) s = s + parseInt(value);
				});
				console.log("row " + i +": " + s);

				if (s != 45) rows++;

				// Check values on columns
				s = 0;
				elem.find(".col" + i).each(function(){
				   value = $(this).data('val');
				   if (isInt(parseInt(value))) s = s + parseInt(value);
				});
				console.log("col " + i +": " + s);

				if (s != 45) cols++;

				// Check values on zones
				s = 0;
				elem.find(".z" + i).each(function(){
				   value = $(this).data('val');
				   if (isInt(parseInt(value))) s = s + parseInt(value);
				});
				console.log("zone " + i +": " + s);

				if (s != 45) zones++;

			}
			alert("There are mistakes on " + rows + " rows, " + cols + " columns and " + zones + " zones");
		},
		onComplete  : function(elem) { 

			elem.children().eq(1).addClass('active magictime tinUpIn');
			elem.children().eq(0).addClass('magictime blinking');
			console.log("END");
			elem.sudoku('editable', false);
			elem.sudoku('touch', false);
			elem.sudoku('keyboard', false);
			elem.sudoku('fullscreen', false)
			elem.sudoku('hideOptions');
			var isFull = elem.parent().attr('class').search('sudoku-fullscreen');
			console.log(elem.parent().attr('class').search('sudoku-fullscreen'));
			if (isFull != -1)
				elem.sudoku('fullscreen', true);
		}
	});
});