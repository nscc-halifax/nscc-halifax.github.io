class Typing {
  //Constructor
  constructor(array) {
    this.words = array;
    this.state_direction = 'forward';
    this.state_word = 0;
    this.state_caracter = 0;
  }
  //Animate function
  animateWords() {
    if (this.state_direction == 'forward') {
      let letter = this.words[this.state_word].charAt(this.state_caracter);
      console.log(letter);
      document.querySelector('.dinamic-words').innerHTML += letter;
      this.state_caracter++;

      if (this.state_caracter == this.words[this.state_word].length) {
        this.state_direction = 'backword';
      }
    }
    if (this.state_direction == 'backword') {
      let word = this.words[this.state_word];
      let sub_word = word.substr(0, this.state_caracter);
      this.state_caracter--;
      document.querySelector('.dinamic-words').innerHTML = sub_word;

      if (this.state_caracter == -1) {
        this.state_word++;
        this.state_direction = 'forward';
      }
    }
    if (this.state_word == this.words.length) this.state_word = 0;
  }

  animate() {
    setInterval(this.animateWords.bind(this), 120);
  }
}

const typing = new Typing(['Developer. ', 'Designer. ', 'Programmer. ']);
typing.animate();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
