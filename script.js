document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all tab buttons and tab content
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content-item').forEach(content => content.classList.remove('active'));
        
        // Add active class to the clicked tab button and corresponding tab content
        button.classList.add('active');
        const tabContentId = button.getAttribute('data-tab');
        document.getElementById(tabContentId).classList.add('active');
        console.log("Hello");
    });
});

// Handle changes in combo boxes
// document.querySelectorAll('.combo-box').forEach(comboBox => {
//     comboBox.addEventListener('change', (event) => {
//         const selectedValue = event.target.value;
//         const textFieldId = event.target.id.replace('combo', 'text');
//         const textField = document.getElementById(textFieldId);
        
//         if (textField) {
//             textField.value = selectedValue;
//         }
//     });
// });


// Example of handling button clicks in the control panel
document.getElementById('fetch').addEventListener('click', () => {
    console.log('Fetch button clicked');
});
document.getElementById('read').addEventListener('click', () => {
    console.log('Read button clicked');
});
document.getElementById('save').addEventListener('click', () => {
    console.log('Save button clicked');
});
document.getElementById('reboot').addEventListener('click', () => {
    console.log('Reboot button clicked');
});
document.getElementById('upload').addEventListener('click', () => {
    console.log('Upload button clicked');
});
document.getElementById('temperature').addEventListener('click', () => {
    console.log('Temperature button clicked');
});

// Handling the WFB Settings form (make sure to add similar logic for other combo boxes if needed)
// Example for comboBox2 specifically if you want to target a specific combo box
document.getElementById('combo58TXPwr').addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    const textField = document.getElementById('txt58TXPwr'); // Assuming the text field has ID 'textBox2'
    
    if (textField) {
        textField.value = `driver_txpower_override=${selectedValue}`;
    } else {
        console.error('Text field not found: txt58TXPwr');
    }
});
document.getElementById('combo24TXPwr').addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    const textField = document.getElementById('txt24TXPwr'); // Assuming the text field has ID 'textBox2'
    
    if (textField) {
        textField.value = `txpower=${selectedValue}`;
    } else {
        console.error('Text field not found: txt24TXPwr');
    }
});

document.getElementById('combo58Freq').addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    const textField = document.getElementById('txt58Freq'); // Assuming the text field has ID 'textBox2'
    
    if (textField) {
        // Regular expression to match the value within the brackets
        const match = selectedValue.match(/\[(\d+)\]/);
        var channel = null
        if(match) {
            channel = match[1];
            console.log(channel); // Output: 40
        }
        textField.value = `channel=${channel}`;
    } else {
        console.error('Text field not found: txt58TXPwr');
    }
});

document.getElementById('combo24Freq').addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    const textField = document.getElementById('txt24Freq'); // Assuming the text field has ID 'textBox2'
    
    if (textField) {
        // Regular expression to match the value within the brackets
        const match = selectedValue.match(/\[(\d+)\]/);
        var frequency = null
        if(match) {
            frequency = match[1];
            console.log(frequency); // Output: 40
        }
        textField.value = `frequency=${frequency}`;
    } else {
        console.error('Text field not found: txt58TXPwr');
    }
});

document.getElementById('comboMCSIndex').addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    const textField = document.getElementById('txtMCSIndex'); // Assuming the text field has ID 'textBox2'
    
    if (textField) {
        textField.value = `mcs_index=${selectedValue}`;
    } else {
        console.error('Text field not found: txt24TXPwr');
    }
});

document.getElementById('save-wfb').addEventListener('click', async () => {
    console.log('Save WFB button clicked');
    const filename = 'wfb.conf'; // Example filename, change as needed
    
    console.log('window.api:', window.api); // Check if window.api is defined

    try {
        //const exists = await window.api.fileExists(filename);
        console.log("before");
        const exists = await window.api.fileExists(filename);
        console.log("after");

        // if (exists) {
        //     // File exists, proceed with saving
        //     await window.api.createFile(filename, content);
        //     console.log('File saved successfully');
        // } else {
        //     console.log('File does not exist. Creating new file.');
        //     await window.api.createFile(filename, content);
        //     console.log('File created and saved successfully');
        // }
    } catch (error) {
        console.error('Error saving file:', error);
    }

});