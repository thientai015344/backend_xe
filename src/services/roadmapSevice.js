
const db = require('../models')



let getAllRoadmaps = (RoadmapId) => {

    return new Promise(async (resolve, reject) => {
        try {
            let Roadmaps = '';
            if (RoadmapId === 'ALL') {

                Roadmaps = await db.roadmaps.findAll({

                    attributes: {
                        exclude: ['updatedAt'],
                    }

                });


            }

            if (RoadmapId && RoadmapId !== 'ALL') {
                Roadmaps = await db.roadmaps.findOne({
                    where: { id: RoadmapId },
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                })

            }
            resolve(Roadmaps);

        } catch (error) {
            reject(error);
        }
    })

}

let CreateNewRoadmaps = (data) => {
    console.log('roadmap', data)
    return new Promise(async (resolve, reject) => {
        try {

            await db.roadmaps.create({

                from: data.from,
                to: data.to,



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

let deleteRoadmap = (id) => {
    return new Promise(async (resolve, reject) => {
        let Roadmap = await db.roadmaps.findOne({
            where: { id: id }
        })
        if (!Roadmap) {
            resolve({
                errCode: 2,
                errMessage: `The Roadmap isn't exist`
            })
        }
        // awaxit Roadmap.destroy();
        await db.roadmaps.destroy({
            where: { id: id }
        });

        resolve({
            errCode: 0,
            message: `delete successfully'`


        })


    })

}

let updateRoadmapData = (data) => {
    console.log('update', data)
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'missing required data'
                })
            }
            let Roadmap = await db.roadmaps.findOne({
                where: { id: data.id },
                raw: false
            })
            if (Roadmap) {
                Roadmap.from = data.from,
                    Roadmap.to = data.to,



                    await Roadmap.save();


                // });
                resolve({
                    errCode: 0,
                    message: 'updata successfully',
                })

            } else {
                resolve(
                    {
                        errCode: 1,
                        errMessage: `Roadmap's not found`
                    }
                );
            }


        } catch (error) {
            reject(error);

        }
    })

}













module.exports = {
    getAllRoadmaps: getAllRoadmaps,
    CreateNewRoadmaps: CreateNewRoadmaps,
    deleteRoadmap: deleteRoadmap,
    updateRoadmapData: updateRoadmapData,
}