// from the genuary generative poem
// https://www.datamuse.com/api/
// using other data sets
const isAlpha = str => /^[a-zA-Z]*$/.test(str);

// great regex is alpha for string check
// the api fails on 
let poemStart;
let sl =0
let sz =20
let foo = new p5.Speech();
let sent = "";
let ifollowers = ['am','was','did','think','play','though','played','cry','say','said']


function setup() {
  cnv =createCanvas(600, 600);
  cnv.parent("sketch-holder");
  background(0);
  poemStart = createInput('a');
  poemStart.changed(writePoem);
  createButton("generate").mousePressed(writePoem)
  fill(255)
  textSize(sz)
 
  
}

function writePoem() {
  // just runs once to start the poem
   background(0);
  // clear sentence for speak
  sent = "";
  sl =0
  
  text(poemStart.value(),400, sl*sz+sz)
  // build the sentence to speak
  sent += (poemStart.value())+" ";
  
  print("bing")
  sl++

  // 'i' does not have a frequent follower word list so I made my own

  if(poemStart.value()== 'i' || poemStart.value== 'I'){
    // if it is i then pick a follower
    let f = random(ifollowers)
    // print it to screeen and add it to string
    text(f,400, sl*sz+sz)
    //build the sentence to speak
    sent += (f)+" ";
  
    // increase sentence length
    sl++
    // then do the process on than one
    getWordList(f)
    

  } else{
  getWordList(poemStart.value())
  }
}

function getWordList(prompt) {
  // getting next word frequent followeres
  // this promise structure ensures that showword function will not run before data is retrieved from api
  loadJSON(`https://api.datamuse.com/words?lc=${prompt}&sp=*`, showword);
}

function showword(words){
  //print(words)
  let choice = random(words)
  print(choice.word)
  text(choice.word,400, sl*sz+sz)
  sent += (choice.word)+" "
  sl++
  if (sl <20&& choice.word != "." && choice.word !='i'  && isAlpha(choice.word) ) {
    getWordList(choice.word.trim())
    
  }else{
    foo.speak(sent)
  }
}