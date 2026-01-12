import { Sprout, Target, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { DifficultyLevel, DIFFICULTY_LEVELS } from '@/types/game';
import { formatIndianCurrency } from '@/lib/utils';

interface IntroScreenProps {
  onStart: (difficulty: DifficultyLevel) => void;
}

export const IntroScreen = ({ onStart }: IntroScreenProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 300, damping: 24 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-emerald-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-300 rounded-full blur-3xl mix-blend-multiply filter animate-pulse" />
        <div className="absolute top-40 -right-20 w-72 h-72 bg-green-300 rounded-full blur-3xl mix-blend-multiply filter animate-pulse delay-1000" />
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-emerald-300 rounded-full blur-3xl mix-blend-multiply filter animate-pulse delay-2000" />
      </div>

      <motion.div
        className="max-w-md w-full text-center space-y-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo/Title */}
        <motion.div variants={itemVariants} className="space-y-2">
          <motion.div
            className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl shadow-xl flex items-center justify-center mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Sprout className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-5xl font-extrabold text-foreground tracking-tight">
            Krishi<span className="text-primary">Cash</span>
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            Master Your Farm Finances
          </p>
        </motion.div>

        {/* Game Description */}
        <motion.div variants={itemVariants} className="game-card text-left backdrop-blur-sm bg-white/80 border-primary/20">
          <h2 className="font-bold text-lg mb-4 text-center text-foreground">How to Win</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Target className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="font-bold text-foreground">Set a Goal</p>
                <p className="text-sm text-muted-foreground">Pick something big to save for</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-foreground">Grow Wealth</p>
                <p className="text-sm text-muted-foreground">Save regularly to boost income</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-bold text-foreground">Protect It</p>
                <p className="text-sm text-muted-foreground">Insurance saves you from disaster</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Difficulty Selection */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="font-bold text-xl text-foreground">Select Difficulty</h2>
          <div className="grid gap-3">
            {DIFFICULTY_LEVELS.map((level) => (
              <motion.button
                key={level.id}
                onClick={() => onStart(level.id)}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 rounded-xl border-2 border-transparent bg-white shadow-sm hover:shadow-md hover:border-primary transition-all text-left flex items-center gap-4 group relative overflow-hidden"
              >
                <div className="text-3xl bg-gray-50 p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
                  {level.emoji}
                </div>
                <div className="flex-1 z-10">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-lg text-gray-800">{level.name}</span>
                    <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">
                      {formatIndianCurrency(level.monthlyIncome)}/mo
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{level.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
