const teams = [
  {
    name: "Tech Ninjas",
    chief: { name: "Ibraheem Bin Haseeb", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Yaman Tariq", title: "Research", picture: "" },
      { name: "Saadaan Hassan", title: "Github", picture: "" },
      { name: "TBD", title: "Portal", picture: "" },
      { name: "Ayaan", title: "Sessions", picture: "" },
    ],
  },
  {
    name: "Marketing Mechs",
    chief: { name: "Suleiman Butt", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Ahmad Zafar", title: "Posters", picture: "" },
      { name: "Areeba Hamid", title: "Campaigns", picture: "" },
      { name: "Maheen Shaukat", title: "Preparations", picture: "" },
      { name: "Ahsan Shahzad", title: "Ideation", picture: "" },
      { name: "Laiba Amir", title: "Digital Marketing", picture: "" },
    ],
  },
  {
    name: "Event Elites",
    chief: { name: "Dabeer Javaid", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Abdullah", title: "Logistics", picture: "" },
      { name: "Shaheman", title: "Reservations", picture: "" },
      { name: "Volunteers", title: "Volunteers", picture: "" },
      { name: "Laiba", title: "Decor", picture: "" },
      { name: "Malaika", title: "Operations", picture: "" },
    ],
  },
  {
    name: "Design Dynamos",
    chief: { name: "Manal Zahra", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Abdul Rehman Nadeem", title: "Raster Graphics", picture: "" },
      { name: "TBD", title: "Vector Graphics", picture: "" },
      { name: "Muhammad Awais Rasool", title: "Swags", picture: "" },
      { name: "TBD", title: "Posters", picture: "" },
    ],
  },
  {
    name: "Cinematic Cyborgs",
    chief: { name: "Mahad Iqbal", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Rafay", title: "Photography", picture: "" },
      { name: "Muaz Jamil", title: "Films", picture: "" },
      { name: "Anam", title: "Media", picture: "" },
      { name: "Bilal", title: "Reels", picture: "" },
      { name: "Faizan Sharjeel", title: "Lighting", picture: "" },
    ],
  },
  {
    name: "Social Storms",
    chief: { name: "Muhammad Qasim", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "TBD", title: "Stories", picture: "" },
      { name: "Saad", title: "Instagram", picture: "" },
      { name: "Mubarra", title: "Linkedin", picture: "" },
      { name: "Raffay", title: "Youtube", picture: "" },
      { name: "TBD", title: "Website", picture: "" },
    ],
  },
  {
    name: "Public Pioneers",
    chief: { name: "TBD", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Shehryar", title: "Emails", picture: "" },
      { name: "Syed Ahmad Zada", title: "Sponsorships", picture: "" },
      { name: "Muneeb Asif", title: "Outreach", picture: "" },
      { name: "Hais Shoaib", title: "Promotions", picture: "" },
      { name: "Wadood", title: "Podcast", picture: "" },
    ],
  },
  {
    name: "Androids",
    chief: { name: "TBD", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "TBD", title: "Data", picture: "" },
      { name: "TBD", title: "Forms", picture: "" },
      { name: "TBD", title: "Community", picture: "" },
      { name: "TBD", title: "Resources", picture: "" },
    ],
  },
  {
    name: "Droids",
    chief: { name: "TBD", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "TBD", title: "Journal", picture: "" },
      { name: "TBD", title: "Editor", picture: "" },
      { name: "TBD", title: "Newsletter", picture: "" },
      { name: "TBD", title: "Layout", picture: "" },
    ],
  },
];

const syndicates = [
  { name: "Sameer Faisal", title: "Chairperson", picture: "" },
  { name: "Ali Imran", title: "Vice Chairperson", picture: "" },
  { name: "Fatima Saqib", title: "Wealth Warden", picture: "" },
  { name: "Zoha Waheed", title: "Chief Strategist", picture: "" },
  { name: "M. Fahad Bhatti", title: "Co Strategist", picture: "" },
];

// fetch DOM containers

const teamContainer = document.querySelector(".team-container");

// rendering the teams HTML dynamically
let teamsHtml = "";
teams.forEach((team) => {
  let headsHtml = "";

  team.heads.forEach((head) => {
    headsHtml += `
            <div>
              <img src="${
                head.picture === ""
                  ? "../O-portfolio_webp/members_webp/eva.webp"
                  : ""
              }" />
              <div class="head-name">${head.name}</div>
            </div>
        `;
  });

  teamsHtml += `
  <div class="team-inner-container">
  <div class="team-chief-and-title-container">
    <img src="${
      team.chief.picture === ""
        ? "../O-portfolio_webp/members_webp/eva.webp"
        : ""
    }" />
    <div>
      <h1 class="chief">Chief of ${team.name}</h1>
      <h1 class="chief-name">${team.chief.name}</h1>
    </div>
  </div>
  <div class="heads-and-description-container">
    <div class="heads-container">
      <h1>Heads</h1>
      <div class="heads-inner-container">
      ${headsHtml}
      </div>
    </div>
    <div class="description-container">
      <h1>${team.name}</h1>
      <p>
        ${team.description}
      </p>
    </div>
  </div>
</div>
    `;
});

teamContainer.innerHTML = teamsHtml;
