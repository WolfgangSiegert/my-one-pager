var nav = document.querySelector("nav");

var expandMobileNavbar = function() {
  nav.classList.add("nav-bar-mobile-expanded");
};
function collapseMobileNavbar() {
  nav.classList.remove("nav-bar-mobile-expanded");
}

var collapseButtonNav = document.querySelector("#button-mobile-menu-expand");
collapseButtonNav.addEventListener("click", expandMobileNavbar);

// var collapseButtonNav = document.querySelector("#button-mobile-menu-collapse");
// collapseButtonNav.addEventListener("click", collapseMobileNavbar);

document
  .querySelector("#button-mobile-menu-collapse")
  .addEventListener("click", function() {
    document.querySelector("nav").classList.remove("nav-bar-mobile-expanded");
  });
