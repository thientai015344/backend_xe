const signsSevice = require('../services/typeSignSevice');



let handleGetAllsigns = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            signs: []
        })
    }
    let signs = await signsSevice.getAllsigns(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        signs
    })

}


let handleCreateNewsigns = async (req, res) => {
    let message = await signsSevice.CreateNewsigns(req.body);
    return res.status(200).json(message);

}




let handleDeletesigns = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameter !'

        })
    }
    let message = await signsSevice.deletesign(req.body.id);
    return res.status(200).json(message);
}

let handleEditsigns = async (req, res) => {
    let data = req.body;
    let message = await signsSevice.updatesignData(data);
    return res.status(200).json(message);



}













module.exports = {

    handleGetAllsigns: handleGetAllsigns,
    handleCreateNewsigns: handleCreateNewsigns,
    handleDeletesigns: handleDeletesigns,
    handleEditsigns: handleEditsigns,
}