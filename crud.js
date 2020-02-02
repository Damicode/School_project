
var newrow =null;
function processData(e){

    var info, data;
    
   info= new getinputData();
//    isEmpty(info);
    
 
   
   if(formValid()){
        
        if(newrow ==null){
    
       inserData(info);
            
           
    }
    
    else{
       Updatedata(info);
       
    }
  
   
    resetAll(info);

     }
}


function getinputData(data){
    
    var data={}, gender,i;
    
    data ["fname"]=document.getElementById("fname").value;
    data  ["lname"]=document.getElementById("lname").value;
    data  ["dob"]=document.getElementById("dob").required;
    data  ["dob"]=document.getElementById("dob").value;
    
    gender = document.getElementsByClassName("gender");
    
    for(i = 0 ; i<gender.length ; i++){
        
        if(gender[i].checked){
            
            data  ["genger"]= gender[i].value;
        }
    }
    
    
    return data;
}


function  inserData(info){
    
    var tab, tr, row; 
    
    tab = document.getElementById("the_table");
    
    tr = tab.getElementsByTagName("tbody")[0];
    
    row =tr.insertRow(tr.length);
    
    cell1 = row.insertCell(0);
    cell1.innerHTML =info.fname;
    
    cell2 = row.insertCell(1);
    cell2.innerHTML = info.lname;
    
     cell3 = row.insertCell(2);
    cell3.innerHTML = info.genger;
    
    
     cell4 = row.insertCell(3);
    cell4.innerHTML = info.dob;
    
     cell5 = row.insertCell(4);
    cell5.innerHTML = `<a href="#" onclick="Edit(this) "> Edit</a >
                        <a href="#" onclick="Remove(this) "> Remove</a>
                        <a href="#" onclick="action(this) "> Update</a>

                            `;
    
     
    
}

function Edit(a){
    
    
    
    newrow = a.parentElement.parentElement;
   
 document.getElementById("fname").value =newrow.cells[0].innerHTML;
    document.getElementById("lname").value=newrow.cells[1].innerHTML;
   
    document.getElementById("dob").value =newrow.cells[3].innerHTML;
    
    gender = document.getElementsByClassName("gender");
    
    for(i = 0 ; i<gender.length ; i++){
        
       
              if(gender[i].value == newrow.cells[2].innerHTML){
                
                gender[i].checked= true ;
               
            }
 
        
    }
   
 return newrow;
}





function resetAll(){
    
      document.getElementById("fname").value =" ";
    document.getElementById("lname").value= " ";
   
    document.getElementById("dob").value =" ";
    
    gender = document.getElementsByClassName("gender");
    
    for(i = 0 ; i<gender.length ; i++){
        
        if(gender[i].checked){
            
            gender[i].checked =false;
        }
    }
    
}

function Updatedata(info){
     
    newrow.cells[0].innerHTML =info.fname;
    newrow.cells[1].innerHTML =info.lname;
    newrow.cells[2].innerHTML =info.genger;
    newrow.cells[3].innerHTML =info.dob;
    
    resetAll();
}

function Remove(d){
    
     var tab, tr, row; 
    
    tab = document.getElementById("the_table");
    
    tr = tab.getElementsByTagName("tbody")[0];
    
if(confirm("are you sure you want to Delete this row ?")){
    
     
    row = d.parentElement.parentElement;
    tr.deleteRow(row.rowindex);
}
    
   
    resetAll();
    
    
}


//function myapp(){
//      val= document.getElementById("fname").value;
//    sp= document.getElementById("spanName");
//    
//    if (val=="" || val==null)
//        {
//        
//           sp.innerHTML ="name is required";
//            
//            if(val.match("/^[A-Za-z]+$/") !=null){
//                
//            }
//            else{
//                sp.innerHTML ="only leter is required";
//            }
//        }
//    else{
//        sp.innerHTML ="";
//    }
//  
//}





function validate(){
    isValid =true;
    
    
    if(document.getElementById("fname").value == ""){
        isValid =false;
        
        document.getElementById("spanName").classList.remove("hide");
       
    }
    else{
        isValid =true;
       if(!document.getElementById("spanName").classList.contains("hide"))
        document.getElementById("spanName").classList.add("hide");
     
    }
    
    
    return isValid;
}


function formValid(){
    
    
     var text,name,lname,mgs;
      name = document.getElementById("fname").value;
    lname= document.getElementById("lname").value;
       mgs = document.getElementById("message")
   
    
    if(name ==""){
        
        text = "First name is required";
        
        mgs.innerHTML =text;
        return false;
    }
    
    if(!name.match("[A-Za-z]") ){
        
         text = " can not take Number or Character Only  ";
        
        mgs.innerHTML =text;
        return false;
    }
    
    
    
      if(lname ==""){
        
        text = "Last name is required";
        
        mgs.innerHTML =text;
        return false;
    }
    
    if(!lname.match("[A-Za-z]") ){
        
         text = " can not take Number or Character Only ";
        
        mgs.innerHTML =text;
        return false;
    }
    
  
    
    else{
        mgs.innerHTML ="";
       
    }
    
   
    return true;
    
}












