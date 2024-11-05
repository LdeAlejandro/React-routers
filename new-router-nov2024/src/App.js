import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import NotFound from "./pages/NotFound";

//action
import { contactAction } from "./pages/help/Contact";


//pages and loaders
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareersDetails, {careerDetailsLoader} from "./pages/careers/CareersDetails";

//ErrorElement
import CareersError from "./pages/careers/CareersError"

// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout"; 
import CareersLayout from "./layouts/CareersLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction}/>
      </Route>

        {/* //Loader Example  fetch data in Careers.js*/}
        <Route path="careers" element={<CareersLayout /> } errorElement={<CareersError/>}>
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader} 
          //Loader inside Careers.js
          // errorElement={<CareersError/>}
        />
        {/* //With parametres*/}
       <Route path=":id" 
        element={<CareersDetails />} 
        loader={careerDetailsLoader}
        // errorElement={<CareersError/>}  
       />
      </Route>
       

        {/* //404 not found route */}
      <Route path="*" element={<NotFound />} />
    </Route>

    
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
