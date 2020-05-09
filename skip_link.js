// skip_link.js
// built by Brandon Hills
// created on 8/14/19

// Script to trigger a link to allow skipping to main page content.
// This script was writen to allow disabled individuals using screen readers 
// to be able to skip navigation, etc. and go directly to main page content.
// The script displays the skip link for 10 sec then triggers a CSS class to hide it.
// On gaining focus the link triggers the original CSS class to display.
// Upon loosing focus the link will hide again after 3 sec.

// console.log() has been preserved but disabled for debugging purposes


			// Set the time to hide the link after the page loads:
			window.setTimeout(hideSkip, 10000)

			// Add event listeners
			document.getElementById('skip').addEventListener('focus', displaySkip); // for when link has focus
			document.getElementById('skip').addEventListener('blur', rehideSkip); // for when link looses focus

			// Define functions:

			// Hides link after time set by Timeout
			function hideSkip() {
				document.getElementById('skip').className = 'not_visible';
			}

			// Displays link after link has been hiden because of Timeout
			function displaySkip() {
				document.getElementById('skip').className = 'visible';
			}

			// Rehides link after loosing focus
			function rehideSkip() {
				window.setTimeout(hideSkip, 3000);
			}


