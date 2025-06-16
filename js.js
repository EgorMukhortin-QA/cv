/* объявление переменной, мы нашли кнопку по тегу */
const buttons = document.querySelectorAll('button');

//обработчики событий
buttons.forEach(button => {
 button.addEventListener('click', function() {
 switch(this.value) {
 case '1':
 alert('+79095394498');
 break;
 case '2':
 alert('tiyolreg@yandex.ru');
 break;
 }
 });
});