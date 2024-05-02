function home() {
  console.log("Home tab loaded");
  // Render header
  const homeWrapper = document.createElement("div");
  homeWrapper.classList.add("home-wrapper");

  const titleWrapper = document.createElement("div");
  titleWrapper.classList.add("title-wrapper");

  const title = document.createElement("span");
  title.classList.add("title");
  title.innerHTML = `la<br />once`;
  titleWrapper.appendChild(title);

  const icon = document.createElement("div");
  icon.classList.add("icon");
  icon.innerHTML = '<i class="ph-thin ph-coffee title"></i>';
  titleWrapper.appendChild(icon);

  homeWrapper.appendChild(titleWrapper);

  // Render information about the restaurant
  const information = document.createElement("div");
  information.classList.add("information");

  const hours = document.createElement("div");
  hours.classList.add("hours");
  hours.innerHTML = ` <h2>Hours</h2>
                      <p>Monday - Friday: 2:00am - 5:00pm</p>
                      <p>Saturday: 8:00am - 4:00pm</p>
                      <p>Sunday: Closed</p>`;
  information.appendChild(hours);

  const location = document.createElement("div");
  location.classList.add("location");
  location.innerHTML = `<h2>Location</h2>
                      <p>1234 Coffee St.</p>
                      <p>Alberta, Canada</p>`;
  information.appendChild(location);

  homeWrapper.appendChild(information);

  return homeWrapper;
}
export default home;
