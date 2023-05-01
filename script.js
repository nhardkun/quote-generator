const quotes = [
	{
		quote: "The more KAPE you take, the more chances that you'll be awake.",
		author: "Barack Obama"
	},
	{
		quote: "Don't stop when you're tired, stop when you're done.",
		author: "Jhonny Sins"
	},
	{
		quote: "Sa likod ng bawat tagumpay, maraming tasa ng kape ang naging karamay.",
		author: "Will Smith"
	},
	{
		quote: "Wala kang magagawa kung wala kang gagawin.",
		author: "Confucius"
	},
	{
		quote: "Simple lang ang buhay, piliin mo na lagi kang masaya.",
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
