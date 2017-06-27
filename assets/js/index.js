'use strict';
const state = {
  students: null,
  status: null
};

const getJSON = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }
    cb(null, xhr.response);
  });
  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};

$( _ => {
  getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/', (err, json) => {
    if (err) { return alert(err.message);}
    state.students = json;
    const list = $('.list');
    // console.log(state.students);
    for (index in state.students){
      console.log(state.students[index].name);
    }
  });
});
