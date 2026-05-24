import React from 'react'

const Card = (props) => {
    return (
        <a
            href={props.item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col bg-neutral-900/40 border border-white/5 hover:border-teal-500/30 rounded-2xl overflow-hidden transition-all duration-350 hover:shadow-xl hover:shadow-teal-500/5 hover:-translate-y-1 w-48"
        >
            {/* Image Container with subtle hover zoom */}
            <div className="h-44 w-full bg-neutral-950 overflow-hidden relative">
                <img 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    src={props.item.download_url} 
                    alt={props.item.author} 
                    loading="lazy"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/65 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
            
            {/* Details Section */}
            <div className="p-3.5 flex flex-col justify-center bg-[#0d0d11]/90 backdrop-blur-sm border-t border-white/5">
                <span className="text-[9px] uppercase tracking-wider text-teal-400 font-semibold mb-0.5">Photographer</span>
                <h2 className="text-neutral-200 text-xs font-semibold truncate group-hover:text-teal-300 transition-colors duration-200">
                    {props.item.author}
                </h2>
            </div>
        </a>
    )
}

export default Card;