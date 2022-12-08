//to check number is prime or not

function isPrime(num){
    let count=0;
    for(let i=1;i<=Math.sqrt(num);i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==1){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}

isPrime(17);