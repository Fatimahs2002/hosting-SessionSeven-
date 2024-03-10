function RenderStudents(){
ddl_students=document.getElementById('ddl_students');
fetch('https://hostingusingrender-session-seven.onrender.com/students')
      .then(response => response.json())
      .then(data => data.forEach(students => {
let option=document.createElement('option');
option.innerHTML=students.name;
ddl_students.appendChild(option);
      })
     )};
     RenderStudents();
     