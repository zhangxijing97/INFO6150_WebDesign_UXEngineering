const API_URL = "https://api.spacexdata.com/v4/rockets";
const FALLBACK_IMAGE = "./images/rocket-default.jpg";

const listView = document.querySelector("#list-view");
const detailView = document.querySelector("#detail-view");
const rocketList = document.querySelector("#rocket-list");
const rocketDetail = document.querySelector("#rocket-detail");
const statusMessage = document.querySelector("#status-message");
const backButton = document.querySelector("#back-button");

let rocketsData = [];

window.addEventListener("DOMContentLoaded", init);
backButton.addEventListener("click", showListView);

async function init() {
  try {
    statusMessage.textContent = "Loading rockets...";

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to load rocket data.");
    }

    const data = await response.json();
    rocketsData = data;

    renderRocketList(rocketsData);
    statusMessage.textContent = "";
  } catch (error) {
    statusMessage.textContent = "Unable to load rockets. Please try again later.";
    console.error(error);
  }
}

function renderRocketList(rockets) {
  rocketList.innerHTML = "";

  rockets.forEach((rocket) => {
    const card = document.createElement("article");
    card.className = "rocket-card";

    const imageUrl =
      rocket.flickr_images && rocket.flickr_images.length > 0
        ? rocket.flickr_images[0]
        : FALLBACK_IMAGE;

    card.innerHTML = `
      <img 
        src="${imageUrl}" 
        alt="${rocket.name}" 
        onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}';"
      >
      <div class="rocket-card-content">
        <h3>${rocket.name}</h3>
        <p><strong>First Flight:</strong> ${rocket.first_flight}</p>
        <p><strong>Country:</strong> ${rocket.country}</p>
        <p><strong>Company:</strong> ${rocket.company}</p>
        <button class="card-button" data-id="${rocket.id}">View Details</button>
      </div>
    `;

    rocketList.appendChild(card);
  });

  const detailButtons = document.querySelectorAll(".card-button");
  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const rocketId = button.dataset.id;
      const selectedRocket = rocketsData.find((rocket) => rocket.id === rocketId);
      showDetailView(selectedRocket);
    });
  });
}

function showDetailView(rocket) {
  const imageUrl =
    rocket.flickr_images && rocket.flickr_images.length > 0
      ? rocket.flickr_images[0]
      : FALLBACK_IMAGE;

  rocketDetail.innerHTML = `
    <img 
      class="detail-image" 
      src="${imageUrl}" 
      alt="${rocket.name}"
      onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}';"
    >
    <div class="detail-content">
      <h2>${rocket.name}</h2>
      <p><strong>First Flight:</strong> ${rocket.first_flight}</p>
      <p><strong>Country:</strong> ${rocket.country}</p>
      <p><strong>Company:</strong> ${rocket.company}</p>
      <p><strong>Cost per Launch:</strong> $${rocket.cost_per_launch.toLocaleString()}</p>
      <p><strong>Height:</strong> ${rocket.height.meters} meters</p>
      <p><strong>Diameter:</strong> ${rocket.diameter.meters} meters</p>
      <p><strong>Mass:</strong> ${rocket.mass.kg.toLocaleString()} kg</p>
      <p class="description"><strong>Description:</strong> ${rocket.description}</p>
    </div>
  `;

  listView.classList.add("hidden");
  detailView.classList.remove("hidden");
}

function showListView() {
  detailView.classList.add("hidden");
  listView.classList.remove("hidden");
}