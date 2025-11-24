'use client'
import { motion } from 'framer-motion'
import { Brain, Rocket, FileCheck, Gift } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function FreeResources() {
  const [showModal, setShowModal] = useState(false)
  const [selectedResource, setSelectedResource] = useState('')

  const resources = [
    {
      title: "Mental Wellness Reset",
      value: "$97 Value",
      description: "Comprehensive mental wellness protocol",
      icon: <Brain className="w-12 h-12 text-purple-royal" />
    },
    {
      title: "Growth Starter Kit", 
      value: "$67 Value",
      description: "Complete growth acceleration system",
      icon: <Rocket className="w-12 h-12 text-gold-primary" />
    },
    {
      title: "AI Business Checklist",
      value: "$47 Value", 
      description: "Step-by-step AI integration guide",
      icon: <FileCheck className="w-12 h-12 text-blue-500" />
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <Gift className="w-16 h-16 text-gold-primary mx-auto mb-6" />
        <h2 className="text-5xl font-bold mb-6 sovereign-text">
          FREE RESOURCES HUB
        </h2>
        <p className="text-xl text-gray-300">
          Transformative tools to jumpstart your sovereignty journey
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {resources.map((resource, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="glass-hover p-8"
          >
            <div className="mb-6">{resource.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{resource.title}</h3>
            <p className="text-gold-primary font-bold mb-3">{resource.value}</p>
            <p className="text-gray-300 mb-6">{resource.description}</p>
            <Button 
              className="w-full"
              onClick={() => {
                setSelectedResource(resource.title)
                setShowModal(true)
              }}
            >
              Download Now
            </Button>
          </motion.div>
        ))}
      </div>

      {showModal && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="glass-panel p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 sovereign-text">
              Download {selectedResource}
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-black-rich border border-white/20 rounded-lg p-3 focus:border-gold-primary outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black-rich border border-white/20 rounded-lg p-3 focus:border-gold-primary outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-black-rich border border-white/20 rounded-lg p-3 focus:border-gold-primary outline-none"
                required
              />
              <Button type="submit" className="w-full">
                Get Instant Access
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}'use client'
import { motion } from 'framer-motion'
import { Brain, Rocket, FileCheck, Gift } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function FreeResources() {
  const [showModal, setShowModal] = useState(false)
  const [selectedResource, setSelectedResource] = useState('')

  const resources = [
    {
      title: "Mental Wellness Reset",
      value: "$97 Value",
      description: "Comprehensive mental wellness protocol",
      icon: <Brain className="w-12 h-12 text-purple-royal" />
    },
    {
      title: "Growth Starter Kit", 
      value: "$67 Value",
      description: "Complete growth acceleration system",
      icon: <Rocket className="w-12 h-12 text-gold-primary" />
    },
    {
      title: "AI Business Checklist",
      value: "$47 Value", 
      description: "Step-by-step AI integration guide",
      icon: <FileCheck className="w-12 h-12 text-blue-500" />
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <Gift className="w-16 h-16 text-gold-primary mx-auto mb-6" />
        <h2 className="text-5xl font-bold mb-6 sovereign-text">
          FREE RESOURCES HUB
        </h2>
        <p className="text-xl text-gray-300">
          Transformative tools to jumpstart your sovereignty journey
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {resources.map((resource, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="glass-hover p-8"
          >
            <div className="mb-6">{resource.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{resource.title}</h3>
            <p className="text-gold-primary font-bold mb-3">{resource.value}</p>
            <p className="text-gray-300 mb-6">{resource.description}</p>
            <Button 
              className="w-full"
              onClick={() => {
                setSelectedResource(resource.title)
                setShowModal(true)
              }}
            >
              Download Now
            </Button>
          </motion.div>
        ))}
      </div>

      {showModal && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="glass-panel p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 sovereign-text">
              Download {selectedResource}
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-black-rich border border-white/20 rounded-lg p-3 focus:border-gold-primary outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black-rich border border-white/20 rounded-lg p-3 focus:border-gold-primary outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-black-rich border border-white/20 rounded-lg p-3 focus:border-gold-primary outline-none"
                required
              />
              <Button type="submit" className="w-full">
                Get Instant Access
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
