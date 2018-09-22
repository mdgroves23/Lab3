let pictureIndex = 1;
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
    let picture = document.getElementById('picture');
    if (x > 5)
    {
        pictureIndex = 1;
    }
    if(x < 1)
    {
        pictureIndex = 5;
    }
    picture.src=pictureIndex.toString()+".jpg";
}