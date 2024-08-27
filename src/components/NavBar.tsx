import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";


const NavBar = () => {
  return (
    <div className="w-[1224px] ml-[46px] px-5 h-[60px] flex justify-between bg-white overflow-hidden">
      <Breadcrumb className="flex justify-center">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>All Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex mr-5 gap-x-3">
        <Input type="text" placeholder="Search..." className="mt-3 w-[300px] border-gray-300" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            viewBox="0 0 24 24"
            className="bg-white rounded-full mt-3 border border-gray-300 p-1.5 cursor-pointer"
          >
            <path
              fill="currentColor"
              d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
            />
          </svg>
      </div>
    </div>
  );
};

export default NavBar;
