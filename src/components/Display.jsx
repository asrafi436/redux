import { useSelector } from "react-redux";



export const Display = () => {

    const mycount = useSelector((state) => state.count.value);
    
    const {txtColor , txtSize , bgColor} = useSelector((state) => state.theme);


    return (
        <div style={{ color: txtColor, fontSize: txtSize, backgroundColor: bgColor }}>
            <br />
            <br />
            <h1>Display</h1>
            <h2>Counter {mycount}</h2>
        </div>
    )
}