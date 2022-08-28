const allcodesSevice = require('../services/allcodeSevice');



let handleGetAllallcodes = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            allcodes: []
        })
    }
    let allcodes = await allcodesSevice.getAllallcodes(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        allcodes
    })

}


let handleCreateNewallcodes = async (req, res) => {
    let message = await allcodesSevice.CreateNewallcodes(req.body);
    return res.status(200).json(message);

}




let handleDeleteallcodes = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameter !'

        })
    }
    let message = await allcodesSevice.deleteallcode(req.body.id);
    return res.status(200).json(message);
}

let handleEditallcodes = async (req, res) => {
    let data = req.body;
    let message = await allcodesSevice.updateallcodeData(data);
    return res.status(200).json(message);



}













module.exports = {

    handleGetAllallcodes: handleGetAllallcodes,
    handleCreateNewallcodes: handleCreateNewallcodes,
    handleDeleteallcodes: handleDeleteallcodes,
    handleEditallcodes: handleEditallcodes,
}