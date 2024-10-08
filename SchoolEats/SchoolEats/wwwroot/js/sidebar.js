﻿var sidebar = document.querySelector(".app-sidebar");
var closeBtn = document.querySelector("#btn");
var searchBtn = document.querySelector(".bx-search");
var div = document.querySelector("#main-div-test");
var header = document.querySelector("#main-header-test");
var footer = document.querySelector("#main-footer-test");
closeBtn.addEventListener("click", () => {
    div.classList.remove("app-sidebar-margin");
    div.classList.add("app-sidebar-margin-more");
    header.classList.remove("app-sidebar-margin");
    header.classList.add("app-sidebar-margin-more");
    footer.classList.remove("app-sidebar-margin");
    footer.classList.add("app-sidebar-margin-more");
    sidebar.classList.toggle("open");
    menuBtnChange();
});
searchBtn.addEventListener("click", () => {
    div.classList.remove("app-sidebar-margin");
    div.classList.add("app-sidebar-margin-more");
    header.classList.remove("app-sidebar-margin");
    header.classList.add("app-sidebar-margin-more");
    footer.classList.remove("app-sidebar-margin");
    footer.classList.add("app-sidebar-margin-more");
    sidebar.classList.toggle("open");
    menuBtnChange();
});

function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        div.classList.remove("app-sidebar-margin");
        div.classList.add("app-sidebar-margin-more");
        header.classList.remove("app-sidebar-margin");
        header.classList.add("app-sidebar-margin-more");
        footer.classList.remove("app-sidebar-margin");
        footer.classList.add("app-sidebar-margin-more");
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        div.classList.remove("app-sidebar-margin-more");
        div.classList.add("app-sidebar-margin");
        header.classList.remove("app-sidebar-margin-more");
        header.classList.add("app-sidebar-margin");
        footer.classList.remove("app-sidebar-margin-more");
        footer.classList.add("app-sidebar-margin");
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}