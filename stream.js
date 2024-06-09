const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'data', 'data.json');
const filePath2 = path.join(__dirname, 'data', 'data3.json');

fs.readFile(filePath, 'utf8',( err, data) => {
    if (err) {
        console.log('Error reading' , err);
    }

    let dataJson; 
    try{
        dataJson= JSON.parse(data)
    } catch (err) {
        console.log('err parse', err);
    }

    const jsonString = JSON.stringify(dataJson, null, 2)

    fs.writeFile(filePath2, jsonString, 'utf8', (writeErr)=> {
        if (writeErr) {
            console.log('Error writing', writeErr);
        }
        console.log('Data successfully');
    });
});