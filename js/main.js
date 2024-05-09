'use strict';

const propsItem = document.querySelectorAll('.props__item');
const content = document.querySelectorAll('.content');
const propsList = document.querySelectorAll('.props__list');

propsList[4].after(propsList[3]);
content[3].append(propsList[4]);

/* ---- Можно сделать так:
propsList[0].append(propsItem[14]); 
propsItem[2].append(propsItem[14]); 
 */

propsList[0].append(propsItem[2].append(propsItem[14]));

propsList[2].append(propsItem[43]);
propsList[2].append(propsItem[44]);

const ads = document.querySelector('.ads');
ads.remove();


//------- мои поиски и размышления по вычислению текстого элемента "undefined" ------

/* const html = document.documentElement;
 console.log(html.childNodes[2].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[11]); -  вычислил что это childNodes[11] */

console.log(propsList[0].childNodes[11]);
propsList[0].childNodes[11].remove();














