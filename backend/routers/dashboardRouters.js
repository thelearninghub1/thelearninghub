const express = require('express');
const { isAuthenticatedUser, authorizeRole, superAdmin } = require('../middlewares/authentications');
const { createDashboard, allDashboard, getSingleDashboardDetails, deleteDashboard, updateDashboardDetails } = require('../controllers/dashboardControllers');
const router = express.Router();


router.route('/dashboard/create').post(isAuthenticatedUser, authorizeRole("admin"), createDashboard );

router.route('/dashboards').get(isAuthenticatedUser,allDashboard);

router.route('/dashboard/:id').get(isAuthenticatedUser,getSingleDashboardDetails).put(isAuthenticatedUser,authorizeRole("admin"),updateDashboardDetails)

// -- Super Admin  --- //
router.route('/super/dashboard/create').post(isAuthenticatedUser, superAdmin("super"), createDashboard );

router.route('/super/dashboard/:id').delete(isAuthenticatedUser,superAdmin("super"),deleteDashboard).put(isAuthenticatedUser,superAdmin("super"),updateDashboardDetails);

 

module.exports = router;