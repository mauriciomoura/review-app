
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { Fragment } from "react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params;

  const res = await fetch(`hhttp://localhost:8081/api/reviews/${id}`);
  const { title, rating, description, id: reviewId } = (await res.json()) as NetworkReview;
  const review: Review = { title, rating, description, id: reviewId };
  return {
    props: { review }
  };
}
export default function PostDetailPage({
    review
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Fragment>
      <h1 className="m-4 text-center text-3xl text-red-400">{review.title}</h1>
      <p className="m-8">{review.rating}</p>
      <p className="m-8">{review.description}</p>
    </Fragment>
  );
}