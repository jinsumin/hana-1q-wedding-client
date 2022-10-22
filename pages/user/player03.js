import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";

const Player03 = () => {
  // const videoObjectSrc = "../videos/celebration-canvas-2210230127.png";

  return (
    <div>
      <Head>
        <title>1Q WEDDING</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/hana-1q-logo-0.png" />
      </Head>
      <Layout>
        <div className="bg-teal-800 h-[40rem] flex justify-center items-center">
          <div className="flex justify-center mx-20 py-20">
            <div className="flex-col items-center place-items-center">
              <div className="max-w-3xl">
                <video
                  playsInline
                  muted
                  // controls
                  // loop
                  // muted
                  poster="../celebration-canvas-image.png"
                  className="rounded-xl bg-gray-900 bg-contain w-full h-full"
                >
                  {/* <source src={videoObjectSrc} type="video/mp4" />
                  Your browser does not support the video tag. */}
                </video>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Player03;
