// ==UserScript==
// @name         Tildes Focus
// @namespace    https://github.com/WesCook/TildesFocus
// @version      1.1.2
// @description  Focus new comments on Tildes.net by navigating with J/K keys.
// @author       Wes Cook
// @match        https://tildes.net/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	// Init
	let newComments = document.getElementsByClassName("is-comment-new"); // Array of new comments
	let curComment = -1; // -1 so if we go "next" initially, it'll snap to first comment (index 0).  "prev" will wrap around like normal.
	let prevComment = 0;

	// Detect key inputs
	document.addEventListener("keydown", event => {
		// Don't focus text if writing comment
		if (document.activeElement.nodeName === "TEXTAREA") {
			return;
		}

		if (event.isComposing || event.keyCode === 75) { // 'K'
			setCommentIndex("prev");
			focusComment();
		}

		if (event.isComposing || event.keyCode === 74) { // 'J'
			setCommentIndex("next");
			focusComment();
		}
	});

	// Calculate current and previous comment ID based on direction
	function setCommentIndex(direction) {
		if (curComment != -1) { // Don't copy initial state
			prevComment = curComment;
		}

		if (direction == "prev") {
			if (curComment <= 0) {
				curComment = newComments.length - 1;
			}
			else {
				curComment--;
			}
		}

		if (direction == "next") {
			if (curComment >= newComments.length - 1) {
				curComment = 0;
			}
			else {
				curComment++;
			}
		}
	}

	// Scroll to comment and style background
	function focusComment() {
		// Exit if no new comments
		if (!newComments.length)
			return;

		// Uncollapse parents
		let curNode = newComments[curComment];
		while (curNode != document) {
			curNode.classList.remove("is-comment-collapsed"); // Uncollapse if class found
			curNode = curNode.parentNode; // Walk the DOM tree upwards until we hit 'document'
		}

		// Scroll to comment
		newComments[curComment].firstElementChild.scrollIntoView({
			behavior: "smooth",
			block: "center"
		});

		// Style background
		newComments[prevComment].firstElementChild.style.backgroundColor = "unset";
		newComments[curComment].firstElementChild.style.backgroundColor = "rgba(204, 150, 165, 0.1)";
	}
})();
