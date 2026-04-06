import { Question } from '../../types';

export const SCALARS_VECTORS_MOTION_QUESTIONS: Question[] = [
  // Definitions and Identification of Quantities
  {
    id: 61,
    section: "Definitions and Identification of Quantities",
    instruction: "Identify the property of scalars.",
    text: "**Scalars** are physical quantities that possess:",
    options: ["direction only", "magnitude only", "both magnitude and direction", "neither magnitude nor direction"],
    answer: "magnitude only",
    explanation: "Scalars are quantities that are fully described by a magnitude (or numerical value) alone."
  },
  {
    id: 62,
    section: "Definitions and Identification of Quantities",
    instruction: "Identify the property of vectors.",
    text: "**Vectors** are physical quantities that possess:",
    options: ["magnitude only", "direction only", "both magnitude and direction", "units only"],
    answer: "both magnitude and direction",
    explanation: "Vectors are quantities that are fully described by both a magnitude and a direction."
  },
  {
    id: 63,
    section: "Definitions and Identification of Quantities",
    instruction: "Identify the vector quantity.",
    text: "Which of the following is a **vector quantity**?",
    options: ["Distance", "Mass", "Displacement", "Temperature"],
    answer: "Displacement",
    explanation: "Displacement is a vector because it has both magnitude (distance) and direction."
  },
  {
    id: 64,
    section: "Definitions and Identification of Quantities",
    instruction: "Identify the scalar quantity.",
    text: "Which of the following is a **scalar quantity**?",
    options: ["Force", "Momentum", "Weight", "Density"],
    answer: "Density",
    explanation: "Density is a scalar quantity as it only has magnitude and no direction."
  },
  {
    id: 65,
    section: "Definitions and Identification of Quantities",
    instruction: "Identify the set of vectors.",
    text: "Identify the **set of vectors** from the following options:",
    options: ["Weight, displacement, and moment", "Velocity, volume, and upthrust", "Density, capacitance, and distance"],
    answer: "Weight, displacement, and moment",
    explanation: "Weight, displacement, and moment are all vector quantities."
  },
  {
    id: 66,
    section: "Definitions and Identification of Quantities",
    instruction: "Identify the set of scalars.",
    text: "Identify the **set of scalars** from the following options:",
    options: ["Momentum, force, and impulse", "volume, density, and distance", "Weight, mass, and velocity"],
    answer: "volume, density, and distance",
    explanation: "Volume, density, and distance are all scalar quantities."
  },
  {
    id: 67,
    section: "Definitions and Identification of Quantities",
    instruction: "Identify the quantity requiring magnitude and direction.",
    text: "A quantity which requires **magnitude and direction** to be specified is:",
    options: ["Temperature", "Distance", "Displacement", "Mass"],
    answer: "Displacement",
    explanation: "Displacement is a vector quantity, requiring both magnitude and direction."
  },
  {
    id: 68,
    section: "Definitions and Identification of Quantities",
    instruction: "Identify the pair of scalars.",
    text: "Which of the following pairs of physical quantities are **scalars only**?",
    options: ["volume and area", "moment and momentum", "length and displacement"],
    answer: "volume and area",
    explanation: "Volume and area are both scalar quantities."
  },
  {
    id: 69,
    section: "Definitions and Identification of Quantities",
    instruction: "Identify the non-scalar quantity.",
    text: "Which of the following is **NOT** a scalar quantity?",
    options: ["Density", "Mass", "Speed", "Weight"],
    answer: "Weight",
    explanation: "Weight is a force and therefore a vector quantity."
  },
  {
    id: 70,
    section: "Definitions and Identification of Quantities",
    instruction: "Identify the vector among electrical quantities.",
    text: "Which of the following is a **vector**?",
    options: ["Electric charge", "Electric potential difference", "Electric field", "Electrical capacitance"],
    answer: "Electric field",
    explanation: "Electric field (or electric field intensity) is a vector quantity."
  },
  {
    id: 71,
    section: "Definitions and Identification of Quantities",
    instruction: "Identify vector quantities from the list.",
    text: "Which of the following are **vector quantities**? I. Work, II. Displacement, III. Acceleration, IV. Electric field intensity.",
    options: ["I, II and III", "II, III and IV", "III, IV and V"],
    answer: "II, III and IV",
    explanation: "Displacement, acceleration, and electric field intensity are vectors. Work is a scalar."
  },
  {
    id: 72,
    section: "Definitions and Identification of Quantities",
    instruction: "Identify the scalar from the list.",
    text: "Identify which of the following is a **scalar**:",
    options: ["Impulse", "Electric potential", "Acceleration", "Momentum"],
    answer: "Electric potential",
    explanation: "Electric potential is a scalar quantity."
  },
  {
    id: 73,
    section: "Definitions and Identification of Quantities",
    instruction: "Classify pressure.",
    text: "**Pressure** is classified as a:",
    options: ["scalar", "vector"],
    answer: "scalar",
    explanation: "Pressure is a scalar quantity because it acts in all directions at a point."
  },
  {
    id: 74,
    section: "Definitions and Identification of Quantities",
    instruction: "Classify momentum.",
    text: "**Momentum** is classified as a:",
    options: ["scalar", "vector"],
    answer: "vector",
    explanation: "Momentum is the product of mass (scalar) and velocity (vector), making it a vector."
  },
  {
    id: 75,
    section: "Definitions and Identification of Quantities",
    instruction: "Classify acceleration due to gravity.",
    text: "**Acceleration due to gravity** is a:",
    options: ["scalar", "vector"],
    answer: "vector",
    explanation: "Acceleration is a vector quantity as it has a specific direction (towards the center of the Earth)."
  },

  // Measurement, Position, and Coordinates
  {
    id: 76,
    section: "Measurement, Position, and Coordinates",
    instruction: "Identify the reference for position.",
    text: "The **position of an object** is usually specified relative to a:",
    options: ["moving object", "fixed reference position or origin", "random point", "the object itself"],
    answer: "fixed reference position or origin",
    explanation: "Position is defined relative to a fixed point called the origin."
  },
  {
    id: 77,
    section: "Measurement, Position, and Coordinates",
    instruction: "Identify position notation in 2D.",
    text: "In a two-dimensional plane, the **position of an object P** is written as:",
    options: ["(x, y)", "(x, y, z)", "(r, θ)", "(m, s)"],
    answer: "(x, y)",
    explanation: "In a 2D Cartesian coordinate system, position is given by (x, y)."
  },
  {
    id: 78,
    section: "Measurement, Position, and Coordinates",
    instruction: "Identify how direction is described.",
    text: "The **direction of P relative to origin O** is often described by the:",
    options: ["angle θ which OP makes with a reference line", "total distance from O", "mass of the object", "time taken to reach P"],
    answer: "angle θ which OP makes with a reference line",
    explanation: "Direction is typically given as an angle relative to a reference axis (like the x-axis)."
  },
  {
    id: 79,
    section: "Measurement, Position, and Coordinates",
    instruction: "Identify correct precision for vernier calipers.",
    text: "Which reading gives the correct **precision** of the length of a rod using **vernier calipers**?",
    options: ["4.1 cm", "4.13 cm", "4.120 cm"],
    answer: "4.13 cm",
    explanation: "Vernier calipers typically have a precision of 0.01 cm."
  },
  {
    id: 80,
    section: "Measurement, Position, and Coordinates",
    instruction: "Identify correct precision for a metre rule.",
    text: "Which reading gives the correct **precision** of a measurement using a **metre rule**?",
    options: ["75 mm", "75.0 mm", "75.00 mm"],
    answer: "75.0 mm",
    explanation: "A metre rule has a precision of 1 mm, often recorded to 0.1 cm or 1.0 mm precision."
  },
  {
    id: 81,
    section: "Measurement, Position, and Coordinates",
    instruction: "Identify least possible error for a metre rule.",
    text: "The **least possible error** encountered when taking measurement with a **metre rule** is:",
    options: ["0.1 mm", "0.5 mm", "1.0 mm", "0.2 mm"],
    answer: "0.5 mm",
    explanation: "The least error is half of the smallest division (1 mm), which is 0.5 mm."
  },
  {
    id: 82,
    section: "Measurement, Position, and Coordinates",
    instruction: "Identify how to remove parallax error.",
    text: "To remove the **error of parallax** when using a metre rule, the eye should focus:",
    options: ["slantingly", "vertically downwards on the markings", "horizontally"],
    answer: "vertically downwards on the markings",
    explanation: "The line of sight must be perpendicular to the scale to avoid parallax."
  },
  {
    id: 83,
    section: "Measurement, Position, and Coordinates",
    instruction: "Identify what precision depends on.",
    text: "The **precision** of a measurement depends on the:",
    options: ["graduation of the instrument used", "weight of the object", "room temperature"],
    answer: "graduation of the instrument used",
    explanation: "Precision is determined by the smallest division or graduation on the measuring instrument."
  },
  {
    id: 84,
    section: "Measurement, Position, and Coordinates",
    instruction: "Identify the instrument for paper thickness.",
    text: "Which instrument is most suitable for measuring the **thickness of a sheet of paper**?",
    options: ["Metre rule", "Micrometer screw gauge", "Pair of calipers"],
    answer: "Micrometer screw gauge",
    explanation: "A micrometer screw gauge is precise enough for very thin objects like paper."
  },
  {
    id: 85,
    section: "Measurement, Position, and Coordinates",
    instruction: "Identify location of first decimal place in vernier calipers.",
    text: "The **first decimal place** in a vernier caliper measurement is located:",
    options: ["on the major scale just before the zero mark of the vernier", "at the point of coincidence", "at the end of the rod"],
    answer: "on the major scale just before the zero mark of the vernier",
    explanation: "The main scale provides the first decimal place (in cm) or the whole number (in mm)."
  },

  // Concept of Distance and Displacement
  {
    id: 86,
    section: "Concept of Distance and Displacement",
    instruction: "Define displacement.",
    text: "**Displacement** is defined as the:",
    options: ["change in position along a specified direction", "total length of the path travelled", "speed in a given time"],
    answer: "change in position along a specified direction",
    explanation: "Displacement is a vector quantity representing the straight-line distance between two points in a specific direction."
  },
  {
    id: 87,
    section: "Concept of Distance and Displacement",
    instruction: "Calculate displacement for East and North walk.",
    text: "A man walks **1 km due East and then 1 km due North**. His **displacement** is:",
    options: ["$\\sqrt{2}$ km N 45° E", "1 km N 30° E", "2 km North"],
    answer: "$\\sqrt{2}$ km N 45° E",
    explanation: "Using Pythagoras: $\\sqrt{1^2 + 1^2} = \\sqrt{2}$. The direction is exactly North-East (45°)."
  },
  {
    id: 88,
    section: "Concept of Distance and Displacement",
    instruction: "Calculate displacement for West and South walk.",
    text: "A boy walks **10 m due West and then 10 m due South**. His **displacement** is:",
    options: ["20 m, S 30° W", "$10\\sqrt{2}$ m, S 45° W", "10 m, S 60° W"],
    answer: "$10\\sqrt{2}$ m, S 45° W",
    explanation: "Using Pythagoras: $\\sqrt{10^2 + 10^2} = 10\\sqrt{2}$. Direction is South-West (45°)."
  },
  {
    id: 89,
    section: "Concept of Distance and Displacement",
    instruction: "Calculate total displacement for multiple directions.",
    text: "A girl walks **12 m Northwards, 5 m Eastwards and 7 m Southwards**. Her total **displacement** is:",
    options: ["5 m North", "5 m East", "7.07 m, N 45° E", "24 m"],
    answer: "7.07 m, N 45° E",
    explanation: "Net North = 12 - 7 = 5m. Net East = 5m. Resultant = $\\sqrt{5^2 + 5^2} = \\sqrt{50} \\approx 7.07m$ at 45°."
  },
  {
    id: 90,
    section: "Concept of Distance and Displacement",
    instruction: "Calculate effective displacement along a canal edge.",
    text: "A boat travels **5 km** crossing a canal **3 km** wide to reach a point R. The **effective displacement** along the edge is:",
    options: ["3 km", "4 km", "5 km"],
    answer: "4 km",
    explanation: "Using Pythagoras: $\\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4 km$."
  },
  {
    id: 91,
    section: "Concept of Distance and Displacement",
    instruction: "Calculate distance during the 8th second.",
    text: "If a body starts from rest and moves with an acceleration of **8 $ms^{-2}$**, the distance during the **8th second** is:",
    options: ["256 m", "196 m", "60 m", "120 m"],
    answer: "60 m",
    explanation: "Distance in nth second = $u + \\frac{a}{2}(2n - 1)$. Here $0 + \\frac{8}{2}(2(8) - 1) = 4(15) = 60 m$."
  },
  {
    id: 92,
    section: "Concept of Distance and Displacement",
    instruction: "Identify displacement from a graph.",
    text: "For a body moving in a straight line, **displacement** is:",
    options: ["the area under a velocity-time graph", "the slope of a distance-time plot", "the area under an acceleration-time graph"],
    answer: "the area under a velocity-time graph",
    explanation: "The area under a velocity-time graph represents the displacement of the object."
  },
  {
    id: 93,
    section: "Concept of Distance and Displacement",
    instruction: "Identify if distance is independent of mass for a falling body.",
    text: "True or False: The **distance** covered by a falling body is independent of its mass.",
    options: ["True", "False"],
    answer: "True",
    explanation: "In the absence of air resistance, all bodies fall with the same acceleration (g), so distance is independent of mass."
  },
  {
    id: 94,
    section: "Concept of Distance and Displacement",
    instruction: "Identify velocity in a rest frame.",
    text: "In a **frame of reference** where an object is at rest, its **velocity** is:",
    options: ["zero", "constant", "infinite"],
    answer: "zero",
    explanation: "By definition, an object at rest has zero velocity relative to that frame."
  },
  {
    id: 95,
    section: "Concept of Distance and Displacement",
    instruction: "Identify what the slope of a distance-time plot gives.",
    text: "The **slope of a distance-time plot** gives the:",
    options: ["velocity", "acceleration", "displacement"],
    answer: "velocity",
    explanation: "The rate of change of distance with respect to time is velocity (or speed)."
  },

  // Relative Velocity
  {
    id: 96,
    section: "Relative Velocity",
    instruction: "Describe relative velocity.",
    text: "**Relative velocity** is best described as:",
    options: ["Velocity measured from the ground", "Velocity of one object with respect to another", "The sum of individual velocities"],
    answer: "Velocity of one object with respect to another",
    explanation: "Relative velocity is the velocity of an object as observed from another moving or stationary frame."
  },
  {
    id: 97,
    section: "Relative Velocity",
    instruction: "Calculate relative velocity for cars in the same direction.",
    text: "**Two cars** moving in the **same direction** have speeds of **100 $kmh^{-1}$** and **130 $kmh^{-1}$**. The **velocity of the faster car** measured by an observer in the slower car is:",
    options: ["230 $kmh^{-1}$", "200 $kmh^{-1}$", "30 $kmh^{-1}$"],
    answer: "30 $kmh^{-1}$",
    explanation: "Relative velocity in same direction = $130 - 100 = 30 kmh^{-1}$."
  },
  {
    id: 98,
    section: "Relative Velocity",
    instruction: "Calculate magnitude of relative velocity.",
    text: "A body A moves **Northwards** at **5 $kms^{-1}$**, and body B moves **N 60° E** at **4 $kms^{-1}$**. The **magnitude of the velocity of A relative to B** is:",
    options: ["2.5 $kms^{-1}$", "3.5 $kms^{-1}$", "4.6 $kms^{-1}$", "8.5 $kms^{-1}$"],
    answer: "4.6 $kms^{-1}$",
    explanation: "Using the law of cosines: $V_{rel} = \\sqrt{5^2 + 4^2 - 2(5)(4)\\cos(60°)} = \\sqrt{25 + 16 - 20} = \\sqrt{21} \\approx 4.58 kms^{-1}$."
  },
  {
    id: 99,
    section: "Relative Velocity",
    instruction: "Calculate resultant velocity downstream.",
    text: "A boat moves with a **velocity of 4 m/s in still water**. If the **river flows at 3 m/s**, the **resultant velocity** of the boat moving **downstream** is:",
    options: ["7 m/s", "5 m/s", "1 m/s"],
    answer: "7 m/s",
    explanation: "Downstream velocity = Boat speed + River speed = 4 + 3 = 7 m/s."
  },
  {
    id: 100,
    section: "Relative Velocity",
    instruction: "Identify relative speed for opposite directions.",
    text: "In calculating **relative velocity**, if two objects move in **opposite directions**, their relative speed is the:",
    options: ["sum of their speeds", "difference of their speeds"],
    answer: "sum of their speeds",
    explanation: "When moving towards or away from each other, speeds are added to find relative velocity."
  },

  // Vector Addition and Resultants
  {
    id: 101,
    section: "Vector Addition and Resultants",
    instruction: "Identify when resultant is maximum.",
    text: "The **resultant of two vectors** is **maximum** when the angle between them is:",
    options: ["0°", "90°,", "180°"],
    answer: "0°",
    explanation: "Resultant is maximum when vectors are in the same direction (0°)."
  },
  {
    id: 102,
    section: "Vector Addition and Resultants",
    instruction: "Identify when resultant is minimum.",
    text: "The **resultant of two vectors** is **minimum** when they are:",
    options: ["Parallel", "Anti-parallel (180°)", "Perpendicular"],
    answer: "Anti-parallel (180°)",
    explanation: "Resultant is minimum when vectors are in opposite directions (180°)."
  },
  {
    id: 103,
    section: "Vector Addition and Resultants",
    instruction: "Calculate resultant of perpendicular forces.",
    text: "The **resultant** of two forces, **6.0 N** and **8.0 N**, acting at **right angles** to each other is:",
    options: ["14.0 N", "12.0 N", "10.0 N", "13.0 N"],
    answer: "10.0 N",
    explanation: "Resultant = $\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 N$."
  },
  {
    id: 104,
    section: "Vector Addition and Resultants",
    instruction: "Calculate magnitude of resultant of equal perpendicular vectors.",
    text: "The **magnitude of the resultant** of two **equal vectors**, each of magnitude **K**, acting at **right angles** is:",
    options: ["K", "$K\\sqrt{2}$", "$K\\sqrt{3}$", "2K"],
    answer: "$K\\sqrt{2}$",
    explanation: "Resultant = $\\sqrt{K^2 + K^2} = \\sqrt{2K^2} = K\\sqrt{2}$."
  },
  {
    id: 105,
    section: "Vector Addition and Resultants",
    instruction: "Calculate force magnitude given resultant and angle.",
    text: "If the **resultant of two forces** is **50 N** and they are **perpendicular**, and one makes an angle of **30°** with the resultant, its magnitude is:",
    options: ["25.0 N", "43.3 N", "57.7 N"],
    answer: "43.3 N",
    explanation: "Force = $50 \\times \\cos(30°) = 50 \\times 0.866 = 43.3 N$."
  },
  {
    id: 106,
    section: "Vector Addition and Resultants",
    instruction: "Calculate cos θ for parallel resultant.",
    text: "Two forces, **12 N** and **16 N**, have a **resultant parallel to the 16 N force**. The value of **cos θ** is:",
    options: ["1.0", "3/4", "1/2", "0"],
    answer: "1.0",
    explanation: "If the resultant is parallel to one force, the other force must be in the same direction or zero component perpendicular. Here it implies they are parallel."
  },
  {
    id: 107,
    section: "Vector Addition and Resultants",
    instruction: "Calculate resultant of East and North-East forces.",
    text: "A force of **5 units East** and **4 units North-East** act on a particle. The **resultant** is:",
    options: ["$\\sqrt{3}$", "$3\\sqrt{2}$", "$\\sqrt{41 + 20\\sqrt{2}}$"],
    answer: "$\\sqrt{41 + 20\\sqrt{2}}$",
    explanation: "Using law of cosines: $R = \\sqrt{5^2 + 4^2 + 2(5)(4)\\cos(45°)} = \\sqrt{25 + 16 + 40(1/\\sqrt{2})} = \\sqrt{41 + 20\\sqrt{2}}$."
  },
  {
    id: 108,
    section: "Vector Addition and Resultants",
    instruction: "Identify what represents the resultant in a parallelogram.",
    text: "In the **parallelogram of vectors**, the **resultant** is represented by the:",
    options: ["diagonal of the parallelogram drawn from the point of intersection", "side of the parallelogram"],
    answer: "diagonal of the parallelogram drawn from the point of intersection",
    explanation: "The diagonal starting from the common origin of the two vectors represents their resultant."
  },
  {
    id: 109,
    section: "Vector Addition and Resultants",
    instruction: "Identify condition for equilibrium.",
    text: "One condition for **equilibrium** under parallel forces is that the **vector sum of the forces** is:",
    options: ["Positive", "Zero", "Average"],
    answer: "Zero",
    explanation: "For equilibrium, the net force (vector sum) must be zero."
  },
  {
    id: 110,
    section: "Vector Addition and Resultants",
    instruction: "Identify property of coplanar forces in equilibrium.",
    text: "When **three coplanar non-parallel forces** are in **equilibrium**, their:",
    options: ["lines of action are parallel", "lines of action meet at a point"],
    answer: "lines of action meet at a point",
    explanation: "For three non-parallel forces to be in equilibrium, they must be concurrent (meet at a point)."
  },

  // Resolution of Vectors
  {
    id: 111,
    section: "Resolution of Vectors",
    instruction: "Define resolution of vectors.",
    text: "**Resolution of vectors** is the process of:",
    options: ["replacing a single vector by two perpendicular components", "adding two vectors together", "finding the unit of a vector"],
    answer: "replacing a single vector by two perpendicular components",
    explanation: "Resolution is splitting a vector into components, usually horizontal and vertical."
  },
  {
    id: 112,
    section: "Resolution of Vectors",
    instruction: "Identify resolved component along x-direction.",
    text: "The **resolved component** of a vector **A** along the **x-direction** (at angle θ) is:",
    options: ["$A \\cos \\theta$", "$A \\sin \\theta$", "$A \\tan \\theta$"],
    answer: "$A \\cos \\theta$",
    explanation: "The horizontal component is adjacent to the angle, so $A \\cos \\theta$ is used."
  },
  {
    id: 113,
    section: "Resolution of Vectors",
    instruction: "Identify resolved component along y-direction.",
    text: "The **resolved component** of a vector **A** along the **y-direction** is:",
    options: ["$A \\cos \\theta$", "$A \\sin \\theta$"],
    answer: "$A \\sin \\theta$",
    explanation: "The vertical component is opposite to the angle, so $A \\sin \\theta$ is used."
  },
  {
    id: 114,
    section: "Resolution of Vectors",
    instruction: "Identify how to find magnitude from components.",
    text: "The **magnitude of a vector A** can be found from its resolved components $A_x$ and $A_y$ using:",
    options: ["$A = \\sqrt{A_x^2 + A_y^2}$", "$A = A_x + A_y$"],
    answer: "$A = \\sqrt{A_x^2 + A_y^2}$",
    explanation: "The magnitude is the hypotenuse of the triangle formed by its components."
  },
  {
    id: 115,
    section: "Resolution of Vectors",
    instruction: "Identify resolved component of weight along an inclined plane.",
    text: "The **resolved component** of a body's **weight (mg)** along an **inclined plane** at angle α is:",
    options: ["$mg \\sin \\alpha$", "$mg \\cos \\alpha$", "$mg \\tan \\alpha$"],
    answer: "$mg \\sin \\alpha$",
    explanation: "The component of weight acting down the plane is $mg \\sin \\alpha$."
  },
  {
    id: 116,
    section: "Resolution of Vectors",
    instruction: "Identify component of weight normal to the inclined plane.",
    text: "The **component of weight** acting **normal (perpendicular) to the inclined plane** is:",
    options: ["$mg \\sin \\alpha$", "$mg \\cos \\alpha$"],
    answer: "$mg \\cos \\alpha$",
    explanation: "The component of weight pressing into the plane is $mg \\cos \\alpha$."
  },
  {
    id: 117,
    section: "Resolution of Vectors",
    instruction: "Calculate effective horizontal force.",
    text: "A boy drags a bag with a **force of 2 N** at **60°** to the floor. The **effective horizontal force** is:",
    options: ["1 N", "2 N", "1.73 N"],
    answer: "1 N",
    explanation: "$F_x = 2 \\times \\cos(60°) = 2 \\times 0.5 = 1 N$."
  },
  {
    id: 118,
    section: "Resolution of Vectors",
    instruction: "Calculate effective horizontal force from tension.",
    text: "A body pulls a box with a **tension of 40 N** at **60°**. The **effective horizontal force** is:",
    options: ["20 N", "$20\\sqrt{3}$ N", "40 N"],
    answer: "20 N",
    explanation: "$F_x = 40 \\times \\cos(60°) = 40 \\times 0.5 = 20 N$."
  },
  {
    id: 119,
    section: "Resolution of Vectors",
    instruction: "Identify resolved horizontal component of force F.",
    text: "If a **force F** is applied to an elastic string at angle θ, the **resolved component in the horizontal direction** is:",
    options: ["$F \\sin \\theta$", "$F \\cos \\theta$"],
    answer: "$F \\cos \\theta$",
    explanation: "The horizontal component is $F \\cos \\theta$."
  },
  {
    id: 120,
    section: "Resolution of Vectors",
    instruction: "Calculate effective force pulling a nail.",
    text: "The **effective force** pulling a nail if the string is inclined at **30° to the wall** and **tension is 50 N** is:",
    options: ["25 N", "$25\\sqrt{3}$ N", "50 N"],
    answer: "25 N",
    explanation: "The force pulling the nail out (perpendicular to wall) is $50 \\times \\sin(30°) = 50 \\times 0.5 = 25 N$."
  }
];
