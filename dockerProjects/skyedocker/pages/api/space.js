import { ConnectToDatabase } from "@/libs/mongodb";

export default async (req, res) =>{
    try {
        const clinet = await ConnectToDatabase;
        const db = clinet.db("")
    } catch (error) {
        console.error(error)
    }
}