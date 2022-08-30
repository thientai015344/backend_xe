
const db = require('../models')


let getAllbookingseat = (CarId) => {

    return new Promise(async (resolve, reject) => {
        try {
            let bookingseat = '';
            if (CarId === 'ALL') {

                bookingseat = await db.bookingseats.findAll({

                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                    include: [
                        {
                            model: db.managecars, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, include: [
                                { model: db.cars, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, },
                                { model: db.roadmaps, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, },

                            ]
                        }
                    ],
                    raw: true,
                    nest: true,

                });


            }

            if (CarId && CarId !== 'ALL') {
                bookingseat = await db.bookingseats.findOne({
                    where: { ManegeId: CarId },
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                    include: [
                        {
                            model: db.managecars, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, include: [
                                { model: db.cars, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, },
                                { model: db.roadmaps, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, },

                            ]
                        }
                    ],
                    raw: true,
                    nest: true,
                })

            }
            resolve(bookingseat);

        } catch (error) {
            reject(error);
        }
    })

}



let getAllbookingseatxe = (CarId) => {

    return new Promise(async (resolve, reject) => {
        try {
            let bookingseat = ''
            if (CarId && CarId !== 'ALL') {
                bookingseat = await db.managecars.findAll({
                    where: { id: CarId },
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                    include: [

                        {
                            model: db.bookingseats, attributes: { exclude: ['createdAt', 'updatedAt'] }, include: [
                                {
                                    model: db.seatbooks, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, include: [
                                        { model: db.allcodes, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, }


                                    ]
                                }
                            ]

                        }



                    ],
                    raw: true,
                    nest: true,

                })

            }
            resolve(bookingseat);

        } catch (error) {
            reject(error);
        }
    })

}

let getAllvexe = (CarId) => {

    return new Promise(async (resolve, reject) => {
        try {
            let bookingseat = ''
            if (CarId && CarId !== 'ALL') {
                bookingseat = await db.seatbooks.findAll({
                    where: { bookingseatsId: CarId },
                    attributes: {
                        exclude: ['id', 'bookingseatsId', 'createdAt', 'updatedAt'],
                    },
                    include: [

                        {
                            model: db.bookingseats, attributes: { exclude: [, 'ManegeId', 'userId', 'createdAt', 'updatedAt'] }, include: [
                                {
                                    model: db.managecars, attributes: { exclude: ['id', 'carId', 'roadmapsId', 'userId', 'createdAt', 'updatedAt'] }, include: [
                                        { model: db.cars, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, },
                                        { model: db.roadmaps, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, },

                                    ]
                                }

                            ]

                        }





                    ],
                    raw: true,
                    nest: true,
                })

            }

            resolve(bookingseat);

        } catch (error) {
            reject(error);
        }
    })

}





let CreateNewbookingseat = (data) => {

    return new Promise(async (resolve, reject) => {
        try {

            const result = await db.bookingseats.create({

                nameClient: data.nameClient,
                phoneNumber: data.phoneNumber,
                price: data.price,
                ManegeId: data.ManegeId,
                userId: data.userId,

            })


            resolve({
                id: result.id,
                errCode: 0,
                message: 'ok'

            })

        } catch (error) {
            reject(error);

        }
    })
}

let CreateNewseatbook = (data) => {
    console.log('ddd', data)
    return new Promise(async (resolve, reject) => {
        try {

            if (!data) {
                resolve({
                    errCode: 1,
                    message: `missing required pramate'`
                })
            } else {
                let tracss = data
                if (tracss && tracss.length > 0) {

                    tracss = tracss.map(item => {
                        return item;
                    })

                }
                await db.seatbooks.bulkCreate(tracss)
            }



            resolve({

                errCode: 0,
                message: 'ok'

            })

        } catch (error) {
            reject(error);

        }
    })
}




let deleteCar = (id) => {
    return new Promise(async (resolve, reject) => {
        let Car = await db.bookingseats.findOne({
            where: { id: id }
        })
        if (!Car) {
            resolve({
                errCode: 2,
                errMessage: `The Car isn't exist`
            })
        }
        // awaxit Car.destroy();
        await db.bookingseats.destroy({
            where: { id: id }
        });

        resolve({
            errCode: 0,
            message: `delete successfully'`


        })


    })

}

let updateCarData = (data) => {
    console.log('dfgdgvf', data)
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'missing required data'
                })
            }
            let Car = await db.bookingseats.findOne({
                where: { id: data.id },
                raw: false
            })
            if (Car) {

                Car.nameClient = data.nameClient,
                    Car.phoneNumber = data.phoneNumber,




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
    getAllbookingseat: getAllbookingseat,
    CreateNewbookingseat: CreateNewbookingseat,
    deleteCar: deleteCar,
    updateCarData: updateCarData,
    CreateNewseatbook: CreateNewseatbook,
    getAllbookingseatxe: getAllbookingseatxe,
    getAllvexe: getAllvexe,
}