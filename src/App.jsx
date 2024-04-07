// imported from index.js in sections folder
import {
  Hero,
  OurFeatures,
  OurProducts,
  OurStory,
  Services,
  Subscribe,
  Footer,
  CustomerReview
} from './sections';

import Nav from './components/Nav';


const App = () => (
  <main className="realtive">
    <Nav />
    <section className=" pl-[100px]">
      <Hero />
    </section>
    <section className="padding">
      <OurProducts />
    </section>
    <section className="padding">
      <OurFeatures />

    </section>
    <section className=" bg-bg-gray py-8 ">
      <OurStory />
    </section>
    <section className="padding-x py-10 mt-[100px]">
      <Services />
    </section>
    <section className="padding">
      <CustomerReview />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full ">
      <Subscribe />
    </section>
    <section className="bg-footer padding-x pb-8">
      <Footer />
    </section>
  </main>
);

export default App;