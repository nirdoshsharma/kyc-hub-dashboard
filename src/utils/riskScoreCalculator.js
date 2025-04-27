export function calculateRiskScore(customer) {
  const paidCount = customer.loanRepaymentHistory.filter((p) => p === 1).length;
  const repaymentRate = paidCount / customer.loanRepaymentHistory.length;
  const repaymentScore = (1 - repaymentRate) * 100;

  let creditScoreNormalized;
  if (customer.creditScore < 500) {
    creditScoreNormalized = 100;
  } else if (customer.creditScore >= 500 && customer.creditScore <= 700) {
    creditScoreNormalized = 50;
  } else {
    creditScoreNormalized = 0;
  }

  const loanIncomeRatio = customer.outstandingLoans / customer.monthlyIncome;
  const loanIncomeScore = Math.min(loanIncomeRatio * 100, 100);

  const weightedScore =
    repaymentScore * 0.4 + creditScoreNormalized * 0.4 + loanIncomeScore * 0.2;

  return Math.min(Math.max(weightedScore, 0), 100);
}
