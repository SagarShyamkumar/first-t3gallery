import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: {photoId: String}) {
    const idAsNumber = Number(props.photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);

  const userInfo = await clerkClient.users.getUser(image.userId);

  return( 
    <div className="flex h-full w-full min-w-0">
      
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="object-contain " alt={image.name}/>
      </div>
        <div className="flex w-48 flex-shrink-0 flex-col border-l">   
          <div className="border-b text-lg text-center p-2">
            {image.name}
          </div>

          <div className="flex flex-col p-2">
            <span>Uploaded By:</span>
            <span>{userInfo.fullName}</span>
          </div>

          <div className="flex flex-col p-2">
            <span>Created On:</span>
            <span>{image.createdAt.toLocaleDateString()}</span>
          </div>

        </div>
    </div>
  )
}