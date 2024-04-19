//close the manu and go back to the last page
function closeMenu() {
  window.history.back();
  // CREATE ANIMATION STYLE
}

// navigation between pages 
function navigateTo(url) {
  window.location.href = url;

}

// scroll to section
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
  //_________________CREATE SCROLL ANIMATION___________________________________
}

// Function to load the topbar
function loadTopbar() {
  fetch('topbar.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('#topbar').innerHTML = data;
    });
}

// Function to load the footer
function loadFooter() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('#footer').innerHTML = data;
    });
}

// Call the functions to load the topbar and footer
loadTopbar();
loadFooter();