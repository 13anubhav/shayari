function showAlert(page) {
    Swal.fire({
      icon: 'info',
      title: 'Welcome to ' + page,
      text: 'There is nothing to see here, checkout some Shayari.',
      confirmButtonText: '😯'
    });
  }

  function showAuthorInfo() {
    Swal.fire({
  title: 'About Author',
  html: `<img src="https://i.ibb.co/kxvmxkb/OIG-03-QUHahs-WUf9-F-dw8-Fh-T.jpg" style="max-width: 100%; border-radius: 10px;" />
         <br><br>
         This beautiful Shayaris are written by Anubhav, who shares emotions through words. You can acknowledge me as a poet-programmers with all due respect. 🤣
         <br><br>
         <a href="https://anubhav-webpage.netlify.app/" target="_blank" class="author-btn" style='text-decoration: none;'>click here to Know more about Author</a>
         `,
  showCancelButton: false,
  confirmButtonText: 'Its okay 👍',
  confirmButtonColor: '#4CAF50',  
  customClass: {
    confirmButton: 'close-btn',  
  },
});

  }
  
  
  Swal.fire({
  title: "Hi There! , this code contains Shayari written by Anubhav",
  text: "Feel the emotion through words 😅",
  icon: "info",
  confirmButtonText: 'okay,lets go.... !'
});