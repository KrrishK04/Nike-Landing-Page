export default function ShoeCard({ imgURL, thumbnail, changeBigShoeImg, bigShoeImg }) {
    function handleChange(event){
        if(bigShoeImg != imgURL){
            changeBigShoeImg(imgURL)
        }
    }
    return(
        <div className="flex flex-1 justify-center items-stretch scale-90"
            onClick={handleChange}
            >
            <div className={`flex justify-center items-center bg-card bg-cover border-2  border-spacing-3 p-2 rounded-xl
            z-10 cursor-pointer max-sm:flex-1 sm:w-40 sm:h-40 max-sm:p-4
            w-30 h-30
            ${imgURL==bigShoeImg ? ' border-coral-red' : 'border-none'}
            transition-transform duration-300 hover:shadow-xl shadow-md hover:scale-125 `}>
                <img src={imgURL} alt={thumbnail} 
                width={120}
                height={100}
                className="object-contain w-full h-full"
            /></div>
            
        </div>
    );
}