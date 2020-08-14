let timeline = gsap.timeline();

timeline.fromTo(".profile-greeting h4",{
    x:-100,
    opacity:0
},
{
    x:0,
    opacity:1,
    duration:1
})
.fromTo(".profile-title",{
    y:100,
    opacity:0
},
{
    y:0,
    opacity:1,
    duration:1.2
}
);