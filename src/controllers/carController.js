const carsSevice = require('../services/carSevice');



let handleGetAllcars = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            cars: []
        })
    }
    let cars = await carsSevice.getAllCars(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        cars
    })

}


let handleGetDatacars = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            cars: []
        })
    }
    let cars = await carsSevice.getDataCars(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        cars
    })

}

let handleGetsenthang = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            cars: []
        })
    }
    let cars = await carsSevice.getDataCars(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        cars
    })

}


let handleGetDatacarhang = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            cars: []
        })
    }
    let cars = await carsSevice.getDataCarhang(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        cars
    })

}

let handleGetThuve = async (req, res) => {

    let { from, to, id } = req.body;
    let commoditys = await carsSevice.getAllthuve(from, to, id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        commoditys
    })

}

let handleGetThuhnag = async (req, res) => {
    console.log('dd', req.body)
    let { from, to, id } = req.body;
    let commoditys = await carsSevice.getAllthuhang(from, to, id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        commoditys
    })

}

let handleCreateNewcars = async (req, res) => {
    let message = await carsSevice.CreateNewcars(req.body);
    return res.status(200).json(message);

}




let handleDeletecars = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameter !'

        })
    }
    let message = await carsSevice.deleteCar(req.body.id);
    return res.status(200).json(message);
}

let handleEditcars = async (req, res) => {
    let data = req.body;
    let message = await carsSevice.updateCarData(data);
    return res.status(200).json(message);



}













module.exports = {

    handleGetAllcars: handleGetAllcars,
    handleCreateNewcars: handleCreateNewcars,
    handleDeletecars: handleDeletecars,
    handleEditcars: handleEditcars,
    handleGetDatacars: handleGetDatacars,
    handleGetDatacarhang: handleGetDatacarhang,
    handleGetsenthang: handleGetsenthang,
    handleGetThuve: handleGetThuve,
    handleGetThuhnag: handleGetThuhnag
}