const express = require('express')

const userController = require('../controllers/userController');
const carsController = require('../controllers/carController');
const roadmapsController = require('../controllers/roadmapController');
const consignmentsController = require('../controllers/consignmentController');
const signController = require('../controllers/typesignController');
const manageCarController = require('../controllers/manageCarController');
const commodityController = require('../controllers/commodityController');
const allcodeController = require('../controllers/allcodeController');
const bookingseatController = require('../controllers/bookingseatController');










let router = express.Router();

let initRoutes = (app) => {



    router.post('/api/login', userController.handleLogin); //done
    router.get('/api/get-all-users', userController.handleGetAllUSER);//done
    router.post('/api/create-new-userAdm', userController.handleCreateNewUser); //done
    router.put('/api/edit-userAdm', userController.handleEditUser);
    router.delete('/api/delete-userAdm', userController.handleDeleteUser);




    router.get('/api/get-all-car', carsController.handleGetAllcars);//done
    router.get('/api/get-data-car', carsController.handleGetDatacars);//done (ve xe)
    router.get('/api/get-data-carhang', carsController.handleGetDatacarhang);//done (ve hang)phieu chi
    router.get('/api/get-data-senthang', carsController.handleGetsenthang);//done (ve xe)



    router.post('/api/create-new-car', carsController.handleCreateNewcars); //done
    router.put('/api/edit-car', carsController.handleEditcars);//done
    router.delete('/api/delete-car', carsController.handleDeletecars);//done



    router.get('/api/get-all-roadmap', roadmapsController.handleGetAllroadmaps);//done
    router.post('/api/create-new-roadmap', roadmapsController.handleCreateNewroadmaps); //done
    router.put('/api/edit-roadmap', roadmapsController.handleEditroadmaps);//done
    router.delete('/api/delete-roadmap', roadmapsController.handleDeleteroadmaps);//done


    router.get('/api/get-all-consignment', consignmentsController.handleGetAllconsignments);//done
    router.post('/api/create-new-consignment', consignmentsController.handleCreateNewconsignments); //done
    router.put('/api/edit-consignment', consignmentsController.handleEditconsignments);//done
    router.delete('/api/delete-consignment', consignmentsController.handleDeleteconsignments);//done


    router.get('/api/get-all-signs', signController.handleGetAllsigns);//done
    router.post('/api/create-new-signs', signController.handleCreateNewsigns); //done
    router.put('/api/edit-signs', signController.handleEditsigns);//done
    router.delete('/api/delete-signs', signController.handleDeletesigns);//done


    router.get('/api/get-all-manageCar', manageCarController.handleGetAllmanageCar);//done
    router.post('/api/create-new-manageCar', manageCarController.handleCreateNewmanageCar); //done
    router.put('/api/edit-manageCar', manageCarController.handleEditmanageCar);//done
    router.delete('/api/delete-manageCar', manageCarController.handleDeletemanageCar);//done

    router.get('/api/get-all-commodity', commodityController.handleGetAllcommoditys);//done
    router.get('/api/get-all-commoditydate', commodityController.handleGetAllcommoditydate);//done

    router.post('/api/create-new-commodity', commodityController.handleCreateNewcommoditys); //done
    router.put('/api/edit-commodity', commodityController.handleEditcommoditys);//done
    router.delete('/api/delete-commodity', commodityController.handleDeletecommoditys);//done


    router.get('/api/get-all-allcode', allcodeController.handleGetAllallcodes);//done
    router.post('/api/create-new-allcode', allcodeController.handleCreateNewallcodes); //done
    router.put('/api/edit-allcode', allcodeController.handleEditallcodes);//done
    router.delete('/api/delete-allcode', allcodeController.handleDeleteallcodes);//done


    router.get('/api/get-all-bookingseat', bookingseatController.handleGetAllbookingseat);//done
    router.get('/api/get-all-seatbookxe', bookingseatController.handleGetAllbookseatxe);//done


    router.get('/api/get-all-getvexe', bookingseatController.handleGetvexe);//done



    router.post('/api/create-new-bookingseat', bookingseatController.handleCreateNewbookingseat); //done
    router.post('/api/create-new-seatbook', bookingseatController.handleCreateNewseatbook); //done

    router.put('/api/edit-bookingseat', bookingseatController.handleEditbookingseat);//done
    router.delete('/api/delete-bookingseat', bookingseatController.handleDeletebookingseat);//done







    app.use("/", router)
}
module.exports = initRoutes;