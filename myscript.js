function hap(a,b){
    var result = 0;
    if(a<b){
        for(var i=a;i<b;i++){
            result +=i;
        }
        return result;
    }
    else{
        for(var i=b;i<a;i++){
            result +=i;
        }
        return result;
    }
};
function diff(a,b){
    return Math.abs(a-b);
}