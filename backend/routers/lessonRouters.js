const express = require("express");
const { isAuthenticatedUser, authorizeRole, superAdmin } = require("../middlewares/authentications");
const { createLesson, getSingleLessonDetails, updateLesson, deleteLesson, getAllLesson, getAllLessons } = require("../controllers/lessonControllers");
const router = express.Router();

router.route("/admin/lesson/create").post(isAuthenticatedUser,authorizeRole("admin"),createLesson);


router.route("/lesson/:id").get(isAuthenticatedUser,getSingleLessonDetails);

router.route("/admin/lesson/:id").put(isAuthenticatedUser,authorizeRole("admin"),updateLesson);

router.route("/lessons").get(isAuthenticatedUser,getAllLesson);
router.route("/lesson").get(isAuthenticatedUser,getAllLessons);



//------Super Admin -------- //
router.route("/super/lesson/create").post(isAuthenticatedUser,superAdmin("super"),createLesson);

router.route("/super/lesson/:id").put(isAuthenticatedUser,superAdmin("super"),updateLesson).delete(isAuthenticatedUser , superAdmin("super"),deleteLesson);



module.exports = router