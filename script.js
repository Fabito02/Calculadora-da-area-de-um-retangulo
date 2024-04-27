function area() {
    let baseRet = document.getElementById("baseRet").value
    let altRet = document.getElementById("altRet").value
    let result = document.getElementById("result")
    let area = 0
    if (baseRet <= 0 || altRet <= 0) {
        result.innerHTML = ("Insira dados válidos em todos os campos")
    } 
    else {
        area = baseRet * altRet
        result.innerHTML = (`O resultado da área é: ${area} metros`)
    }
}