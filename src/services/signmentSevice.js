
const db = require('../models')

let getAllsignments = (signmentId) => {
    console.log('sdfd', signmentId)
    return new Promise(async (resolve, reject) => {
        try {
            let signments = '';
            if (signmentId === 'ALL') {

                signments = await db.consignments.findAll({

                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                    include: [

                        {
                            model: db.managecars, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, include: [
                                { model: db.cars, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, }

                            ]
                        }

                    ],
                    raw: true,
                    nest: true,


                });


            }

            if (signmentId && signmentId !== 'ALL') {

                signments = await db.consignments.findAll({

                    where: {

                        date: signmentId

                    },
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    include: [
                        {
                            model: db.managecars, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, include: [
                                { model: db.cars, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }, }

                            ]
                        }

                    ],
                    raw: true,
                    nest: true,

                })


            }
            resolve(signments);

        } catch (error) {
            reject(error);
        }
    })

}

let CreateNewsignments = (data) => {

    if(data.date){

        
        let mystring = data.date;
        let arrayStrig = mystring.split("T");
        console.log(arrayStrig[0]);
    
        var datef = arrayStrig[0] + "T00:00:00.000Z"
    
    }

    return new Promise(async (resolve, reject) => {
        try {



            await db.consignments.create({


                name: data.name,
                nameUserSend: data.nameUserSend,
                phonenumberUserSend: data.phonenumberUserSend,
                nameUserGet: data.nameUserGet,
                phonenumberUserGet: data.phonenumberUserGet,
                typecommoditiesId: data.typecommoditiesId,
                price: data.price,
                carhangId: data.carhangId,
                date: datef,
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

let deletesignment = (id) => {
    return new Promise(async (resolve, reject) => {
        let signment = await db.consignments.findOne({
            where: { id: id }
        })
        if (!signment) {
            resolve({
                errCode: 2,
                errMessage: `The signment isn't exist`
            })
        }
        // awaxit signment.destroy();
        await db.consignments.destroy({
            where: { id: id }
        });

        resolve({
            errCode: 0,
            message: `delete successfully'`


        })


    })

}

let updatesignmentData = (data) => {

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
            let signment = await db.consignments.findOne({
                where: { id: data.id },
                raw: false
            })
            if (signment) {
                signment.name = data.name,
                    signment.nameUserSend = data.nameUserSend,
                    signment.phonenumberUserSend = data.phonenumberUserSend,
                    signment.nameUserGet = data.nameUserGet,
                    signment.phonenumberUserGet = data.phonenumberUserGet,
                    signment.typecommoditiesId = data.typecommoditiesId,
                    signment.carhangId = data.carhangId,
                    signment.price = data.price,
                    signment.date = datef,
                    signment.userId = data.userId,

                    await signment.save();


                // });
                resolve({
                    errCode: 0,
                    message: 'updata successfully',
                })

            } else {
                resolve(
                    {
                        errCode: 1,
                        errMessage: `signment's not found`
                    }
                );
            }


        } catch (error) {
            reject(error);

        }
    })

}













module.exports = {
    getAllsignments: getAllsignments,
    CreateNewsignments: CreateNewsignments,
    deletesignment: deletesignment,
    updatesignmentData: updatesignmentData,
}