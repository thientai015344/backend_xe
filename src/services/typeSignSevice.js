
const db = require('../models')



let checkplatessign = (nametypecommodities) => {
    return new Promise(async (resolve, reject) => {
        try {
            let sign = await db.typecommodities.findOne({
                where: { nametypecommodities: nametypecommodities }
            })
            if (sign) {
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


let getAllsigns = (signId) => {

    return new Promise(async (resolve, reject) => {
        try {
            let signs = '';
            if (signId === 'ALL') {

                signs = await db.typecommodities.findAll({

                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    }

                });


            }

            if (signId && signId !== 'ALL') {
                signs = await db.typecommodities.findOne({
                    where: { id: signId },
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                })

            }
            resolve(signs);

        } catch (error) {
            reject(error);
        }
    })

}

let CreateNewsigns = (data) => {
    console.log('fff', data)
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkplatessign(data.nametypecommodities);
            if (check == true) {

                resolve({
                    errCode: 1,
                    errMessage: 'this nametypecommodities is already in used, plz try anothe nametypecommodities'
                })

            } else {


                await db.typecommodities.create({

                    nametypecommodities: data.nametypecommodities,


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

let deletesign = (id) => {
    return new Promise(async (resolve, reject) => {
        let sign = await db.typecommodities.findOne({
            where: { id: id }
        })
        if (!sign) {
            resolve({
                errCode: 2,
                errMessage: `The sign isn't exist`
            })
        }
        // awaxit sign.destroy();
        await db.typecommodities.destroy({
            where: { id: id }
        });

        resolve({
            errCode: 0,
            message: `delete successfully'`


        })


    })

}

let updatesignData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'missing required data'
                })
            }
            let sign = await db.typecommodities.findOne({
                where: { id: data.id },
                raw: false
            })
            if (sign) {
                sign.nametypecommodities = data.nametypecommodities,


                    await sign.save();


                // });
                resolve({
                    errCode: 0,
                    message: 'updata successfully',
                })

            } else {
                resolve(
                    {
                        errCode: 1,
                        errMessage: `sign's not found`
                    }
                );
            }


        } catch (error) {
            reject(error);

        }
    })

}













module.exports = {
    getAllsigns: getAllsigns,
    CreateNewsigns: CreateNewsigns,
    deletesign: deletesign,
    updatesignData: updatesignData,
}