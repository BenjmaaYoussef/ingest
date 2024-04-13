"use client";

import { createClient } from "@/app/utils/client";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Page() {
  const supabase = createClient();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const { error } = await supabase.from("questions").insert(data);
    if (!error) {
      router.push("/admin");
    }
  };
  return (
    <div>
      <div className="text-left">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
          Create a new question
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
                    {...register("type", { required: true })}
                    required
                  >
                    <option>Select a type</option>
                    <option value="Numerical reasoning">
                      Numerical reasoning
                    </option>
                    <option value="Verbal intelligence">
                      Verbal intelligence
                    </option>
                    <option value="Spatial intelligence">
                      Spatial intelligence
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
                    type="text"
                    id="choice1"
                    name="choice1"
                    className={
                      errors.choice1
                        ? `py-3 px-4 block w-full border border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`
                        : "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    }
                    aria-describedby="hs-validation-name-error-helper"
                    {...register("choice1", { required: true })}
                  />

                  {errors.choice1 && (
                    <>
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        Please enter a choice
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
                    type="text"
                    id="choice2"
                    name="choice2"
                    className={
                      errors.choice2
                        ? `py-3 px-4 block w-full border border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`
                        : "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    }
                    aria-describedby="hs-validation-name-error-helper"
                    {...register("choice2", { required: true })}
                  />

                  {errors.choice2 && (
                    <>
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        Please enter a choice
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
                    type="text"
                    id="choice3"
                    name="choice3"
                    className={
                      errors.choice3
                        ? `py-3 px-4 block w-full border border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`
                        : "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    }
                    aria-describedby="hs-validation-name-error-helper"
                    {...register("choice3", { required: true })}
                  />

                  {errors.choice3 && (
                    <>
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        Please enter a choice
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
                    type="text"
                    id="choice4"
                    name="choice4"
                    className={
                      errors.choice4
                        ? `py-3 px-4 block w-full border border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`
                        : "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    }
                    aria-describedby="hs-validation-name-error-helper"
                    {...register("choice4", { required: true })}
                  />

                  {errors.choice4 && (
                    <>
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        Please enter a choice
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
              Add
            </button>
          </div>
        </form>
        {/* End Form */}
      </div>
    </div>
  );
}
