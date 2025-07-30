'use client';

import { motion } from 'framer-motion';
import { CheckCircle, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic',
    price: '$9/mo',
    features: ['1 Project', 'Basic Support', 'Email Notifications'],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29/mo',
    features: ['10 Projects', 'Priority Support', 'Team Collaboration'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited Projects', 'Dedicated Manager', 'Advanced Analytics'],
    popular: false,
  },
];

const faqs = [
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your plan anytime without any hidden fees.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes, you’ll get two months free with annual billing.',
  },
  {
    question: 'What payment methods do you support?',
    answer: 'We support major credit cards, PayPal, and Stripe payments.',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4 py-16 space-y-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Choose the right plan for you
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300"
        >
          Simple pricing. No hidden fees. Cancel anytime.
        </motion.p>
      </div>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.2 }}
            className={`rounded-2xl shadow-lg p-8 border ${
              plan.popular ? 'border-yellow-400 bg-slate-700' : 'bg-slate-800'
            }`}
          >
            {plan.popular && (
              <div className="text-xs uppercase text-yellow-400 font-bold mb-4">
                Most Popular
              </div>
            )}
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/signup"
              className={`inline-block text-center w-full py-2 rounded-lg font-medium ${
                plan.popular
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                  : 'bg-white text-black hover:bg-gray-200'
              } transition`}
            >
              Get Started
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Compare Features</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-300 border border-gray-600 rounded-lg">
            <thead className="bg-slate-700 text-sm uppercase">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4 text-center">Basic</th>
                <th className="p-4 text-center">Pro</th>
                <th className="p-4 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Projects', '1', '10', 'Unlimited'],
                ['Support', 'Basic', 'Priority', 'Dedicated Manager'],
                ['Collaboration', '-', 'Yes', 'Yes'],
              ].map(([feature, basic, pro, enterprise]) => (
                <tr key={feature} className="border-t border-gray-600">
                  <td className="p-4">{feature}</td>
                  <td className="p-4 text-center">{basic}</td>
                  <td className="p-4 text-center">{pro}</td>
                  <td className="p-4 text-center">{enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-700 p-6 rounded-xl shadow"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="text-yellow-400 mt-1 w-5 h-5" />
                <div>
                  <h3 className="font-semibold mb-1">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-4xl mx-auto text-center py-12 mt-8 border-t border-gray-700">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-400 mb-6">Join thousands of happy users and grow your business with us.</p>
        <Link
          href="/signup"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  );
}
