

function setupImageBoardImagesOnclicks()
{
    const imgs = document.querySelectorAll('.image-board img');

    for(const img of imgs)
    {
        img.addEventListener('click', openImage);
        console.log('a')
    }

    document.querySelector('.img-dialog').addEventListener('click', closeImage);
}

function openImage({toElement: el})
{
    document.querySelector('.img-dialog').classList.add('open');
    document.querySelector('.img-dialog img').src = el.src;
}

function closeImage()
{
    document.querySelector('.img-dialog').classList.remove('open');
}

function setCurrYear()
{
    document.querySelector('#curr-year').textContent = (new Date()).getFullYear();
}

setupImageBoardImagesOnclicks();
setCurrYear();