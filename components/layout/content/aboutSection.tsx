import Image from "next/image";
import { Prose } from "@/components/ui/prose";

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Prose>
              <h2>A Bit About Me</h2>
              <p>
                I am a passionate web developer who enjoys building modern web
                applications. I'm focused on learning and improving my skills,
                with a strong interest in creating user-friendly interfaces and
                writing clean, maintainable code. I enjoy thoughtful design and
                taking the time to understand how good UX and performance work
                together.
              </p>
              <p>
                Outside of development, I own an allotment that I tend with my
                family, which gives me a good space to switch off and reset. I'm
                also involved in the local allotment community, helping with
                activities throughout the year. Each year, I help to organise
                the Scarecrow Trail and the "kiddies corner" at our annual
                allotment open day for the wider village, where I run craft
                activities with the kids — including a regular favourite,
                "Create Your Own Stick Man"!
              </p>
              <p>
                I have a busy and rewarding family life with two primary-aged
                children, which keeps things lively and full of adventure. At
                home, we also have two rescue cats—sisters who definitely run
                the household!
              </p>
              <p>
                In my spare time, I enjoy being outdoors, going for walks,
                travelling, watching films, attending gigs and festivals, and
                drawing and craft activities.
              </p>
            </Prose>
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/dcjf1g82f/image/upload/f_auto/q_auto/v1782376706/allotment_ffjgza.jpg"
              alt=""
              width={599}
              height={450}
              className="max-w-full h-auto rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
