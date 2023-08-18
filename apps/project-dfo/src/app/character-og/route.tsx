/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const jobGrowName = searchParams.get('jobGrowName');
    const characterName = searchParams.get('characterName');
    const serverId = searchParams.get('serverId');
    const fame = searchParams.get('fame');
    const avatarImageUrl = searchParams.get('avatarImageUrl');

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#1A1A1C',
          }}
        >
          <div tw='flex flex-col justify-between w-1/2 h-full pt-40 pb-20 pl-20'>
            <div tw='flex flex-col items-start'>
              <div tw='text-6xl font-bold text-[#EDEEF0] mb-2'>{characterName}</div>
              <div tw='text-4xl text-[#ADB1B8] mb-6'>{jobGrowName}</div>
              <div tw='flex text-3xl text-[#ADB1B8] items-center bg-[#2E3035] px-4 py-1.5 rounded-lg'>
                <div tw='flex mr-3'>
                  <img
                    width='30'
                    height='26'
                    src={`https://${process.env.NEXT_PUBLIC_SITE_NAME}/assets/fame-icon.png`}
                  />
                </div>

                {fame}
              </div>
            </div>

            <div tw='flex text-white text-2xl'>
              {process.env.SITE_URL}
              {serverId}/{characterName}
            </div>
          </div>

          <div tw='flex absolute bottom-0 right-0 opacity-10'>
            <img width='565' height='700' src={avatarImageUrl} />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
