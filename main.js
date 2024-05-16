
const mainPageItemPane=document.getElementById('mainPageItemPane');
const itemShow=document.getElementById("itempane");
const userButton=document.getElementById("userButton");
const userMenu=document.getElementById("userPane");
const itemList=document.getElementById("itemList");
var temporaryPanes;




//Pre declarations 

var tempItems;
var userDetails;





//Main Page Item PAnel 
var mainPageItems=(item)=>{
    return `<button class="w-10/12 h-52 flex justify-between bg-zinc-200 px-20 my-5 rounded-3xl border-zinc-500 shadow-lg "    >
    <img class=" w-2/12  h-full " src="${item.imgsrc}" />
      <div class="flex flex-col items-start justify-between py-2 ps-10 w-full">
        <div class="text-2xl">${item.item_name}</div>
        <div classN="text-lg">${item.item_desc} </div>
          <div class="text-3xl ">₹${item.item_price}</div>
      </div>
    </button> `
};

// MainPAge Item Render
for(let i=0;i<10;i++){
    fetch('http://127.0.0.1:4534/getRandomItems',{method:"POST"}).then((res)=>res.json()).then((data)=> data.map((data) =>mainPageItemPane.innerHTML+=mainPageItems(data)));
}

//Item ShowCase
var itemShowcase=(item)=>{
    return `<div class= "fixed w-8/12 h-3/4 flex  items-center justify-between bg-neutral-100 px-10 rounded-2xl shadow-xl border-2 border-zinc-100 inset-x-60 inset-y-10 ">
        
    <img class="w-1/3 rounded-lg" src="${item.imgsrc}" />
    <div class="flex flex-col items-center h-full py-10 justify-around w-1/2">
        <button class="w-1/12 self-end bg-slate-600 text-gray-300 rounded-full" onclick="()=>itemshow.innerHTML="" " }>X</button>
        <div class="text-3xl">${item.item_name}</div>
      <div class="">${item.item_desc} </div>
      <div class=""></div>
      <button class="w-1/3 py-5 bg-slate-600 text-gray-300 rounded-full">BUY NOW</button>
    </div>
  </div>`
}






userMenu.classList='hidden';




//SignUP Login change Controller



//Working functions 


//Signup Login Page Worker
const showLoginSign=()=>{
    if(userMenu.classList=="hidden") userMenu.classList="";
    else userMenu.classList="hidden";
    console.log(userMenu.classList);
}

//Swap between signup and loging 
const slideLoginSign=()=>{
    const signUpForm=document.getElementById("signupform");
    const loginForm=document.getElementById("loginform");
    
    if(signUpForm.classList.contains("hidden")){

        signUpForm.classList.replace("hidden","block");
        loginForm.classList.replace("block","hidden");
    }
    else{
        signUpForm.classList.replace("block","hidden");
        loginForm.classList.replace("hidden","block");
    }

    console.log(signUpForm.classList);
    console.log(loginForm.classList);
}



//Finding Some Item
const findItems=(value)=>{
    fetch('')
}