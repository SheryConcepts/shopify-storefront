import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  image: StaticImageData;
  title: string;
  time: string;
};

const BlogPageStyle = ({ id, image, title, time }: Props) => {
  return (
    // Card for Blog Page
    <div className="group px-4 mb-12">
      <Link href={`/blog/${id}`}>
        <div className="lg:max-h-full">
          <div className="overflow-hidden relative h-[400px]  lg:max-h-full">
            {/* Image for Card */}
            <Image
              src={image}
              alt={title}
              width={1000}        
              height={1000}
              className="mb-2  group-hover:scale-110 transition duration-300 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>

          </div>
          {/* date and time */}
          <time dateTime={time} className="text-[#5E5C5C] text-[12px] ">
            {time}
          </time>
          {/* Title for Card */}
          <h3 className="text-[15px] text-[#5E5C5C] font-semibold  ">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default BlogPageStyle;
