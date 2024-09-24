function getBeta(x, y){
    var angleRad = Math.atan(y/x);
    var angleDeg = angleRad * 180 / Math.PI;
    return angleDeg;
}
  
function getBP(x, y, alpha){
    let epsilon = 180 - alpha;
    let omega = 90 - getBeta(x,y);
    let sum = 180 - epsilon - omega;
}

module.exports = {getBeta, getBP}
