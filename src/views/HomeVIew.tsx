import { Link } from "react-router-dom"

export const HomeView = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Ultimate Gaming Experience
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
              Discover incredible worlds, epic adventures, and unforgettable moments. Join millions of players in the
              most immersive gaming universe ever created.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/download"
                className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:from-cyan-600 hover:to-blue-700 hover:shadow-xl"
              >
                Download Now
              </Link>
              <Link
                to="/gallery"
                className="rounded-lg border-2 border-white/30 px-8 py-3 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Games</h2>
            <p className="mt-4 text-lg text-gray-600">Explore our most popular and critically acclaimed titles</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Game Card 1 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="aspect-video bg-gradient-to-br from-red-500 to-orange-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Cyber Legends</h3>
                <p className="mt-2 text-gray-600">
                  An epic sci-fi adventure in a dystopian future where technology meets humanity.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">Free</span>
                  <Link
                    to="/download"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    Play Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Game Card 2 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Fantasy Realms</h3>
                <p className="mt-2 text-gray-600">
                  Embark on magical quests in enchanted lands filled with mythical creatures.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">$29.99</span>
                  <Link
                    to="/download"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Game Card 3 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Space Odyssey</h3>
                <p className="mt-2 text-gray-600">
                  Explore the vast cosmos and build your interstellar empire among the stars.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">$19.99</span>
                  <Link
                    to="/download"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">10M+</div>
              <div className="mt-2 text-lg font-medium text-gray-900">Active Players</div>
              <div className="text-gray-600">Join our growing community</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">50+</div>
              <div className="mt-2 text-lg font-medium text-gray-900">Games Available</div>
              <div className="text-gray-600">Endless entertainment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">24/7</div>
              <div className="mt-2 text-lg font-medium text-gray-900">Support</div>
              <div className="text-gray-600">We're always here to help</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600">99.9%</div>
              <div className="mt-2 text-lg font-medium text-gray-900">Uptime</div>
              <div className="text-gray-600">Reliable gaming experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Latest News & Updates</h2>
            <p className="mt-4 text-lg text-gray-600">
              Stay up to date with the latest gaming news and platform updates
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <article className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-600"></div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold">December 3, 2024</div>
                <h3 className="mt-2 text-xl font-bold text-gray-900">New Game Engine Update Released</h3>
                <p className="mt-3 text-gray-600">
                  Experience enhanced graphics and improved performance with our latest engine update.
                </p>
                <Link to="#" className="mt-4 inline-flex text-blue-600 hover:text-blue-700 font-medium">
                  Read more →
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600"></div>
              <div className="p-6">
                <div className="text-sm text-green-600 font-semibold">December 1, 2024</div>
                <h3 className="mt-2 text-xl font-bold text-gray-900">Winter Tournament Begins</h3>
                <p className="mt-3 text-gray-600">
                  Join thousands of players in our biggest competitive event of the year.
                </p>
                <Link to="#" className="mt-4 inline-flex text-blue-600 hover:text-blue-700 font-medium">
                  Read more →
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-indigo-600"></div>
              <div className="p-6">
                <div className="text-sm text-purple-600 font-semibold">November 28, 2024</div>
                <h3 className="mt-2 text-xl font-bold text-gray-900">Community Milestone Reached</h3>
                <p className="mt-3 text-gray-600">
                  We've officially reached 10 million registered users! Thank you for your support.
                </p>
                <Link to="#" className="mt-4 inline-flex text-blue-600 hover:text-blue-700 font-medium">
                  Read more →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Start Your Adventure?</h2>
            <p className="mt-4 text-xl text-blue-100">
              Join millions of players and discover your next favorite game today.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/download"
                className="rounded-lg bg-white px-8 py-3 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                Get Started Free
              </Link>
              <Link
                to="/features"
                className="rounded-lg border-2 border-white/30 px-8 py-3 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
