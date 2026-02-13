import React, { useState, useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes, setPastes } from '../redux/pasteSlice';
import axios from 'axios';

function Home() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [language, setLanguage] = useState("javascript"); 
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const pasteId = searchParams.get("pasteId");
  const allPastes = useSelector((state) => state.paste.pastes);

  //   live Render URL
  const baseUrl = "https://mern-code-snippet-manager.onrender.com/pastes";

  useEffect(() => {
    const paste = allPastes.find((p) => p._id === pasteId);
    
    if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
        setLanguage(paste.language || "javascript");
    } 
    else if (pasteId) {
        axios.get(baseUrl)
            .then((response) => {
                dispatch(setPastes(response.data));
                const foundPaste = response.data.find((p) => p._id === pasteId);
                if (foundPaste) {
                    setTitle(foundPaste.title);
                    setValue(foundPaste.content);
                    setLanguage(foundPaste.language || "javascript");
                }
            })
            .catch((err) => console.error("Error fetching for edit:", err));
    } 
    else {
        setTitle('');
        setValue('');
        setLanguage("javascript");
    }
  }, [pasteId, allPastes, dispatch]);

  async function createPaste() {
    const pasteData = {
      title: title,
      content: value,
      language: language,
      createdAt: new Date().toISOString(),
    };

    try {
        if (pasteId) {
            // Update call to Render
            await axios.put(`${baseUrl}/${pasteId}`, pasteData);
            dispatch(updateToPastes({ ...pasteData, _id: pasteId }));
        } else {
            // Create call to Render
            const response = await axios.post(baseUrl, pasteData);
            dispatch(addToPastes(response.data)); 
        }

        setTitle('');
        setValue('');
        setLanguage("javascript");
        setSearchParams({});
    } catch (error) {
        console.error("Error saving paste:", error);
    }
  }

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center py-8">
      <div className="w-full max-w-4xl flex flex-col gap-6 px-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-2 rounded-xl shadow-sm border border-gray-200">
          <input
            className="flex-grow p-3 text-lg font-medium text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent rounded-lg"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select 
            className="p-3 rounded-lg border border-gray-300 bg-gray-50 font-medium text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="css">CSS</option>
            <option value="html">HTML</option>
            <option value="cpp">C++</option>
          </select>
          <button
            onClick={createPaste}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${pasteId ? "bg-indigo-600" : "bg-black"} shadow-md`}
          >
            {pasteId ? "Update Paste" : "Create Paste"}
          </button>
        </div>
        <div className="flex-grow w-full relative group">
           <textarea
            className="w-full h-[60vh] p-6 bg-white border border-gray-200 rounded-2xl shadow-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-100 text-gray-700 leading-relaxed font-mono"
            value={value}
            placeholder="Write your code here..."
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;