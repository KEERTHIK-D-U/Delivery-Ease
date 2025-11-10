import mongoose from 'mongoose';
import Counter from './counter.js';

const orderSchema = new mongoose.Schema({
    orderId:{
        type:String,
        unique: true
    },
    customer : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',  // refrening to the user who ordered the groceery
        required: true
    },
    branch : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch',  // refrening to the branch from which the groceery is ordered
        required: true
    },
    items: [
        {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',  // refrening to the item being ordered
            required: true
        },
        item: {
            type: String,
            required: true,
        },
        count: {type: Number,
            required: true,}
        },  
    ],

    deliveryLocation: {
        latituede: {type: Number,required: true,},
        longitude: {type: Number,required: true,},
        address : {type: String}
    },

    pickupLocation: {
        latituede: {type: Number,required: true,},
        longitude: {type: Number,required: true,},
        address : {type: String}
    },
    deliveryPersonLocation: {
        latituede: {type: Number,},
        longitude: {type: Number,},
        address : {type: String}
    },

    status: {
        type: String,
        enum: ['Available','Confirmed', 'Arriving', 'Delivered', 'Cancelled'],
        default: 'Available',
    },
    totalPrice: {type: Number,required: true,},
    createdAt: {type: Date, default: Date.now,},
    updatedAt: {type: Date, default: Date.now,}
});

async function getNextSequenceValue(sequenceName) {
    const sequenceDocument = await Counter.findOneAndUpdate(
        { name: sequenceName },
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true }
    );
    return sequenceDocument.sequence_value;
}

orderSchema.pre('save', async function (next) {
    if (this.isNew) {
        const nextOrderId = await getNextSequenceValue('orderId');
        this.orderId = `ORDR-${nextOrderId.toString().padStart(6, '0')}`;
    }
    next();
});

const Order = mongoose.model('Order', orderSchema);
export default Order;