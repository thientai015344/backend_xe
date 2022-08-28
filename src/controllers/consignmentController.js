const consignmentsSevice = require('../services/signmentSevice');



let handleGetAllconsignments = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            consignments: []
        })
    }
    let consignments = await consignmentsSevice.getAllsignments(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        consignments
    })

}


let handleCreateNewconsignments = async (req, res) => {
    let message = await consignmentsSevice.CreateNewsignments(req.body);
    return res.status(200).json(message);

}




let handleDeleteconsignments = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameter !'

        })
    }
    let message = await consignmentsSevice.deletesignment(req.body.id);
    return res.status(200).json(message);
}

let handleEditconsignments = async (req, res) => {
    let data = req.body;
    let message = await consignmentsSevice.updatesignmentData(data);
    return res.status(200).json(message);



}













module.exports = {

    handleGetAllconsignments: handleGetAllconsignments,
    handleCreateNewconsignments: handleCreateNewconsignments,
    handleDeleteconsignments: handleDeleteconsignments,
    handleEditconsignments: handleEditconsignments,
}