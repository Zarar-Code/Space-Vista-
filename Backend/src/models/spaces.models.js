import mongoose, { Schema } from "mongoose";

const spaceSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
    type: String,
    trim: true,
    required: true
    },
    contactNo: {
    type: String,
    required: true
    },


    propertyType: {
    type: String,
    required: true
    },
    city: {
    type: String,
    required: true
    },
    price: {
    type: String,
    required: true
    },
    capacity: {
    type: String,
    required: true
    },
    address: {
    type: String,
    required: true
    },
    amenities: {
    type: String,
    },


    selectedWorkspace: {
    type: String,
    required: true
    },

    selectedCoworkingOption: {
    type: String
    },
    selectedEventspaces: {
    type: String
    },
    selectedPrivate: {
    type: String
    },


    // customizedPlace: {
    // type: String
    // },

    googleMapsLocation: {
    type: String
    },
    useAbleArea: {
    type: String
    },

    description: {
    type: String
    },

    residentialArea: {
    type: String
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    isActive:{
        type: Boolean,
        default: false
    },
    interiorImages: [
    {
        type: String,
        required: true
    }
    ],
    exteriorImages: [
    {
        type: String,
        required: true
    }
    ],
},
{
    timestamps: true
  })

export const Space = mongoose.model("Space" , spaceSchema)

