import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './components/Card';

const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}`);
      setUserdata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  useEffect(function () {
    getData();
  }, [index]);

  // Loading state placeholder with an elegant shimmer
  let printDataUser = (
    <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
      <div className="w-12 h-12 border-2 border-neutral-700 border-t-teal-400 rounded-full animate-spin mb-4"></div>
      <p className="text-neutral-400 font-medium text-sm animate-pulse">Loading visual assets...</p>
    </div>
  );

  if (userdata.length > 0) {
    printDataUser = userdata.map((item) => {
      return (
        <Card key={item.id} item={item} />
      )
    });
  }

  return (
    <div className='w-full min-h-screen bg-[#070709] px-6 py-12 flex flex-col items-center relative overflow-x-hidden text-neutral-100'>
      {/* Decorative background glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      {/* Header Container */}
      <header className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center border-b border-white/5 pb-8 mb-10 gap-4 relative z-10">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-indigo-400">
            LENS CRAFT
          </h1>
          <p className="text-neutral-400 text-sm mt-1">A curated collection of public high-resolution inspiration.</p>
        </div>
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
          <span className="text-neutral-300 text-xs font-semibold tracking-wider">LIVE FEED</span>
        </div>
      </header>

      {/* Gallery Grid */}
      <main className="w-full max-w-6xl flex-grow relative z-10">
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center justify-center my-6'>
          {printDataUser}
        </div>
      </main>

      {/* Pagination Footer */}
      <footer className="w-full max-w-6xl flex flex-col md:flex-row gap-6 justify-between items-center py-12 mt-auto relative z-10 border-t border-white/5">
        <div className="text-neutral-400 text-xs font-medium tracking-wide">
          Showing page <span className="text-teal-400 font-semibold">{index}</span> of 10
        </div>
        
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {/* Prev Button */}
          <button 
            onClick={() => { if (index > 1) { setIndex(index - 1) } else { alert("you are on first page") } }} 
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-350 active:scale-95 border ${
              index > 1 
                ? 'bg-white/5 text-white hover:bg-white/10 border-white/10 hover:border-white/20 cursor-pointer shadow-lg' 
                : 'bg-white/5 text-neutral-600 border-white/5 cursor-not-allowed'
            }`}
            title="Previous Page"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1 bg-neutral-900/60 p-1 rounded-full border border-white/5 backdrop-blur-md">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setIndex(pageNum)}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200 active:scale-90 ${
                  index === pageNum
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-neutral-950 shadow-lg shadow-teal-500/20 font-bold'
                    : 'text-neutral-400 hover:text-neutral-100 hover:bg-white/5'
                }`}
              >
                {pageNum}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={() => { if (index < 10) { setIndex(index + 1) } else { alert("you are on last page") } }} 
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-350 active:scale-95 border ${
              index < 10 
                ? 'bg-white/5 text-white hover:bg-white/10 border-white/10 hover:border-white/20 cursor-pointer shadow-lg' 
                : 'bg-white/5 text-neutral-600 border-white/5 cursor-not-allowed'
            }`}
            title="Next Page"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App;
