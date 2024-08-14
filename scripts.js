document.addEventListener("DOMContentLoaded", function() {
  const trailers = document.querySelectorAll(".filme, .serie");
  trailers.forEach(function(trailer) {
    trailer.addEventListener("click", function() {
      const iframe = trailer.querySelector("iframe");
      if (iframe) {
        iframe.src = iframe.src + "?autoplay=1";
        iframe.setAttribute("allowfullscreen", "true");
        iframe.setAttribute("webkitallowfullscreen", "true");
        iframe.setAttribute("mozallowfullscreen", "true");
      }
    });
  });
});