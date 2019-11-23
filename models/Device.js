const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
    id: {
        type:  String,
        required: [true, 'Device ID is Necessary' ]
    },
    IMEI: {
        type: String,
        required: [ true, 'IMEI should be provided' ]
    }
})

module.exports = mongoose.model('Devices', deviceSchema);