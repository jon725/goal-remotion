export type PlanAssumptions = {
  rampWeeks: number;              // titration phase length
  rampLossLbsPerWeek: number;     // slower early loss
  steadyLossLbsPerWeek: number;   // post-titration weekly loss
  milestonePercents: number[];    // 0.05 = 5%, etc.
};

export const DEFAULT_ASSUMPTIONS: PlanAssumptions = {
  rampWeeks: 8,
  rampLossLbsPerWeek: 0.8,
  steadyLossLbsPerWeek: 2.5, // Changed from 1.8 to 2.5 for Injection default
  milestonePercents: [0.05, 0.10, 0.15, 0.20],
};

export function poundsForPercent(startWeight: number, pct: number) {
  return Math.max(0, +(startWeight * pct).toFixed(1));
}

export function weeksToLose(
  pounds: number,
  {rampWeeks, rampLossLbsPerWeek, steadyLossLbsPerWeek}: PlanAssumptions
) {
  const rampCap = rampWeeks * rampLossLbsPerWeek;
  if (pounds <= rampCap) {
    return +(pounds / rampLossLbsPerWeek).toFixed(1);
  }
  const remaining = pounds - rampCap;
  return +(rampWeeks + remaining / steadyLossLbsPerWeek).toFixed(1);
}

export function projectETAs(
  startWeight: number,
  currentWeight: number,
  goalWeight: number,
  assumptions: PlanAssumptions = DEFAULT_ASSUMPTIONS
) {
  const lostSoFar = Math.max(0, startWeight - currentWeight);
  const toGoal = Math.max(0, currentWeight - goalWeight);

  const milestones = assumptions.milestonePercents.map((p) => {
    const targetLoss = poundsForPercent(startWeight, p);
    const deltaNeeded = Math.max(0, targetLoss - lostSoFar);
    const weeks = deltaNeeded === 0 ? 0 : weeksToLose(deltaNeeded, assumptions);
    return {
      label: `${Math.round(p * 100)}%`,
      lossLbs: targetLoss,
      reached: lostSoFar >= targetLoss,
      deltaNeeded,
      etaWeeksFromNow: weeks,
    };
  });

  const etaTo20 = milestones.find((m) => m.label === '20%')?.etaWeeksFromNow ?? null;
  const etaToGoal = toGoal === 0 ? 0 : weeksToLose(toGoal, assumptions);

  return {
    lostSoFar,
    toGoal,
    milestones,
    etaTo20,
    etaToGoal,
  };
}