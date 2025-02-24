var tl = gsap.timeline();

tl.from(".hero-text img", {
  y: -80,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

tl.from(".image-text .bottom", {
  x: -20,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
});

tl.from(".image-text .top", {
  opacity: 0,
  duration: 0.5,
  scale: 0.5,
  delay: 0.2,
  ease: "power1.inOut",
});

tl.from(".vertical .bottom", {
  y: -5,
  opacity: 0,
  duration: 0.5,
  ease: "bounce.out",
});

tl.from("#services .service .first .row", {
  y: -50,
  opacity: 0,
  duration: 0.4,
  ease: "bounce.out",
  stagger: 0.2,
});

tl.from("#services .service .second .row", {
  y: -50,
  opacity: 0,
  duration: 0.4,
  ease: "bounce.out",
  stagger: 0.2,
});

tl.from("#services .bottom", {
  opacity: 0,
  scale: 0.5,
  duration: 0.2,
  delay: 0,
  ease: "bounce.out",
});

tl.from(".work h1", {
  y: -10,
  opacity: 0,
  duration: 0.2,
  ease: "power.in",
});

tl.from(".work .top", {
  x: -50,
  opacity: 0,
  duration: 0.2,
  ease: "power1.in",
  stagger: 0.2,
});

tl.from(".clients .content .loc", {
  x: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
  ease: "power2.out",
});

tl.from(".team .card", {
  scale: 0.7,
  opacity: 0,
  duration: 0.2,
  stagger: 0.3,
  ease: "power2.out",
});

tl.from(".branding button", {
  opacity: 0,
  scale: 0.5,
  duration: 0.5,
  ease: "elastic.out(1, 0.3)",
});

document
  .querySelector(".branding h1")
  .addEventListener("mouseenter", function () {
    gsap.to(".branding h1", {
      y: -5,
      opacity: 1,
      duration: 0.5,
      ease: "bounce.out",
    });
  });

document.querySelectorAll(".service .row").forEach((row) => {
  row.addEventListener("mouseenter", () => {
    gsap.to(row, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  });
  row.addEventListener("mouseleave", () => {
    gsap.to(row, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

let btn = document.querySelector(".bar");
let div = document.querySelector(".show");

btn.addEventListener("click", () => {
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
});
