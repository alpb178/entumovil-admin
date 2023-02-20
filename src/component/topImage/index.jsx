import NavbarMenuPages from "../navbars/NavbarMenuPages";

export default function TopImage({ name, imageUrl, description }) {
  return (
    <div className="relative flex h-96">
      <div className="absolute   top-0 h-96 w-full  bg-center backdrop-brightness-50">
        <img
          alt="Card Image"
          className="h-full w-full backdrop-brightness-50"
          src={`/img/bg/${imageUrl}`}
        />
      </div>

      <div className="absolute   top-0 h-96 w-full  bg-center backdrop-brightness-50"/>

      <div className="max-w-8xl container relative mx-auto mt-10">
        <NavbarMenuPages />
        <div className="flex flex-wrap text-white items-center">
          <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
            <p  className="mb-6 mt-10 text-5xl font-black">
              {name}
            </p>
            <p  className="mb-6 text-3xl font-black">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
