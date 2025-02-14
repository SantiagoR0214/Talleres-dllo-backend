function convertidorTemp(gradCel){
    tempFaren = gradCel * (9/5) + 32
    return tempFaren
}

console.log(convertidorTemp(25)); 

function resolvedor(b, a, c, val){
    if (val== true){
        x= (-b + (b**2 - 4*(a*c))**(1/2)) / 2*a
    }
    else{
        x= (-b - (b**2 - 4*(a*c))**(1/2)) / 2*a
    }

    return x
}

console.log(resolvedor(5,1,4, true)); 


function mejorParidad(x){
    if (x % 2 == 0){
        respuesta= "Numero Par"
    }
    else{
        respuesta = "Numero Impar"
    }
    return respuesta
}

console.log(mejorParidad(5)); 


function peorParidad(num) {
    if(num ==1){
        paridad = "1 es impar"
    }
    if(num ==2){
        paridad = "2 es par"
    }
    if(num ==3){
        paridad = "3 es impar"
    }
    if(num ==4){
        paridad = "4 es par"
    }
    if(num ==5){
        paridad = "5 es impar"
    }
    if(num ==6){
        paridad = "6 es par"
    }
    if(num ==7){
        paridad = "7 es impar"
    }
    if(num ==8){
        paridad = "8 es par"
    }
    if(num ==9){
        paridad = "9 es impar"
    }
    if(num ==10){
        paridad = "10 es par"
    }
    return paridad
}

console.log(peorParidad(5)); 
