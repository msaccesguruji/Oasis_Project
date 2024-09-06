// DOM elements caching
const elements = {
    inputAdmin: document.getElementById("inputAdmin"),
    btnAdmin: document.getElementById("btnAdmin"),
    adminAccessBtn: document.getElementById("adminAccessBtn"),
    pTag: document.getElementById("pTag"),
    uploadBox: document.getElementById("uploadBox"),
    uploadData: document.getElementById("uploadData"),
    downloadData: document.getElementById("downloadData"),
    flexCheckDefault: document.getElementById("flexCheckDefault"),
    imgDiv: document.getElementById("imgDiv"),
    zipCode: document.getElementById("zipVal"),
    searchBtn: document.getElementById("searchZip"),
    table1: document.getElementById("table1"),
    table2: document.getElementById("table2"),
    hrTag: document.getElementById("hrTag"),
    table1Con: document.getElementById("table1Con"),
    table2Vio: document.getElementById("table2Vio"),
    errorMsg: document.getElementById("errorMsg")
};

// Event listeners
elements.searchBtn.addEventListener("click", handleZipCodeSearch);

// Function to handle zip code search and table display
function handleZipCodeSearch() {
    const zipCodeVal = elements.zipCode.value;

    if (zipCodeVal === "123") {
        const data = getData();
        if (data.length > 0) {
            displayTable1(data);
            displayImages(getUniqueValues(data.map(item => item[4])));
            if (elements.flexCheckDefault.checked) {
                displayTable2(getTable2Data());
            }
        }
    } else {
        displayError("Enter a valid Zip Code");
        resetView();
    }
}

// Function to display Table 1
function displayTable1(data) {
    elements.table1Con.classList.remove("d-none");
    elements.hrTag.classList.remove("d-none");

    let rows = `
        <thead>
            <tr>
                <th>Code</th>
                <th>Description</th>
                <th>Contaminant Description</th>
                <th>Health Hazard</th>
                <th>Filter Pack Match</th>
            </tr>
        </thead>
        <tbody>
            ${data.map(row => `
                <tr>
                    <td>${row[0]}</td>
                    <td>${row[1]}</td>
                    <td>${row[2]}</td>
                    <td>${row[3]}</td>
                    <td>${row[4]}</td>
                </tr>`).join('')}
        </tbody>`;
    
    elements.table1.innerHTML = rows;
}

// Function to display images
function displayImages(uniqueImgArr) {
    const images = {
        'LEAD & VOC Pack': 'Images/Lead&VOC.png',
        'Chloramine & VOC Pack': 'Images/Chloramine.png',
        'Anti-Scale & Heavy Metals Pack': 'Images/AntiScale.png'
    };
    
    elements.imgDiv.innerHTML = uniqueImgArr.map(code => `
        <img src="${images[code]}" class="img-fluid mx-2" style="height:80px;">`).join('');
}

// Function to display Table 2
function displayTable2(data) {
    elements.table2Vio.classList.remove("d-none");

    let rows = `
        <thead>
            <tr>
                <th style='width:100px;'>S.No.</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            ${data.map(row => `
                <tr>
                    <td>${row[0]}</td>
                    <td>${row[1]}</td>
                </tr>`).join('')}
        </tbody>`;
    
    elements.table2.innerHTML = rows;
}

// Function to display an error message
function displayError(message) {
    elements.errorMsg.innerHTML = message;
    setTimeout(() => { elements.errorMsg.innerHTML = ""; }, 3000);
}

// Function to reset the view
function resetView() {
    elements.imgDiv.innerHTML = "";
    elements.table1.innerHTML = "";
    elements.table2.innerHTML = "";
    elements.table1Con.classList.add("d-none");
    elements.table2Vio.classList.add("d-none");  
    elements.hrTag.classList.add("d-none");
}

// Admin access functions
function adminAccess() {
    elements.inputAdmin.classList.remove("d-none");
    elements.btnAdmin.classList.remove("d-none");
    elements.adminAccessBtn.disabled = true;
}

function submitPassword() {
    const originalPass = "12345";
    const enteredPass = elements.inputAdmin.value;

    if (originalPass === enteredPass) {
        elements.inputAdmin.classList.add("d-none");
        elements.btnAdmin.classList.add("d-none");
        elements.uploadBox.classList.remove("d-none");
        elements.uploadData.classList.remove("d-none");
        elements.downloadData.classList.remove("d-none");
    } else {
        elements.pTag.innerText = "You have entered wrong Password!";
        setTimeout(() => { elements.pTag.innerHTML = ""; }, 3000);
    }
}

// Data fetching and processing functions
function getData() {
    return [
        ['PB90', 'LEAD SUMMARY', 'Lead is a toxic heavy metal...', 'Lead exposure is highly dangerous...', 'LEAD & VOC Pack'],
        ['CU90', 'COPPER SUMMARY', 'Copper is a metal...', 'While copper is an essential nutrient...', 'Anti-Scale & Heavy Metals Pack'],
        ['2V08', '8 Regulated Phase I VOCs', '1. Benzene\n2. Carbon Tetrachloride...', 'This group of contaminants...', 'Chloramine & VOC Pack'],
        ['2V07', '7 Regulated Phase I VOCs', '1. Benzene\n2. Carbon Tetrachloride...', 'This group of contaminants...', 'Chloramine & VOC Pack']
    ];
}

function getTable2Data() {
    return [
        ["Shh-125", "Lorem Account"],
        ["DD-125", "Cara grteon"],
        ["DD-125", "Cara grteon"],
        ["DD-125", "Cara grteon"]
    ];
}

// Function to get unique values from an array
function getUniqueValues(arr) {
    return [...new Set(arr)];
}
