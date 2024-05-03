// Create a menu card for each type of menu item (drinks, breads, spreads, pastries, other)
function createMenuCard(title, icon, optionsObject, menuWrapper) {
  const card = document.createElement("div");
  card.classList.add("menu-card");
  card.classList.add(title.toLowerCase());

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("menu-title-wrapper");
  cardTitle.innerHTML = `<h2>${title}</h2><i class="ph-thin ${icon}"></i>`;
  card.appendChild(cardTitle);

  const cardOptions = document.createElement("div");
  cardOptions.classList.add("menu-options");

  for (const [option, price] of Object.entries(optionsObject)) {
    const optionElement = document.createElement("div");
    optionElement.classList.add("menu-option");
    optionElement.innerHTML = `<p>${option}</p><p>${price}</p>`;
    cardOptions.appendChild(optionElement);
  }

  card.appendChild(cardOptions);
  menuWrapper.appendChild(card);
}

function menu() {
  console.log("Menu tab loaded");
  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("tab-wrapper", "menu-wrapper");

  createMenuCard(
    "Drinks",
    "ph-coffee",
    {
      Espresso: "1.50",
      Cappuccino: "3.00",
      Latte: "3.50",
      Macchiato: "2.50",
      Mocha: "4.00",
      Americano: "2.00",
      "Flat White": "3.00",
      "Hot Chocolate": "2.50",
      Tea: "1.50",
    },
    menuWrapper
  );

  createMenuCard(
    "Breads",
    "ph-bread",
    {
      Amasado: "1.50",
      Marraqueta: "3.00",
      Hallula: "3.50",
      Coliza: "2.50",
      Sopaipilla: "4.00",
    },
    menuWrapper
  );

  createMenuCard(
    "Spreads",
    "ph-knife",
    {
      Manjar: "1.50",
      Palta: "3.00",
      Mermelada: "3.50",
      "Dulce de membrillo": "2.50",
    },
    menuWrapper
  );

  createMenuCard(
    "Pastries",
    "ph-cookie",
    {
      Kuchen: "1.50",
      Milhojas: "3.00",
      Berliner: "3.50",
      Alfajor: "2.50",
      Torta: "4.00",
    },
    menuWrapper
  );

  createMenuCard(
    "Other",
    "ph-fork-knife",
    {
      Empanadas: "1.50",
      Choripan: "3.00",
      Chacarero: "3.50",
      Completo: "2.50",
      Churrasco: "4.00",
    },
    menuWrapper
  );

  return menuWrapper;
}
export default menu;
