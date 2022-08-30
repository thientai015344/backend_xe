
const db = require('../models')


const { Op } = require('sequelize');



let getAllcommoditys = (commodityId) => {

    return new Promise(async (resolve, reject) => {
        try {
            let commoditys = '';
            if (commodityId === 'ALL') {

                commoditys = await db.commodities.findAll({

                    attributes: {
                        exclude: ['updatedAt'],
                    },
                    include: [
                        {
                            model: db.cars, attributes: { exclude: ['createdAt', 'updatedAt'] }
                        }
                    ],
                    raw: true,
                    nest: true,

                });

            }

            if (commodityId && commodityId !== 'ALL') {
                commoditys = await db.commodities.findOne({
                    where: { id: commodityId },
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                })

            }
            resolve(commoditys);

        } catch (error) {
            reject(error);
        }
    })

}

let getAllcommodiidate = (from, to) => {

    return new Promise(async (resolve, reject) => {
        try {
            let commoditys = '';


            commoditys = await db.commodities.findAll({
                where: {
                    dateinput: {
                        [Op.between]: [from, to]
                    }
                },

                attributes: {
                    exclude: ['id', 'createdAt', 'updatedAt'],
                },
                include: [
                    {
                        model: db.cars, attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
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

let CreateNewcommoditys = (data) => {

    return new Promise(async (resolve, reject) => {
        try {
            await db.commodities.create({
                descriptioncommodities: data.descriptioncommodities,
                price: data.price,
                commonCarId: data.commonCarId,
                dateinput: data.dateinput
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

let deletecommodity = (id) => {
    return new Promise(async (resolve, reject) => {
        let commodity = await db.commodities.findOne({
            where: { id: id }
        })
        if (!commodity) {
            resolve({
                errCode: 2,
                errMessage: `The commodity isn't exist`
            })
        }
        // awaxit commodity.destroy();
        await db.commodities.destroy({
            where: { id: id }
        });

        resolve({
            errCode: 0,
            message: `delete successfully'`


        })


    })

}

let updatecommodityData = (data) => {

    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'missing required data'
                })
            }
            let commodity = await db.commodities.findOne({
                where: { id: data.id },
                raw: false
            })
            if (commodity) {

                commodity.descriptioncommodities = data.descriptioncommodities,
                    commodity.price = data.price
                commodity.commonCarId = data.commonCarId,
                    commodity.dateinput = data.dateinput


                await commodity.save();


                // });
                resolve({
                    errCode: 0,
                    message: 'updata successfully',
                })

            } else {
                resolve(
                    {
                        errCode: 1,
                        errMessage: `commodity's not found`
                    }
                );
            }


        } catch (error) {
            reject(error);

        }
    })

}













module.exports = {
    getAllcommoditys: getAllcommoditys,
    CreateNewcommoditys: CreateNewcommoditys,
    deletecommodity: deletecommodity,
    updatecommodityData: updatecommodityData,
    getAllcommodiidate: getAllcommodiidate
}