import { ChatMessageModel, ConversationModel } from 'db/models/chat';
import { NotificationModel } from 'db/models/notification';
import { UserModel } from 'db/models/user';
import { Server, Socket } from 'socket.io';
import logger from 'utils/logger';

export function handleChatConnection(socket: Socket, io: Server) {
  socket.on('sendMessage', async ({ conversationId, senderId, content }) => {
    try {
      let conversation = await ConversationModel.findById(conversationId);

      content = String(content).trim();

      if (!content) {
        logger.warn(`Trying to send empty message`);
        return;
      }

      if (!conversation) {
        logger.error(`Conversation not found: ${conversationId}`);
        return;
      }

      // Save message
      const message = await ChatMessageModel.create({
        conversationId,
        senderId,
        content,
      });

      // Update conversation with the latest message
      conversation.lastMessage = content;
      conversation.lastUpdated = new Date();

      await conversation.save();

      // broadcast to all users other than the sender
      const broadcastTo = conversation.participants
        .map((id) => id.toString())
        .filter((p) => p !== senderId);

      // Live broadcast message to other users
      io.to(broadcastTo).emit('receiveMessage', {
        conversationId,
        message,
      });

      // Send message notification to other users
      notifyMessage(content, senderId, broadcastTo);
    } catch (err) {
      console.error('Error sending message:', err);
    }
  });
}

async function notifyMessage(
  content: string,
  senderId: any,
  broadcastTo: any[],
) {
  const sender = await UserModel.findById(senderId);
  if (!sender) return;

  const msgPreview = truncateLongContent(content);

  broadcastTo.forEach(async (userId) => {
    await NotificationModel.create({
      userId: userId,
      message: `You have a new message from ${sender.fullName}: "${msgPreview}"`,
    });
  });
}

function truncateLongContent(str) {
  if (str.length > 10) {
    return str.slice(0, 10) + '...';
  }
  return str;
}
