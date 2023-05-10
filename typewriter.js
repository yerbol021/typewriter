const sentence = "hello there from lighthouse labs\n";

for (let i = 0; i < sentence.length; i ++) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(sentence[i]);
  }, i*50) 
}