'use strict';

const propsItem = document.querySelectorAll('.props__item');
// console.log('propsItem: ', propsItem);

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
























