$(document).ready(function(){
	$('#sudoku1').sudoku({
		editable	: false,
		touch 		: false,
		touchKeyboard : false,
		fullscreenMode : false,
		showOptions : false
	});
	$('#sudoku2').sudoku({
		editable	: true,
		touch 		: true,
		touchKeyboard : true,
		fullscreenEnterText : '<span class="glyph-large icon-resize-enlarge"></span>',
		fullscreenExitText : '<span class="glyph-large icon-resize-shrink"></span>',
		resetText : '<span class="glyph-large icon-cycle"></span>',
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