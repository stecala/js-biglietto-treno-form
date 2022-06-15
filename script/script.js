const button = document.getElementById('button');

button.addEventListener('click', function () {
    console.log(document.getElementById('km').value);
    const userName = document.getElementById('name').value;
    const userKm = parseInt(document.getElementById('km').value);
    const userAge = parseInt(document.getElementById('age').value);

    console.log(userName);
    console.log(userKm);
    console.log(userAge);
    const wagonRand = Math.floor((Math.random() * 9) + 1);
    const cpRand = Math.floor((Math.random() * 100000) + 1);
    document.getElementById('cont-remove').classList.add(('d-none'));
    document.getElementById('wrong').classList.add(('d-none'));
    document.getElementById('ticket').classList.add(('d-none'));
    if ( typeof(userName) !== "string" || userName =='') {
        console.log({userName});
        document.getElementById('cont-remove').classList.remove(('d-none'));
        document.getElementById('wrong').classList.remove(('d-none'));
        document.getElementById('wrong').innerHTML = '<h2>Nome inserito non valido</h2>';
    }
    else if ((isNaN(userKm) == true) || (isNaN(userAge) == true) || (userAge <= 0) || (userKm <= 0)) {
            document.getElementById('cont-remove').classList.remove(('d-none'));
            document.getElementById('wrong').classList.remove(('d-none'));
            document.getElementById('wrong').innerHTML = '<h2>Devi inserire solo dei numeri e devono essere maggiori di zero nei form numerici</h2>';
        }
        else {
            // calcolo prezzo del biglietto
            const userPrice = (userKm * 0.26).toFixed(2);
            document.getElementById('ticket').classList.remove(('d-none'));
            document.getElementById('user-name').innerHTML = userName;
            document.getElementById('wagon').innerHTML = wagonRand;
            document.getElementById('cp').innerHTML = cpRand;
            document.getElementById('cont-remove').classList.remove(('d-none'));
            document.getElementById('ticket').classList.remove(('d-none'));

            // applico eventuali sconti
            if (userAge < 18) {
                let priceDiscounted = (userPrice - ((userPrice * 15) / 100)).toFixed(2);
                document.getElementById('sale').innerHTML = 'Ridotto under18';
                document.getElementById('cost').innerHTML = priceDiscounted;
            }
            else if (userAge >= 65) {
                let priceDiscounted = (userPrice - ((userPrice * 35) / 100)).toFixed(2);
                document.getElementById('sale').innerHTML = 'Ridotto Over 65';
                document.getElementById('cost').innerHTML = priceDiscounted;
            }
            // prezzo senza agevolazioni
            else {
                document.getElementById('sale').innerHTML = 'Nessuna agevolazione';
                document.getElementById('cost').innerHTML = userPrice;
            }
        }
})
