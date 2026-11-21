
const books = [
  // ROMANCE
  { title: "Jannat Ke Pattay", author: "Nimra Ahmad", year: 2012, category: "Romance" },
  { title: "Better Than the Movies", author: "Lynn Painter", year: 2021, category: "Romance" },
  { title: "Nothing Like the Movies", author: "Lynn Painter", year: 2024, category: "Romance" },
  { title: "Every Summer After", author: "Carley Fortune", year: 2022, category: "Romance" },
  { title: "Twisted Love", author: "Ana Huang", year: 2021, category: "Romance", series: "Twisted Series" },
  { title: "Twisted Games", author: "Ana Huang", year: 2021, category: "Romance", series: "Twisted Series" },
  { title: "Twisted Hate", author: "Ana Huang", year: 2022, category: "Romance", series: "Twisted Series" },
  { title: "Twisted Lies", author: "Ana Huang", year: 2022, category: "Romance", series: "Twisted Series" },

  // FANTASY — THRONE OF GLASS
  { title: "The Assassin's Blade", author: "Sarah J. Maas", year: 2014, category: "Fantasy", series: "Throne of Glass" },
  { title: "Throne of Glass", author: "Sarah J. Maas", year: 2012, category: "Fantasy", series: "Throne of Glass" },
  { title: "Crown of Midnight", author: "Sarah J. Maas", year: 2013, category: "Fantasy", series: "Throne of Glass" },
  { title: "Heir of Fire", author: "Sarah J. Maas", year: 2014, category: "Fantasy", series: "Throne of Glass" },
  { title: "Queen of Shadows", author: "Sarah J. Maas", year: 2015, category: "Fantasy", series: "Throne of Glass" },
  { title: "Empire of Storms", author: "Sarah J. Maas", year: 2016, category: "Fantasy", series: "Throne of Glass" },
  { title: "Tower of Dawn", author: "Sarah J. Maas", year: 2017, category: "Fantasy", series: "Throne of Glass" },
  { title: "Kingdom of Ash", author: "Sarah J. Maas", year: 2018, category: "Fantasy", series: "Throne of Glass" },

  // FANTASY — THE EMPYREAN
  { title: "Fourth Wing", author: "Rebecca Yarros", year: 2023, category: "Fantasy", series: "The Empyrean" },
  { title: "Iron Flame", author: "Rebecca Yarros", year: 2023, category: "Fantasy", series: "The Empyrean" },
  { title: "Onyx Storm", author: "Rebecca Yarros", year: 2025, category: "Fantasy", series: "The Empyrean" },

  // FANTASY — ONCE UPON A BROKEN HEART
  { title: "Once Upon a Broken Heart", author: "Stephanie Garber", year: 2021, category: "Fantasy", series: "Once Upon a Broken Heart" },
  { title: "The Ballad of Never After", author: "Stephanie Garber", year: 2022, category: "Fantasy", series: "Once Upon a Broken Heart" },
  { title: "A Curse for True Love", author: "Stephanie Garber", year: 2023, category: "Fantasy", series: "Once Upon a Broken Heart" },

  // MYSTERY
  { title: "The Silent Patient", author: "Alex Michaelides", year: 2019, category: "Mystery" },
  { title: "The Girl on the Train", author: "Paula Hawkins", year: 2015, category: "Mystery" },
  { title: "The Housemaid", author: "Freida McFadden", year: 2022, category: "Mystery", series: "The Housemaid" },
  { title: "The Housemaid's Secret", author: "Freida McFadden", year: 2023, category: "Mystery", series: "The Housemaid" },
  { title: "Verity", author: "Colleen Hoover", year: 2018, category: "Mystery" },

  // MYSTERY — A GOOD GIRL'S GUIDE TO MURDER
  { title: "A Good Girl's Guide to Murder", author: "Holly Jackson", year: 2019, category: "Mystery", series: "A Good Girl's Guide to Murder" },
  { title: "Good Girl, Bad Blood", author: "Holly Jackson", year: 2020, category: "Mystery", series: "A Good Girl's Guide to Murder" },
  { title: "As Good as Dead", author: "Holly Jackson", year: 2021, category: "Mystery", series: "A Good Girl's Guide to Murder" },
  { title: "Kill Joy", author: "Holly Jackson", year: 2021, category: "Mystery", series: "A Good Girl's Guide to Murder" },

  // MYSTERY — THE NATURALS
  { title: "The Naturals", author: "Jennifer Lynn Barnes", year: 2013, category: "Mystery", series: "The Naturals" },
  { title: "Killer Instinct", author: "Jennifer Lynn Barnes", year: 2014, category: "Mystery", series: "The Naturals" },
  { title: "All In", author: "Jennifer Lynn Barnes", year: 2015, category: "Mystery", series: "The Naturals" },
  { title: "Bad Blood", author: "Jennifer Lynn Barnes", year: 2016, category: "Mystery", series: "The Naturals" },
  { title: "Twelve", author: "Jennifer Lynn Barnes", year: 2025, category: "Mystery", series: "The Naturals" },

  // FICTION — SHATTER ME
  { title: "Shatter Me", author: "Tahereh Mafi", year: 2011, category: "Fiction", series: "Shatter Me" },
  { title: "Unravel Me", author: "Tahereh Mafi", year: 2013, category: "Fiction", series: "Shatter Me" },
  { title: "Ignite Me", author: "Tahereh Mafi", year: 2014, category: "Fiction", series: "Shatter Me" },
  { title: "Restore Me", author: "Tahereh Mafi", year: 2018, category: "Fiction", series: "Shatter Me" },
  { title: "Defy Me", author: "Tahereh Mafi", year: 2019, category: "Fiction", series: "Shatter Me" },
  { title: "Imagine Me", author: "Tahereh Mafi", year: 2020, category: "Fiction", series: "Shatter Me" },
  { title: "Believe Me", author: "Tahereh Mafi", year: 2021, category: "Fiction", series: "Shatter Me" },
  { title: "Destroy Me", author: "Tahereh Mafi", year: 2012, category: "Fiction", series: "Shatter Me" },
  { title: "Fracture Me", author: "Tahereh Mafi", year: 2013, category: "Fiction", series: "Shatter Me" },
  { title: "Shadow Me", author: "Tahereh Mafi", year: 2019, category: "Fiction", series: "Shatter Me" },
  { title: "Reveal Me", author: "Tahereh Mafi", year: 2019, category: "Fiction", series: "Shatter Me" },

  // FICTION — THE HUNGER GAMES
  { title: "The Hunger Games", author: "Suzanne Collins", year: 2008, category: "Fiction", series: "The Hunger Games" },
  { title: "Catching Fire", author: "Suzanne Collins", year: 2009, category: "Fiction", series: "The Hunger Games" },
  { title: "Mockingjay", author: "Suzanne Collins", year: 2010, category: "Fiction", series: "The Hunger Games" },
  { title: "The Ballad of Songbirds and Snakes", author: "Suzanne Collins", year: 2020, category: "Fiction", series: "The Hunger Games" },
  { title: "Sunrise on the Reaping", author: "Suzanne Collins", year: 2025, category: "Fiction", series: "The Hunger Games" },

  // FICTION — DIVERGENT
  { title: "Divergent", author: "Veronica Roth", year: 2011, category: "Fiction", series: "Divergent" },
  { title: "Insurgent", author: "Veronica Roth", year: 2012, category: "Fiction", series: "Divergent" },
  { title: "Allegiant", author: "Veronica Roth", year: 2013, category: "Fiction", series: "Divergent" },
  { title: "Four: A Divergent Collection", author: "Veronica Roth", year: 2014, category: "Fiction", series: "Divergent" },

  // OTHER FICTION
  { title: "The Kite Runner", author: "Khaled Hosseini", year: 2003, category: "Fiction" },
  { title: "A Thousand Splendid Suns", author: "Khaled Hosseini", year: 2007, category: "Fiction" },
  { title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, category: "Fiction" },
  { title: "The Book Thief", author: "Markus Zusak", year: 2005, category: "Fiction" },

  // NON-FICTION
  { title: "The Psychology of Money", author: "Morgan Housel", year: 2020, category: "Non-Fiction" },
  { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", year: 1997, category: "Non-Fiction" },
  { title: "Atomic Habits", author: "James Clear", year: 2018, category: "Non-Fiction" }
];


// SPINE COLOUR PALETTES
// [Dark side, Light side, Text colour]

const palettes = {
  Romance: [
    ["#754e4b", "#d9b8a5", "#f5e4d8"],
    ["#a66f70", "#e9c5b7", "#fff0e4"],
    ["#69504c", "#c49b86", "#f7e5d5"],
    ["#9b6e55", "#e4c8a7", "#fff0d9"]
  ],

  Fantasy: [
    ["#34483f", "#b8a47b", "#f0e4bd"],
    ["#4d405c", "#b7a2c4", "#f0e6f2"],
    ["#344e65", "#a9bdc8", "#eaf0e9"],
    ["#6c493d", "#d3ad83", "#fff0d5"]
  ],

  Mystery: [
    ["#333b3c", "#a2aaa0", "#f0e8d9"],
    ["#60464a", "#c29a92", "#f5e4dc"],
    ["#46505b", "#aab4bd", "#f0ece4"],
    ["#574d3e", "#c3ae8d", "#f7ecd6"]
  ],

  Fiction: [
    ["#705c4b", "#c5a98c", "#f5e7d4"],
    ["#4c5c56", "#aebcae", "#eaf0e3"],
    ["#63505b", "#c3a9b4", "#f5e8ee"],
    ["#5c5142", "#c7b38e", "#f5edda"]
  ],

  "Non-Fiction": [
    ["#2f4a4f", "#8fb0a8", "#e6f1ec"],
    ["#4a5a3a", "#b3c19a", "#eef3e0"],
    ["#3d4a63", "#9fb0cc", "#e9eef7"],
    ["#6a5a2e", "#d2bf80", "#fbf3d6"]
  ]
};


// GENRE ORDER
const genreOrder = [
  "Romance",
  "Fantasy",
  "Mystery",
  "Fiction",
  "Non-Fiction"
];


// HTML ELEMENTS
const bookshelf = document.getElementById("bookshelf");
const searchInput = document.getElementById("search-input");
const filters = document.querySelectorAll(".filter");
const bookCount = document.getElementById("book-count");
const recommendButton = document.getElementById("recommend-btn");
const recommendationResult = document.getElementById("recommendation-result");

let selectedCategory = "All";


// FILTER BOOKS
function getFilteredBooks() {
  const term = searchInput.value.toLowerCase().trim();

  return books.filter(book => {
    const matchesCategory =
      selectedCategory === "All" ||
      book.category === selectedCategory;

    const matchesSearch =
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term) ||
      (book.series && book.series.toLowerCase().includes(term));

    return matchesCategory && matchesSearch;
  });
}


// CREATE HTML ELEMENT
function makeElement(tag, className, text) {
  const el = document.createElement(tag);

  if (className) {
    el.className = className;
  }

  if (text !== undefined) {
    el.textContent = text;
  }

  return el;
}


// CREATE INDIVIDUAL BOOK
function createBook(book, index) {

  const palette =
    palettes[book.category][index % palettes[book.category].length];

  const el = makeElement("div", "book");

  el.tabIndex = 0;

  el.style.background =
    `linear-gradient(90deg, ${palette[0]}, ${palette[1]})`;

  el.style.setProperty("--ink-color", palette[2]);


  // OPTIONAL BOOK SPINE IMAGE
  if (book.image) {

    const img = makeElement("img", "book-spine-image");

    img.src = book.image;
    img.alt = `${book.title} by ${book.author}`;

    el.appendChild(img);

  } else {

    el.classList.add("no-spine-image");

    el.append(
      makeElement("span", "book-title", book.title),
      makeElement("span", "book-author", book.author)
    );
  }


  // BOOK INFORMATION CARD
  const info = makeElement("div", "book-info");

  info.append(
    makeElement("h3", "", book.title),
    makeElement("p", "", `Author: ${book.author}`),
    makeElement("p", "", `First published: ${book.year}`),
    makeElement("p", "", `Category: ${book.category}`)
  );

  if (book.series) {
    info.appendChild(
      makeElement("p", "", `Series: ${book.series}`)
    );
  }

  el.appendChild(info);


  // POSITION INFORMATION CARD
  const placeCard = () => {

    const rect = el.getBoundingClientRect();

    const cardWidth = info.offsetWidth;

    const margin = 8;

    let x = rect.left + rect.width / 2 - cardWidth / 2;

    x = Math.max(
      margin,
      Math.min(x, window.innerWidth - cardWidth - margin)
    );

    info.style.left = `${x - rect.left}px`;

    info.style.right = "auto";
  };


  // REPOSITION WHEN BOOK IS HOVERED OR FOCUSED
  el.addEventListener("mouseenter", placeCard);
  el.addEventListener("focus", placeCard);

  window.addEventListener("resize", () => {
    if (el.matches(":hover") || el === document.activeElement) {
      placeCard();
    }
  });


  return el;
}


// DISPLAY BOOKS
function renderBooks() {

  const filtered = getFilteredBooks();

  bookshelf.innerHTML = "";

  bookCount.textContent =
    `${filtered.length} ${filtered.length === 1 ? "VOLUME" : "VOLUMES"}`;


  if (filtered.length === 0) {

    bookshelf.textContent = "";

    bookshelf.appendChild(
      makeElement(
        "p",
        "empty-message",
        "No books found. Try another search."
      )
    );

    return;
  }


  genreOrder.forEach(genre => {

    const genreBooks = filtered.filter(
      book => book.category === genre
    );

    if (genreBooks.length === 0) return;


    const shelf = makeElement("section", "genre-shelf");

    const heading = makeElement("h2", "genre-heading", genre);

    const row = makeElement("div", "bookshelf-row");


    genreBooks.forEach((book, i) => {

      row.appendChild(createBook(book, i));

    });


    shelf.append(heading, row);

    bookshelf.appendChild(shelf);

  });

}


// CATEGORY FILTER BUTTONS
filters.forEach(button => {

  button.addEventListener("click", () => {

    filters.forEach(f => f.classList.remove("active"));

    button.classList.add("active");

    selectedCategory = button.dataset.genre;

    renderBooks();

  });

});


// SEARCH
searchInput.addEventListener("input", renderBooks);


// RANDOM BOOK RECOMMENDATION
recommendButton.addEventListener("click", () => {

  const available = getFilteredBooks();


  if (available.length === 0) {

    recommendationResult.textContent =
      "No books available to recommend!";

    return;
  }


  const pick =
    available[Math.floor(Math.random() * available.length)];


  recommendationResult.textContent =
    `✦ Try reading "${pick.title}" by ${pick.author}!`;

});


// INITIAL DISPLAY
renderBooks();
