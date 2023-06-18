let form = document.querySelector('form');
let Data=JSON.parse(localStorage.getItem('userData'))||[];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(userName.value==""||password.value==""){
        alert("Please fill all the fields");
    }else{
        let objData={
            name:form.name.value,
            user_name:form.userName.value,
            email:form.email.value,
            password:form.password.value
        }
        Data.push(objData);
        let loading=document.querySelector(".loading")
        let loaingImg=document.createElement("img");
        loaingImg.class="loadingImg"
        loaingImg.src="https://media.tenor.com/guhB4PpjrmUAAAAM/loading-loading-gif.gif"
        let waitText=document.createElement("p");
        waitText.innerText="Please Wait....";
        setTimeout(function(){
            waitText.innerText="Account Created Successfully";
            waitText.style.color="green";
            localStorage.setItem('userData', JSON.stringify(Data));
        },1500);
        setTimeout(function(){
            window.location.href="/loginSignup/login.html";
        },2000);
        loading.append(loaingImg,waitText);
    }
   
});
