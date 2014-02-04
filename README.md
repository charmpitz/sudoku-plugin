JQuery Sudoku plugin
=============
Customize and create sudoku interfaces for playing or just presenting.
* Responsive layout
* Cross-browser support (tested in Chrome, Firefox, Safari, Opera, IE9)

Tehnical support
-------------
These are some default values. For more information try understanding the code itself.

```js
var defaults = {
		editable 			: true,
		touch 				: true,
		touchKeyboard 		: true,
		fullscreenMode 		: true,
		showOptions			: true,
		fullscreenEnterText	: 'Enter Fullscreen',
		fullscreenExitText	: 'Exit Fullscreen',
		resetText 			: 'Reset',
		onComplete			: function(){console.log('Triggered: Complete ')},
		onChange			: function(){console.log('Triggered: Change ')},
		onFullscreenEnter	: function(){console.log('Triggered: FullscreenEnter ')},
		onFullscreenExit	: function(){console.log('Triggered: FullscreenExit ')},
		onStart				: function(){console.log('Triggered: Start ')}
	};
```

Live Demo
----------
http://sudoku.andreipitz.eu


Version
----

1.0


Third parties
-----------

JQuery Sudoku Plugin uses a number of open source projects to work (some of them are optional):

* [jQuery] 
* [jQuery.Hammer] - Touch events library
* [jQuery.Stopwatch] - Time counter (this is optional and has been used only in the demo)




License
----

MIT


[jQuery]:http://jquery.com
[jQuery.Hammer]:http://eightmedia.github.io/hammer.js/
[jQuery.Stopwatch]:https://plugins.jquery.com/tag/stopwatch/



