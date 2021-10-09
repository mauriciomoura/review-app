
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params;

  const res = await fetch(`http://localhost:8081/api/reviews/${id}`);
  const { title, rating, description, id: reviewId } = (await res.json()) as NetworkReview;
  const review: Review = { title, rating, description, id: reviewId };
  return {
    props: { review }
  };
}

async function deleteReview(id: number) {
  const res = await fetch(`/api/reviews/${id}`, {
    method: "DELETE"
  });
  if (!res.ok) {
    const body = await res.json();
    throw new Error(body.data.error.message);
  }
}

export default function ReviewDetailPage({
    review
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //const postObj = JSON.parse(review) as Review;
  const router = useRouter();
  async function handleDeleteButtonClick(id: number) {
    const answer = confirm("Are you sure you want to delete this review?");
    if (!answer) return;

    try {
      await deleteReview(id);
      alert("Review deleted successfully!");
      router.replace("/reviews");
    } catch (error) {
      alert("Something went wrong :/");
    }
  }
  return (
    <section className="m-4">
      <h1 className="m-4 text-center text-3xl text-red-400">{review.title}</h1>
      <h2 className="m-4 text-center text-2xl text-yellow-400">{review.rating}</h2>
      <p className="">{review.description}</p>
      <div className="mt-20 flex flex-col md:flex-row md:justify-end">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block flex-grow md:inline md:flex-grow-0">
          <a href={`/reviews/${review.id}/edit`}>Editar</a>
        </button>
        <button
          onClick={() => handleDeleteButtonClick(review.id)}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block flex-grow mt-2 md:inline md:flex-grow-0 md:m-0 md:ml-1"
        >
          Excluir
        </button>
      </div>
    </section>
  );
}