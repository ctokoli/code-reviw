function fizzBuzz(a) {
    for(let i = 1; i <= a; i++ ){
        if( i % 3 == 0 ){
            console.log("Fuzz");
        }else if(i % 5 == 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
     }
}