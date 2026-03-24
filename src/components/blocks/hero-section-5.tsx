'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'motion/react'

export function HeroSection() {
    return (
        <>
            <section>
                <div className="relative py-24 md:pb-32 lg:pb-36 lg:pt-72">
                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                            <h1 className="mt-8 max-w-2xl text-balance text-5xl text-white md:text-6xl lg:mt-16 xl:text-7xl">
                                Your Mind, Your Flow, Your Peace
                            </h1>
                            <p className="mt-8 max-w-2xl text-balance text-lg text-slate-300/90">
                                AI-powered mental wellness that adapts to you. Track your mood, practice mindfulness, and build resilience with personalized guidance — all in one calm, intuitive space.
                            </p>
                            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                                <Button asChild size="lg" className="h-12 rounded-full bg-sky-500 pl-5 pr-3 text-base text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400">
                                    <Link href="#pricing">
                                        <span className="text-nowrap">Start Your Journey</span>
                                        <ChevronRight className="ml-1" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="ghost" className="h-12 rounded-full border border-white/10 px-5 text-base text-slate-200 hover:bg-white/10 hover:text-white">
                                    <Link href="#features">
                                        <span className="text-nowrap">Learn More</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="size-full object-cover"
                            src="/ocean.mp4"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1121] via-[#0b1121]/70 to-[#0b1121]/30" />
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b1121] to-transparent" />
                    </div>
                </div>
            </section>
            <section className="pb-2">
                <div className="group relative m-auto max-w-7xl px-6">
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="md:max-w-44 md:border-r md:border-slate-700/50 md:pr-6">
                            <p className="text-end text-sm text-slate-400">Trusted by leading teams</p>
                        </div>
                        <div className="relative py-6 md:w-[calc(100%-11rem)]">
                            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                                <div className="flex items-center"><span className="text-sm font-semibold tracking-wide text-slate-500">Headspace</span></div>
                                <div className="flex items-center"><span className="text-sm font-semibold tracking-wide text-slate-500">Calm</span></div>
                                <div className="flex items-center"><span className="text-sm font-semibold tracking-wide text-slate-500">BetterHelp</span></div>
                                <div className="flex items-center"><span className="text-sm font-semibold tracking-wide text-slate-500">Talkspace</span></div>
                                <div className="flex items-center"><span className="text-sm font-semibold tracking-wide text-slate-500">Noom</span></div>
                                <div className="flex items-center"><span className="text-sm font-semibold tracking-wide text-slate-500">Peloton</span></div>
                            </InfiniteSlider>
                            <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
                            <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav data-state={menuState && 'active'} className="group fixed z-20 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-[#0b1121]/80 backdrop-blur-2xl')}>
                    <motion.div key={1} className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link href="/" aria-label="home" className="flex items-center space-x-2">
                                <span className="text-xl font-bold text-white">MindFlow</span>
                            </Link>
                            <button onClick={() => setMenuState(!menuState)} className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 text-slate-300 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 text-slate-300 opacity-0 duration-200" />
                            </button>
                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.href} className="block text-slate-400 duration-150 hover:text-white">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-2xl border border-slate-700/50 bg-[#0f1729] p-6 shadow-2xl shadow-black/40 group-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:group-data-[state=active]:flex">
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button asChild variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-white/10 hover:text-white">
                                    <Link href="#"><span>Login</span></Link>
                                </Button>
                                <Button asChild size="sm" className="bg-sky-500 text-white hover:bg-sky-400">
                                    <Link href="#"><span>Sign Up</span></Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
