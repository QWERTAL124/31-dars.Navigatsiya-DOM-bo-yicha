' use strict '

// console.log(document.head); // head tagi ichidagi barcha narsani chiqarai

// console.log(document.body);  // body tagi

// console.log(document.childNodes); // Node ro'yxatlarni chiqaradi

// console.log(document.body.firstChild);  // DOM daraxti o'yicha html taglar
// console.log(document.body.lastChild); //DOM daraxti bo'yicha script fayli

// console.log(document.querySelector('#btn').parentNode); // bu shu idisi bo'yicha tanlangan elementning ona elementini oladi;
// console.log(document.querySelector('#btn').parentNode.parentNode); // bu shu tanlangan elemntni =buvisini ko'rsatadi

//  data-current bilan ishlash bu data attribut

// console.log(document.querySelector('[data-current="b"]'));

// Shu elementdan keyingi node ya'ni tugunni olish
console.log(document.querySelector('[data-current="b"]').nextSibling); // bu #text qaytaradi chunki bo'sh joy bor
console.log(document.querySelector('[data-current="b"]').previousSibling);  // bu ham #text qaytaradi chunki tepasida ham bo'sh joy bor

// Shu elemntning  bolasini olish

console.log(document.querySelector('[data-current="b"]').nextElementSibling); // bu keyingi tagni qytaradi
console.log(document.querySelector('[data-current="b"]').previousElementSibling); // oldingi tagni qaytaradi

// sikl yordamida DOM dan #text li tugunlarni olib tashlash

for(let node of document.body.childNodes){
    if(node.nodeName == "#text"){
        continue
    }
    console.log(node);
}