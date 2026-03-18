import Image from "next/image";
import profilePic from "../../public/aleksandrs-pfp.png";

export default function Hero() {
  return (
    <section className="flex flex-col items-center sm:items-start gap-6 text-center sm:text-left">
      <Image
        src={profilePic}
        alt="Aleksandrs Soskolainens"
        width={224}
        height={224}
        className="w-40 h-40 md:w-56 md:h-56 rounded-xl ring-2 ring-primary/15 object-cover"
        priority
      />
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Aleksandrs Soskolainens</h1>
        <p className="text-lg text-primary">Software Engineer</p>
      </div>
      <p className="text-foreground/80 max-w-lg">
        Fourth-year Computer Science student at Amsterdam University of Applied Sciences. Passionate about building impactful software and learning new technologies.
      </p>
    </section>
  );
}
