import { useState, FormEvent } from "react";

export type EditReviewFormData = {
  title: string;
  rating: any;
  description: string;
};

type Props = {
  onSubmit: (data: EditReviewFormData) => void;
  review?: Review;
  reset?: boolean;
};

const EditReviewForm: React.FC<Props> = ({ onSubmit, review, reset }) => {
  const [title, setTitle] = useState(review?.title || "");
  const [rating, setRating] = useState(review?.rating || "");
  const [description, setDescription] = useState(review?.description || "");
  function doReset() {
    setTitle("");
    setRating(0);
    setDescription("");
  }
  function isValid(data: EditReviewFormData): boolean {
    return data.description !== "" && data.title !== "" && data.rating >= 0 && data.rating <= 10;
  }
  function onFormSubmit(e: FormEvent<HTMLFormElement>, data: EditReviewFormData) {
    e.preventDefault();
    onSubmit(data);
    if (reset) doReset();
  }

  return (
    <form
      className="bg-white px-8 pt-6 pb-8 mb-4"
      onSubmit={e => onFormSubmit(e, { title, rating, description })}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Título
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Adicione um título aqui"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Nota
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="rating"
          type="text"
          placeholder="Sua Nota"
          value={rating}
          onChange={e => setRating(e.target.value)}
          required
        />
      </div>

      <div className="flex justify-center items-center">
        <div className="flex items-center mt-2 mb-4">
          <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
          <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
          <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
          <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
          <svg className="mx-1 w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
        </div>
      </div>


      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Descrição
        </label>
        <textarea
          className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          rows={10}
          placeholder="Coloque aqui uma descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="flex md:justify-end">
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-grow md:flex-grow-0 ${
            !isValid({ title, rating, description })
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
          disabled={!isValid({ title, rating, description })}
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

EditReviewForm.defaultProps = { reset: true };
export { EditReviewForm };