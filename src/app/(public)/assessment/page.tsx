'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Check } from 'lucide-react';

export default function AssessmentPage() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      q: "How would you rate your daily energy levels?",
      options: [
        { txt: "Low - I struggle to get through the day", val: 1 },
        { txt: "Moderate - I crash in the afternoon", val: 3 },
        { txt: "High - I feel energized most of the time", val: 5 }
      ]
    },
    {
      q: "Do you have a clear, documented system for your business/career?",
      options: [
        { txt: "No, I wing it every day", val: 1 },
        { txt: "Somewhat, but it's messy", val: 3 },
        { txt: "Yes, fully automated and delegated", val: 5 }
      ]
    },
    {
      q: "How clearly can you visualize your 5-year future?",
      options: [
        { txt: "It's a blur", val: 1 },
        { txt: "I have a vague idea", val: 3 },
        { txt: "Crystal clear vision", val: 5 }
      ]
    }
  ];

  const handleAnswer = (val: number) => {
    setScore(prev => prev + val);
    setStep(prev => prev + 1);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple/10 to-background">
      <div className="max-w-2xl w-full">
        {step < questions.length ? (
          <div className="bg-card border border-white/10 p-8 rounded-2xl shadow-2xl">
            <motion.div 
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }} 
              transition={{ duration: 0.3 }}
            >
              <div className="text-sm text-purple mb-4">Question {step + 1}/{questions.length}</div>
              <h2 className="text-3xl font-bold mb-8">{questions[step].q}</h2>
              <div className="space-y-4">
                {questions[step].options.map((opt, i) => (
                  <button 
                    key={i}
                    onClick={() => handleAnswer(opt.val)}
                    className="w-full text-left p-4 rounded-xl border border-white/5 hover:bg-purple hover:border-purple transition-all duration-200"
                  >
                    {opt.txt}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="text-center bg-card border border-purple/30 p-10 rounded-2xl">
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
            >
              <div className="w-20 h-20 bg-emerald/20 text-emerald rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-black mb-4">Assessment Complete</h2>
              <p className="text-gray-400 mb-8">
                Your Systems Score: <span className="text-white font-bold text-xl">{score}/15</span>
              </p>
              <p className="mb-8">Based on your score, we recommend starting with the <strong>Mind & Body Mastery</strong> module.</p>
              <Button size="lg" className="w-full">View Recommended Plan <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}
