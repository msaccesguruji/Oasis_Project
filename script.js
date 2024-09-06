




let inputAdmin=document.getElementById("inputAdmin");
let btnAdmin=document.getElementById("btnAdmin");
let adminAccessBtn=document.getElementById("adminAccessBtn");
let pTag= document.getElementById("pTag");
let uploadBox=document.getElementById("uploadBox");
let uploadData=document.getElementById("uploadData");
let downloadData=document.getElementById("downloadData");
let flexCheckDefault=document.getElementById("flexCheckDefault");
let imgDiv= document.getElementById("imgDiv")
let zipCode = document.getElementById("zipVal");
let SearchBtn= document.getElementById("searchZip");
let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");
let hrTag = document.getElementById("hrTag");
let table1Con = document.getElementById("table1Con");
let table2Vio=document.getElementById("table2Vio");
let errorMsg = document.getElementById("errorMsg");
SearchBtn.addEventListener("click", printVal);

function printVal(){
   
    let zipCodeVal=zipCode.value;

// if(zipCodeVal && select==true){


// }
// if(zipCodeVal && select==false){


// }

    if(zipCodeVal==123){

        let data=
           [['PB90',
             'LEAD SUMMARY',
             'Lead is a toxic heavy metal that can be found in drinking water, primarily due to the corrosion of old plumbing systems, such as lead pipes, fixtures, and solder.',
             'Lead exposure is highly dangerous, especially for children, as it can cause developmental delays, learning difficulties, and behavioral issues. In adults, lead can result in hypertension, kidney damage, and reproductive problems. Even low levels of lead in drinking water can have serious health effects, making it one of the most concerning contaminants.',
             'LEAD & VOC Pack'],
            
            ['CU90',
             'COPPER SUMMARY',
             'Copper is a metal that can leach into drinking water primarily from the corrosion of copper pipes and plumbing fixtures.',
             'While copper is an essential nutrient in small amounts, excessive exposure can cause gastrointestinal distress, including nausea, vomiting, and diarrhea. Long-term exposure to high levels of copper in drinking water can lead to liver and kidney damage and may cause complications for individuals with Wilson’s disease, a genetic disorder that causes copper accumulation in the body.',
             'Anti-Scale & Heavy Metals Pack'],
            ['2V08',
             '8 Regulated Phase I VOCs',
             '\t1.\tBenzene\n\t2.\tCarbon Tetrachloride\n\t3.\t1,2-Dichloroethane\n\t4.\t1,1-Dichloroethylene\n\t5.\tTrichloroethylene\n\t6.\t1,1,1-Trichloroethane\n\t7.\tVinyl Chloride\n\t8.\tTetrachloroethylene (also known as Perchloroethylene)',
             'This group of contaminants, which includes chemicals like Benzene and Vinyl Chloride, poses serious health risks including cancer, liver and kidney damage, and nervous system effects. Long-term exposure to these VOCs can lead to chronic health issues such as organ damage and increased cancer risk. Many of these chemicals are known carcinogens, making them particularly hazardous in drinking water.',
             'Chloramine & VOC Pack'],
            ['2V07',
             '7 Regulated Phase I VOCs',
             '\t1.\tBenzene\n\t2.\tCarbon Tetrachloride\n\t3.\t1,2-Dichloroethane\n\t4.\t1,1-Dichloroethylene\n\t5.\tTrichloroethylene\n\t6.\t1,1,1-Trichloroethane\n\t7.\tVinyl Chloride\n\t8.\tTetrachloroethylene (also known as Perchloroethylene)',
             'This group of contaminants, which includes chemicals like Benzene and Vinyl Chloride, poses serious health risks including cancer, liver and kidney damage, and nervous system effects. Long-term exposure to these VOCs can lead to chronic health issues such as organ damage and increased cancer risk. Many of these chemicals are known carcinogens, making them particularly hazardous in drinking water.',
             'Chloramine & VOC Pack']];
        
        
        // [["CCC-125","abcd","5825852","This mear of rows","For example the array below hs three rows and four elements"],
        // ["CCC-125","xyz","Skggh","the number of rows","For example whree rows and four elements"],
        // ["CCC-126","RZ&RDT","PPPPPP","the number of rows","For example whree rows and four elements"],
        // ["CCC-127","WRE"," two-dimensional","ay berows and four elements","arrays have a fix"],
        // ["CCC-128","DD258"," note that ","This means that ","the array below has three rows and four elements"]
        // ]
    
         
            if(data.length>0){
                table1Con.classList.remove("d-none");
                hrTag.classList.remove("d-none");
                let rows=""
               
                rows+= "<thead>";
                rows+= "<tr>";
                rows+= "<th>Code</th>";
                rows+= "<th>Description</th>";
                rows+= "<th>Contaminant Description</th>";
                rows+= "<th>Health Hazard</th>";
                rows+= "<th>Filter Pack Match</th>";
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
                let imgDataArray=["LEAD & VOC Pack", "Chloramine & VOC Pack","Anti-Scale & Heavy Metals Pack","LEAD & VOC Pack", "Chloramine & VOC Pack","Chloramine & VOC Pack","Anti-Scale & Heavy Metals Pack",]
                let uniqueImgArr=[...new Set(imgDataArray)]
                let images= {'LEAD & VOC Pack':'Images/Lead&VOC.png',
                            'Chloramine & VOC Pack':'Images/Chloramine.png',
                            'Anti-Scale & Heavy Metals Pack':'Images/AntiScale.png'
                }
                imgDiv.innerHTML="";
uniqueImgArr.forEach((code)=>{
   let img=document.createElement('img');
   img.src=images[code];
   img.classList.add('img-fluid');
   img.classList.add('mx-2');
   img.style.height='80px';
   imgDiv.appendChild(img)
})


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
                rows1+= "<th style='width:100px;'>S.No.</th>";
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
        imgDiv.innerHTML="";
        table1.innerHTML="";
        table2.innerHTML="";
        table1Con.classList.add("d-none");
        table2Vio.classList.add("d-none");  
        hrTag.classList.add("d-none");
        errorMsg.innerHTML= "Enter a valid Zip Code";
        
        setTimeout(function () {document.getElementById("errorMsg").innerHTML = "";
            
        }, 3000);
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
    let mainArray=["LEAD & VOC Pack", "Chloramine & VOC Pack","Anti-Scale & Heavy Metals Pack","LEAD & VOC Pack", "Chloramine & VOC Pack","Chloramine & VOC Pack","Anti-Scale & Heavy Metals Pack",]
    let uniqueArr=[...new Set(mainArray)]
    console.log(uniqueArr)
    }

function uploadContaminationData(){

}

function zipCodeSearch(){

}