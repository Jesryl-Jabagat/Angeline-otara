// Sample data (you can replace this with actual dynamic data)
const songs = [
    "Pantropiko - Bini",
    "Salamin, Salamin - Bini",
    "Palagi - Tj Monterde",
    "Raining In Manila - Lola Amour",
    "Pasilyo - SunKissed Lola",
    "Gusto ft. AI - Zach Tabudlo",
    "Saan - Maki",
    "711 - TONEEJAY",
    "Pano - Zach Tabudlo",
    "Pagsamo - Arthur Nery",
    "Gento - SB19",
    "Sining - Dionela ft. Jay R",
    "Museo - Eliza Maturan",
    "Maybe This Time - Sarah Geronimo",
    "Palagi - TJ Monterde",
    "Blue - Yung Kai",
    "Dilaw - Maki",
    "I Need You - Sam Mangubat",
    "Hiling - Jenzen Guino",
    "Sariling Mundo - TJ Monterde",
    "ERE - Juan Karlos",
    "Biyahe - Josh Santana",
    "Tadhana - KZ Tandingan",
    "Randomantic - James Reid",
    "Muli - Ace Banzuelo",
    "Oksihina - Dionela",
    "This Na Malambing - Ryannah J, Nateman",
    "Dito Ka Lang - Moira Dela Torre",
    "Tingin - Cup of Joe, Janine Tenoso",
    "Ako Naman Muna - Angela Ken",
    "Kung Alam Mo Lang - Bandang Lapis"
];



const searchInput = document.getElementById("search-input");
const suggestionsBox = document.getElementById("suggestions");
const searchButton = document.getElementById("search-button");


function filterSongs(query) {
    if (query.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }

    const filteredSongs = songs.filter(song =>
        song.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredSongs.length > 0) {
        suggestionsBox.style.display = "block";
        suggestionsBox.innerHTML = filteredSongs
            .map(song => `<div>${song}</div>`)
            .join("");
    } else {
        suggestionsBox.style.display = "none";
    }
}

// Event listener for input to filter songs as you type
searchInput.addEventListener("input", (event) => {
    const query = event.target.value;
    filterSongs(query);
});

// Event listener to hide suggestions if the user clicks outside
document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-section")) {
        suggestionsBox.style.display = "none";
    }
});

// If the user selects a suggestion, put it in the search bar
suggestionsBox.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "div") {
        searchInput.value = event.target.textContent;
        suggestionsBox.style.display = "none";
    }
});

// Optional: Trigger the search button to do something when clicked
searchButton.addEventListener("click", () => {
    alert(`Searching for: ${searchInput.value}`);
});



const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
    
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active'); 
            mobileMenuBtn.classList.toggle('active'); 
            mobileMenuBtn.classList.toggle('closed'); 
        });




        
const uniqueModalSign = document.getElementById("unique-signup-modal");
const customSignupButton = document.querySelector(".custom-signup-btn");
const uniqueCloseBtn = document.querySelector(".unique-close-btn");
const uniqueModalLog = document.getElementById("unique-login-modal");


customSignupButton.addEventListener("click", () => {
    uniqueModalSign.style.display = "block";
});


uniqueCloseBtn.addEventListener("click", () => {
    uniqueModal.style.display = "none";
});


window.addEventListener("click", (event) => {
    if (event.target === uniqueModalSign) {
        uniqueModalSign.style.display = "none";
    }
});


const uniqueSignupForm = document.getElementById("unique-signup-form");
uniqueSignupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Handle form submission (e.g., AJAX request, form validation, etc.)
    alert("Account created successfully!");
    uniqueModal.style.display = "none"; // Close the modal after submission
});

function log(){
    uniqueModalLog.style.display = "block";
    uniqueModalSign.style.display = "none";
}
function sign(){
    uniqueModalLog.style.display = "none";
    uniqueModalSign.style.display = "block";
}


window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach((section) => {
      const link = document.querySelector(`.nav-links a[href="#${section.id}"]`);
      if (link) { 
        link.classList.toggle("active", 
          window.scrollY >= section.offsetTop - 50 
          && window.scrollY < section.offsetTop + section.offsetHeight);
      }
    });
  });
  