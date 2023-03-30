

const today = new Date();



const monthName = today.toLocaleString('default', { month: 'long' });


const header = document.querySelector('header');

const headerText = document.createElement('h1');

headerText.textContent = `${monthName} ${today.getDate()}, ${today.getFullYear()}`;

header.appendChild(headerText);




function updateStreak() {
    let streakElement = document.getElementById("streak");
    let currentStreak = parseInt(streakElement.innerText);
    let today = new Date().toLocaleDateString();

    if (localStorage.getItem("lastDate") === today) {
      // Streak has already been updated today
      alert("You've already updated your streak today!");
      return;
    }

    let lastDate = localStorage.getItem("lastDate");
    if (lastDate === null || lastDate !== today) {
      // Reset the streak if it's a new day
      currentStreak = 0;
    }

    currentStreak++;
    streakElement.innerText = currentStreak;
    localStorage.setItem("lastDate", today);
  }