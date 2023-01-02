//For header options and scrolling

function scrollToHome() {
    document.getElementById("Home").scrollIntoView();
}
function scrollToAbout() {
    document.getElementById("About").scrollIntoView();
}
function scrollToSkills() {
    document.getElementById("Skills").scrollIntoView();
}
function scrollToContact() {
    document.getElementById("Contact").scrollIntoView();
}


//>>>>>>>>>>>>>>>>>>>>>>>>>
// for scroll in animations
//>>>>>>>>>>>>>>>>>>>>>>>>>


// for slide enter from right

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('enter-slide-right')
        } else {
            entry.target.classList.remove('enter-slide-right');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-slide-right');
hiddenElements.forEach((el) => observer.observe(el));


//for slide enter from left 


const observerTwo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("enter-slide-left");
        } else {
            entry.target.classList.remove("enter-slide-left");
        }
    });
});

const hiddenElementsLeft = document.querySelectorAll('.hidden-slide-left');
hiddenElementsLeft.forEach((el) => observerTwo.observe(el));

//for fade in 


const observerThree = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});


const hiddenElementsFade = document.querySelectorAll(".hidden");
hiddenElementsFade.forEach((el) => observerThree.observe(el));

/* for line decoration */
const observerLine = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("line-show");
        } else {
            entry.target.classList.remove("line-show");
        }
    });
});

const lineDecorations = document.querySelectorAll(".line")

lineDecorations.forEach((el) => observerLine.observe(el))


// for slide down animation

//! plan change

// const observerDown = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("show-slide-down");
//         } else {
//             entry.target.classList.remove("show-slide-down");
//         }
//     });
// });

// const hiddenDown = document.querySelectorAll(".hidden-slide-down");

// hiddenDown.forEach((el) => observerDown.observe(el))

