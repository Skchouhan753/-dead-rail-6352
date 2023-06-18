let form = document.querySelector('form');
let userData=JSON.parse(localStorage.getItem('userData'));
form.addEventListener('submit', (e) => {
   e.preventDefault();
   if(form.user_name.value==""||form.password.value==""){
    alert("Please fill all the fields");
   }
   userData.forEach((element) => {
    if(element.email!==form.user_name.value&&element.password!==form.password.value){
        let loading=document.querySelector(".loading")
        let loaingImg=document.createElement("img");
        loaingImg.class="loadingImg"
        loaingImg.src="https://media.tenor.com/guhB4PpjrmUAAAAM/loading-loading-gif.gif";
        let waitText=document.createElement("p");
        waitText.innerText="Please Wait....";
        setTimeout(function(){
            waitText.innerText="Wrong! User name or Password Please try again";
            waitText.style.color="red";
            loaingImg.src="https://i.gifer.com/3WGL.gif";
        },1500);
        loading.append(loaingImg,waitText);     
    }
    else if(element.email===form.user_name.value&&element.password===form.password.value){
        let loading=document.querySelector(".loading")
        let loaingImg=document.createElement("img");
        loaingImg.class="loadingImg"
        loaingImg.src="https://media.tenor.com/guhB4PpjrmUAAAAM/loading-loading-gif.gif";
        let waitText=document.createElement("p");
        waitText.innerText="Please Wait....";
        setTimeout(function(){
            waitText.innerText="Login Successfull";
            waitText.style.color="green";
            loaingImg.src="https://i.gifer.com/7efs.gif";
        },1500)
        setTimeout(function(){
            window.location.href="/index.html";
        },5000);
        loading.append(loaingImg,waitText);        
        }
    })
});
