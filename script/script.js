const button = document.getElementById('button');

button.addEventListener('click' , function(){
    console.log(document.getElementById('km').value);
    const userName=document.getElementById('name').value;
    const userKm=parseInt(document.getElementById('km').value);
    const userAge=parseInt(document.getElementById('age').value);

    console.log(userName);
    console.log(userKm);
    console.log(userAge);
    if((isNaN(userKm) == true ) || (isNaN(userAge) == true) || (userAge <= 0) || (userKm <=0)){
        document.getElementById('wrong').innerHTML='Devi inserire solo dei numeri e devono essere maggiori di zero';
    }
    else{
        // calcolo prezzo del biglietto
        const userPrice = (userKm * 0.26).toFixed(2);
        // applico eventuali sconti
        if(userAge < 18){
            let priceDiscounted = (userPrice - ((userPrice * 15) / 100)).toFixed(2);
        }
        else if(userAge >= 65)
        {
            let priceDiscounted = (userPrice - ((userPrice * 35) / 100)).toFixed(2);
        }
        // prezzo senza agevolazioni
        else{
            
        }
    }
    
})