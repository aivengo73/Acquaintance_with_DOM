'use strict';

const propsItem = document.querySelectorAll('.props__item');
const content = document.querySelectorAll('.content');
const propsList = document.querySelectorAll('.props__list');
const items = document.querySelectorAll('.items');
const item = document.querySelectorAll('.item');
const h2 = document.querySelectorAll('.item__title');

item[0].before(item[1]);
item[2].before(item[3]);
item[0].before(item[2]);
item[2].after(item[3]);

propsList[4].after(propsList[3]);
content[3].append(propsList[4]);

propsList[0].append(propsItem[2].append(propsItem[14]));

propsList[2].append(propsItem[43]);
propsList[2].append(propsItem[44]);

const ads = document.querySelector('.ads');
ads.remove();

console.log(propsList[0].childNodes[11]);
propsList[0].childNodes[11].remove();

 h2[2].textContent = 'This и прототипы объектов';
 h2[4].textContent = 'ES6 и не только';
 h2[1].textContent = 'Область видимости и замыкание';
 h2[3].textContent = 'Асинхронная обработка и оптимизация';


























