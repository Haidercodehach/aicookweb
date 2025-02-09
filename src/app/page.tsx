"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Dummy data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "10 Quick and Easy Breakfast Ideas",
    excerpt: "Start your day right with these delicious recipes.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "The Art of Food Plating",
    excerpt: "Learn how to present your dishes like a pro chef.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Vegan Alternatives for Popular Dishes",
    excerpt: "Discover plant-based versions of your favorite meals.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Seasonal Cooking: Spring Edition",
    excerpt: "Make the most of fresh spring produce with these recipes.",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function Home() {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [year, setyear] = useState(2025);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setyear(currentYear);
  }, []);
  const nextPost = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
  };

  const prevPost = () => {
    setCurrentPostIndex(
      (prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length
    );
  };

  return (
    <div className="bg-white min-h-[100vh] flex flex-col">
      <main className="flex-grow">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
          {/* Left Column */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-12">
            <div className="space-y-16">
              {/* Logo and tagline */}
              <div className="font-serif absolute top-0 left-0 p-4 ">
                <h2 className="text-[#FF6B00] font-bold text-xl italic">
                  AiCook
                </h2>
                <p className="text-[#FF6B00] font-bold italic">
                  Recipes you like
                </p>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-[#FF6B00] font-serif text-6xl font-bold tracking-tight font-roca">
                  SMART
                  <br />
                  RECIPES
                </h1>
                <p className="text-[#FF6B00] text-xl">
                  Transform Ingredients into Culinary Masterpieces
                </p>
              </div>

              {/* Download App Section */}
              <div className="space-y-4">
                <p className="text-xl font-semibold text-[#ff6b00]">
                  Download our app:
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="inline-block rounded-md bg-[#FF6B00] text-white px-6 py-3 font-medium hover:bg-[#ff6a00dc] transition-colors"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-2"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.08-.46-2.06-.48-3.2 0-1.4.62-2.14.53-3.02-.34C3.1 15.85 3.58 8.3 8.66 8.06c1.23-.07 2.4.63 3.21.64.82 0 2.34-.79 3.96-.67 1.5.11 2.63.58 3.38 1.47-3.03 1.72-2.53 5.88.72 7.13-.68 1.36-1.6 2.72-2.88 3.65zM12.03 7.26c-.12-2.17 1.88-4.2 4.02-4.31.24 2.35-2.13 4.42-4.02 4.31z" />
                      </svg>
                      iOS
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="inline-block bg-[#FF6B00] text-white px-6 py-3 rounded-md font-medium hover:bg-[#ff6a00d0] transition-colors"
                  >
                    <span className="flex items-center ">
                      <svg
                        className="w-6 h-6 mr-2 text-white"
                        fill="currentColor"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        enableBackground="new 0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <g id="b75708d097f2188dff6617b0f00f7c43">
                          <path
                            display="inline"
                            d="M120.606,169h270.788v220.663c0,13.109-10.628,23.737-23.721,23.737h-27.123v67.203
		c0,17.066-13.612,30.897-30.415,30.897c-16.846,0-30.438-13.831-30.438-30.897v-67.203h-47.371v67.203
		c0,17.066-13.639,30.897-30.441,30.897c-16.799,0-30.437-13.831-30.437-30.897v-67.203h-27.099
		c-13.096,0-23.744-10.628-23.744-23.737V169z M67.541,167.199c-16.974,0-30.723,13.963-30.723,31.2v121.937
		c0,17.217,13.749,31.204,30.723,31.204c16.977,0,30.723-13.987,30.723-31.204V198.399
		C98.264,181.162,84.518,167.199,67.541,167.199z M391.395,146.764H120.606c3.342-38.578,28.367-71.776,64.392-90.998
		l-25.746-37.804c-3.472-5.098-2.162-12.054,2.946-15.525c5.102-3.471,12.044-2.151,15.533,2.943l28.061,41.232
		c15.558-5.38,32.446-8.469,50.208-8.469c17.783,0,34.672,3.089,50.229,8.476L334.29,5.395c3.446-5.108,10.41-6.428,15.512-2.957
		c5.108,3.471,6.418,10.427,2.946,15.525l-25.725,37.804C363.047,74.977,388.055,108.175,391.395,146.764z M213.865,94.345
		c0-8.273-6.699-14.983-14.969-14.983c-8.291,0-14.99,6.71-14.99,14.983c0,8.269,6.721,14.976,14.99,14.976
		S213.865,102.614,213.865,94.345z M329.992,94.345c0-8.273-6.722-14.983-14.99-14.983c-8.291,0-14.97,6.71-14.97,14.983
		c0,8.269,6.679,14.976,14.97,14.976C323.271,109.321,329.992,102.614,329.992,94.345z M444.48,167.156
		c-16.956,0-30.744,13.984-30.744,31.222v121.98c0,17.238,13.788,31.226,30.744,31.226c16.978,0,30.701-13.987,30.701-31.226
		v-121.98C475.182,181.14,461.458,167.156,444.48,167.156z"
                          ></path>
                        </g>
                      </svg>
                      Android
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="relative bg-gray-50 flex justify-center items-center">
            <div className="relative w-full h-full">
              <Image
                src="https://haidercodehach.github.io/aicookweb/assets/header-image.png"
                alt="Dish"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        {/* Blog Section with Single Post Slide Effect */}
        <section className="py-16 px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#FF6B00] mb-8 font-roca text-center">
              Latest Recipes
            </h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${currentPostIndex * 100}%)`,
                  }}
                >
                  <div className="flex">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="w-full flex-shrink-0">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          <div className="relative h-64">
                            <Image
                              src={post.image}
                              alt={post.title}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <Link
                              href="#"
                              className="inline-block text-[#FF6B00] font-medium hover:underline"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md rounded-full p-2 z-10"
                onClick={prevPost}
                aria-label="Previous recipe"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-md rounded-full p-2 z-10"
                onClick={nextPost}
                aria-label="Next recipe"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-center mt-4">
              {blogPosts.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    index === currentPostIndex ? "bg-[#FF6B00]" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentPostIndex(index)}
                  aria-label={`Go to recipe ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-[#FF6B00] font-bold text-xl italic">
                AiCook
              </h2>
              <p className="text-gray-600">Recipes you like</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-[#FF6B00]">
                About Us
              </Link>
              <Link
                href="https://forms.gle/Q4rD68fLV47JuRe5A"
                className="text-gray-600 hover:text-[#FF6B00]"
              >
                Contact
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#FF6B00]">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            <p>&copy; {year} AiCook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
