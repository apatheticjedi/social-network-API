const router = require('express').Router();
const {
    addThought,
    addReaction,
    removeReaction,
    removeThought
} = require('../../controllers/thought-controller');

// /api/thoughts/<userID>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').put(addReaction).delete(removeThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;