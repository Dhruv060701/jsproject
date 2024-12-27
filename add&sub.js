
const records = JSON.parse(localStorage.getItem('records')) || [];

function loadRecords() {
    const recordsList = document.getElementById('recordsList');
    recordsList.innerHTML = '<h3>Submitted Records</h3>';

    if (records.length === 0) {
        recordsList.innerHTML += '<p>No records submitted yet.</p>';
        return;
    }

    records.forEach((record, index) => {
        const recordDiv = document.createElement('div');
        recordDiv.classList.add('record');
        recordDiv.innerHTML = `
            <span>${record.name}, ${record.age} years old</span>
            <button class="delete-btn" onclick="deleteRecord(${index})">Delete</button>
        `;
        recordsList.appendChild(recordDiv);
    });
}

document.getElementById('recordForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    const newRecord = { name, age };

    records.push(newRecord);

    localStorage.setItem('records', JSON.stringify(records));

    document.getElementById('recordForm').reset();

    loadRecords();
});

function deleteRecord(index) {
 
    records.splice(index, 1);

    localStorage.setItem('records', JSON.stringify(records));

    loadRecords();
}

loadRecords();