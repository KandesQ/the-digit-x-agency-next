import { useEffect, useState } from "react";


type AnimatedNumberProps = {
    value: number;
    duration?: number;
}

export default function Increment({
    value,
    duration = 2000
}: AnimatedNumberProps)
{
    const [animatedNumber, setCount] = useState<number>(0)

    useEffect(() => {
        let startTime: number | null = null
        let frame: number

        const animate = (time: number) => {
            if (startTime == null) startTime = time

            const progress = Math.min(
                (time - startTime) / duration,
                1 
            )

            setCount(Math.floor(progress * value))

            if (progress < 1)
            {
                frame = requestAnimationFrame(animate)
            }
        }

        frame = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(frame)

    }, [])

    return (<>{animatedNumber}</>)
}