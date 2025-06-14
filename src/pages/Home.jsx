import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Timeline from "./Timeline";
import Github from "./Github";
import Contact from "./Contact"; // <-- This is your advanced form

export default function Home() {
  return (
    <main>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="timeline"><Timeline /></section>
      <section id="github"><Github /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}
