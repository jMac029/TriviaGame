// All the Data for the Game to function

// Global Variables
let playerName = "player 1";
let correct = 0;
let inCorrect = 0;
let counter;
let timer;
let score = 0;
let response;
let responses = [];


// Array of Question Objects
var questionsArray = [
	{
		question: "The standard markup language for creating web pages and web applications.",
		responses: [
				   "What is Hypertext Markup Language?",
				   "What is Hyperthermal Motion Liquid?",
				   "What is Happy Trails Meet Later?",
				   "Who is Harrison Toad Mary Louie?"
				   ],
		correct: "What is Hypertext Markup Language?",
		category: "HTML",
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

];