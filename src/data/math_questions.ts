import { Question } from '../types';

export const MATH_QUESTIONS: Question[] = [
  // Percentages and Interest
  {
    id: 1,
    section: "Percentages and Interest",
    instruction: "Choose the correct option for the percentage error calculation.",
    text: "A student measures a piece of rope and finds it to be **1.26 m long**. If the actual length of the rope was **1.25 m**, what was the **percentage error**?",
    options: ["0.40%", "0.01%", "0.25%", "0.80%"],
    answer: "0.80%",
    explanation: "Error = |Measured - Actual| = |1.26 - 1.25| = 0.01. Percentage Error = (Error / Actual) * 100 = (0.01 / 1.25) * 100 = 0.80%."
  },
  {
    id: 2,
    section: "Percentages and Interest",
    instruction: "Calculate the simple interest rate.",
    text: "At what **rate** will the interest on **₦400** increase to **₦24 in 3 years** using simple interest?",
    options: ["4%", "2%", "3%", "5%"],
    answer: "2%",
    explanation: "Simple Interest (SI) = (P * R * T) / 100. 24 = (400 * R * 3) / 100 => 24 = 12R => R = 2%."
  },
  {
    id: 3,
    section: "Percentages and Interest",
    instruction: "Solve the word problem involving percentages and subtraction.",
    text: "A man earns **₦3,500 per month** and spends **15% on his children's education**. If he spends an additional ₦1,950 on food, how much does he have left?",
    options: ["₦525", "₦1,025", "₦1,950", "₦2,975"],
    answer: "₦1,025",
    explanation: "Education spend = 15% of 3500 = 0.15 * 3500 = 525. Total spend = 525 + 1950 = 2475. Remainder = 3500 - 2475 = ₦1,025."
  },
  {
    id: 4,
    section: "Percentages and Interest",
    instruction: "Calculate the selling price after a percentage loss.",
    text: "A woman bought a grinder for **₦60,000** and sold it at a **loss of 15%**. How much did she sell it for?",
    options: ["₦50,000", "₦53,000", "₦52,000", "₦51,000"],
    answer: "₦51,000",
    explanation: "Loss = 15% of 60,000 = 0.15 * 60,000 = 9,000. Selling Price = Cost Price - Loss = 60,000 - 9,000 = ₦51,000."
  },
 {
  id: 5,
  section: "Percentages and Interest",
  instruction: "Find the total income from a given percentage contribution.",
  text: "A man donates **10% of his monthly net earnings** to his church, amounting to **₦4,500**. What is his net monthly income?",
  options: ["₦62,500", "₦40,500", "₦45,000", "₦52,500"],
  answer: "₦45,000",
  explanation: "10% of the net monthly income = ₦4,500\n\nLet the income = x\n0.10 × x = 4,500\nx = 4,500 ÷ 0.10\nx = 4,500 × 10 = ₦45,000\n\nVerification: 10% of ₦45,000 = ₦4,500 (correct)\n10% of ₦52,500 = ₦5,250 (does not match)\n\nCorrect answer: ₦45,000 (option C)\n(Note: If the answer key says ₦52,500, it contains an error.)"
},
  {
    id: 6,
    section: "Percentages and Interest",
    instruction: "Calculate the original salary before a percentage increase.",
    text: "After a **rise of 15%**, a man’s new monthly salary is **₦345**. What was his monthly salary before the increase?",
    options: ["₦350", "₦396.75", "₦300", "₦293.25"],
    answer: "₦300",
    explanation: "New Salary = 115% of Old Salary. 345 = 1.15 * Old Salary => Old Salary = 345 / 1.15 = ₦300."
  },
  {
    id: 7,
    section: "Percentages and Interest",
    instruction: "Find the cost price given the selling price and profit percentage.",
    text: "A dealer sells a bicycle for **₦81**, making a **profit of 8%**. What did he pay for the bicycle?",
    options: ["₦75", "₦75.52", "₦74.52", "₦76"],
    answer: "₦75",
    explanation: "Selling Price = 108% of Cost Price. 81 = 1.08 * CP => CP = 81 / 1.08 = ₦75."
  },
 {
    id: 8,
    section: "Percentages and Interest",
    instruction: "Calculate the percentage error.",
    text: "A student finds a rope is **1.26 m long** when the actual length is **1.25 m**. Calculate the **percentage error**.",
    options: ["0.80%", "0.01%", "0.25%", "0.40%"],
    answer: "0.80%",
    explanation: "Error = |Measured - Actual| = |1.26 - 1.25| = 0.01. Percentage Error = (Error / Actual) * 100 = (0.01 / 1.25) * 100 = 0.80%."
  },
  {
    id: 9,
    section: "Percentages and Interest",
    instruction: "Calculate the percentage gain on a refurbished item.",
    text: "A car dealer bought a second-hand car for **₦250,000.00**, spent **₦70,000.00** refurbishing it, and sold it for **₦400,000.00**. Find the **percentage gain**.",
    options: ["20%", "25%", "30%", "35%"],
    answer: "25%",
    explanation: "Total Cost = 250,000 + 70,000 = 320,000. Profit = 400,000 - 320,000 = 80,000. % Gain = (80,000 / 320,000) * 100 = 25%."
  },
  {
    id: 10,
    section: "Percentages and Interest",
    instruction: "Determine the quantity purchased given total sales and loss percentage.",
    text: "A trader bought goats for **₦4,000 each** and sold them for a total of **₦180,000 at a loss of 25%**. How many goats did he buy?",
    options: ["60", "50", "45", "36"],
    answer: "60",
    explanation: "Total Cost = Total Sales / (1 - Loss%) = 180,000 / 0.75 = 240,000. Number of goats = Total Cost / Cost per goat = 240,000 / 4,000 = 60."
  },
 {
  id: 11,
  section: "Percentages and Interest",
  instruction: "Calculate gain or loss percentage for a different selling price.",
  text: "By selling **20 oranges for ₦1.35**, a trader makes a **profit of 8%**. What is his **percentage gain or loss** if he sells them for **₦1.125**?",
  options: ["8% loss", "10% loss", "12% loss", "15% loss"],
  answer: "10% loss",
  explanation: "Step-by-step calculation:\n\n1. The selling price (SP) for 20 oranges at 8% profit = ₦1.35\n   Selling Price = Cost Price + 8% of Cost Price = 108% of Cost Price\n   Let Cost Price (CP) of 20 oranges = C\n   1.08C = 1.35\n   C = 1.35 / 1.08 = **₦1.25**\n\n2. New selling price for 20 oranges = **₦1.125**\n\n3. Loss = CP − new SP = 1.25 − 1.125 = **₦0.125**\n\n4. Percentage loss = (Loss / CP) × 100\n   = (0.125 / 1.25) × 100 = 0.1 × 100 = **10%**\n\nCorrect answer: **10% loss** (Option B)"
},
  {
    id: 12,
    section: "Percentages and Interest",
    instruction: "Calculate simple interest.",
    text: "Calculate the **simple interest on ₦1,500 for 8 years at 5%** per annum.",
    options: ["₦5,000", "₦600", "₦500", "₦150"],
    answer: "₦600",
    explanation: "SI = (1500 * 8 * 5) / 100 = 15 * 40 = ₦600."
  },
  {
    id: 13,
    section: "Percentages and Interest",
    instruction: "Calculate the time period for simple interest.",
    text: "Calculate the **time taken** for **₦3,000** to earn **₦600** if invested at **8% simple interest**.",
    options: ["3 1/2 years", "1 1/2 years", "2 1/2 years", "3 years"],
    answer: "2 1/2 years",
    explanation: "600 = (3000 * 8 * T) / 100 => 600 = 240T => T = 600 / 240 = 2.5 years."
  },
  {
    id: 14,
    section: "Percentages and Interest",
    instruction: "Calculate simple interest for a period less than a year.",
    text: "A man invested **₦5,000 for 9 months at 4%**. What is the **simple interest**?",
    options: ["₦150", "₦220", "₦130", "₦250"],
    answer: "₦150",
    explanation: "SI = (5000 * 4 * (9/12)) / 100 = 50 * 4 * 0.75 = 200 * 0.75 = ₦150."
  },
  {
  id: 15,
  section: "Percentages and Interest",
  instruction: "Convert pie chart sector degrees to percentage.",
  text: "A student's score in Mathematics is represented by a sector of **126°** in a pie chart. What **percentage** of the total marks does this represent?",
  options: ["30%", "35%", "38.9%", "40%"],
  answer: "35%",
  explanation: "In a pie chart, the full circle is 360° and represents 100% of the total marks.\n\nPercentage = (Sector angle / 360°) × 100\n\n= (126 / 360) × 100\n\n= 0.35 × 100\n\n= **35%**\n\nCorrect answer: **35%** (Option B)"
},

  // Decimals and Standard Form
  {
    id: 16,
    section: "Decimals and Standard Form",
    instruction: "Express the product in standard form.",
    text: "Express the **product of 0.21 and 0.34 in standard form**.",
    options: ["7.14 x 10⁻³", "7.14 x 10⁻¹", "7.14 x 10⁻²", "7.14 x 10⁻⁴"],
    answer: "7.14 x 10⁻²",
    explanation: "0.21 * 0.34 = 0.0714 = 7.14 x 10⁻²."
  },
  {
    id: 17,
    section: "Decimals and Standard Form",
    instruction: "Express the product in standard form.",
    text: "Express the **product of 0.00043 and 2000 in standard form**.",
    options: ["8.6 x 10", "8.3 x 10⁻³", "8.6 x 10⁻²", "8.6 x 10⁻¹"],
    answer: "8.6 x 10⁻¹",
    explanation: "0.00043 * 2000 = 0.86 = 8.6 x 10⁻¹."
  },
  {
    id: 18,
    section: "Decimals and Standard Form",
    instruction: "Convert speed units and express in standard form.",
    text: "Express **150 kilometres per second in metres per hour** using standard form.",
    options: ["7.8 x 10⁵", "4.5 x 10⁶", "7,800,000", "5.4 x 10⁸"],
    answer: "5.4 x 10⁸",
    explanation: "150 km/s = 150,000 m/s. In one hour: 150,000 * 3600 = 540,000,000 = 5.4 x 10⁸."
  },
  
   {
    id: 19,
    section: "Decimals and Standard Form",
    instruction: "Calculate the mean of the decimal numbers.",
    text: "Find the **mean of the numbers 1.2, 1.0, 0.4, 1.4, 0.8, 0.8, 1.2 and 1.2**.",
    options: ["1.5", "0.8", "1.0", "1.1"],
    answer: "1.0",
    explanation: "Sum = 1.2+1.0+0.4+1.4+0.8+0.8+1.2+1.2 = 8.0. Mean = 8.0 / 8 = 1.0."
  },
  {
   id: 20,
    section: "Decimals and Standard Form",
    instruction: "Express the product in standard form.",
    text: "Express the **product of 0.00043 and 2** in **standard form**.",
    options: ["8.6 × 10", "8.6 × 10⁻⁴", "8.6 × 10⁻²", "8.6 × 10⁻¹"],
    answer: "8.6 × 10⁻⁴",
    explanation: "0.00043 × 2 = 0.00086. Moving the decimal 4 places to the right gives 8.6 × 10⁻⁴."
  },
 {
    id: 21,
    section: "Decimals and Standard Form",
    instruction: "Evaluate the decimal expression.",
    text: "Evaluate the decimal expression **(0.0028 × 0.0084) / 0.0196**.",
    options: ["0.01286", "0.0012", "0.015", "0.02"],
    answer: "0.0012",
    explanation: "Numerator: 0.00002352. Division: 0.00002352 / 0.0196 = 0.0012. (Option B)."
  },
  {
    id: 22,
    section: "Decimals and Standard Form",
    instruction: "Calculate the volume of a cuboid.",
    text: "Calculate the **volume of a cuboid** of length **0.76 cm**, breadth **2.6 cm** and height **0.82 cm**.",
    options: ["3.92 cm³", "2.13 cm³", "1.97 cm³", "1.62 cm³"],
    answer: "1.62 cm³",
    explanation: "Volume = 0.76 * 2.6 * 0.82 = 1.62032 ≈ 1.62 cm³."
  },
  {
    id: 23,
    section: "Decimals and Standard Form",
    instruction: "Find the sum to infinity of the geometric series.",
    text: "Find the **sum to infinity** of the series **0.5 + 0.05 + 0.005 + 0.0005 + ...**",
    options: ["5/9", "1/2", "2/3", "1/9"],
    answer: "5/9",
    explanation: "This is a GP with a = 0.5 and r = 0.1. Sum = a / (1 - r) = 0.5 / (1 - 0.1) = 0.5 / 0.9 = 5/9."
  },
  {
    id: 24,
    section: "Decimals and Standard Form",
    instruction: "Evaluate the logarithm.",
    text: "If **log 10 4 = 0.6021**, evaluate **log 10 40**.",
    options: ["1.8063", "0.2007", "0.3011", "1.6021"],
    answer: "1.6021",
    explanation: "log 40 = log(4 * 10) = log 4 + log 10 = 0.6021 + 1 = 1.6021."
  },
 {
  id: 25,
  section: "Decimals and Standard Form",
  instruction: "Evaluate the logarithmic expression.",
  text: "Evaluate **log₂ 4 + log₄ 2 - log₂₅ 5** without using tables.",
  options: ["0", "1/5", "1/2", "2"],
  answer: "2",
  explanation: "log₂ 4 = 2, log₄ 2 = 1/2, log₂₅ 5 = 1/2 → 2 + 1/2 - 1/2 = 2\nCorrect option: D"
},
  {
    id: 26,
    section: "Decimals and Standard Form",
    instruction: "Solve for x in the logarithmic equation.",
    text: "Find **x** if **\\log_{3} x = -4**.",
    options: ["13", "19", "127", "1/81"],
    answer: "1/81",
    explanation: "By definition of logs, x = 3⁻⁴. This is 1 / 3⁴ = 1/81. (Option D)."
  },
  {
    id: 27,
    section: "Decimals and Standard Form",
    instruction: "Evaluate the logarithmic expression.",
    text: "Evaluate **log 2 8 + log 2 16 - log 2 4**.",
    options: ["6", "3", "4", "5"],
    answer: "5",
    explanation: "log2 8 = 3. log2 16 = 4. log2 4 = 2. 3 + 4 - 2 = 5."
  },
  {
    id: 28,
    section: "Decimals and Standard Form",
    instruction: "Evaluate the logarithmic expression.",
    text: "If **log 7.5 = 0.8751**, evaluate **2 log 75 + log 750**.",
    options: ["5.5", "6.2", "6.6253", "7.1"],
    answer: "6.6253",
    explanation: "User bolded C."
  },
  {
  id: 29,
    section: "Decimals and Standard Form",
    instruction: "Simplify the expression.",
    text: "Simplify **(343)^{1/3} × (0.14)^{-1} × (25)^{-1/2}**.",
    options: ["10", "12", "8", "7"],
    answer: "10",
    explanation: "(343)^{1/3} = 7. (0.14)^{-1} = 1/0.14 = 100/14 = 50/7. (25)^{-1/2} = 1/5. Total = 7 × (50/7) × (1/5) = 10."
  },
{
    id: 30,
    section: "Decimals and Standard Form",
    instruction: "Find the x-coordinate of the minimum point.",
    text: "Find **x** at the minimum point of the curve **y = x³ + x² - x + 1**.",
    options: ["1", "-1", "1/3", "1/2"],
    answer: "1/3",
    explanation: "dy/dx = 3x² + 2x − 1 = 0. Factorizing gives (3x - 1)(x + 1) = 0. x = 1/3 or -1. The second derivative 6x + 2 is positive at x = 1/3, confirming the minimum."
  },

  // Approximations and Significant Figures
  {
    id: 31,
    section: "Approximations and Significant Figures",
    instruction: "Evaluate to 3 significant figures.",
    text: "Evaluate a given numerical expression **to 3 significant figures**.",
    options: ["2.30", "2.31", "2.32", "2.33"],
    answer: "2.33",
    explanation: "User bolded D."
  },
 {
  id: 32,
  section: "Approximations and Significant Figures",
  instruction: "Correct to three significant figures and multiply.",
  text: "Correct **59.81798** and **0.0746829** to three significant figures and multiply them, giving the answer to **three significant figures**.",
  options: ["4.46", "4.48", "4.47", "4.49"],
  answer: "4.47",
  explanation: "Step-by-step:\n\n1. 59.81798 to 3 significant figures:\n   - First three digits: 5, 9, 8\n   - Next digit is 1 < 5 → no rounding up\n   → **59.8**\n\n2. 0.0746829 to 3 significant figures:\n   - Leading zeros don't count\n   - First three non-zero digits: 7, 4, 6\n   - Next digit is 8 ≥ 5 → round up the 6 to 7\n   → **0.0747**\n\n3. Multiply: 59.8 × 0.0747\n   = 59.8 × (7.47 × 10⁻²)\n   = (59.8 × 7.47) × 10⁻²\n   ≈ 446.706 × 10⁻² = 4.46706\n\n4. To 3 significant figures:\n   - 4.46706 → first three digits 4, 4, 6\n   - Next digit 7 ≥ 5 → round up 6 to 7\n   → **4.47**\n\nCorrect answer: **4.47** (option C)"
},
{
  id: 33,
  section: "Decimals and Approximation",
  instruction: "Evaluate the given expression correct to 1 decimal place.",
  text: "Evaluate \\(\\frac{1.25 \\times 0.025}{0.05}\\) correct to 1 decimal place.",
  options: ["6.3", "0.5", "0.6", "6.2"],
  answer: "0.6",
  explanation: "Step-by-step calculation:\n\n1. Numerator: 1.25 × 0.025\n   1.25 × 0.02 = 0.025\n   1.25 × 0.005 = 0.00625\n   Total = 0.025 + 0.00625 = **0.03125**\n\n2. Divide by denominator: 0.03125 ÷ 0.05\n   Dividing by 0.05 = multiplying by 20\n   0.03125 × 20 = **0.625**\n\n   Alternative quick method:\n   \\(\\frac{1.25 \\times 0.025}{0.05} = 1.25 \\times \\frac{0.025}{0.05} = 1.25 \\times 0.5 = 0.625\\)\n\n3. Round 0.625 to 1 decimal place:\n   - Second decimal digit is 2 < 5 → round down\n   → **0.6**\n\nCorrect answer: **0.6** (option C)"
},
  {
    id: 34,
    section: "Approximations and Significant Figures",
    instruction: "Find the square root of the expression.",
    text: "Find the **square root of 170 - 20√30**.",
    options: ["2√10 - 5", "3√5 - 8√6", "2√5 - 5√6", "5√5 - 2√6"],
    answer: "2√5 - 5√6",
    explanation: "User bolded C."
  },
  {
    id: 35,
    section: "Approximations and Significant Figures",
    instruction: "Find the standard deviation.",
    text: "Find the **standard deviation of 2, 3, 5 and 6**.",
    options: ["√2.5", "√10", "√6", "√0.4"],
    answer: "√2.5",
    explanation: "Mean = (2+3+5+6)/4 = 4. Variance = [(2-4)^2 + (3-4)^2 + (5-4)^2 + (6-4)^2]/4 = [4+1+1+4]/4 = 10/4 = 2.5. SD = √2.5."
  },
  {
    id: 36,
    section: "Approximations and Significant Figures",
    instruction: "Find the standard deviation.",
    text: "Find the **standard deviation of 2, 3, 8, 10 and 12**.",
    options: ["3.9", "4.9", "5.9", "6.9"],
    answer: "3.9",
    explanation: "User bolded A."
  },
  {
    id: 37,
    section: "Approximations and Significant Figures",
    instruction: "Find the mean mark from the frequency table.",
    text: "The table below shows the marks obtained by a group of students:\n\n| Mark (x) | 1 | 2 | 3 | 4 |\n| :--- | :--- | :--- | :--- | :--- |\n| Frequency (f) | 2 | 2 | 8 | 12 |\n\nCalculate the mean mark.",
    options: ["3.2", "3.0", "3.1", "3.3"],
    answer: "3.3",
    explanation: "Σfx = (1×2) + (2×2) + (3×8) + (4×12) = 2 + 4 + 24 + 48 = 78. Σf = 2 + 2 + 8 + 12 = 24. Mean = 78 / 24 = 3.25, which rounds to 3.3."
  },
  {
    id: 38,
    section: "Approximations and Significant Figures",
    instruction: "Calculate the mean height.",
    text: "Calculate the **mean height** of heights **1.35, 1.25, 1.35, 1.40, 1.35, 1.45, 1.50, 1.35, 1.50 and 1.20**.",
    options: ["1.35", "1.36", "1.37", "1.38"],
    answer: "1.37",
    explanation: "Sum = 13.7. Mean = 13.7 / 10 = 1.37."
  },
{
  id: 39,
  section: "Approximations and Significant Figures",
  instruction: "Evaluate the variance of the data set.",
  text: "Find the variance of the following set of numbers: 3, 5, 7.",
  options: ["2", "3", "5", "4"],
  answer: "4",
  explanation: "1. Calculate Mean: (3+5+7)/3 = 5.\n2. Calculate squared deviations from mean:\n(3-5)² = 4\n(5-5)² = 0\n(7-5)² = 4\n3. Average of squared deviations (Variance): (4+0+4)/2 = 4.\nNote: For population variance of this set, result is 2.67; for sample variance (n-1), result is 4."
},
  {
    id: 40,
    section: "Approximations and Significant Figures",
    instruction: "Evaluate the standard deviation.",
    text: "Evaluate the **standard deviation** of 5, 4, 3, 2, 1.",
    options: ["√10", "√2", "√3", "√6"],
    answer: "√2",
    explanation: "Mean = 3. Variance = [(5-3)^2 + (4-3)^2 + (3-3)^2 + (2-3)^2 + (1-3)^2]/5 = [4+1+0+1+4]/5 = 10/5 = 2. SD = √2."
  },
{
  id: 41,
  section: "Approximations and Significant Figures",
  instruction: "Find the mean score of the distribution.",
  text: "The sum of the arithmetic scores of 20 children is 100. Find the mean score.",
  options: ["6", "5", "7", "4"],
  answer: "5",
  explanation: "The mean is calculated by dividing the sum of all scores by the total number of scores.\n\nMean = Total Sum / Number of Scores\nMean = 100 / 20\nMean = 5\n\nCorrect answer: 5 (Option B)."
},
  
 {
  id: 42,
  section: "Approximations and Significant Figures",
  instruction: "Find the total surface area of the cylindrical pipe.",
  text: "A cylindrical pipe is 50 cm long and has a radius of 7 cm. If one end of the pipe is open, find the total surface area in terms of π.",
  options: ["100π", "98π", "350π", "749π"],
  answer: "749π",
  explanation: "For a cylinder with one end open:\nTotal Surface Area = Curved Surface Area + Area of one base\nFormula: TSA = 2πrh + πr²\n\nGiven: r = 7, h = 50\nTSA = 2 × π × 7 × 50 + π × (7²)\nTSA = 700π + 49π\nTSA = 749π\n\nCorrect answer: 749π (Option D)."
},
  {
    id: 43,
    section: "Approximations and Significant Figures",
    instruction: "Find the radius of the sphere.",
    text: "Find the **radius** of a sphere whose surface area is **154 cm²**.",
    options: ["7.00 cm", "3.50 cm", "3.00 cm", "1.75 cm"],
    answer: "3.50 cm",
    explanation: "SA = 4πr² = 154. 4 * (22/7) * r² = 154 => r² = (154 * 7) / 88 = 12.25 => r = 3.5 cm."
  },
  {
    id: 44,
    section: "Approximations and Significant Figures",
    instruction: "Calculate the area of the sector.",
    text: "Calculate the **area of a sector** with an angle of **70°** and radius **6 cm**.",
    options: ["22 cm²", "44 cm²", "66 cm²", "88 cm²"],
    answer: "22 cm²",
    explanation: "Area = (70/360) * (22/7) * 6 * 6 = (1/36) * 10 * 22 * 36 / 10 = 22 cm²."
  },
 {
  id: 45,
  section: "Approximations and Significant Figures",
  instruction: "Find the depth of the cylindrical tank.",
  text: "A cylindrical tank has a capacity of 19,712 m³ and a base radius of 28 m. Find the depth of the tank.",
  options: ["8.0 m", "7.5 m", "5.0 m", "2.5 m"],
  answer: "8.0 m",
  explanation: "Formula: Volume (V) = πr²h\nGiven: V = 19,712, r = 28, π = 22/7\n\n19,712 = (22/7) × 28 × 28 × h\n19,712 = 22 × 4 × 28 × h\n19,712 = 2,464 × h\nh = 19,712 / 2,464\nh = 8.0 m\n\nCorrect answer: 8.0 m (Option A)."
},

  // Fractions and Ratios
  {
    id: 46,
    section: "Fractions and Ratios",
    instruction: "Find the smallest share based on the ratio.",
    text: "Three girls share a number of apples in the **ratio 5:3:2**. If the **highest share is 40 apples**, find the smallest share.",
    options: ["16", "38", "36", "24"],
    answer: "16",
    explanation: "5 parts = 40 => 1 part = 8. Smallest share = 2 parts = 2 * 8 = 16."
  },
  {
    id: 47,
    section: "Fractions and Ratios",
    instruction: "Evaluate the expression involving ratios.",
    text: "If the numbers **M, N, Q are in the ratio 5:4:3**, evaluate an expression involving these variables.",
    options: ["0.5", "1", "1.5", "2"],
    answer: "1",
    explanation: "User bolded C (1)."
  },
  {
    id: 48,
    section: "Fractions and Ratios",
    instruction: "Calculate the amount of an ingredient in a mixture.",
    text: "A baking recipe calls for **2.5kg of sugar and 4.5kg of flour**. How much sugar is used in **24.5kg of the mixture**?",
    options: ["12.25kg", "6.75kg", "8.75kg", "15.75kg"],
    answer: "8.75kg",
    explanation: "Ratio Sugar:Flour = 2.5:4.5 = 5:9. Total parts = 14. Sugar = (5/14) * 24.5 = 5 * 1.75 = 8.75kg."
  },
  {
    id: 49,
    section: "Fractions and Ratios",
    instruction: "Find the total profit based on the ratio and difference.",
    text: "A construction company’s profit is divided in the **ratio 4:5**. One partner received **₦5,000 more** than the other. What is the **total profit**?",
    options: ["₦20,000", "₦25,000", "₦50,000", "₦45,000"],
    answer: "45,000",
    explanation: "Difference in parts = 5 - 4 = 1 part. 1 part = 5,000. Total parts = 9. Total profit = 9 * 5,000 = ₦45,000."
  },
  {
    id: 50,
    section: "Fractions and Ratios",
    instruction: "Find the combined ratio p:q:r.",
    text: "If **p:q = 2/3 : 5/6** and **q:r = 3/4 : 1/2**, find **p:q:r**.",
    options: ["9:10:15", "12:15:16", "12:15:10", "10:15:24"],
    answer: "12:15:10",
    explanation: "p:q = 4:5. q:r = 3:2. To combine, make q same: p:q = 12:15, q:r = 15:10. So p:q:r = 12:15:10."
  },
 {
  id: 51,
  section: "Fractions and Ratios",
  instruction: "Simplify the expression.",
  text: "Simplify the expression: \\( (\\frac{1}{3} - \\frac{1}{4}) \\times \\frac{1}{3} \\).",
  options: ["1/12", "1/24", "1/18", "1/36"],
  answer: "1/36",
  explanation: "Step-by-step calculation:\n\n1. Solve the bracket: (1/3 - 1/4)\n   LCM of 3 and 4 is 12.\n   (4 - 3) / 12 = 1/12\n\n2. Multiply by the outer fraction:\n   (1/12) × (1/3) = 1/36\n\nCorrect answer: 1/36 (Option D)."
},
 {
  id: 52,
  section: "Fractions and Ratios",
  instruction: "Simplify the sum of the fractions.",
  text: "Simplify: \\( \\frac{1}{12} - \\frac{1}{18} \\).",
  options: ["1/12", "1/24", "1/18", "1/36"],
  answer: "1/36",
  explanation: "Step-by-step calculation:\n\n1. Find the LCM of 12 and 18, which is 36.\n2. Convert fractions:\n   1/12 = 3/36\n   1/18 = 2/36\n3. Subtract:\n   3/36 - 2/36 = 1/36\n\nCorrect answer: 1/36 (Option D)."
},
  {
    id: 53,
    section: "Fractions and Ratios",
    instruction: "Evaluate the complex fraction.",
    text: "Evaluate the fraction **(2/3 + 1/5) / (1/3 - 1/5)**.",
    options: ["11/2", "13/2", "15/2", "17/2"],
    answer: "13/2",
    explanation: "Numerator = (10+3)/15 = 13/15. Denominator = (5-3)/15 = 2/15. (13/15) / (2/15) = 13/2."
  },
  {
    id: 54,
    section: "Fractions and Ratios",
    instruction: "Find the probability of picking a prime number.",
    text: "Find the **probability** that a number picked from the set {43, 44, ..., 60} is **prime**.",
    options: ["2/18", "3/18", "4/18", "5/18"],
    answer: "4/18",
    explanation: "Set size = 18. Primes: 43, 47, 53, 59. Count = 4. Prob = 4/18."
  },
  {
    id: 55,
    section: "Fractions and Ratios",
    instruction: "Find the probability of students offering both subjects.",
    text: "In a class of 60 students, **30 offer Physics** and **40 offer Chemistry**. Find the **probability** a student offers both.",
    options: ["1/6", "1/3", "1/2", "2/3"],
    answer: "1/6",
    explanation: "User bolded A (1/6). *Note: Min overlap is 10. 10/60 = 1/6.*"
  },
  {
    id: 56,
    section: "Fractions and Ratios",
    instruction: "Find the median and range of the data.",
    text: "Find the **median and range** of the data: 0, 1, 1, 1, 1, 2, 2, ...",
    options: ["(2, 4)", "(3, 5)", "(2, 5)", "(3, 4)"],
    answer: "(3, 5)",
    explanation: "User bolded B."
  },
  {
    id: 57,
    section: "Fractions and Ratios",
    instruction: "Calculate the number of ways to choose a committee.",
    text: "In how many ways can a **committee of 2 women and 3 men** be chosen from 5 women and 6 men?",
    options: ["150", "200", "250", "300"],
    answer: "200",
    explanation: "Ways = 5C2 * 6C3 = 10 * 20 = 200."
  },
  {
    id: 58,
    section: "Fractions and Ratios",
    instruction: "Find the probability of picking a specific fruit.",
    text: "A bag contains **9 apples, 8 bananas, and 7 oranges**. Find the probability of picking **neither an apple nor an orange**.",
    options: ["1/4", "1/2", "1/3", "2/3"],
    answer: "1/3",
    explanation: "Total = 24. Neither apple nor orange = Banana = 8. Prob = 8/24 = 1/3."
  },
  {
  id: 59,
  section: "Fractions and Ratios",
  instruction: "Simplify the exponential expression.",
  text: "Simplify \\( \\frac{3^{n+1} \\times 27^{n+1}}{81^n} \\).",
  options: ["27", "81", "9", "3"],
  answer: "81",
  explanation: "Step-by-step calculation:\n\n1. Express all terms in base 3:\n   3^{n+1} remains 3^{n+1}\n   27^{n+1} = (3³)^{n+1} = 3^{3n+3}\n   81^n = (3⁴)^n = 3^{4n}\n\n2. Combine the numerator using the addition law (aⁿ × aᵐ = aⁿ⁺ᵐ):\n   3^{(n+1) + (3n+3)} = 3^{4n+4}\n\n3. Apply the division law (aⁿ / aᵐ = aⁿ⁻ᵐ):\n   3^{4n+4} / 3^{4n} = 3^{(4n+4 - 4n)} = 3⁴\n\n4. Evaluate 3⁴:\n   3 × 3 × 3 × 3 = 81\n\nCorrect answer: 81 (Option B)."
},
{
  id: 60,
  section: "Fractions and Ratios",
  instruction: "Find the value of r in the base conversion.",
  text: "Find the value of r if \\( 6r7_{8} = 407_{10} \\).",
  options: ["1", "2", "3", "4"],
  answer: "2",
  explanation: "Step-by-step calculation:\n\n1. Expand the base 8 number (6r7) in powers of 8:\n   (6 × 8²) + (r × 8¹) + (7 × 8⁰) = 407\n\n2. Simplify the terms:\n   (6 × 64) + 8r + (7 × 1) = 407\n   384 + 8r + 7 = 407\n\n3. Solve for r:\n   391 + 8r = 407\n   8r = 407 - 391\n   8r = 16\n   r = 16 / 8 = 2\n\nCorrect answer: 2 (Option B)."
}
];
