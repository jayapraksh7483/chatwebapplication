import Conversation from "../models/conversationmodel.js";
import Message from "../models/messeagemodel.js";
import User from "../models/usermodel.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";

export const sendmessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // Find existing conversation between sender and receiver
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // If no conversation exists, create one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // Create new message document
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // Save the message to DB
    
    // Push new message ID to conversation messages array
    if(newMessage)
   { conversation.messages.push(newMessage._id);
}



    // Save updated conversation
    await Promise.all([conversation.save(),newMessage.save()]);
  
    const receiverSocketId= getReceiverSocketId(receiverId);

    if(receiverSocketId)
    {
      io.to(receiverSocketId).emit("newMessage",newMessage)
    }


    res.status(200).json(newMessage);

 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const getmessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    // Find existing conversation between sender and receiver
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");


    if (!conversation) {
      return res.status(200).json([]);
    }
    const messages= conversation.messages;

   
    res.status(200).json(messages);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}