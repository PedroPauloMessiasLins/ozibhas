
function equacao() {
    
    a = parseInt(document.getElementById('aa').value);
    b = parseInt(document.getElementById('bb').value);
    c = parseInt(document.getElementById('cc').value);

    if (delta(a, b, c) > 0) {
        console.log("o valor de delta é " + delta(a, b, c));
        console.log("X1 = " + x1(a, b, delta(a, b, c)));
        console.log("X2 = " + x2(a, b, delta(a, b, c)));
        
         modal.style.display = "block";

        document.getElementById("x1").innerHTML = "Valor de x¹: " + x1(a, b, delta(a, b, c))
        document.getElementById("x2").innerHTML = "Valor de x²: " + x2(a, b, delta(a, b, c))
        document.getElementById("delta").innerHTML = "Valor de delta: " + delta(a, b, c)
    } else {
        modal.style.display = "block";
        document.getElementById("textod").innerHTML = "Delta é negativo "
        
    }
}


function delta(a, b, c) {
    return Math.pow(b, 2) - 4 * (a * c)
}

function x1(a, b, valordelta) {
    return (-b + Math.sqrt(valordelta)) / (2 * a)
}

function x2(a, b, valordelta) {
    return (-b - Math.sqrt(valordelta)) / (2 * a)
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





