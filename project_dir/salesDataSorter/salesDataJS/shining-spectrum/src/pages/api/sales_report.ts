import type { APIRoute} from "astro";
import { supabase } from "../../lib/supabase.ts";

// @ts-ignore
export const GET: APIRoute= async () => {
    const {data, error} = await supabase
        .from("sales_report")
        .select("*")

        if (error){
            return new Response(JSON.stringify({
                error: error.message,
            })), { "status": 500 }
        }
        return new Response(JSON.stringify(data)), { "status": 200 };
}