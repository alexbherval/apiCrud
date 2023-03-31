const mongoose = require('mongoose')
async function startBD(){
  await mongoose.connect(
    "mongodb+srv://abherval:Abherval5791@cluster0.nfpqnkd.mongodb.net/test"
  );
}

module.exports = startBD