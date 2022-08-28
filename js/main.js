let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
    status: "Stocking",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
    status: "Stocking",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    status: "Out of stock",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
    status: "Out of stock",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
    status: "Stocking",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    status: "Stocking",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
    status: "Stocking",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
    status: "Stocking",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
    status: "Out of stock",
  },
];

let renderGlassesList = (dataGlasses) => {
  let content = "";
  dataGlasses.map((gl) => {
    content += `
      <div class="col-4">
          <img onclick="renderGlasses('${gl.id}')" id="${gl.id}" class="img-fluid" src="${gl.src}" alt="">
     </div>
      `;
  });
  document.getElementById("vglassesList").innerHTML = content;
};
renderGlassesList(dataGlasses);

let renderGlasses = (id) => {
  dataGlasses.map((gl) => {
    if (gl.id === id) {
      let content = `
  <div class="overlay__img">
      <img  src="${gl.virtualImg}" alt="">
  </div>
`;
      document.getElementById("avatar").innerHTML = content;
      document.getElementById(
        "glassesInfo"
      ).innerHTML = `<div class="overlay__content">
      <div class="title">
      <span class="name">${gl.name} - (${gl.brand})</span>
      <span class="color">${gl.color}</span>
      </div>
      <div class="mb-3 mt-1">
      <button class="btn btn-danger">${gl.price}</button>
      <span style="color:green;">${gl.status}</span>
      </div>
      <p>${gl.description}</p>
</div>`;
      document.getElementById("glassesInfo").style.display = "block";
    }
  });
};

