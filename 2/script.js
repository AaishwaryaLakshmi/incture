function recordDetails() {
    const fullName = document.getElementById("fullName").value;
    const lastName = document.getElementById("lastName").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const specialization = document.getElementById("specialization").value;
    const experience = document.getElementById("experience").value;
    const achievements = document.getElementById("achievements").value;

    const student = {
        fullName,
        lastName,
        gender,
        age,
        specialization,
        experience,
        achievements
    };

    let students = JSON.parse(localStorage.getItem('students')) || [];

    students.push(student);

    localStorage.setItem('students', JSON.stringify(students));

    if (students.length === 3) {
        window.location.href = 'display.html';
    }

    clearForm();
}

// script.js

function clearRecords() {
    
    document.getElementById("recordTableBody").innerHTML = "";
    localStorage.removeItem("students");
}

function clearForm() {
    document.getElementById("recordForm").reset();
}

function filterRecords() {
    const specializationFilter = document.getElementById("filterSpecialization").value;
    const experienceFilter = parseInt(document.getElementById("filterExperience").value);

    const students = JSON.parse(localStorage.getItem('students')) || [];

    const filteredStudents = students.filter(student => {
        if (specializationFilter && student.specialization !== specializationFilter) {
            return false;
        }
        if (!isNaN(experienceFilter) && parseInt(student.experience) !== experienceFilter) {
            return false;
        }
        return true;
    });

    const tableBody = document.getElementById("recordTableBody");
    tableBody.innerHTML = '';

    filteredStudents.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.fullName}</td>
            <td>${student.lastName}</td>
            <td>${student.gender}</td>
            <td>${student.age}</td>
            <td>${student.specialization}</td>
            <td>${student.experience}</td>
            <td>${student.achievements}</td>
        `;
        tableBody.appendChild(row);
    });
}

filterRecords();
