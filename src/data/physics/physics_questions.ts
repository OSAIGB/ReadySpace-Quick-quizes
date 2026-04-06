import { Question } from '../../types';

export const PHYSICS_QUESTIONS: Question[] = [
  // Fundamental Units and Quantities
  {
    id: 1,
    section: "Fundamental Units and Quantities",
    instruction: "Choose the correct fundamental unit.",
    text: "Which of the following is a **fundamental unit**?",
    options: ["Newton", "Watt", "Joule", "second"],
    answer: "second",
    explanation: "The second is the SI fundamental unit for time. Newton, Watt, and Joule are derived units."
  },
  {
    id: 2,
    section: "Fundamental Units and Quantities",
    instruction: "Identify the fundamental quantities in mechanics.",
    text: "Identify the **fundamental quantities** that frequently occur in mechanics.",
    options: ["Length, mass, and time", "Weight, area, and volume", "Force, speed, and energy", "Current, temperature, and light"],
    answer: "Length, mass, and time",
    explanation: "In mechanics, the three basic fundamental quantities are length, mass, and time."
  },
  {
    id: 3,
    section: "Fundamental Units and Quantities",
    instruction: "Identify the SI unit for amount of substance.",
    text: "What is the **SI unit** for **amount of substance**?",
    options: ["Ampere", "mole", "Kelvin", "Candela"],
    answer: "mole",
    explanation: "The mole (mol) is the SI unit for the amount of substance."
  },
  {
    id: 4,
    section: "Fundamental Units and Quantities",
    instruction: "Identify the SI unit for luminous intensity.",
    text: "Name the **SI unit** used for **luminous intensity**.",
    options: ["Lux", "Lumen", "candela", "Watt"],
    answer: "candela",
    explanation: "The candela (cd) is the SI unit for luminous intensity."
  },
  {
    id: 5,
    section: "Fundamental Units and Quantities",
    instruction: "Identify the non-fundamental unit.",
    text: "Which of the following is **NOT** a fundamental unit?",
    options: ["Kelvin", "Newton", "Second", "Ampere"],
    answer: "Newton",
    explanation: "Newton is a derived unit (kg·m/s²). Kelvin, Second, and Ampere are fundamental SI units."
  },
  {
    id: 6,
    section: "Fundamental Units and Quantities",
    instruction: "Identify the SI unit for temperature.",
    text: "What is the **SI unit for temperature**?",
    options: ["Celsius", "Fahrenheit", "kelvin", "Rankine"],
    answer: "kelvin",
    explanation: "The kelvin (K) is the SI unit for thermodynamic temperature."
  },
  {
    id: 7,
    section: "Fundamental Units and Quantities",
    instruction: "Identify the SI unit for electric current.",
    text: "Identify the **SI unit for electric current**.",
    options: ["Volt", "ampere", "Ohm", "Watt"],
    answer: "ampere",
    explanation: "The ampere (A) is the SI unit for electric current."
  },
  {
    id: 8,
    section: "Fundamental Units and Quantities",
    instruction: "Identify the quantity measured in kilograms.",
    text: "Which fundamental quantity uses the **kilogram (kg)** as its standard unit?",
    options: ["Length", "mass", "Time", "Temperature"],
    answer: "mass",
    explanation: "The kilogram is the SI fundamental unit for mass."
  },
  {
    id: 9,
    section: "Fundamental Units and Quantities",
    instruction: "Identify absolute zero.",
    text: "The **lowest possible temperature** known as **absolute zero** is...",
    options: ["-273 K", "0°C", "0 K", "-100°C"],
    answer: "0 K",
    explanation: "Absolute zero is 0 Kelvin, which is equivalent to -273.15°C."
  },
  {
    id: 10,
    section: "Fundamental Units and Quantities",
    instruction: "Identify the quantity measured in metres.",
    text: "Which fundamental quantity is measured in **metres (m)**?",
    options: ["Length", "Mass", "Time", "Current"],
    answer: "Length",
    explanation: "The metre is the SI fundamental unit for length."
  },
  {
    id: 11,
    section: "Fundamental Units and Quantities",
    instruction: "True or False question on fundamental units.",
    text: "True or False: **Length, mass, and time** are the only fundamental units in Physics.",
    options: ["True", "False"],
    answer: "False",
    explanation: "There are 7 fundamental SI units: length, mass, time, electric current, thermodynamic temperature, amount of substance, and luminous intensity."
  },
  {
    id: 12,
    section: "Fundamental Units and Quantities",
    instruction: "Convert Kelvin to Celsius.",
    text: "Convert **20 K** to the **Celsius scale**.",
    options: ["293°C", "68°C", "-253°C", "20°C"],
    answer: "-253°C",
    explanation: "Celsius = Kelvin - 273. So, 20 - 273 = -253°C."
  },
  {
    id: 13,
    section: "Fundamental Units and Quantities",
    instruction: "Identify the missing fundamental unit.",
    text: "The **five frequently occurring fundamental units** in physics are metre, kilogram, second, kelvin, and...",
    options: ["Joule", "Newton", "ampere", "Watt"],
    answer: "ampere",
    explanation: "The ampere is one of the seven fundamental SI units."
  },
  {
    id: 14,
    section: "Fundamental Units and Quantities",
    instruction: "Identify the quantity for the symbol mol.",
    text: "Which fundamental unit is represented by the symbol **mol**?",
    options: ["Luminous intensity", "amount of substance", "Temperature", "Electric current"],
    answer: "amount of substance",
    explanation: "The mole (mol) is the unit for the amount of substance."
  },
  {
    id: 15,
    section: "Fundamental Units and Quantities",
    instruction: "Identify the fundamental unit of time.",
    text: "Which of these is a **fundamental unit of time**?",
    options: ["hour", "minute", "second", "day"],
    answer: "second",
    explanation: "The second is the SI fundamental unit for time."
  },

  // Derived Units and Dimensions
  {
    id: 16,
    section: "Derived Units and Dimensions",
    instruction: "Identify derived quantities.",
    text: "Quantities such as **area, volume, and speed** that are derived from fundamental quantities are called...",
    options: ["derived quantities", "base quantities", "scalar quantities", "mechanics"],
    answer: "derived quantities",
    explanation: "Quantities derived from base (fundamental) quantities are called derived quantities."
  },
  {
    id: 17,
    section: "Derived Units and Dimensions",
    instruction: "Identify the derived unit for Force.",
    text: "What is the **derived unit** for **Force**?",
    options: ["Newton", "Joule", "Watt", "Pascal"],
    answer: "Newton",
    explanation: "The Newton (N) is the SI derived unit for force."
  },
  {
    id: 18,
    section: "Derived Units and Dimensions",
    instruction: "Express Force in fundamental units.",
    text: "Express the unit of **Force** in terms of **fundamental units**.",
    options: ["$kg.m.s^{-1}$", "$kg.m.s^{-2}$", "$kg.m^2.s^{-2}$", "$kg.m^{-1}.s^{-2}$"],
    answer: "$kg.m.s^{-2}$",
    explanation: "Force = mass × acceleration. Unit = kg × m/s² = kg·m·s⁻²."
  },
  {
    id: 19,
    section: "Derived Units and Dimensions",
    instruction: "Identify the derived unit for Energy or Work.",
    text: "What is the **derived unit** for **Energy or Work**?",
    options: ["Newton", "joule", "Watt", "Pascal"],
    answer: "joule",
    explanation: "The Joule (J) is the SI derived unit for energy and work."
  },
  {
    id: 20,
    section: "Derived Units and Dimensions",
    instruction: "Identify the dimension of power.",
    text: "The **dimension of power** is...",
    options: ["$ML^2T^{-2}$", "$ML^2T^{-3}$", "$ML^{-1}T^{-2}$", "$MLT^{-2}$"],
    answer: "$ML^2T^{-3}$",
    explanation: "Power = Work / Time = (Force × Distance) / Time = (MLT⁻² × L) / T = ML²T⁻³."
  },
  {
    id: 21,
    section: "Derived Units and Dimensions",
    instruction: "Identify the derived unit for Power.",
    text: "What is the **derived unit for Power**?",
    options: ["Joule", "Newton", "watt", "Volt"],
    answer: "watt",
    explanation: "The Watt (W) is the SI derived unit for power."
  },
  {
    id: 22,
    section: "Derived Units and Dimensions",
    instruction: "Identify the derived unit for Density.",
    text: "Identify the **derived unit for Density**.",
    options: ["kilogram per cubic metre", "gram per centimetre", "Newton per metre", "Joule per second"],
    answer: "kilogram per cubic metre",
    explanation: "Density = Mass / Volume. SI unit = kg/m³."
  },
  {
    id: 23,
    section: "Derived Units and Dimensions",
    instruction: "Identify the derived unit for Speed.",
    text: "What is the **derived unit for Speed**?",
    options: ["$ms^{-2}$", "$ms^{-1}$", "$kgm^{-3}$", "$Nm$"],
    answer: "$ms^{-1}$",
    explanation: "Speed = Distance / Time. Unit = m/s = ms⁻¹."
  },
  {
    id: 24,
    section: "Derived Units and Dimensions",
    instruction: "Identify quantities with the given dimension.",
    text: "The derived dimension **$[ML^2T^{-2}]$** is a dimension of...",
    options: ["acceleration", "torque", "energy", "torque and energy"],
    answer: "torque and energy",
    explanation: "Both torque (Force × Distance) and energy (Work = Force × Distance) have the dimension ML²T⁻²."
  },
  {
    id: 25,
    section: "Derived Units and Dimensions",
    instruction: "Identify pairs with equivalent units.",
    text: "Which of the following pairs of quantities have **equivalent units**?",
    options: ["work done and moments", "energy and momentum", "strain and Young's modulus", "energy and pressure"],
    answer: "work done and moments",
    explanation: "Both work done and moments (torque) are measured in Newton-metres (Nm) or Joules (J)."
  },
  {
    id: 26,
    section: "Derived Units and Dimensions",
    instruction: "Identify the type of quantity for Weight.",
    text: "**Weight** is a...",
    options: ["fundamental quantity", "derived quantity"],
    answer: "derived quantity",
    explanation: "Weight is a force (mass × gravity), making it a derived quantity."
  },
  {
    id: 27,
    section: "Derived Units and Dimensions",
    instruction: "Identify the unit of Weight.",
    text: "The **unit of Weight** is the...",
    options: ["kilogram", "newton", "joule", "watt"],
    answer: "newton",
    explanation: "Weight is a force, so its SI unit is the Newton (N)."
  },
  {
    id: 28,
    section: "Derived Units and Dimensions",
    instruction: "Identify the dimension of Pressure.",
    text: "Identify the **dimension of Pressure**.",
    options: ["$ML^2T^{-3}$", "$ML^{-2}$", "$ML^{-1}T^{-2}$", "$ML^{-3}$"],
    answer: "$ML^{-1}T^{-2}$",
    explanation: "Pressure = Force / Area = MLT⁻² / L² = ML⁻¹T⁻²."
  },
  {
    id: 29,
    section: "Derived Units and Dimensions",
    instruction: "Identify the quantity measured in Joules per second.",
    text: "Which **derived quantity** is measured in **Joules per second ($Js^{-1}$)**?",
    options: ["Work", "Power", "Force", "Energy"],
    answer: "Power",
    explanation: "Power is the rate of doing work, measured in Joules per second (Watts)."
  },
  {
    id: 30,
    section: "Derived Units and Dimensions",
    instruction: "Identify dimensions of Young's modulus.",
    text: "The **dimension of Young’s modulus** is written as $M^xL^yT^z$. Determine the values of **x, y, and z** respectively.",
    options: ["1, -1, -2", "-1, 1, -2", "1, 1, 2", "2, 2, -1"],
    answer: "1, -1, -2",
    explanation: "Young's Modulus = Stress / Strain. Stress = Force/Area (ML⁻¹T⁻²). Strain is dimensionless. So, dimension = ML⁻¹T⁻². x=1, y=-1, z=-2."
  },

  // Measuring Instruments
  {
    id: 31,
    section: "Measuring Instruments",
    instruction: "Identify error in metre rule measurement.",
    text: "What is the **least possible error** encountered when taking measurement with a **metre rule**?",
    options: ["0.1 mm", "1.0 mm", "0.5 mm", "0.2 mm"],
    answer: "0.5 mm",
    explanation: "The smallest division on a metre rule is 1 mm. The least possible error is half of the smallest division, which is 0.5 mm."
  },
  {
    id: 32,
    section: "Measuring Instruments",
    instruction: "Identify how to remove parallax error.",
    text: "In order to remove the **error of parallax** with a metre rule, the eye should be focused...",
    options: ["slantingly", "vertically downwards on the markings", "vertically upwards", "horizontally"],
    answer: "vertically downwards on the markings",
    explanation: "To avoid parallax error, the line of sight must be perpendicular to the scale."
  },
  {
    id: 33,
    section: "Measuring Instruments",
    instruction: "Identify the instrument for measuring thin wire diameter.",
    text: "Which instrument is most suitable for measuring the **diameter of a thin wire**?",
    options: ["Metre rule", "Vernier callipers", "Micrometer screw gauge", "Tape rule"],
    answer: "Micrometer screw gauge",
    explanation: "A micrometer screw gauge is highly precise and suitable for very small diameters like thin wires."
  },
  {
    id: 34,
    section: "Measuring Instruments",
    instruction: "Identify precision of vernier calipers.",
    text: "The **precision** of a measurement of the length of a rod using **vernier calipers** is...",
    options: ["4.1 cm", "4.13 cm", "4.120 cm", "4.125 cm"],
    answer: "4.13 cm",
    explanation: "Vernier calipers typically have a precision of 0.01 cm (or 0.1 mm), so a reading like 4.13 cm is appropriate."
  },
  {
    id: 35,
    section: "Measuring Instruments",
    instruction: "Identify how to determine micrometer reading.",
    text: "How is the **final reading** on a **micrometer screw gauge** determined?",
    options: ["Main scale - Circular scale", "Main scale + Circular scale", "Main scale x Circular scale", "Circular scale / Main scale"],
    answer: "Main scale + Circular scale",
    explanation: "The total reading is the sum of the main scale reading and the circular scale reading."
  },
  {
    id: 36,
    section: "Measuring Instruments",
    instruction: "Identify the instrument for measuring test tube inner diameter.",
    text: "Which instrument is best for measuring the **inner diameter of a small test tube**?",
    options: ["Micrometer screw gauge", "pair of Vernier callipers", "metre rule", "pair of dividers"],
    answer: "pair of Vernier callipers",
    explanation: "Vernier calipers have internal jaws specifically designed for measuring internal diameters."
  },
  {
    id: 37,
    section: "Measuring Instruments",
    instruction: "Calculate vernier reading.",
    text: "A **vernier reading** with a major scale at **3.2** and coincidence at **0.06** is...",
    options: ["3.26 cm", "3.2 cm", "3.8 cm", "4 cm"],
    answer: "3.26 cm",
    explanation: "Reading = Main scale + Vernier scale = 3.2 + 0.06 = 3.26 cm."
  },
  {
    id: 38,
    section: "Measuring Instruments",
    instruction: "Identify the instrument based on the principle of moments.",
    text: "Which instrument works on the **principle of moments**?",
    options: ["Spring balance", "Chemical or beam balance", "Hydrometer", "Manometer"],
    answer: "Chemical or beam balance",
    explanation: "A beam balance works by balancing moments on either side of a pivot."
  },
  {
    id: 39,
    section: "Measuring Instruments",
    instruction: "Identify the instrument for measuring weight.",
    text: "Which instrument is used to measure the **weight of a body**?",
    options: ["Beam balance", "Spring balance", "Chemical balance", "Metre rule"],
    answer: "Spring balance",
    explanation: "A spring balance measures force (weight), while a beam balance measures mass."
  },
  {
    id: 40,
    section: "Measuring Instruments",
    instruction: "Identify the instrument for measuring relative density of a liquid.",
    text: "The accurate measurement of the **relative density of a liquid** is measured with a...",
    options: ["Hygrometer", "Barometer", "Hydrometer", "Altimeter"],
    answer: "Hydrometer",
    explanation: "A hydrometer is used to measure the relative density (specific gravity) of liquids."
  },
  {
    id: 41,
    section: "Measuring Instruments",
    instruction: "Identify the instrument for measuring relative density of powder.",
    text: "To measure the **relative density of a substance in its powered form**, use a beam balance and a...",
    options: ["eureka can", "burette", "pipette", "density bottle"],
    answer: "density bottle",
    explanation: "A density bottle (pycnometer) is used for accurate relative density measurements of powders or liquids."
  },
  {
    id: 42,
    section: "Measuring Instruments",
    instruction: "Identify the instrument for measuring time of oscillations.",
    text: "Which instrument is used to measure the **time** for oscillations?",
    options: ["Metre rule", "Stop watch", "Beam balance", "Vernier callipers"],
    answer: "Stop watch",
    explanation: "A stopwatch is the standard tool for measuring time intervals in experiments."
  },
  {
    id: 43,
    section: "Measuring Instruments",
    instruction: "Identify the instrument for measuring liquid volume.",
    text: "How do you measure the **volume of a liquid** in a laboratory?",
    options: ["Metre rule", "Measuring cylinder", "Beam balance", "Stop watch"],
    answer: "Measuring cylinder",
    explanation: "A measuring cylinder is used to measure the volume of liquids."
  },
  {
    id: 44,
    section: "Measuring Instruments",
    instruction: "Identify the instrument for an altimeter.",
    text: "Which instrument is most suitable for use as an **altimeter**?",
    options: ["mercury barometer", "fortin barometer", "mercury manometer", "aneroid barometer"],
    answer: "aneroid barometer",
    explanation: "Aneroid barometers are portable and used in altimeters to measure altitude based on air pressure."
  },
  {
    id: 45,
    section: "Measuring Instruments",
    instruction: "Identify the tool for comparing charge magnitudes.",
    text: "Name the tool used to **compare the magnitudes of charges** on two bodies.",
    options: ["Gold leaf electroscope", "Capacitor", "Electrophorus", "Ebonite rod"],
    answer: "Gold leaf electroscope",
    explanation: "A gold leaf electroscope is used to detect and compare electric charges."
  },

  // Mixed Mechanics, Units, and Accuracy
  {
    id: 46,
    section: "Mixed Mechanics, Units, and Accuracy",
    instruction: "Identify correct precision for metre rule.",
    text: "A student measures the length of a rod using a **metre rule**. Which reading gives the correct **precision**?",
    options: ["75 mm", "75.0 mm", "75.00 mm", "75.01 mm"],
    answer: "75.0 mm",
    explanation: "A metre rule has a precision of 0.1 cm or 1 mm. In mm, it should be recorded to one decimal place if estimating (0.5 mm), but standardly 75.0 mm represents the precision."
  },
  {
    id: 47,
    section: "Mixed Mechanics, Units, and Accuracy",
    instruction: "Identify a set of vectors.",
    text: "Which of the following is a **set of vectors**?",
    options: ["Weight, displacement, and moment", "Velocity, volume, and upthrust", "Density, capacitance, and distance", "Mass, force, and impulse"],
    answer: "Weight, displacement, and moment",
    explanation: "Weight, displacement, and moment are all vector quantities (have both magnitude and direction)."
  },
  {
    id: 48,
    section: "Mixed Mechanics, Units, and Accuracy",
    instruction: "Identify the unit of momentum.",
    text: "Identify the **unit of momentum**.",
    options: ["$Js^{-1}$", "Ns", "$Ns^{-1}$", "Nms"],
    answer: "Ns",
    explanation: "Momentum = Force × Time (Impulse) = Ns. Also kg·m/s."
  },
  {
    id: 49,
    section: "Mixed Mechanics, Units, and Accuracy",
    instruction: "Identify equivalent unit for Watt.",
    text: "**Watt** is equivalent to...",
    options: ["$Nms^{-1}$", "$Js^{-1}$", "$kgm^2s^{-2}$", "$Ns$"],
    answer: "$Js^{-1}$",
    explanation: "1 Watt = 1 Joule per second."
  },
  {
    id: 50,
    section: "Mixed Mechanics, Units, and Accuracy",
    instruction: "Identify quantity with same unit as momentum.",
    text: "**Momentum** has the same unit as...",
    options: ["Force", "Impulse", "Energy", "Power"],
    answer: "Impulse",
    explanation: "Both momentum and impulse have the unit Ns or kg·m/s."
  },
  {
    id: 51,
    section: "Mixed Mechanics, Units, and Accuracy",
    instruction: "Identify change in mass on the moon.",
    text: "When a **brick** is taken from earth to the **moon**, its **mass**...",
    options: ["remains constant", "reduces", "increases", "becomes zero"],
    answer: "remains constant",
    explanation: "Mass is the amount of matter in an object and does not change with location. Weight changes, but mass stays constant."
  },
  {
    id: 52,
    section: "Mixed Mechanics, Units, and Accuracy",
    instruction: "Identify the instrument for relative humidity.",
    text: "Which device measures the **relative humidity** of the air?",
    options: ["Hydrometer", "Aneroid barometer", "Hygrometer", "Altimeter"],
    answer: "Hygrometer",
    explanation: "A hygrometer is used to measure the moisture content (humidity) in the atmosphere."
  },
  {
    id: 53,
    section: "Mixed Mechanics, Units, and Accuracy",
    instruction: "Identify the instrument for gas pressure.",
    text: "Identify the instrument used to measure **gas pressure**.",
    options: ["Barometer", "Hygrometer", "Manometer", "Altimeter"],
    answer: "Manometer",
    explanation: "A manometer is used to measure the pressure of gases."
  },
  {
    id: 54,
    section: "Mixed Mechanics, Units, and Accuracy",
    instruction: "Identify heat capacity.",
    text: "The **quantity of heat** needed to raise the temperature of a body by 1K is its...",
    options: ["Internal energy", "Specific heat capacity", "Heat capacity", "Latent heat"],
    answer: "Heat capacity",
    explanation: "Heat capacity is the amount of heat required to raise the temperature of the entire body by 1 Kelvin."
  },
  {
    id: 55,
    section: "Mixed Mechanics, Units, and Accuracy",
    instruction: "Identify expression for force on a charge.",
    text: "Which of these is the correct expression for **force experienced by a charge** undergoing motion?",
    options: ["F=BIV", "F=BIQ", "F=BQV", "F=BQL"],
    answer: "F=BQV",
    explanation: "The magnetic force on a moving charge is given by F = Bqv sinθ."
  },
  {
    id: 56,
    section: "Mixed Mechanics, Units, and Accuracy",
    instruction: "Identify unit of moment of force.",
    text: "**Unit of moment of force** is...",
    options: ["Nm", "N/m", "$Nm^2$", "$N/m^2$"],
    answer: "Nm",
    explanation: "Moment of force = Force × perpendicular distance = Newton × metre = Nm."
  },
  {
    id: 57,
    section: "Mixed Mechanics, Units, and Accuracy",
    instruction: "Identify what obeys Ohm's law.",
    text: "Which of the following **obeys Ohm's laws**?",
    options: ["glass", "diode", "all electrolytes", "all metals"],
    answer: "all metals",
    explanation: "Ohmic conductors, primarily metals at constant temperature, obey Ohm's law."
  },
  {
    id: 58,
    section: "Mixed Mechanics, Units, and Accuracy",
    instruction: "Identify a scalar quantity.",
    text: "Identify a **scalar quantity**.",
    options: ["Torque", "Momentum", "Kinetic Energy", "Weight"],
    answer: "Kinetic Energy",
    explanation: "Kinetic energy is a scalar quantity (has magnitude only). Torque, momentum, and weight are vectors."
  },
  {
    id: 59,
    section: "Mixed Mechanics, Units, and Accuracy",
    instruction: "Calculate micrometer reading.",
    text: "A **micrometer screw gauge** main scale reads 5.0 and circular scale 0.17. The total reading is...",
    options: ["5.17 mm", "5.0 mm", "0.17 mm", "5.34 mm"],
    answer: "5.17 mm",
    explanation: "Reading = 5.0 + 0.17 = 5.17 mm."
  },
  {
    id: 60,
    section: "Mixed Mechanics, Units, and Accuracy",
    instruction: "Identify principle of beam balance.",
    text: "The **principle of operation** of a **beam balance** is based on...",
    options: ["Hooke's law", "moments", "flotation", "density"],
    answer: "moments",
    explanation: "A beam balance operates on the principle of moments, where clockwise moments equal anticlockwise moments when balanced."
  }
];
