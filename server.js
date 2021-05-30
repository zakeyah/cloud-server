'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
app.get('/',(req,res)=>{
    res.send('all good from the server')
})

app.listen(PORT,()=>{
    console.log(`listening to PORT ${PORT}`);
})