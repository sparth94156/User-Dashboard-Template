import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="w-12 fixed z-40 max-h-screen grid grid-rows-6 gap-y-4 pt-4 pb-8 bg-white dark:bg-black">
      <div className="flex items-center justify-center cursor-pointer">
        <Image
          src="/favicon.ico"
          alt="vercel logo"
          width="30"
          height="30"
          className="hover:opacity-80"
        />
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              className=" opacity-70 hover:opacity-100"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
              </g>
            </svg>
          </TooltipTrigger>
          <TooltipContent>
            <p>Dashboard</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 48 48"
              className="opacity-70 hover:opacity-100"
            >
              <g fill="none">
                <path d="M39 32H13L8 12h36z" />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"
                />
                <circle
                  cx="13"
                  cy="39"
                  r="3"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                />
                <circle
                  cx="39"
                  cy="39"
                  r="3"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                />
              </g>
            </svg>
          </TooltipTrigger>
          <TooltipContent>
            <p>Orders</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              className="opacity-70 hover:opacity-100"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m12 3l8 4.5v9L12 21l-8-4.5v-9zm0 9l8-4.5M12 12v9m0-9L4 7.5"
              />
            </svg>
          </TooltipTrigger>
          <TooltipContent>
            <p>Products</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              className="opacity-70 hover:opacity-100"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117c1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836c-1.58-.888-3.711-1.414-6.025-1.414M4.75 17.5c0-.851.622-1.775 1.961-2.528c1.316-.74 3.184-1.222 5.29-1.222c2.104 0 3.972.482 5.288 1.222c1.34.753 1.961 1.677 1.961 2.528c0 1.308-.04 2.044-.724 2.6c-.37.302-.99.597-2.05.811c-1.057.214-2.502.339-4.476.339s-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81c-.684-.557-.724-1.293-.724-2.601"
                clip-rule="evenodd"
              />
            </svg>
          </TooltipTrigger>
          <TooltipContent>
            <p>Customers</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 32 32"
              className="opacity-70 hover:opacity-100"
            >
              <path fill="currentColor" d="M4 2H2v26a2 2 0 0 0 2 2h26v-2H4Z" />
              <path
                fill="currentColor"
                d="M30 9h-7v2h3.59L19 18.59l-4.29-4.3a1 1 0 0 0-1.42 0L6 21.59L7.41 23L14 16.41l4.29 4.3a1 1 0 0 0 1.42 0l8.29-8.3V16h2Z"
              />
            </svg>
          </TooltipTrigger>
          <TooltipContent>
            <p>Analytics</p>
          </TooltipContent>
        </Tooltip>

          <Tooltip>
            <TooltipTrigger className="flex items-center justify-center mt-[250px]  opacity-80 hover:opacity-100 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.947-.664l-2.668 1.135l-1.865-3.25l2.306-1.739q-.045-.27-.073-.558q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626L3.258 9.126l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.732l.361 2.912q.575.202 1.016.463t.909.654l2.725-1.115l1.865 3.211l-2.382 1.796q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.393-.94.673t-.985.445L13.866 21zM11 20h1.956l.369-2.708q.756-.2 1.36-.549q.606-.349 1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786q.04-.358.04-.72q0-.38-.04-.72t-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.935q-.74-.435-1.4-.577L13 4h-1.994l-.312 2.689q-.756.161-1.39.52q-.633.358-1.26.985L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73t-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.589.594 1.222.953q.634.359 1.428.559zm.973-5.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727M12 12"
                />
              </svg>
            </TooltipTrigger>
            <TooltipContent>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SideBar;
