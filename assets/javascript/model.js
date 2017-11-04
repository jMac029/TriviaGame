// All the Data for the Game to function

// Global Variables
let playerName = "";
let correct = 0;
let inCorrect = 0;
let counter = 0;
let timer = 0;
let clockRunning = false;
let setInterval;
let intervalId;
let score = 0;
let response;
let responses = [];
let usedQuestions = [];


// Array of Question Objects
let questionsArray = [
	{
		question: "The standard markup language for creating web pages and web applications.",
		responses: [
				   "What is Hypertext Markup Language?",
				   "What is Hyperthermal Motion Liquid?",
				   "What is Happy Trails Meet Later?",
				   "Who is Harrison Toad Mary Louie?"
				   ],
		correct: "What is Hypertext Markup Language?",
		category: "HTML & CSS",
		value: 100
	},
	{
		question: "English engineer and computer scientist, best known as the inventor of the World Wide Web.",
		responses: [
					"Who is Bond, James Bond?",
					"Who is John Lennon?",
					"Who is Tim Berners-Lee?",
					"Who is Charles Philip Arthur George?"
					],
		correct: "Who is Tim Berners-Lee?",
		category: "History of the Web",
		value: 200
	},
	{
		question: "The Year when HTML5 was Officially Released.",
		responses: [
					"What is 2005?",
					"What is 1999?",
					"What is 2011?",
					"What is 2014?"
					],
		correct: "What is 2014?",
		category: "HTML",
		value: 300
	},
	{
		question: "The father of theoretical computer science and artificial intelligence.",
		responses: [
					"Who is Bill Gates?",
					"Who is Alan Turing?",
					"Who is Mark Zuckerberg?",
					"Who is Steve Wozniak?"
					],
		correct: "Who is Alan Turing?",
		category: "Computer Science",
		value: 400
	},
	{
		question: "Published the first algorithm intended to be carried out by such a machine. Also called The First Computer Programmer.",
		responses: [
					"Who is Ada Lovelace?",
					"Who is Steve Jobs?",
					"Who is Noah Wylie?",
					"Who is Mary Somerville?"
					],
		correct: "Who is Ada Lovelace?",
		category: "Computer Science",
		value: 500
	},
	{
		question: "The very first website.",
		responses: [
					"What is apple.com?",
					"What is www.com?",
					"What is nasa.gov?",
					"What is info.cern.ch?"
					],
		correct: "What is info.cern.ch?",
		category: "History of the Web",
		value: 500
	},
	{
		question: "A style sheet language used for describing the presentation of a document written in a markup language.",
		responses: [
					"What is Extensible Markup Language(XML)?",
					"What is Cascading Style Sheets(CSS)?",
					"What is XML User Interface Language?",
					"What is Syntactically Awesome Stylesheets(SASS)?"
					],
		correct: "What is Cascading Style Sheets(CSS)?",
		category: "HTML & CSS",
		value: 100
	},
	{
		question: "Alongside HTML and CSS, ________ is one of the three core technologies of World Wide Web content production.",
		responses: [
					"What is JavaScript?",
					"What is Java?",
					"What is Python?",
					"What is Swift?"
					],
		correct: "What is JavaScript?",
		category: "WWW",
		value: 200
	},
	{
		question: "The first popular graphical Web browser.",
		responses: [
					"What is Netscape?",
					"What is Firefox?",
					"What is Internet Explorer?",
					"What is NCSA Mosaic?"
					],
		correct: "What is NCSA Mosaic?",
		category: "History of the Web",
		value: 400
	},
	{
		question: "Creator of JavaScript and co-founder of the Mozilla Foundation.",
		responses: [
					"Who is Marc Andreessen?",
					"Who is Brendan Eich?",
					"Who is Douglas Crockford?",
					"Who is Vanilla Ice?"
					],
		correct: "Who is Brendan Eich?",
		category: "WWW",
		value: 500
	},
	{
		question: "Computer programs that are designed by making them out of objects that interact with one another.",
		responses: [
					"What is Data Driven Programming?",
					"What is Programming?",
					"What is Object-oriented programming?",
					"What is Functional Programming?"
					],
		correct: "What is Object-oriented programming?",
		category: "Computer Science",
		value: 300
	},
	{
		question: "A decentralized software development model that encourages open collaboration.",
		responses: [
					"What is Open-Source model?",
					"What is Peer Programming?",
					"What is Apache Hadoop?",
					"What is Software Licensing?"
					],
		correct: "What is Open-Source model?",
		category: "Computer Science",
		value: 200
	}


];