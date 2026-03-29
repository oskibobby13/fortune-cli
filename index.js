#!/usr/bin/env node

const FORTUNES = [
  "A beautiful, smart, and loving person will be coming into your life.",
  "Your hard work will pay off soon. Keep pushing forward!",
  "A thrilling time is in your immediate future.",
  "You will soon become surrounded by good friends and laughter.",
  "An unexpected event will bring you fortune and luck.",
  "Your creativity will lead you to success.",
  "A surprise waiting for you in the east.",
  "Something you lost will soon be found.",
  "Great things await you in the weeks ahead.",
  "Your smile is a treasure to all who know you."
];

const QUOTES = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "The best error is the one you don't make.", author: "Anonymous" }
];

const JOKES = [
  { setup: "Why do programmers always mix up Halloween and Christmas?", punchline: "Because Oct 31 = Dec 25" },
  { setup: "How many programmers does it take to change a light bulb?", punchline: "None, that's a hardware problem" },
  { setup: "Why was the JavaScript developer sad?", punchline: "Because he didn't Node how to Express himself" },
  { setup: "What do you call a fake noodle?", punchline: "An impasta" },
  { setup: "Why do CSS developers make good artists?", punchline: "Because they have a lot of flex" }
];

const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  magenta: '\x1b[35m'
};

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fortune() {
  const f = random(FORTUNES);
  console.log(`${COLORS.cyan}🔮 ${COLORS.bright}Your Fortune:${COLORS.reset}`);
  console.log(`   "${COLORS.yellow}${f}${COLORS.reset}"\n`);
}

function quote() {
  const q = random(QUOTES);
  console.log(`${COLORS.cyan}💬 ${COLORS.bright}Random Quote:${COLORS.reset}`);
  console.log(`   "${COLORS.yellow}${q.text}${COLORS.reset}"`);
  console.log(`   — ${COLORS.green}${q.author}${COLORS.reset}\n`);
}

function joke() {
  const j = random(JOKES);
  console.log(`${COLORS.magenta}😂 ${COLORS.bright}Random Joke:${COLORS.reset}`);
  console.log(`   ${j.setup}`);
  console.log(`   ${COLORS.green}${j.punchline}${COLORS.reset}\n`);
}

function all() {
  fortune();
  quote();
  joke();
}

const args = process.argv.slice(2);
const cmd = args[0] || 'all';

switch(cmd) {
  case 'fortune': case 'f': fortune(); break;
  case 'quote': case 'q': quote(); break;
  case 'joke': case 'j': joke(); break;
  case 'all': case 'a': case undefined: all(); break;
  case 'help': case 'h':
    console.log(`${COLORS.cyan}Usage: fortune [command]${COLORS.reset}`);
    console.log('  fortune, f   - Show a random fortune');
    console.log('  quote, q     - Show a random quote');
    console.log('  joke, j      - Show a random joke');
    console.log('  all, a       - Show all of the above (default)');
    console.log('  help, h      - Show this help');
    break;
  default:
    console.log(`Unknown command: ${cmd}. Run 'fortune help' for usage.`);
    process.exit(1);
}