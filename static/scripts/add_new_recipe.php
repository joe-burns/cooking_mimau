<?php
	// Variables
	$recipe_name = html_entity_decode(filter_input(INPUT_POST, 'recipe_name', FILTER_SANITIZE_STRING), ENT_QUOTES);
	$recipe_filename = strtolower(preg_replace("/[ ]/", '_', preg_replace("/[^A-Za-z0-9 ]/", '', $recipe_name))) . ".md";
	$description = filter_input(INPUT_POST, 'description', FILTER_SANITIZE_STRING);
	$submitter = filter_input(INPUT_POST, 'submitter', FILTER_SANITIZE_STRING);
	$difficulty = filter_input(INPUT_POST, 'difficulty', FILTER_SANITIZE_STRING);
	$cuisine = filter_input(INPUT_POST, 'cuisine', FILTER_SANITIZE_STRING);
	$recipe_source = filter_input(INPUT_POST, 'recipe_source', FILTER_SANITIZE_STRING);
	$source_link = filter_input(INPUT_POST, 'source_link', FILTER_SANITIZE_STRING);
	$recipe_contents = filter_input(INPUT_POST, 'recipe', FILTER_SANITIZE_STRING);

	// Build the recipe file
	$output = "+++\n";
	$output .= "title = \"" . $recipe_name . "\"\n";
	$output .= "date = \"" . date("c") . "\"\n";
	$output .= "providedby = \"" . $submitter . "\"\n";
	$output .= "description = \"" . $description . "\"\n";
	$output .= "difficulties = \"" . $difficulty . "\"\n";
	$output .= "cuisines = \"" . $cuisine . "\"\n";
	if($recipe_source != '') {
		$output .= "stolenfrom = \"" . $recipe_source . "\"\n";
		$output .= "stolenlink = \"" . $source_link . "\"\n";
	}
	$output .= "+++\n";
	$output .= $recipe_contents;

	// Output the new recipe into the NearlyFreeSpeech root directory's protected folder
	file_put_contents($_SERVER['NFSN_SITE_ROOT'] . "protected/new_recipes/" . $recipe_filename, $output);

	// Send the user back to the home page
	header('Location: /recipe_added/')
?>