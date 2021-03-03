let meal;
switch (meal){

    case 'breakfast':
        console.log('coffee+bagle');
    case 'lunch':
        console.log('sandwich');
    case 'dinner':
        console.log('pasta');
    default:
        console.log('no food');
}



function tipFunctions(billValue){
    switch (billValue) {
      case billValue >= 30 && billValue <= 300:
        console.log(`The bill was ${billValue}, the tip was ${billValue * .15}, and the total value ${billValue + (billValue * .15)}`)
        break;
      default:
        console.log(`The bill was ${billValue}, the tip was ${billValue * .2}, and the total value ${billValue + (billValue * .2)}`)
    }
  }


  function calcAvg(n1, n2, n3) {
      const sum = Number(n1) + Number(n2) + Number(n2);
      const average = sum / 3;
      return average;
  }
  function checkWinner() {
      const averageNets = calcAvg(44, 23, 71);
      const averageKnicks = calcAvg(65, 54, 49);
      if (averageNets > averageKnicks) {
          console.log(`Nets team beat Knicks team with a average of ${averageNets} vs ${averageKnicks}`);
  
      } else if (averageKnicks > averageNets) {
          console.log(`Knicks team beat to Nets team with a average of ${averageKnicks} vs ${averageNets}`);
  
      } else {
          console.log('Try again')
      }
  }
  checkWinner();
