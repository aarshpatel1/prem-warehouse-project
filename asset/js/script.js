// JavaScript for Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200; // The speed of the counting animation

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace('+', '');

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment) + '+';
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target + '+';
        }
    };

    updateCount();
});