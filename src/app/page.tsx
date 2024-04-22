// Components
import Header from "@/components/header";
import Footer from "@/components/footer";

import Image from "next/image";
import logo from "@/../public/ollama.png";

const smallPageMainBody =
  "flex-1 mx-auto flex max-w-6xl flex-col items-center px-10 py-20 md:p-32";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header />
      {/* Mobile Main Body */}
      <main className={smallPageMainBody}>
        <section className="mx-auto flex flex-col items-center space-y-8">
          <Image src={logo} alt="ollama Logo" width={64} />
          <div>
            <div className="flex flex-col space-y-4 text-center">
              <h2 className="mx-auto my-2 max-w-md text-2xl font-medium tracking-tight md:text-3xl text-black">
                Get up and running with large language models
              </h2>
              <h3 className="mx-auto max-w-sm text-neutral-500 md:text-lg">
                Run{" "}
                <a className="underline" href="/library/llama3">
                  Llama 3
                </a>
                ,{" "}
                <a className="underline" href="/library/mistral">
                  Mistral
                </a>
                ,{" "}
                <a className="underline" href="/library/gemma">
                  Gemma
                </a>
                , and other models. Customize and create your own.
              </h3>
            </div>
            <div className="mx-auto mt-12 flex max-w-xs flex-col items-center space-y-4 text-center">
              <a
                href="/download"
                className="flex cursor-pointer items-center rounded-lg bg-neutral-800 px-8 py-2 text-xl text-white hover:bg-black focus:outline-none"
              >
                Download ↓
              </a>
              <p className="text-xs text-neutral-500 max-w-[14em]">
                Available for macOS, Linux, and Windows (preview)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </main>
  );
}
