import HowerGrowButton from "@/components/ui/howergrowbutton";

function HomeVideo({ videoURL }: { videoURL: string }) {
  return (
    <div className="relative z-0 top-0 w-full">
      {/* Text */}
      <div className="absolute inset-x-0 top-1/4 z-20 text-center text-red-50">
        <p className="mb-2 text-sm max-md:text-sm">HASSLE-FREE</p>
        <h2 className="text-6xl max-md:text-3xl max-lg2:text-4xl">
          Vintage Charm Stories
        </h2>
        <p className="text-lg font-normal mt-4 mx-8">
          Timeless Elegance, Carried Through the Ages.
        </p>
        {/* Button */}
        <div className="mt-9">
          <HowerGrowButton
            href="/collections/leather-bags"
            text="SHOP LEATHER"
          />
        </div>
      </div>

      {/* Opacity Layer */}
      <div className="absolute inset-0 z-10 bg-black opacity-20 w-full sm:h-[400px] md:h-[540px]"></div>

      {/* Video */}
      <div className="w-full">
        <video
          muted
          autoPlay
          loop
          src={videoURL}
          className="w-full h-auto mx-auto object-cover"
          style={{ maxHeight: "540px" }}
        ></video>
      </div>
    </div>
  );
}

export default HomeVideo;
