JQuery Sudoku plugin
=============


Customization
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
[http://sudoku.andreipitz.eu]


Version
----

1.0


Tech
-----------

JQuery Sudoku Plugin uses a number of open source projects to work properly:

* [jQuery] 
* [jQuery.Hammer]
* [jQuery.Stopwatch]
* [Underscore.js]



License
----

MIT


[jQuery]:http://jquery.com
[jQuery.Hammer]:http://eightmedia.github.io/hammer.js/
[jQuery.Stopwatch]:https://plugins.jquery.com/tag/stopwatch/
[Underscore.js]:http://underscorejs.org/


