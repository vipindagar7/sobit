
// hamburger  menu for mobile view
const humburger = document.getElementById('humburger')
console.log('hello');
humburger.addEventListener('click', function () {
    const menu = document.getElementById('menu');

    humburger.classList.toggle('menu-open');

    menu.classList.toggle('nav-list-show')
})
// to change active state on click the navbar link
const navList = document.querySelectorAll('.nav-list li a');

navList.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        // remove active class from all nodes of nav list
        navList.forEach(link => {
            link.classList.remove('active');         
        })

        // add active class to the targeted node
        link.classList.add('active');
        /* close the menu in mobile view */
        const menu = document.getElementById('menu');
        humburger.classList.toggle('menu-open');
        menu.classList.toggle('nav-list-show');

        // scroll to the section
        const target = link.getAttribute('href')

        const section = document.querySelector(target)

        // adding scroll behivour smooth


        
        section.scrollIntoView({behavior: "smooth"});

    })
});6


// end of navabar


// create a slide show at full screen with ftimer function
const slides =document.querySelectorAll('.slide');

console.log(slides);

const nextSlideBtn = document.getElementById('next-slide-btn');
const previousSlideBtn = document.getElementById('previous-slide-btn');

let currentSlide = 0;
console.log(slides[2]);
function slideshow(){
setInterval(() => {
    slides.forEach(slide => {
        slide.classList.remove('active-slide');
    });

    currentSlide = currentSlide  % slides.length ; 
    nextSlide = currentSlide++;
    // console.log(nextSlide); 
    slides[nextSlide].classList.add('active-slide');
}, 2000);
}
slideshow();
// end of slide show

// here its a remaning the previous btn and next btn 
// will do it later
