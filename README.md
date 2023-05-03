# frequent followers

a text generation script that creates sentences from a prompt

It uses https://www.datamuse.com/api/

loadJSON(`https://api.datamuse.com/words?lc=${prompt}&sp=*`, showword);

lc	Left context: An optional hint to the system about the word that appears immediately to the left of the target word in a sentence.

The simple algorithm then picks a random word from that list  and repeats the process

https://greggelong.github.io/frequentFollowers