const express = require('express');
const cluster = require('cluster');
const os = require('os');
const helmet = require('helmet');
const cors = require('cors');
const routing = require('./routes/route');

const app = express();
const Port = process.env.PORT || 3000;
app.use(express.json());
app.use('/api/v1',routing);
app.use(cors());
app.use(helmet());

if(cluster.isMaster){
   for(let i = 0; i <os.cpus().length-3;i++){
      cluster.fork();
   }
}

else app.listen(Port,()=>{
   console.log(`server started at ${Port}`);
})