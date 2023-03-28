// Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.
// Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.
// Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.
// El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, si fuese necesario.
// Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.
// El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc.
function countHours(year, holidays){
    let extraHours = 0
    for(let holiday of holidays){
        const date = new Date (`${holiday}/${year}`)
        
            
            // 0 domingo y 6 sábado
            if (![0, 6].includes(date.getDay())){
                extraHours += 2
            }
        }
    
    return extraHours
}

  console.log(countHours(2023, ['01/06', '04/01', '12/25'])); // expected output: 4
  console.log(countHours(2021, ['01/01', '05/01', '07/28', '12/25'])); // expected output: 4
  console.log(countHours(2022, ['01/06', '04/01', '12/25'])); // expected output: 4
  console.log(countHours(2023, ['01/01', '05/01', '07/28', '12/25'])); // expected output: 6
  