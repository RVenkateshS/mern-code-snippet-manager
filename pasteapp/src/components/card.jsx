import React from 'react';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast'; // Import Toast

function Card({ title, content, _id, onDelete }) {

  const handleDelete = () => {
    onDelete();
  };

  //  NEW: Handle Share Logic
  const handleShare = async () => {
     
    const shareUrl = `${window.location.origin}/paste/${_id}`;

    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Check out this paste: ${title}`,
          text: content.substring(0, 100), // Share a snippet
          url: shareUrl,
        });
      } catch (error) {
        
        console.log("Share cancelled");
      }
    } else {
       
      navigator.clipboard.writeText(shareUrl);
      toast.success("Link copied to clipboard! 🔗");
    }
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      
      {/* Card Header */}
      <div className="bg-gray-50 px-5 py-4 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-800 truncate capitalize w-full">
          {title}
        </h3>
      </div>

      {/* Card Body */}
      <div className="p-5 h-40 overflow-hidden relative group">
        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap break-words">
          {content}
        </p>
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Card Footer */}
      <div className="bg-gray-50 px-5 py-4 border-t border-gray-100 flex justify-between items-center gap-2">
        
        <div className='flex gap-2'>
            {/* Edit */}
            <a href={`/?pasteId=${_id}`} className="text-gray-500 hover:text-blue-500 border border-gray-300 hover:border-blue-500 p-2 rounded-full transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
            </a>

            {/* View */}
            <NavLink to={`/paste/${_id}`} className="text-gray-500 hover:text-orange-500 border border-gray-300 hover:border-orange-500 p-2 rounded-full transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </NavLink>

            {/* Delete */}
            <button onClick={handleDelete} className="text-gray-500 hover:text-red-500 border border-gray-300 hover:border-red-500 p-2 rounded-full transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
            </button>
        </div>

        <div className='flex gap-2'>
            {/* Copy Content */}
            <button 
                onClick={() => {
                    navigator.clipboard.writeText(content);
                    toast.success("Content copied");
                }} 
                className="text-gray-500 hover:text-green-500 border border-gray-300 hover:border-green-500 p-2 rounded-full transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            </button>

            {/* SHARE BUTTON (Updated) */}
            <button 
                onClick={handleShare} // Added the onClick handler here!
                className="text-gray-500 hover:text-purple-500 border border-gray-300 hover:border-purple-500 p-2 rounded-full transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
            </button>
        </div>

      </div>

    </div>
  );
}

export default Card;