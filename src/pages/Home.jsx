import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-purple-100 to-pink-100 p-6">
      <nav className="flex justify-between items-center">
        <div className="text-yellow-500 font-bold text-xl">stripe</div>
        <ul className="flex space-x-4 text-sm text-gray-700">
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/developers">Developers</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>
        <Link
          to="/signin"
          className="text-sm bg-white text-pink-500 px-4 py-1 rounded-full shadow"
        >
          Sign in →
        </Link>
      </nav>

      <div className="mt-20 text-center lg:text-left lg:max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">
          Payments infrastructure
          <br />
          <span className="text-blue-600">for the internet</span>
        </h1>
        <p className="mt-4 text-gray-700 max-w-md">
          Millions of businesses of all sizes—from startups to large
          enterprises—use Stripe’s software and APIs to accept payments, send
          payouts, and manage their businesses online.
        </p>
        <div className="mt-6 flex justify-center lg:justify-start space-x-4">
          <button className="bg-black text-white px-6 py-2 rounded-full">
            Start now
          </button>
          <button className="text-blue-600 underline">Contact sales →</button>
        </div>
      </div>
    </div>
  );
}
