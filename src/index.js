let addToy = false;
const toyUrl = "http://localhost:3000/toys";

const div = document.createElement("div");
div.classList.add("card");


document.body.appendChild(div);
function createToy(name, image, likes) {
  return `
  <div class="card">
  <h2>${name.name}</h2>
  <img src="${image.image}" class="toy-avatar" />
  <p>4${likes.likes}</p>
  <button class="like-btn" id="[toy_id]">Like ❤️</button>
</div>
  `
}







document.addEventListener("DOMContentLoaded", () => {

  const toyCollection = document.querySelector("#toy-collection");
  toyCollection.addEventListener("click", () => {

    fetch('toyUrl', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toyCollection),
    })
    fetch(toyUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toyCollection),
    })
    fetch(toyUrl, {
      method: "POST",
      headers:
      {
        "Content-Type": "application/json",
        Accept: "application/json"
      },

      body: JSON.stringify({
        "name": "Jessie",
        "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
        "likes": 0
      })
    })
  
})
  
  
  
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      // rest of the code
    }
  })
  })




const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
addBtn.addEventListener("click", () => {
  // hide & seek with the form
  addToy = !addToy;
  if (addToy) {
    toyFormContainer.style.display = "block";
  } else {
    toyFormContainer.style.display = "none";
  }
});

