import { Carousel } from "react-carousel-minimal";
import NavbarHome from "../navbars/NavbarHome";

function Carrousel() {
  const data = [
    {
      image: "/img/slides/inmocor-compraventa-slide-londres-reino-unido.jpg",
      caption: "Recursos multilingües para la Compraventa Inmobiliaria",
    },
    {
      image: "/img/slides/inmocor-compraventa-slide-madrid-espana.jpg",
      caption: "Realice Búsquedas en materia de Legislación y Contratos",
    },
  ];

  const captionStyle = {
    textAlign: "center",
    fontSize: "2em",
    fontWeight: "bold",
    marginLeft:"12px",
    marginRight:"12px",
  };
  return (
    <div>
      <div className="static" style={{ textAlign: "center" }}>
        <div  className="mb-6 text-2xl font-black text-white">
          <Carousel
           
            data={data}
            width="full"
            height="500px"
            captionStyle={captionStyle}
            captionPosition="center"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "full",
              maxHeight: "500px",
            }}
          />
        </div>
      </div>
      <NavbarHome/>
    </div>
  );
}

export default Carrousel;
