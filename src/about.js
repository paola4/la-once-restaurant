function about() {
  console.log("about tab loaded");
  const aboutWrapper = document.createElement("div");
  aboutWrapper.classList.add("about-wrapper");
  const header = document.createElement("h1");
  header.innerHTML = "la once";
  aboutWrapper.appendChild(header);

  const intro = document.createElement("p");
  intro.innerHTML = `Welcome to <b>la once</b>, where the charm of Chilean tradition meets the warmth of a family gathering. Nestled in the heart of the community, our restaurant invites you to relive the cherished custom of <b>"once"</b>, Chile’s beloved afternoon tea time. At la once, every dish tells a story and every sip brings a smile.`;
  aboutWrapper.appendChild(intro);

  const aboutContent = {
    "Our Story":
      "la once was born from a simple dream: to bring people together just as families in Chile gather in the late afternoon to share tea, freshly baked breads, and delightful pastries. Inspired by this century-old tradition, our founders, siblings Ana and José Rivera, transformed their family’s recipes into a culinary experience for all to enjoy. Our doors opened with the hope of not only serving food but also fostering connections.",
    "Our Cuisine":
      "We pride ourselves on authenticity and quality, crafting each dish using traditional ingredients and methods passed down through generations. From the buttery softness of our homemade pan amasado to the sweet and tantalizing layers of our milhojas, each bite is a nod to Chilean culinary artistry. Our menu features an array of options from savory empanadas to sweet kuchen, accompanied by a selection of the finest teas and the robust flavors of Chilean coffee.",
    "Our Space":
      "la once is designed to feel like a home. The decor blends rustic touches with contemporary comfort, creating a cozy yet elegant atmosphere. Whether you’re nestled by the fireplace in the winter or enjoying the breeze on our patio in the summer, our space is perfect for relaxing and making memories.",
    "Join Us":
      "We invite you to step into la once, not just to eat, but to take part in a tradition that spans generations. Join us in the afternoon for a leisurely tea, bring your family for a special weekend treat, or celebrate your special moments with us. At la once, you’re always among friends.",
  };

  for (const [title, content] of Object.entries(aboutContent)) {
    const section = document.createElement("div");
    section.classList.add("about-section");

    const sectionTitle = document.createElement("h2");
    sectionTitle.innerHTML = title;
    section.appendChild(sectionTitle);

    const sectionContent = document.createElement("p");
    sectionContent.innerHTML = content;
    section.appendChild(sectionContent);

    aboutWrapper.appendChild(section);
  }

  return aboutWrapper;
}
export default about;
