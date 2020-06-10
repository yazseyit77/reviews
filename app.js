// local reviews data
const reviews = [
  {
    id: 1,
    name: "Dexter Morgan",
    job: "lab geek",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQheYxxJpqVqhusqgHjhdEo1wdfmzGzO-Dk2liJOIOVmfZVHeHe&usqp=CAU",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Hannah Mckay",
    job: "florist / gardener",
    img: "https://www.myfconline.com/character_avatars/265300_185308.jpg",
    text:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: 3,
    name: "Michael Scofield",
    job: "industrial engineer",
    img: "https://i3.sndcdn.com/avatars-000018739285-nza09i-t500x500.jpg",
    text:
      "Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. ",
  },
  {
    id: 4,
    name: "Sara Tancredi",
    job: "infrimary doctor",
    img: "https://i4.lisimg.com/6466884/411full.jpg",
    text:
      "ESed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.",
  },
  {
    id: 5,
    name: "Jesse Pinkman",
    job: "meth cook / distributor",
    img: "https://i1.sndcdn.com/avatars-000145941081-3ui4rr-t500x500.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    name: "Heisenberg",
    job: "meth cook / chemist",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfwXqU551XGaDhE6aoHPCIhOMLXyzv_KPWHLqokrO4Eyb7HxG&s",
    text:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
