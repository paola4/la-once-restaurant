function menu() {
  console.log("Menu tab loaded");
  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("tab-wrapper", "menu-wrapper");

  // Create drinks card
  const drinks = document.createElement("div");
  drinks.classList.add("menu-card");
  drinks.classList.add("drinks");
  const drinksTitle = document.createElement("div");
  drinksTitle.classList.add("menu-title-wrapper");
  drinksTitle.innerHTML = `<h2>Drinks</h2>
                           <i class="ph-thin ph-coffee"></i>`;
  drinks.appendChild(drinksTitle);
  const drinksOptions = document.createElement("div");
  drinksOptions.classList.add("menu-options");
  const drinksObject = {
    Espresso: "1.50",
    Cappuccino: "3.00",
    Latte: "3.50",
    Macchiato: "2.50",
    Mocha: "4.00",
    Americano: "2.00",
    "Flat White": "3.00",
    "Hot Chocolate": "2.50",
    Tea: "1.50",
  };

  for (const [drink, price] of Object.entries(drinksObject)) {
    const drinkOption = document.createElement("div");
    drinkOption.classList.add("menu-option");
    drinkOption.innerHTML = `<p>${drink}</p><p>${price}</p>`;
    drinksOptions.appendChild(drinkOption);
  }
  drinks.appendChild(drinksOptions);
  menuWrapper.appendChild(drinks);

  // Create breads card
  const breads = document.createElement("div");
  breads.classList.add("menu-card");
  breads.classList.add("breads");
  const breadsTitle = document.createElement("div");
  breadsTitle.classList.add("menu-title-wrapper");
  breadsTitle.innerHTML = `<h2>Breads</h2>
                            <i class="ph-thin ph-bread"></i>`;
  breads.appendChild(breadsTitle);
  const breadsOptions = document.createElement("div");
  breadsOptions.classList.add("menu-options");
  const breadsObject = {
    Amasado: "1.50",
    Marraqueta: "3.00",
    Hallula: "3.50",
    Coliza: "2.50",
    Sopaipilla: "4.00",
  };

  for (const [bread, price] of Object.entries(breadsObject)) {
    const breadOption = document.createElement("div");
    breadOption.classList.add("menu-option");
    breadOption.innerHTML = `<p>${bread}</p><p>${price}</p>`;
    breadsOptions.appendChild(breadOption);
  }
  breads.appendChild(breadsOptions);
  menuWrapper.appendChild(breads);

  // Create spreads card
  const spreads = document.createElement("div");
  spreads.classList.add("menu-card");
  spreads.classList.add("spreads");
  const spreadsTitle = document.createElement("div");
  spreadsTitle.classList.add("menu-title-wrapper");
  spreadsTitle.innerHTML = `<h2>Spreads</h2>
                            <i class="ph-thin ph-knife"></i>`;
  spreads.appendChild(spreadsTitle);
  const spreadsOptions = document.createElement("div");
  spreadsOptions.classList.add("menu-options");
  const spreadsObject = {
    Manjar: "1.50",
    Palta: "3.00",
    Mermelada: "3.50",
    "Dulce de membrillo": "2.50",
  };

  for (const [spread, price] of Object.entries(spreadsObject)) {
    const spreadOption = document.createElement("div");
    spreadOption.classList.add("menu-option");
    spreadOption.innerHTML = `<p>${spread}</p><p>${price}</p>`;
    spreadsOptions.appendChild(spreadOption);
  }
  spreads.appendChild(spreadsOptions);
  menuWrapper.appendChild(spreads);

  return menuWrapper;
}
export default menu;
