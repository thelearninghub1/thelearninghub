const express = require('express');
const {  registerUser, loginUser, logoutUser, forgotPassword, resetPassword, updatePassword, getLoginUserDetails, getAllUsers, deleteUser, updateUserRole, getUserDetails } = require('../controllers/userControllers');
const { isAuthenticatedUser, authorizeRole, superAdmin } = require('../middlewares/authentications');
const router = express.Router();


router.route('/user/register').post(registerUser)

router.route("/user/login").post(loginUser);


router.route("/user/logout").get(logoutUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/password/update").put(isAuthenticatedUser,updatePassword);

router.route('/user/me').get(isAuthenticatedUser,getLoginUserDetails)


router.route('/admin/users').get(isAuthenticatedUser, authorizeRole("admin"),getAllUsers);


// --- Super Admin --- //
router.route('/super/users').get(isAuthenticatedUser, superAdmin("super"),getAllUsers);


router.route('/super/user/:id').get(isAuthenticatedUser,superAdmin("super"),getUserDetails).delete(isAuthenticatedUser, superAdmin("super"),deleteUser).put(isAuthenticatedUser,superAdmin("super"),updateUserRole);



module.exports = router;