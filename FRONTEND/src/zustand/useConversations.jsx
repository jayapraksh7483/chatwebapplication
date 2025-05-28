import React from "react";
import {create} from 'zustand';

const useConversationStore = create((set) => ({

    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages:[],
    setMessages: (updater) =>
  set((state) => ({
    messages:
      typeof updater === 'function' ? updater(state.messages) : updater,
  })),

     
}) )

export default useConversationStore;
    