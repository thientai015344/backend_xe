const seatBookSevice = require('../services/seatBookSevice');



let handleGetAllseatBook = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            seatBook: []
        })
    }
    let seatBook = await seatBookSevice.getAllseatBook(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        seatBook
    })

}


let handleCreateNewseatBook = async (req, res) => {
    let message = await seatBookSevice.CreateNewseatBook(req.body);
    return res.status(200).json(message);

}




let handleDeleteseatBook = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameter !'

        })
    }
    let message = await seatBookSevice.deleteCar(req.body.id);
    return res.status(200).json(message);
}

let handleEditseatBook = async (req, res) => {
    let data = req.body;
    let message = await seatBookSevice.updateCarData(data);
    return res.status(200).json(message);



}













module.exports = {

    handleGetAllseatBook: handleGetAllseatBook,
    handleCreateNewseatBook: handleCreateNewseatBook,
    handleDeleteseatBook: handleDeleteseatBook,
    handleEditseatBook: handleEditseatBook,
}