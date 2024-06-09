const fs = require('fs');
const path= require('path');
const filePath = path.join(__dirname, 'data', 'data.json');
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
       console.error('err file', err);
       return 
    }
    let jsonData; 
    try {
        jsonData = JSON.parse(data)
    }catch (parseErr){
        console.error('err data', parseErr );
        return
    }
    const jsonString = JSON.stringify(jsonData, null, 2);
    const Filedata = path.join(__dirname,jsonString, 'data3.json');
  
    fs.writeFile(Filedata, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing file:', writeErr);
        return;
      }
      console.log('Data successfully file.');
    });
})

