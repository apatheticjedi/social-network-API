const router = require('express').Router();
const {
    getThoughts,
    addThought,
    addReaction,
    removeReaction,
    removeThought,
    getThoughtById
} = require('../../controllers/thought-controller');

// GET all thoughts at /api/thoughts
router.route('/').get(getThoughts);

// POST thought at /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// GET single thought at /api/thoughts/<thoughtId>
router.route('/:thoughtId').get(getThoughtById);

// DELETE thought at /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

// POST reaction at /api/thoughts/<thoughtId>/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE reaction at /api/thoughts/<thoughtId>/reactions/<reactionId>
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;