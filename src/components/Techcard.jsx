
export default function Techcard({src, alt}) {
  return (
    <>
    <div className="
        bg-[#0d0f16] 
        rounded-2xl 
        p-4 
        w-24 h-24 
        flex items-center justify-center 
        shadow-lg 
        hover:scale-105 
        transition-all duration-300
      "
    >
      <img src={src} alt={alt} className="w-12 h-12 object-contain" />
    </div>
    </>
  )
}
