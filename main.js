// Task #0

const $arenas =  document.querySelector('.arenas');
const $randomBtn = document.querySelector('.button');

const $player1 = {
                  player: 1,
                  name: 'Subzero',
                  hp: 100,
                  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
                  attack: function(name){
                    console.log(name + ' Fight....')
                  }
};

const $player2 = {
                  player: 2,
                  name: 'Kitana',
                  hp: 100,
                  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
                  attack: function(name){
                    console.log(name + ' Fight....')
                  }
};


// ## Task #1

function createElement(tag, className){
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag
}



function createPlayer(playerObj){
  const $player =  createElement('div', 'player'+ playerObj.player);
  const $progressbar = createElement('div', 'progressbar');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $character = createElement('div', 'character');
  const $img = createElement('img');

  $life.style.width = playerObj.hp + '%';
  $name.innerText = playerObj.name;
  $img.src = playerObj.img;

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $character.appendChild($img);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
 
  return $player
};

  $arenas.appendChild(createPlayer($player1));
  $arenas.appendChild(createPlayer($player2));
  
  // ## Task #2
  function getRundomNumber() {
   return Math.ceil(Math.random() * 20)
  }
  

function changeHp(player) {
 
  const playerLife = document.querySelector('.player'+ player.player + ' .life');
 
  player.hp -= getRundomNumber();
    playerLife.style.width = player.hp + '%';
    if (player.hp < 0) {
        playerLife.style.width =  0 + '%';
        $arenas.appendChild(playerWin(getWinPlayerName ())); //player.name
        $randomBtn.disabled = true;
      }
}


  function playerWin(name) {
    const $looseTitle = createElement('div', 'loseTitle');
    $looseTitle.innerText = name + ' WINS!!!';

    return $looseTitle;
  }
  
  // Task #3 (*)
function getWinPlayerName (){
  if($player1.hp > $player2.hp){
    const winerName = $player1.name

    return winerName
  }

  if($player1.hp < $player2.hp){
    const winerName = $player2.name
    return winerName
  }
}
 

 $randomBtn.addEventListener('click', function(){
  
  changeHp ($player1);
  changeHp ($player2);
  
});