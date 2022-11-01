 function addEmp(){
    employee={
        id:empid.value,
        ename:empname.value,
        empadr:empadr.value,
        empdes:empdes.value,
        empexp:empexp.value,
        empsal:empsal.value
    }
    if(employee.id in localStorage)
    {
      alert(' Employee Already Exists')
    }else{

        //emp=JSON.stringify(employee)
        localStorage.setItem(employee.id,JSON.stringify(employee))
        alert("Employee Details Added Successfully")
        
    }
 }

 function searchId(){
    key=searchKey.value
    data=''
    if(key in localStorage){
      employee=JSON.parse(localStorage.getItem(key))
      data=[employee.id,employee.ename,employee.empadr,employee.empdes,employee.empexp,employee.empsal]
      //alert(data)
      employeeform.innerHTML=`<p>Employee Id: ${data[0]}<br>
       Employee Name:${data[1]} <br>
       Employee Address:${data[2]}<br>
       Employee Designation:${data[3]}<br>
       Employee Experience:${data[4]}<br>
       Employee Salary:${data[5]}</p>`
    }else{
        alert('not found')
    }
    
 }