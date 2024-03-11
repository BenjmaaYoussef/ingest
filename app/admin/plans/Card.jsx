"use client";

import { createClient } from "@/app/utils/client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Card({ plans }) {
  const supabase = createClient();
  const [selectedIndex, setSelectedIndex] = useState(plans[0].id);
  const [selectedPlanId, setSelectedPlanId] = useState(
    plans.map((e) => e.id).indexOf(selectedIndex)
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(selectedIndex);
    const { error } = await supabase
      .from("plans")
      .update(data)
      .eq("id", selectedPlanId);
    if (!error) {
      console.log("updated");
    }
  };
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      {/* Select (Mobile only) */}
      <div className="sm:hidden">
        <label htmlFor="hs-card-nav-tabs" className="sr-only">
          Select a nav
        </label>
        <select
          name="hs-card-nav-tabs"
          id="hs-card-nav-tabs"
          className="block w-full border-t-0 border-x-0 border-gray-300 rounded-t-xl focus:ring-blue-600 focus:border-blue-600"
        >
          {plans.map((plan) => (
            <option>{plan.title}</option>
          ))}
        </select>
      </div>
      {/* End Select (Mobile only) */}
      {/* Nav Tabs (Device only) */}

      <div className="hidden sm:block">
        <div
          className="relative z-0 flex border-b rounded-xl divide-x dark:border-gray-700 dark:divide-gray-700"
          aria-label="Tabs"
        >
          {plans.map((plan) => (
            <div
              className={
                `${selectedIndex == plan.id && "border-b-blue-600"}` +
                " group cursor-pointer relative min-w-0 flex-1 bg-white py-4 px-4 border-b-2  text-gray-900 rounded-ss-xl text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:text-gray-300"
              }
              aria-current="page"
              key={plan.id}
              onClick={() => {
                setSelectedPlanId(plans.map((e) => e.id).indexOf(plan.id));
                setSelectedIndex(plan.id);
              }}
            >
              {plan.title}
            </div>
          ))}
          {/* <a
            className="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:hover:text-gray-400"
            href="#"
          >
            Company
          </a> */}
        </div>
      </div>
      {/* End Nav Tabs (Device only) */}
      <div className="p-4 md:py-7 md:px-5">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    defaultValue={plans[selectedPlanId].title}
                    className={
                      errors.title
                        ? `py-3 px-4 block w-full border border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`
                        : "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    }
                    aria-describedby="hs-validation-name-error-helper"
                    {...register("title", { required: true })}
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
                    defaultValue={plans[selectedPlanId].subtitle}
                    className={
                      errors.subtitle
                        ? `py-3 px-4 block w-full border border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`
                        : "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    }
                    aria-describedby="hs-validation-name-error-helper"
                    {...register("subtitle", { required: true })}
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
                    defaultValue={plans[selectedPlanId].price}
                    className={
                      errors.price
                        ? `py-3 px-4 block w-full border border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`
                        : "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    }
                    aria-describedby="hs-validation-name-error-helper"
                    {...register("price", { required: true })}
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
                    defaultValue={plans[selectedPlanId].popular.toString()}
                    {...register("popular", { required: true })}
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
                      defaultChecked={plans[selectedPlanId].instant}
                      {...register("instant")}
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
                      defaultChecked={plans[selectedPlanId].lifetime}
                      {...register("lifetime")}
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
                      defaultChecked={plans[selectedPlanId].simplified}
                      {...register("simplified")}
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
                      defaultChecked={plans[selectedPlanId].certificate}
                      {...register("certificate")}
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
                      {...register("indepth")}
                      defaultChecked={plans[selectedPlanId].indepth}
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
          <div className="mt-6 grid">
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
