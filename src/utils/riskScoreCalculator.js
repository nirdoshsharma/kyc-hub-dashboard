export function calculateRiskScore(customer) {
  const paidCount = customer.loanRepaymentHistory.filter((p) => p === 1).length;
  const repaymentRate = paidCount / customer.loanRepaymentHistory.length;
  const repaymentScore = (1 - repaymentRate) * 100;

  let creditScoreNormalized =
    (1 - (customer.creditScore - 300) / (850 - 300)) * 100;

  if (customer.creditScore < 500) {
    creditScoreNormalized = 100;
  } else if (customer.creditScore >= 500 && customer.creditScore <= 700) {
    creditScoreNormalized = 50;
  } else if (customer.creditScore > 700) {
    creditScoreNormalized = 0;
  }

  const weightedScore = repaymentScore * 0.5 + creditScoreNormalized * 0.5;

  return Math.min(Math.max(weightedScore, 0), 100);
}
