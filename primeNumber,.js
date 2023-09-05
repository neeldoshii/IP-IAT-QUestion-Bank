
for(let i=1;i<=10;i++){
    //1 is neither prime nor composite prime cases
    if(i==1){
        continue;
    }
    // base case 
    if(i ==2 || i==3){
        console.log("Prime Number : "+i);
    }
    // if 0 that means its not prime number
    else if(i%2==0 || i %3==0 || i %5==0){
        //console.log("Not Prime Number :" +i);
    }
    else{
        console.log("Prime Number : "+i);
    }
}
