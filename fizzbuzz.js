function fizzBuzz(n) {
    for(let i = 1; i <= n; i++ ){
        if( i % 3 == 0 ){
            console.log("Fuzz");
        }else if(i % 5 == 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
     }
}