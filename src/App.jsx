function App() {

  return (
    <div className="w-full">
      <img className="w-full" src="/src/assets/images/illustration-sign-up-mobile.svg" alt="" />
      <h1 className="font-bold text-[40px]">

        Stay updated!
      </h1>

      <p>

        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <ul>
        <li>
          Product discovery and building what matters

        </li>
        <li>
          Measuring to ensure updates are a success

        </li>
        <li>

          And much more!
        </li>
      </ul>
      <form className="flex flex-col" action="">
        <label htmlFor="email">
          Email address

        </label>
        <input type="email" placeholder="email@company.com" />
        <button className="max-w-[327px] h-[56px] text-white bg-indigo-950 font-bold rounded-lg">

          Subscribe to monthly newsletter
        </button>
      </form>





{/* 
      Thanks for subscribing!

      A confirmation email has been sent to ash@loremcompany.com.
      Please open it and click the button inside to confirm your subscription.

      Dismiss message */}


    </div>
  )
}

export default App
