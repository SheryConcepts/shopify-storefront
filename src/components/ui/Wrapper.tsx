"use client"
import { FC, ReactNode, useEffect } from "react"
import { animation_fade_down_to_up } from "../utils/functions/animations";

const WrapperForAnimation: FC<{ children: ReactNode }> = ({ children }) => {
    useEffect(() => {
        let isBrowser = () => typeof window !== "undefined";

        if (isBrowser()) {
            animation_fade_down_to_up();
        }
    }, [])

    return (
        <main>{children}</main>
    )
}

export default WrapperForAnimation