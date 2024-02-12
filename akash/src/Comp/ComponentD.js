import React from 'react'
import ComponentE from './ComponentE'
import { ChannelConext } from './ComponentC'

export default function () {
  return (
    <div><ComponentE/>
    
    <ChannelConext.Consumer>
        {channel => {return <div> Channel Name : {channel}</div>} }
    </ChannelConext.Consumer>
    
    </div>
  )
}
