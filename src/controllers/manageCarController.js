const manageCarSevice = require('../services/manageCarSevice');



let handleGetAllmanageCar = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            manageCar: []
        })
    }
    let manageCar = await manageCarSevice.getAllmanageCar(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        manageCar
    })

}




let handleGetAllmanageCarcom = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            manageCar: []
        })
    }
    let manageCar = await manageCarSevice.getAllmanageCarCom(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        manageCar
    })

}



let handleCreateNewmanageCar = async (req, res) => {
    let message = await manageCarSevice.CreateNewmanageCar(req.body);
    return res.status(200).json(message);

}




let handleDeletemanageCar = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameter !'

        })
    }
    let message = await manageCarSevice.deleteCar(req.body.id);
    return res.status(200).json(message);
}

let handleEditmanageCar = async (req, res) => {
    let data = req.body;
    let message = await manageCarSevice.updateCarData(data);
    return res.status(200).json(message);



}













module.exports = {

    handleGetAllmanageCar: handleGetAllmanageCar,
    handleCreateNewmanageCar: handleCreateNewmanageCar,
    handleDeletemanageCar: handleDeletemanageCar,
    handleEditmanageCar: handleEditmanageCar,
    handleGetAllmanageCarcom: handleGetAllmanageCarcom,
}