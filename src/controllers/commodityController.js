const commoditysSevice = require('../services/commoditySevice');



let handleGetAllcommoditys = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            commoditys: []
        })
    }
    let commoditys = await commoditysSevice.getAllcommoditys(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        commoditys
    })

}

let handleGetAllcommoditydate = async (req, res) => {
    console.log('>>> check data: ', req.body)

    // let id = req.body;
    // if (!id) {
    //     return res.status(200).json({
    //         errCode: 1,
    //         errMessage: 'missing required parameters',
    //         commoditys: []
    //     })
    // }
    let { from, to, id } = req.body;
    let commoditys = await commoditysSevice.getAllcommodiidate(from, to, id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        commoditys
    })

}


let handleCreateNewcommoditys = async (req, res) => {
    let message = await commoditysSevice.CreateNewcommoditys(req.body);
    return res.status(200).json(message);

}




let handleDeletecommoditys = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameter !'

        })
    }
    let message = await commoditysSevice.deletecommodity(req.body.id);
    return res.status(200).json(message);
}

let handleEditcommoditys = async (req, res) => {
    let data = req.body;
    let message = await commoditysSevice.updatecommodityData(data);
    return res.status(200).json(message);



}













module.exports = {

    handleGetAllcommoditys: handleGetAllcommoditys,
    handleCreateNewcommoditys: handleCreateNewcommoditys,
    handleDeletecommoditys: handleDeletecommoditys,
    handleEditcommoditys: handleEditcommoditys,
    handleGetAllcommoditydate: handleGetAllcommoditydate
}