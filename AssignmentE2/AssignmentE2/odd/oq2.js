// oq2.js
const elebtn= document.getElementById('limit');
elebtn.onchange = function (e){
    const value = parseInt(elebtn.value);
    for (let i = 1;i <= value ; i++){
        const tele = document.createElement('td');
        const trow = document.createElement('tr');
        tele.textContent = `${i}`;
        trow.appendChild(tele);
        document.querySelector('tbody').appendChild(trow);
    }
}