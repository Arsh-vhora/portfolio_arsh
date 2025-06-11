import './App.css';
import NavBar from '../src/components/NavBar'
import HeroSection from '../src/components/HeroSection'
import About from '../src/components/About'
import Footer from './components/Footer';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import AchievementsSection from './components/AchievementsSection';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <HeroSection/>
        <About/>
        <EducationSection/>
        <SkillsSection/>
        <ProjectSection/>
        <AchievementsSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
