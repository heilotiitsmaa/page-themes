import { useContext } from 'react';
import { ThemeContext } from './Theme'

const Header = () => {
    const { toggleTheme } = useContext(ThemeContext);
  return (
    <header>
      <h1>My Application</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  )
}
export default Header;