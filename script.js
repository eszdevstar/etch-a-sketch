
const body = document.querySelector('body');
const wrapper = document.createElement('div')

wrapper.className = 'wrapper';
body.prepend(wrapper);

const button = document.createElement('button');

button.textContent = 'Select Number';
wrapper.append(button);

const container = document.getElementById('container');

function promp () {
    button.addEventListener('click', function() {
        container.innerHTML = ''; // Erase the grid wheen a new is requested

        let number;
        if (number == null || number == "" || number < 0 || number > 100 || isNaN(number) ) {
            number = parseInt(prompt("Please enter your number", "0 to 100"), 10);
        }

        // Create the grid
        for (let i = 1; i <= number * 2; i++) {
            document.getElementById('container').innerHTML +=  (`<div id="item" class="item-${i}"></div>`);
        }

        // Change items color
        const items = document.querySelectorAll('#item');

        items.forEach(item => {
            item.addEventListener('mouseover', function () {
            this.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);;
            });
        });
    });
}

promp();
