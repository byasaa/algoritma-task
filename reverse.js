function reverse(kalimat){
    if(kalimat.length < 1){
        console.log('Kalimat Kosong');
        return false;
    }
    var arr = kalimat.split(" ");
    var temp = "";
    for(x = arr.length - 1; x >= 0; x--){
        temp += arr[x]+ " ";
    }
    console.log(temp);
}
reverse('');