const bookingseatSevice = require('../services/bookingseatSevice');



let handleGetAllbookingseat = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            bookingseat: []
        })
    }
    let bookingseat = await bookingseatSevice.getAllbookingseat(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        bookingseat
    })

}

let handleGetAllbookseatxe = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            bookingseatxe: []
        })
    }
    let bookingseatxe = await bookingseatSevice.getAllbookingseatxe(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        bookingseatxe
    })

}

let handleGetvexe = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            bookingseatxe: []
        })
    }
    let bookingseatxe = await bookingseatSevice.getAllvexe(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        bookingseatxe
    })

}


let handleCreateNewbookingseat = async (req, res) => {
    let message = await bookingseatSevice.CreateNewbookingseat(req.body);
    return res.status(200).json(message);

}

let handleCreateNewseatbook = async (req, res) => {
    let message = await bookingseatSevice.CreateNewseatbook(req.body);
    return res.status(200).json(message);

}




let handleDeletebookingseat = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameter !'

        })
    }
    let message = await bookingseatSevice.deleteCar(req.body.id);
    return res.status(200).json(message);
}

let handleEditbookingseat = async (req, res) => {
    let data = req.body;
    let message = await bookingseatSevice.updateCarData(data);
    return res.status(200).json(message);



}













module.exports = {

    handleGetAllbookingseat: handleGetAllbookingseat,
    handleCreateNewbookingseat: handleCreateNewbookingseat,
    handleDeletebookingseat: handleDeletebookingseat,
    handleEditbookingseat: handleEditbookingseat,
    handleCreateNewseatbook: handleCreateNewseatbook,
    handleGetAllbookseatxe: handleGetAllbookseatxe,

    handleGetvexe: handleGetvexe,

}