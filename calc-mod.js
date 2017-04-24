var answer = '';

function calcMod(x, y, op) {

  if ( operator === '+' ){
    return (answer = (xNum + yNum));
  } else if ( operator === '-' ){
    return (answer = (xNum - yNum));
  } else if ( operator === '*' ){
    return (answer = (xNum * yNum));
  } else{
    return (answer = (xNum / yNum));
  }
}

exports.module = calcMod;
