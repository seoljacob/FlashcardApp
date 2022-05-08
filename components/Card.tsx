import { useState } from "react"
import ReactCardFlip from "react-card-flip"

interface Props {
    className?: any;
}

export const Card: React.FC<Props> = ({ className }) => {
    const [isCardFlipped, setIsCardFlipped] = useState(false);
    const handleCardFlip = () => {
        setIsCardFlipped(isCardFlipped => !isCardFlipped)
    }
    return (
        <ReactCardFlip isFlipped={isCardFlipped} flipDirection="vertical" flipSpeedFrontToBack={1} flipSpeedBackToFront={1}>
            <div className={`flex items-center justify-center w-96 h-48 border rounded-lg ${className}`} onClick={handleCardFlip}>
                <div>
                    This is the front of the card.
                </div>
            </div>
            <div className={`flex items-center justify-center w-96 h-48 border rounded-lg ${className}`} onClick={handleCardFlip}>
                <div>
                    This is the back of the card.
                </div>
            </div>
        </ReactCardFlip>
    )
}