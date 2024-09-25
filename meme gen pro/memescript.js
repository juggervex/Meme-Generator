document.getElementById('memeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const imageURL = document.getElementById('imageURL').value;
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;

    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');

    const memeImage = document.createElement('img');
    memeImage.src = imageURL;
    memeDiv.appendChild(memeImage);

    const topTextDiv = document.createElement('div');
    topTextDiv.classList.add('top-text');
    topTextDiv.innerText = topText;
    memeDiv.appendChild(topTextDiv);

    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add('bottom-text');
    bottomTextDiv.innerText = bottomText;
    memeDiv.appendChild(bottomTextDiv);

    document.getElementById('memeContainer').appendChild(memeDiv);

    document.getElementById('memeForm').reset();
});
