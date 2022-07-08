let index = 0;
changeImagePrev = function() {
    let images = ["./public/images/slide-1.jpg", "./public/images/slide-2.jpg", "./public/images/slide-3.jpg"];
    document.getElementById('images-header').src = images[index];
    index--;
    if (index == -1) {
        index = 2;
    }  
    setInterval(changeImage, 7000);
}

changeImageNext = function() {
    let images = ["./public/images/slide-1.jpg", "./public/images/slide-2.jpg", "./public/images/slide-3.jpg"];
    document.getElementById('images-header').src = images[index];
    index++;
    if (index == 3) {
        index = 0;
    }
    setInterval(changeImage, 7000);
}

changeImage = function() {
    let images = ["./public/images/slide-1.jpg", "./public/images/slide-2.jpg", "./public/images/slide-3.jpg"];
    document.getElementById('images-header').src = images[index];
    index++;
    if (index == 3) {
        index = 0;
    } 
}

