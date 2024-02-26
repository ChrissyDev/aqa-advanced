function delayedOutput(text, milliseconds) {
    setTimeout(() => {
      console.log(text);
    }, milliseconds);
  }
  
  delayedOutput("Цей текст з'явиться через 2 секунди", 2000);