import Menu from '../DrawerMenu'

const AppBar = () => {
  return (
    <header className="flex items-center p-4 shadow-md sticky h-14 sm:h-16 bg-gradient-to-r from-primary-500 to-secondary-500">
      <div className="flex grow gap-6 items-center">
        <img
          src="https://egvelho-blog-template.netlify.app/android-chrome-256x256.png"
          className="w-9 brightness-0 invert"
        ></img>
        <span className="text-orange-400 font-bold">Blog Template</span>
        <a href='#' className="hidden text-white sm:block">Acessar blog</a>
        <a href='#contact' className="hidden text-white sm:block">Realizar contato</a>
      </div>

      <span className="flex w-16 gap-4">
        <svg
          className="MuiSvgIcon-root fill-white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
        </svg>

        <Menu />
      </span>
    </header>
  );
};

export default AppBar