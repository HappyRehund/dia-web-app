"use client"
import Tracker from '@/components/module/track/Tracker';
import { DietContext } from '@/hooks/useDietContext';
import React, { useState } from 'react'


function TrackPage() {
    const [isDiet, setIsDiet] = useState(true)

    return (
        <DietContext.Provider value={[isDiet, setIsDiet]}>
            <Tracker />
        </DietContext.Provider>
    )
}

export default TrackPage