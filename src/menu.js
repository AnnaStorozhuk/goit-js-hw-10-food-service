import cards from './teamplates/menu-cards.hbs';
import menuItem from './menu.json';
import './change-theme';
import './styles.css';


let menu = document.querySelector('.js-menu');

function buildMenu(array) {
    const markup = array.map(cards).join('');
    menu.insertAdjacentHTML('beforeend', markup);
}

buildMenu(menuItem);



// const refs = {
//   body: document.querySelector('body'),
//   switch: document.querySelector('.js-switch-input'),
// };

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };
// refs.switch.addEventListener('change', setClassList);
// refs.switch.addEventListener('change', setLocalStorage);

// function setClassList() {
//     const check = refs.switch.checked;
//     if (check) {
//         refs.body.classList.add(Theme.DARK);
//         refs.body.classList.remove(Theme.LIGHT)
//     } else {
//         refs.body.classList.remove(Theme.DARK);
//         refs.body.classList.add(Theme.LIGHT)
//     }
// }


// function setLocalStorage () {
//     const check = refs.switch.checked;
//     if (check) {
//         localStorage.setItem('theme', Theme.DARK)
//     } else {

//         localStorage.removeItem('theme')
//         localStorage.setItem('theme', Theme.LIGHT)
//     }
// }

// const localStorageTheme = localStorage.getItem('theme');
// if (localStorageTheme === Theme.DARK) {
//     refs.body.classList.add(Theme.DARK);
//     refs.body.classList.remove(Theme.LIGHT)
// }

