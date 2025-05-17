export default function ServiceCard({imgURL, label, subtext}){
    console.log(imgURL);
    return (
        <div className="flex flex-col gap-2 flex-1 justify-center
            small:w-[350px] small:min-w-[350px] rounded-xl shadow-3xl px-9 py-16 " >
            <div className="bg-coral-red flex justify-center items-center rounded-full w-11 h-11">
                <img src={imgURL} alt={label} width={24} height={24} />
            </div>
            <h2 className="font-montserrat font-bold mt-2">{label}</h2>
            <p className="text-slate-500 mt-1 break-words">{subtext}</p>
        </div>
    )
}