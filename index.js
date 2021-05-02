var quotes=[ 'Be creArtive',
'Painting is silent poetry.',
'The earth without art is just eh.',
'This is art (If you want it to be).',
'You can if you think you can.',
'The magic is in you.',
'Create things you wish existed.',
'Life is art, live yours in color.',
'Black Art Matter.',
'Doing strange things in the name of art.',
'Strong women don\’t have attitudes. They have standards.',
'Find comfort in the chaos.',
'Messy bun and getting stuff done.',
'Life is short. Make every hair flip count.',
'No pressure, no diamonds.',
'You couldn’t handle me even if I came with instructions.',
'Eat, pray, slay.',
'I can resist everything, except temptation.',
'X in the box, cause ain\’t nobody checking me.',
'There\’s always a wide side to an innocent face.',
'Kinda classy, kinda hood.',
'I love the sound you make when you shut up.',
'You were my cup of tea but I drink champagne now.',
'Twenty-four-hour champagne diet.',
'If you listen closely, you can hear me not caring.',
'You’re a bad idea but I like bad ideas.',
'I got 99 problems but a whip ain’t one.',
'Do me a favor, pick me up, take me out later',
'Seek respect, not attention. It lasts longer.',
'I don’t make mistakes, I date them.',
'Calm down. We’ll make it look like an accident.',
'My life feels like a test I didn’t study for.',
'I got a good heart but this mouth.',
'There’s no “we” in fries.',
'50% Savage, 50% Sweetheart.',
'Didn’t they tell you I was a savage?',
'Good vibes or good bye.',
'I’m probably the reason your girl isn’t answering you.',
'We rise by lifting others.',
'You can’t do epic shit with basic people.',
'With nights like these, who needs the days?',
'Trouble never looked so fine.',
'I am a kind person. Just don’t push the bitch button.',
'I never craved attention until I had hers.',
'You just put your arms around me and I’m home.',
'My prince charming is a princess.',
'Sorry, I’m late; I didn’t want to come.',
'The course of true love never did run smooth.',
'And though she is but little, she is fierce.',
'If I was a writer I’d have a better Instagram bio quote.',
]

function newQuote(){
  var randomNumber= Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplayArea').innerHTML= quotes[randomNumber];
}

document.addEventListener("keydown", function(event){
    generateQuote(event.key);
});

function generateQuote(key){
  switch (key){
    case "g":
      newQuote();
      break;

    case "c":
      copyDivToClipboard();
      break;
    default: console.log(key);

  }
}

function copyDivToClipboard()
{
  var range = document.createRange();
  range.selectNode(document.getElementById('quoteDisplayArea'));

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  }
