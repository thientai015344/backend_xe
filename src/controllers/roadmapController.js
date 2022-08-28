const roadmapsSevice = require('../services/roadmapSevice');



let handleGetAllroadmaps = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameters',
            roadmaps: []
        })
    }
    let roadmaps = await roadmapsSevice.getAllRoadmaps(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        roadmaps
    })

}


let handleCreateNewroadmaps = async (req, res) => {
    let message = await roadmapsSevice.CreateNewRoadmaps(req.body);
    return res.status(200).json(message);

}




let handleDeleteroadmaps = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing required parameter !'

        })
    }
    let message = await roadmapsSevice.deleteRoadmap(req.body.id);
    return res.status(200).json(message);
}

let handleEditroadmaps = async (req, res) => {
    let data = req.body;
    let message = await roadmapsSevice.updateRoadmapData(data);
    return res.status(200).json(message);



}













module.exports = {

    handleGetAllroadmaps: handleGetAllroadmaps,
    handleCreateNewroadmaps: handleCreateNewroadmaps,
    handleDeleteroadmaps: handleDeleteroadmaps,
    handleEditroadmaps: handleEditroadmaps,
}