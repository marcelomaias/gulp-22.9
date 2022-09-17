const header = document.querySelector(".main-header")
const homeIntro = document.querySelector(".home-intro");


const sectionOneOptions = {
    rootMargin: "-95% 0% 0% 0%"
}
const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        console.log(entry)
        if(!entry.isIntersecting) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
    })
}, sectionOneOptions)

sectionOneObserver.observe(homeIntro)
