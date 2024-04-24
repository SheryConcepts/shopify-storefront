const ContentSection = ({ h2, p }: { h2: JSX.Element; p: JSX.Element }) => {
  return (
    <section className="mt-20">
      <div className="text-center flex flex-col items-center">
        {/* Main heading */}

        <h2 className="mb-2 text-[44px] font-[370] text-slate-900 max-w-[580px] leading-[1.1] ">
        {h2}
        </h2>

        {/* Overlay Layer */}

        <div className="h-[3px] w-8 bg-black rounded-full "></div>

        {/* Description */}

        <p className="text-[17px] text-slate-900 max-w-[900px] font-[350] tracking-widest mt-10 px-10">{p}</p>
      </div>
    </section>
  );
};

export default ContentSection;
