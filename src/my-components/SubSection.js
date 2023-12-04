const SubSection = () => {
  return (
    <div>
     
        <div className=" flex gap-10 py-20 flex-col md:px-20 lg:flex-row lg:px-20 px-3 mx-2 bg-white ">
          <div className="border-2 border-gray-300 border-solid px-8 py-3">
           
            <img src={`${process.env.PUBLIC_URL}/usecases.webp`} alt=" " />
            <p className="text-custom text-2xl font-extrabold text-blue-950 opacity-95 py-5">Narrative Flexibility</p>
            <p className="text-custom text-base font-bold text-blue-950 opacity-60 py-5">From fiction to educational material, our AI voices adapt to any genre, offering listeners an engaging and varied listening experience.</p>
          </div>

          <div className="border-2 border-gray-300 border-solid px-8 py-3 lg:mr-20">
          <img src={`${process.env.PUBLIC_URL}/download.jpg`} alt=" " />
          <p className="text-custom text-base font-bold text-blue-950 opacity-60 py-5">Our current text-to-speech system provides a range of male voices with distinct tones, offering users a varied yet masculine auditory experience. Stay tuned for future updates as we work towards introducing more diverse voice options for an enhanced and inclusive user experience.</p>
          </div>
      
      </div>
    </div>
  );
};
export default SubSection;
