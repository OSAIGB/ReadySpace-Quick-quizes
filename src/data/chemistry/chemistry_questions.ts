import { Question } from '../../types';

export const CHEMISTRY_QUESTIONS: Question[] = [
  // Matter and Separation Techniques
  {
    id: 1,
    section: "Matter and Its Properties",
    instruction: "Choose the correct option.",
    text: "Which of the following is an example of a **chemical change**?",
    options: ["A. Melting of ice", "B. Dissolving sugar in water", "C. Rusting of iron", "D. Boiling of water"],
    answer: "C. Rusting of iron",
    explanation: "Rusting of iron is a chemical change because a new substance (iron oxide) is formed and the process is not easily reversible."
  },
  {
    id: 2,
    section: "Matter and Its Properties",
    instruction: "Choose the correct option.",
    text: "A substance that cannot be broken down into simpler substances by chemical means is an:",
    options: ["A. element", "B. compound", "C. mixture", "D. isotope"],
    answer: "A. element",
    explanation: "An element is a pure substance consisting of only one type of atom and cannot be broken down by chemical methods."
  },
  {
    id: 3,
    section: "Matter and Its Properties",
    instruction: "Choose the correct option.",
    text: "Which of the following is a **mixture**?",
    options: ["A. Distilled water", "B. Common salt", "C. Air", "D. Iron filings"],
    answer: "C. Air",
    explanation: "Air is a mixture of several gases, mainly nitrogen and oxygen, that are not chemically combined."
  },
  {
    id: 4,
    section: "Separation Techniques",
    instruction: "Choose the correct option.",
    text: "The best method for separating a mixture of **sand and water** is:",
    options: ["A. distillation", "B. filtration", "C. evaporation", "D. sublimation"],
    answer: "B. filtration",
    explanation: "Filtration is used to separate an insoluble solid (sand) from a liquid (water)."
  },
  {
    id: 5,
    section: "Separation Techniques",
    instruction: "Choose the correct option.",
    text: "Which technique is used to separate a mixture of **miscible liquids** with different boiling points?",
    options: ["A. Simple distillation", "B. Fractional distillation", "C. Decantation", "D. Precipitation"],
    answer: "B. Fractional distillation",
    explanation: "Fractional distillation is used for miscible liquids whose boiling points are relatively close together."
  },
  {
    id: 6,
    section: "Separation Techniques",
    instruction: "Choose the correct option.",
    text: "A solid can be separated from its solution by:",
    options: ["A. filtration", "B. crystallization", "C. decantation", "D. sublimation"],
    answer: "B. crystallization",
    explanation: "Crystallization is used to obtain a pure solid from its saturated solution."
  },
  {
    id: 7,
    section: "Separation Techniques",
    instruction: "Choose the correct option.",
    text: "The separation technique that is based on the principle of **solubility** of a solid in two miscible liquids is:",
    options: ["A. fractional distillation", "B. evaporation", "C. precipitation", "D. simple distillation"],
    answer: "C. precipitation",
    explanation: "Precipitation occurs when a solid is formed within a solution due to a change in solubility Conditions."
  },
  {
    id: 8,
    section: "Separation Techniques",
    instruction: "Choose the correct option.",
    text: "What method is most suitable for separating **ammonium chloride** from a mixture of ammonium chloride and sodium chloride?",
    options: ["A. Evaporation", "B. Sublimation", "C. Filtration", "D. Decantation"],
    answer: "B. Sublimation",
    explanation: "Ammonium chloride sublimes (changes from solid to gas) directly upon heating, allowing it to be separated from sodium chloride."
  },
  {
    id: 9,
    section: "Separation Techniques",
    instruction: "Choose the correct option.",
    text: "Chromatography is used to separate components of a mixture based on their different:",
    options: ["A. boiling points", "B. densities", "C. rates of movement through a medium", "D. magnetic properties"],
    answer: "C. rates of movement through a medium",
    explanation: "Chromatography relies on the differential distribution of components between a stationary phase and a mobile phase."
  },
  {
    id: 10,
    section: "Separation Techniques",
    instruction: "Choose the correct option.",
    text: "Which of the following can be used to separate a mixture of **oil and water**?",
    options: ["A. Filter paper", "B. Separating funnel", "C. Liebig condenser", "D. Evaporating dish"],
    answer: "B. Separating funnel",
    explanation: "A separating funnel is used to separate immiscible liquids (like oil and water) based on their different densities."
  },

  // Atomic Structure and Periodicity
  {
    id: 11,
    section: "Atomic Structure",
    instruction: "Choose the correct option.",
    text: "The **atomic number** of an element is the number of:",
    options: ["A. protons in the nucleus", "B. neutrons in the nucleus", "C. protons and neutrons together", "D. electrons in the outermost shell"],
    answer: "A. protons in the nucleus",
    explanation: "The atomic number is unique to each element and represents the number of protons in its atoms."
  },
  {
    id: 12,
    section: "Atomic Structure",
    instruction: "Choose the correct option.",
    text: "Atoms of the same element with the same atomic number but different **mass numbers** are called:",
    options: ["A. allotropes", "B. isomers", "C. isotopes", "D. polymers"],
    answer: "C. isotopes",
    explanation: "Isotopes have the same number of protons but different numbers of neutrons."
  },
  {
    id: 13,
    section: "Atomic Structure",
    instruction: "Choose the correct option.",
    text: "The maximum number of electrons that can occupy the **M-shell** (third shell) is:",
    options: ["A. 2", "B. 8", "C. 18", "D. 32"],
    answer: "C. 18",
    explanation: "The maximum number of electrons in a shell is given by 2n², where n is the shell number. For M-shell (n=3), 2(3)² = 18."
  },
  {
    id: 14,
    section: "Atomic Structure",
    instruction: "Choose the correct option.",
    text: "Which particle has the **least mass**?",
    options: ["A. Proton", "B. Neutron", "C. Electron", "D. Alpha particle"],
    answer: "C. Electron",
    explanation: "The mass of an electron is approximately 1/1840 of the mass of a proton or neutron."
  },
  {
    id: 15,
    section: "Atomic Structure",
    instruction: "Choose the correct option.",
    text: "The **electronic configuration** of an atom with atomic number 11 is:",
    options: ["A. 2, 8, 1", "B. 2, 8, 2", "C. 2, 8, 3", "D. 2, 8, 4"],
    answer: "A. 2, 8, 1",
    explanation: "Sodium (atomic number 11) has its 11 electrons distributed as 2 in the first shell, 8 in the second, and 1 in the third."
  },
  {
    id: 16,
    section: "Periodic Table",
    instruction: "Choose the correct option.",
    text: "Elements in the same **group** of the periodic table have the same:",
    options: ["A. atomic number", "B. mass number", "C. number of valence electrons", "D. number of shells"],
    answer: "C. number of valence electrons",
    explanation: "Elements in the same group share similar chemical properties because they have the same number of electrons in their outermost shell."
  },
  {
    id: 17,
    section: "Periodic Table",
    instruction: "Choose the correct option.",
    text: "Across a **period** from left to right, the **electronegativity** of elements generally:",
    options: ["A. increases", "B. decreases", "C. remains constant", "D. first increases then decreases"],
    answer: "A. increases",
    explanation: "Electronegativity increases across a period because the nuclear charge increases, attracting electrons more strongly."
  },
  {
    id: 18,
    section: "Periodic Table",
    instruction: "Choose the correct option.",
    text: "The **halogens** belong to which group in the periodic table?",
    options: ["A. Group 1", "B. Group 2", "C. Group 7", "D. Group 0"],
    answer: "C. Group 7",
    explanation: "Group 7 (or Group 17) elements, including fluorine and chlorine, are known as the halogens."
  },
  {
    id: 19,
    section: "Periodic Table",
    instruction: "Choose the correct option.",
    text: "Which of the following is a **noble gas**?",
    options: ["A. Hydrogen", "B. Oxygen", "C. Nitrogen", "D. Neon"],
    answer: "D. Neon",
    explanation: "Neon is a Group 0 element, characterized by its stable electronic configuration and low reactivity."
  },
  {
    id: 20,
    section: "Periodic Table",
    instruction: "Choose the correct option.",
    text: "The energy required to remove an electron from a gaseous atom is called:",
    options: ["A. electron affinity", "B. ionization energy", "C. electronegativity", "D. activation energy"],
    answer: "B. ionization energy",
    explanation: "Ionization energy is the energy needed to detach the most loosely bound electron from an atom."
  },

  // Chemical Bonding and Stoichiometry
  {
    id: 21,
    section: "Chemical Bonding",
    instruction: "Choose the correct option.",
    text: "An **ionic bond** is formed by the:",
    options: ["A. sharing of electrons", "B. transfer of electrons", "C. overlap of orbitals", "D. movement of protons"],
    answer: "B. transfer of electrons",
    explanation: "Ionic bonds form when electrons are transferred from a metal to a non-metal, creating ions that attract each other."
  },
  {
    id: 22,
    section: "Chemical Bonding",
    instruction: "Choose the correct option.",
    text: "Molecules like **CH₄** (methane) are held together by:",
    options: ["A. ionic bonds", "B. covalent bonds", "C. metallic bonds", "D. hydrogen bonds"],
    answer: "B. covalent bonds",
    explanation: "Covalent bonds are formed by the mutual sharing of electron pairs between non-metal atoms."
  },
  {
    id: 23,
    section: "Chemical Bonding",
    instruction: "Choose the correct option.",
    text: "Which of the following substances contains **metallic bonds**?",
    options: ["A. Sodium chloride", "B. Diamond", "C. Copper wire", "D. Graphite"],
    answer: "C. Copper wire",
    explanation: "Metallic bonding is the electrostatic attraction between metal cations and a sea of delocalized electrons."
  },
  {
    id: 24,
    section: "Chemical Bonding",
    instruction: "Choose the correct option.",
    text: "The shape of a **water molecule** (H₂O) is:",
    options: ["A. linear", "B. bent (V-shaped)", "C. tetrahedral", "D. square planar"],
    answer: "B. bent (V-shaped)",
    explanation: "The presence of two lone pairs on the oxygen atom repels the bonding pairs, resulting in a bent shape."
  },
  {
    id: 25,
    section: "Stoichiometry",
    instruction: "Choose the correct option.",
    text: "The **molar mass** of H₂SO₄ is (H=1, S=32, O=16):",
    options: ["A. 49 g/mol", "B. 98 g/mol", "C. 82 g/mol", "D. 100 g/mol"],
    answer: "B. 98 g/mol",
    explanation: "(1x2) + 32 + (16x4) = 2 + 32 + 64 = 98."
  },
  {
    id: 26,
    section: "Stoichiometry",
    instruction: "Choose the correct option.",
    text: "How many **moles** are present in 4 grams of sodium hydroxide (NaOH)? (Na=23, O=16, H=1):",
    options: ["A. 0.1 moles", "B. 0.2 moles", "C. 0.5 moles", "D. 1.0 moles"],
    answer: "A. 0.1 moles",
    explanation: "Molar mass of NaOH = 40 g/mol. Moles = mass / molar mass = 4 / 40 = 0.1."
  },
  {
    id: 27,
    section: "Stoichiometry",
    instruction: "Choose the correct option.",
    text: "One mole of any gas at **STP** occupies a volume of:",
    options: ["A. 11.2 dm³", "B. 22.4 dm³", "C. 24.0 dm³", "D. 44.8 dm³"],
    answer: "B. 22.4 dm³",
    explanation: "The molar volume of an ideal gas at Standard Temperature and Pressure is approximately 22.4 liters (dm³)."
  },
  {
    id: 28,
    section: "Stoichiometry",
    instruction: "Choose the correct option.",
    text: "The **empirical formula** of a compound is CH₂O. If its molar mass is 180 g/mol, its **molecular formula** is:",
    options: ["A. C₂H₄O₂", "B. C₃H₆O₃", "C. C₆H₁₂O₆", "D. C₅H₁₀O₅"],
    answer: "C. C₆H₁₂O₆",
    explanation: "Empirical formula mass = 12 + 2 + 16 = 30. n = 180 / 30 = 6. Molecular formula = (CH₂O)₆ = C₆H₁₂O₆."
  },
  {
    id: 29,
    section: "Stoichiometry",
    instruction: "Choose the correct option.",
    text: "Avogadro's number represents the number of particles in:",
    options: ["A. 1 mole", "B. 1 gram", "C. 1 liter", "D. 1 atom"],
    answer: "A. 1 mole",
    explanation: "One mole contains exactly 6.022 x 10²³ elementary entities."
  },
  {
    id: 30,
    section: "Stoichiometry",
    instruction: "Choose the correct option.",
    text: "What volume of 0.5M HCl is required to react completely with 10g of CaCO₃?",
    options: ["A. 200 cm³", "B. 400 cm³", "C. 100 cm³", "D. 50 cm³"],
    answer: "B. 400 cm³",
    explanation: "Reaction: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. Moles CaCO₃ = 10/100 = 0.1. Moles HCl needed = 0.2. Volume = moles / molarity = 0.2 / 0.5 = 0.4 dm³ = 400 cm³."
  },

  // Acids, Bases, and Salts
  {
    id: 31,
    section: "Acids, Bases, and Salts",
    instruction: "Choose the correct option.",
    text: "An acid is a substance that produces what type of ions in aqueous solution?",
    options: ["A. OH⁻", "B. H⁺ (or H₃O⁺)", "C. Na⁺", "D. Cl⁻"],
    answer: "B. H⁺ (or H₃O⁺)",
    explanation: "According to the Arrhenius definition, acids dissociate in water to yield hydrogen ions."
  },
  {
    id: 32,
    section: "Acids, Bases, and Salts",
    instruction: "Choose the correct option.",
    text: "A solution with a **pH of 2** is:",
    options: ["A. strongly acidic", "B. weakly acidic", "C. neutral", "D. basic"],
    answer: "A. strongly acidic",
    explanation: "pH values below 7 are acidic, with lower numbers being more strongly acidic."
  },
  {
    id: 33,
    section: "Acids, Bases, and Salts",
    instruction: "Choose the correct option.",
    text: "Which of the following is a **strong base**?",
    options: ["A. Ammonia", "B. Magnesium hydroxide", "C. Sodium hydroxide", "D. Calcium carbonate"],
    answer: "C. Sodium hydroxide",
    explanation: "Sodium hydroxide (NaOH) dissociates completely in water, producing a high concentration of hydroxyl ions."
  },
  {
    id: 34,
    section: "Acids, Bases, and Salts",
    instruction: "Choose the correct option.",
    text: "The reaction between an acid and a base to form salt and water is called:",
    options: ["A. Hydrolysis", "B. Neutralization", "C. Oxidation", "D. Reduction"],
    answer: "B. Neutralization",
    explanation: "Neutralization involves the combination of H⁺ ions and OH⁻ ions to form water."
  },
  {
    id: 35,
    section: "Acids, Bases, and Salts",
    instruction: "Choose the correct option.",
    text: "Which of the following salts is **deliquescent** (absorbs moisture to form a solution)?",
    options: ["A. Calcium chloride", "B. Copper(II) sulfate", "C. Sodium carbonate", "D. Barium sulfate"],
    answer: "A. Calcium chloride",
    explanation: "Calcium chloride is highly hygroscopic and will eventually dissolve in the water it absorbs from the air."
  },
  {
    id: 36,
    section: "Acids, Bases, and Salts",
    instruction: "Choose the correct option.",
    text: "An example of an **amphoteric oxide** is:",
    options: ["A. Sodium oxide", "B. Carbon dioxide", "C. Zinc oxide", "D. Sulfur trioxide"],
    answer: "C. Zinc oxide",
    explanation: "Amphoteric oxides can react with both acids and bases."
  },
  {
    id: 37,
    section: "Acids, Bases, and Salts",
    instruction: "Choose the correct option.",
    text: "Which indicator is most suitable for a titration between a **strong acid and a weak base**?",
    options: ["A. Phenolphthalein", "B. Methyl orange", "C. Litmus", "D. Universal indicator"],
    answer: "B. Methyl orange",
    explanation: "Methyl orange changes color in the slightly acidic range, which is the equivalence point for this type of titration."
  },
  {
    id: 38,
    section: "Redox Reactions",
    instruction: "Choose the correct option.",
    text: "**Oxidation** is defined as the:",
    options: ["A. gain of electrons", "B. loss of electrons", "C. gain of hydrogen", "D. loss of oxygen"],
    answer: "B. loss of electrons",
    explanation: "OIL RIG: Oxidation Is Loss (of electrons), Reduction Is Gain."
  },
  {
    id: 39,
    section: "Redox Reactions",
    instruction: "Choose the correct option.",
    text: "In the reaction **Zn + CuSO₄ → ZnSO₄ + Cu**, zinc is being:",
    options: ["A. oxidized", "B. reduced", "C. precipitated", "D. neutralized"],
    answer: "A. oxidized",
    explanation: "Zinc changes from an oxidation state of 0 to +2, meaning it loses electrons."
  },
  {
    id: 40,
    section: "Redox Reactions",
    instruction: "Choose the correct option.",
    text: "The **oxidation number** of sulfur in H₂SO₄ is:",
    options: ["A. +2", "B. +4", "C. +6", "D. -2"],
    answer: "C. +6",
    explanation: "2(+1) + S + 4(-2) = 0 → 2 + S - 8 = 0 → S = +6."
  },

  // States of Matter and Energy
  {
    id: 41,
    section: "States of Matter",
    instruction: "Choose the correct option.",
    text: "The process by which a gas changes directly into a solid is:",
    options: ["A. sublimation", "B. deposition", "C. condensation", "D. freezing"],
    answer: "B. deposition",
    explanation: "Deposition is the reverse of sublimation."
  },
  {
    id: 42,
    section: "States of Matter",
    instruction: "Choose the correct option.",
    text: "According to **Boyle's Law**, at constant temperature, the volume of a gas is:",
    options: ["A. directly proportional to pressure", "B. inversely proportional to pressure", "C. proportional to the square of pressure", "D. independent of pressure"],
    answer: "B. inversely proportional to pressure",
    explanation: "PV = constant, so as pressure increases, volume decreases."
  },
  {
    id: 43,
    section: "States of Matter",
    instruction: "Choose the correct option.",
    text: "Diffusion occurs fastest in:",
    options: ["A. solids", "B. liquids", "C. gases", "D. vacuum"],
    answer: "C. gases",
    explanation: "Gas particles have higher kinetic energy and move more freely than those in liquids or solids."
  },
  {
    id: 44,
    section: "Energy Changes",
    instruction: "Choose the correct option.",
    text: "A reaction that absorbs heat from the surroundings is:",
    options: ["A. exothermic", "B. endothermic", "C. isothermal", "D. adiabatic"],
    answer: "B. endothermic",
    explanation: "In endothermic reactions, the energy of the products is higher than the energy of the reactants."
  },
  {
    id: 45,
    section: "Chemical Kinetics",
    instruction: "Choose the correct option.",
    text: "Which factor does **NOT** usually increase the rate of a chemical reaction?",
    options: ["A. Increasing concentration", "B. Increasing temperature", "C. Using a catalyst", "D. Increasing the size of solid particles"],
    answer: "D. Increasing the size of solid particles",
    explanation: "Increasing particle size decreases surface area, which typically slows down a reaction."
  },

  // Organic Chemistry Intro
  {
    id: 46,
    section: "Organic Chemistry",
    instruction: "Choose the correct option.",
    text: "Organic chemistry is primarily the study of compounds containing:",
    options: ["A. Carbon", "B. Nitrogen", "C. Silicon", "D. Oxygen"],
    answer: "A. Carbon",
    explanation: "Carbon's ability to form stable chains and rings leads to a vast array of organic molecules."
  },
  {
    id: 47,
    section: "Organic Chemistry",
    instruction: "Choose the correct option.",
    text: "The general formula for **alkanes** is:",
    options: ["A. CₙH₂ₙ₊₂", "B. CₙH₂ₙ", "C. CₙH₂ₙ₋₂", "D. CₙH₂ₙ₋₆"],
    answer: "A. CₙH₂ₙ₊₂",
    explanation: "Alkanes are saturated hydrocarbons following this general formula."
  },
  {
    id: 48,
    section: "Organic Chemistry",
    instruction: "Choose the correct option.",
    text: "The functional group of an **alkanol** (alcohol) is:",
    options: ["A. -CHO", "B. -OH", "C. -COOH", "D. -NH₂"],
    answer: "B. -OH",
    explanation: "The hydroxyl group (-OH) defines the alcohol class."
  },
  {
    id: 49,
    section: "Organic Chemistry",
    instruction: "Choose the correct option.",
    text: "The IUPAC name for **CH₃CH₂CH₂CH₃** is:",
    options: ["A. Ethane", "B. Propane", "C. Butane", "D. Pentane"],
    answer: "C. Butane",
    explanation: "A four-carbon alkane chain is named butane."
  },
  {
    id: 50,
    section: "Organic Chemistry",
    instruction: "Choose the correct option.",
    text: "Hydrocarbons with at least one **double bond** between carbon atoms are:",
    options: ["A. Alkanes", "B. Alkenes", "C. Alkynes", "D. Aromatics"],
    answer: "B. Alkenes",
    explanation: "Alkenes are unsaturated hydrocarbons containing the C=C double bond."
  },

  // Industrial and Applied Chemistry
  {
    id: 51,
    section: "Industrial Chemistry",
    instruction: "Choose the correct option.",
    text: "The catalyst used in the **Haber Process** for synthesis of ammonia is:",
    options: ["A. Finely divided iron", "B. Vanadium(V) oxide", "C. Platinum", "D. Manganese(IV) oxide"],
    answer: "A. Finely divided iron",
    explanation: "Iron catalyst is used to speed up the reaction between nitrogen and hydrogen."
  },
  {
    id: 52,
    section: "Chemistry of Water",
    instruction: "Choose the correct option.",
    text: "Permanent hardness of water is caused by the presence of:",
    options: ["A. Calcium hydrogen carbonate", "B. Magnesium sulfate", "C. Sodium chloride", "D. Potassium nitrate"],
    answer: "B. Magnesium sulfate",
    explanation: "Chlorides and sulfates of calcium and magnesium cause permanent hardness, which cannot be removed by boiling."
  },
  {
    id: 53,
    section: "Electrolysis",
    instruction: "Choose the correct option.",
    text: "During the electrolysis of acidified water, **oxygen** is evolved at the:",
    options: ["A. Anode", "B. Cathode", "C. Electrolyte", "D. Battery"],
    answer: "A. Anode",
    explanation: "Oxidation of water or hydroxyl ions occurs at the positive electrode (anode), releasing oxygen gas."
  },
  {
    id: 54,
    section: "Non-Metals",
    instruction: "Choose the correct option.",
    text: "**Allotropy** is the existence of an element in different physical forms. An allotrope of carbon is:",
    options: ["A. Steel", "B. Graphite", "C. Bronze", "D. Brass"],
    answer: "B. Graphite",
    explanation: "Diamond, graphite, and fullerenes are allotropes of carbon."
  },
  {
    id: 55,
    section: "Non-Metals",
    instruction: "Choose the correct option.",
    text: "Which gas is used in filling **weather balloons** due to its low density?",
    options: ["A. Argon", "B. Helium", "C. Carbon dioxide", "D. Chlorine"],
    answer: "B. Helium",
    explanation: "Helium is the second lightest element and is non-flammable, making it safer than hydrogen for balloons."
  },
  {
    id: 56,
    section: "Atmospheric Chemistry",
    instruction: "Choose the correct option.",
    text: "The gas mainly responsible for the **Greenhouse Effect** is:",
    options: ["A. Oxygen", "B. Carbon dioxide", "C. Nitrogen", "D. Helium"],
    answer: "B. Carbon dioxide",
    explanation: "Carbon dioxide traps heat in the atmosphere, contributing to global warming."
  },
  {
    id: 57,
    section: "Metals",
    instruction: "Choose the correct option.",
    text: "The main ore of **aluminum** is:",
    options: ["A. Hematite", "B. Bauxite", "C. Cassiterite", "D. Galena"],
    answer: "B. Bauxite",
    explanation: "Bauxite is the primary source for the industrial production of aluminum via the Hall-Héroult process."
  },
  {
    id: 58,
    section: "Metals",
    instruction: "Choose the correct option.",
    text: "Brass is an **alloy** of:",
    options: ["A. Copper and Tin", "B. Copper and Zinc", "C. Iron and Carbon", "D. Lead and Tin"],
    answer: "B. Copper and Zinc",
    explanation: "Bronze is copper and tin; Brass is copper and zinc."
  },
  {
    id: 59,
    section: "Metals",
    instruction: "Choose the correct option.",
    text: "Which of these metals is the **most reactive**?",
    options: ["A. Gold", "B. Silver", "C. Platinum", "D. Potassium"],
    answer: "D. Potassium",
    explanation: "Potassium is near the top of the reactivity series, reacting vigorously with water."
  },
  {
    id: 60,
    section: "Qualitative Analysis",
    instruction: "Choose the correct option.",
    text: "The gas that turns **lime water milky** is:",
    options: ["A. Oxygen", "B. Hydrogen", "C. Carbon dioxide", "D. Ammonia"],
    answer: "C. Carbon dioxide",
    explanation: "Carbon dioxide reacts with calcium hydroxide (lime water) to form a white precipitate of calcium carbonate."
  }
];
