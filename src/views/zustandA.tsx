import React, {useState} from 'react'
import { GetDataAndPassData } from '../store/store';

const ZustandA = () => {
    

  return (
    <div className='h-[3rem] flex flex-col'>
        <span>this is component A</span>
        <button className='p-2 bg-green-400 rounded-md'></button>
    </div>
  )
}

export default ZustandA