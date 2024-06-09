var LocalGames = `{
  "games": [
    {
      "name": "1v1.lol",
      "creator": "JustPlay.LOL",
      "path": "Games/files/1v1.lol.html",
      "image": "Images/Images/1v1lol.jpg"
    },
    {
      "name": "Boxing Random",
      "creator": "RHM Interactive",
      "path": "Games/files/boxingrandom.html",
      "image": "Images/Images/boxingrandom.jpg"
    },
    {
      "name": "Among Us",
      "creator": "InnerSloth",
      "path": "Games/files/amongus.html",
      "image": "Images/Images/amongus.jpg"
    },
    {
      "name": "Basketball Bros",
      "creator": "Mad Puffers",
      "path": "Games/files/basketbros.html",
      "image": "Images/Images/basketballstars.jpg"
    },
    {
      "name": "Clicker Heroes",
      "creator": "Playsaurus",
      "path": "Games/files/ClickerHeroes.html",
      "image": "Images/Images/clicker-heroes.png"
    },
    {
      "name": "Color switch",
      "creator": "Fortafy Games",
      "path": "Games/files/ColorSwitch.html",
      "image": "Images/Images/colorswitch.jpeg"
    },
    {
      "name": "Cookie clickers",
      "creator": "RedBit Games",
      "path": "Games/files/CookieClicker.html",
      "image": "Images/Images/CookieClicker.png"
    },
    {
      "name": "Coreball",
      "creator": "Gamedistribution.com",
      "path": "Games/files/Coreball.html",
      "image": "Images/Images/Coreball.png"
    },
    {
      "name": "Dadish",
      "creator": "Thomas K. Young",
      "path": "Games/files/Dadish.html",
      "image": "Images/Images/Dadish.png"
    },
    {
      "name": "Dadish 3",
      "creator": "Thomas K. Young",
      "path": "Games/files/Dadish3.html",
      "image": "Images/Images/Dadish3.png"
    },
    {
      "name": "Doodle Jump",
      "creator": "Lima Sky",
      "path": "Games/files/doodlejump.html",
      "image": "Images/Images/Doodlejump.png"
    },
    {
      "name": "Drift boss",
      "creator": "MarketJS",
      "path": "Games/files/driftboss.html",
      "image": "Images/Images/drift-boss.png"
    },
    {
      "name": "Drive mad",
      "creator": "Fancade",
      "path": "Games/files/Drive-mad.html",
      "image": "Images/Images/DriveMad.jpg"
    },
    {
      "name": "Fruit Ninja",
      "creator": "Halfbrick Studios",
      "path": "Games/files/FruitNinja.html",
      "image": "Images/Images/Fruit.jiff"
    },
    {
      "name": "Hextris",
      "creator": "Hextris",
      "path": "Games/files/hextris.html",
      "image": "Images/Images/hextris.png"
    },
    {
      "name": "Jetpack Joyride",
      "creator": "Halfbrick Studios",
      "path": "Games/files/Jetpackjoyride.html",
      "image": "Images/Images/Jetpack.png"
    },
    {
      "name": "L2F",
      "creator": "MarketJS",
      "path": "Games/files/L2f.html",
      "image": "Images/Images/L2F.jpeg"
    },
    {
      "name": "L2f2",
      "creator": "MarketJS",
      "path": "Games/files/L2f2.html",
      "image": "Images/Images/L2F2.jpeg"
    },
    {
      "name": "L2F3",
      "creator": "MarketJS",
      "path": "Games/files/L2f3.html",
      "image": "Images/Images/L2F3.jpeg"
    },
    {
      "name": "Minecraft",
      "creator": "Mojang Studios",
      "path": "Games/files/Minecraft.html",
      "image": "Images/Images/minecraft.png"
    },
    {
      "name": "MotoX3M",
      "creator": "Mad Puffers",
      "path": "Games/files/MotoX3m.html",
      "image": "Images/Images/moto-x3m.png"
    },
    {
      "name": "Slope",
      "creator": "Y8",
      "path": "Games/files/Slope.html",
      "image": "Images/Images/Slope.jiff"
    },
    {
      "name": "Soccer Random",
      "creator": "RHM Interactive",
      "path": "Games/files/SoccerRandom.html",
      "image": "Images/Images/SoccerRandom.jiff"
    },
    {
      "name": "Table Tennis World Tour",
      "creator": "Yakuto",
      "path": "Games/files/TableTennisWorldTour.html",
      "image": "Images/Images/TableTennisWorldTour.jiff"
    }
  ]
}`;
var gameObject = JSON.parse(LocalGames);
for (i in gameObject.games) {
  let elem1 = document.createElement("div");
  elem1.className = "gameframe";
  document.getElementById("gameid").appendChild(elem1);
  let elem2 = document.createElement("a");
  elem2.href = gameObject.games[i].path;
  elem1.appendChild(elem2);
  let elem3 = document.createElement("img");
  elem3.src = gameObject.games[i].image;
  elem3.alt = gameObject.games[i].name;
  elem2.appendChild(elem3);
  let elem4 = document.createElement("p");
  elem4.innerHTML = gameObject.games[i].name;
  elem2.appendChild(elem4);
  let elem5 = document.createElement("d3");
  elem5.innerHTML = gameObject.games[i].creator;
  elem2.appendChild(elem5);
}