let displayMenu = document.querySelector('.menu-icon');
let closeMenu = document.querySelector('.close img');

// Show the navigation and hide the menu icon when clicked
displayMenu.addEventListener("click", () => {
  var nav = document.querySelector(".navigation");
  
  // Show navigation
  nav.style.display = "grid";
  
  // Hide the menu icon
  displayMenu.style.display = "none";
});

// Close the navigation menu and show the menu icon when the close icon is clicked
closeMenu.addEventListener("click", () => {
  var nav = document.querySelector(".navigation");
  
  // Hide the navigation
  nav.style.display = "none";
  
  // Show the menu icon again
  displayMenu.style.display = "block";
});
