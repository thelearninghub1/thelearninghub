const express = require('express');
const { createHighlights, getAllHighlights, getSingleHighlight, updateHighlights, deleteHighlights } = require('../controllers/highlightsControllers');
const { isAuthenticatedUser } = require('../middlewares/authentications');
const router = express.Router();

// Super Admin Routers
router.route('/highlight/create').post(isAuthenticatedUser,createHighlights);

router.route('/highlights').get(isAuthenticatedUser,getAllHighlights);

router.route('/highlight/:id').get(isAuthenticatedUser,getSingleHighlight).put(isAuthenticatedUser,updateHighlights).delete(isAuthenticatedUser,deleteHighlights);


module.exports = router;