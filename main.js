import "/styles.scss";
import bay from "@dunks1980/bay.js";
import header_el from "./templates/header.html?raw";
import logo_el from "./templates/logo.html?raw";
import start_page from "./templates/start_page.html?raw";

bay();
bay.create("start-page", start_page, ["prop-color"]);
bay.create("header-component", header_el, ["maxwidth"]);
bay.create("logo-component", logo_el, ["prop-color"]);
