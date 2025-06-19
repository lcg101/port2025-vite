import './App.css';
import Intro from './sections/Intro';  // 예: 인트로 섹션
import Header from './components/Header';  // 예: 상단 메뉴
import Skills from './sections/Skills';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Skills />
      {/* 추후 Portfolio, Contact 등 추가 */}
    </>
  );
}

export default App;

