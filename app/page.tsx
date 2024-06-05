import Footer from "@/components/core/Footer";
import { BanIcon, LinkIcon } from "lucide-react";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";

interface CardProps {
  className: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default function Page() {
  return (
    <>
      <section className="max-w-4xl py-10 px-3 mx-auto">
        <div className="ml-1">
          <h1 className="font-basement text-4xl">
            basement
          </h1>
        </div>

        <div className="p-5 mt-5 border bg-zinc-950 rounded-lg border-zinc-900">
          <p>
            👋 Hi there, welcome.
            <br /><br />
            You are on the <span className={`${GeistMono.className} px-1 py-0.5 border rounded-md bg-zinc-900 border-zinc-800`}>basement experimental corner</span>. 
            <br />
            Here you&apos;ll find all kinds of 3d visuals, animations, shaders and creative development related stuff.
            <br />
            <br />
            Take a look at the examples below and don&apos;t forget to leave a ⭐️ on the <Link className="underline" href='https://github.com/basement-works/laboratory.git'>github repo</Link>.
          </p>
        </div>

        <section className="mt-10 space-y-5">
          <div>
            <h1 className="ml-1 mb-5 font-bold text-xl">Useful Links: Awesome Resources</h1>
          </div>
          <div className="space-y-2 bg-zinc-950 rounded-lg border-2 py-1 border-zinc-900">
            <Card className="flex items-center space-x-3 border-t border-zinc-900 first:border-none rounded-lg bg-zinc-950 shadow-md p-4">
              <div className="bg-zinc-800 p-2.5 rounded-full">
                <LinkIcon size={16}/>
              </div>
              <Link href='https://hofk.de/main/discourse.threejs/'>
                <h1 className="text-md font-semibold">
                  Incredible discourse.threejs examples 🤯
                </h1>
              </Link>
            </Card>
            <Card className="flex items-center space-x-3 border-t border-zinc-900 first:border-none bg-zinc-950 shadow-md p-4">
              <div className="bg-zinc-800 p-2.5 rounded-full">
                <LinkIcon size={16}/>
              </div>
              <Link href='https://webgl-shaders.com/'>
                <h1 className="text-md font-semibold">
                  Amazing WebGL Shaders 🔥
                </h1>
              </Link>
            </Card>
            <Card className="flex items-center space-x-3 border-t border-zinc-900 first:border-none bg-zinc-950 shadow-md p-4">
              <div className="bg-zinc-800 p-2.5 rounded-full">
                <LinkIcon size={16}/>
              </div>
              <Link href='https://gltf.pmnd.rs/'>
                <h1 className="text-md font-semibold">
                  Tool | Three Fiber GLTF scaffoling
                </h1>
              </Link>
            </Card>
            <Card className="flex items-center space-x-3 border-t border-zinc-900 first:border-none bg-zinc-950 shadow-md p-4">
              <div className="bg-zinc-800 p-2.5 rounded-full">
                <LinkIcon size={16}/>
              </div>
              <Link href='https://gltf.report/'>
                <h1 className="text-md font-semibold">
                  Tool | GLTF Report
                </h1>
              </Link>
            </Card>
            <Card className="flex items-center space-x-3 border-t border-zinc-900 first:border-none bg-zinc-950 shadow-md p-4">
              <div className="bg-zinc-800 p-2.5 rounded-full">
                <LinkIcon size={16}/>
              </div>
              <Link href='https://medium.com/@pailhead011/extending-three-js-materials-with-glsl-78ea7bbb9270'>
                <h1 className="text-md font-semibold">
                  Article | Extending Three.js materials with GLSL 🪄
                </h1>
              </Link>
            </Card>
            <Card className="flex items-center space-x-3 border-t border-zinc-900 first:border-none bg-zinc-950 shadow-md p-4">
              <div className="bg-zinc-800 p-2.5 rounded-full">
                <LinkIcon size={16}/>
              </div>
              <Link href='https://webrtc.github.io/samples/'>
              <h1 className="text-md font-semibold">
                Examples | WebRTC code examples
              </h1>
              </Link>
            </Card>
            <Card className="flex items-center space-x-3 border-t border-zinc-900 first:border-none bg-zinc-950 shadow-md p-4">
              <div className="bg-zinc-800 p-2.5 rounded-full">
                <LinkIcon size={16}/>
              </div>
              <Link href='https://github.com/mrdoob/three.js/tree/master/src/renderers/shaders'>
              <h1 className="text-md font-semibold">
                Source | ThreeJS core shader chunks
              </h1>
              </Link>
            </Card>
          </div>
        </section>

        {/* Experiments */}
        <section className="mt-10 space-y-5">
          <div>
            <h1 className="ml-1 mb-5 font-bold text-xl">Experiments: Where Things Get Developed</h1>
          </div>
          <div className="space-y-2 bg-zinc-950 rounded-lg border-2 py-1 border-zinc-900">
            <Card className="flex items-center space-x-3 border-t border-zinc-900 first:border-none rounded-lg bg-zinc-950 shadow-md p-4">
              <div className="bg-zinc-800 p-2.5 rounded-full">
                <BanIcon size={16}/>
              </div>
              <h1 className="font-bold text-md">
                Hang in there, we&apos;re cooking for this section 😝
              </h1>
            </Card>
          </div>
        </section>
        {/* End of experiments */}
        <Footer/>      
      </section>
    </>
  );
}
