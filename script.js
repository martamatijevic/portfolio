// simple burger toggle: toggles nav visibility and changes icon to X. Clicking again closes it.
document.addEventListener("DOMContentLoaded", function(){
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav");
  const navList = document.querySelector(".main-nav .nav-list");

  if(!burger || !nav) return;

  burger.addEventListener("click", function(){
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!expanded));
    // toggle nav visibility class
    nav.classList.toggle("active");
    // change icon
    burger.textContent = nav.classList.contains("active") ? "✕" : "☰";
  });

  // close nav when a link inside is clicked (mobile)
  if(navList){
    navList.addEventListener("click", function(e){
      if(e.target.tagName === "A" && nav.classList.contains("active")){
        nav.classList.remove("active");
        burger.textContent = "☰";
        burger.setAttribute("aria-expanded","false");
      }
    });
  }
});
