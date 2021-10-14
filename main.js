// ## Task #0

const $player1 = {name: 'Subzero',
                  hp: 100,
                  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
                  weapon: ['wp1', 'wp2', 'wp3', 'wp4'],
                  attack: function(){
                    console.log($player1.name + ' Fight....')
                  }
};

const $player2 = {name: 'Kitana',
                  hp: 80,
                  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
                  weapon: ['wp1', 'wp2', 'wp3', 'wp4'],
                  attack: function(){
                    console.log($player2.name + ' Fight....')
                  }
};


// ## Task #1

// function createPlayer(){
//   const player1 = document.createElement('div');
//   player1.classList.add('player1');
//   document.querySelector('.root').appendChild(player1);

//   const progressbar = document.createElement('div');
//   progressbar.classList.add('progressbar');
//   document.querySelector('.player1').appendChild(progressbar);

//   const life = document.createElement('div');
//   life.classList.add('life');
//   life.style.width = '100%';
//   document.querySelector('.progressbar').appendChild(life);

//   const name = document.createElement('div');
//   name.classList.add('name');
//   document.querySelector('.progressbar').appendChild(name);
//   name.innerText = $player1.name;

//   const character = document.createElement('div');
//   character.classList.add('character');
//   document.querySelector('.player1').appendChild(character);

//   const img = document.createElement('img');
//   document.querySelector('.character').appendChild(img);
//   img.src = 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif';
// }


// ## Task #2

// function createPlayer(classname, playerName, hp){
 
//   const div = document.createElement('div');
//   div.classList.add(classname);
//   document.querySelector('.arenas').appendChild(div);

//   const progressbar = document.createElement('div');
//   progressbar.classList.add('progressbar');
//   document.querySelector('.' + classname).appendChild(progressbar);

//   const life = document.createElement('div');
//   life.classList.add('life');
//   life.style.width = hp + '%';
//   document.querySelector('.' + classname + ' ' + '.progressbar').appendChild(life);

//   const name = document.createElement('div');
//   name.classList.add('name');
//   document.querySelector('.' + classname + ' ' + '.progressbar').appendChild(name);
//   name.innerText = playerName;

//   const character = document.createElement('div');
//   character.classList.add('character');
//   document.querySelector('.' + classname).appendChild(character);

//   const img = document.createElement('img');
//   document.querySelector('.' + classname + ' ' + '.character').appendChild(img);
//   img.src = 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif'

// }


// createPlayer('player1', 'Scorpion', 80);
// createPlayer('player2', 'Nadya', 100);






// Task #3 (*)

function createPlayer(classname, player){
  const div = document.createElement('div');
  div.classList.add(classname);
  document.querySelector('.arenas').appendChild(div);

  const progressbar = document.createElement('div');
  progressbar.classList.add('progressbar');
  document.querySelector('.' + classname).appendChild(progressbar);

  const life = document.createElement('div');
  life.classList.add('life');
  life.style.width = player.hp + '%';
  document.querySelector('.' + classname + ' ' + '.progressbar').appendChild(life);

  const name = document.createElement('div');
  name.classList.add('name');
  document.querySelector('.' + classname + ' ' + '.progressbar').appendChild(name);
  name.innerText = player.name;

  const character = document.createElement('div');
  character.classList.add('character');
  document.querySelector('.' + classname).appendChild(character);
  
  const img = document.createElement('img');
  document.querySelector('.' + classname + ' ' + '.character').appendChild(img);
  img.src = player.img;

}


createPlayer('player1', $player1);
createPlayer('player2', $player2);
