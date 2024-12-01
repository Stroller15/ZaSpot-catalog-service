import mongoose from "mongoose";

export interface PriceConfiguration {
    [key: string]: {
        priceType: "base" | "aditional";
        availableOptions: string[];
    };
}

export interface Attribute {
    name: string;
    widgetType: "switch" | "radio";
    defaultValue: string;
    availableOptions: string[];
}

export interface Category {
    name: string;
    priceConfiguration: PriceConfiguration;
    attributes: Attribute[];
}

const PriceConfigurationSchema = new mongoose.Schema<PriceConfiguration>({
    priceType: {
        type: String,
        enum: ["base", "aditional"],
        required: true,
    },
    availableOptions: {
        type: [String],
        required: true,
    },
});

const attributesSchema = new mongoose.Schema<Attribute>({
    name: {
        type: String,
        required: true,
    },
    widgetType: {
        type: String,
        enum: ["switch", "radio"],
        required: true,
    },
    defaultValue: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    availableOptions: {
        type: [String],
        required: true,
    },
});

const categorySchema = new mongoose.Schema<Category>({
    name: {
        type: String,
        required: true,
    },
    priceConfiguration: {
        type: Map,
        of: PriceConfigurationSchema,
        required: true,
    },
    attributes: {
        type: [attributesSchema],
        required: true,
    },
});

export default mongoose.model("Category", categorySchema);


// This is for imagination how model will look like
// {
//     "name": "Pizza",
//     "priceConfiguration": {
//         "Size": {
//             "priceType": "base",
//             "availableOptions": [
//                 "small",
//                 "medium",
//                 "large"
//             ]
//         },
//         "crust": {
//             "priceType": "aditional",
//             "avaibleOptions": [
//                 "Thin",
//                 "Thick"
//             ]
//         }

//     },
//     "attributes": [
//         {
//             "name": "isHit",
//             "widgetType": "switch",
//             "defaultValue": "No",
//             "availableOptions": [
//                 "yes",
//                 "no"
//             ]
//         },
//         {
//             "name": "spiciness",
//             "widgetType": "radio",
//             "defaultValue": "medium",
//             "avaibleOptions": [
//                 "less",
//                 "medium",
//                 "hot"
//             ]
//         }
//     ]
// }
