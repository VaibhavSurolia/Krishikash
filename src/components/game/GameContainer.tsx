import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameState } from '@/hooks/useGameState';
import { useGameSave } from '@/hooks/useGameSave';
import { IntroScreen } from './IntroScreen';
import { GoalSelectionScreen } from './GoalSelectionScreen';
import { Dashboard } from './Dashboard';
import { EventCard } from './EventCard';
import { DecisionPanel } from './DecisionPanel';
import { MonthSummary } from './MonthSummary';
import { GameEndScreen } from './GameEndScreen';
import { GameHeader } from './GameHeader';
import { formatIndianCurrency } from '@/lib/utils';

export const GameContainer = () => {
  const {
    gameState,
    resetGame,
    startGame,
    selectGoal,
    startNewMonth,
    handleEvent,
    saveMoney,
    buyInsurance,
    updateInsurance,
    stopInsurance,
    takeLoan,
    repayLoan,
    withdrawFromSavings,
    purchaseGoal,
    endMonth,
    continueToNextMonth,
    getGameResult,
    loadGameState,
  } = useGameState();

  const { saveGame, isLoggedIn, isSaving } = useGameSave();
  const prevMonthRef = useRef(gameState.month);

  // Auto-save after each month ends (when month changes and user is logged in)
  useEffect(() => {
    if (isLoggedIn && gameState.month !== prevMonthRef.current && gameState.gamePhase === 'playing') {
      saveGame(gameState);
    }
    prevMonthRef.current = gameState.month;
  }, [gameState.month, gameState.gamePhase, isLoggedIn, saveGame, gameState]);

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, scale: 0.95, y: 10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.05, y: -10 },
    transition: { duration: 0.3 }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence mode="wait">
        {gameState.gamePhase === 'intro' && (
          <motion.div key="intro" {...pageVariants} className="w-full">
            <IntroScreen onStart={startGame} />
          </motion.div>
        )}

        {gameState.gamePhase === 'goal_selection' && (
          <motion.div key="goal" {...pageVariants} className="w-full">
            <GoalSelectionScreen onSelectGoal={selectGoal} />
          </motion.div>
        )}

        {gameState.gamePhase === 'ended' && (
          <motion.div key="ended" {...pageVariants} className="w-full">
            <GameEndScreen
              gameState={gameState}
              result={getGameResult()}
              onRestart={resetGame}
              onPurchaseGoal={purchaseGoal}
            />
          </motion.div>
        )}

        {['playing', 'event', 'decision', 'summary'].includes(gameState.gamePhase) && (
          <motion.div key="game-main" className="w-full">
            <div className="max-w-md mx-auto px-4 pb-8">
              <GameHeader 
                month={gameState.month} 
                onReset={resetGame}
                selectedGoal={gameState.selectedGoal}
                savings={gameState.savings}
                gameState={gameState}
                onLoadGame={loadGameState}
                isSaving={isSaving}
              />

              <AnimatePresence mode="wait" custom={gameState.gamePhase}>
                {gameState.gamePhase === 'playing' && (
                  <motion.div key="playing" {...pageVariants}>
                    <Dashboard
                      gameState={gameState}
                      onStartMonth={startNewMonth}
                    />
                  </motion.div>
                )}

                {gameState.gamePhase === 'event' && gameState.currentEvent && (
                  <motion.div key="event" {...pageVariants}>
                    <EventCard
                      event={gameState.currentEvent}
                      hasInsurance={gameState.hasInsurance}
                      onContinue={() => handleEvent(gameState.currentEvent!)}
                    />
                  </motion.div>
                )}

                {gameState.gamePhase === 'decision' && (
                  <motion.div key="decision" {...pageVariants} className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-xl font-bold text-foreground">Make Your Decisions</h2>
                      <p className="text-sm text-muted-foreground">
                        Balance: {formatIndianCurrency(gameState.balance)}
                      </p>
                    </div>
                    <DecisionPanel
                      balance={gameState.balance}
                      savings={gameState.savings}
                      hasInsurance={gameState.hasInsurance}
                      insuranceAmount={gameState.insuranceAmount}
                      debt={gameState.debt}
                      loanMonthsRemaining={gameState.loanMonthsRemaining}
                      onSave={saveMoney}
                      onBuyInsurance={buyInsurance}
                      onUpdateInsurance={updateInsurance}
                      onStopInsurance={stopInsurance}
                      onTakeLoan={takeLoan}
                      onRepayLoan={repayLoan}
                      onWithdrawFromSavings={withdrawFromSavings}
                      onEndMonth={endMonth}
                    />
                  </motion.div>
                )}

                {gameState.gamePhase === 'summary' && (
                  <motion.div key="summary" {...pageVariants}>
                    <MonthSummary
                      gameState={gameState}
                      onContinue={continueToNextMonth}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
