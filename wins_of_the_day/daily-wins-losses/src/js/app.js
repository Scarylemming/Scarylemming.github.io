document.addEventListener('DOMContentLoaded', () => {
    const winInput = document.getElementById('win');
    const lossInput = document.getElementById('loss');
    const submitWinButton = document.getElementById('submitWin');
    const submitLossButton = document.getElementById('submitLoss');
    const recordList = document.getElementById('recordList');
    const loadRecordsButton = document.getElementById('loadRecords');
    const recordDateInput = document.getElementById('recordDate');

    submitWinButton.addEventListener('click', () => {
        const win = winInput.value.trim();
        if (win) {
            addRecord('Win', win);
            winInput.value = '';
        }
    });

    submitLossButton.addEventListener('click', () => {
        const loss = lossInput.value.trim();
        if (loss) {
            addRecord('Loss', loss);
            lossInput.value = '';
        }
    });

    winInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            submitWinButton.click();
        }
    });

    lossInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            submitLossButton.click();
        }
    });

    loadRecordsButton.addEventListener('click', () => {
        const date = recordDateInput.value;
        if (date) {
            loadRecords(date);
        }
    });

    function addRecord(type, text) {
        const date = new Date().toISOString().split('T')[0];
        const li = document.createElement('li');
        li.textContent = `${date} - ${type}: ${text}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeRecord(date, type, text);
            li.remove();
        });
        li.appendChild(removeButton);
        recordList.appendChild(li);
        saveRecord(date, type, text);
    }

    function saveRecord(date, type, text) {
        const records = JSON.parse(localStorage.getItem('records')) || [];
        records.push({ date, type, text });
        localStorage.setItem('records', JSON.stringify(records));
    }

    function removeRecord(date, type, text) {
        let records = JSON.parse(localStorage.getItem('records')) || [];
        records = records.filter(record => !(record.date === date && record.type === type && record.text === text));
        localStorage.setItem('records', JSON.stringify(records));
    }

    function loadRecords(date) {
        const records = JSON.parse(localStorage.getItem('records')) || [];
        recordList.innerHTML = '';
        records.filter(record => record.date === date).forEach(record => {
            const li = document.createElement('li');
            li.textContent = `${record.date} - ${record.type}: ${record.text}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                removeRecord(record.date, record.type, record.text);
                li.remove();
            });
            li.appendChild(removeButton);
            recordList.appendChild(li);
        });
    }

    const today = new Date().toISOString().split('T')[0];
    loadRecords(today);
});