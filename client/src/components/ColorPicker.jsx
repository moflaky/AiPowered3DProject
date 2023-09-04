import React from 'react'
import {SketchPicker} from 'react-color'
import {useSnapshot} from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={['#ccc','#FFD700', '#FFA07A', '#F0E68C', '#87CEEB', '#FF69B4', '#A0522D', '#D2B48C', '#FF7F50', '#40E0D0', '#E6E6FA', '#353934']}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker