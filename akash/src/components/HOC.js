import React, { useState } from 'react'

export const withIncrement = (WrappedComponent) => {

    return () => {
        
        console.log("Akash");

        return <WrappedComponent />
    }

    
}