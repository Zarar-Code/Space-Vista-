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
    selectedWorkspace: {
    type: String,
    required: true
    },
    selectedCoworkingOption: {
    type: String
    },
    customizedPlace: {
    type: String
    },
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
    ]
},
{
    timestamps: true
  })

export const Space = mongoose.model("Space" , spaceSchema)

