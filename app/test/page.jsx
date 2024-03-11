import { generateTest } from "../utils/generateTest";
import Question from "./components/Question";
import Quiz from "./components/Quiz";

export const dynamic = "force-dynamic";

export default async function Page() {
  const questions = await generateTest();
  console.log(questions);
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <Quiz questions={questions} />
    </div>
  );
}
