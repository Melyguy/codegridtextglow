"use client";
import AnimatedText from "./Components/AnimatedText";

export default function Home() {
  return (
    <div className="w-full h-full  items-center justify-center">
      <section className="h-screen w-screen flex flex-col items-center ">
      <h1 className="text-5xl font-bold text-foreground mt-32">Hello, World!</h1>
      <AnimatedText>
      <p className="text-xl w-1/2 mt-16">In programming, “Hello, World” is usually the very first program you write when learning a new programming language. All it does is display the words Hello, World! on the screen. It’s a tradition because it shows the basic structure of a program: how to run code, use output, and confirm everything works.</p>
      </AnimatedText>
      </section>
      <section className="w-screen h-screen bg-background flex flex-col items-center">
      <h1 className="text-5xl font-bold text-foreground mt-32">Aura</h1>
      <AnimatedText>
      <p className="text-xl w-1/2 mt-16">An aura is often described as an invisible "energy field" that surrounds living things—like a glowing bubble or light around a person. Some people believe it reflects emotions, health, or spiritual state.</p>
      </AnimatedText>
      

      </section>
      <section className="w-screen h-screen bg-background flex flex-col items-center">
      <h1 className="text-5xl font-bold text-foreground mt-32">Sigma</h1>
      <AnimatedText>
      <p className="text-xl w-1/2 mt-16">A sigma is a person, usually a man in social slang, who values independence and self-reliance over fitting into social hierarchies. Unlike “alphas,” sigmas don’t seek attention or leadership roles; they quietly pursue their goals and live by their own rules. They are often seen as mysterious, confident, and capable, thriving outside traditional social structures.</p>
      </AnimatedText>
      

      </section>
    </div>
  );
}
