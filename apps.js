//icons
const sunIcon=document.querySelector('.sun');
const moonIcon=document.querySelector('.moon');
//Theme
const userTheme=localStorage.getItem('theme');
const systemTheme=window.matchMedia("(prefers-color-scheme:dark)").matches;
//Toggle icon
const iconToggle=()=>{
    moonIcon.classList.toggle('display-none');
    sunIcon.classList.toggle('display-none');
}
//Theme check
const themeCheck=()=>{
    if(userTheme==='dark'|| (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        moonIcon.classList.add('display-none');
        return;
    }
    sunIcon.classList.add('display-none');
};
//Manually switch theme
const switchTheme=()=>{
    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme','light');
        iconToggle();
        return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme','dark');
    iconToggle();
};
//call them for switching buttons
sunIcon.addEventListener('click',()=>{
    switchTheme();
});
moonIcon.addEventListener('click',()=>{
    switchTheme();
})
//call themeCheck function
themeCheck()