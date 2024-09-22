
export default function TableItems(props) {
    
  return (
    <tr style={{border:'1px solid black'}}>
            <td>{props.item.id}</td>
            <td>{props.item.name}</td>
            <td>{props.item.email}</td>
            <td>{props.item.rollNo}</td>
            <button style={{backgroundColor:"blue",color:"white",fontSize:"large"}} onClick={()=>props.onclick(props.item.id)}  > Delete</button>
        </tr>
  )
}
