import Header from './Header';
import { useContext } from 'react';
import { ThemeContext } from './Theme';

const Page = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <div id='app' className={theme}>
      <Header />
     
     <article>
       <h2>Welcome to the App</h2>
       <p>This is a simple React application.</p>
       </article>
    </div>
  );
}
export default Page;