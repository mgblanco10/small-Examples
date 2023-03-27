function countHours(year, holidays) {
    const numDaysInMonth = [31, (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let extraHours = 0;
  
    const isHoliday = (date) => {
      for (let i = 0; i < holidays.length; i++) {
        const [month, day] = holidays[i].split('/');
        const holidayDate = new Date(year, month - 1, day);
        if (date.getTime() === holidayDate.getTime()) {
          return true;
        }
      }
      return false;
    };
  
    for (let month = 0; month < 12; month++) {
      for (let day = 1; day <= numDaysInMonth[month]; day++) {
        const date = new Date(year, month, day);
        if (date.getDay() !== 0 && date.getDay() !== 6 && !isHoliday(date)) {
          extraHours++;
        }
      }
    }
  
    for (let i = 0; i < holidays.length; i++) {
      const [month, day] = holidays[i].split('/');
      const holidayDate = new Date(year, month - 1, day);
      if (holidayDate.getDay() !== 0 && holidayDate.getDay() !== 6 && !isHoliday(holidayDate)) {
        extraHours += 2;
      }
    }
  
    return extraHours;
  }


  console.log(countHours(2023, ['01/06', '04/01', '12/25'])); // expected output: 4
  console.log(countHours(2021, ['01/01', '05/01', '07/28', '12/25'])); // expected output: 0
  console.log(countHours(2022, ['01/06', '04/01', '12/25'])); // expected output: 4
  console.log(countHours(2023, ['01/01', '05/01', '07/28', '12/25'])); // expected output: 8
  