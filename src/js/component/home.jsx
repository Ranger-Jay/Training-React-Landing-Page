import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <>
      <div className="text-center">
        <Navbar />
      </div>
      <div>
        <Jumbotron />
      </div>
      <div className="wrapper">
        <Card
          title="Tatooine"
          imageUrl="https://cms-assets.tutsplus.com/cdn-cgi/image/width=844/uploads/users/1990/posts/36852/image-upload/_0012_Photoshop_KHLjWR6or4.jpg"
          text="This desert oasis was home to the legendary Anakin Skywalker. While this may not be your first choice, there are many fun activities to do. Join in a Pod Race. Visit the cities of Mos Eisley and Mos Espa. Just be careful of any pickpocketers! And don't get on Jabba the Hutt's bad side."
        />
        <Card
          title="Coruscant"
          imageUrl="https://cdn.jwplayer.com/v2/media/HhYvseJN/poster.jpg?width=1920"
          text="The heart of the galaxy, Coruscant is the hub for all things entertainment, history, and politics. If you're looking for a bit of history, visit the old jedi temple, now the Imperial Palace. If you're hungry, stop at Dex's Diner and try one of their most popular dishes, the Shawda club sandwich."
        />
        <Card
          title="Dathomir"
          imageUrl="https://img3.pillowfort.social/posts/ef1f2329cd3ce70579a1.png"
          text="If you want to try something different for your trip, check out Dathomir. Sure, it's got an ominous atmosphere with its red sky, and of course, you may have to avoid the local witch clan, the Nightsisters. But beyond that, the planet holds some beautiful sightseeing with its forests and swamplands. Make sure to take some great pics of the large arachnids and chirodactyls that call this world their home."
        />
        <Card
          title="Niamos"
          imageUrl="https://pyxis.nymag.com/v1/imgs/0a6/d83/8ceca4122490e778386663a5d9cdd5cbaf-andor.2x.rsocial.w600.jpg"
          text="If you're from Earth and looking to find something that feels more like home, look no farther than Niamos. Basically a Miami 2.0, this planet boasts beautiful beaches and a tropical climate. Check in to one of the resorts, sit back, and relax... and stay out of the way of the Stormtroopers who may mistake you for a criminal and charge you with civil disruption, where you'll recieve a 6-year prison sentence on Narkina 5. "
        />
      </div>
    </>
  );
};

export default Home;
