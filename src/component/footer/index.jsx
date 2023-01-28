import { APP_NAME } from "@/lib/constants";


export default function FooterSite() {
  return (
    
    <footer className="relative p-5 bg-footer text-white px-4">
      <div className="container mx-auto">
        <div className="  flex justify-between px-8">
          <div className="flex items-center  ">
            {APP_NAME} <p className="text-hover">[All rights reserverd]</p>
          </div>
          <div className="flex items-center ">
            {APP_NAME} &copy;
            <p className="text-hover">{new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
