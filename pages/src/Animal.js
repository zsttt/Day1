import Image from "next/Image"

const Animal = props => {
    return (
        <div>
            <strong>{props.type}</strong>
            <span>{props.state}</span>    
            <span>{props.adoption_fee}</span>
            <Image width={100} height={100} src={"/"+props.img}></Image>
        </div>
    )
} 


export default Animal