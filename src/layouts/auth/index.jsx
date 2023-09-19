import "./style.sass";

// A higher order component that returns a react functional component
export default function ($element) {
    return () => <>
        <$element />
    </>;
};