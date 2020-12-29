import Image from "next/Image"


const Animal = props => {
    return (

        <div class = "inline-block text-center content-center border-2 border-white p-7 bg-yellow-100 block">
           
            <span class ="inline-block">
                <Image width ={166.8} height={166.8} src={"/"+props.img}></Image>
            </span>

            <div class = "text-lg font-semibold">
                <div>Animal: {props.type}</div>
                <div>State: {props.state}</div>    
                <div>Fee to adopt: {props.adoption_fee}</div>
            </div>

        </div>

    )
} 


export default Animal