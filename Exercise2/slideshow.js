var pictureIndex = 1;
showPictures(1);
function changePicture(x)
{
    showPictures(pictureIndex += x);
}
function currentPicture(x)
{
    showPictures(pictureIndex = x);
}
function showPictures(x)
{
    let pictures = document.getElementsByClassName("myPictures");
    if (x > pictures.length)
    {
        pictureIndex = 1;
    }
    if(x < 1)
    {
        pictureIndex = pictures.length;
    }
    for(let i = 0; i < pictures.length; i++)
    {
        pictures[i].style.display = "none";
    }
    pictures[pictureIndex - 1].style.display = "block";
}