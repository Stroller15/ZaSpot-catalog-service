import { body } from "express-validator";

export default [
    body("name")
        .exists()
        .withMessage("Category name is required")
        .isString()
        .withMessage("Category name should be a string"),
    body("priceCongfiguration")
        .exists()
        .withMessage("Price configuration is required"),
    body("priceCongfiguration.*.priceType")
        .exists()
        .withMessage("Price type is required")
        .custom((value: "base" | "aditional") => {
            const validKeys = ["base", "aditional"];
            if (!validKeys.includes(value)) {
                throw new Error(
                    `${value} is invalid attribute for pricetype field. Possible values are: [${validKeys.join(
                        ", ",
                    )}]`,
                );
            }
        }),
    body("attributes").exists().withMessage("Attributes field is required"),
];
