'use strict';

const log = document.querySelector('html').lang;

if(lang === 'ja'){
    document.querySelector('option[value="japanese.html"]').selected = true;
}else if(lang === 'en'){
    document.querySelector('option[value="english.html"]').selected = true;
}else if(lang === 'zh'){
    document.querySelector('option[value="chinese.html"]').selected = true;
}

document.getElementById('form').querySelector.onchange = function(){
    location.href = document.getElementById('form').querySelector.value;
}