const textarea = document.querySelector('#input');
const output = document.querySelector('#output');

function update() {
  textarea.value !== ""
  ? (output.innerText = textarea.value) : (output.innerText = 'start typing')
}
