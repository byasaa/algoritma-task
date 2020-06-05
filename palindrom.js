function palindrom(teks){
    if(teks.length < 1){
        console.log(false);
    }else{
        var temp = "";
    
        for(var x = teks.length -1; x >= 0; x-- ){
            temp += teks[x];
        }
        if(temp == teks){
            console.log(true);
        }else{
            console.log(false);
        }
    }
}
palindrom('');
