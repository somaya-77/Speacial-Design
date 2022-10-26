// Select landing page image
let landingPage = document.querySelector(".landing-page");

// Get Array images
let arrayImage = ["background1.png", "background2.png", "background3.png"];

// change background image Url
landingPage.style.backgroundImage = 'url("images/background3.png")';

// Random Background Option
let backgroundOption = true;

// variable to control the background intarval
let backgroundInterval;

// check if toggle storage random background interval
let backgroundLocalItem = localStorage.getItem("background_option");

// check if random background item
if (backgroundLocalItem !== null){
    

    if (backgroundLocalItem === 'true'){

        backgroundOption = true;
    } else {
        backgroundOption = false;
    }
    
    // remove active class from li
    document.querySelectorAll(".back li").forEach(el => {

        el.classList.remove("active");
    });

    if (backgroundLocalItem === 'true') {

        document.querySelector(".back .yes").classList.add("active");
    }else{

        document.querySelector(".back .no").classList.add("active");
    }
};

// Function to randomiz images
function randomizImages() {

    if (backgroundOption === true) {

        // Get random image
        backgroundInterval = setInterval(() => {

        // get random number
        let randomNumber = Math.floor(Math.random() * arrayImage.length);
        
        // change background image Url
        landingPage.style.backgroundImage = 'url("images/' + arrayImage[randomNumber] + '")';

        }, 10000);

    }
}
randomizImages();
//****************************************************************************************** */

// Toggle spin class on icon
document.querySelector(".fa-gear").onclick = function () {

    //toggle class fa-spin 
    this.classList.toggle("fa-spin");

    // toggle class open on main setting box
    document.querySelector(".settings-box").classList.toggle("open");
} 

// ********************************

// switch colors
const colorList = document.querySelectorAll(".colors-list li");

// Loop On All List
colorList.forEach(li => {

    // Click on every list items
    li.addEventListener('click', (e) => {

        // Set color on root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
    
        // set color on local storage
        localStorage.setItem('color_option', e.target.dataset.color);

        handleActive(e)
    });    
});

// check If there's local storage option
let mainColors = localStorage.getItem("color_option");

if(mainColors !== null){
    // console.log('not null')
    // console.log(localStorage.getItem('color_option'));

    document.documentElement.style.setProperty('--main-color', localStorage.getItem('color_option'));

    // Remove Active class form All Color List Item
    document.querySelectorAll("colors-list li").forEach(el => {

        // Remove active class fprm all childern
        el.classList.remove("active");

        // Add Active class element with data color === local storage
        if(el.dataset.color === mainColors){

            // Add Active class
            el.classList.add("active");
        };
    });
};

//************************************************

// switch random background image
const backgroundEl = document.querySelectorAll(".back li");

// Loop On All List
backgroundEl.forEach(li => {

    // Click on every list items
    li.addEventListener('click', (e) => {

        handleActive(e);

        if (e.target.dataset.background === 'yes'){

            backgroundOption = true;

            randomizImages();

            localStorage.setItem("background_option", true);

        }else{
            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false);
        }
    });    
});

// *******************************************************************************************************
// Select nav-bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select all links
const allLinks = document.querySelectorAll(".landing-page .links li a");

function scrollToLink(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'
            });
        });
    });
};
scrollToLink(allBullets);
scrollToLink(allLinks);

// *******************************************************************************************************
/* start our skills */
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // skills offset top
    let skillsOffsetTop = ourSkills.offsetTop;

    // skills outer height
    let skillsOuterHeight = ourSkills.offsetHeight;
    
    // window height
    let windowHeight = this.innerHeight;

    // window scrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skills-box .skills-progress span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;
        }) 
    }
}
// end our skills

// ************************************************************************************************************************************************

// start gallery

let gallery = document.querySelectorAll(".gallery img");

gallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // create overlay
        let overlay = document.createElement("div");

        // add class 
        overlay.className = 'popup-overlay';

        // append overlay in body
        document.body.appendChild(overlay);

        // create the popup box
        let popupBox = document.createElement("div");

        // add class
        popupBox.className = 'popup-box';

        // check on alt & create
        if(img.alt !== null) {

            // create headding
            let imgHadding = document.createElement("h3");

            // create text to headding
            let imgText = document.createTextNode(img.alt);

            // append text to headding
            imgHadding.appendChild(imgText);

            // append the headding to popup box
            popupBox.appendChild(imgHadding)
        }

        // create the image
        let popupImage = document.createElement("img");

        // set Image source
        popupImage.src = img.src;

        // add image to popup
        popupBox.appendChild(popupImage);

        //add popup to body
        document.body.appendChild(popupBox);

        // Create The Close Span
        let closeButton = document.createElement("span");

        // add class to close button
        closeButton.className = "close-button";

        // create text to span
        let closeText = document.createTextNode("X");

        // append text to close button
        closeButton.appendChild(closeText);

        // append close button to popup box
        popupBox.appendChild(closeButton)

    });
});

// close popup
document.addEventListener("click", function (e) {

    if(e.target.className == 'close-button'){

        // Remove the current popup
        e.target.parentNode.remove();

        // Remove overlay
        document.querySelector(".popup-overlay").remove();
    }
})


// function handle  state
function handleActive(ev){

    ev.target.parentElement.querySelectorAll(".active").forEach(el => {

        // Remove active class fprm all childern
        el.classList.remove("active"); 
    });
    // Add active class to click
    ev.target.classList.add("active");

}

//************************************************************************************** */
// show bullets
let bulletsLi = document.querySelectorAll(".test-options .back-two li");

let bulletsSpan = document.querySelector(".nav-bullets");


// bullets in localStorage
let bulletLocalItem = localStorage.getItem("bullets_option");

if(bulletLocalItem !== null){

    bulletsLi.forEach(li => {

        li.classList.remove("active");
    })

    if(bulletLocalItem === 'block'){

        bulletsSpan.style.display = 'block';

        document.querySelector(".test-options .back-two .yes").classList.add("active")
    }else{
        bulletsSpan.style.display = 'none';

        document.querySelector(".test-options .back-two .no").classList.add("active")

    }
}
bulletsLi.forEach(li => {

    li.addEventListener("click", (e) => {

        if(li.dataset.display === 'Show'){

            bulletsSpan.style.display = 'block';

            localStorage.setItem("bullets_option", 'block');
        }else{
            bulletsSpan.style.display = 'none';
            
            localStorage.setItem("bullets_option", 'none');

        }

        handleActive(e)
    });
});
// Reset Button
document.querySelector(".reset-options").onclick = function () {

    // remove localstorage Data
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");

    // reload page
    window.location.reload();
}


// toggle menu

let toggleBtn = document.querySelector(".toggle");
let getLinks = document.querySelector(".links");

toggleBtn.onclick = function () {

    // Toggle class "menu-active" on button
    this.classList.toggle("menu-active");

    // toggle class "open" on links
    getLinks.classList.toggle("open");

};






























