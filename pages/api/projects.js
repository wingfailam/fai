export default (req, res) => {
    const fs = require('fs'); 
    fs.readdir(  'public/'+'projects/', (err, folders) => { 
        if (err) {
          console.log(err); 
          res.send('err');}
        else { 
          folders =folders.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
          console.log("\nCurrent directory filenames:"); 
          folders.forEach(file => { 
            console.log(file); 
          }) 
          res.json(folders);
        } 
      }) 
  }
  