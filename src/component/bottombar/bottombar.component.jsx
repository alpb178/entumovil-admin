

export default function  AuthBottomBar({isLogin}) {
  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto mt-8 w-full max-w-2xl border-t bg-white lg:relative">
      <div className="relative my-6 flex flex-col items-center justify-center space-y-2 text-base md:flex-row md:space-y-0">
        <span className="text-gray-700 px-2">
          {isLogin
            ? "Crear nueva cuenta en el Portal de cuentas"
            : "Ya tienes una cuenta"}
        </span>

        {/*  <Link
          href={props.isLogin ? REGISTER_PAGE : LOGIN_PAGE}
          className="inline-flex justify-center px-1 font-medium"
        >
          <span className="text-primary-600">
            {props.isLogin ? 'Registrarse' : 'Iniciar Sesión'}
          </span>
          </Link>*/}
      </div>
    </div>
  );
}
