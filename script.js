// New Year quotes array
const quotes = [
    "Cheers to a new year and another chance for us to get it right.",
    "This is a new year. A new beginning. And things will change.",
    "May your troubles be less, and your blessings be more, and nothing but happiness come through your door.",
    "Let’s make this year’s resolution to be happy!",
    "Wishing you a year full of joy, love, and success!",
    "May the year ahead bring you success, joy, and happiness."
];

// Toggle between dark and light modes
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const theme = document.body.classList.contains('light-mode') ? '🌙' : '🌞';
    document.getElementById('theme-toggle').textContent = theme;
});

// Display message and random quote
function showMessage() {
    const name = document.getElementById('nameInput').value;
    if (name.trim()) {
        document.getElementById('message').textContent = `Happy New Year, ${name}!`;
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('quote').textContent = `"${randomQuote}"`;
    } else {
        alert('Please enter your name!');
    }
}
