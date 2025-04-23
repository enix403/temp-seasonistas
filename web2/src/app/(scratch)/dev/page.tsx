"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Rocket, UserPlus, User, Briefcase, Shield, Menu, Check } from "lucide-react"

export default function Home() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Track scroll position to add shadow when scrolled past hero section
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      // Approximate height of the hero section (adjust as needed)
      const heroHeight = 600
      setScrolled(scrollContainer.scrollTop > heroHeight)
    }

    scrollContainer.addEventListener("scroll", handleScroll)
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div className="h-screen max-h-screen overflow-hidden bg-[#001a1e] text-white">
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#001a1e]/95 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Seasonistas Logo" width={40} height={40} className="h-10 w-auto" />
              <div className="text-lg font-medium">
                <span className="text-teal-400">|</span> Seasonistas
                <div className="text-xs text-gray-400">Platform for travelers with work impact</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="bg-white text-black font-medium px-6 py-2 rounded-full">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-gray-200">
                About Us
              </Link>
              <Link href="/how-it-works" className="text-white hover:text-gray-200">
                How It Works
              </Link>
              <Link href="/pricing" className="text-white hover:text-gray-200">
                Pricing
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-200">
                Contact Us
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-[#001a1e] text-white border-r border-[#002a30] w-[300px]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-8 mt-4">
                      <Image src="/logo.svg" alt="Seasonistas Logo" width={40} height={40} className="h-10 w-auto" />
                      <div className="text-lg font-medium">
                        <span className="text-teal-400">|</span> Seasonistas
                        <div className="text-xs text-gray-400">Platform for travelers with work impact</div>
                      </div>
                    </div>

                    <nav className="flex flex-col space-y-4">
                      <Link
                        href="/"
                        className="bg-white text-black font-medium px-6 py-2 rounded-full w-fit"
                        onClick={() => setOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="text-white hover:text-gray-200 px-2 py-1"
                        onClick={() => setOpen(false)}
                      >
                        About Us
                      </Link>
                      <Link
                        href="/how-it-works"
                        className="text-white hover:text-gray-200 px-2 py-1"
                        onClick={() => setOpen(false)}
                      >
                        How It Works
                      </Link>
                      <Link
                        href="/pricing"
                        className="text-white hover:text-gray-200 px-2 py-1"
                        onClick={() => setOpen(false)}
                      >
                        Pricing
                      </Link>
                      <Link
                        href="/contact"
                        className="text-white hover:text-gray-200 px-2 py-1"
                        onClick={() => setOpen(false)}
                      >
                        Contact Us
                      </Link>
                    </nav>

                    <div className="mt-auto mb-8">
                      <Button
                        className="bg-teal-500 hover:bg-teal-600 text-white rounded-full w-full"
                        onClick={() => setOpen(false)}
                      >
                        Login
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1 text-white">
                    English <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Greek</DropdownMenuItem>
                  <DropdownMenuItem>Spanish</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full">Login</Button>
            </div>
          </div>
        </div>
      </header>

      <div ref={scrollContainerRef} className="h-full overflow-auto">
        <main className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="mb-8">
                <Button
                  variant="outline"
                  className="rounded-full border-gray-600 text-white flex items-center gap-2 mb-6"
                >
                  <div className="bg-blue-500 rounded-full p-1">
                    <Rocket className="h-4 w-4" />
                  </div>
                  <span>Hire Smart Faster</span>
                  <div className="flex -space-x-2">
                    <div className="h-6 w-6 rounded-full bg-blue-400 flex items-center justify-center text-xs">6</div>
                    <div className="h-6 w-6 rounded-full bg-orange-300 border-2 border-[#001a1e]"></div>
                  </div>
                </Button>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Finding{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-300 text-transparent bg-clip-text">
                    Seasonal
                  </span>{" "}
                  <br />
                  <span className="bg-gradient-to-r from-purple-500 to-pink-400 text-transparent bg-clip-text">
                    Work
                  </span>{" "}
                  Made <br />
                  Simple
                </h1>
              </div>
            </div>

            <div className="md:w-1/2">
              <p className="text-lg text-gray-300 mb-8">
                Seasonistas is a platform that connects seasonal workers and employers across Greece, helping them find
                the ideal job or the right person for their team.
              </p>

              <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-6 text-lg">
                Get Started Now
              </Button>
            </div>
          </div>
        </main>

        <section className="container mx-auto px-4 py-16 bg-white text-black">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-04-23_01-35-p1qDEOTfkMaLbEDV3QeJ7jcPs2qvmM.png"
                  alt="Professional using Seasonistas"
                  className="rounded-lg w-full"
                />
                <div className="absolute bottom-4 left-4 flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium border-2 border-white">
                    G
                  </div>
                  <div className="h-8 w-8 rounded-full bg-orange-300 border-2 border-white"></div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-800 font-medium">About Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4">Connecting you is our job</h2>

              <h3 className="text-xl font-medium mb-6">Connecting Seasonal Talent with Opportunity</h3>

              <div className="space-y-4 mb-8">
                <p className="text-gray-700">
                  Seasonistas was created by a team of people with firsthand experience in seasonal work and the
                  challenges that come with it.
                </p>
                <p className="text-gray-700">
                  That's exactly why we built a platform that helps seasonal professionals find the right job and
                  businesses build the right team.
                </p>
              </div>

              <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-6 text-lg">
                Get Started Now
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 text-white">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#002a30] border border-[#003a40] rounded-full mb-6">
              <svg
                className="w-4 h-4 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-white font-medium">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center">How it works</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="bg-[#002a30] p-8 rounded-lg relative">
              <div className="flex items-start mb-4">
                <UserPlus className="h-8 w-8 text-teal-400 mr-3" />
                <h3 className="text-xl font-bold">Sign Up or Login</h3>
                <span className="absolute top-8 right-8 text-3xl font-bold text-[#003a40]">01</span>
              </div>
              <p className="text-gray-300">
                Create an account or login with an existing profile to begin your professional journey
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#002a30] p-8 rounded-lg relative">
              <div className="flex items-start mb-4">
                <User className="h-8 w-8 text-teal-400 mr-3" />
                <h3 className="text-xl font-bold">Create your work profile</h3>
                <span className="absolute top-8 right-8 text-3xl font-bold text-[#003a40]">02</span>
              </div>
              <p className="text-gray-300">
                Build your professional identity with skills, experience, and portfolio details
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#002a30] p-8 rounded-lg relative">
              <div className="flex items-start mb-4">
                <Briefcase className="h-8 w-8 text-teal-400 mr-3" />
                <h3 className="text-xl font-bold">Apply for a job or post an opening</h3>
                <span className="absolute top-8 right-8 text-3xl font-bold text-[#003a40]">03</span>
              </div>
              <p className="text-gray-300">Search for opportunities as a job seeker or list vacancies as an employer</p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#002a30] p-8 rounded-lg relative">
              <div className="flex items-start mb-4">
                <Shield className="h-8 w-8 text-teal-400 mr-3" />
                <h3 className="text-xl font-bold">Connect and start working</h3>
                <span className="absolute top-8 right-8 text-3xl font-bold text-[#003a40]">04</span>
              </div>
              <p className="text-gray-300">
                Initiate collaborations and embark on new professional adventures with trusted partners
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 bg-white text-black">
          <div className="flex flex-col items-center mb-12 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-gray-800 font-medium">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">Our Pricing</h2>
            <p className="text-gray-600 text-center max-w-2xl mb-8">
              The pricing policy applies exclusively to professional accounts.
            </p>

            {/* Avatar in top right */}
            <div className="absolute top-0 right-0 md:right-20 flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium border-2 border-white">
                G
              </div>
              <div className="h-8 w-8 rounded-full bg-orange-300 border-2 border-white"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Starter Plan */}
            <div className="border rounded-lg p-6 flex flex-col">
              <h3 className="font-bold text-lg mb-6">Starter Plan</h3>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-500 ml-1">/ Per Month</span>
                </div>
                <p className="text-gray-600 mt-4">This package is ideal for individuals or tiny teams</p>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>10 GB Storage</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>1 Year Support</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>500 Applications</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>Basic Analytics</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>Free Subdomain</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Purchase Now
              </Button>
            </div>

            {/* Basic Plan */}
            <div className="border rounded-lg p-6 flex flex-col">
              <h3 className="font-bold text-lg mb-6">Basic Plan</h3>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$20</span>
                  <span className="text-gray-500 ml-1">/ Per Month</span>
                </div>
                <p className="text-gray-600 mt-4">This package is ideal for small growing teams</p>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>500 GB Storage</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>5 Year Support</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>600 Queries</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>Basic Analytics</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>Free Subdomain</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Purchase Now
              </Button>
            </div>

            {/* Enter Price Plan */}
            <div className="bg-[#001a1e] text-white rounded-lg p-6 flex flex-col">
              <h3 className="font-bold text-lg mb-6">Enter Price Plan</h3>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$46</span>
                  <span className="text-gray-300 ml-1">/ Per Month</span>
                </div>
                <p className="text-gray-300 mt-4">This plan fits mid-size hiring companies</p>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-400 mr-2" />
                  <span>800 GB Storage</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-400 mr-2" />
                  <span>10 Year Support</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-400 mr-2" />
                  <span>800 Applications</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-400 mr-2" />
                  <span>Full Analytics</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-400 mr-2" />
                  <span>Free Subdomain</span>
                </div>
              </div>

              <Button className="w-full bg-teal-500 hover:bg-teal-600">Purchase Now</Button>
            </div>

            {/* Unlimited Plan */}
            <div className="border rounded-lg p-6 flex flex-col">
              <h3 className="font-bold text-lg mb-6">Unlimited Plan</h3>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$90</span>
                  <span className="text-gray-500 ml-1">/ Per Month</span>
                </div>
                <p className="text-gray-600 mt-4">This plan fits large teams or agencies</p>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>1000 GB Disk Space</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>Unlimited Support</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>Unlimited Applications</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>Full Analytics</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-2" />
                  <span>Free Subdomain</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Purchase Now
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
