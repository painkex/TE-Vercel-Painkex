const LandingPage = () => {
  return (

    <><div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm- font-semibold leading-6 text-white">Product</a>

            <a href="#" className="text-sm font-semibold leading-6 text-white">Features</a>

            <a href="#Team" id="Team" className="text-sm font-semibold leading-6 text-white">Team</a>

            <a href="#Contact" id="Contact" className="text-sm font-semibold leading-6 text-white">Contact</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>
      </header>


      <section className="mb-60 mt-60">
        <div className="text-center bg-white-50 text-gray-800 py-24 px-6">
          <h1 className="text-white text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 -mb-16">The best way to get rich<br /><span className="text-blue-600">is Chupala BICHOO</span></h1>
        </div>
        <div className="flex justify-center space-x-5">
          <button className="font-extrabold text-transparent text-4xl bg-clip-text bg-slate-950 bg-white animate-pulse hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600">Read more below</button>

          <button className="bn39 "><span className="bn39span">Sign up</span></button>
        </div>
      </section>

      <div id="Team"className="bg-transparent py-24 sm:py-32 mt-40">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-white">Very proud of my team my man yessir, extremely professional and motivated to make some grind </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            <li>
              <div className="flex items-center gap-x-6">
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Raphael Masri</h3>
                  <p className="text-sm font-semibold leading-6 text-blue-600">Co-Founder / CEO</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">Joel Irmiahu</h3>
                  <p className="text-sm font-semibold leading-6 text-blue-600">Co-Founder / CEO / Painkex</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

      <div id="Contact" className="isolate bg-transparent px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact The Team</h2>
          <p className="mt-2 text-lg leading-8 text-blue-600">Ask us your questions, we will be glad to respond to them.</p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">First name</label>
              <div className="mt-2.5">
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">Last name</label>
              <div className="mt-2.5">
                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">Company</label>
              <div className="mt-2.5">
                <input type="text" name="company" id="company" autoComplete="organization" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">Email</label>
              <div className="mt-2.5">
                <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">Phone number</label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">Country</label>
                  <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <svg className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">Message</label>
              <div className="mt-2.5">
                <textarea name="message" id="message" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <button type="button" className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                  <span className="sr-only">Agree to policies</span>
                  <span aria-hidden="true" className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                </button>
              </div>
              <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                By selecting this, you agree to our
                <a href="#" className="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
              </label>
            </div>
          </div>
          <div className="mt-10">
          <button type="submit"className="bn39 w-full"><span className="bn39span">Submit</span></button>
          </div>
        </form>
      </div></>

  );
};

export default LandingPage
