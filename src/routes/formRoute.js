const express = require('express');
const router = express.Router();
const choices = require('../models/Choices');

const db = require('../models/index')
const formTable = db.formTable

router.post('/', async (request, response) => {
    try {
        const { surveyName, category, formContent } = request.body;
        if (!surveyName || !category || !formContent) {
            return response
                .status(400)
                .json({ message: "surveyName, category and formContent are required" });
        }
        console.log(1)
        // save in forms table
        let form = await formTable.create({
            surveyName,
            category,
        })

        const choicesArray = [];
        formContent.forEach((fc, i) => {
            fc.index = i;
            fc.formId = form.id;
            choicesArray.push(fc)
        })

        console.log(choicesArray)

        // save choices
        const choices = await choices.bulkCreate(choicesArray)

        form.formContent = choices;

        return respons.status(201).json(form)

    } catch (error) {
        console.error(`formcreate Error:${error.stack}`);

        response.status(500).send();
    }
});


module.exports = router;

