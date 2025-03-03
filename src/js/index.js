let time = new Date();
let year = time.getFullYear();
let month = time.getMonth() + 1;
let day = time.getDate();
let date1 = new Date("12/13/2024");
let date2 = new Date(`${month}/${day}/${year}`);

let utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
let utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

let timeDiff = Math.abs(utc2 - utc1);

let daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
const dateday = document.getElementById("dateday");
dateday.innerHTML = "សរុប: " + daysDiff + " ថ្ងៃ";
const spantime = document.getElementById("spantime");
spantime.innerHTML = daysDiff + "ថ្ងៃ";
function getDateDifference(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  if (d1 > d2) {
    [d1, d2] = [d2, d1];
  }

  let years = d2.getFullYear() - d1.getFullYear();
  let months = d2.getMonth() - d1.getMonth();
  let days = d2.getDate() - d1.getDate();

  if (days < 0) {
    months -= 1;
    let prevMonth = new Date(d2.getFullYear(), d2.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

const diff = getDateDifference(date1, date2);

const date = document.getElementById("date");
if (diff.years == 0) {
  date.innerHTML = `${diff.months} ខែ ${diff.days} ថ្ងៃ`;
} else {
  date.innerHTML = `${diff.years} ឆ្នាំ ${diff.months} ខែ ${diff.days} ថ្ងៃ`;
}

function calculateAgeInYears(birthdate) {
  const birthDate = new Date(birthdate);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

const birthdatehe = "2009-01-18";
const birthdateshe = "2009-06-29";
const heage = document.getElementById("heage");
heage.innerHTML = calculateAgeInYears(birthdatehe) + " ឆ្នាំ";
const sheage = document.getElementById("sheage");
sheage.innerHTML = calculateAgeInYears(birthdateshe) + " ឆ្នាំ";
let images = [
  "https://raw.githubusercontent.com/sovannarot/borey/main/assets/img/IMG_20250302_231239.jpg",
  "https://raw.githubusercontent.com/sovannarot/borey/main/assets/img/IMG_20250303_111835.jpg",
  "https://raw.githubusercontent.com/sovannarot/borey/main/assets/img/IMG_20250303_111848.jpg",
  "https://raw.githubusercontent.com/sovannarot/borey/main/assets/img/IMG_20250303_111900.jpg",
];
let index = 0;
let isFlipped = false;

function flipImage() {
  let flipper = document.querySelector(".flipper");
  let frontImage = document.getElementById("frontImage");
  let backImage = document.getElementById("backImage");

  isFlipped = !isFlipped;
  flipper.classList.toggle("flipped");

  // Delay image change after the flip starts
  setTimeout(() => {
    index = (index + 1) % images.length;

    let fadingImage = isFlipped ? backImage : frontImage;

    // Smooth fade effect
    fadingImage.style.opacity = "0";

    setTimeout(() => {
      fadingImage.src = images[index]; // Change image
      fadingImage.style.opacity = "1"; // Fade in smoothly
    }, 300); // Change image when fully faded
  }, 500); // Matches flip animation timing
}

// Auto flip every 5 seconds
setInterval(flipImage, 5000);
