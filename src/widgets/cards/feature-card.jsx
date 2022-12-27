import PropTypes from "prop-types";
import { Card, CardBody } from "@material-tailwind/react";
import styles from "./feature-card.module.scss";

export function FeatureCard({ title, description }) {
  return (
    <Card className=" shadow-lg shadow-gray-500/10">
      <CardBody className="px-8 text-center">
        <h5 className={styles.h5}>{title}</h5>
        <p className={styles.p}>
          El presente apartado recoge, debido a la delimitación diatópica
          realizada para este estudio, la{" "}
          <strong>
            legislación aplicable a los contratos de compraventa de viviendas
          </strong>{" "}
          relativa a <strong>España</strong>, <strong>Argentina</strong>,{" "}
          <strong>Reino Unido</strong> (con especial referencia a
          <strong> Inglaterra y Gales</strong>) y{" "}
          <strong>Estados Unidos</strong> (concretamente, en el Estado de{" "}
          <strong>Luisiana</strong>); así como la{" "}
          <strong>normativa comunitaria europea</strong>. La identificación de
          dicha normativa ha hecho posible la creación de un corpus legislativo,
          al que hemos denominado <strong>LEXCOR</strong>, un recurso de gran
          utilidad para responder a las necesidades documentales del traductor
          jurídico, ya que permite observar dicho discurso de especialidad (en
          materia de compraventa de viviendas) en su contexto puramente original
          de producción.
        </p>
        <p className={styles.p}>
          En los diferentes apartados de esta sección se puede acceder, de forma
          particular, a la normativa de los ordenamientos jurídicos implicados
          en el estudio, al tiempo que a la publicación de cada una de la norma
          en cuestión gracias al hipervínculo, en color amarillo, habilitado en
          cada una de ellas.
        </p>
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
