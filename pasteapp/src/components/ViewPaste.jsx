import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


// 1. NEW IMPORTS
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ViewPaste() {
  const { id } = useParams();
  const navigate = useNavigate();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  if (!paste) return <div>Paste not found</div>;

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen bg-gray-50 py-10">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        
       
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-extrabold text-gray-800 capitalize">{paste.title}</h1>
          
          
          <span className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
            {paste.language || "text"}
          </span>
        </div>

        
        <div className="rounded-xl overflow-hidden shadow-inner border border-gray-200">
           <SyntaxHighlighter 
              language={paste.language || "javascript"} 
              style={atomDark}
              customStyle={{
                  padding: "25px",
                  fontSize: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#1e1e1e", // Matches dark theme standard
                  minHeight: "500px",
                  margin: 0
              }}
              wrapLongLines={true}
           >
              {paste.content}
           </SyntaxHighlighter>
        </div>

      </div>
    </div>
  )
}

export default ViewPaste