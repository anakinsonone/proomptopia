import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export default GET = async (req, res) => {
  try {
    await connectToDatabase();

    const prompts = Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
