const express = require('express');
const router = express.Router();

const AuthRoutes = require('@auth/routes');
const ProfileRoutes = require('@profile/routes');
/* const InteractionRoutes = require('@interaction/routes');
const MatchRoutes = require('@match/routes');
const MessageRouter = require('@message/routes'); */

router.use('/api/auth', AuthRoutes);
router.use('/api/profile', ProfileRoutes);
/* router.use('/api/interaction', InteractionRoutes);
router.use('/api/match', MatchRoutes);
router.use('/api/message', MessageRouter);
 */
module.exports = router;
