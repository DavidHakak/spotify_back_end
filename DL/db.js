const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.connect(
            process.env.MONGO_URL,
            { useNewUrlParser: true, useUnifiedTopology: true },
            (err) => {
                if (err) throw "Error : " + err;
                console.log('Connection Success, state:', mongoose.connection.readyState);
            }
        )
    } catch (err) {
        console.log(err);
        throw err
    }
}

module.exports = { connect };