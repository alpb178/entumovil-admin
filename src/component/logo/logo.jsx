

export function LogoEntuMovil({ isLogin }) {
  return (
    <div className="flex flex-col justify-center items-center mt-10 space-y-5">
      <img
        src="/images/autenticar_usuario/u2.png"
        alt="autenticar_usuario"
        width={100}
        height={100}
      />

      <img
        src="/images/autenticar_usuario/u3.png"
        alt="autenticar_usuario"
        width={100}
        height={100}
      />

      <a>{isLogin ? 'Bienvenido el Sistema cuentas' : 'Sistema de cuentas'}</a>
    </div>
  );
}
