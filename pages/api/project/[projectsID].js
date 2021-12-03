export default (req, res) => {
  const fs = require('fs');
  const projectsID = req.query.projectsID
  fs.readdir('public/' + 'projects/' + projectsID, (err, files) => {
    if (err) {
      res.send('err');
    }
    else {
      files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
      console.log("\nCurrent directory filenames:");
      files.forEach(file => {
        console.log(file);
      })
      files = files.map(el => 'http://' + req.headers.host + '/projects/' + projectsID + '/' + el)
      res.json(files);
    }
  })
}
