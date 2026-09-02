// Deterministic Mathematical Calculations for Finora Tools

export function calculateSIP(monthlyInvestment: number, annualRate: number, years: number) {
  const i = annualRate / 100 / 12;
  const n = years * 12;
  const totalInvested = monthlyInvestment * n;
  
  if (i === 0) {
    return {
      totalInvested,
      totalWealth: totalInvested,
      wealthGained: 0,
      breakdown: []
    };
  }

  const totalWealth = monthlyInvestment * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const wealthGained = totalWealth - totalInvested;

  // Yearly data points for charts
  const breakdown = [];
  for (let y = 1; y <= years; y++) {
    const months = y * 12;
    const invested = monthlyInvestment * months;
    const wealth = monthlyInvestment * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
    breakdown.push({
      year: `Yr ${y}`,
      invested: Math.round(invested),
      wealth: Math.round(wealth),
      returns: Math.round(wealth - invested)
    });
  }

  return {
    totalInvested: Math.round(totalInvested),
    totalWealth: Math.round(totalWealth),
    wealthGained: Math.round(wealthGained),
    breakdown
  };
}

export function calculateDCF(
  currentCashFlow: number,
  growthRateYr1_5: number,
  terminalGrowthRate: number,
  wacc: number
) {
  const g1 = growthRateYr1_5 / 100;
  const gT = terminalGrowthRate / 100;
  const r = wacc / 100;

  if (r <= gT) {
    // Standard financial guardrail: discount rate must exceed terminal growth
    return { enterpriseValue: 0, pvExplicit: 0, pvTerminal: 0, projections: [] };
  }

  const projections = [];
  let pvExplicitTotal = 0;
  let cf = currentCashFlow;

  for (let year = 1; year <= 5; year++) {
    cf = cf * (1 + g1);
    const discountFactor = Math.pow(1 + r, year);
    const pv = cf / discountFactor;
    pvExplicitTotal += pv;

    projections.push({
      year: `Year ${year}`,
      cashFlow: Math.round(cf),
      presentValue: Math.round(pv)
    });
  }

  const terminalValue = (cf * (1 + gT)) / (r - gT);
  const pvTerminalValue = terminalValue / Math.pow(1 + r, 5);
  const enterpriseValue = pvExplicitTotal + pvTerminalValue;

  return {
    enterpriseValue: Math.round(enterpriseValue),
    pvExplicit: Math.round(pvExplicitTotal),
    pvTerminal: Math.round(pvTerminalValue),
    projections
  };
}

export function calculateRunway(cashBalance: number, monthlyRevenue: number, monthlyExpenses: number) {
  const netBurn = monthlyExpenses - monthlyRevenue;
  const runwayMonths = netBurn <= 0 ? 999 : cashBalance / netBurn;

  // 12-month projected cash trajectory
  const timeline = [];
  let currentCash = cashBalance;

  for (let m = 0; m <= 12; m++) {
    timeline.push({
      month: `M${m}`,
      cash: Math.max(0, Math.round(currentCash)),
      burn: Math.round(Math.max(0, netBurn))
    });
    currentCash -= netBurn;
  }

  return {
    netBurn: Math.round(netBurn),
    runwayMonths: netBurn <= 0 ? "Infinite (Cash Positive)" : runwayMonths.toFixed(1),
    isPositive: netBurn <= 0,
    timeline
  };
}

export function calculateBreakEven(fixedCosts: number, unitPrice: number, unitVariableCost: number) {
  const contributionMargin = unitPrice - unitVariableCost;
  const contributionMarginRatio = unitPrice > 0 ? (contributionMargin / unitPrice) * 100 : 0;

  if (contributionMargin <= 0) {
    return { breakEvenUnits: 0, breakEvenRevenue: 0, contributionMargin: 0, cmRatio: 0, chartData: [] };
  }

  const breakEvenUnits = Math.ceil(fixedCosts / contributionMargin);
  const breakEvenRevenue = breakEvenUnits * unitPrice;

  // Chart data across unit range
  const chartData = [];
  const maxUnits = breakEvenUnits * 1.8;
  const step = Math.max(1, Math.round(maxUnits / 8));

  for (let units = 0; units <= maxUnits; units += step) {
    const revenue = units * unitPrice;
    const totalCost = fixedCosts + (units * unitVariableCost);
    chartData.push({
      units: `${units}`,
      revenue: Math.round(revenue),
      costs: Math.round(totalCost),
      profit: Math.round(revenue - totalCost)
    });
  }

  return {
    breakEvenUnits,
    breakEvenRevenue: Math.round(breakEvenRevenue),
    contributionMargin: Math.round(contributionMargin),
    cmRatio: contributionMarginRatio.toFixed(1),
    chartData
  };
}
