const body = document.querySelector('body');
const wrapper = document.createElement('div')
wrapper.className = 'wrapper';
body.prepend(wrapper);
const button = document.createElement('button');
wrapper.append(button);

let number;
while (number == null || number == "" || number < 0 || number > 100 || isNaN(number) ) {
   number = parseInt(prompt("Please enter your number", "0 to 100"), 10);
}

for (let i = 1; i <= number; i++) {
    document.getElementById('container').innerHTML +=  (`<div id="item" class="item-${i}">${i}</div>`);
}

const items = document.querySelectorAll('#item');

items.forEach(item => {
    item.addEventListener('mouseover', function () {
        this.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);;
    });
});