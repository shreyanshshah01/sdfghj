const signIn=()=>{
    document.getElementById("admin-login").classList.replace("flex","hidden");
    document.getElementById("mainadminpanel").classList.replace("hidden","block");
}


//Adding New Category
const addCategory=()=>{
    const catID=document.getElementById("categoryID").value;
    const catName=document.getElementById("categoryName").value;
    const alertPanel=document.getElementById("categoryAlert");

    const data={
        todo:'add',
        categoryID:catID,
        categoryName:catName
    }
    alertPanel.textContent="";
    fetch('http://127.0.0.1:4534/manageCategory',{method:"POST", headers:{'Content-Type': 'application/json'},body:JSON.stringify(data) }).then((res)=>res.json()).then((data)=>{
        if(data.send){
            document.getElementById('addCategoryOverlay').classList.replace("block","hidden");
        }
        else{
            alertPanel.textContent="Category already exists";
        }
    });
}



//Deleting existing Category
const deleteCategory=(catID)=>{
    const data={
        todo:'remove',
        categoryID:catID,
        categoryName:""
    }
    fetch('http://127.0.0.1:4534/manageCategory',{method:"POST", headers:{'Content-Type': 'application/json'},body:JSON.stringify(data) })
    
}


//Adding new SUpplier
const addSupplier=()=>{
    const ID=document.getElementById('supplierID').value;
    const Name=document.getElementById('supplierName').value;
    const Address=document.getElementById('supplierAddress').value;
    const Password=document.getElementById('supplierPassword').value;
    const alertPanel=document.getElementById("supplierAlert");

    const data={
        todo:'add',
        supplierID:ID,
        supplierName:Name,
        supplierAddress:Address,
        supplierPassword:Password
    }

    alertPanel.textContent="";

    fetch('http://127.0.0.1:4534/manageSuppliers',{method:"POST", headers:{'Content-Type': 'application/json'},body:JSON.stringify(data) }).then((res)=>res.json()).then((data)=>{
        if(data.send){
            document.getElementById('addSupplierOverlay').classList.replace("block","hidden");
        }
        else{
            alertPanel.textContent="Supplier already exists";
        }
    });
}

const deleteSupplier=(item)=>{
    const data={
        todo:'remove',
        supplierID:item,
        supplierName:"",
        supplierAddress:"",
        supplierPassword:""
    }


    fetch('http://127.0.0.1:4534/manageSuppliers',{method:"POST", headers:{'Content-Type': 'application/json'},body:JSON.stringify(data) });

}

//Prototype of Category management Panel
const catProto=(item)=>{
    return `<div class="flex justify-between px-10 py-5 bg-gray-100 rounded-xl my-2">
    <div class="">${item.categoryName}</div>
    <button class=" py-1 px-5 bg-red-800 text-white rounded-full" onclick='deleteCategory("${item.categoryID}")'>DELETE CATEGORY</button>
</div>`
}

fetch('http://127.0.0.1:4534/getCategory',{method:'POST'}).then((res)=>res.json()).then((data)=>{data.map( (data)=> document.getElementById('showcategories').innerHTML+=catProto(data) )  });



//Prototype of Supplier Management Panel 
const supProto=(item)=>{
    return `<div class=" w-full flex justify-around px-5 py-10 bg-gray-100 rounded-xl shadow-xl">
    <div class="">${item.SID}</div>
    <div class="">${item.SName}</div>
    <div class="">${item.SAddress}</div>
    <button class="py-1 px-5 bg-red-800 text-white rounded-full" onclick="deleteSupplier('${item.SID}')">Remove Supplier</button>
</div>`
}

fetch('http://127.0.0.1:4534/getSuppliers',{method:'POST'}).then((res)=>res.json()).then((data)=>{data.map( (data)=> document.getElementById('showsuppliers').innerHTML+=supProto(data) )});


//Managing Windows
const showSupplierWindow=()=>{
    document.getElementById('categorypanel').classList.replace("block","hidden");
    document.getElementById('orderpanel').classList.replace("block","hidden");
    document.getElementById('supplierpanel').classList.replace("hidden","block");
}

const showCategoryWindow=()=>{
    document.getElementById('categorypanel').classList.replace("hidden","block");
    document.getElementById('orderpanel').classList.replace("block","hidden");
    document.getElementById('supplierpanel').classList.replace("block","hidden");
}
const showOrderWindow=()=>{
    document.getElementById('categorypanel').classList.replace("block","hidden");
    document.getElementById('orderpanel').classList.replace("hidden","block");
    document.getElementById('supplierpanel').classList.replace("block","hidden");
}




//Event Listners
document.getElementById('buttoncatadd').addEventListener('click',()=>document.getElementById('addCategoryOverlay').classList.replace("hidden","block") );
document.getElementById('buttonsupadd').addEventListener('click',()=>document.getElementById('addSupplierOverlay').classList.replace("hidden","block") );