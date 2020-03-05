// 骰子函數 dice(x,y)=xDy
function dice(x,y) {
    let result = 0 ;
    for(count=0;count<x;count++){
        result+=Math.floor(Math.random()*y)+1;
    }
    return result;
};
// 物件加總
function sum( obj ) {
    var keyInSum = 0;
    for( let el in obj ) {
        if( obj.hasOwnProperty( el ) ) {
        keyInSum += parseInt( obj[el] );
        }
    }
    return keyInSum;
}
// 物件乘總
function mult( obj ) {
    var keyInMult =1;
    for( let el in obj ) {
        if( obj.hasOwnProperty( el ) ) {
        keyInMult *= parseInt( obj[el] );
        }
    }
    return keyInMult;
}