import { useUser, SignIn, SignOutButton, SignInButton } from "@clerk/nextjs";
import { GradientButton } from "./GradientButton";
import { Spinner } from "./Spinner";
import DropdownProfileButton from "./Dropdown";
import Dashboard from "../pages/dashboard";
import Navbar from "./Navbar";



const LandingPage = () => {
  const people = [
    {
      name: 'Pafael Pasri',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://media.licdn.com/dms/image/C4D03AQF6N_c5bM7H5Q/profile-displayphoto-shrink_800_800/0/1567577434272?e=2147483647&v=beta&t=aq0i9_UyZ52gVXFT_wMInscTtbbMT_8v07blmNPPFbg'
    },

    {
      name: 'Poel Pirmialoup',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://pbs.twimg.com/profile_images/1476882663441145857/RX78JrOe_400x400.jpg'
    }
  ]
  const { isLoaded, isSignedIn, user } = useUser();

  // if (!isLoaded) return <Spinner />

  const aaNavbar = () =>
    <div className="sticky top-0 left-0 w-screen p-3 z-10">
      <nav className="border-gray-200 bg-black -sm rounded-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 z-10">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src="logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">FreeShipping</span>
          </a>
          <div className="flex items-center md:order-2">
            <DropdownProfileButton profileImage={user!.profileImageUrl} />
          </div>
        </div>
      </nav>
    </div>;
  return (

    <><div className="scroll-smooth">
      <section className=" mb-48 mt-48">
        <div className="text-center bg-white-50 text-gray-800 py-24 px-6">
          <h1 className="text-white text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 ">The best way to get rich<br /><span className="text-blue-600">is FreeShipping</span></h1>
        </div>
        <div className="flex justify-center">

          <div className="bg-transparent  mt-7 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-blue-600">Buy Cheaper</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Everything you need to use ShippingWatcher
                </p>
                <p className="mt-6 -mb-6 text-lg leading-8 text-gray-600">
                  Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                  pulvinar et feugiat blandit at. In mi viverra elit nunc.
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl flex gap-10 tracking-wide text-justify text-white text-lg">

                <div className="flex flex-wrap space-y-10">
                  <div> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae aliquid accusantium culpa, asperiores voluptatibus unde quasi laborum voluptates fugit facere assumenda nisi quisquam maiores porro atque iusto po Iure beatae aliquid accusantium culpa, asperiores</div>
                  <div> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae aliquid accusantium culpa, asperiores voluptatibus unde quasi laborum voluptates fugit facere assumenda nisi quisquam maiores porro atque iusto po Iure beatae aliquid accusantium culpa, asperiores</div>
                </div>

                <div className="flex flex-wrap space-y-10">
                  <div> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae aliquid accusantium culpa, asperiores voluptatibus unde quasi laborum voluptates fugit facere assumenda nisi quisquam maiores porro atque iusto po Iure beatae aliquid accusantium culpa, asperiores</div>
                  <div> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae aliquid accusantium culpa, asperiores voluptatibus unde quasi laborum voluptates fugit facere assumenda nisi quisquam maiores porro atque iusto po Iure beatae aliquid accusantium culpa, asperiores</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-transparent ">
          <div className="mx-auto max-w-screen-lg py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true"
              >
                <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#59BCFF" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Boost your productivity.
                  <br />
                  Start using our app today.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
                  <a
                    href="/links"
                    className="rounded-md bg-white px-10 py-4 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get started
                  </a>

                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                  className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src="photo.png"
                  alt="App screenshot"
                  width={1824}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-transparent py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                suspendisse.
              </p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img className=" h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr />


        <footer className="bg-transparent  inset-x-0 bottom-0 h-16">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="flex justify-around px-4 py-6 lg:py-8 md:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                <ul className="text-black  font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">About</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Careers</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Brand Center</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Blog</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                <ul className="text-black  font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Discord Server</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Twitter</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Facebook</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-black  font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Licensing</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
                <ul className="text-black  font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">iOS</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Android</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Windows</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">MacOS</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>


        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </section>

    </div></>

  );
};

export default LandingPage
