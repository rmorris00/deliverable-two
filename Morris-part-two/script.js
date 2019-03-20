
let eventType = prompt('what type of event are you going to?');
let tempFahr = prompt("What is the temperature?");


if (eventType === 'casual' && tempFahr < 54) {
  console.log('Since it is '+ tempFahr + ' degrees and you are going to a '+ eventType +' event, wear something comfy and a coat.');
} else if (eventType === 'casual' && tempFahr >= 54 && tempFahr <= 69) {
  console.log('Since it is '+ tempFahr + ' degrees and you are going to a '+ eventType +' event, wear something comfy and a jacket.');
} else if (eventType === 'casual' && tempFahr > 70) {
  console.log('Since it is '+ tempFahr + ' degrees and you are going to a '+ eventType +' event, wear something comfy and no jacket.');
} else if (eventType === 'semi-formal' && tempFahr < 54) {
  console.log('Since it is '+ tempFahr + ' degrees and you are going to a '+ eventType +' event, wear a polo and a coat.');
} else if (eventType === 'semi-formal' && tempFahr >= 54 && tempFahr <= 69) {
  console.log('Since it is '+ tempFahr + ' degrees and you are going to a '+ eventType +' event, wear a polo and a jacket.');
} else if (eventType === 'semi-formal' && tempFahr > 70) {
  console.log('Since it is '+ tempFahr + ' degrees and you are going to a '+ eventType +' event, wear a polo and no jacket.');
} else if (eventType === 'formal' && tempFahr < 54) {
  console.log('Since it is '+ tempFahr + ' degrees and you are going to a '+ eventType +', wear a suit and a coat.');
} else if (eventType === 'formal' && tempFahr >= 54 && tempFahr <= 69) {
  console.log('Since it is '+ tempFahr + ' degrees and you are going to a '+ eventType +', wear a suit and a jacket.');
} else if (eventType === 'formal' && tempFahr > 70) {
  console.log('Since it is '+ tempFahr + ' degrees and you are going to a '+ eventType +', wear a suit and no jacket.');
}
