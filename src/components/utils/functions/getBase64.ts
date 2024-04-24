import { getPlaiceholder } from "plaiceholder";

async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

export default async function addBlurredDataUrls(images: any): Promise<any[]> {
  // Make all requests at once instead of awaiting each one - avoiding a waterfall
  const base64Promises = images.map((photo: any) => getBase64(photo));

  // Resolve all requests in order
  const base64Results = await Promise.all(base64Promises);

  const photosWithBlur: any[] = images.map((photo: any, i: any) => {
    photo = base64Results[i];
    return photo;
  });

  return photosWithBlur;
}
