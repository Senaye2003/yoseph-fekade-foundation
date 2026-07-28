import "./About.css";

export default function About() {
  return (
    <section className="about fade-in">
      <div className="about__header">
        <p className="about__badge">About the Foundation</p>

        <h1 className="about__title">
          Honoring Yoseph Fikade through education, opportunity, and hope.
        </h1>

        <p className="about__intro">
          The Yoseph Fikade Foundation was established in loving memory of Yoseph
          Fikade, a bright and compassionate young man whose life was tragically
          cut short in 2023. The foundation was created to carry forward his
          legacy by expanding access to education and supporting young people in
          Ethiopia.
        </p>
      </div>

      <div className="about__grid">
        <div className="about__card card-hover">
          <h2 className="about__card-title">Who Yoseph Was</h2>

          <p className="about__card-text">
            Yoseph Fikade was born on January 16, 1991, and was known for his
            kindness, intelligence, and dedication to learning. He graduated with
            a degree in Health Informatics, reflecting his passion for innovation,
            knowledge, and improving lives through education and technology.
          </p>

          <p className="about__card-text">
            He was deeply loved by his family and community, and his memory
            continues to inspire meaningful work that creates lasting impact.
          </p>
        </div>

        <div className="about__card card-hover">
          <h2 className="about__card-title">
            Why the Foundation Was Created
          </h2>

          <p className="about__card-text">
            After Yoseph’s passing, his mother, Yeshi Gebrehawaryat, transformed
            profound grief into purposeful action by founding the Yoseph Fikade
            Foundation. What began as a tribute to her son has grown into a
            mission centered on education, opportunity, and community
            development.
          </p>

          <p className="about__card-text">
            Today, the foundation operates in Ethiopia and the United States,
            investing in students, schools, and environments where young people
            can learn, grow, and thrive.
          </p>
        </div>
      </div>

      <div className="about__belief fade-in">
        <h2 className="about__belief-title">Our Belief</h2>

        <p className="about__belief-text">
          We believe education is one of the most powerful tools for changing
          lives. By supporting students, strengthening schools, and creating safe
          learning environments, the Yoseph Fikade Foundation is helping build a
          brighter future for Ethiopia’s youth.
        </p>
      </div>
    </section>
  );
}