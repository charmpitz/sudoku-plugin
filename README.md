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
	pauseText			: 'Pause',
	unpauseText			: 'Unpause',
	onComplete			: function(){},
	onChange			: function(){},
	onFill				: function(){}, 	// When all the editable cells are filled
	onFullscreenEnter	: function(){},
	onFullscreenExit	: function(){},
	onPause				: function(){},
	onUnpause			: function(){},
	onStart				: function(){}
};
```

</br>
###Available Methods:
---

* **readonly**

Makes the instance readonly
```js
$(elem).sudoku('readonly');
```
---

* **editable**

Enables editing capabilities
```js
$(elem).sudoku('editable', true);
```
---

* **fullscreen**

Enable/Disable fullscreen mode on certain instance
```js
$(elem).sudoku('fullscreen', true);
```
---

* **touch**

Enable/Disable touch capabilities for the instance
```js
$(elem).sudoku('touch', true);
```
---

* **keyboard**

Show/Hide the side-keyboard (**must** be enabled for touch)
```js
$(elem).sudoku('keyboard', true);
```
---

* **reset**

Resets the cells
```js
$(elem).sudoku('reset');
```
---

* **hideOptions**

Hides the options panel
```js
$(elem).sudoku('hideOptions');
```
---

* **showOptions**

Shows the options panel
```js
$(elem).sudoku('showOptions');
```
---

* **pauseGame**

Pauses the game
```js
$(elem).sudoku('pauseGame');
```
---

* **unpauseGame**

Unpauses the game
```js
$(elem).sudoku('unpauseGame');
```
---

Live Demos
----------
http://sudoku.andreipitz.eu
http://www.sudokuonline.nl/


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



