const menuButton = document.querySelector(".nav-toggle");
const siteNavigation = document.querySelector("#site-navigation");

if (menuButton && siteNavigation) {
    const closeMenu = () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        siteNavigation.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isExpanded));
        menuButton.setAttribute(
            "aria-label",
            isExpanded ? "Open navigation menu" : "Close navigation menu"
        );
        siteNavigation.classList.toggle("is-open", !isExpanded);
    });

    siteNavigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
            menuButton.focus();
        }
    });
}