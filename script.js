
for (let i = 1; i <= 16; i++) {
    document.getElementById('container').innerHTML +=  (`<div id="item" class="item-${i}">${i}</div>`);
}

const items = document.querySelectorAll('#item');

items.forEach(item => {
    item.addEventListener('mouseover', function () {
        this.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);;
    });
});