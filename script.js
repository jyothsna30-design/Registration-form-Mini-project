var row = null;

//OnSubmit 
function clicked(){
    var studentData = saveData();
    console.log(studentData);
     studentData = validate(studentData);

    var readData = dataFromLocalStorage(studentData);
   
    if(readData == null){
        return;
    }
    //insertion
    else{
    if(row==null){
     insertRecord(readData);
     alert("inserted");
    }
    //edit
    else{
     update();
    }
   resetForm();
    
}
}
 // Validation
function validate(studentData){
     if(studentData == null){  //null values validation
        alert("Enter the data");
    }
    else if(!(/^[A-Za-z]+$/.test(studentData.studentname))){  //alphabets validation
        alert("Enter Alphabets in Student name.")
    }
    else if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(studentData.email))){ //email validation
        alert("Enter correct email");
    }
    //contact number validation
    else if(document.getElementById("contactnumber").value.length<10 || document.getElementById("contactnumber").value.length>10 ){
        alert("Enter correct contact number with 10 digits and numeric values");
    }
    //numeric value validation
    else if(isNaN(document.getElementById("contactnumber").value) || isNaN(document.getElementById("studentid").value))
    {
        alert("Only numbers are allowed in studentid and contact number");
    }
    else {
       return studentData;
    }
    return;
}
//getting data from form
function saveData(){
    var studentname= document.getElementById("studentname").value;
    var studentid= document.getElementById("studentid").value;
    var email= document.getElementById("email").value;
    var contactno= document.getElementById("contactnumber").value;

    var arr = {studentname,studentid,email,contactno};
    
    
    if(arr.studentname=="" || arr.studentid==""||arr.email==""|| arr.contactno== ""){
        alert("Empty fields are not allowed");
        return;
    }
    else 
      return arr;
}
// Storing and retriving in local storage
function dataFromLocalStorage(studentData)
{
    console.log(studentData.studentname);


    
    localStorage.setItem("studentname",studentData.studentname);
    localStorage.setItem("studentid",studentData.studentid);
    localStorage.setItem("email",studentData.email);
    localStorage.setItem("contactnumber",studentData.contactno);
    

    var sn1 = localStorage.getItem("studentname");
    var si1 = localStorage.getItem("studentid");
    var em1 = localStorage.getItem("email");
    var co1 = localStorage.getItem("contactnumber");
    

    var arr={sn1,si1,em1,co1};
    console.log(arr);
    return arr;
   

}
//inserting a row in table
function insertRecord(readData){

    console.log("reda",readData);
   
    var row=  document.getElementById("table").insertRow();
    row.style.border="2px solid black";
    row.style.fontWeight ="bold";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = readData.sn1;
    cell2.innerHTML = readData.si1;
    cell3.innerHTML = readData.em1;
    cell4.innerHTML = readData.co1;
    row.insertCell(4).innerHTML = '<button onclick=edit(this) class="border-2 rounded-lg m-2">Edit</button> <button onclick=deleting(this) class="border-2 rounded-lg m-2">delete</button> '

}
//editing a row
function edit(td){
    row = td.parentElement.parentElement;
    document.getElementById("studentname").value= row.cells[0].innerHTML;
    document.getElementById("studentid").value= row.cells[1].innerHTML;
    document.getElementById("email").value= row.cells[2].innerHTML;
    document.getElementById("contactnumber").value= row.cells[3].innerHTML;

}
//updating a row
function update(){
    row.cells[0].innerHTML = document.getElementById("studentname").value;
    row.cells[1].innerHTML= document.getElementById("studentid").value;
    row.cells[2].innerHTML = document.getElementById("email").value;
    row.cells[3].innerHTML = document.getElementById("contactnumber").value;
    row = null;
}
//delete a row
function deleting(td){
    var ans = confirm("Do you want to continue?");
    if(ans){
    row= td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    }
}
//reseting form after submit
function resetForm()
{
    document.getElementById("studentname").value="";
    document.getElementById("studentid").value="";
    document.getElementById("email").value="";
    document.getElementById("contactnumber").value="";

}