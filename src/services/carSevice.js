
const db = require('../models')

const { Op } = require('sequelize');


let checkplatesCar = (platesCar) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Car = await db.cars.findOne({
                where: { platesCar: platesCar }
            })
            if (Car) {
                resolve(true);
            }
            else {
                resolve(false);
            }

        } catch (error) {
            reject(error);
        }
    })
}

let getAllthuve = (from, to) => {

    return new Promise(async (resolve, reject) => {
        try {
            let commoditys = '';


            commoditys = await db.managecars.findAll({
                where: {
                    date: {
                        [Op.between]: [from, to]
                    }
                },

                attributes: {
                    exclude: ['id', 'date', 'carId', 'roadmapsId', 'userId', 'createdAt', 'updatedAt'],

                }, include: [
                    {
                        model: db.bookingseats, attributes: { exclude: ['nameClient', 'phoneNumber', 'price', 'ManegeId', 'userId', 'createdAt', 'updatedAt'] }
                    }
                ],
                raw: true,
                nest: true,

            });


            resolve(commoditys);

        } catch (error) {
            reject(error);
        }
    })

}




let getAllthuhang = (from, to) => {

    return new Promise(async (resolve, reject) => {
        try {
            let commoditys = '';


            commoditys = await db.consignments.findAll({
                where: {
                    date: {
                        [Op.between]: [from, to]
                    }
                },

                attributes: {
                    exclude: ['id', 'nameUserGet', 'phonenumberUserGet', 'typecommoditiesId', 'userId', 'carhangId', 'createdAt', 'updatedAt'],

                }, include: [
                    {
                        model: db.managecars, attributes: { exclude: ['id', 'date', 'carId', 'roadmapsId', 'userId', 'createdAt', 'updatedAt'] }, include: [
                            { model: db.cars, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, },

                        ]
                    }
                ],
                raw: true,
                nest: true,

            });


            resolve(commoditys);

        } catch (error) {
            reject(error);
        }
    })

}




let getAllCars = (CarId) => {

    return new Promise(async (resolve, reject) => {
        try {
            let Cars = '';
            if (CarId === 'ALL') {

                Cars = await db.cars.findAll({

                    attributes: {
                        exclude: ['updatedAt'],
                    }

                });


            }

            if (CarId && CarId !== 'ALL') {
                Cars = await db.cars.findOne({
                    where: { id: CarId },
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                })

            }
            resolve(Cars);


        } catch (error) {
            reject(error);
        }
    })

}


let getDataCars = (CarId) => {

    return new Promise(async (resolve, reject) => {
        try {

            let Cars = ''

            if (CarId && CarId == 'ALL') {
                Cars = await db.cars.findAll({
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    include: [

                        {
                            model: db.managecars, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, include: [
                                {
                                    model: db.bookingseats, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
                                }

                            ]

                        }
                    ],
                    raw: true,
                    nest: true,
                })

            }
            resolve(Cars);

        } catch (error) {
            reject(error);
        }
    })

}


let getDataCarhang = (CarId) => {

    return new Promise(async (resolve, reject) => {
        try {

            let Cars = '';

            if (CarId && CarId !== 'ALL') {
                Cars = await db.cars.findAll({
                    where: { id: CarId },
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    include: [
                        {
                            model: db.commodities, attributes: { exclude: ['id', , 'updatedAt'] }
                        }
                    ],
                    raw: true,
                    nest: true,
                })

            }
            resolve(Cars);

        } catch (error) {
            reject(error);
        }
    })

}

let CreateNewcars = (data) => {

    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkplatesCar(data.platesCar);
            if (check == true) {

                resolve({
                    errCode: 1,
                    errMessage: 'this platesCar is already in used, plz try anothe platesCar'
                })

            } else {


                await db.cars.create({

                    platesCar: data.platesCar,
                    status: data.status


                })

                resolve({
                    errCode: 0,
                    message: 'ok'

                })
            }
        } catch (error) {
            reject(error);

        }
    })
}

let deleteCar = (id) => {
    return new Promise(async (resolve, reject) => {
        let Car = await db.cars.findOne({
            where: { id: id }
        })
        if (!Car) {
            resolve({
                errCode: 2,
                errMessage: `The Car isn't exist`
            })
        }
        // awaxit Car.destroy();
        await db.cars.destroy({
            where: { id: id }
        });

        resolve({
            errCode: 0,
            message: `delete successfully'`


        })


    })

}

let updateCarData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'missing required data'
                })
            }
            let Car = await db.cars.findOne({
                where: { id: data.id },
                raw: false
            })
            if (Car) {
                Car.platesCar = data.platesCar,
                    Car.status = data.status



                await Car.save();


                // });
                resolve({
                    errCode: 0,
                    message: 'updata successfully',
                })

            } else {
                resolve(
                    {
                        errCode: 1,
                        errMessage: `Car's not found`
                    }
                );
            }


        } catch (error) {
            reject(error);

        }
    })

}













module.exports = {
    getAllCars: getAllCars,
    CreateNewcars: CreateNewcars,
    deleteCar: deleteCar,
    updateCarData: updateCarData,
    getDataCars: getDataCars,
    getDataCarhang: getDataCarhang,
    getAllthuve: getAllthuve,
    getAllthuhang: getAllthuhang
}