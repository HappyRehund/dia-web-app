//src/app/track/page.tsx
"use client"
import Tracker from '@/components/module/track/Tracker';
import React, { useContext, useState } from 'react'

type DietContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

export const DietContext = React.createContext<DietContextType>([false, () => {}]);

export function useDietContext() {
    return useContext(DietContext)
}

function TrackPage() {
    const [isDiet, setIsDiet] = useState(true)

  return (
    <DietContext.Provider value={[isDiet, setIsDiet]}>
        <Tracker />
    </DietContext.Provider>
  )
}

export default TrackPage