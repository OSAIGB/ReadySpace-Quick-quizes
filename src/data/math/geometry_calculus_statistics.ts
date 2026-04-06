import { Question } from '../../types';

export const GEOMETRY_CALCULUS_STATISTICS_QUESTIONS: Question[] = [
  {
    id: 61,
    section: "Arithmetic and Base Systems",
    instruction: "Find the value of q in the base conversion.",
    text: "If **2q3₅ = 77₈**, find **q**.",
    options: ["2", "1", "4", "0"],
    answer: "2",
    explanation: "2(25) + 5q + 3 = 7(8) + 7 => 50 + 5q + 3 = 56 + 7 => 53 + 5q = 63 => 5q = 10 => q = 2."
  },
  {
    id: 62,
    section: "Arithmetic and Base Systems",
    instruction: "Convert the decimal number to base three.",
    text: "Convert **76₁₀** to a number in **base three**.",
    options: ["2211", "2121", "1212", "1122"],
    answer: "2211",
    explanation: "76 / 3 = 25 R 1; 25 / 3 = 8 R 1; 8 / 3 = 2 R 2; 2 / 3 = 0 R 2. Result: 2211₃."
  },
  {
    id: 63,
    section: "Arithmetic and Base Systems",
    instruction: "Convert the decimal number to base two.",
    text: "Write the decimal number **39** to **base 2**.",
    options: ["100111", "110111", "111001", "100101"],
    answer: "100111",
    explanation: "39 / 2 = 19 R 1; 19 / 2 = 9 R 1; 9 / 2 = 4 R 1; 4 / 2 = 2 R 0; 2 / 2 = 1 R 0; 1 / 2 = 0 R 1. Result: 100111₂."
  },
  {
    id: 64,
    section: "Arithmetic and Base Systems",
    instruction: "Convert the number from base five to base eight.",
    text: "Convert **241₅** to **base 8**.",
    options: ["71", "107", "176", "241"],
    answer: "107",
    explanation: "241₅ = 2(25) + 4(5) + 1 = 50 + 20 + 1 = 71₁₀. 71 / 8 = 8 R 7; 8 / 8 = 1 R 0; 1 / 8 = 0 R 1. Result: 107₈."
  },
  {
    id: 65,
    section: "Percentages and Interest",
    instruction: "Calculate the discounted price.",
    text: "A businessman decided to give **10% discount** on all the purchases from his store. How much would a customer pay for a shirt originally marked **₦540**?",
    options: ["₦594.00", "₦550.00", "₦530.00", "₦486.00"],
    answer: "₦486.00",
    explanation: "Discount = 0.10 * 540 = 54. Price = 540 - 54 = 486."
  },
  {
    id: 66,
    section: "Fractions and Ratios",
    instruction: "Calculate the cost of deposition.",
    text: "If the cost of electricity required to deposit **1g of magnesium** is **₦1.00**, how much would it cost to deposit **5g of Silver**? (Mg=24, Ag=108, 1 Faraday=96500)",
    options: ["5.63k", "563k", "6.05k", "605k"],
    answer: "5.63k",
    explanation: "Magnesium is divalent (equivalent weight = 24/2 = 12). So 1g of Mg requires 1/12 Faraday and costs ₦1.00. Therefore, 1 Faraday costs ₦12.00. Silver is monovalent (equivalent weight = 108). 5g of Ag requires 5/108 Faraday. Cost = (5/108) × 12 ≈ 0.5556 (i.e. 5.56k ≈ 5.63k)."
  },
  {
    id: 67,
    section: "Decimals and Standard Form",
    instruction: "Evaluate the logarithm using given values.",
    text: "Given that **log 2 = 0.3010** and **log 7 = 0.8451**, evaluate **log 112**.",
    options: ["2.5441", "2.0491", "2.1461", "3.1461"],
    answer: "2.0491",
    explanation: "log 112 = log(16 * 7) = 4 log 2 + log 7 = 4(0.3010) + 0.8451 = 1.2040 + 0.8451 = 2.0491."
  },
  {
    id: 68,
    section: "Decimals and Standard Form",
    instruction: "Simplify the logarithmic expression.",
    text: "Simplify **log₂₇ 3 + 2 log₉ 3 - log₅₄ 3**.",
    options: ["2 + log₂ 3", "1 - log 3", "-log₂ 3", "4/3 - 1/(log₃ 2 + 3)"],
    answer: "4/3 - 1/(log₃ 2 + 3)",
    explanation: "log₂₇ 3 = log₃ 3 / log₃ 27 = 1/3. 2 log₉ 3 = 2 × (log₃ 3 / log₃ 9) = 2 × (1/2) = 1. log₅₄ 3 = log₃ 3 / log₃ 54 = 1 / (log₃(2×27)) = 1 / (3 + log₃ 2). Therefore, 1/3 + 1 - 1/(3 + log₃ 2) = 4/3 - 1/(log₃ 2 + 3)."
  },
  {
    id: 69,
    section: "Algebra",
    instruction: "Make Q the subject of the formula.",
    text: "Make **Q** the subject of the formula if **P = M/5(X + Q) + 1**.",
    options: ["Q = 5(P-1)/M - X", "Q = (5P-1)/M - X", "Q = (P-1)/5M - X", "Q = 5M/(P-1) - X"],
    answer: "Q = 5(P-1)/M - X",
    explanation: "P - 1 = M/5(X + Q) => 5(P-1)/M = X + Q => Q = 5(P-1)/M - X."
  },
  {
    id: 70,
    section: "Algebra",
    instruction: "Find the other factor of the expression.",
    text: "If **9x² + 6xy + 4y²** is a factor of **27x³ - 8y³**, find the other factor.",
    options: ["3x - 2y", "2y - 3x", "2y + 3x", "3x + 2y"],
    answer: "3x - 2y",
    explanation: "a³ - b³ = (a - b)(a² + ab + b²). Here a = 3x, b = 2y. So 27x³ - 8y³ = (3x - 2y)(9x² + 6xy + 4y²)."
  },
  {
    id: 71,
    section: "Algebra",
    instruction: "Factorize the expression completely.",
    text: "Factorize completely **9y² - 16x²**.",
    options: ["(3y - 2x)(3y + 4x)", "(3y + 4x)(3y + 4x)", "(3y + 2x)(3y - 4x)", "(3y - 4x)(3y + 4x)"],
    answer: "(3y - 4x)(3y + 4x)",
    explanation: "Difference of squares: a² - b² = (a - b)(a + b). (3y)² - (4x)² = (3y - 4x)(3y + 4x)."
  },
  {
    id: 72,
    section: "Algebra",
    instruction: "Solve the simultaneous equations.",
    text: "Solve for **x and y** if **x - y = 2** and **x² - y² = 8**.",
    options: ["(1, 3)", "(3, 1)", "(-1, 3)", "(-3, 1)"],
    answer: "(3, 1)",
    explanation: "x² - y² = (x-y)(x+y) = 8 => 2(x+y) = 8 => x+y = 4. Adding x-y=2 and x+y=4 gives 2x=6 => x=3. Then y=1."
  },
  {
    id: 73,
    section: "Algebra",
    instruction: "Calculate the value using direct variation.",
    text: "If **y** varies directly as the **square root of x** and **y=3 when x=16**, calculate **y when x=64**.",
    options: ["5", "12", "6", "3"],
    answer: "6",
    explanation: "y = k√x => 3 = k√16 => 3 = 4k => k = 3/4. y = (3/4)√64 = (3/4)*8 = 6."
  },
  {
    id: 74,
    section: "Algebra",
    instruction: "Calculate the value using inverse variation.",
    text: "**T** varies inversely as the **cube of R**. When **R=3, T=2/81**, find **T when R=2**.",
    options: ["1/12", "1/18", "1/24", "1/27"],
    answer: "1/12",
    explanation: "T = k/R³ => 2/81 = k/27 => k = 2/3. T = (2/3) / 2³ = (2/3) / 8 = 1/12."
  },
  {
    id: 75,
    section: "Algebra",
    instruction: "Solve the word problem involving inverse variation.",
    text: "When repaying a loan the number of monthly payments, **m**, varies inversely with the amount of each payment **₦A**. If the loan can be repaid by **10 monthly payments of ₦1,350**, how long does it take to repay the loan with monthly payments of **₦750**?",
    options: ["100", "90", "18", "9"],
    answer: "18",
    explanation: "m = k/A => 10 = k/1350 => k = 13500. m = 13500 / 750 = 18."
  },
  {
    id: 76,
    section: "Inequalities and Sets",
    instruction: "Solve the compound inequality.",
    text: "Solve the inequality **-6 \\le 4 - 2x < 5 - x**.",
    options: ["-1 \\le x < 6", "-1 < x \\le 5", "-1 < x < 5", "-1 \\le x \\le 6"],
    answer: "-1 < x \\le 5",
    explanation: "-6 <= 4-2x => 2x <= 10 => x <= 5. 4-2x < 5-x => -x < 1 => x > -1. Result: -1 < x <= 5."
  },
  {
    id: 77,
    section: "Inequalities and Sets",
    instruction: "Find the range of values for x.",
    text: "For what range of values of **x** is **1/2 x + 1/4 > 1/3 x + 1/2**?",
    options: ["x > -3/2", "x > 3/2", "x < 3/2", "x > 2/3"],
    answer: "x > 3/2",
    explanation: "6x + 3 > 4x + 6 => 2x > 3 => x > 3/2."
  },
  {
    id: 78,
    section: "Inequalities and Sets",
    instruction: "Solve the quadratic inequality.",
    text: "Solve the inequality **x² + 2x > 15**.",
    options: ["x < -3 or x > 5", "-5 < x < 3", "x < 3 or x > 5", "x > 3 or x < -5"],
    answer: "x > 3 or x < -5",
    explanation: "x² + 2x - 15 > 0 => (x+5)(x-3) > 0. Critical points -5, 3. Solution: x > 3 or x < -5."
  },
  {
    id: 79,
    section: "Inequalities and Sets",
    instruction: "Find the intersection of the two sets.",
    text: "In a survey of **50 newspaper readers**, **40 read Champion** and **30 read Guardian**, how many read both papers?",
    options: ["15", "5", "10", "20"],
    answer: "20",
    explanation: "n(A U B) = n(A) + n(B) - n(A n B) => 50 = 40 + 30 - x => x = 20."
  },
  {
    id: 80,
    section: "Inequalities and Sets",
    instruction: "Find the intersection of the two sets.",
    text: "If **P = {x: even numbers, -1 < x \\le 20}** and **Q = {x: multiples of 3, -2 < x \\le 25}**, find **P \\cap Q**.",
    options: ["{6, 12, 18}", "{3, 6, 9, 12, 15, 18}", "{3, 6, 11, 13}", "{6, 12, 18, 24}"],
    answer: "{6, 12, 18}",
    explanation: "P = {2,4,6,8,10,12,14,16,18,20}. Q = {0,3,6,9,12,15,18,21,24}. Intersection = {6, 12, 18}."
  },
  {
    id: 81,
    section: "Progressions",
    instruction: "Find the 10th term of the arithmetic progression.",
    text: "The **3rd term** of an arithmetic progression is **-9** and the **7th term** is **-29**. Find the **10th term**.",
    options: ["44", "-165", "-44", "165"],
    answer: "-44",
    explanation: "a+2d = -9, a+6d = -29 => 4d = -20 => d = -5. a = 1. T₁₀ = 1 + 9(-5) = -44."
  },
  {
    id: 82,
    section: "Progressions",
    instruction: "Find the sum of the first 18 terms of the series.",
    text: "The **sum of the first 18 terms** of the series **3, 6, 9...**",
    options: ["505", "513", "433", "635"],
    answer: "513",
    explanation: "S₁₈ = (18/2)[2(3) + 17(3)] = 9[6 + 51] = 9 * 57 = 513."
  },
  {
    id: 83,
    section: "Progressions",
    instruction: "Find the eleventh term of the geometric progression.",
    text: "Find the **eleventh term** of the progression **4, 8, 16, …**",
    options: ["2¹³", "2¹²", "2¹¹", "2¹⁶"],
    answer: "2¹²",
    explanation: "T₁₁ = ar¹⁰ = 4 * 2¹⁰ = 2² * 2¹⁰ = 2¹²."
  },
  {
    id: 84,
    section: "Geometry and Mensuration",
    instruction: "Find the size of each interior angle of the regular polygon.",
    text: "What is the size of each **interior angle** of a **12-sided regular polygon**?",
    options: ["120°", "150°", "30°", "180°"],
    answer: "150°",
    explanation: "Angle = (n-2)*180/n = 10*180/12 = 150°."
  },
  {
    id: 85,
    section: "Geometry and Mensuration",
    instruction: "Find the maximum possible area of the square.",
    text: "A circle of **perimeter 28 cm** is opened to form a **square**. What is the **maximum possible area** of the square?",
    options: ["56 cm²", "49 cm²", "98 cm²", "28 cm²"],
    answer: "49 cm²",
    explanation: "Perimeter = 28. Square side = 28/4 = 7. Area = 7² = 49."
  },
  {
    id: 86,
    section: "Geometry and Mensuration",
    instruction: "Calculate the volume of water the tank can hold.",
    text: "A **solid metal cube of side 3 cm** is placed in a **rectangular tank** of dimension **3, 4 and 5 cm**. What **volume of water** can the tank now hold?",
    options: ["48 cm³", "33 cm³", "60 cm³", "27 cm³"],
    answer: "33 cm³",
    explanation: "Tank Vol = 3*4*5 = 60. Cube Vol = 3³ = 27. Water Vol = 60 - 27 = 33."
  },
  {
    id: 87,
    section: "Geometry and Mensuration",
    instruction: "Calculate the area of the sector.",
    text: "An arc subtends an angle of **50°** at the centre of a circle of **radius 6 cm**. Calculate the **area of the sector** formed.",
    options: ["5π cm²", "10π cm²", "15π cm²", "20π cm²"],
    answer: "5π cm²",
    explanation: "Area = (50/360) * π * 6² = (5/36) * π * 36 = 5π."
  },
  {
    id: 88,
    section: "Geometry and Mensuration",
    instruction: "Find the total surface area of the pipe.",
    text: "A **cylindrical pipe 50 m long** with **radius 7 m** has one end open. What is the **total surface area** of the pipe?",
    options: ["700π m²", "98π m²", "350π m²", "749π m²"],
    answer: "749π m²",
    explanation: "Area = 2πrh + πr² = 2π(7)(50) + π(7²) = 700π + 49π = 749π."
  },
  {
    id: 89,
    section: "Geometry and Mensuration",
    instruction: "Find the radius of the sphere.",
    text: "Find the **radius** of a sphere whose surface area is **154 cm²**.",
    options: ["7.00 cm", "3.50 cm", "3.00 cm", "1.75 cm"],
    answer: "3.50 cm",
    explanation: "4πr² = 154 => 4*(22/7)*r² = 154 => r² = 12.25 => r = 3.5."
  },
  {
    id: 90,
    section: "Coordinate Geometry, Trigonometry, and Bearings",
    instruction: "Find the locus of the point.",
    text: "What is the **locus** of a point that is equidistant from points **P(1,3) and Q(3,5)**?",
    options: ["y = -x + 6", "y = -x + 6", "y = -x - 6", "y = x - 6"],
    answer: "y = -x + 6",
    explanation: "Midpoint (2,4). Grad PQ = 1. Perp grad = -1. y - 4 = -1(x - 2) => y = -x + 6."
  },
  {
    id: 91,
    section: "Coordinate Geometry, Trigonometry, and Bearings",
    instruction: "Find the gradient of the line.",
    text: "Find the **gradient** of the line passing through the points **P(1, 1) and Q(2, 5)**.",
    options: ["4", "2", "3", "5"],
    answer: "4",
    explanation: "m = (5-1)/(2-1) = 4."
  },
  {
    id: 92,
    section: "Coordinate Geometry, Trigonometry, and Bearings",
    instruction: "Find the equation of the line.",
    text: "Find the **equation of a line parallel to y = -4x + 2** passing through **(2,3)**.",
    options: ["y - 4x + 11 = 0", "y - 4x - 11 = 0", "y + 4x + 11 = 0", "y + 4x - 11 = 0"],
    answer: "y + 4x - 11 = 0",
    explanation: "y - 3 = -4(x - 2) => y - 3 = -4x + 8 => y + 4x - 11 = 0."
  },
  {
    id: 93,
    section: "Coordinate Geometry, Trigonometry, and Bearings",
    instruction: "Find the value of sin θ.",
    text: "If **cot θ = 8/15**, where θ is acute, find **sin θ**.",
    options: ["15/17", "8/17", "15/8", "17/15"],
    answer: "15/17",
    explanation: "cot = adj/opp. hyp = sqrt(8²+15²) = 17. sin = opp/hyp = 15/17."
  },
  {
    id: 94,
    section: "Coordinate Geometry, Trigonometry, and Bearings",
    instruction: "Find the bearing of X from Z.",
    text: "A man walks **100 m due West** from a point X to Y, he then walks **100 m due North** to a point Z. Find the **bearing of X from Z**.",
    options: ["195°", "135°", "225°", "045°"],
    answer: "135°",
    explanation: "Z is NW of X. X is SE of Z. Bearing SE is 135°."
  },
  {
    id: 95,
    section: "Coordinate Geometry, Trigonometry, and Bearings",
    instruction: "Calculate the distance QR.",
    text: "Point P, Q and R are located such that **Q is 12 km north of P** and **R is on a bearing of 270° from P**. If **PR = 6 km**, calculate **QR**.",
    options: ["18 km", "13.4 km", "13 km", "10.4 km"],
    answer: "13.4 km",
    explanation: "QR = sqrt(12² + 6²) = sqrt(180) ≈ 13.4."
  },
  {
    id: 96,
    section: "Calculus",
    instruction: "Find the derivative of the function.",
    text: "If **y = (2x + 1)³**, find **dy/dx**.",
    options: ["3(2x+1)²", "3(2x + 1)", "6(2x + 1)", "6(2x+1)²"],
    answer: "6(2x+1)²",
    explanation: "Chain rule: 3(2x+1)² * 2 = 6(2x+1)²."
  },
  {
    id: 97,
    section: "Calculus",
    instruction: "Find the derivative of the function.",
    text: "If **y = x sin x**, find **dy/dx**.",
    options: ["sin x + x cos x", "cos x + x sin x", "sin x - x cos x", "x cos x - sin x"],
    answer: "sin x + x cos x",
    explanation: "Product rule: 1*sin x + x*cos x."
  },
  {
    id: 98,
    section: "Calculus",
    instruction: "Find the value of X at the minimum point.",
    text: "At what value of **X** does the function **y = -3 - 2x + x²** attain a minimum value?",
    options: ["1", "-4", "-1", "4"],
    answer: "1",
    explanation: "dy/dx = 2x - 2 = 0 => x = 1."
  },
  {
    id: 100,
    section: "Calculus",
    instruction: "Find the indefinite integral.",
    text: "Find **∫ (sin x + 2) dx**.",
    options: ["cos x + x² + k", "cos x + 2x + k", "-cos x + 2x + k", "-cos x + x² + k"],
    answer: "-cos x + 2x + k",
    explanation: "Integral of sin x is -cos x. Integral of 2 is 2x."
  },
  {
    id: 101,
    section: "Statistics and Probability",
    instruction: "Find the probability that all coins are heads.",
    text: "If **three unbiased coins** are tossed, find the probability that they are **all heads**.",
    options: ["1/8", "1/4", "1/2", "1/3"],
    answer: "1/8",
    explanation: "(1/2)³ = 1/8."
  },
  {
    id: 102,
    section: "Statistics and Probability",
    instruction: "Calculate the number of ways to arrange the letters.",
    text: "In how many ways can the letters of the word **ELATION** be arranged?",
    options: ["6!", "7!", "5!", "8!"],
    answer: "7!",
    explanation: "7 unique letters = 7!."
  },
  {
    id: 103,
    section: "Statistics and Probability",
    instruction: "Find the probability of picking a number divisible by both 2 and 3.",
    text: "What is the **probability** that an integer **x (1 \\le x \\le 25)** chosen at random is **divisible by both 2 and 3**?",
    options: ["4/25", "1/5", "1/25", "3/25"],
    answer: "4/25",
    explanation: "Divisible by 6: 6, 12, 18, 24. Count = 4. Prob = 4/25."
  }
];
