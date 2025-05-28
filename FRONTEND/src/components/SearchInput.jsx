 import React , { useState} from 'react';
import { FaSearch } from "react-icons/fa";
import useConversationStore from '../zustand/useConversations';
import useGetConversations from '../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search , setSearch]=useState("");
  const {setSelectedConversation} =useConversationStore();
  const {conversations}= useGetConversations();

const handleSubmit = (e) => {
  e.preventDefault();
  if (!search) return;
  if (search.length < 2) {
    toast.error("Search must be at least 2 characters");
    return;
  }

    const conversation = conversations.find((c) =>c.fullname.toLowerCase().includes(search.toLowerCase())
  );

  if (conversation) {
    setSelectedConversation(conversation);
    setSearch("");
  } else {
    toast.error("No conversation found");
  }
};
  
  return (
    <form onSubmit={handleSubmit} action="" className='flex items-center gap-2'>
        <input type="text" placeholder='Search' className='input input-borded rounded-full text-white'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
       <button className='btn btn-circle  bg-green-500 text-white'>
        <FaSearch />

       </button>
    </form>



  )
}

export default SearchInput