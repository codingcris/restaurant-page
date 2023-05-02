import interiorPic1 from "./saboresAutenticosInterior1.png";
import interiorPic2 from "./saboresAutenticosInterior2.png";
import interiorPic3 from "./saboresAutenticosInterior3.png";

export default class HomePage {
  constructor(contentElement) {
    this._contentElement = document.createElement("div");
    this.content.id = "homeContent";
    this.createHeroArea();
    this.createGallery();
  }

  get content() {
    return this._contentElement;
  }

  createHeroArea() {
    const hero = document.createElement("section");
    hero.classList.add("hero");

    const heroHeader = document.createElement("h1");
    heroHeader.textContent = "Sabores Autenticos";

    const heroSubHeader = document.createElement("h2");
    heroSubHeader.textContent =
      "Embark on a Flavorful Journey Through Mexico's Culinary Treasures";

    const heroCopy = document.createElement("p");
    heroCopy.textContent =
      "Experience Mexico's culinary magic at Sabores Auténticos. Savor authentic tacos, crafted with fresh ingredients, and enjoy our warm, vibrant atmosphere. Taste the tradition. ¡Buen provecho!";

    hero.append(heroHeader, heroSubHeader, heroCopy);

    this.content.appendChild(hero);
  }

  createGallery() {
    const gallery = document.createElement("section");
    gallery.id = "imageGallery";

    gallery.innerHTML = `
    <h3>Our Delightful Mexican Home</h3>
    <div id="images";>
    </div>
    <hr>
    <button id="reservationButton">Reserve Your Table</button>  
  `;

    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");

    img1.setAttribute("src", interiorPic1);
    img2.setAttribute("src", interiorPic2);
    img3.setAttribute("src", interiorPic3);

    for (let img of [img1, img2, img3]) {
      img.setAttribute("alt", "restaurant interior, dining area");
      img.classList.add("galleryImage");
    }

    const imagesDiv = gallery.querySelector("#images");
    imagesDiv.appendChild(img1);
    imagesDiv.appendChild(img2);
    imagesDiv.appendChild(img3);

    this.content.appendChild(gallery);

    this.content.appendChild(gallery);
  }
}
