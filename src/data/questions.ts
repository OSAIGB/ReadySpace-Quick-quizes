import { Question } from '../types';

const SYNONYM_INSTRUCTION = "Choose the option that is **nearest in meaning** to the bolded word or phrase.";
const ANTONYM_INSTRUCTION = "Choose the option that is **opposite in meaning** to the bolded word or phrase.";
const INTERPRETATION_INSTRUCTION = "Choose the option that best explains the information conveyed in the sentence.";
const COMPLETION_INSTRUCTION = "Choose the option that best completes the sentence.";
const MECHANICS_INSTRUCTION = "Follow the specific instruction for each question.";

export const ENGLISH_QUESTIONS: Question[] = [
  // Synonyms
  { 
    id: 1, 
    section: "Synonyms", 
    instruction: SYNONYM_INSTRUCTION, 
    text: "A political **impasse** does not offer the best opportunity for merrymaking.", 
    options: ["A. manifesto", "B. party", "C. gridlock", "D. rally"], 
    answer: "C. gridlock",
    explanation: "**Gridlock** refers to a situation where no progress is possible. *Example: The negotiations reached an **impasse** (gridlock) when neither side would compromise.*"
  },
  { 
    id: 2, 
    section: "Synonyms", 
    instruction: SYNONYM_INSTRUCTION, 
    text: "Isa and Ilu ate **sumptuous** meal on their brother’s wedding day.", 
    options: ["A. expensive", "B. foreign", "C. insipid", "D. cheap"], 
    answer: "A. expensive",
    explanation: "**Sumptuous** means splendid and expensive-looking. *Example: They enjoyed a **sumptuous** (expensive) banquet at the five-star hotel.*"
  },
  { 
    id: 3, 
    section: "Synonyms", 
    instruction: SYNONYM_INSTRUCTION, 
    text: "The **panacea** for a country’s economic mess lies in systematic planning and hardwork.", 
    options: ["A. cure", "B. hope", "C. foresight", "D. trouble"], 
    answer: "A. cure",
    explanation: "**Panacea** is a solution or remedy for all difficulties or diseases. *Example: Technology is not a **panacea** (cure) for all our social problems.*"
  },
  { 
    id: 4, 
    section: "Synonyms", 
    instruction: SYNONYM_INSTRUCTION, 
    text: "The principal gave his speech **offhand** at the sports meeting.", 
    options: ["A. unprepared", "B. calmly", "C. beautifully", "D. unconcerned"], 
    answer: "A. unprepared",
    explanation: "**Offhand** means without previous thought or consideration. *Example: I can't give you the exact figures **offhand** (unprepared), but it's around a million.*"
  },
  { 
    id: 5, 
    section: "Synonyms", 
    instruction: SYNONYM_INSTRUCTION, 
    text: "The girl’s father was **astounded** to see her appear from the shrine.", 
    options: ["A. collected", "B. overwhelmed", "C. embarrassed", "D. astonished"], 
    answer: "D. astonished",
    explanation: "**Astounded** means to be filled with sudden and great surprise. *Example: I was **astounded** (astonished) by the beauty of the landscape.*"
  },
  { 
    id: 6, 
    section: "Synonyms", 
    instruction: SYNONYM_INSTRUCTION, 
    text: "The director’s remark was extremely **apposite** to the issue being discussed.", 
    options: ["A. appropriate", "B. inconsequential", "C. emphatic", "D. adequate"], 
    answer: "A. appropriate",
    explanation: "**Apposite** means apt in the circumstances or in relation to something. *Example: His observations are very **apposite** (appropriate) to the present discussion.*"
  },
  { 
    id: 7, 
    section: "Synonyms", 
    instruction: SYNONYM_INSTRUCTION, 
    text: "This is an **abridged** version of No Longer at Ease.", 
    options: ["A. an outdated", "B. an enlarged", "C. an illustrated", "D. a shortened"], 
    answer: "D. a shortened",
    explanation: "**Abridged** means a piece of writing that has been shortened. *Example: We read an **abridged** (shortened) edition of the classic novel.*"
  },
  { 
    id: 8, 
    section: "Synonyms", 
    instruction: SYNONYM_INSTRUCTION, 
    text: "The chairman admires **incessant** meetings.", 
    options: ["A. unusual", "B. planned", "C. constant", "D. irregular"], 
    answer: "C. constant",
    explanation: "**Incessant** means continuing without pause or interruption. *Example: The **incessant** (constant) noise from the construction site was annoying.*"
  },
  { 
    id: 9, 
    section: "Synonyms", 
    instruction: SYNONYM_INSTRUCTION, 
    text: "The athlete is proud to be in the **vanguard** of sports development.", 
    options: ["A. unforgettable position", "B. leading position", "C. destructive position", "D. emerging position"], 
    answer: "B. leading position",
    explanation: "**Vanguard** refers to a group of people leading the way in new developments or ideas. *Example: The company is in the **vanguard** (leading position) of medical research.*"
  },
  { 
    id: 10, 
    section: "Synonyms", 
    instruction: SYNONYM_INSTRUCTION, 
    text: "Ayodeji is an **ardent** supporter of education for the girl child.", 
    options: ["A. an optimistic", "B. a cogent", "C. a passionate", "D. an ignorant"], 
    answer: "C. a passionate",
    explanation: "**Ardent** means very enthusiastic or passionate. *Example: She is an **ardent** (passionate) believer in human rights.*"
  },
  // Antonyms
  { 
    id: 11, 
    section: "Antonyms", 
    instruction: ANTONYM_INSTRUCTION, 
    text: "I am **optimistic** about the interview though it was a mind-bending exercise.", 
    options: ["A. an enervating", "B. a debilitating", "C. a difficult", "D. a pessimistic"], 
    answer: "D. a pessimistic",
    explanation: "**Optimistic** means hopeful and confident about the future. The opposite is **pessimistic**. *Example: While he was **optimistic**, his brother remained **pessimistic** about the outcome.*"
  },
  { 
    id: 12, 
    section: "Antonyms", 
    instruction: ANTONYM_INSTRUCTION, 
    text: "The teacher said that Ali’s essay was full of many **redundant** details.", 
    options: ["A. unexplained", "B. strange", "C. necessary", "D. useful"], 
    answer: "C. necessary",
    explanation: "**Redundant** means not or no longer needed or useful. The opposite is **necessary**. *Example: Avoid **redundant** phrases; keep only the **necessary** words.*"
  },
  { 
    id: 13, 
    section: "Antonyms", 
    instruction: ANTONYM_INSTRUCTION, 
    text: "Ndeni gave a **flawless** speech at the party.", 
    options: ["A. a wonderful", "B. a careless", "C. an interesting", "D. an imperfect"], 
    answer: "D. an imperfect",
    explanation: "**Flawless** means without any imperfections or defects. The opposite is **imperfect**. *Example: Her performance was **flawless**, unlike the **imperfect** rehearsal.*"
  },
  { 
    id: 14, 
    section: "Antonyms", 
    instruction: ANTONYM_INSTRUCTION, 
    text: "The captain says sports is being **debased** by commercial sponsorship.", 
    options: ["A. localized", "B. perverted", "C. elevated", "D. overvalued"], 
    answer: "C. elevated",
    explanation: "**Debased** means reduced in quality or value. The opposite is **elevated**. *Example: The currency was **debased**, but the new policy **elevated** its status.*"
  },
  { 
    id: 15, 
    section: "Antonyms", 
    instruction: ANTONYM_INSTRUCTION, 
    text: "The report of the committee contained a **plethora** of details.", 
    options: ["A. shortage", "B. simplicity", "C. multitude", "D. spectrum"], 
    answer: "A. shortage",
    explanation: "**Plethora** means a large or excessive amount of something. The opposite is **shortage**. *Example: There is a **plethora** of options, but a **shortage** of time.*"
  },
  { 
    id: 16, 
    section: "Antonyms", 
    instruction: ANTONYM_INSTRUCTION, 
    text: "Ada gave her husband a look that made words **superfluous**.", 
    options: ["A. redundant", "B. spurious", "C. unnecessary", "D. scanty"], 
    answer: "D. scanty",
    explanation: "**Superfluous** means unnecessary, especially through being more than enough. The opposite is **scanty** (insufficient). *Example: The extra help was **superfluous** as the work was already **scanty**.*"
  },
  { 
    id: 17, 
    section: "Antonyms", 
    instruction: ANTONYM_INSTRUCTION, 
    text: "Prolonged strike action **debilitated** the industry.", 
    options: ["A. invigorated", "B. isolated", "C. weakened", "D. destroyed"], 
    answer: "A. invigorated",
    explanation: "**Debilitated** means to make someone or something weak. The opposite is **invigorated** (strengthened). *Example: The illness **debilitated** him, but the medicine **invigorated** his spirit.*"
  },
  { 
    id: 18, 
    section: "Antonyms", 
    instruction: ANTONYM_INSTRUCTION, 
    text: "The lamp shades were **translucent**.", 
    options: ["A. opaque", "B. interested", "C. luminous", "D. transparent"], 
    answer: "A. opaque",
    explanation: "**Translucent** means allowing light, but not detailed shapes, to pass through. The opposite is **opaque** (not transparent). *Example: The glass was **translucent**, but the wooden door was **opaque**.*"
  },
  { 
    id: 19, 
    section: "Antonyms", 
    instruction: ANTONYM_INSTRUCTION, 
    text: "The testimony of the witness was **vague**.", 
    options: ["A. disturbing", "B. true", "C. ambiguous", "D. clear"], 
    answer: "D. clear",
    explanation: "**Vague** means uncertain, indefinite, or unclear. The opposite is **clear**. *Example: His instructions were **vague**, so I asked for a **clear** explanation.*"
  },
  { 
    id: 20, 
    section: "Antonyms", 
    instruction: ANTONYM_INSTRUCTION, 
    text: "As a student, Isa tried **communal** living for a few years.", 
    options: ["A. collective", "B. general", "C. shared", "D. private"], 
    answer: "D. private",
    explanation: "**Communal** means shared by all members of a community. The opposite is **private**. *Example: They shared a **communal** kitchen but had **private** bedrooms.*"
  },
  // Clause and Sentence Patterns
  { 
    id: 21, 
    section: "Interpretation", 
    instruction: INTERPRETATION_INSTRUCTION, 
    text: "Though Mr. Iro is a new chairman, he views other members with **jaundiced eye**.", 
    options: ["A. He takes a rather forceful position", "B. He takes an unfavourable position", "C. He takes a sickly view", "D. He takes a rather hazy view"], 
    answer: "B. He takes an unfavourable position",
    explanation: "To view with a **jaundiced eye** means to be prejudiced or have an unfavourable view. *Example: Because of past failures, he views new proposals with a **jaundiced eye** (unfavourable position).*"
  },
  { 
    id: 22, 
    section: "Interpretation", 
    instruction: INTERPRETATION_INSTRUCTION, 
    text: "It was good to **steer a middle course** in whatever one does.", 
    options: ["A. midway in anything", "B. act with moderation", "C. move away from the forefront", "D. work very hard"], 
    answer: "B. act with moderation",
    explanation: "To **steer a middle course** means to act with moderation or avoid extremes. *Example: In politics, it's often best to **steer a middle course** (act with moderation) to satisfy everyone.*"
  },
  { 
    id: 23, 
    section: "Interpretation", 
    instruction: INTERPRETATION_INSTRUCTION, 
    text: "The witness said he had **no axe to grind** with his brothers.", 
    options: ["A. no hatred", "B. stole the matchet", "C. borrowed their matchet", "D. no vested interest"], 
    answer: "D. no vested interest",
    explanation: "To have **no axe to grind** means to have no private or selfish motive. *Example: I'm just giving my honest opinion; I have **no axe to grind** (no vested interest) in this matter.*"
  },
  { 
    id: 24, 
    section: "Interpretation", 
    instruction: INTERPRETATION_INSTRUCTION, 
    text: "As regards the matter, we have **crossed the Rubicon**.", 
    options: ["A. completely at a loss", "B. irrevocably committed", "C. already qualified", "D. perfectly committed"], 
    answer: "B. irrevocably committed",
    explanation: "To **cross the Rubicon** means to take a step that cannot be undone. *Example: Once we signed the contract, we had **crossed the Rubicon** (irrevocably committed).*"
  },
  { 
    id: 25, 
    section: "Interpretation", 
    instruction: INTERPRETATION_INSTRUCTION, 
    text: "Uche is **full of himself**.", 
    options: ["A. He is conceited", "B. He is complete", "C. He is a rich man", "D. He is careful"], 
    answer: "A. He is conceited",
    explanation: "**Full of oneself** means to be very self-satisfied or conceited. *Example: Since he won the award, he's been very **full of himself** (conceited).*"
  },
  { 
    id: 26, 
    section: "Interpretation", 
    instruction: INTERPRETATION_INSTRUCTION, 
    text: "The woman was mournful as her husband was found **dead drunk**.", 
    options: ["A. absolutely drunk", "B. apprehensive he would drink again", "C. as helpless as a dead man", "D. husband drank and died"], 
    answer: "A. absolutely drunk",
    explanation: "**Dead drunk** means extremely or absolutely intoxicated. *Example: He couldn't even walk home because he was **dead drunk** (absolutely drunk).*"
  },
  { 
    id: 27, 
    section: "Interpretation", 
    instruction: INTERPRETATION_INSTRUCTION, 
    text: "The hunter has a **bird’s-eye view** of the animals.", 
    options: ["A. views from a high position", "B. views the bird’s eye", "C. views with one eye", "D. watches closely"], 
    answer: "A. views from a high position",
    explanation: "A **bird’s-eye view** is a general view from above. *Example: From the top of the tower, we had a **bird’s-eye view** (view from a high position) of the city.*"
  },
  { 
    id: 28, 
    section: "Interpretation", 
    instruction: INTERPRETATION_INSTRUCTION, 
    text: "Mrs. Adasu does all her work with **more haste, less speed**.", 
    options: ["A. haste and speed", "B. hurriedly", "C. quickly to avoid mistakes", "D. carefully to avoid mistakes"], 
    answer: "D. carefully to avoid mistakes",
    explanation: "**More haste, less speed** means that if you try to do things too quickly, you will make mistakes and take longer. *Example: Don't rush the report; remember, **more haste, less speed** (work carefully to avoid mistakes).*"
  },
  { 
    id: 29, 
    section: "Interpretation", 
    instruction: INTERPRETATION_INSTRUCTION, 
    text: "She stopped her education as her uncle **left her in the lurch**.", 
    options: ["A. uncle deceived her", "B. disinherited her", "C. refused to help her", "D. disrespected her"], 
    answer: "C. refused to help her",
    explanation: "To **leave someone in the lurch** means to leave them in a difficult situation without help. *Example: My partner quit just before the deadline and **left me in the lurch** (refused to help me).*"
  },
  { 
    id: 30, 
    section: "Interpretation", 
    instruction: INTERPRETATION_INSTRUCTION, 
    text: "Okon’s company **took a hit** last year.", 
    options: ["A. improved", "B. huge success", "C. badly damaged", "D. was established"], 
    answer: "C. badly damaged",
    explanation: "To **take a hit** means to suffer a financial loss or damage. *Example: The tourism industry **took a hit** (was badly damaged) during the pandemic.*"
  },
  // Word Classes, Mood, Tense, Concord, Degree, and Tags
  { 
    id: 31, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "Lemoti……… as a painter, but also as a sculptor.", 
    options: ["A. is a gifted only not", "B. is only not gifted", "C. is gifted not only", "D. is only gifted"], 
    answer: "C. is gifted not only",
    explanation: "The structure 'not only... but also' is used for emphasis. *Example: He is **gifted not only** as a painter but also as a sculptor.*"
  },
  { 
    id: 32, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "He can recall the important dates in the nation’s history, it is interesting to listen as he rattles ……….", 
    options: ["A. off", "B. over", "C. up", "D. out"], 
    answer: "A. off",
    explanation: "To **rattle off** means to say something quickly from memory. *Example: She can **rattle off** (recite quickly) all the presidents' names.*"
  },
  { 
    id: 33, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "His wife was badly injured in the fracas, but I think she will pull ……. .", options: ["A. up", "B. over", "C. through", "D. back"], 
    answer: "C. through",
    explanation: "To **pull through** means to survive a dangerous or difficult situation. *Example: It was a serious operation, but the doctors think he will **pull through** (survive).*"
  },
  { 
    id: 34, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "A wide range of options …….. made available to students in the final year last year.", 
    options: ["A. is", "B. were", "C. are", "D. was"], 
    answer: "D. was",
    explanation: "'A wide range' is a singular collective noun phrase, so it takes a singular verb 'was'. *Example: A wide range of products **was** (singular verb) displayed at the fair.*"
  },
  { 
    id: 35, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "One of the women who …….. in the premises ……. been ordered to quit.", 
    options: ["A. sells/have", "B. sell/has", "C. sell/have", "D. sells/has"], 
    answer: "B. sell/has",
    explanation: "'Who sell' refers to the women (plural), but 'One... has' refers to the subject 'One' (singular). *Example: One of the women who **sell** (plural) here **has** (singular) been asked to leave.*"
  },
  { 
    id: 36, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "Paper is made……. wood pulp.", 
    options: ["A. on", "B. of", "C. from", "D. with"], 
    answer: "C. from",
    explanation: "'Made from' is used when the material undergoes a chemical change. *Example: Paper is **made from** (chemical change) wood pulp.*"
  },
  { 
    id: 37, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "They are the…….. dresses.", 
    options: ["A. babys’", "B. baby", "C. babies", "D. babies’"], 
    answer: "D. babies’",
    explanation: "The plural of 'baby' is 'babies'. The possessive of plural 'babies' is 'babies''. *Example: These are the **babies’** (plural possessive) dresses.*"
  },
  { 
    id: 38, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "Suara needn’t come with us...?", 
    options: ["A. need she", "B. will she", "C. can she", "D. does she"], 
    answer: "A. need she",
    explanation: "The question tag for 'needn't' is 'need'. *Example: You **needn't** worry, **need** you?*"
  },
  { 
    id: 39, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "Of the three girls, Uka is the….", 
    options: ["A. so much notorious", "B. notorious", "C. naught", "D. naughtiest"], 
    answer: "D. naughtiest",
    explanation: "When comparing more than two things, use the superlative degree 'naughtiest'. *Example: Of all the students, he is the **naughtiest** (superlative).*"
  },
  { 
    id: 40, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "Instead of… she lied.", 
    options: ["A. pleading", "B. her to plead", "C. her pleading", "D. plead"], 
    answer: "A. pleading",
    explanation: "'Instead of' is followed by a gerund (-ing form). *Example: **Instead of pleading** (gerund), she chose to lie.*"
  },
  { 
    id: 41, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "If he were here, it could be more fun.", 
    options: ["A. He was expected but did not show up", "B. There was no fun because he was not present", "C. He did not show up and so the occasion lacked much fun", "D. He was being expected to supply more fun"], 
    answer: "B. There was no fun because he was not present",
    explanation: "The subjunctive 'If he were here' implies he is NOT here. *Example: **If he were here** (but he isn't), we would have more fun.*"
  },
  { 
    id: 42, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "The mechanic did not tell me the brakes were bad.", 
    options: ["A. was", "B. were", "C. is", "D. are"], 
    answer: "B. were",
    explanation: "'Brakes' is plural, so it takes the plural verb 'were'. *Example: The **brakes were** (plural verb) faulty.*"
  },
  { 
    id: 43, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "He ran out when he saw the teacher ...?", 
    options: ["A. didn't he", "B. did he", "C. was he", "D. wasn't he"], 
    answer: "A. didn't he",
    explanation: "The question tag for a positive past tense sentence is 'didn't he'. *Example: He **ran** out, **didn't he**?*"
  },
  { 
    id: 44, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "Parents should be good examples to their children.", 
    options: ["A. for", "B. to", "C. with", "D. by"], 
    answer: "B. to",
    explanation: "The correct preposition is 'examples to'. *Example: Be a good **example to** (correct preposition) your younger siblings.*"
  },
  { 
    id: 45, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "One should be careful how one behaves in the public, shouldn’t ...?", 
    options: ["A. they", "B. he", "C. one", "D. you"], 
    answer: "C. one",
    explanation: "When the subject is 'one', the tag should also use 'one'. *Example: **One** should be careful, shouldn't **one**?*"
  },
  { 
    id: 46, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "She was on the verge of tears.", 
    options: ["A. in", "B. on", "C. at", "D. by"], 
    answer: "B. on",
    explanation: "The correct idiom is 'on the verge of'. *Example: She was **on the verge of** (correct idiom) a breakdown.*"
  },
  { 
    id: 47, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "We stood up when the principal came in ...?", 
    options: ["A. didn't we", "B. did we", "C. was we", "D. weren't we"], 
    answer: "A. didn't we",
    explanation: "The question tag for 'We stood up' is 'didn't we'. *Example: **We stood up**, **didn't we**?*"
  },
  { 
    id: 48, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "I wanted to know his political beliefs, so I asked him what ... .", 
    options: ["A. these were", "B. were these", "C. this was", "D. was this"], 
    answer: "A. these were",
    explanation: "In reported questions, the subject comes before the verb. *Example: I asked him **what these were** (subject-verb order).*"
  },
  { 
    id: 49, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "He was both a writer and a politician, but he was better as a singer.", 
    options: ["A. as", "B. than", "C. like", "D. for"], 
    answer: "A. as",
    explanation: "'Better as' is used to compare roles. *Example: He was a good actor, but **better as** (comparing roles) a director.*"
  },
  { 
    id: 50, 
    section: "Sentence Completion", 
    instruction: COMPLETION_INSTRUCTION, 
    text: "Many a candidate fails to realize the difference between written and spoken English.", 
    options: ["A. Many a candidate", "B. Many candidates", "C. Much candidate", "D. Most candidate"], 
    answer: "A. Many a candidate",
    explanation: "'Many a' is followed by a singular noun and singular verb. *Example: **Many a candidate fails** (singular noun and verb) to pass.*"
  },
  // Mechanics
  { 
    id: 51, 
    section: "Mechanics", 
    instruction: "Select the correct spelling:", 
    text: "Select the correct spelling:", 
    options: ["A. pronuntiation", "B. pronounciation", "C. pronunciation", "D. pronountiation"], 
    answer: "C. pronunciation",
    explanation: "The correct spelling is **pronunciation**. *Example: His **pronunciation** (correct spelling) of the word was perfect.*"
  },
  { 
    id: 52, 
    section: "Mechanics", 
    instruction: "Select the correct spelling:", 
    text: "Select the correct spelling:", 
    options: ["A. carier", "B. career", "C. carrier", "D. carrear"], 
    answer: "C. carrier",
    explanation: "A **carrier** is a person or thing that carries something. *Example: The mail **carrier** (correct spelling) delivered the package.*"
  },
  { 
    id: 53, 
    section: "Mechanics", 
    instruction: "Select the correct spelling:", 
    text: "Select the correct spelling:", 
    options: ["A. auxillary", "B. auxilliary", "C. auxilary", "D. auxiliary"], 
    answer: "D. auxiliary",
    explanation: "The correct spelling is **auxiliary**. *Example: The ship has an **auxiliary** (correct spelling) engine.*"
  },
  { 
    id: 54, 
    section: "Mechanics", 
    instruction: "Choose the same vowel sound as in **coup**:", 
    text: "Choose the same vowel sound as in **coup**:", 
    options: ["A. whup", "B. hoot", "C. couple", "D. scout"], 
    answer: "B. hoot",
    explanation: "'Coup' has the /u:/ sound, same as in **hoot**. *Example: The owl began to **hoot** (same vowel sound as coup).*"
  },
  { 
    id: 55, 
    section: "Mechanics", 
    instruction: "Identify the word with a different stress pattern:", 
    text: "Identify the word with a different stress pattern:", 
    options: ["A. administrative", "B. circulation", "C. temperamental", "D. consideration"], 
    answer: "A. administrative",
    explanation: "**Administrative** is stressed on the second syllable, while the others are stressed on the third. *Example: She handles the **administrative** (different stress) tasks.*"
  },
  { 
    id: 56, 
    section: "Mechanics", 
    instruction: "Choose the most appropriate stress pattern for **POLITICAL**:", 
    text: "Choose the most appropriate stress pattern for **POLITICAL**:", 
    options: ["A. poliTIcal", "B. PoLItical", "C. POlitical", "D. political"], 
    answer: "B. PoLItical",
    explanation: "**Political** is stressed on the second syllable. *Example: He has strong **political** (stressed on second syllable) views.*"
  },
  { 
    id: 57, 
    section: "Mechanics", 
    instruction: "Choose the most appropriate stress pattern for **CAPTIVITY**:", 
    text: "Choose the most appropriate stress pattern for **CAPTIVITY**:", 
    options: ["A. captiVIty", "B. CAPtivity", "C. capTIvity", "D. CAPtiviTY"], 
    answer: "C. capTIvity",
    explanation: "**Captivity** is stressed on the second syllable. *Example: The animals were kept in **captivity** (stressed on second syllable).*"
  },
  { 
    id: 58, 
    section: "Mechanics", 
    instruction: "Choose the most appropriate stress pattern for **TERMINATION**:", 
    text: "Choose the most appropriate stress pattern for **TERMINATION**:", 
    options: ["A. terminaTION", "B. TERmination", "C. termiNAtion", "D. terMInation"], 
    answer: "C. termiNAtion",
    explanation: "**Termination** is stressed on the third syllable. *Example: The contract reached its **termination** (stressed on third syllable).*"
  },
  { 
    id: 59, 
    section: "Mechanics", 
    instruction: "Identify the same consonant sound as the bolded in **thought**:", 
    text: "Identify the same consonant sound as the bolded in **thought**:", 
    options: ["A. theatre", "B. taught", "C. weather", "D. fate"], 
    answer: "A. theatre",
    explanation: "'Thought' starts with the /θ/ sound, same as in **theatre**. *Example: We went to the **theatre** (same consonant sound as thought).*"
  },
  { 
    id: 60, 
    section: "Mechanics", 
    instruction: "Choose the word with the same stress pattern as **ENORMOUS**:", 
    text: "Choose the word with the same stress pattern as **ENORMOUS**:", 
    options: ["A. interest", "B. solution", "C. stupidly", "D. character"], 
    answer: "B. solution",
    explanation: "**Enormous** and **solution** are both stressed on the second syllable. *Example: This is the perfect **solution** (same stress pattern as enormous).*"
  }
];
