import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
export default async function Home() {
  const  user = await currentUser();
  if (!user) {
    return <Guest />; // Render Guest component if no user is signed in
   
  }
  return (
<div>
  <h2 className="text-5xl">Hello nextjs</h2>
  <h1 className="text-red-500">Hello HomePage</h1>
</div>
  );
}
