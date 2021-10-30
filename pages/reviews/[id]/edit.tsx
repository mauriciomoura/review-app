import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
//import toast from "../../../components/Toast";
//import * as React from "react";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  EditReviewForm,
  EditReviewFormData
} from "../../../components/EditReviewForm";
import { useRouter } from "next/router";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { id } = context.params;

    const res = await fetch(process.env.REVIEW_API_URL + `/${id}`);
    const { title, rating, description, id: reviewId } = (await res.json()) as NetworkReview;
    const review: Review = { title, rating, description, id: reviewId };
    return {
      props: { review }
    };
}

async function sendData(id: number, data: EditReviewFormData) {
  const res = await fetch(`/api/reviews/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const body = await res.json();
  if (!res.ok) {
    throw new Error(body.data.error.message);
  }
}

export default function EditReviewPage({
  review
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  /*const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  const dismiss = React.useCallback(() => {
    toast.dismiss();
  }, []);*/

  const notify = (msg) => toast(msg);

  function handleSubmit(data: EditReviewFormData) {
    try {
      sendData(review.id, data);
      //alert("Review updated successfully!");
      notify("Avaliação atualizada com sucesso!");
      router.replace(`/reviews/${review.id}`);
    } catch (error) {
      //alert("Something went wrong :/");
      notify("Algo deu errado! Não foi possível atualizar a avaliação.");
    }
  }

  return (
      <>
        <section className="m-4">
          <EditReviewForm onSubmit={handleSubmit} review={review} reset={false} />
        </section>
      </>
  );
}