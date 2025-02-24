import express from 'express';
import ah from 'express-async-handler';

import { reply } from 'controllers/core/app-reply';
import { requireAuthenticated } from 'middleware/authMiddleware';
import { NotificationModel } from 'db/models/notification';

export const router = express.Router();

// Fetch notifications for a logged-in user
router.get(
  '/api/notif',
  requireAuthenticated(),
  ah(async (req, res) => {
    const notifs = await NotificationModel.find({
      userId: req.user!._id,
    }).sort({ createdAt: -1 });

    return reply(res, notifs);
  }),
);

// Mark notifications as read
router.patch(
  '/api/notif/mark-read',
  requireAuthenticated(),
  ah(async (req, res) => {
    const { notificationIds } = req.body;
    await NotificationModel.updateMany(
      {
        _id: { $in: notificationIds },
        userId: req.user!._id,
      },
      { isRead: true },
    );

    return reply(res);
  }),
);
