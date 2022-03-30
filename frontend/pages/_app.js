import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import Main from '../components/Layout/Main'
import { useUser } from '../userState/reducer'
import UserContext from '../userState/context'
import { useRouter } from 'next/router'
import '../styles/MultiSelect.css'
import Router from 'next/router'

const App = ({ Component, pageProps }) => {
  const { username, logIn, logOut } = useUser()
  const { pathname } = useRouter() 

  const routeChange = () => {

    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };

 Router.events.on("routeChangeComplete", routeChange );
 Router.events.on("routeChangeStart", routeChange );

  return (
    <UserContext.Provider value={{username, logIn, logOut}}>
      <ThemeProvider >
        <Main>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={pathname}/>
          </AnimatePresence>
        </Main>
      </ThemeProvider>
    </UserContext.Provider>
  )
}


export default App
