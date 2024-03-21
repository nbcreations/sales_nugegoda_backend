import joi from "joi";

const status_change = joi.object({

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
    status: joi.number()
        .min(0)
        .max(1000)
        .label("status")
        .messages({ 'string.min': 'wrong status' })
        .required()
    ,

});

export default {
    status_change
}