function navbar(){
    let navbar=document.querySelector(".navbar");
    let menuDiv=document.createElement("div");
    let loginSignupDiv=document.createElement("div");
    
    let img=document.createElement("img");
    img.src="./data/logo.png";
    
    let findTalent=document.createElement("h4");
    findTalent.innerText="Find talent";
    
    let forDesigner=document.createElement("h4");
    forDesigner.innerText="For Designer";
    
    let inspiration=document.createElement("h4");
    inspiration.innerText="Inspiration";
    
    let learnDesign=document.createElement("h4");
    learnDesign.innerText="Learn design";
    
    let goPro=document.createElement("h4");
    goPro.innerText='Go Pro';
    goPro.style.color="red";
    
    let logBtn = document.createElement("button");
    logBtn.innerText="Log in";
    logBtn.addEventListener("click",function(){
        window.open("./loginSignup/login.html","_blank");
    })
    
    let signBtn = document.createElement("button");
    signBtn.innerText='Sign up';
    signBtn.addEventListener("click",function(){
        window.open("./loginSignup/signup.html","_blank");
    })
    
    menuDiv.append(img, findTalent,forDesigner,inspiration,learnDesign,goPro);
    loginSignupDiv.append(logBtn,signBtn);
    navbar.append(menuDiv,loginSignupDiv);
}
navbar()

function footer(){
    let footer=document.querySelector("footer");
    let div1=document.createElement("div");
    let img=document.createElement("img");
    let about=document.createElement("p");
    about.innerText="Dribbble is the world’s leading community for creatives to share, grow, and get hired."
    img.src="./data/logo.png";
    let socialMedia=document.createElement("div");
    let wiki=document.createElement("img");
    wiki.src="";
    let twitter=document.createElement("img");
    twitter.src="";
    let facebook=document.createElement("img");
    facebook.src="";
    let insta=document.createElement("img");
    insta.sr="";
    let pin=document.createElement("img");
    pin.src="";
    socialMedia.append(wiki,twitter,facebook,insta,pin);
    div1.append(img,p,socialMedia);

    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let div4=document.createElement("div");
    let div5=document.createElement("div");
    let div6=document.createElement("div");
    footer.append(div1,div2,div3,div4,div5,div6);
}
// footer()