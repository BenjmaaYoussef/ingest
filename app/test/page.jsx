import Image from "next/image";
import { generateTest } from "../utils/generateTest";
import Question from "./components/Question";
import Quiz from "./components/Quiz";
import Head from "next/head";

export const dynamic = "force-dynamic";

export default async function Page() {
  const questions = await generateTest();
  console.log(questions);
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {questions.map((qe) => {
        if (qe.question_image) {
          if (qe.answerType == "Graphical answer") {
            return (
              <div key={qe.id}>
                <Image
                  width={300}
                  height={300}
                  priority={true}
                  src={qe.question_image}
                  style={{ display: "none" }}
                  alt="img1"
                />
                <Image
                  width={100}
                  height={100}
                  priority={true}
                  src={qe.choice1}
                  style={{ display: "none" }}
                  alt="img2"
                />
                <Image
                  width={100}
                  height={100}
                  priority={true}
                  src={qe.choice2}
                  style={{ display: "none" }}
                  alt="img3"
                />
                <Image
                  width={100}
                  height={100}
                  priority={true}
                  src={qe.choice3}
                  style={{ display: "none" }}
                  alt="img4"
                />
                <Image
                  width={100}
                  height={100}
                  priority={true}
                  src={qe.choice4}
                  style={{ display: "none" }}
                  alt="img5"
                />
              </div>
            );
          } else {
            return (
              <div key={qe.id}>
                <Image
                  width={300}
                  height={300}
                  priority={true}
                  src={qe.question_image}
                  style={{ display: "none" }}
                  alt="img1"
                />
              </div>
            );
          }
        }
      })}
      <Quiz questions={questions} />
    </div>
  );
}
