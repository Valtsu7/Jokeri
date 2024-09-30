
const newRowBtn = document.getElementById('new-row-btn');
const jokerTable = document.getElementById('joker-table');
const rowCountElem = document.getElementById('row-count');

let rowCount = 0;


newRowBtn.addEventListener('click', function() {
    
    addJokerRow();
    
    rowCount++;
    rowCountElem.textContent = rowCount;
});

function addJokerRow() {
    
    const newRow = document.createElement('tr');
    
    
    for (let i = 0; i < 7; i++) {
        
        const newCell = document.createElement('td');
        newCell.textContent = Math.floor(Math.random() * 10);
        
        newRow.appendChild(newCell);
    }

   
    jokerTable.appendChild(newRow);
}
