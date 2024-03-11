"use client";

import { createClient } from "@/app/utils/client";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Page() {
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const { data: newQuest, error: addQuestError } = await supabase
        .from("questions")
        .insert({
          type: "Graphical question",
          name: data.name,
          status: data.status,
          answer: data.answer,
        })
        .select();
      console.log(newQuest);
      const { data: question_image, error: questionError } =
        await supabase.storage
          .from("graphical")
          .upload(
            "/" + newQuest[0].id + "/question.png",
            data.questionimage[0]
          );
      const { data: choice1, error: choiceError1 } = await supabase.storage
        .from("graphical")
        .upload("/" + newQuest[0].id + "/1.png", data.choice1[0]);
      const { data: choice2, erro: choiceError2 } = await supabase.storage
        .from("graphical")
        .upload("/" + newQuest[0].id + "/2.png", data.choice2[0]);
      const { data: choice3, erro: choiceError3 } = await supabase.storage
        .from("graphical")
        .upload("/" + newQuest[0].id + "/3.png", data.choice3[0]);
      const { data: choice4, erro: choiceError4 } = await supabase.storage
        .from("graphical")
        .upload("/" + newQuest[0].id + "/4.png", data.choice4[0]);

      const { data: questionLink } = supabase.storage
        .from("graphical")
        .getPublicUrl(newQuest[0].id + "/question.png");
      const { data: choiceLink1 } = supabase.storage
        .from("graphical")
        .getPublicUrl(newQuest[0].id + "/1.png");
      const { data: choiceLink2 } = supabase.storage
        .from("graphical")
        .getPublicUrl(newQuest[0].id + "/2.png");

      const { data: choiceLink3 } = supabase.storage
        .from("graphical")
        .getPublicUrl(newQuest[0].id + "/3.png");

      const { data: choiceLink4 } = supabase.storage
        .from("graphical")
        .getPublicUrl(newQuest[0].id + "/4.png");

      const { error } = await supabase
        .from("questions")
        .update({
          question_image: questionLink.publicUrl,
          choice1: choiceLink1.publicUrl,
          choice2: choiceLink2.publicUrl,
          choice3: choiceLink3.publicUrl,
          choice4: choiceLink4.publicUrl,
        })
        .eq("id", newQuest[0].id);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="text-left">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
          Create a new graphical question
        </h1>
      </div>
      <div className="mt-12">
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 lg:gap-6">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Question
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={
                      errors.name
                        ? `py-3 px-4 block w-full border border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`
                        : "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    }
                    aria-describedby="hs-validation-name-error-helper"
                    {...register("name", { required: true })}
                  />

                  {errors.name && (
                    <>
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        Please enter a question
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="question"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Type
                </label>
                <div className="relative">
                  <select
                    className={
                      errors.type
                        ? `py-3 px-4 block w-full border border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`
                        : "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    }
                    name="type"
                    disabled
                    {...register("type")}
                    required
                  >
                    <option value="Graphical question">
                      Graphical question
                    </option>
                  </select>

                  {errors.type && (
                    <>
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        Please enter a type
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="questionimage"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Question image:
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="questionimage"
                  id="questionimage"
                  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"
                  {...register("questionimage", { required: true })}
                />

                {errors.questionimage && (
                  <>
                    <p
                      className="text-sm text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                    >
                      Please upload a question image
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="question"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  First choice:
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="choice1"
                    id="choice1"
                    className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"
                    {...register("choice1", { required: true })}
                  />

                  {errors.choice1 && (
                    <>
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        Please upload a choice
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="question"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Second choice:
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="choice2"
                    id="choice2"
                    className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"
                    {...register("choice2", { required: true })}
                  />

                  {errors.choice2 && (
                    <>
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        Please upload a choice
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="question"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Third choice:
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="choice3"
                    id="choice3"
                    className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"
                    {...register("choice3", { required: true })}
                  />

                  {errors.choice3 && (
                    <>
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        Please upload a choice
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="question"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Fourth choice:
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="choice4"
                    id="choice4"
                    className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"
                    {...register("choice4", { required: true })}
                  />

                  {errors.choice4 && (
                    <>
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        Please upload a choice
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="question"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Status:
                </label>
                <div className="relative">
                  <select
                    className={
                      errors.status
                        ? `py-3 px-4 block w-full border border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`
                        : "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    }
                    name="status"
                    {...register("status", { required: true })}
                    required
                  >
                    <option>Select a status</option>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>

                  {errors.status && (
                    <>
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        Please choose a status
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="answer"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Correct answer:
                </label>
                <div className="relative">
                  <select
                    className={
                      errors.answer
                        ? `py-3 px-4 block w-full border border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`
                        : "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    }
                    name="answer"
                    {...register("answer", { required: true })}
                    required
                  >
                    <option value="">Select an answer</option>
                    <option value="1">First choice</option>
                    <option value="2">Second choice</option>
                    <option value="3">Third choice</option>
                    <option value="4">Fourth choice</option>
                  </select>

                  {errors.answer && (
                    <>
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        Please choose a correct answer
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* End Grid */}
          <div className="mt-6 grid">
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              {isLoading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  style={{
                    margin: "auto",
                    display: "block",
                    shapeRendering: "auto",
                  }}
                  width="20px"
                  height="20px"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <circle
                    cx={50}
                    cy={50}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth={10}
                    r={35}
                    strokeDasharray="164.93361431346415 56.97787143782138"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      repeatCount="indefinite"
                      dur="1s"
                      values="0 50 50;360 50 50"
                      keyTimes="0;1"
                    />
                  </circle>
                  {/* [ldio] generated by https://loading.io/ */}
                </svg>
              ) : (
                "Add"
              )}
            </button>
          </div>
        </form>
        {/* End Form */}
      </div>
    </div>
  );
}
