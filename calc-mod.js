function calcMod() {
  if ( operator === '+' ){
    return xNum + yNum;
  } else if ( operator === '-' ){
    return xNum - yNum;
  } else if ( operator === '*' ){
    return xNum * yNum;
  } else{
    return xNum / yNum;
  }
}



exports.module = calcMod;
