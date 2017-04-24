var answer = '';

function calcMod(x, y, op) {

  if ( operatorButton === '+' ){
    return (answer = (xNum + yNum));
  } else if ( operatorButton === '-' ){
    return (answer = (xNum - yNum));
  } else if ( operatorButton === '*' ){
    return (answer = (xNum * yNum));
  } else{
    return (answer = (xNum / yNum));
  }
}

exports.module = calcMod;
