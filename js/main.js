let quotes = [
  {
    quote: 'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde',
  },
  {
    quote:
      'Two things are infinite: the universe and human stupidity; and I’m not sure about the universe.',
    author: 'Albert Einstein',
  },
  { quote: 'So many books, so little time.', author: 'Frank Zappa' },
  {
    quote: 'A room without books is like a body without a soul.',
    author: 'Marcus Tullius Cicero',
  },
  {
    quote:
      'In three words I can sum up everything I’ve learned about life: it goes on.',
    author: 'Robert Frost',
  },
  {
    quote: 'Life is what happens when you’re busy making other plans.',
    author: 'John Lennon',
  },
  { quote: 'Get busy living or get busy dying.', author: 'Stephen King' },
  { quote: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
  {
    quote: 'Life is really simple, but we insist on making it complicated.',
    author: 'Confucius',
  },
  {
    quote:
      'Your time is limited, so don’t waste it living someone else’s life.',
    author: 'Steve Jobs',
  },
  {
    quote: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    quote: 'You miss 100% of the shots you don’t take.',
    author: 'Wayne Gretzky',
  },
  {
    quote: 'Life is short, and it is up to you to make it sweet.',
    author: 'Sarah Louise Delany',
  },
  {
    quote:
      'The purpose of life is not to be happy. It is to be useful, honorable, and to have it make some difference that you have lived and lived well.',
    author: 'Ralph Waldo Emerson',
  },
  {
    quote:
      'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.',
    author: 'Buddha',
  },
  {
    quote: 'Life is what we make it, always has been, always will be.',
    author: 'Grandma Moses',
  },
  {
    quote:
      'The biggest adventure you can take is to live the life of your dreams.',
    author: 'Oprah Winfrey',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    quote:
      'In the end, it’s not the years in your life that count. It’s the life in your years.',
    author: 'Abraham Lincoln',
  },
  {
    quote: 'The best way to predict the future is to invent it.',
    author: 'Alan Kay',
  },
  {
    quote: 'The only impossible journey is the one you never begin.',
    author: 'Tony Robbins',
  },
  {
    quote:
      'You have within you right now, everything you need to deal with whatever the world can throw at you.',
    author: 'Brian Tracy',
  },
  {
    quote: 'Believe you can and you’re halfway there.',
    author: 'Theodore Roosevelt',
  },
  {
    quote: 'Act as if what you do makes a difference. It does.',
    author: 'William James',
  },
  {
    quote:
      'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston S. Churchill',
  },
  {
    quote:
      'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    author: 'Ralph Waldo Emerson',
  },
  {
    quote:
      'The only limit to our realization of tomorrow will be our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    quote: 'You are never too old to set another goal or to dream a new dream.',
    author: 'C.S. Lewis',
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
];

let usedIndexes = [];

function generateQuote() {
  if (usedIndexes.length >= quotes.length) {
    console.log('تم عرض جميع الاقتباسات');
    usedIndexes = [];
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (usedIndexes.includes(randomIndex));

  usedIndexes.push(randomIndex);

  document.getElementById('quoteOutput').innerHTML = quotes[randomIndex].quote;
  document.getElementById('authorOutput').innerHTML =
    '--' + quotes[randomIndex].author;

  document.getElementById('authorOutput').style.visibility = 'visible';
  document.getElementById('quoteOutput').style.visibility = 'visible';
}
