function getCurrentHour(name) {
    const date  = new Date()
  
    let time = date.getHours()
    let min = date.getMinutes()
  
    console.log(`Hour of calling ${time}:${min} - by ${name}`)
  }
  
  
  getCurrentHour("Pamela")