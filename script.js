const quotes = [
	{
		quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
		author: "Winston Churchill"
	},
	{
		quote: "The only way to do great work is to love what you do.",
		author: "Steve Jobs"
	},
	{
		quote: "Believe you can and you're halfway there.",
		author: "Theodore Roosevelt"
	},
	{
		quote: "It does not matter how slowly you go as long as you do not stop.",
		author: "Confucius"
	},
	{
		quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
		author: "Roy T. Bennett"
	}
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");

function getRandomQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randomIndex];
}

function displayQuote() {
	const randomQuote = getRandomQuote();
	quote.textContent = randomQuote.quote;
	author.textContent = "- " + randomQuote.author;
}

displayQuote();

newQuote.addEventListener("click", displayQuote);
