import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import AvikImage from "@/../public/Avik.jpg";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";

import {
  Shell,
  ArrowRightIcon,
  FileDown
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";



const AVIK_BIRTH_YEAR = 2002;
const LIMIT = 2;
export default async function Home() {
  

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg"
          src={AvikImage}
          alt="Photo of Avik"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="title text-5xl">Hi Avik here 👋</h1>
          <p className="mt-4 font-light">
            {/* Update my age */}
            {new Date().getFullYear() - AVIK_BIRTH_YEAR}
            -year-old <s>former child</s> software developer from India 🇮🇳.
          </p>
          <p className="mt-2 font-light">
            I like to develop full-stack, drink black coffee and get to code, while listening to{" "}
            <Link
              href="https://open.spotify.com/playlist/6bJGwTpGl38nLfcPeiZKiA?si=UG20bOlbSyW6_9qWK_X2fw"
              target="_blank"
              className="link font-semibold"
            >
              music.
            </Link>
            
          </p>
          <div className="mt-4 flex items-end gap-1">
            <p>Currently Learning</p>
            <Link href={"https://youtube.com/playlist?list=PLinedj3B30sA_M0oxCRgFzPzEMX3CSfT5&si=BI2kX71iSbzkAoVg"} className="font-semibold underline">Rust</Link>
            <p>and</p>
            <Link href={"https://youtube.com/playlist?list=PL7CBVLpg0zqfIdcwDNa5c2xbhvK4crNqc&si=l4LeINp0wLyhl50_"} className="font-semibold underline">Operating System</Link>
            <Shell className="size-5 animate-spin" />
          </div>
          <section className="mt-8 flex items-center gap-8">
            <Link href="https://drive.google.com/file/d/1t7rV7iL67arQ9wK8Bi2BvrXIMjfMpBFm/view?usp=drive_link" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-3xl">recent posts</h2>
          <LinkWithIcon
            href="/blog"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
       
      </section>
    </article>
  );
}