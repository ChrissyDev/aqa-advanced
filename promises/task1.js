function delayedConsoleLog(text, milliseconds) {
    setTimeout(() => {
      console.log(text);
    }, milliseconds);
  }
  
  delayedConsoleLog("Цей текст з'явиться через 2 секунди", 2000);