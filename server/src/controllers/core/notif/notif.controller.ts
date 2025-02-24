import express from 'express';
import ah from 'express-async-handler';

import { reply } from 'controllers/core/app-reply';
import { requireAuthenticated } from 'middleware/authMiddleware';
import { NotificationModel } from 'db/models/notification';

export const router = express.Router();

// Fetch notifications for a logged-in user
router.get(
  '/api/notif/:userId',
  ah(async (req, res) => {
    const notifs = await NotificationModel.find({
      userId: req.params.userId,
    }).sort({ createdAt: -1 });

    return reply(res, notifs);
  }),
);

// Mark notification as read
router.patch(
  '/api/notif/read/:id',
  ah(async (req, res) => {
    await NotificationModel.findByIdAndUpdate(req.params.id, { isRead: true });
    return reply(res);
  }),
);

