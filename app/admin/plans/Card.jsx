"use client";

import { createClient } from "@/app/utils/client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Card({ plans }) {
  console.log(plans);
  const supabase = createClient();
  const [selectedIndex, setSelectedIndex] = useState(plans[0].id);
  const [selectedPlanId, setSelectedPlanId] = useState(
    plans.map((e) => e.id).indexOf(selectedIndex)
  );
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="mb-5 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        >
          <div className="p-4 md:py-7 md:px-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="font-bold text-center pb-4 ">{plan.title}</h2>
              <div className="grid gap-4 lg:gap-6">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Name:
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={plan.title}
                        className={
                          errors.title
                            ? `py-3 px-4 block w-full border border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`
                            : "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        }
                        aria-describedby="hs-validation-name-error-helper"
                        {...register("title" + plan.id, { required: true })}
                      />

                      {errors.title && (
                        <>
                          <p
                            className="text-sm text-red-600 mt-2"
                            id="hs-validation-name-error-helper"
                          >
                            Please enter a name
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Subtitle:
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        defaultValue={plan.subtitle}
                        className={
                          errors.subtitle
                            ? `py-3 px-4 block w-full border border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`
                            : "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        }
                        aria-describedby="hs-validation-name-error-helper"
                        {...register("subtitle" + plan.id, { required: true })}
                      />

                      {errors.subtitle && (
                        <>
                          <p
                            className="text-sm text-red-600 mt-2"
                            id="hs-validation-name-error-helper"
                          >
                            Please enter a subtitle
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
                      Price
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="price"
                        name="price"
                        defaultValue={plan.price}
                        className={
                          errors.price
                            ? `py-3 px-4 block w-full border border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`
                            : "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        }
                        aria-describedby="hs-validation-name-error-helper"
                        {...register("price" + plan.id, { required: true })}
                      />

                      {errors.price && (
                        <>
                          <p
                            className="text-sm text-red-600 mt-2"
                            id="hs-validation-name-error-helper"
                          >
                            Please enter a price
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
                      Popularity
                    </label>
                    <div className="relative">
                      <select
                        className={
                          errors.popular
                            ? `py-3 px-4 block w-full border border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`
                            : "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        }
                        name="popular"
                        defaultValue={plan.popular.toString()}
                        {...register("popular" + plan.id, { required: true })}
                        required
                      >
                        <option value="true">Most popular</option>
                        <option value="false">Normal</option>
                      </select>

                      {errors.popular && (
                        <>
                          <p
                            className="text-sm text-red-600 mt-2"
                            id="hs-validation-name-error-helper"
                          >
                            Please choose a popularity
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
                      Features:
                    </label>
                    <div className="relative grid grid-cols-2">
                      <div className="flex">
                        <input
                          type="checkbox"
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-default-checkbox"
                          defaultChecked={plan.instant}
                          {...register("instant" + plan.id)}
                        />
                        <label
                          htmlFor="hs-default-checkbox"
                          className="text-sm text-gray-500 ms-3 dark:text-gray-400"
                        >
                          Instant Access
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          type="checkbox"
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-default-checkbox"
                          defaultChecked={plan.lifetime}
                          {...register("lifetime" + plan.id)}
                        />
                        <label
                          htmlFor="hs-default-checkbox"
                          className="text-sm text-gray-500 ms-3 dark:text-gray-400"
                        >
                          Lifetime Access
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          type="checkbox"
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-default-checkbox"
                          defaultChecked={plan.simplified}
                          {...register("simplified" + plan.id)}
                        />
                        <label
                          htmlFor="hs-default-checkbox"
                          className="text-sm text-gray-500 ms-3 dark:text-gray-400"
                        >
                          Simplified Report
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          type="checkbox"
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-default-checkbox"
                          defaultChecked={plan.certificate}
                          {...register("certificate" + plan.id)}
                        />
                        <label
                          htmlFor="hs-default-checkbox"
                          className="text-sm text-gray-500 ms-3 dark:text-gray-400"
                        >
                          Personalized Certificate
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          type="checkbox"
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-default-checkbox"
                          {...register("indepth" + plan.id)}
                          defaultChecked={plan.indepth}
                        />
                        <label
                          htmlFor="hs-default-checkbox"
                          className="text-sm text-gray-500 ms-3 dark:text-gray-400"
                        >
                          In-Depth Report
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Grid */}
              <div className="mt-6 grid grid-cols-5 gap-2">
                <button
                  type="submit"
                  className="col-span-3 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick={() => setValue("method", "save")}
                >
                  Save
                </button>
                <button
                  type="submit"
                  className="col-span-2 w-full  py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-black hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick={() => setValue("method", "delete")}
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      ))}
    </>
  );
}
