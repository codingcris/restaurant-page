import Menu from "./Menu.json";

export default class MenuPage {
  constructor(contentElement) {
    this.menu = Menu;

    this.contentElement = document.createElement("div");
    this.contentElement.id = "menuContent";
    this.content.appendChild(this.menuHeader());
    this.content.appendChild(this.menuDisplay());
  }

  get content() {
    return this.contentElement;
  }

  menuHeader() {
    const CONTENT = document.createElement("div");
    CONTENT.innerHTML = `
        <h1>Explore Our Authentic Mexican Flavors.</h1>
        <p>Welcome to Sabores Auténticos, where our passion for traditional Mexican cuisine comes alive in every dish we serve. We take pride in crafting our menu using only the finest ingredients, sourced locally and inspired by generations of family recipes. Our commitment to authenticity is evident in the rich, bold flavors that transport you straight to the heart of Mexico. At Sabores Auténticos, we invite you to experience a culinary journey like no other, where each bite tells a story of heritage, culture, and love for the art of Mexican cuisine.</p>
    `;
    CONTENT.classList.add("hero");
    return CONTENT;
  }

  menuDisplay() {
    const CONTENT = document.createElement("div");
    CONTENT.id = "menuDisplay";
    let order = 0;
    for (let menuCategory in this.menu) {
      let container = document.createElement("div");
      container.id = menuCategory + "Category";
      container.classList.add("menuCategory");
      container.style.order = order;
      container.innerHTML = `
      <h1>${menuCategory}</h1>
    `;

      container.addEventListener("click", this.displayMenuItems);

      let menuItemsDisplay = document.createElement("div");
      menuItemsDisplay.classList.add("menuItems");
      menuItemsDisplay.id = container.id + "Items";
      menuItemsDisplay.style.order = order + 1;

      for (let item of this.menu[menuCategory]) {
        let itemContainer = document.createElement("div");
        itemContainer.classList.add("menuItem");
        itemContainer.innerHTML = `
          <h2>${item.name}</h2>
          <h3>Price:<h3>
          <p>$${item.price}</p>
        `;

        if (item.image) {
          // Use dynamic imports to get the correct image URL
          import(`${item.image}`)
            .then((imageUrl) => {
              itemContainer.style.background = `center / cover no-repeat url(${imageUrl.default})`;
            })
            .catch((error) => {
              console.error(`Error loading image: ${error}`);
            });
        } else {
          console.error(`Image not found for ${item.name}`);
        }

        menuItemsDisplay.appendChild(itemContainer);
      }

      CONTENT.appendChild(container);
      CONTENT.appendChild(menuItemsDisplay);
      order += 2;
    }

    return CONTENT;
  }

  displayMenuItems(e) {
    const menuItemsId = e.currentTarget.id + "Items";
    const menuItems = document.getElementById(menuItemsId);

    menuItems.classList.toggle("expanded");

    const menuDisplay = document.querySelector("#menuDisplay");
    const items = menuDisplay.querySelectorAll(".menuItems");

    items.forEach((item) => {
      if (item !== menuItems && item.classList.contains("expanded")) {
        item.classList.remove("expanded");
      }
    });
  }
}
