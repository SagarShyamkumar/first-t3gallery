import Link from "next/link";
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


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        [...mockimages, ...mockimages, ...mockimages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))
        }
      </div>
    </main>
  );
}
