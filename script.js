















//följande skrev jag koden, fick hjälp från min syster 

const nav = document.querySelector('nav');
//hämta nav element från  DOMEN i html
const line = document.createElement('div');
//skapar en ny element som är en del av raden nu
line.classList.add('line');
//addar "line" från CSS class till den ny skapad div element
nav.appendChild(line);
//addar den nygjorda div element till navigation bar element
const active = nav.querySelector('.active');
//hittar den aktiva menu item i navigation bar genom att använda "active" CSS class
let pos = 0;
let wid = 0;

if (active) {
//kollar om det finns en aktiv menu item. Om det finns, hämtar position och bred av den aktiva menu item och sätter den på line element
    pos = active.offsetLeft;
    wid = active.offsetWidth;
    line.style.left = `${pos}px`;
    line.style.width = `${wid}px`;
}

nav.querySelectorAll('ul li a').forEach(link => {
//selektera all links containing menu items (<a>) från navbaren och sedan adda en event handler till varje en
    link.addEventListener('click', e => {
    //event handler lyssnar och väntar på att bli klickad

        const clickedItem = e.target.parentNode;
        //definierar den nuvarande klicked menu item genom att använda event objekt och parentnode är föräldrar till den klickande.
        console.log(clickedItem);
        if (!clickedItem.classList.contains('active') && !nav.classList.contains('animate')) {
        //kontrollerar om eller inte den klickad menu item är inte längre aktiv och att navigation bar är inte inkluderad "animate" CSS klass. Det kommer att fortsätta ändas om dessa kondition är uppfyllda
            nav.classList.add('animate');
            //addar "animate" CSS klass till navbar för att göra "line" röra sig livligt

            const position = clickedItem.offsetLeft;
            const width = clickedItem.offsetWidth;
            //definierar positionen när man klickar
            const isForward = position >= pos;
            //determinerar om animationen ska vara framåt (höger) eller bakåt (vänster) i förhållande till den aktuella positionen
            line.animate(
                [
                    { left: `${isForward ? pos : position}px`, width: `${isForward ? position - pos + width : pos - position + wid}px`},
                    { width: `${width}px`, left: `${position}px`},
                ],
                { duration: 1000, easing: 'ease'}
            ).onfinish = () => {
                line.style.width = `${width}px`;
                line.style.left = `${position}px`;
                nav.classList.remove('animate');
            };
            //skapar en animation på "line" element. Den tillsätta animation kommer att röra sig från vänstra till högra eller från högra till den vänstra sidan. När animation är utfört, så ska callback function byta bredden och positionen av "line" och ta veck "animate" CSS klass från navbar
            pos = position;
            wid = width;
            //
            nav.querySelectorAll('ul li').forEach(item => item.classList.remove('active'));
            //tar bort aktuella "active" klass från all menu items så att bara den nuvarande klickande blir aktiv.
            clickedItem.classList.add('active');
        }
    });
});

//följande kod skrev jag inte, här är länken till koden: https://www.youtube.com/watch?v=ueyRcYEmsrI&ab_channel=OnlineTutorials
// fick göra justeringar för att det ska kunna fungerar

const buttons = document.querySelectorAll('.card-side a');
      buttons.forEach(btn => {
        btn.addEventListener('mouseover', function(e) {


          let ripples = document.createElement('span');
          ripples.style.left ='50%';
          ripples.style.top = '50%';
          this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
          },1000);
        })
      })


