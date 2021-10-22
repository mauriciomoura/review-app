import { EditReviewForm } from "../../components/EditReviewForm";
import { useRouter } from "next/router";
import toast from "../../components/Toast";
import * as React from "react";

export type NewReviewFormData = {
  title: string;
  description: string;
};

async function sendData(data: NewReviewFormData) {
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
}

function AddNewPage() {
  const router = useRouter();

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  const dismiss = React.useCallback(() => {
    toast.dismiss();
  }, []);

  async function onFormSubmit(data: NewReviewFormData) {
    try {
      sendData(data);
      //alert("Review created successfully!");
      notify("success", "Avaliação criada com sucesso!");
      router.replace(`/reviews`);
    } catch (error) {
      //alert("Something went wrong :/");
      notify("error", "Algo deu errado! Não foi possível criar a avaliação.");
    }
  }

  return (
    <section className="m-4">
      <EditReviewForm onSubmit={onFormSubmit} />
    </section>
  );
}

export default AddNewPage;