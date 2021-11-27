const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const path = require('path');
const fs = require('fs'); 


// const taiwantravel = require('./pages/taiwantravel/index.html');

app.prepare().then(() => {
  const server = express()
  server.use('/taiwantravel/', express.static(path.join(__dirname, 'public/taiwantravel')) )
  server.use('/taiwantravel/*', express.static(path.join(__dirname, 'public/taiwantravel')) )
  
  server.use(express.static(path.join(__dirname, 'public')));
// http://localhost:3000/api/projects/2019-02-12-%E5%81%89%E4%BB%94
  // server.get('/api/projects/', projects);
  server.get('/api/projects/:projectsID', (req, res) => {
    // fs.readdir(__dirname + '/public/'+'projects/' +req.params.projectsID, (err, files) => { 
    //     if (err) 
    //       console.log(err); 
    //     else { 
    //       files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    //       console.log("\nCurrent directory filenames:"); 
    //       files.forEach(file => { 
    //         console.log(file); 
    //       }) 
    //       files = files.map(el=>'http://' +req.headers.host+'/projects/' +req.params.projectsID +'/' +el)
    //       res.json(files);
    //     } 
    //   }) 
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
