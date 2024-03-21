import joi from "joi";

const delete_data = joi.object({

    tableId: joi.number()
        .min(1)
        .max(1000)
        .label("table id")
        .messages({ 'string.min': 'wrong table id' })
        .required()
    ,
    resultId: joi.number()
        .min(1)
        .max(2147483647)
        .label("result id")
        .messages({ 'string.min': 'wrong result id' })
        .required()
    ,

});

export default {
    delete_data
}