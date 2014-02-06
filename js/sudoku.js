/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://github.com/charmpitz/sudoku-plugin
 *
 * Copyright (c) 2013 Andrei Pit <charmpitz@gmail.com>;
 * Licensed under the MIT license */

(function( $ ) {
	var MD5=function(a){function b(a,b){return a<<b|a>>>32-b}function c(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return a&c|b&~c}function f(a,b,c){return a^b^c}function g(a,b,c){return b^(a|~c)}function h(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)}function i(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)}function j(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)}function k(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)}function l(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=8*(i%4),g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=8*(i%4),g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g}function m(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=255&a>>>8*c,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d}function n(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(192|d>>6),b+=String.fromCharCode(128|63&d)):(b+=String.fromCharCode(224|d>>12),b+=String.fromCharCode(128|63&d>>6),b+=String.fromCharCode(128|63&d))}return b}var o,p,q,r,s,t,u,v,w,x=Array(),y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(a=n(a),x=l(a),t=1732584193,u=4023233417,v=2562383102,w=271733878,o=0;o<x.length;o+=16)p=t,q=u,r=v,s=w,t=h(t,u,v,w,x[o+0],y,3614090360),w=h(w,t,u,v,x[o+1],z,3905402710),v=h(v,w,t,u,x[o+2],A,606105819),u=h(u,v,w,t,x[o+3],B,3250441966),t=h(t,u,v,w,x[o+4],y,4118548399),w=h(w,t,u,v,x[o+5],z,1200080426),v=h(v,w,t,u,x[o+6],A,2821735955),u=h(u,v,w,t,x[o+7],B,4249261313),t=h(t,u,v,w,x[o+8],y,1770035416),w=h(w,t,u,v,x[o+9],z,2336552879),v=h(v,w,t,u,x[o+10],A,4294925233),u=h(u,v,w,t,x[o+11],B,2304563134),t=h(t,u,v,w,x[o+12],y,1804603682),w=h(w,t,u,v,x[o+13],z,4254626195),v=h(v,w,t,u,x[o+14],A,2792965006),u=h(u,v,w,t,x[o+15],B,1236535329),t=i(t,u,v,w,x[o+1],C,4129170786),w=i(w,t,u,v,x[o+6],D,3225465664),v=i(v,w,t,u,x[o+11],E,643717713),u=i(u,v,w,t,x[o+0],F,3921069994),t=i(t,u,v,w,x[o+5],C,3593408605),w=i(w,t,u,v,x[o+10],D,38016083),v=i(v,w,t,u,x[o+15],E,3634488961),u=i(u,v,w,t,x[o+4],F,3889429448),t=i(t,u,v,w,x[o+9],C,568446438),w=i(w,t,u,v,x[o+14],D,3275163606),v=i(v,w,t,u,x[o+3],E,4107603335),u=i(u,v,w,t,x[o+8],F,1163531501),t=i(t,u,v,w,x[o+13],C,2850285829),w=i(w,t,u,v,x[o+2],D,4243563512),v=i(v,w,t,u,x[o+7],E,1735328473),u=i(u,v,w,t,x[o+12],F,2368359562),t=j(t,u,v,w,x[o+5],G,4294588738),w=j(w,t,u,v,x[o+8],H,2272392833),v=j(v,w,t,u,x[o+11],I,1839030562),u=j(u,v,w,t,x[o+14],J,4259657740),t=j(t,u,v,w,x[o+1],G,2763975236),w=j(w,t,u,v,x[o+4],H,1272893353),v=j(v,w,t,u,x[o+7],I,4139469664),u=j(u,v,w,t,x[o+10],J,3200236656),t=j(t,u,v,w,x[o+13],G,681279174),w=j(w,t,u,v,x[o+0],H,3936430074),v=j(v,w,t,u,x[o+3],I,3572445317),u=j(u,v,w,t,x[o+6],J,76029189),t=j(t,u,v,w,x[o+9],G,3654602809),w=j(w,t,u,v,x[o+12],H,3873151461),v=j(v,w,t,u,x[o+15],I,530742520),u=j(u,v,w,t,x[o+2],J,3299628645),t=k(t,u,v,w,x[o+0],K,4096336452),w=k(w,t,u,v,x[o+7],L,1126891415),v=k(v,w,t,u,x[o+14],M,2878612391),u=k(u,v,w,t,x[o+5],N,4237533241),t=k(t,u,v,w,x[o+12],K,1700485571),w=k(w,t,u,v,x[o+3],L,2399980690),v=k(v,w,t,u,x[o+10],M,4293915773),u=k(u,v,w,t,x[o+1],N,2240044497),t=k(t,u,v,w,x[o+8],K,1873313359),w=k(w,t,u,v,x[o+15],L,4264355552),v=k(v,w,t,u,x[o+6],M,2734768916),u=k(u,v,w,t,x[o+13],N,1309151649),t=k(t,u,v,w,x[o+4],K,4149444226),w=k(w,t,u,v,x[o+11],L,3174756917),v=k(v,w,t,u,x[o+2],M,718787259),u=k(u,v,w,t,x[o+9],N,3951481745),t=c(t,p),u=c(u,q),v=c(v,r),w=c(w,s);var O=m(t)+m(u)+m(v)+m(w);return O.toLowerCase()};
	
	var methods = {

		// status, changeFn, completeFn 
		editable : function (args) {
		    var status				= false;
		    var args 				= args;

		    if( Object.prototype.toString.call( args ) === '[object Array]' ) 
		    {
			    status = args[0];
			}
			else
			{
				status = args;
				args[1] = null;
				args[2] = null;
			}

			return $(this).each(function(){
				var elem 				= $(this);
			    var sudokuContainer 	= elem.find('.sudoku-container');
			    var keyboardKeys		= sudokuContainer.find('td.sudoku-key');
			    var editableCells 		= elem.find('table td.editable input');
			    var current				= null;

				if (status == true)
				{
					editableCells.on('click', function(event){
						editableCells.removeClass('current');
						$(this).addClass('current');
						current = $(this);
					});

					editableCells.keydown(function(event){
						event.preventDefault();
						var charCode = (event.which) ? event.which : event.keyCode;

					  	if (charCode > 31 && (charCode < 49 || charCode > 57))
					    	return false;

					    if (charCode == 8)
					    	$(this).val('');

					    $(this).val(String.fromCharCode(charCode));

					    // onChange Trigger
						if ($.isFunction( args[1] ))
							args[1].call( this );


					    /* Check if the sudoku has been completed
					    -----------------------------------------*/
					    var totalEditable = editableCells.filter(function() { return $(this).val() == ""; }).length;
					    var solution = ''; 
					    sudokuContainer.find("td").not('.sudoku-key, .sudoku-options')
				    		.each(function(){
				    			if (!$(this).find('input').length)
								    solution += $(this).data('val');
				    			else
				    				solution += $(this).find('input').val();
							});
					    var md5 = MD5(solution);
					    // console.log(solution);
					    // console.log(md5);
					    // console.log(elem.data('md5'));

						if ( md5 == elem.data('md5') ) 
						{
							// onComplete Trigger
							if ($.isFunction( args[2] )){
						        args[2].call( this, elem );
							}

					    }
					    return true;
					});
				}
				else
				{
					elem.find('input, .sudoku-keys').unbind('click tap keydown hold');
				}
			});

		},
		// status, enterFn, exitFn
		fullscreen : function (args) {

		    var status				= false;

		    if( Object.prototype.toString.call( args ) === '[object Array]' ) 
		    {
			    status = args[0];
			}
			else
			{
				status = args;
				args[1] = null;
				args[2] = null;
			}

			return $(this).each(function(){
				var elem 				= $(this);
			    var sudokuContainer 	= elem.find('.sudoku-container');
			    var keyboardKeys		= sudokuContainer.find('td.sudoku-key');
			    var editableCells 		= elem.find('table td.editable input');
			    var sudokuOptions 		= sudokuContainer.find('td.sudoku-options');
			    var fullscreenTrigger 	= sudokuOptions.find('.sudoku-fullscreen-trigger');
			    var current				= null;
			    var fullscreenMode  	= false;
			    
				if (status == true)
				{
					fullscreenTrigger.show();
					fullscreenTrigger.click(function(){
						if (!fullscreenMode)
						{
							var fullscreen = $("<div class='sudoku-fullscreen'></div>");
							elem.before(fullscreen).prependTo(fullscreen);

							// onFullscreenEnter Trigger
							if ($.isFunction( args[1] ))
								args[1].call( this );

							$(window).trigger('resize');
							fullscreenMode = true;
							fullscreenTrigger.html(args[4]);
							disable_scroll();

						}
						else
						{
							var parent = elem.parent();
							elem.insertAfter(parent);
							elem.prev().remove();
							$(window).trigger('resize');
							fullscreenMode = false;
							fullscreenTrigger.html(args[3]);

							// onFullscreenExit Trigger
							if ($.isFunction( args[2] ))
								args[2].call( this );

							enable_scroll();
						}
					});
				}
				else
				{
					var parent = elem.parent();
					if ($(parent).hasClass("sudoku-fullscreen"))
					{
						elem.insertAfter(parent);
						elem.prev().remove();
						$(window).trigger('resize');
						fullscreenMode = false;
						fullscreenTrigger.html(args[3]);

						// onFullscreenExit Trigger
						if ($.isFunction( args[2] ))
							args[2].call( this );

						enable_scroll();
					}
					fullscreenTrigger.hide();
				}
			});
		},
		touch : function(args) {

		    var status				= false;

		    if ( Object.prototype.toString.call( args ) === '[object Array]' ) 
		    {
			    status = args[0];
			}
			else
			{
				status = args;
				args[1] = null;
			}

			return $(this).each(function(){
				
				var elem 				= $(this);
			    var sudokuContainer 	= elem.find('.sudoku-container');
			    var keyboardKeys		= sudokuContainer.find('td.sudoku-key');
			    var editableCells 		= elem.find('table td.editable input');
			    var sudokuOptions 		= sudokuContainer.find('td.sudoku-options');

				if ((status == true) && ($.fn.hammer))
				{
					var keyboardKeysHammer = keyboardKeys.hammer();
					var editableCellsHammer = editableCells.hammer();
					keyboardKeysHammer.on('tap click',function(){
						var current		= elem.find('input.current');
						var value 	= $(this).html();
						if (value == "X")
							value = "";
						current.val(value);

						/* Check if the sudoku has been completed
						-----------------------------------------*/
					    var totalEditable = editableCells.filter(function() { return $(this).val() == ""; }).length;
					    var solution = ''; 
					    sudokuContainer.find("td").not('.sudoku-key, .sudoku-options')
				    		.each(function(){
				    			if (!$(this).find('input').length)
								    solution += $(this).data('val');
				    			else
				    				solution += $(this).find('input').val();
							});
					    var md5 = MD5(solution);
					    // console.log(solution);
					    // console.log(md5);
					    // console.log(elem.data('md5'));


						if ( md5 == elem.data('md5') ) 
						{
							// onComplete Trigger
							if ($.isFunction( args[1] )){
						        args[1].call( this, elem );
							}

					    }
					    return true;
					    
					})

					editableCellsHammer.on('hold', function(){
						if (!$(this).hasClass('not-sure'))
							$(this).addClass('not-sure');
						else
					  		$(this).removeClass('not-sure');
					});
				}
				else
				{
					keyboardKeys.hammer().off('click tap');
					editableCells.hammer().off('hold tap');
				}
			});
		},
		keyboard : function ( status ) {
			return $(this).each(function(){
				var elem 				= $(this);
			    var sudokuContainer 	= elem.find('.sudoku-container');
			    var keyboardKeys		= sudokuContainer.find('td.sudoku-key');

				if (status == true)
				{
					keyboardKeys.show();
				}
				else
				{
					keyboardKeys.hide();
				}
			});
		},
		reset 		: function () { return $(this).each(function(){ $(this).find('.editable input').val(''); })}, 	
		hideOptions : function () { return $(this).each(function(){ $(this).find('.sudoku-options').parent().hide(); });},
		showOptions : function () { return $(this).each(function(){ $(this).find('.sudoku-options').parent().show(); });},
		pauseGame 	: function (fn) {
			
			return $(this).each(function(){ 
				var elem 			= $(this);
				var cellsArray 		= $(this).find('td').not('.sudoku-key, .sudoku-options, .editable').map(function(){return parseInt($(this).text());});
				var inputsValuesArray 	= $(this).find('td.editable input').map(function(){return $(this).val()}).toArray();
				$(this).data('paused', [cellsArray, inputsValuesArray]);

				$(this).find('td.editable input').val('');
				$(this).find('td').not('.editable, .sudoku-key, .sudoku-options').text('');
				methods.editable.call(this, false);
				methods.touch.call(this, false);

				if ($.isFunction( fn ))
					fn.call( this, elem );

			});
		},
		unpauseGame : function (fn) { 
			return $(this).each(function(){
				var elem 				= $(this);
				var data 				= $(this).data('paused');
				var cellsArray 			= data[0];
				var inputsValuesArray 	= data[1];

				for (i=0; i<=cellsArray.length; i++)
					$(this).find('td').not('.editable, .sudoku-key, .sudoku-options').eq(i).text(cellsArray[i]);

				for (i=0; i<=inputsValuesArray.length; i++)
					$(this).find('td.editable input').eq(i).val(inputsValuesArray[i]);

				$(this).removeAttr('data-paused');
				methods.editable.call(this, true);
				methods.touch.call(this, true);

				if ($.isFunction( fn ))
					fn.call( this, elem );

			});
		},
	    init : function( options ) {


		    return this.each(function() {

				var defaults = {
					editable 			: true,
					touch 				: true,
					touchKeyboard 		: true,
					fullscreenMode 		: true,
					showOptions			: true,
					fullscreenEnterText	: 'Enter Fullscreen',
					fullscreenExitText	: 'Exit Fullscreen',
					resetText 			: 'Reset',
					pauseText			: 'Pause',
					unpauseText			: 'Unpause',
					onComplete			: function(){},
					onChange			: function(){},
					onFullscreenEnter	: function(){},
					onFullscreenExit	: function(){},
					onPause				: function(){},
					onUnpause			: function(){},
					onStart				: function(){}
				};
				var settings 			= $.extend( {}, defaults, options );
				var elem 				= $(this);
			    var sudokuContainer 	= elem.find('.sudoku-container');
			    var keyboardKeys		= sudokuContainer.find('td.sudoku-key');
			    var editableCells 		= elem.find('table td.editable input');
			    var sudokuOptions 		= sudokuContainer.find('td.sudoku-options');
			    var fullscreenTrigger 	= sudokuOptions.find('.sudoku-fullscreen-trigger');
			    var pauseTrigger 		= sudokuOptions.find('.sudoku-pause-trigger');
			    var resetTrigger 		= sudokuOptions.find('.sudoku-reset-trigger');
			    var current				= null;
			    var fullscreenMode  	= false;

		    	editableCells.attr('readonly', 'true');

				/* Editable
				------------------------------------*/
				methods.editable.call(this, [settings.editable, settings.onChange, settings.onComplete]);
					
				/* Fullscreen Mode
				-----------------------------------*/
				methods.fullscreen.call(this, [settings.fullscreenMode, settings.onFullscreenEnter, settings.onFullscreenExit, settings.fullscreenEnterText, settings.fullscreenExitText] );

				/* Touch Events
				-----------------------------------*/
				if (settings.touchKeyboard == true)
				{
					keyboardKeys.show();
					methods.touch.call(this, [settings.touch, settings.onComplete]);
				}
				else
				{
					keyboardKeys.hide();
				}

				/* Fullscreen Text
				----------------------------------------*/
				fullscreenTrigger.html(settings.fullscreenEnterText);

				/* Reset Text
				----------------------------------------*/
				resetTrigger.html(settings.resetText);

				/* Reset Watch
				----------------------------------------*/
				var xthis = this;
				resetTrigger.on('click', function(){
					methods.reset.call(xthis);
				});

				/* Show Options
				-----------------------------------------*/
				if (settings.showOptions == false)
					methods.hideOptions.call(this);

				/* Pause Text
				-----------------------------------------*/
				pauseTrigger.html(settings.pauseText);	

				/* Pause Watch
				-----------------------------------------*/
				var xthis = this;
				console.log($(xthis));
				pauseTrigger.click(
					function(){

						if (pauseTrigger.html() == settings.pauseText )
						{
							methods.pauseGame.call(xthis, settings['onPause']);
							pauseTrigger.html(settings.unpauseText);
						}
						else 
						{
							methods.unpauseGame.call(xthis, settings['onUnpause']);
							pauseTrigger.html(settings.pauseText);	
						}
					}
				);

				/* Responsive
				-------------------------------------*/
				$(window).resize(function(){
					var w = Math.min(elem.parent().width(), $(window).height());
					elem.css('height', w);
					elem.css('width', w);
					var fontsize = Math.max(12, parseInt(Math.sqrt(w / 10)) + 8)
					sudokuContainer.find('td, input[type=text]').css('font-size', fontsize + "px");
				});

				$(window).trigger('resize');


				// onStart Trigger
				if ($.isFunction( settings.onStart ))
					settings.onStart.call( this );
		    });
	    },
	    readonly: function() {
	    	
	        $(this).find('input, .sudoku-keys, .sudoku-fullscreen-trigger').unbind('click tap keydown hold');
	    	return this;
	    }
  	};

    $.fn.sudoku = function (method) { 
	    if ( methods[method] ) {
	      	return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof method === 'object' || ! method ) {
	      	return methods.init.apply( this, arguments );
	    } else {
	      	$.error( 'Method ' + method + ' does not exist on jQuery.sudoku' );
	    }    
  	};

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
           e.preventDefault();
        e.returnValue = false; 
    }

    function disable_scroll() {
         $('body').bind('touchmove', function(e){e.preventDefault()});
    }

    function enable_scroll() {
        $('body').unbind('touchmove');
    }

}( jQuery ));