    import React from 'react'
    import { useSelector } from 'react-redux'
    import { useState,useEffect } from 'react';
    import Card from './Card';
    import { useDispatch } from 'react-redux';
    
    import { removeFromPastes, setPastes } from '../redux/pasteSlice';
    import toast from 'react-hot-toast';
    import axios from 'axios';

    const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

 // USE EFFECT TO FETCH DATA

  useEffect(() => {
    // Fetch all pastes from backend when component mounts
    axios.get('http://localhost:5000/pastes')
      .then((response) => {
        // Update Redux with the data from DB
        console.log("Data from DB:", response.data);
        dispatch(setPastes(response.data));
      })
      .catch((error) => {
        console.error("Error fetching pastes:", error);
        toast.error("Failed to load pastes");
      });
  }, []);  

  const handleDelete = (pasteId) => {
    // 1. Delete from DB first
    axios.delete(`http://localhost:5000/pastes/${pasteId}`)
      .then(() => {
        // 2. If successful, remove from Redux
        dispatch(removeFromPastes(pasteId));
      })
      .catch((err) => {
        toast.error("Failed to delete");
      });
  }

 
const filteredPastes = pastes.filter((paste) =>
  paste.title.toLowerCase().includes(searchTerm.toLowerCase())
);
    return (
    <div className="flex flex-col gap-5 items-center mt-5 bg-gray-50 min-h-screen p-10">
        
        {/* Search Bar */}
        <input 
        className="p-3 pl-5 rounded-2xl min-w-[400px] border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="search" 
        placeholder="Search pastes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-5">
        
        {filteredPastes.length > 0 ? (
            filteredPastes.map((paste) => (
            <Card 
                key={paste?._id} 
                _id={paste?._id}  
                title={paste?.title} 
                content={paste?.content} 
                onDelete={() => handleDelete(paste?._id)}
            />
            ))
        ) : (
            <div className="col-span-3 text-center text-2xl text-gray-400 font-semibold mt-10">
            No Pastes Found 😔
            </div>
        )}

        </div>
    </div>
    )
    
    }

    export default Paste