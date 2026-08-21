document.documentElement.classList.add("js-ready");

/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        if (navLinks) navLinks.classList.remove("active");
    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navigationLinks.forEach(link => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);


sections.forEach(section => {
    sectionObserver.observe(section);
});


/* =========================================
   SMALL MOUSE PARALLAX FOR PHOTO
========================================= */

const photoFrame = document.querySelector(".photo-frame");

if (photoFrame && window.innerWidth > 900) {

    document.addEventListener("mousemove", (event) => {

        const x = (event.clientX / window.innerWidth - 0.5) * 5;
        const y = (event.clientY / window.innerHeight - 0.5) * 5;

        photoFrame.style.transform =
            `rotate(1deg) translate(${x}px, ${y}px)`;

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.querySelector(".footer-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
