const mongoose = require('mongoose')

const bookingsSchema = new mongoose.Schema({
    today:{
        type:String
    },
    user:{
        type: Object,
        required: false
    },
    giorno:{
        type:Number,
        required: true
    },
    mese:{
        type:String,
        required: true
    },
    anno:{
        type:Number,
        required: true
    },
    ora:{
        type:Number,
        required: true
    },
    minuto:{
        type:Number,
        required: true
    },
    status:{
        type: String,
        default:"Da approvare"
    },
    motivoRifiuto:{
        type: String
    }

},{ timestamps:true })


module.exports = mongoose.model("BookingModel", bookingsSchema);
