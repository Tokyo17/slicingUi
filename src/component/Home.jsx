

import Header from "./Header"
import Nav from "./Nav";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Card from "./Card";
import Quote from "./Qoute";
import Footer from "./Footer";



function Home() {



  return (
    <div>
        <Nav color="#CDECFF"/>
      <Header/>
      <Component1/>
      <Component2/>
      <Card/>
      <Quote/>
      <Footer/>
    </div>
  );
}

export default Home;
