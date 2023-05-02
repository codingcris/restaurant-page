import HomePage from "./homePage.js";
import MenuPage from "./menuPage.js";
import "./normalize.css";
import "./style.scss";
import Logo from "./LOGO.png";
import { ContactPage } from "./contactPage.js";

class Controller {
  constructor() {
    this.content = this.contentElement;
    this.header = this.createHeader();
    this.footer = this.createFooter();
    this.initializeDocument();
    this.homePage = new HomePage();
    this.menuPage = new MenuPage();
    this.contactPage = new ContactPage();
    this.setNavLinkEventHandlers();

    this.render(this.homePage.content);
  }

  initializeDocument() {
    const BODY = document.querySelector("body");

    const CONTENT = document.createElement("div");
    CONTENT.id = "content";

    BODY.append(this.header, CONTENT, this.footer);
  }

  createHeader() {
    const HEADER = document.createElement("header");
    const NAVIGATION = document.createElement("nav");
    const LINKS = document.createElement("ul");

    HEADER.appendChild(NAVIGATION);
    NAVIGATION.appendChild(LINKS);

    LINKS.innerHTML = `
    <li><a href="#" id="homeLink">Home</a></li>
    <li><a href="#" id="menuLink">Menu</a></li>
    <li><a href="#" id="contactLink">Contact</a></li>
  `;

    return HEADER;
  }

  createFooter() {
    const FOOTER = document.createElement("footer");

    const infoSection = document.createElement("div");
    infoSection.id = "footerInfo";

    infoSection.innerHTML = `
    <div class="item">
      <h3>Our Restaurant</h3>
      <p>123 Main Street</p>
      <p>Food City, FC 12345</p>
    </div>
  `;

    const LOGO_WRAPPER = document.createElement("div");
    LOGO_WRAPPER.classList.add("logo-wrapper");

    const LOGO = document.createElement("img");
    LOGO.setAttribute("src", Logo);

    LOGO_WRAPPER.appendChild(LOGO);
    infoSection.appendChild(LOGO_WRAPPER);

    infoSection.innerHTML += `
    <div class="item">
      <h3>Opening Hours:</h3>
      <p>Monday to Thursday:<br>11 AM - 10 PM</p>
      <p>Friday & Saturday:<br>11 AM - 11 PM</p>
      <p>Sunday: <br>12 PM - 9 PM</p>
    </div>
  `;

    const HR = document.createElement("hr");

    const NEWSLETTER_BTN = document.createElement("button");
    NEWSLETTER_BTN.textContent = "Join Our Newsletter";

    FOOTER.append(infoSection, HR, NEWSLETTER_BTN);
    return FOOTER;
  }

  setNavLinkEventHandlers() {
    let home = document.getElementById("homeLink");
    let menu = document.getElementById("menuLink");
    let contact = document.getElementById("contactLink");

    home.addEventListener("click", (event) => {
      this.footer.style.display = "flex";
      this.render(this.homePage.content);
    });
    menu.addEventListener("click", (event) => {
      this.footer.style.display = "flex";
      this.render(this.menuPage.content);
    });
    contact.addEventListener("click", (event) => {
      this.footer.style.display = "none";
      this.render(this.contactPage.content);
    });
  }

  render(content) {
    this.clearContent();
    const CONTENT = document.getElementById("content");
    CONTENT.appendChild(content);
  }

  clearContent() {
    const CONTENT = document.getElementById("content");
    CONTENT.innerHTML = "";
  }

  get contentElement() {
    return document.getElementById("content");
  }
}

const domController = new Controller();
