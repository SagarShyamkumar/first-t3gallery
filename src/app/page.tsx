import {db} from "~/server/db";
export const dynamic="force-dynamic";

const mockUrls = [
  "https://utfs.io/f/213a3d1f-d67d-470c-98b2-0470034b21be-1d.jfif",
  "https://utfs.io/f/8593af2f-fb2f-40fe-bf30-3d3689d78db3-1e.jfif",
  "https://utfs.io/f/b9caa771-8fe9-4294-87e4-a5cc331c248e-1f.jfif",
  "https://utfs.io/f/4e213c02-067e-430c-80bd-5aebfd782743-1g.jfif"
];

const mockimages = mockUrls.map((url,index) => ({
  id: index + 1,
  url,
}));


export default async function HomePage() {

const posts = await db.query.posts.findMany();
console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockimages, ...mockimages, ...mockimages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))
        }
      </div>
    </main>
  );
}
