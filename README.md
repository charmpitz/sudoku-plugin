JQuery Sudoku plugin
=============
Customize and create sudoku layouts for playing or presentations.
* Responsive layout
* Cross-browser support (tested in Chrome, Firefox, Safari, Opera, IE9)
* 5 default theme colors

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
### Available Methods:

Makes the instance readonly
* readonly
```js
$(elem).sudoku('readonly');
```

Enables editing capabilities
* editable
```js
$(elem).sudoku('editable', true);
```

Enable/Disable fullscreen mode on certain instance
* fullscreen
```js
$(elem).sudoku('fullscreen', true);
```

Enable/Disable touch capabilities for the instance
* touch
```js
$(elem).sudoku('touch', true);
```

Show/Hide the side-keyboard (**must** be enabled for touch)
* keyboard
```js
$(elem).sudoku('keyboard', true);
```

Resets the cells
* reset
```js
$(elem).sudoku('reset');
```

Hides the options panel
* hideOptions
```js
$(elem).sudoku('hideOptions');
```

Shows the options panel
* showOptions
```js
$(elem).sudoku('showOptions');
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
* [jQuery.Stopwatch] - Time counter (this is **optional** and has been used only in the demo)




License
----

MIT


[jQuery]:http://jquery.com
[jQuery.Hammer]:http://eightmedia.github.io/hammer.js/
[jQuery.Stopwatch]:https://plugins.jquery.com/tag/stopwatch/



