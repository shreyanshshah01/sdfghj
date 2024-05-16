const signIn=()=>{
    document.getElementById("supplier-login").classList.replace("flex","hidden");
    document.getElementById("mainsupplierpanel").classList.replace("hidden","block");
}

const showOrderWindow=()=>{
    document.getElementById('productPane').classList.replace("block","hidden");
    document.getElementById('orderPane').classList.replace("hidden","block");
    document.getElementById('inventoryPane').classList.replace("block","hidden");
}
