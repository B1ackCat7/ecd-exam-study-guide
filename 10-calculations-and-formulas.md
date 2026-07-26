# <img src="assets/icons/calculator.svg" alt="" width="30" height="30"> Calculations and Formulas

> **Guide navigation:** [← Previous: Finance, business planning, and impact analysis](09-finance-business-planning-and-impact-analysis.md) · [Cover and contents](README.md) · [Next: Mock exam for practice →](11-mock-exam-for-practice.md)

## <img src="assets/icons/list-tree.svg" alt="" width="22" height="22"> Table of contents

- [Calculation habits](#calculation-habits)
- [Location quotient](#location-quotient)
- [Employment growth rate](#employment-growth-rate)
- [Shift-share analysis](#shift-share-analysis)
- [Revenue, cost, and profit](#revenue-cost-and-profit)
- [Liquidity ratios](#liquidity-ratios)
  - [Current ratio](#current-ratio)
  - [Quick ratio](#quick-ratio)
- [Activity ratios](#activity-ratios)
  - [Inventory turnover](#inventory-turnover)
  - [Days sales outstanding](#days-sales-outstanding)
- [Leverage and coverage](#leverage-and-coverage)
  - [Debt-to-assets](#debt-to-assets)
  - [Debt-to-equity](#debt-to-equity)
  - [Interest coverage](#interest-coverage)
- [Profitability](#profitability)
  - [Gross profit margin](#gross-profit-margin)
  - [Net profit margin](#net-profit-margin)
  - [Return on assets](#return-on-assets)
  - [Return on equity](#return-on-equity)
- [Shareholder ratios](#shareholder-ratios)
  - [Total shareholder return](#total-shareholder-return)
  - [Price-earnings ratio](#price-earnings-ratio)
  - [Market-to-book ratio](#market-to-book-ratio)
  - [Dividend yield](#dividend-yield)
- [Balance-sheet and cash relationships](#balance-sheet-and-cash-relationships)
- [Program-performance calculations](#program-performance-calculations)
  - [Conversion rate](#conversion-rate)
  - [Cost per qualified lead](#cost-per-qualified-lead)
  - [Issue resolution rate](#issue-resolution-rate)
  - [Funding leverage](#funding-leverage)
- [Avoiding common errors](#avoiding-common-errors)
- [Learn more](#learn-more)

## Calculation habits

For every calculation:

1. write the formula;
2. label units and time period;
3. substitute values;
4. calculate;
5. interpret in plain language;
6. state limitations.

Do not interpret a result without a benchmark, trend, or context.

## Location quotient

Location quotient compares a local industry's share of a regional measure with the same industry's share of that measure in a reference economy. The calculation below uses employment, the most common exam-style version. LQ can also be calculated with earnings, output, or GDP; do not mix measures in one calculation or comparison.

```text
LQ = (local industry employment / total local employment)
     ----------------------------------------------------
     (reference industry employment / total reference employment)
```

Example:

- local industry employment = 1,200
- total local employment = 20,000
- reference industry employment = 40,000
- total reference employment = 1,000,000

```text
Local share     = 1,200 / 20,000 = 0.06
Reference share = 40,000 / 1,000,000 = 0.04
LQ              = 0.06 / 0.04 = 1.50
```

Interpretation:

- LQ = 1.00: same concentration as the reference area.
- LQ > 1.00: more concentrated locally.
- LQ < 1.00: less concentrated locally.

An LQ of 1.50 means the industry's local employment share is 50% higher than its reference share. It does not prove productivity, competitiveness, exports, or future growth.

Check:

- consistent industry classification and geography;
- same year and employment concept;
- suppression and rounding;
- self-employment and commuting limitations;
- whether a few firms dominate.

## Employment growth rate

```text
Growth rate = (employment at end - employment at start)
              -----------------------------------------
                       employment at start
```

Multiply by 100 for percent.

## Shift-share analysis

Shift-share decomposes local industry employment change into:

- reference-area growth effect;
- industry-mix effect;
- local or differential shift effect.

Let:

- `e0` = local industry employment at start;
- `e1` = local industry employment at end;
- `g` = growth rate of total reference employment;
- `gi` = growth rate of reference industry employment;
- `gl` = growth rate of local industry employment.

```text
Reference growth effect = e0 x g
Industry mix effect     = e0 x (gi - g)
Local shift effect      = e0 x (gl - gi)
Total local change      = reference effect + mix effect + local effect
```

Example:

- local industry: 1,000 to 1,150, so `gl = 15%`
- total reference economy grows 4%, so `g = 4%`
- reference industry grows 8%, so `gi = 8%`

```text
Reference effect = 1,000 x 0.04          = 40
Industry mix     = 1,000 x (0.08 - 0.04) = 40
Local shift      = 1,000 x (0.15 - 0.08) = 70
Total change     = 40 + 40 + 70           = 150
```

Interpretation:

- 40 jobs are associated with overall reference growth.
- 40 are associated with the industry's stronger reference trend.
- 70 are associated with stronger local performance relative to that industry trend.

A positive local shift suggests a local advantage but does not identify its cause. Validate with firms and other evidence.

## Revenue, cost, and profit

```text
Net sales = Gross sales - Returns - Discounts

Cost of goods sold = Beginning inventory + Purchases - Ending inventory

Gross profit = Net sales - Cost of goods sold

Net income = Revenue - Expenses
```

## Liquidity ratios

### Current ratio

```text
Current ratio = Current assets / Current liabilities
```

Example: `300 / 150 = 2.00`.

The firm reports $2.00 of current assets for each $1.00 of current liabilities. Asset quality and timing still matter.

### Quick ratio

```text
Quick ratio = Quick assets / Current liabilities
```

Quick assets commonly include cash, short-term investments, and receivables. A simplified exam formula is:

```text
Quick ratio = (Current assets - Inventory - Less-liquid prepaids)
              ---------------------------------------------------
                         Current liabilities
```

If no prepaid amount is provided, the common approximation is `(Current assets - Inventory) / Current liabilities`.

Example with no prepaids given: `(300 - 100) / 150 = 1.33`.

This is stricter than the current ratio because inventory and other less-liquid current assets are excluded. State the definition used.

## Activity ratios

### Inventory turnover

```text
Inventory turnover = Cost of goods sold / Average inventory

Average inventory = (Beginning inventory + Ending inventory) / 2
```

Example: `600 / 150 = 4.0 times`.

Compare with the sector and the firm's trend. High turnover can mean efficiency or insufficient stock.

### Days sales outstanding

```text
DSO = Average accounts receivable / (Annual net credit sales / Days in period)
```

Use beginning and ending receivables to calculate an average when both are available. If only period-end receivables are given, use them as a proxy and say so. If net credit sales are unavailable, total sales may be used with a limitation.

Example using 365 days and period-end receivables as a proxy:

```text
DSO = 100 / (900 / 365) = 40.6 days
```

Use 360 or 365 consistently with the benchmark.

## Leverage and coverage

### Debt-to-assets

```text
Debt-to-assets = Total debt / Total assets
```

Example: `450 / 900 = 0.50`, or 50%.

State what *total debt* includes. Some sources use interest-bearing debt, while others use total liabilities.

### Debt-to-equity

```text
Debt-to-equity = Defined debt measure / Defined equity measure
```

Two conventions are common:

```text
Interest-bearing debt-to-equity = Interest-bearing debt / Shareholders' equity

Liabilities-to-equity = Total liabilities / Shareholders' equity
```

Example using interest-bearing debt: `450 / 450 = 1.00`.

Do not mix the two conventions. Name the numerator and compare only with a benchmark using the same definition.

### Interest coverage

```text
Interest coverage = Earnings before interest and tax / Interest expense
```

Example: `120 / 30 = 4.0 times`.

Definitions differ. State whether EBIT, EBITDA, or another measure is used.

## Profitability

### Gross profit margin

```text
Gross margin = (Net sales - Cost of goods sold) / Net sales
```

Example: `(1,000 - 600) / 1,000 = 40%`.

### Net profit margin

```text
Net margin = Net income / Net sales
```

Example: `80 / 1,000 = 8%`.

### Return on assets

```text
ROA = Net income / Average total assets
```

Some analysts use operating income instead of net income. State the numerator. If only one balance-sheet date is available, state that total assets are used as an approximation.

Example: `80 / 900 = 8.9%`.

### Return on equity

```text
ROE = Net income available to common shareholders / Average common equity
```

Some sources use total net income and total shareholders' equity. State the convention. Example using year-end common equity: `80 / 450 = 17.8%`.

## Shareholder ratios

These may be less relevant to a small private business but can test financial literacy.

### Total shareholder return

```text
TSR = (Ending share price - Beginning share price + Dividends) / Beginning share price
```

### Price-earnings ratio

```text
P/E = Market price per share / Earnings per share
```

### Market-to-book ratio

```text
Market-to-book = Market price per share / Book value per share
```

Use **book value per share**, not earnings per share.

### Dividend yield

```text
Dividend yield = Annual dividend per share / Market price per share
```

## Balance-sheet and cash relationships

```text
Assets = Liabilities + Equity

Ending cash = Beginning cash + Cash inflows - Cash outflows

Working capital = Current assets - Current liabilities
```

Positive working capital does not guarantee liquidity if receivables are uncollectible or inventory is obsolete.

## Program-performance calculations

### Conversion rate

```text
Conversion rate = Projects reaching next stage / Projects entering stage
```

### Cost per qualified lead

```text
Cost per qualified lead = Tactic cost / Qualified leads attributable to tactic
```

### Issue resolution rate

```text
Issue resolution rate = Issues resolved / Issues eligible for resolution
```

Define "resolved" and exclude cases outside scope only by a documented rule.

### Funding leverage

```text
Funding leverage = Partner and external funds / Organization funds
```

State whether in-kind contributions are included. Leverage is not proof of impact.

## Avoiding common errors

- mixing percentages and percentage points;
- using mismatched years or geographies;
- dividing by zero or a very small base;
- using total sales instead of credit sales without disclosure;
- using ending inventory instead of average inventory without disclosure;
- confusing market-to-book with P/E;
- interpreting LQ as growth;
- interpreting correlation as cause;
- counting announced and completed outcomes together;
- counting the same impact in multiple categories;
- omitting inflation, timing, risk, or lifecycle cost.

## <img src="assets/icons/external-link.svg" alt="" width="22" height="22"> Learn more

- [Statistics Canada — Location quotient](https://www150.statcan.gc.ca/n1/pub/21-006-x/2008007/def-eng.htm): interpretation of employment concentration.
- [Minnesota Department of Transportation — Regional Economic Analysis and Shift-Share Analysis](https://www.dot.mn.gov/ofrw/freight/PDF/d1plan/wp2.pdf): reference growth, industry mix, and differential or local shift.
- [Business Development Bank of Canada — Four ways to assess a business using financial ratios](https://www.bdc.ca/en/articles-tools/money-finance/manage-finances/financial-ratios-4-ways-assess-business): liquidity and other ratio categories.
- [Business Development Bank of Canada — Financial ratios](https://www.bdc.ca/en/articles-tools/money-finance/manage-finances/financial-ratios-what-are-how-use): profitability, leverage, coverage, collection, and turnover measures.
- [Investor.gov — Price-earnings ratio](https://www.investor.gov/introduction-investing/investing-basics/glossary/price-earnings-pe-ratio): P/E definition.
- [CFA Institute — Market-Based Valuation](https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/market-based-valuation-price-enterprise-value-multiples): price-to-book and other market multiples.
- [Ontario — Examples of identifying performance measures and data](https://www.ontario.ca/document/performance-measurement-agriculture-agri-food-and-economic-development-organizations/appendix-5-examples-identifying-performance-measures-and-data): economic-development performance measures.

When two recognized formulas differ, name the convention, use it consistently, and compare it only with a benchmark calculated the same way.

---

> **Guide navigation:** [← Previous: Finance, business planning, and impact analysis](09-finance-business-planning-and-impact-analysis.md) · [Cover and contents](README.md) · [Next: Mock exam for practice →](11-mock-exam-for-practice.md)
