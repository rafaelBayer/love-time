import React, { useState } from 'react'

const PolaroidPhoto = ({ imageUrl, title, isRight = false, text,}) => {

    return (
        <div className={`flex flex-col md:flex-row items-center my-16 ${isRight ? 'md:flex-row-reverse' : ''}`}>
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <div className={`polaroid w-64 md:w-72 transition-opacity duration-1000`}>
              <div className="photo-container h-56 md:h-64 overflow-hidden">
                <img 
                  src={new URL(imageUrl, import.meta.url).href} 
                  alt={title} 
                  className={`photo`}
                />
              </div>
              <div className="pt-4 pb-2 text-center">
                <p className="font-cursive text-xl text-love-text">{title}</p>
              </div>
            </div>
          </div>
          <div className={`w-full md:w-1/2 ${isRight ? 'md:pr-8' : 'md:pl-8'}`}>
            <p className="text-love-text text-lg font-light leading-relaxed">
              {text}
            </p>
          </div>
        </div>
      );
}

export default PolaroidPhoto