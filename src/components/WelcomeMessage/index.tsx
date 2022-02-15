interface WelcomeMessageProps {
    position: string;
    country?: string;
}

function WelcomeMessage({
    position,
    country = "VietNam",
}: WelcomeMessageProps) {
    return (
        <>
            Welcome {position} from {country}
        </>
    );
}

export default WelcomeMessage;
