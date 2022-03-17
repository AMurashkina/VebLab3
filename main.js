
let butReady = document.getElementById("ready"); //кнопка готово

let mail = document.querySelector('[name="email"]'), //получаем все инпуты
    password = document.querySelector('[name="password"]'),
    agreeContract = document.querySelector('[name="agreeContract"]'),
    agreeData = document.querySelector('[name="agreeData"]');

butReady.addEventListener("click", () => {  
  
  let data = { //собираем данные в обьект после отправки заполненой формы
    'email': mail.value,
    'пароль': password.value,
    'согласие с договором': agreeContract.checked,
    'согласие с обработкой данных': agreeData.checked
  };
/*
  if(mail.value === ''){
    mail.style.background  = 'red';
  }
  if(password.value ===''){
    password.style.background  = 'red';
  }
*/


  

  console.table(data);
})

