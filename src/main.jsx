import Theme from "./components/header/theme";
import Sound from "./components/header/sound";
import Header from "./components/header";
import Title from "./components/Title";
import List from "./components/list";
import { ThemeContext } from "./Theme";
import { useContext } from "react";
import Social from "./components/social";

export default function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app container section`}>
      <Header />
      <Title />
      <List />
      <Social />
    </div>
  );
}
