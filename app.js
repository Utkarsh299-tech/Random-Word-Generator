import {config} from './env.js';
var mykey = config.key;
const body = document.querySelector('body');
const button = document.querySelector('button');
const word = document.createElement('h1');
document.querySelector(".d-flex").appendChild(word);
const definition = document.createElement('p');
document.querySelector(".d-flex").appendChild(definition);

const randomWord = () => {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
    .then(response => {
        return response.json();
    })
    .then(response => {
        word.textContent = response
        randomDefinition(word);
    })
    .catch(err => {
        console.log(err);
        return "No Word Available"
    });
}

const randomDefinition = (word) => {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word.textContent}?key=${mykey}`)
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log(response[0].shortdef[0]);
        definition.textContent = "Definition: " + response[0].shortdef[0];
    })
    .catch(err => {
      definition.textContent = "No definition";
      document.querySelector(".d-flex").appendChild(definition);
      console.log(err);
    })

}

button.addEventListener('click', function(){
    randomWord();
})

// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}
// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});