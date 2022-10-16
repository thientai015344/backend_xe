
const db = require('../models')


let getAllmanageCar = (CarId) => {

    return new Promise(async (resolve, reject) => {
        try {
            let manageCar = '';
            if (CarId === 'ALL') {


                manageCar = await db.managecars.findAll({

                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'carId', 'roadmapsId', 'userId'],
                    },
                    include: [

                        { model: db.cars, attributes: { exclude: ['createdAt', 'updatedAt'] }, },
                        { model: db.roadmaps, attributes: { exclude: ['createdAt', 'updatedAt'] }, },
                    ],
                    raw: true,
                    nest: true,

                });


            }

            if (CarId && CarId !== 'ALL') {

                manageCar = await db.managecars.findAll({

                    where: {
                        date: CarId
                    },
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'carId', 'roadmapsId', 'userId'],
                    },
                    include: [

                        { model: db.cars, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, },
                        { model: db.roadmaps, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, },
                    ],
                    raw: true,
                    nest: true,

                })

            }



            resolve(manageCar);

        } catch (error) {
            reject(error);
        }
    })

}


let getAllmanageCarCom = (status) => {

    return new Promise(async (resolve, reject) => {
        try {
            let manageCar = '';
            manageCar = await db.managecars.findAll({

                where: {

                    status: status
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'carId', 'roadmapsId', 'userId'],
                },
                include: [

                    { model: db.cars, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, },
                    { model: db.roadmaps, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, },
                ],
                raw: true,
                nest: true,

            })



            resolve(manageCar);

        } catch (error) {
            reject(error);
        }
    })

}


let CreateNewmanageCar = (data) => {
    if(data.date){

            
        let mystring = data.date;
        let arrayStrig = mystring.split("T");
        console.log(arrayStrig[0]);

        var datef = arrayStrig[0] + "T00:00:00.000Z"

    }
    return new Promise(async (resolve, reject) => {
        try {



            await db.managecars.create({


                date: datef,
                carId: data.carId,
                status: data.status,
                roadmapsId: data.roadmapsId,
                userId: data.userId

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
        let Car = await db.managecars.findOne({
            where: { id: id }
        })
        if (!Car) {
            resolve({
                errCode: 2,
                errMessage: `The Car isn't exist`
            })
        }
        // awaxit Car.destroy();
        await db.managecars.destroy({
            where: { id: id }
        });

        resolve({
            errCode: 0,
            message: `delete successfully'`


        })


    })

}

let updateCarData = (data) => {

    if(data.date){

            
        let mystring = data.date;
        let arrayStrig = mystring.split("T");
        console.log(arrayStrig[0]);

        var datef = arrayStrig[0] + "T00:00:00.000Z"

    }
   
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'missing required data'
                })
            }
            let Car = await db.managecars.findOne({
                where: { id: data.id },
                raw: false
            })
            if (Car) {
                Car.date = datef,
                    Car.carId = data.carId,
                    Car.roadmapsId = data.roadmapsId,
                    Car.status = data.status,
                    Car.userId = data.userId



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
    getAllmanageCar: getAllmanageCar,
    CreateNewmanageCar: CreateNewmanageCar,
    deleteCar: deleteCar,
    updateCarData: updateCarData,
    getAllmanageCarCom: getAllmanageCarCom,
}