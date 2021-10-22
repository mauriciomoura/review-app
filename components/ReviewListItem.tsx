import Link from "next/link";
import ReactStars from "react-rating-stars-component";

type Props = {
  review: Review;
};

const ratingChanged = (newRating) => {
  console.log(newRating*2);
};

const ReviewListItem: React.FC<Props> = ({ review }) => {
  return (
    <Link href="/reviews/[id]" as={`/reviews/${review.id}`}>
      <a>
        <article className="bg-gray-100 border-gray-400 rounded-lg p-6 m-4 transition duration-300 ease-in-out transform hover:-translate-y-2 ">
          <div className="flex text-center md:text-left">
            <span className="text-lg">{review.title}</span>
            <span className="text-lg">
              <ReactStars
                count={5}
                value={review.rating/2}
                isHalf={true}
                onChange={ratingChanged}
                size={24}
                edit={false}
                activeColor="#ffd700"
              />
            </span>
          </div>
          <div className="text-center md:text-left">
            <p className="text-purple-500">{review.description}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export { ReviewListItem };