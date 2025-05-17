const Button = ({label,iconURL})=>{
    return (
        <button className="flex justify-center items-center text-white
        gap-2 mt-5 px-5 py-3 font-poppins bg-coral-red rounded-full
        hover:bg-red-600 hover:scale-105 transition-all duration-300
        active:scale-95">
            {label}
            {iconURL && <img src={iconURL} alt="right arrow" className="w-5 h-5 ml-2 rounded-full" />}
        </button>
    )
};

export default Button;