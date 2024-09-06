




let inputAdmin=document.getElementById("inputAdmin");
let btnAdmin=document.getElementById("btnAdmin");
let adminAccessBtn=document.getElementById("adminAccessBtn");
let pTag= document.getElementById("pTag");
let uploadBox=document.getElementById("uploadBox");
let uploadData=document.getElementById("uploadData");
let downloadData=document.getElementById("downloadData");
let flexCheckDefault=document.getElementById("flexCheckDefault");

let zipCode = document.getElementById("zipVal");
let SearchBtn= document.getElementById("searchZip");
let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");
let hrTag = document.getElementById("hrTag");
let table1Con = document.getElementById("table1Con");
let errorMsg = document.getElementById("errorMsg");
SearchBtn.addEventListener("click", printVal);

function printVal(){
   
    let zipCodeVal=zipCode.value;
console.log(zipCodeVal)
// if(zipCodeVal && select==true){


// }
// if(zipCodeVal && select==false){


// }

    if(zipCodeVal==123){

        let data= [["CCC-125","abcd","5825852","This mear of rows","For example the array below hs three rows and four elements"],
        ["CCC-125","xyz","Skggh","the number of rows","For example whree rows and four elements"],
        ["CCC-126","RZ&RDT","PPPPPP","the number of rows","For example whree rows and four elements"],
        ["CCC-127","WRE"," two-dimensional","ay berows and four elements","arrays have a fix"],
        ["CCC-128","DD258"," note that ","This means that ","the array below has three rows and four elements"]
        ]
    //     let ViolData=[["suni","kumar"],
    //     ["suni","kumar"]
    // ]
        console.log(data)
        
            if(data.length>0){
                table1Con.classList.remove("d-none");
                hrTag.classList.remove("d-none");
                let rows=""
               
                rows+= "<thead>";
                rows+= "<tr>";
                rows+= "<th>Code</th>";
                rows+= "<th>Second Data</th>";
                rows+= "<th>Third data</th>";
                rows+= "<th>Forth Data</th>";
                rows+= "<th>Fifth Data</th>";
                rows+= "</tr>";
                rows+= "</thead>";
                for(var i=0; i<data.length; i++){
                  rows+= "<tbody>";
                  rows+= "<tr>";
                  rows+= "<td>"+ data[i][0] +"</td>";
                  rows+= "<td>"+ data[i][1] +"</td>";
                  rows+= "<td>"+ data[i][2] +"</td>";
                  rows+= "<td>"+ data[i][3] +"</td>";
                  rows+= "<td>"+ data[i][4] +"</td>";
                  rows+= "</tr>";
                  rows+= "</tbody>";
                }
                table1.innerHTML=rows;
              let checkBoxVal=flexCheckDefault.checked;
              console.log("check box value   " +checkBoxVal);

             
              if(checkBoxVal){
                let data1= [["Shh-125","Lorem  Account" ],
                ["DD-125","Cara grteon"],
                ["DD-125","Cara grteon"],
                ["DD-125","Cara grteon"]]
                table2Vio.classList.remove("d-none");
                let rows1=""
               
                rows1+= "<thead>";
                rows1+= "<tr>";
                rows1+= "<th>S.No.</th>";
                rows1+= "<th>Description</th>";
                rows1+= "</tr>";
                rows1+= "</thead>";
                for(var i=0; i<data1.length; i++){
                  rows1+= "<tbody>";
                  rows1+= "<tr>";
                  rows1+= "<td>"+ data1[i][0] +"</td>";
                  rows1+= "<td>"+ data1[i][1] +"</td>";
                  rows1+= "</tr>";
                  rows1+= "</tbody>";
                }
                table2.innerHTML=rows1;

              }
        }

    }else{
        errorMsg.innerHTML= "Enter a valid Zip Code";
        setTimeout(function () {document.getElementById("errorMsg").innerHTML = ""}, 3000);
    }
   
}


  


function adminAccess(){
    
    inputAdmin.classList.remove("d-none");
    btnAdmin.classList.remove("d-none");
    // adminAccessBtn.classList.remove("btn-primary");
    // adminAccessBtn.classList.add("btn-secondary");
    adminAccessBtn.disabled = true;
}

function submitPassword(){

    let originalPass= "12345"
    let enteredPass = inputAdmin.value;
if(originalPass == enteredPass){
    inputAdmin.classList.add("d-none");
    btnAdmin.classList.add("d-none");
    uploadBox.classList.remove("d-none");
    uploadData.classList.remove("d-none");
    downloadData.classList.remove("d-none");
    
}else{
    
pTag.innerText= "You have entered wrong Password!"
setTimeout(function () {document.getElementById("pTag").innerHTML = ""}, 3000);

}
}


function unique(){
    let mainArray=["AA-125","CC-312","RZ-1378","AA-125","CC-312","RZ-1378","AA-125","CC-312","RZ-1378"]
    let uniqueArr=[...new Set(mainArray)]
    console.log(uniqueArr)
    }

function uploadContaminationData(){

}

function zipCodeSearch(){

}