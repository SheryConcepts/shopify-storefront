import { GrStar } from "react-icons/gr";

interface Props {
  reviews: {
    // title: string;
    // name: string;
    // date: string;
    // description: string;
    rating: number;
  }[];
}

// Calculate average rating
const AverageRating = ({ reviews }: Props) => {
  const avgRating =
    reviews.reduce((acc: any, review: any) => acc + review.rating, 0) /
    reviews.length;

  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <GrStar
          key={i}
          color={i < avgRating ? "#EF9A9A" : "#C0C0C0"}
          size="18px"
        />
      ))}
    </div>
  );
};

export default AverageRating;
