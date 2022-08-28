
const db = require('../models')


let getAllseatBook = (CarId) => {

    return new Promise(async (resolve, reject) => {
        try {
            let seatBook = '';
            if (CarId === 'ALL') {

                seatBook = await db.seatbooks.findAll({

                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    }

                });


            }

            if (CarId && CarId !== 'ALL') {
                seatBook = await db.seatbooks.findOne({
                    where: { id: CarId },
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                })

            }
            resolve(seatBook);

        } catch (error) {
            reject(error);
        }
    })

}

let CreateNewseatBook = (data) => {

    return new Promise(async (resolve, reject) => {
        try {

            await db.seatbooks.create({

                nameClient: data.nameClient,
                phoneNumber: data.phoneNumber,
                price: data.price,
                dateManegeId: data.dateManegeId,
                userId: data.userId,

            })

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
        let Car = await db.seatbooks.findOne({
            where: { id: id }
        })
        if (!Car) {
            resolve({
                errCode: 2,
                errMessage: `The Car isn't exist`
            })
        }
        // awaxit Car.destroy();
        await db.seatbooks.destroy({
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
            let Car = await db.seatbooks.findOne({
                where: { id: data.id },
                raw: false
            })
            if (Car) {

                Car.nameClient = data.nameClient,
                    Car.phoneNumber = data.phoneNumber,
                    Car.price = data.price,
                    Car.dateManegeId = data.dateManegeId,
                    Car.userId = data.userId,



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
    getAllseatBook: getAllseatBook,
    CreateNewseatBook: CreateNewseatBook,
    deleteCar: deleteCar,
    updateCarData: updateCarData,
}