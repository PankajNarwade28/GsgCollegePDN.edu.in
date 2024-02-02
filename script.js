
// Navigation Script

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//  Image Slideshow Script

// function first() {
//     document.getElementById("slideimage").src = "images/image-2.png";
// }
// function second() {
//     document.getElementById("slideimage").src = "images/image-3.png";
// }
// function third() {
//     document.getElementById("slideimage").src = "images/image-3.png";
// }
// function fourth() {
//     document.getElementById("slideimage").src = "images/image-4.png";
// }
// function fifth() {
//     document.getElementById("slideimage").src = "images/image-5.png";
// }
// function sixth() {
//     document.getElementById("slideimage").src = "images/image-1.png";
// }
// setInterval(first, 3000);
// setInterval(second, 6000);
// setInterval(third, 9000);
// setInterval(fourth, 12000);
// setInterval(fifth, 15000);
// setInterval(sixth, 18000);

// Second method

let index = 0;
        displayImages();
        function displayImages() {
            let i;
            const images = document.getElementsByClassName("image");
            for (i = 0; i < images.length; i++) {
                images[i].style.display = "none";
            }
            index++;
            if (index > images.length) {
                index = 1;
            }
            images[index - 1].style.display = "block";
            setTimeout(displayImages, 3000);
        }

 
