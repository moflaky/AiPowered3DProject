import React from 'react'

import CustomButton from './CustomButton'

const AIPicker = ({prompt, setPrompt, generatingImg, handleSubmit, tooltip}) => {
  return (
    <div className="aipicker-container">
      <textarea 
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3 tooltip-container">
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
              tooltip='Creating an image will also download that image'
            />

            <CustomButton 
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
              tooltip='Creating an image will also download that image'
            />
          </>
        )}
        <div className="tooltip text-sm">{tooltip}</div>
      </div>
    </div>
  )
}

export default AIPicker