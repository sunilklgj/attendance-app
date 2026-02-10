function login() {
    let user = document.getElementById('username').value;
    if(user === "admin") {
        window.location.href = "admin.html";
    } else {
        window.location.href = "student.html";
    }
}

function addStudent() {
    let name = document.getElementById('stuName').value;
    alert("Student " + name + " added successfully!");
}

function saveAttendance() {
    alert("Attendance saved!");
}
