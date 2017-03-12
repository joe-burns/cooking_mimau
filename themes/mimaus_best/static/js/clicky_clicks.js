var COOKING_MIMAU = {
	navCollapsables: null,
	navRecipes: null,

	onLoad: function() {
		COOKING_MIMAU.buildCollapsableMenu();

		// Recipe filter handler
		var filter_box = document.getElementById("tree_search_input");
		filter_box.oninput = COOKING_MIMAU.updateFilterResults;
		filter_box.onpropertychange = filter_box.oninput;

		COOKING_MIMAU.navCollapsables = document.querySelectorAll("ul.navtree li.nav_collapsable");
		COOKING_MIMAU.navRecipes = document.querySelectorAll("ul.navtree a.nav_recipe_link_text");
	},

	buildCollapsableMenu: function() {
		var navtree = document.querySelectorAll("ul.navtree a:not(:last-child)");

		for(var i = 0; i < navtree.length; i++) {
			navtree[i].addEventListener("click", function(e) {
				var parent = e.target.parentElement;
				var classList = parent.classList;

				if(classList.contains("open")) {
					classList.remove("open");
					localStorage.setItem(e.target.id, "");
					var openChildren = parent.querySelectorAll(":scope .open");

					for(var j = 0; j < openChildren.length; j++) {
						if(openChildren[j]) {
							openChildren[j].classList.remove("open");
							localStorage.setItem(openChildren[j].id, "");
						}
					}
				}
				else {
					classList.add("open");
					localStorage.setItem(e.target.id, "open");
				}
			});

			if(localStorage.getItem(navtree[i].id) == "open") {
				navtree[i].parentElement.classList.add("open");
			}
		}
	},

	updateFilterResults: function(event) {
		// Clear all the filters of our previous search (to support backspace)
		var elementsToClear = document.querySelectorAll("ul.navtree li.filtered");
		for(var i = 0; i < elementsToClear.length; i++) {
			elementsToClear[i].classList.remove("filtered");
		}

		// Filter any results that do not match
		for(var i = 0; i < COOKING_MIMAU.navRecipes.length; i++) {
			var currentRecipe = COOKING_MIMAU.navRecipes[i];
			if(!currentRecipe.text.toUpperCase().includes(event.target.value.toUpperCase()) &&
			   !currentRecipe.parentElement.classList.contains("filtered")) {
				currentRecipe.parentElement.classList.add("filtered");
			}
		}

		// If there is no search term, reset the tree's open state to it's stored values
		if(event.target.value == "") {
			for(var i = 0; i < COOKING_MIMAU.navCollapsables.length; i++) {
				if(COOKING_MIMAU.navCollapsables[i].classList.contains("open") &&
					localStorage.getItem(COOKING_MIMAU.navCollapsables[i].id) != "open") {
					COOKING_MIMAU.navCollapsables[i].classList.remove("open");
				}
				if(COOKING_MIMAU.navCollapsables[i].classList.contains("filtered")) {
					COOKING_MIMAU.navCollapsables[i].classList.remove("filtered");
				}
			}
		}
		// Otherwise, open all of them
		else {
			for(var i = 0; i < COOKING_MIMAU.navCollapsables.length; i++) {
				var test=COOKING_MIMAU.navCollapsables[i].querySelectorAll(":scope li:not(.filtered)");

				if(COOKING_MIMAU.navCollapsables[i].querySelectorAll(":scope li:not(.filtered)").length == 0) {
					COOKING_MIMAU.navCollapsables[i].classList.add("filtered");

					if(COOKING_MIMAU.navCollapsables[i].classList.contains("open")) {
						COOKING_MIMAU.navCollapsables[i].classList.remove("open");
					}
				}
				else if(!COOKING_MIMAU.navCollapsables[i].classList.contains("open")) {
					COOKING_MIMAU.navCollapsables[i].classList.add("open");
				}
			}
		}
	},

	showRecipe: function(recipeId) {
		contents = document.getElementById(recipeId + "-contents");
		showLink = document.getElementById(recipeId + "-showlink");
		hideLink = document.getElementById(recipeId + "-hidelink");

		contents.style.display = "inline";
		showLink.style.display = "none";
		hideLink.style.display = "inline";
	},

	hideRecipe: function(recipeId) {
		contents = document.getElementById(recipeId + "-contents");
		showLink = document.getElementById(recipeId + "-showlink");
		hideLink = document.getElementById(recipeId + "-hidelink");

		contents.style.display = "none";
		showLink.style.display = "inline";
		hideLink.style.display = "none";
	},

	autoGrow: function(element) {
		element.style.height = "auto";
		element.style.height = (element.scrollHeight) + "px";
	},

	toggleSourceSection: function(checkBox) {
		document.getElementById("source_section").style.display = checkBox.checked ? "inline" : "none";
	}
};
