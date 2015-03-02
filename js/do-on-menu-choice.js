// ------------------------------------------------------------------------------------------
// React on a users menu choice
// [Called from a click event set in buildMenu]
// ------------------------------------------------------------------------------------------

function doOnMenuChoice(){

  // Read the menu choice from the menu choice li-tag html
  var menuChoice = $(this).html();

  // Find the corresponding choice in the locations choice property
  var choice = player.location.choices[menuChoice];

  // if the choice should only be shown once mark it as hidden from now on
  if(choice["show only once"]){choice.hidden = true;}

  // Set a new player location
  updatePlayerLocation(choice);

  // Handle waiting (randomize among things that may happen)
  if(menuChoice == "Wait"){
    choice = waitAround(choice);
  }

  // Update contents of bag
  updateBag(choice);
  
  // Update player status (health, money, espresso cups)
  // (returns true if the player died)
  var status = updatePlayerStatus(choice);

  // Add importent happenings
  if(choice.happening){
    happenings.push(choice.happening);
  }
  
  // Show the location if we are not dead and haven't won yet
  if(status != "dead" && status!="win"){
    showLocation(player.location,choice.description,choice.image);
  }
 
}
