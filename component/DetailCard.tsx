type UserDetailProps = {
    image: string
    name: string 
    comment: string 
}

export default function DetailCard ({ image, name, comment }:UserDetailProps){
    return(
        <div>
            <div>
                {name}
            </div>
            <div>
                <div>
                    <img src={image} />
                </div>
                <div>
                    <span>{comment}</span>
                </div>
            </div>
        </div>
    )
}