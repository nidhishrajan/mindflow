import { Activity, MessageCircle, Moon, Brain, Check, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const features = [
    {
        icon: Activity,
        title: 'Mood Tracking',
        description: 'Track your emotional patterns with daily check-ins. AI identifies trends and triggers to help you understand yourself better.',
    },
    {
        icon: MessageCircle,
        title: 'AI Therapy Chat',
        description: 'Talk to an empathetic AI companion anytime. Evidence-based techniques from CBT, DBT, and mindfulness traditions.',
    },
    {
        icon: Moon,
        title: 'Sleep Stories',
        description: 'Drift off with personalized bedtime stories. Narrated by soothing voices with calming ambient soundscapes.',
    },
    {
        icon: Brain,
        title: 'Mindfulness Exercises',
        description: 'Guided meditations, breathing exercises, and body scans tailored to your current emotional state.',
    },
]

export function FeaturesSection() {
    return (
        <section id="features" className="border-t border-slate-700/30 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-medium uppercase tracking-widest text-sky-400">Features</p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Everything you need for mental wellness
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        Science-backed tools powered by AI, designed to fit seamlessly into your daily routine.
                    </p>
                </div>
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-2xl border border-slate-700/40 bg-white/[0.03] p-8 backdrop-blur-sm transition-colors duration-200 hover:border-slate-600/50 hover:bg-white/[0.06]">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-sky-500/10 ring-1 ring-sky-500/20">
                                <feature.icon className="size-6 text-sky-400" />
                            </div>
                            <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const testimonials = [
    {
        quote: 'MindFlow helped me understand my anxiety triggers in ways years of journaling never could. The pattern recognition is incredible.',
        name: 'Sarah K.',
        role: 'Product Designer',
    },
    {
        quote: "The AI chat is remarkably empathetic. It's like having a therapist available at 3am when you really need one.",
        name: 'Marcus T.',
        role: 'Software Engineer',
    },
    {
        quote: "Our team's mental health scores improved 40% after three months with MindFlow Teams. It's been transformative.",
        name: 'Dr. Lisa Chen',
        role: 'VP of People',
    },
]

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="border-t border-slate-700/30 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-medium uppercase tracking-widest text-sky-400">Testimonials</p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Loved by thousands
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        See how MindFlow is helping people take control of their mental wellness.
                    </p>
                </div>
                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="rounded-2xl border border-slate-700/40 bg-white/[0.03] p-8 backdrop-blur-sm">
                            <p className="font-heading text-3xl leading-none text-sky-400/25">&ldquo;</p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-300">{t.quote}</p>
                            <div className="mt-6 border-t border-slate-700/30 pt-4">
                                <p className="font-semibold text-white">{t.name}</p>
                                <p className="text-sm text-slate-500">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const plans = [
    {
        name: 'Free',
        price: '$0',
        description: 'Get started with the basics',
        features: ['Basic mood tracking', '5 AI chats per month', '3 sleep stories', 'Daily mindfulness tip'],
        cta: 'Get Started',
        highlighted: false,
    },
    {
        name: 'Pro',
        price: '$9',
        description: 'Unlock your full potential',
        features: ['Unlimited AI chats', 'Full story library', 'Advanced analytics', 'Custom exercises', 'Priority support'],
        cta: 'Start Free Trial',
        highlighted: true,
    },
    {
        name: 'Teams',
        price: '$29',
        description: 'Wellness for your whole team',
        features: ['Everything in Pro', 'Team dashboard', 'Admin controls', 'Dedicated success manager', 'SSO & compliance'],
        cta: 'Contact Sales',
        highlighted: false,
    },
]

export function PricingSection() {
    return (
        <section id="pricing" className="border-t border-slate-700/30 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-medium uppercase tracking-widest text-sky-400">Pricing</p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Simple, transparent pricing
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        Start free. Upgrade when you&#39;re ready.
                    </p>
                </div>
                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={cn(
                                'rounded-2xl border p-8 backdrop-blur-sm',
                                plan.highlighted
                                    ? 'border-sky-500/30 bg-sky-500/[0.07] ring-1 ring-sky-500/20'
                                    : 'border-slate-700/40 bg-white/[0.03]'
                            )}>
                            {plan.highlighted && (
                                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-sky-400">Most Popular</p>
                            )}
                            <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                            <p className="mt-1 text-sm text-slate-400">{plan.description}</p>
                            <p className="mt-6">
                                <span className="text-4xl font-bold text-white">{plan.price}</span>
                                <span className="text-slate-500">/mo</span>
                            </p>
                            <ul className="mt-8 space-y-3">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-center gap-3 text-sm">
                                        <Check className="size-4 shrink-0 text-sky-400/70" />
                                        <span className="text-slate-300">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={cn(
                                    'mt-8 w-full rounded-full py-3 text-sm font-medium transition-colors',
                                    plan.highlighted
                                        ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400'
                                        : 'bg-white/[0.06] text-slate-200 hover:bg-white/[0.12]'
                                )}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const faqs = [
    {
        question: 'How does the AI therapy chat work?',
        answer: 'Our AI companion uses evidence-based therapeutic techniques including CBT, DBT, and mindfulness practices. It adapts to your communication style and emotional state to provide personalized support. While not a replacement for professional therapy, it offers 24/7 accessible mental wellness support.',
    },
    {
        question: 'Is my data private and secure?',
        answer: 'Absolutely. All your data is encrypted end-to-end and stored securely. We never sell your personal information or share it with third parties. You can export or delete your data at any time. We are HIPAA-compliant and SOC 2 Type II certified.',
    },
    {
        question: 'Can MindFlow replace professional therapy?',
        answer: "MindFlow is designed to complement, not replace, professional mental health care. It's a daily wellness tool that helps you build self-awareness and resilience. If you're experiencing a crisis or severe mental health issues, we always recommend seeking professional help.",
    },
    {
        question: "What's included in the free plan?",
        answer: "The free plan includes basic mood tracking, 5 AI chat sessions per month, access to 3 sleep stories, and a daily mindfulness tip. It's a great way to explore MindFlow and see how it fits into your routine.",
    },
    {
        question: 'How do I cancel my subscription?',
        answer: 'You can cancel anytime from your account settings — no questions asked, no hidden fees. Your access continues until the end of your current billing period. If you cancel, your data remains available for 30 days in case you change your mind.',
    },
]

export function FAQSection() {
    return (
        <section id="faq" className="border-t border-slate-700/30 py-24">
            <div className="mx-auto max-w-3xl px-6 lg:px-12">
                <div className="text-center">
                    <p className="text-sm font-medium uppercase tracking-widest text-sky-400">FAQ</p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        Everything you need to know about MindFlow.
                    </p>
                </div>
                <div className="mt-16">
                    {faqs.map((faq) => (
                        <details key={faq.question} className="group border-b border-slate-700/40">
                            <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-left font-medium text-slate-200 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
                                {faq.question}
                                <ChevronDown className="size-5 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180 group-open:text-sky-400" />
                            </summary>
                            <p className="pb-5 text-sm leading-relaxed text-slate-400">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function Footer() {
    return (
        <footer className="border-t border-slate-700/30 bg-[#080e1a] py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid gap-12 md:grid-cols-4">
                    <div>
                        <span className="text-xl font-bold text-white">MindFlow</span>
                        <p className="mt-4 text-sm leading-relaxed text-slate-400">
                            AI-powered mental wellness that adapts to you.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-slate-200">Product</h4>
                        <ul className="mt-4 space-y-3">
                            <li><Link href="#features" className="text-sm text-slate-500 transition-colors hover:text-sky-400">Features</Link></li>
                            <li><Link href="#pricing" className="text-sm text-slate-500 transition-colors hover:text-sky-400">Pricing</Link></li>
                            <li><Link href="#faq" className="text-sm text-slate-500 transition-colors hover:text-sky-400">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-slate-200">Company</h4>
                        <ul className="mt-4 space-y-3">
                            <li><Link href="#" className="text-sm text-slate-500 transition-colors hover:text-sky-400">About</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 transition-colors hover:text-sky-400">Blog</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 transition-colors hover:text-sky-400">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-slate-200">Legal</h4>
                        <ul className="mt-4 space-y-3">
                            <li><Link href="#" className="text-sm text-slate-500 transition-colors hover:text-sky-400">Privacy</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 transition-colors hover:text-sky-400">Terms</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 transition-colors hover:text-sky-400">Security</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 border-t border-slate-700/30 pt-8 text-center">
                    <p className="text-sm text-slate-600">&copy; 2026 MindFlow. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
