function isMobile() 
{
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

var header = document.querySelector(".home-header");
function scrollTop() 
{
  if (!isMobile()) 
  {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (header) {
      if (scrollTop > 0) 
      {
        header.classList.add("backdrop-blur", "bg-white/60", "shadow-sm");
      } 
      else {
        header.classList.remove("backdrop-blur", "bg-white/60", "shadow-sm");
      }
    }
  }
}

scrollTop();
window.addEventListener("scroll", function () {
  scrollTop();
});

const aside = document.getElementById("aside");
if (aside) 
{
  aside.addEventListener("scroll", function () {
    localStorage.setItem("scrollTop", aside.scrollTop);
  });
  
  window.onload = function ()
  {
    const scrollTop = localStorage.getItem("scrollTop");
    aside.scrollTop = scrollTop;
  };
}

document.querySelector("#toggleMenu").addEventListener("click", toggleMenu);
function toggleMenu() {
  document.querySelector("#toggleMenu").firstElementChild.classList.toggle("hidden");
  document.querySelector("#toggleMenu").lastElementChild.classList.toggle("hidden");
  document.querySelector("#mobile-menu").classList.toggle("hidden");
  document.querySelector("#header").classList.toggle("bg-white");
  document.querySelector("body").classList.toggle("overflow-hidden");
}

document.querySelector("#toggleDocMenu")?.addEventListener("click", toggleDocMenu);
function toggleDocMenu() 
{
  document.querySelector("#docMenu").classList.toggle("hidden");
  document.querySelector("#aside").classList.toggle("h-96");
}

const iframes = document.querySelectorAll("iframe");
iframes.forEach((iframe) => {
  iframe.addEventListener("load", (event) => {
    const e = event;
    const parent = e.target.parentNode;
    parent.dispatchEvent && parent.dispatchEvent(new Event("reload"));

    const links = e.target.contentDocument.querySelectorAll("a");
    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
      });
    });

    const h = e.target.contentWindow.document.body.scrollHeight;
    e.target.style.height = `${h}px`;
  });
});
