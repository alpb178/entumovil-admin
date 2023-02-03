import { APP_NAME } from "@/lib/constants";

export default function FooterSite() {
  return (
    <footer className="relative bg-gradient-to-r text-sm from-gradient-for-footer to-gradient-to p-5 text-white">
      <div className="container mx-auto">
        <div className="flex  px-8">
          <a className="w-1/2">
            © {new Date().getFullYear()} <a className="text-red">INMOCOR</a>{" "}
            Compraventa de Inmuebles. Todos los derechos reservados.
          </a>
          <div className=" items-center w-1/2 ">
            <ul clasName="footer-bottom-link flex-inline flex">
              <li className="mr-10 hover:text-red">
                <a href="#">Avisos legales</a>
              </li>
              <li className="mr-10 hover:text-red">
                <a href="#">Política de privacidad</a>
              </li>
              <li className="mr-10 hover:text-red">
                <a href="#">Política de cookies</a>
              </li>
              <li className="mr-10 hover:text-red">
                <a href="#">Condiciones de uso</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
