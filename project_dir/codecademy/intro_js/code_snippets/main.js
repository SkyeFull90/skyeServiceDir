function hungerLevel() {
  let hungerLevel = 7;
    if (hungerLevel > 7) {
      console.log('Time to eat!');
    }
    else {
      console.log('Let\'s eat later.');
    }
}
hungerLevel();

function season() {
  let season = 'summer';
    if (season === 'spring') {
      console.log('It\'s spring! The trees are budding!');
    } else if(season === 'winter') {
      console.log('It\'s winter! Everything is covered in snow.');
    } else if(season === 'fall') {
      console.log('It\'s fall! Leaves are falling!');
    } else if(season === 'summer') {
      console.log('It\'s summer! It\'s so hot!');
    }
    else {
      console.log('It\'s not summer.');
    }
}