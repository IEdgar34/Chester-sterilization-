export const menuOfIcons = () => {
    const iconsBtn = document.querySelectorAll(".mob-menu-btn");
    iconsBtn.forEach((item) => {
        item.addEventListener("click", tooltipsOpen);
    });
    function tooltipsOpen(e) {
        const display = getComputedStyle(e.target.nextSibling).display;
        if (display === "none") {
            document.querySelectorAll(".nav-menu-mob").forEach((item) => {
                item.classList.remove("nav-menu-mob_active");
            });
            e.target.nextSibling.nextSibling.classList.add("nav-menu-mob_active");
        }
    }

    document.addEventListener("click", (e) => {
        if (!e.target.classList.contains("mob-menu-btn")) {
            document.querySelectorAll(".nav-menu-mob").forEach((item) => {
                item.classList.remove("nav-menu-mob_active");
            });
        }
    });

    //menu

    const menubtn = document.querySelector(".menu-burger");
    const nav = document.querySelector(".nav-mob");
    const links = document.querySelectorAll(".nav-mob li a,.nav-mob a");
    menubtn.addEventListener("click", (e) => {
        toggle();
    });
    links.forEach((item) => {
        item.addEventListener("click", (e) => {
            toggle();
        });
    });
    function toggle() {
        nav.classList.toggle("nav-mob-active");
        menubtn.classList.toggle("menu-burger_active");
        document.body.classList.toggle("overflow");
        document.querySelector(".wrapper").classList.toggle("overflow");
    }
};
