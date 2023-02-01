import { Carousel } from "react-carousel-minimal";

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
    fontSize: "2em",
    fontWeight: "bold",
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
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
    </div>
  );
}

export default Carrousel;
