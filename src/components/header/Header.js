function Header(props){
    const arr=[{name:"Meo",id:1},{name:"tho",id:2},{name:"nai",id:3}]
    return(
        <div>
            Đây là component header : {props.x}
            <div>
                {
                    arr.map((item,index)=>(<h1 key={index}>{item.name}</h1>))
                }
            </div>
        </div>
    )
}
export default Header;