// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.querySelector("#addForm");
const employeesTable = document.querySelector("#employees");
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
const empCount = employeesTable.rows.length - 1;
const empCountElem = document.querySelector("#empCount");
empCountElem.textContent = empCount;
// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const ext = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const dept = document.getElementById('department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const eTable = document.getElementById('employees');
    const row = eTable.insertRow(-1);
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const idCol = row.insertCell(0);
    const nameCol = row.insertCell(1);
    const extCol = row.insertCell(2);
    const emailCol = row.insertCell(3);
    const deptCol = row.insertCell(4);
    const delCol = row.insertCell(5);
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    idCol.appendChild(document.createTextNode(id));
    nameCol.appendChild(document.createTextNode(name));
    extCol.appendChild(document.createTextNode(ext));
    emailCol.appendChild(document.createTextNode(email));
    deptCol.appendChild(document.createTextNode(dept));
    // CREATE THE DELETE BUTTON
    const delButton = document.createElement('button');
    delButton.className = 'btn btn-danger btn-sm delete';
    delButton.appendChild(document.createTextNode('X'));
    delCol.appendChild(delButton);
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    const employeeCount = document.getElementById('empCount');
    empCount.innerHTML = parseInt(empCount.innerHTML) + 1;
});
// DELETE EMPLOYEE
employeesTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      const row = e.target.closest('tr');
      const confirmDelete = confirm('Are you sure you want to delete this employee?');
      if (confirmDelete) {
        employeesTable.deleteRow(row.rowIndex);
        empCountElem.textContent = employeesTable.rows.length - 1;
      }
    }
  });