+++
date = "2017-03-06T13:08:07-07:00"
title = "New Recipe"
type = "singlepage"

+++

<article class="article_recipe">
<h1 class="recipe_title">Add a new recipe</h1>
<form action="/scripts/add_new_recipe.php" method="POST">
	<div class="form_container">
		<div class="half_container">
			<div class="half_split_left">
				Recipe Name: 
				<br>
				<div class="fucking_input_padding">
					<input name="recipe_name" class="input_field" type="text" required="true"></input>
				</div>
			</div>
			<div class="half_split_right">
				Submitter: 
				<br>
				<div class="fucking_input_padding">
					<input name="submitter" class="input_field" type="text" required="true"placeholder="(Your nickname)"></input>
				</div>
			</div>
		</div>
		<div class="general_input_container">Description:<br>
			<div class="fucking_half_padding">
				<input name="description" class="input_field" type="text" required="true"></input>
			</div>
		</div>
		<div class="half_container">
			<div class="half_split_left">Difficulty:<br>
				<div class="fucking_half_padding">
					<select name="difficulty" class="difficulty" selected="Easy">
						<option value="Beginner">Beginner</option>
						<option value="Easy">Easy</option>
						<option value="Medium">Medium</option>
						<option value="Hard">Hard</option>
					</select>
				</div>
			</div>
			<div class="half_split_right">Cuisine:<br>
				<div class="fucking_input_padding">
					<input name="cuisine" class="input_field" type="text" required="true" placeholder="(e.g. Korean)"></input>
				</div>
			</div>
		</div>
		<div class="general_input_container">
		<label><input type="checkbox" class="sourced_recipe" onclick="COOKING_MIMAU.toggleSourceSection(this)"> Taken from another source</label>
		</div>
		<div id="source_section" class="source_section">
			<div class="half_container">
				<div class="half_split_left">Recipe Source:<br>
					<div class="fucking_input_padding">
						<input name="recipe_source" class="input_field" type="text" placeholder="(if taken from other site)"></input>
					</div>
				</div>
				<div class="half_split_right">Original Recipe Link:<br>
					<div class="fucking_input_padding">
						<input name="source_link" class="input_field" type="text" placeholder="(if taken from other site)"></input>
					</div>
				</div>
			</div>
		</div>
		<div class="text_area_wrapper">
			<div class="fucking_half_padding">
				<textarea class="recipe_contents" name="recipe" required="true" placeholder="(Recipe goes here)" oninput="COOKING_MIMAU.autoGrow(this)"></textarea>
			</div>
		</div>
		<div class="general_input_container">
			<input type="submit" value="Add Recipe"/>
		</div>
	</div>
</form>
</article>