import {useEffect} from "react"

const List = ({itemList})=>{
    // console.log(itemList);

    return <>   
    {itemList.map((item) => {
        return <p> {item}</p>
    })}

</>
}

export default List