# Tildes Focus

It can be difficult to find new comments in large threads on [tildes.net](https://tildes.net/).  This script allows you to focus directly on new comments by navigating to them directly.

## How to Use

Use 'J' to jump to the next new comment, and 'K' to jump to the previous one.  This is based on traditional vim keybinds.

Comments that are focused will change their background color.  Navigation will wrap back to the start of the thread once you've read all comments.

Collapsed comment chains will be expanded to reveal new unread comments.  If a thread contains no new comments, then this script will not do anything.

## Installation

Tildes Focus can be installed via [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) (Firefox) or [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) (Chrome).

With either extension installed, simply visit the script URL to be prompted to install it:  
https://github.com/WesCook/TildesFocus/raw/master/tildes-focus.user.js

The setting "Configure marking new comments" must also be enabled on your [Tildes settings page](https://tildes.net/settings).  This is enabled by default for new accounts, but was originally turned off by default.  It is required to show which comments are new.
