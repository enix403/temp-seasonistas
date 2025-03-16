import { Schema, model, Types, Document } from 'mongoose';

export interface INotification extends Document<Types.ObjectId> {
  userId: Types.ObjectId;
  message: string;
  code: string;
  isRead: boolean;
  createdAt: Date;
}

const NotificationSchema = new Schema<INotification>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    message: { type: String, required: true },
    code: { type: String, required: true, default: 'unknown' },
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// prettier-ignore
export const NotificationModel = model('Notification', NotificationSchema);
