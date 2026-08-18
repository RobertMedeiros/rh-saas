export default function Login() {
  return (
    <main className="grid min-h-svh place-items-center overflow-hidden bg-[radial-gradient(circle_at_12%_15%,rgb(255_255_255/12%),transparent_30%),radial-gradient(circle_at_88%_88%,rgb(15_23_42/10%),transparent_32%)] bg-primary px-4 py-6 font-sans text-secondary sm:px-5 sm:py-8">
      <section
        className="flex w-full max-w-[440px] flex-col items-center"
        aria-labelledby="login-title"
      >
        <img src="/horizonicone.png" alt="logo" className="h-45 w-45" />

        <div className="w-full rounded-2xl border border-white/45 bg-white p-6 shadow-[0_24px_64px_rgb(15_23_42/18%)] sm:rounded-[20px] sm:p-10">
          <div className="mb-8 text-center">
            <h1
              id="login-title"
              className="mb-2 text-[1.75rem] font-bold tracking-[-0.035em] text-secondary"
            >
              Bem-vindo
            </h1>
            <p className="text-[0.9375rem] text-tertiary">
              Acesse sua conta para continuar
            </p>
          </div>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-secondary"
                htmlFor="email"
              >
                E-mail
              </label>
              <div className="relative">
                <svg
                  className="pointer-events-none absolute top-1/2 left-4 h-[19px] w-[19px] -translate-y-1/2 fill-none stroke-tertiary stroke-[1.7] [stroke-linecap:round] [stroke-linejoin:round]"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16v12H4zM4 7l8 6 8-6" />
                </svg>
                <input
                  className="h-[50px] w-full rounded-[10px] border border-[#dbe2ea] bg-neutral pr-4 pl-[46px] text-secondary outline-none transition-[border-color,box-shadow,background] duration-150 placeholder:text-[#94a3b8] focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgb(59_141_255/16%)]"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seuemail@empresa.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-secondary"
                htmlFor="password"
              >
                Senha
              </label>
              <div className="relative">
                <svg
                  className="pointer-events-none absolute top-1/2 left-4 h-[19px] w-[19px] -translate-y-1/2 fill-none stroke-tertiary stroke-[1.7] [stroke-linecap:round] [stroke-linejoin:round]"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <rect x="5" y="10" width="14" height="10" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
                <input
                  className="h-[50px] w-full rounded-[10px] border border-[#dbe2ea] bg-neutral pr-4 pl-[46px] text-secondary outline-none transition-[border-color,box-shadow,background] duration-150 placeholder:text-[#94a3b8] focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgb(59_141_255/16%)]"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Digite sua senha"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            <div className="-mt-0.5 flex flex-col items-start gap-3 text-[0.8125rem] sm:flex-row sm:items-center sm:justify-between">
              <label className="flex cursor-pointer items-center gap-2 text-tertiary">
                <input
                  className="m-0 h-4 w-4 accent-primary"
                  type="checkbox"
                  name="remember"
                />
                <span>Lembrar de mim</span>
              </label>
              <a
                className="font-semibold text-primary hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-secondary/30"
                href="#"
              >
                Esqueci minha senha
              </a>
            </div>

            <button
              className="mt-1 h-[50px] cursor-pointer rounded-[10px] border-0 bg-primary font-bold text-white shadow-[0_8px_20px_rgb(59_141_255/28%)] transition-[filter,transform,box-shadow] duration-150 hover:-translate-y-px hover:brightness-95 hover:shadow-[0_10px_24px_rgb(59_141_255/35%)] active:translate-y-0 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-secondary/30 motion-reduce:transition-none"
              type="submit"
            >
              Entrar
            </button>
          </form>
        </div>

        <p className="mt-6 mb-0 text-center text-xs text-white/80">
          © {new Date().getFullYear()} Horizon. Todos os direitos reservados.
        </p>
      </section>
    </main>
  );
}
