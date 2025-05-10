import { cn } from "@/lib/utils";

import React from 'react'

type HeadingProps = {
    className?: string
    children?: React.ReactNode
}

function Heading(props: HeadingProps) {
  return (
    <h1
    className={cn(
        'text-2xl/relaxed font-normal text-pretty lg:text-3xl/relaxed',
        props.className
    )}
    >
        {props.children}
    </h1>
  )
}

export default Heading