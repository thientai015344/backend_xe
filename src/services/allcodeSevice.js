
const db = require('../models')





let getAllallcodes = (allcodeId) => {

    console.log('ghkgf', allcodeId)

    return new Promise(async (resolve, reject) => {
        try {
            let allcodes = '';
            if (allcodeId) {

                allcodes = await db.allcodes.findAll({
                    where: { type: allcodeId },
                    attributes: {
                        exclude: ['id', 'type', 'createdAt', 'updatedAt'],
                    }
                });

            }

            resolve(allcodes);

        } catch (error) {
            reject(error);
        }
    })

}

let CreateNewallcodes = (data) => {

    return new Promise(async (resolve, reject) => {
        try {


            await db.allcodes.create({

                type: data.type,
                key: data.key,
                value: data.value,



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

// let deleteallcode = (id) => {
//     return new Promise(async (resolve, reject) => {
//         let allcode = await db.allcodes.findOne({
//             where: { id: id }
//         })
//         if (!allcode) {
//             resolve({
//                 errCode: 2,
//                 errMessage: `The allcode isn't exist`
//             })
//         }
//         // awaxit allcode.destroy();
//         await db.allcodes.destroy({
//             where: { id: id }
//         });

//         resolve({
//             errCode: 0,
//             message: `delete successfully'`


//         })


//     })

// }

// let updateallcodeData = (data) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             if (!data.id) {
//                 resolve({
//                     errCode: 2,
//                     errMessage: 'missing required data'
//                 })
//             }
//             let allcode = await db.allcodes.findOne({
//                 where: { id: data.id },
//                 raw: false
//             })
//             if (allcode) {
//                 allcode.platesallcode = data.platesallcode,


//                     await allcode.save();


//                 // });
//                 resolve({
//                     errCode: 0,
//                     message: 'updata successfully',
//                 })

//             } else {
//                 resolve(
//                     {
//                         errCode: 1,
//                         errMessage: `allcode's not found`
//                     }
//                 );
//             }


//         } catch (error) {
//             reject(error);

//         }
//     })

// }













module.exports = {
    getAllallcodes: getAllallcodes,
    CreateNewallcodes: CreateNewallcodes,
    // deleteallcode: deleteallcode,
    // updateallcodeData: updateallcodeData,
}