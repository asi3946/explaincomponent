type HeaderProps = {
    title: string
};

export default function Header ( Props :HeaderProps){
    return(
        <div className="border-t-4 border-b-4 mt-1 mb-1">
            <div className="pl-10 p-3">
                <p className="">{Props.title}</p>
            </div>
        </div>
    )
}

