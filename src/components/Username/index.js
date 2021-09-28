import { useSelector } from "react-redux"

const Username = () => {

    
    const name = useSelector(state => state.user)

    return (
        <>
            <h4>Nome: {name} </h4>
        </>
    )
}

export default Username;