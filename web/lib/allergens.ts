/**
 * Allergen information database
 * Contains detailed information about common food allergens
 */

export interface AllergenInfo {
  name: string;
  commonNames: string[]; // Alternative names and related terms
  severity: 'low' | 'moderate' | 'high' | 'very_high';
  description: string;
  symptoms: string[];
  crossContamination: string[];
  management: string[];
  prevalence: string; // How common this allergy is
  relatedAllergens: string[]; // Other allergens that might be related or co-occur
}

export const ALLERGENS_DATABASE: Record<string, AllergenInfo> = {
  'milk': {
    name: 'Milk Allergy',
    commonNames: ['milk', 'dairy', 'lactose', 'casein', 'whey', 'butter', 'cheese', 'yogurt', 'cream'],
    severity: 'high',
    description: 'Milk allergy is an immune reaction to proteins found in cow\'s milk and other dairy products. It\'s different from lactose intolerance.',
    symptoms: [
      'Hives or rash',
      'Swelling of lips, tongue, or throat',
      'Nausea, vomiting, or diarrhea',
      'Wheezing or difficulty breathing',
      'Anaphylaxis (severe cases)',
      'Itchy mouth or throat'
    ],
    crossContamination: [
      'Shared equipment with dairy products',
      'Butter residue on cooking surfaces',
      'Hidden milk proteins in processed foods',
      'Non-dairy products processed in dairy facilities'
    ],
    management: [
      'Avoid all milk and dairy products',
      'Read ingredient labels carefully',
      'Ask about ingredients when dining out',
      'Carry emergency medication if prescribed',
      'Consider calcium supplements for bone health'
    ],
    prevalence: '2-3% of children under 3 years old',
    relatedAllergens: ['casein', 'whey', 'lactose']
  },

  'eggs': {
    name: 'Egg Allergy',
    commonNames: ['eggs', 'egg', 'albumin', 'lecithin', 'lysozyme', 'ovalbumin'],
    severity: 'high',
    description: 'Egg allergy occurs when the immune system reacts to proteins in egg whites or yolks.',
    symptoms: [
      'Skin reactions (hives, eczema)',
      'Gastrointestinal symptoms (nausea, vomiting)',
      'Respiratory issues (coughing, wheezing)',
      'Anaphylaxis (rare but possible)',
      'Itchy mouth or throat'
    ],
    crossContamination: [
      'Shared cooking equipment with egg-containing foods',
      'Bakery items with egg wash',
      'Mayonnaise or other egg-based sauces',
      'Processed foods with hidden egg proteins'
    ],
    management: [
      'Avoid all egg products',
      'Check for egg-derived ingredients (albumin, lecithin)',
      'Be cautious with vaccines containing egg proteins',
      'Carry epinephrine if prescribed'
    ],
    prevalence: '1-2% of young children',
    relatedAllergens: ['chicken', 'poultry']
  },

  'peanuts': {
    name: 'Peanut Allergy',
    commonNames: ['peanuts', 'groundnuts', 'monkey nuts', 'arachis oil', 'peanut oil'],
    severity: 'very_high',
    description: 'Peanut allergy is one of the most common and severe food allergies, often lifelong.',
    symptoms: [
      'Hives or skin rash',
      'Itching or swelling of mouth, tongue, or throat',
      'Nausea, vomiting, or diarrhea',
      'Difficulty breathing or wheezing',
      'Anaphylactic shock',
      'Cardiovascular collapse'
    ],
    crossContamination: [
      'Shared processing equipment',
      'Trace amounts in packaged foods',
      'Cross-contact in restaurants',
      'Peanut oil in unexpected products'
    ],
    management: [
      'Strict avoidance of peanuts and peanut products',
      'Read all food labels',
      'Avoid cross-contaminated products',
      'Carry epinephrine auto-injector',
      'Educate caregivers and school staff'
    ],
    prevalence: '1-2% of the population',
    relatedAllergens: ['tree nuts', 'legumes']
  },

  'tree nuts': {
    name: 'Tree Nut Allergy',
    commonNames: ['almonds', 'walnuts', 'cashews', 'pistachios', 'pecans', 'hazelnuts', 'brazil nuts', 'macadamia nuts', 'pine nuts'],
    severity: 'very_high',
    description: 'Tree nut allergy affects people who are allergic to one or more tree nuts. It\'s often severe and lifelong.',
    symptoms: [
      'Oral allergy syndrome (itching of mouth/throat)',
      'Hives or rash',
      'Nausea and vomiting',
      'Abdominal pain',
      'Difficulty breathing',
      'Anaphylaxis'
    ],
    crossContamination: [
      'Shared processing facilities',
      'Cross-contact in restaurants',
      'Hidden nuts in processed foods',
      'Nut oils in unexpected products'
    ],
    management: [
      'Avoid all tree nuts if allergic to one',
      'Read ingredient labels carefully',
      'Be aware of nut-derived oils',
      'Carry epinephrine',
      'Inform restaurants about allergy'
    ],
    prevalence: '1% of the population',
    relatedAllergens: ['peanuts', 'seeds']
  },

  'wheat': {
    name: 'Wheat Allergy',
    commonNames: ['wheat', 'gluten', 'flour', 'bran', 'germ', 'wheat starch', 'vital wheat gluten'],
    severity: 'high',
    description: 'Wheat allergy is an immune response to wheat proteins. It\'s different from celiac disease or gluten sensitivity.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling of mouth/throat',
      'Nausea, vomiting, abdominal pain',
      'Diarrhea',
      'Runny nose or watery eyes',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Shared equipment in food processing',
      'Gluten-free products contaminated with wheat',
      'Hidden wheat in sauces and seasonings',
      'Cross-contact in restaurants'
    ],
    management: [
      'Avoid wheat and wheat-derived ingredients',
      'Check for wheat in processed foods',
      'Be aware of gluten-free labeling',
      'Carry medication for severe reactions'
    ],
    prevalence: '0.5-1% of children',
    relatedAllergens: ['gluten', 'barley', 'rye']
  },

  'soy': {
    name: 'Soy Allergy',
    commonNames: ['soy', 'soybeans', 'soya', 'soy lecithin', 'soy protein', 'tofu', 'tempeh', 'edamame'],
    severity: 'moderate',
    description: 'Soy allergy occurs when the immune system reacts to proteins in soybeans and soy products.',
    symptoms: [
      'Hives or skin rash',
      'Itching in mouth or throat',
      'Nausea, vomiting, or diarrhea',
      'Runny nose',
      'Wheezing or coughing',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Shared processing equipment',
      'Soy lecithin in unexpected products',
      'Cross-contact in food preparation',
      'Hidden soy in processed foods'
    ],
    management: [
      'Avoid soy and soy-derived ingredients',
      'Check labels for soy proteins',
      'Be aware of lecithin in medications',
      'Carry epinephrine if severe reactions occur'
    ],
    prevalence: '0.4% of children',
    relatedAllergens: ['peanuts', 'legumes']
  },

  'fish': {
    name: 'Fish Allergy',
    commonNames: ['fish', 'seafood', 'salmon', 'tuna', 'cod', 'halibut', 'fish oil', 'fish gelatin'],
    severity: 'high',
    description: 'Fish allergy is an immune reaction to proteins found in finned fish.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis'
    ],
    crossContamination: [
      'Shared cooking equipment',
      'Fish oils in supplements',
      'Cross-contact in restaurants',
      'Fish-derived ingredients in processed foods'
    ],
    management: [
      'Avoid all finned fish',
      'Be cautious with fish oil supplements',
      'Check for fish-derived ingredients',
      'Carry epinephrine',
      'Inform restaurants about allergy'
    ],
    prevalence: '0.5% of adults',
    relatedAllergens: ['shellfish', 'seafood']
  },

  'shellfish': {
    name: 'Shellfish Allergy',
    commonNames: ['shellfish', 'crustaceans', 'shrimp', 'lobster', 'crab', 'crayfish', 'prawns', 'mollusks', 'clams', 'oysters', 'scallops'],
    severity: 'high',
    description: 'Shellfish allergy includes allergy to crustaceans and mollusks, often severe and lifelong.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling of mouth/throat',
      'Nausea, vomiting, abdominal pain',
      'Diarrhea',
      'Wheezing or difficulty breathing',
      'Anaphylaxis'
    ],
    crossContamination: [
      'Shared cooking equipment',
      'Fish stock or broth',
      'Seafood restaurants',
      'Hidden shellfish in processed foods'
    ],
    management: [
      'Avoid all shellfish (crustaceans and mollusks)',
      'Be cautious in seafood restaurants',
      'Check for shellfish-derived ingredients',
      'Carry epinephrine',
      'Educate food service workers'
    ],
    prevalence: '0.5-1% of adults',
    relatedAllergens: ['fish', 'seafood']
  },

  'sesame': {
    name: 'Sesame Allergy',
    commonNames: ['sesame', 'sesame seeds', 'tahini', 'sesame oil', 'benne seeds', 'simsim'],
    severity: 'high',
    description: 'Sesame allergy has become increasingly common and can cause severe reactions.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis'
    ],
    crossContamination: [
      'Shared processing equipment',
      'Tahini in hummus and other foods',
      'Sesame oil in cooking',
      'Hidden sesame in baked goods'
    ],
    management: [
      'Avoid sesame and sesame-derived products',
      'Check for sesame in Asian and Middle Eastern foods',
      'Read labels carefully',
      'Carry epinephrine'
    ],
    prevalence: '0.2-0.5% of children and adults',
    relatedAllergens: ['seeds', 'nuts']
  },

  'mustard': {
    name: 'Mustard Allergy',
    commonNames: ['mustard', 'mustard seeds', 'mustard powder', 'prepared mustard', 'dijon mustard'],
    severity: 'moderate',
    description: 'Mustard allergy is an immune reaction to mustard seeds and prepared mustard.',
    symptoms: [
      'Oral allergy syndrome',
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Runny nose',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Shared processing equipment',
      'Hidden mustard in processed foods',
      'Cross-contact in food preparation',
      'Spices and seasonings'
    ],
    management: [
      'Avoid mustard and mustard-derived products',
      'Check labels for mustard ingredients',
      'Be aware of cross-contamination',
      'Carry medication for reactions'
    ],
    prevalence: 'Rare, but increasing',
    relatedAllergens: ['cabbage family', 'broccoli', 'cauliflower']
  },

  'celery': {
    name: 'Celery Allergy',
    commonNames: ['celery', 'celery seed', 'celery salt', 'cress', 'lovage', 'fennel', 'carrot family'],
    severity: 'moderate',
    description: 'Celery allergy is often associated with pollen allergies and can cause oral allergy syndrome.',
    symptoms: [
      'Oral allergy syndrome (itching of mouth/throat)',
      'Hives or rash',
      'Nausea, vomiting',
      'Abdominal pain',
      'Runny nose, watery eyes',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Hidden celery in processed foods',
      'Spice mixes and seasonings',
      'Bouillon cubes and stocks',
      'Cross-contact in food preparation'
    ],
    management: [
      'Avoid celery and celery-derived products',
      'Check for celery in soups and stocks',
      'Be aware of related herbs and spices',
      'Carry medication for reactions'
    ],
    prevalence: 'Rare in general population',
    relatedAllergens: ['carrot', 'parsley', 'fennel']
  },

  'sulfites': {
    name: 'Sulfite Sensitivity',
    commonNames: ['sulfites', 'sulphites', 'sulfur dioxide', 'sodium sulfite', 'potassium bisulfite', 'wine', 'dried fruits'],
    severity: 'moderate',
    description: 'Sulfite sensitivity affects people with asthma and can cause respiratory reactions.',
    symptoms: [
      'Wheezing or difficulty breathing (especially in asthmatics)',
      'Hives or rash',
      'Nausea, vomiting, diarrhea',
      'Flushing',
      'Low blood pressure',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Wine and beer',
      'Dried fruits and vegetables',
      'Processed foods with preservatives',
      'Medications and cosmetics'
    ],
    management: [
      'Avoid foods with sulfite preservatives',
      'Check labels for sulfite-containing ingredients',
      'Be cautious with wine and dried fruits',
      'Inform healthcare providers'
    ],
    prevalence: '1% of population, higher in asthmatics',
    relatedAllergens: ['wine', 'preservatives']
  },

  'lupin': {
    name: 'Lupin Allergy',
    commonNames: ['lupin', 'lupine', 'lupini beans', 'lupin flour', 'lupin protein'],
    severity: 'high',
    description: 'Lupin allergy is related to peanut allergy and can cause severe reactions.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis'
    ],
    crossContamination: [
      'Shared processing with legumes',
      'Cross-contact in food production',
      'Hidden lupin in baked goods',
      'Flour blends and protein supplements'
    ],
    management: [
      'Avoid lupin and lupin-derived products',
      'Check for lupin in gluten-free products',
      'Be aware of cross-contamination with legumes',
      'Carry epinephrine'
    ],
    prevalence: 'Rare but increasing with use in foods',
    relatedAllergens: ['peanuts', 'legumes']
  },

  'corn': {
    name: 'Corn Allergy',
    commonNames: ['corn', 'maize', 'corn starch', 'corn syrup', 'corn oil', 'corn flour', 'cornmeal', 'popcorn'],
    severity: 'moderate',
    description: 'Corn allergy occurs when the immune system reacts to proteins in corn and corn-derived products.',
    symptoms: [
      'Skin reactions (hives, eczema)',
      'Gastrointestinal symptoms (nausea, vomiting, diarrhea)',
      'Respiratory issues (runny nose, wheezing)',
      'Oral allergy syndrome',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Shared processing equipment',
      'Corn-derived ingredients in processed foods',
      'High-fructose corn syrup in unexpected products',
      'Corn starch in medications and supplements'
    ],
    management: [
      'Avoid corn and corn-derived products',
      'Check for corn starch and corn syrup in foods',
      'Read labels carefully for hidden corn ingredients',
      'Be cautious with processed foods'
    ],
    prevalence: '0.5-1% of children',
    relatedAllergens: ['pollen', 'grasses']
  },

  'kiwi': {
    name: 'Kiwi Allergy',
    commonNames: ['kiwi', 'kiwifruit', 'chinese gooseberry', 'actinidia'],
    severity: 'moderate',
    description: 'Kiwi allergy often causes oral allergy syndrome and can be related to latex allergy.',
    symptoms: [
      'Oral allergy syndrome (itching of mouth/throat)',
      'Hives or rash',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Swelling of lips, tongue, or throat',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Cross-contamination in fruit salads',
      'Shared preparation surfaces',
      'Fruit juices and smoothies',
      'Processed foods containing kiwi'
    ],
    management: [
      'Avoid kiwi and kiwi-containing products',
      'Be cautious with fresh fruit',
      'Check for kiwi in fruit-based products',
      'Carry antihistamines for mild reactions'
    ],
    prevalence: '0.1-0.3% of children',
    relatedAllergens: ['latex', 'banana', 'avocado']
  },

  'banana': {
    name: 'Banana Allergy',
    commonNames: ['banana', 'plantain', 'banana lectin'],
    severity: 'low',
    description: 'Banana allergy is relatively rare but can occur, often with oral allergy syndrome.',
    symptoms: [
      'Oral allergy syndrome (itching of mouth/throat)',
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting',
      'Abdominal discomfort',
      'Anaphylaxis (very rare)'
    ],
    crossContamination: [
      'Cross-contamination in fruit preparations',
      'Banana in smoothies and baked goods',
      'Banana-derived ingredients',
      'Shared kitchen equipment'
    ],
    management: [
      'Avoid bananas and banana products',
      'Check for banana in processed foods',
      'Be aware of plantain as related',
      'Peel bananas to reduce allergen exposure'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['kiwi', 'avocado', 'latex']
  },

  'avocado': {
    name: 'Avocado Allergy',
    commonNames: ['avocado', 'alligator pear', 'avocado oil'],
    severity: 'moderate',
    description: 'Avocado allergy is often associated with latex allergy and can cause oral allergy syndrome.',
    symptoms: [
      'Oral allergy syndrome (itching of mouth/throat)',
      'Hives or rash',
      'Itching or swelling of mouth',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Guacamole and dips',
      'Salads and sandwiches',
      'Avocado oil in cooking',
      'Cosmetics and lotions'
    ],
    management: [
      'Avoid avocado and avocado products',
      'Check for avocado oil in foods',
      'Be cautious with Mexican cuisine',
      'Inform about latex allergy if applicable'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['latex', 'kiwi', 'banana']
  },

  'meat': {
    name: 'Meat Allergy',
    commonNames: ['beef', 'pork', 'chicken', 'turkey', 'lamb', 'meat', 'poultry', 'red meat', 'gelatin'],
    severity: 'moderate',
    description: 'Meat allergy can develop to specific meats or all mammalian meats, often appearing in adulthood.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis'
    ],
    crossContamination: [
      'Shared cooking equipment',
      'Meat stocks and broths',
      'Processed foods with meat derivatives',
      'Gelatin in medications and foods'
    ],
    management: [
      'Avoid specific meats that cause reactions',
      'Check for meat derivatives in processed foods',
      'Be aware of gelatin in unexpected products',
      'Carry epinephrine for severe reactions'
    ],
    prevalence: 'Rare, more common in adults',
    relatedAllergens: ['gelatin', 'organ meats']
  },

  'garlic': {
    name: 'Garlic Allergy',
    commonNames: ['garlic', 'garlic powder', 'garlic salt', 'allium sativum'],
    severity: 'low',
    description: 'Garlic allergy is rare and can cause contact dermatitis or systemic reactions.',
    symptoms: [
      'Contact dermatitis',
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting',
      'Headache',
      'Anaphylaxis (very rare)'
    ],
    crossContamination: [
      'Shared cooking equipment',
      'Garlic powder in spice mixes',
      'Processed foods with garlic',
      'Restaurant cross-contamination'
    ],
    management: [
      'Avoid garlic and garlic-containing products',
      'Check for garlic powder in seasonings',
      'Be cautious with Asian and Mediterranean cuisine',
      'Use garlic-free alternatives'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['onion', 'leek', 'chives']
  },

  'onion': {
    name: 'Onion Allergy',
    commonNames: ['onion', 'onion powder', 'shallots', 'leeks', 'chives', 'scallions', 'green onions'],
    severity: 'low',
    description: 'Onion allergy is part of the allium family allergies and can cause various symptoms.',
    symptoms: [
      'Oral allergy syndrome',
      'Contact dermatitis',
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting',
      'Headache'
    ],
    crossContamination: [
      'Shared cooking equipment',
      'Onion powder in spice mixes',
      'Hidden onion in processed foods',
      'Restaurant preparations'
    ],
    management: [
      'Avoid onions and onion-family vegetables',
      'Check for onion powder in seasonings',
      'Be aware of related allium vegetables',
      'Cook foods thoroughly to reduce allergenicity'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['garlic', 'leek', 'chives']
  },

  'strawberry': {
    name: 'Strawberry Allergy',
    commonNames: ['strawberry', 'strawberries', 'strawberry extract'],
    severity: 'low',
    description: 'Strawberry allergy is one of the most common fruit allergies, often causing oral allergy syndrome.',
    symptoms: [
      'Oral allergy syndrome (itching of mouth/throat)',
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting',
      'Abdominal discomfort',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Fruit salads and desserts',
      'Strawberry in processed foods',
      'Jams and preserves',
      'Shared preparation surfaces'
    ],
    management: [
      'Avoid strawberries and strawberry products',
      'Check for strawberry in desserts and cereals',
      'Be cautious with fresh fruit',
      'Peel fruit to reduce allergen exposure'
    ],
    prevalence: '3-4% of young children',
    relatedAllergens: ['other berries', 'pollen']
  },

  'tomato': {
    name: 'Tomato Allergy',
    commonNames: ['tomato', 'tomatoes', 'tomato paste', 'tomato sauce', 'ketchup'],
    severity: 'low',
    description: 'Tomato allergy can cause reactions similar to other nightshade allergies.',
    symptoms: [
      'Oral allergy syndrome',
      'Contact dermatitis',
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting',
      'Abdominal discomfort'
    ],
    crossContamination: [
      'Tomato products in sauces and soups',
      'Processed foods with tomato',
      'Shared cooking equipment',
      'Restaurant preparations'
    ],
    management: [
      'Avoid tomatoes and tomato products',
      'Check for tomato in processed foods',
      'Be aware of nightshade sensitivities',
      'Cook tomatoes to reduce allergenicity'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['potato', 'eggplant', 'pepper']
  },

  'coconut': {
    name: 'Coconut Allergy',
    commonNames: ['coconut', 'coconut oil', 'coconut milk', 'coconut flour', 'desiccated coconut'],
    severity: 'moderate',
    description: 'Coconut allergy is separate from tree nut allergy and can cause reactions in sensitive individuals.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Coconut products in Asian cuisine',
      'Coconut oil in cooking',
      'Baked goods and desserts',
      'Cosmetics and lotions'
    ],
    management: [
      'Avoid coconut and coconut-derived products',
      'Check for coconut in processed foods',
      'Be aware of coconut oil in cooking',
      'Read labels carefully'
    ],
    prevalence: 'Rare, but increasing',
    relatedAllergens: ['tree nuts', 'seeds']
  },

  'sunflower': {
    name: 'Sunflower Allergy',
    commonNames: ['sunflower', 'sunflower seeds', 'sunflower oil', 'sunflower seed butter'],
    severity: 'moderate',
    description: 'Sunflower allergy is related to other seed allergies and can cause severe reactions.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis'
    ],
    crossContamination: [
      'Sunflower oil in cooking',
      'Baked goods with sunflower seeds',
      'Birdseed (for bird owners)',
      'Nut mixes and trail mixes'
    ],
    management: [
      'Avoid sunflower and sunflower products',
      'Check for sunflower oil in processed foods',
      'Be cautious with seed butters',
      'Carry epinephrine'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['sesame', 'mustard', 'other seeds']
  },

  'buckwheat': {
    name: 'Buckwheat Allergy',
    commonNames: ['buckwheat', 'soba noodles', 'buckwheat flour', 'kasha'],
    severity: 'moderate',
    description: 'Buckwheat allergy is common in some populations and can cause severe reactions.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis'
    ],
    crossContamination: [
      'Soba noodles in Asian cuisine',
      'Buckwheat in gluten-free products',
      'Pancakes and baked goods',
      'Shared milling equipment'
    ],
    management: [
      'Avoid buckwheat and buckwheat products',
      'Check for buckwheat in gluten-free foods',
      'Be cautious with Asian cuisine',
      'Read labels carefully'
    ],
    prevalence: 'Rare in general population',
    relatedAllergens: ['wheat', 'rice']
  },

  'yeast': {
    name: 'Yeast Allergy',
    commonNames: ['yeast', 'brewer\'s yeast', 'baker\'s yeast', 'nutritional yeast', 'candida'],
    severity: 'low',
    description: 'Yeast allergy can cause reactions to fermented foods and yeast-containing products.',
    symptoms: [
      'Digestive issues (bloating, gas, diarrhea)',
      'Skin reactions (hives, eczema)',
      'Fatigue and headaches',
      'Joint pain',
      'Respiratory symptoms',
      'Candida overgrowth symptoms'
    ],
    crossContamination: [
      'Fermented foods and beverages',
      'Baked goods and bread',
      'Nutritional supplements',
      'Medications and probiotics'
    ],
    management: [
      'Avoid yeast and yeast-containing products',
      'Limit fermented foods',
      'Check for yeast in supplements',
      'Consider gut health management'
    ],
    prevalence: 'Rare as true allergy',
    relatedAllergens: ['mold', 'fermented foods']
  },

  'chocolate': {
    name: 'Chocolate Allergy',
    commonNames: ['chocolate', 'cocoa', 'cacao', 'chocolate liquor', 'cocoa powder'],
    severity: 'low',
    description: 'Chocolate allergy is rare and usually related to other allergies or sensitivities.',
    symptoms: [
      'Skin reactions (hives, rash)',
      'Itching or swelling',
      'Nausea, vomiting',
      'Headache',
      'Abdominal discomfort',
      'Anaphylaxis (very rare)'
    ],
    crossContamination: [
      'Chocolate in desserts and candies',
      'Cocoa in processed foods',
      'Shared equipment in bakeries',
      'Chocolate coatings and fillings'
    ],
    management: [
      'Avoid chocolate and cocoa products',
      'Check for cocoa in processed foods',
      'Be aware of hidden chocolate ingredients',
      'Consider caffeine sensitivity'
    ],
    prevalence: 'Very rare as isolated allergy',
    relatedAllergens: ['milk', 'nuts', 'soy']
  },

  'chickpea': {
    name: 'Chickpea Allergy',
    commonNames: ['chickpea', 'chick peas', 'garbanzo beans', 'besan flour', 'chickpea flour', 'falafel'],
    severity: 'moderate',
    description: 'Chickpea allergy is part of legume allergies and can cause reactions similar to peanut allergy.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Hummus and Middle Eastern foods',
      'Falafel and vegetarian dishes',
      'Chickpea flour in gluten-free baking',
      'Shared processing with other legumes'
    ],
    management: [
      'Avoid chickpeas and chickpea products',
      'Check for chickpea flour in gluten-free foods',
      'Be cautious with Indian and Middle Eastern cuisine',
      'Carry epinephrine if severe reactions occur'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['peanuts', 'soy', 'other legumes']
  },

  'lentil': {
    name: 'Lentil Allergy',
    commonNames: ['lentil', 'lentils', 'red lentils', 'green lentils', 'brown lentils'],
    severity: 'moderate',
    description: 'Lentil allergy is common in legume-allergic individuals and can cause significant reactions.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis'
    ],
    crossContamination: [
      'Soups and stews',
      'Indian and Middle Eastern cuisine',
      'Vegetarian meat substitutes',
      'Shared processing equipment'
    ],
    management: [
      'Avoid lentils and lentil products',
      'Check for lentils in processed foods',
      'Be cautious with legume-based products',
      'Carry epinephrine for severe reactions'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['peanuts', 'soy', 'other legumes']
  },

  'latex': {
    name: 'Latex-Fruit Syndrome',
    commonNames: ['latex', 'natural rubber latex', 'fruit cross-reactivity'],
    severity: 'moderate',
    description: 'Latex allergy can cross-react with certain fruits, causing oral allergy syndrome.',
    symptoms: [
      'Oral allergy syndrome with certain fruits',
      'Contact dermatitis from latex',
      'Hives or rash',
      'Itching or swelling',
      'Anaphylaxis from latex exposure',
      'Respiratory reactions'
    ],
    crossContamination: [
      'Latex products (gloves, balloons)',
      'Cross-reactive fruits',
      'Medical equipment',
      'Rubber-containing products'
    ],
    management: [
      'Avoid latex products',
      'Be aware of cross-reactive fruits',
      'Carry medical alert for latex allergy',
      'Use latex-free alternatives'
    ],
    prevalence: '1-6% of general population',
    relatedAllergens: ['banana', 'avocado', 'kiwi', 'chestnut']
  },

  'apple': {
    name: 'Apple Allergy',
    commonNames: ['apple', 'apples', 'apple juice', 'apple cider', 'apple pectin'],
    severity: 'low',
    description: 'Apple allergy often causes oral allergy syndrome and is related to birch pollen allergy.',
    symptoms: [
      'Oral allergy syndrome (itching of mouth/throat)',
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting',
      'Abdominal discomfort',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Apple products in desserts',
      'Apple juice and cider',
      'Shared preparation surfaces',
      'Apple pectin in processed foods'
    ],
    management: [
      'Avoid apples and apple products',
      'Cook apples to reduce allergenicity',
      'Peel apples to reduce allergen exposure',
      'Be aware of birch pollen allergy connection'
    ],
    prevalence: '1-2% of children',
    relatedAllergens: ['pear', 'plum', 'cherry', 'birch pollen']
  },

  'citrus': {
    name: 'Citrus Allergy',
    commonNames: ['citrus', 'orange', 'lemon', 'lime', 'grapefruit', 'tangerine', 'clementine'],
    severity: 'low',
    description: 'Citrus allergy can affect various citrus fruits and their derivatives.',
    symptoms: [
      'Oral allergy syndrome',
      'Contact dermatitis',
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting',
      'Abdominal discomfort'
    ],
    crossContamination: [
      'Citrus fruits in juices and salads',
      'Citrus oils in cosmetics',
      'Processed foods with citrus',
      'Shared preparation surfaces'
    ],
    management: [
      'Avoid citrus fruits and derivatives',
      'Check for citrus in processed foods',
      'Be cautious with flavored products',
      'Use alternatives like vinegar or herbs'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['other citrus fruits']
  },

  'carrot': {
    name: 'Carrot Allergy',
    commonNames: ['carrot', 'carrots', 'carrot juice', 'carrot oil'],
    severity: 'low',
    description: 'Carrot allergy is often related to pollen allergies and can cause oral allergy syndrome.',
    symptoms: [
      'Oral allergy syndrome',
      'Contact dermatitis',
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting',
      'Abdominal discomfort'
    ],
    crossContamination: [
      'Carrot in salads and soups',
      'Carrot juice and smoothies',
      'Baby foods with carrots',
      'Shared cooking equipment'
    ],
    management: [
      'Avoid carrots and carrot products',
      'Cook carrots to reduce allergenicity',
      'Be aware of pollen allergy connections',
      'Check for hidden carrots in processed foods'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['celery', 'parsley', 'fennel', 'birch pollen']
  },

  'potato': {
    name: 'Potato Allergy',
    commonNames: ['potato', 'potatoes', 'sweet potato', 'yam', 'starch', 'potato protein'],
    severity: 'low',
    description: 'Potato allergy can cause reactions to both white and sweet potatoes.',
    symptoms: [
      'Oral allergy syndrome',
      'Contact dermatitis',
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting',
      'Abdominal discomfort'
    ],
    crossContamination: [
      'Potatoes in various dishes',
      'Potato starch in processed foods',
      'French fries and chips',
      'Shared frying equipment'
    ],
    management: [
      'Avoid potatoes and potato products',
      'Check for potato starch in foods',
      'Be aware of cross-contamination in restaurants',
      'Use alternative starches'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['tomato', 'eggplant', 'pepper']
  },

  'rice': {
    name: 'Rice Allergy',
    commonNames: ['rice', 'brown rice', 'white rice', 'rice flour', 'rice starch', 'rice protein'],
    severity: 'low',
    description: 'Rice allergy is more common in Asian populations and can cause various reactions.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Rice in Asian cuisine',
      'Rice flour in gluten-free products',
      'Rice starch in processed foods',
      'Shared cooking equipment'
    ],
    management: [
      'Avoid rice and rice-derived products',
      'Check for rice in processed foods',
      'Be cautious with Asian cuisine',
      'Use alternative grains'
    ],
    prevalence: 'Rare in general population',
    relatedAllergens: ['corn', 'wheat']
  },

  'oats': {
    name: 'Oat Allergy',
    commonNames: ['oats', 'oatmeal', 'oat flour', 'oat bran', 'steel-cut oats', 'rolled oats'],
    severity: 'low',
    description: 'Oat allergy is separate from wheat allergy and can cause reactions in sensitive individuals.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Oats in breakfast cereals',
      'Oat flour in gluten-free baking',
      'Shared milling equipment',
      'Processed foods with oats'
    ],
    management: [
      'Avoid oats and oat products',
      'Check for oats in processed foods',
      'Be aware of cross-contamination',
      'Use certified oat-free products'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['wheat', 'barley', 'rye']
  },

  'barley': {
    name: 'Barley Allergy',
    commonNames: ['barley', 'barley flour', 'barley malt', 'malt extract', 'malted barley'],
    severity: 'low',
    description: 'Barley allergy can cause reactions to barley and barley-derived products like malt.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Barley in beers and malt beverages',
      'Barley flour in some baked goods',
      'Malt extract in processed foods',
      'Shared processing equipment'
    ],
    management: [
      'Avoid barley and barley products',
      'Check for malt in foods and beverages',
      'Be aware of cross-contamination',
      'Choose gluten-free alternatives'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['wheat', 'rye', 'oats']
  },

  'rye': {
    name: 'Rye Allergy',
    commonNames: ['rye', 'rye flour', 'rye bread', 'rye berries'],
    severity: 'low',
    description: 'Rye allergy can occur separately from wheat allergy and affects rye products.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Rye in some breads and cereals',
      'Rye flour in baking',
      'Shared milling equipment',
      'Some beers and distilled spirits'
    ],
    management: [
      'Avoid rye and rye products',
      'Check for rye in specialty breads',
      'Be aware of cross-contamination',
      'Choose appropriate gluten-free options'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['wheat', 'barley', 'oats']
  },

  'honey': {
    name: 'Honey Allergy',
    commonNames: ['honey', 'beeswax', 'propolis', 'royal jelly', 'bee pollen'],
    severity: 'low',
    description: 'Honey allergy is often related to pollen allergies and bee venom sensitivity.',
    symptoms: [
      'Oral allergy syndrome',
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting',
      'Abdominal discomfort',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Honey in foods and beverages',
      'Bee products in supplements',
      'Pollen in honey',
      'Cosmetics with honey'
    ],
    management: [
      'Avoid honey and bee products',
      'Be aware of pollen allergies',
      'Check for honey in processed foods',
      'Avoid bee stings if venom-sensitive'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['bee venom', 'pollen', 'royal jelly']
  },

  'coffee': {
    name: 'Coffee Allergy',
    commonNames: ['coffee', 'caffeine', 'coffee beans', 'coffee extract'],
    severity: 'low',
    description: 'Coffee allergy is rare but can cause reactions to coffee and caffeine-containing products.',
    symptoms: [
      'Headache',
      'Nausea, vomiting',
      'Heart palpitations',
      'Anxiety or restlessness',
      'Hives or rash',
      'Anaphylaxis (very rare)'
    ],
    crossContamination: [
      'Coffee in beverages and foods',
      'Caffeine in medications',
      'Chocolate and cocoa products',
      'Energy drinks and supplements'
    ],
    management: [
      'Avoid coffee and caffeine products',
      'Check for caffeine in medications',
      'Be aware of hidden caffeine sources',
      'Use decaffeinated alternatives'
    ],
    prevalence: 'Very rare',
    relatedAllergens: ['chocolate', 'tea', 'caffeine']
  },

  'alcohol': {
    name: 'Alcohol Intolerance',
    commonNames: ['alcohol', 'ethanol', 'wine', 'beer', 'spirits', 'histamine'],
    severity: 'low',
    description: 'Alcohol intolerance can be due to acetaldehyde dehydrogenase deficiency or histamine sensitivity.',
    symptoms: [
      'Flushing and redness',
      'Headache',
      'Nausea, vomiting',
      'Rapid heartbeat',
      'Low blood pressure',
      'Histamine-related symptoms'
    ],
    crossContamination: [
      'Alcoholic beverages',
      'Foods with alcohol',
      'Medications with alcohol',
      'Fermented foods'
    ],
    management: [
      'Avoid alcoholic beverages',
      'Check for alcohol in foods and medications',
      'Be aware of histamine in aged foods',
      'Use alcohol-free alternatives'
    ],
    prevalence: '10-15% of Asian populations',
    relatedAllergens: ['histamine', 'sulfites', 'yeast']
  },

  'msg': {
    name: 'MSG Allergy/Sensitivity',
    commonNames: ['MSG', 'monosodium glutamate', 'glutamate', 'accent', 'aginomoto'],
    severity: 'low',
    description: 'MSG sensitivity (not true allergy) can cause symptoms known as "MSG symptom complex".',
    symptoms: [
      'Headache',
      'Flushing',
      'Sweating',
      'Facial pressure or tightness',
      'Numbness, tingling, or burning',
      'Chest pain',
      'Nausea'
    ],
    crossContamination: [
      'Asian cuisine (Chinese food)',
      'Processed foods and snacks',
      'Soups and broths',
      'Restaurant foods'
    ],
    management: [
      'Avoid foods with MSG',
      'Check for MSG in processed foods',
      'Be cautious with Asian restaurants',
      'Use fresh ingredients when possible'
    ],
    prevalence: '1-2% of population (sensitivity)',
    relatedAllergens: ['processed foods', 'additives']
  },

  'artificial_colors': {
    name: 'Artificial Food Colors',
    commonNames: ['artificial colors', 'food dyes', 'red 40', 'yellow 5', 'blue 1', 'tartrazine'],
    severity: 'low',
    description: 'Artificial food colors can cause reactions in sensitive individuals, particularly children.',
    symptoms: [
      'Hyperactivity in children',
      'Hives or rash',
      'Itching',
      'Headache',
      'Nausea',
      'Behavioral changes'
    ],
    crossContamination: [
      'Colored candies and sweets',
      'Processed foods and beverages',
      'Medications and supplements',
      'Cosmetics'
    ],
    management: [
      'Avoid artificial food colors',
      'Choose natural color alternatives',
      'Read ingredient labels carefully',
      'Look for "color-free" products'
    ],
    prevalence: '3-8% of children',
    relatedAllergens: ['artificial flavors', 'preservatives']
  },

  'pumpkin_seeds': {
    name: 'Pumpkin Seed Allergy',
    commonNames: ['pumpkin seeds', 'pepitas', 'squash seeds', 'pumpkin seed oil'],
    severity: 'moderate',
    description: 'Pumpkin seed allergy is related to other seed allergies and can cause significant reactions.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis'
    ],
    crossContamination: [
      'Pumpkin seeds in trail mixes',
      'Pumpkin seed oil in cooking',
      'Mexican cuisine (pepitas)',
      'Baked goods and snacks'
    ],
    management: [
      'Avoid pumpkin seeds and products',
      'Check for pumpkin seed oil',
      'Be cautious with seed mixes',
      'Carry epinephrine'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['sunflower seeds', 'sesame', 'other seeds']
  },

  'flax': {
    name: 'Flax Allergy',
    commonNames: ['flax', 'flaxseed', 'linseed', 'flax oil', 'flax meal'],
    severity: 'moderate',
    description: 'Flax allergy is part of seed allergies and can cause reactions to flax products.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Flaxseed in health foods',
      'Flax oil in supplements',
      'Flax meal in baking',
      'Shared processing equipment'
    ],
    management: [
      'Avoid flax and flax products',
      'Check for flax in supplements',
      'Be aware of cross-contamination',
      'Use alternative omega-3 sources'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['sesame', 'sunflower', 'other seeds']
  },

  'chia': {
    name: 'Chia Seed Allergy',
    commonNames: ['chia', 'chia seeds', 'chia flour', 'chia oil'],
    severity: 'moderate',
    description: 'Chia seed allergy is emerging and can cause reactions in sensitive individuals.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis (rare)'
    ],
    crossContamination: [
      'Chia in puddings and smoothies',
      'Chia flour in baking',
      'Health food products',
      'Shared processing equipment'
    ],
    management: [
      'Avoid chia seeds and products',
      'Check for chia in health foods',
      'Be aware of cross-contamination',
      'Use alternative seeds'
    ],
    prevalence: 'Rare but increasing',
    relatedAllergens: ['sesame', 'flax', 'other seeds']
  },

  'poppy': {
    name: 'Poppy Seed Allergy',
    commonNames: ['poppy seeds', 'poppy seed oil', 'poppy seed filling'],
    severity: 'moderate',
    description: 'Poppy seed allergy can cause reactions and may cross-react with other seeds.',
    symptoms: [
      'Hives or rash',
      'Itching or swelling',
      'Nausea, vomiting, diarrhea',
      'Abdominal pain',
      'Wheezing or difficulty breathing',
      'Anaphylaxis'
    ],
    crossContamination: [
      'Poppy seeds on baked goods',
      'Poppy seed oil in cooking',
      'European pastries',
      'Shared processing equipment'
    ],
    management: [
      'Avoid poppy seeds and products',
      'Check for poppy seeds on breads',
      'Be cautious with European baked goods',
      'Carry epinephrine'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['sesame', 'mustard', 'other seeds']
  },

  'cashew': {
    name: 'Cashew Allergy',
    commonNames: ['cashews', 'cashew nuts', 'cashew butter', 'cashew oil'],
    severity: 'very_high',
    description: 'Cashew allergy is one of the most severe tree nut allergies and often lifelong.',
    symptoms: [
      'Hives or skin rash',
      'Itching or swelling of mouth/throat',
      'Nausea, vomiting, or diarrhea',
      'Difficulty breathing or wheezing',
      'Anaphylactic shock',
      'Cardiovascular collapse'
    ],
    crossContamination: [
      'Shared processing equipment',
      'Cashew products in Asian cuisine',
      'Trail mixes and snacks',
      'Cashew oil in unexpected products'
    ],
    management: [
      'Strict avoidance of cashews and cashew products',
      'Read all food labels',
      'Avoid cross-contaminated products',
      'Carry epinephrine auto-injector',
      'Educate caregivers and school staff'
    ],
    prevalence: '1-2% of children with tree nut allergy',
    relatedAllergens: ['pistachios', 'other tree nuts']
  },

  'pistachio': {
    name: 'Pistachio Allergy',
    commonNames: ['pistachios', 'pistachio nuts', 'pistachio oil'],
    severity: 'very_high',
    description: 'Pistachio allergy is severe and can cross-react with cashews.',
    symptoms: [
      'Hives or skin rash',
      'Itching or swelling of mouth/throat',
      'Nausea, vomiting, or diarrhea',
      'Difficulty breathing or wheezing',
      'Anaphylactic shock',
      'Cardiovascular collapse'
    ],
    crossContamination: [
      'Shared processing equipment',
      'Pistachios in ice cream and desserts',
      'Middle Eastern cuisine',
      'Trail mixes and snacks'
    ],
    management: [
      'Strict avoidance of pistachios',
      'Read all food labels',
      'Avoid cross-contaminated products',
      'Carry epinephrine auto-injector',
      'Educate caregivers'
    ],
    prevalence: '1-2% of children with tree nut allergy',
    relatedAllergens: ['cashews', 'other tree nuts']
  },

  'walnut': {
    name: 'Walnut Allergy',
    commonNames: ['walnuts', 'walnut oil', 'english walnuts', 'black walnuts'],
    severity: 'very_high',
    description: 'Walnut allergy is one of the most common and severe tree nut allergies.',
    symptoms: [
      'Hives or skin rash',
      'Itching or swelling of mouth/throat',
      'Nausea, vomiting, or diarrhea',
      'Difficulty breathing or wheezing',
      'Anaphylactic shock',
      'Cardiovascular collapse'
    ],
    crossContamination: [
      'Shared processing equipment',
      'Walnuts in baked goods',
      'Salads and trail mixes',
      'Walnut oil in cooking'
    ],
    management: [
      'Strict avoidance of walnuts and walnut products',
      'Read all food labels',
      'Avoid cross-contaminated products',
      'Carry epinephrine auto-injector',
      'Educate caregivers and school staff'
    ],
    prevalence: '1-2% of children with tree nut allergy',
    relatedAllergens: ['pecans', 'other tree nuts']
  },

  'pecan': {
    name: 'Pecan Allergy',
    commonNames: ['pecans', 'pecan nuts', 'pecan oil'],
    severity: 'very_high',
    description: 'Pecan allergy is severe and can cross-react with walnuts.',
    symptoms: [
      'Hives or skin rash',
      'Itching or swelling of mouth/throat',
      'Nausea, vomiting, or diarrhea',
      'Difficulty breathing or wheezing',
      'Anaphylactic shock',
      'Cardiovascular collapse'
    ],
    crossContamination: [
      'Shared processing equipment',
      'Pecans in pies and desserts',
      'Trail mixes and snacks',
      'Pecan oil in cooking'
    ],
    management: [
      'Strict avoidance of pecans and pecan products',
      'Read all food labels',
      'Avoid cross-contaminated products',
      'Carry epinephrine auto-injector',
      'Educate caregivers'
    ],
    prevalence: '1-2% of children with tree nut allergy',
    relatedAllergens: ['walnuts', 'other tree nuts']
  },

  'hazelnut': {
    name: 'Hazelnut Allergy',
    commonNames: ['hazelnuts', 'filberts', 'hazelnut oil', 'nutella'],
    severity: 'very_high',
    description: 'Hazelnut allergy is common in Europe and can be severe.',
    symptoms: [
      'Hives or skin rash',
      'Itching or swelling of mouth/throat',
      'Nausea, vomiting, or diarrhea',
      'Difficulty breathing or wheezing',
      'Anaphylactic shock',
      'Cardiovascular collapse'
    ],
    crossContamination: [
      'Shared processing equipment',
      'Hazelnuts in chocolate spreads',
      'European desserts and pastries',
      'Hazelnut oil in cooking'
    ],
    management: [
      'Strict avoidance of hazelnuts and hazelnut products',
      'Read all food labels',
      'Avoid cross-contaminated products',
      'Carry epinephrine auto-injector',
      'Educate caregivers'
    ],
    prevalence: 'Higher in Europe than US',
    relatedAllergens: ['other tree nuts', 'birch pollen']
  },

  'almond': {
    name: 'Almond Allergy',
    commonNames: ['almonds', 'almond milk', 'almond flour', 'almond oil', 'marzipan'],
    severity: 'very_high',
    description: 'Almond allergy is one of the most common tree nut allergies.',
    symptoms: [
      'Hives or skin rash',
      'Itching or swelling of mouth/throat',
      'Nausea, vomiting, or diarrhea',
      'Difficulty breathing or wheezing',
      'Anaphylactic shock',
      'Cardiovascular collapse'
    ],
    crossContamination: [
      'Shared processing equipment',
      'Almonds in baked goods',
      'Almond milk and dairy alternatives',
      'Marzipan in European candies'
    ],
    management: [
      'Strict avoidance of almonds and almond products',
      'Read all food labels',
      'Avoid cross-contaminated products',
      'Carry epinephrine auto-injector',
      'Educate caregivers and school staff'
    ],
    prevalence: '1-2% of children with tree nut allergy',
    relatedAllergens: ['other tree nuts', 'peanuts']
  },

  'brazil_nut': {
    name: 'Brazil Nut Allergy',
    commonNames: ['brazil nuts', 'brazil nut oil'],
    severity: 'very_high',
    description: 'Brazil nut allergy is severe and can cross-react with other tree nuts.',
    symptoms: [
      'Hives or skin rash',
      'Itching or swelling of mouth/throat',
      'Nausea, vomiting, or diarrhea',
      'Difficulty breathing or wheezing',
      'Anaphylactic shock',
      'Cardiovascular collapse'
    ],
    crossContamination: [
      'Shared processing equipment',
      'Brazil nuts in trail mixes',
      'Imported foods',
      'Brazil nut oil'
    ],
    management: [
      'Strict avoidance of brazil nuts',
      'Read all food labels',
      'Avoid cross-contaminated products',
      'Carry epinephrine auto-injector',
      'Educate caregivers'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['other tree nuts', 'selenium sensitivity']
  },

  'macadamia': {
    name: 'Macadamia Nut Allergy',
    commonNames: ['macadamia nuts', 'macadamia oil', 'queensland nuts'],
    severity: 'very_high',
    description: 'Macadamia nut allergy is severe but less common than other tree nut allergies.',
    symptoms: [
      'Hives or skin rash',
      'Itching or swelling of mouth/throat',
      'Nausea, vomiting, or diarrhea',
      'Difficulty breathing or wheezing',
      'Anaphylactic shock',
      'Cardiovascular collapse'
    ],
    crossContamination: [
      'Shared processing equipment',
      'Macadamia nuts in desserts',
      'Trail mixes',
      'Macadamia oil in cooking'
    ],
    management: [
      'Strict avoidance of macadamia nuts',
      'Read all food labels',
      'Avoid cross-contaminated products',
      'Carry epinephrine auto-injector',
      'Educate caregivers'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['other tree nuts']
  },

  'pine_nut': {
    name: 'Pine Nut Allergy',
    commonNames: ['pine nuts', 'pignoli', 'pine kernels', 'cedar nuts'],
    severity: 'very_high',
    description: 'Pine nut allergy is severe and can cause reactions known as "pine nut syndrome".',
    symptoms: [
      'Hives or skin rash',
      'Itching or swelling of mouth/throat',
      'Nausea, vomiting, or diarrhea',
      'Difficulty breathing or wheezing',
      'Anaphylactic shock',
      'Cardiovascular collapse'
    ],
    crossContamination: [
      'Shared processing equipment',
      'Pine nuts in pesto',
      'Mediterranean cuisine',
      'Trail mixes'
    ],
    management: [
      'Strict avoidance of pine nuts',
      'Read all food labels',
      'Avoid cross-contaminated products',
      'Carry epinephrine auto-injector',
      'Educate caregivers'
    ],
    prevalence: 'Rare',
    relatedAllergens: ['other tree nuts']
  }
};

/**
 * Get allergen information by key
 * @param allergenKey - The allergen key (e.g., 'milk', 'peanuts')
 * @returns AllergenInfo object or null if not found
 */
export function getAllergenInfo(allergenKey: string): AllergenInfo | null {
  const normalizedKey = allergenKey.toLowerCase().trim();
  return ALLERGENS_DATABASE[normalizedKey] || null;
}

/**
 * Get all allergen keys
 * @returns Array of all allergen keys
 */
export function getAllAllergenKeys(): string[] {
  return Object.keys(ALLERGENS_DATABASE);
}

/**
 * Check if a term matches any allergen
 * @param term - The term to check
 * @returns The matching allergen key or null
 */
export function findMatchingAllergen(term: string): string | null {
  const normalizedTerm = term.toLowerCase().trim();

  // Direct match first
  if (ALLERGENS_DATABASE[normalizedTerm]) {
    return normalizedTerm;
  }

  // Check common names
  for (const [key, allergen] of Object.entries(ALLERGENS_DATABASE)) {
    if (allergen.commonNames.some(name => name.toLowerCase().includes(normalizedTerm) || normalizedTerm.includes(name.toLowerCase()))) {
      return key;
    }
  }

  return null;
}

/**
 * Get severity color for UI display
 * @param severity - The severity level
 * @returns Tailwind CSS color classes
 */
export function getAllergenSeverityColor(severity: AllergenInfo['severity']): string {
  switch (severity) {
    case 'very_high':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'high':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'moderate':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'low':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}
