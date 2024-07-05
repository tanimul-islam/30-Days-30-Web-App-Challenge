document.addEventListener('DOMContentLoaded', (e) => {
    const noButton = document.getElementById('no');
    const container = document.querySelector('.container');
    const yesButton = document.getElementById('yes');

    noButton.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    yesButton.addEventListener('click', () => {
        const catGif = document.querySelector('.cat-gif');

        catGif.innerHTML = '<iframe src="https://giphy.com/embed/osjgQPWRx3cac" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sticker-osjgQPWRx3cac"></a></p>';
    });

    catGif.addEventListener('mouseover', (event) => {
        event.stopPropagation();
    });
    
});
