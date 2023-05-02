export class ContactPage {
  constructor() {
    const CONTENT = document.createElement("div");
    CONTENT.id = "contactContent";
    this.content = CONTENT;
    CONTENT.append(this.header(), this.contactInformation());
  }

  header() {
    const CONTENT = document.createElement("div");
    CONTENT.classList.add("hero");
    CONTENT.innerHTML = `
        <h1>Contact </h1>
        <p>We'd love to hear from you, and even more so, we'd love to see you in person at our restaurant! Your journey through our delightful flavors is just a reservation away.</p> 
        <button>Make a Reservation Now</button>
      `;
    return CONTENT;
  }

  contactInformation() {
    const CONTENT = document.createElement("div");
    CONTENT.id = "contactInfoDisplay";
    CONTENT.innerHTML = `
        <div class="left"></div>
        <div id="contactInfo">
            <p>If you have any questions about our menu, would like to share your experience at our restaurant, or need assistance with anything else, please don't hesitate to get in touch with us.</p>
            <div id="callUs">
                <h3>Phone</h3>
                <p>Give us a call at:</p>
                <p>(123) 456-7890</p>
                <p>Our phone lines are open daily from 11 AM to 10 PM.</p>
            </div>
            <div id="emailUs">
                <h3>Email</h3>
                <p>For general inquiries or to provide feedback, you can email us at:</p>
                <p>info@ourrestaurant.com</p>
                <p>We'll do our best to respond within 48 hours.</p>
            </div>
            <div id="visitUs">
                <h3>Visit Us</h3>
                <p>We'd be delighted to welcome you at our restaurant, where the magic of our flavors comes to life:</p>
                <br/>
                <h3>Our Restaurant:</h3>
                <p>123 Main Street</p>
                <p>Food City, FC 12345</p>
                <br/>
                <h3>Opening Hours:</h3>
                <p>Monday to Thursday: 11 AM - 10 PM</p>
                <p>Friday & Saturday: 11 AM - 11 PM</p>
                <p>Sunday: 12 PM - 9 PM</p>
            </div>
        </div>
      `;

    return CONTENT;
  }
}

// Email

//

// Social Media

// Stay connected with us and join our vibrant community on social media:

//     Facebook: facebook.com/ourrestaurant
//     Instagram: @ourrestaurant
//     Twitter: @our_restaurant

// We eagerly await the opportunity to share our love for great food with you and your loved ones!
