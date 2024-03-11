import { createClient } from "../utils/server";
import QuestionsTable from "./components/QuestionsTable";

async function Page({ questions }) {
  const supabase = createClient();
  const { data, error } = await supabase.from("questions").select();
  console.log(data);
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <QuestionsTable questionList={data} />
        </div>
      </div>
    </div>
  );
}

export default Page;
