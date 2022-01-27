//Part 1 
alert("El programa pedirá el día de la semana del 0 al 6 y hora en formato de 24 horas en la cual deseas acudir a nuestras oficinas")

function businessHours (dayNumber, hourNumber){
    dayNumber = parseInt(prompt("¿Qué día es?"));
    switch(dayNumber){
        case 0:
            alert("Domingo no es día comercial")
            break;
        case 1:
             hourNumber = prompt("Lunes es día comercial, ¿A qué hora deseas acudir?")
             if (hourNumber>=9&&hourNumber<=18){
                 alert("El horario es comercial, puedes acudir")
             }else if(hourNumber<=0||hourNumber>=24){
                alert("Horario No válido")
             }else{
                alert("Lamentamos no poder atenderte ya que el horario no es comercial")
             }
            break;
        case 2:
            hourNumber = prompt("Martes es día comercial, ¿A qué hora deseas acudir?")
             if (hourNumber>=9&&hourNumber<=18){
                 alert("El horario es comercial, puedes acudir")
             }else if(hourNumber<=0||hourNumber>=24){
                alert("Horario No válido")
             }else{
                alert("Lamentamos no poder atenderte ya que el horario no es comercial")
             }
            break;
        case 3:
            hourNumber = prompt("Miércoles es día comercial, ¿A qué hora deseas acudir?")
             if (hourNumber>=9&&hourNumber<=18){
                 alert("El horario es comercial, puedes acudir")
             }else if(hourNumber<=0||hourNumber>=24){
                alert("Horario No válido")
             }else{
                alert("Lamentamos no poder atenderte ya que el horario no es comercial")
             }
            break;
        case 4:
            hourNumber = prompt("Jueves es día comercial, ¿A qué hora deseas acudir?")
             if (hourNumber>=9&&hourNumber<=18){
                 alert("El horario es comercial, puedes acudir")
             }else if(hourNumber<=0||hourNumber>=24){
                alert("Horario No válido")
             }else{
                alert("Lamentamos no poder atenderte ya que el horario no es comercial")
             }
            break;
        case 5:
            hourNumber = prompt("Viernes es día comercial, ¿A qué hora deseas acudir?")
             if (hourNumber>=9&&hourNumber<=18){
                 alert("El horario es comercial, puedes acudir")
             }else if(hourNumber<=0||hourNumber>=24){
                alert("Horario No válido")
             }else{
                alert("Lamentamos no poder atenderte ya que el horario no es comercial")
             }
            break;
        case 6:
            hourNumber = prompt("Sábado no es día comercial")
            break;
        default:
            console.log("Valor no reconocido ")
    
    }
    
}

businessHours ();

//Part 2

function getDayNumber (janFirstDayNumber, yearDayNumber){
    yearDayNumber = parseInt(prompt("Introduce un día (0 al 365)"));
    if (yearDayNumber>=0&&yearDayNumber<=365){
        janFirstDayNumber = yearDayNumber%7;
        switch(janFirstDayNumber){
            case 0:
                alert("Domingo")
                break;
            case 1:
                alert("Lunes")
                break;
            case 2:
                alert("Martes")
                break;
            case 3:
                alert("Miércoles")
                break;
            case 4:
                alert("Jueves")
                break;
            case 5:
                alert("Viernes")
                break;
            case 6:
                alert("Sábado")
                break;
            default:
                console.log("Valor no reconocido ")
        
        }
    }else{
       alert("No válido")
    }
}

getDayNumber ();

//Part 3

function getDayNumber (janFirstDayNumber, yearDayNumber){
    yearDayNumber = parseInt(prompt("Introduce un día (0 al 365)"));
    if (yearDayNumber>=0&&yearDayNumber<=365){
        janFirstDayNumber = yearDayNumber%7;
        switch(janFirstDayNumber){
            //El 0 es Domingo hasta 6 es Sábado
            case 0:
            alert("Domingo no es día comercial")
            break;
        case 1:
             hourNumber = prompt("Lunes es día comercial, ¿A qué hora deseas acudir?")
             if (hourNumber>=9&&hourNumber<=18){
                 alert("El horario es comercial, puedes acudir")
             }else if(hourNumber<=0||hourNumber>=24){
                alert("Horario No válido")
             }else{
                alert("Lamentamos no poder atenderte ya que el horario no es comercial")
             }
            break;
        case 2:
            hourNumber = prompt("Martes es día comercial, ¿A qué hora deseas acudir?")
             if (hourNumber>=9&&hourNumber<=18){
                 alert("El horario es comercial, puedes acudir")
             }else if(hourNumber<=0||hourNumber>=24){
                alert("Horario No válido")
             }else{
                alert("Lamentamos no poder atenderte ya que el horario no es comercial")
             }
            break;
        case 3:
            hourNumber = prompt("Miércoles es día comercial, ¿A qué hora deseas acudir?")
             if (hourNumber>=9&&hourNumber<=18){
                 alert("El horario es comercial, puedes acudir")
             }else if(hourNumber<=0||hourNumber>=24){
                alert("Horario No válido")
             }else{
                alert("Lamentamos no poder atenderte ya que el horario no es comercial")
             }
            break;
        case 4:
            hourNumber = prompt("Jueves es día comercial, ¿A qué hora deseas acudir?")
             if (hourNumber>=9&&hourNumber<=18){
                 alert("El horario es comercial, puedes acudir")
             }else if(hourNumber<=0||hourNumber>=24){
                alert("Horario No válido")
             }else{
                alert("Lamentamos no poder atenderte ya que el horario no es comercial")
             }
            break;
        case 5:
            hourNumber = prompt("Viernes es día comercial, ¿A qué hora deseas acudir?")
             if (hourNumber>=9&&hourNumber<=18){
                 alert("El horario es comercial, puedes acudir")
             }else if(hourNumber<=0||hourNumber>=24){
                alert("Horario No válido")
             }else{
                alert("Lamentamos no poder atenderte ya que el horario no es comercial")
             }
            break;
        case 6:
            hourNumber = prompt("Sábado no es día comercial")
            break;
        default:
            console.log("Valor no reconocido ")
        
        }
    }else{
       alert("No válido")
    }
}

getDayNumber ();
