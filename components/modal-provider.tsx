"use client"

import { useState,useEffect } from "react"
import ProModal from "./pro-modal"


const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted) {
        return null
    }
  return (
    <>
        <ProModal/>
    </>
  )
}

export default ModalProvider