document.querySelector('.menu').addEventListener("click",()=> {
    document.querySelectorAll('.traget').forEach((item)=>{
        item.classList.toggle("change");
    });
});
document.querySelectorAll('.wrapper').forEach((item)=>{
    item.addEventListener('click',()=>{
        document.querySelectorAll('.traget').forEach((item)=>{
            item.classList.remove("change"); 
        }); 
    })
})
function sectionClick1(){
    window.location.href="sectionOneImage.html";
}
function sectionClick2(){
    window.location.href="sectionTwoImage.html";
}
function sectionClick3(){
    window.location.href="sectionThreeImage.html";
}
const videos =document.querySelectorAll(".video");

videos.forEach((video)=>{
    video.addEventListener("mouseover",() => {
        video.play();
    })
    video.addEventListener("mouseout",() =>{
        video.pause();
    });
});