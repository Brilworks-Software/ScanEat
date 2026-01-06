/**
 * Ingredient information database
 * Contains details about common food ingredients, their health effects, and concerns
 */

export interface IngredientInfo {
  name: string;
  aliases: string[]; // Alternative names/spellings
  category: string;
  concern: 'low' | 'moderate' | 'high' | 'very_high';
  description: string;
  healthEffects: string[];
  whyConsider: string[]; // Why to be cautious
  benefits?: string[];
  dietaryInfo: {
    vegan: boolean;
    vegetarian: boolean;
    glutenFree: boolean;
    allergen?: string[];
  };
}

export const INGREDIENTS_DATABASE: Record<string, IngredientInfo> = {
  'sucre': {
    name: 'Sugar',
    aliases: ['sucre', 'sugar', 'sucrose', 'saccharose'],
    category: 'Sweetener',
    concern: 'high',
    description: 'Refined white sugar. High consumption is linked to various health issues.',
    healthEffects: [
      'Can cause blood sugar spikes',
      'May contribute to weight gain',
      'Linked to increased risk of diabetes',
      'Can cause tooth decay',
      'May increase inflammation'
    ],
    whyConsider: [
      'High sugar content increases calorie density',
      'Provides empty calories with no nutrients',
      'Can lead to sugar addiction',
      'May contribute to metabolic syndrome',
      'Often hidden in processed foods'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'huile de palme': {
    name: 'Palm Oil',
    aliases: ['huile de palme', 'palm oil', 'huile palmiste', 'palm kernel oil'],
    category: 'Fat',
    concern: 'very_high',
    description: 'Palm oil is high in saturated fat and its production causes environmental destruction.',
    healthEffects: [
      'High in saturated fat (50%)',
      'May raise LDL cholesterol',
      'Linked to cardiovascular disease risk',
      'Often highly processed',
      'May contain contaminants'
    ],
    whyConsider: [
      'Deforestation and habitat destruction',
      'High saturated fat content',
      'Environmental impact',
      'Often from unsustainable sources',
      'May contain processing contaminants'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'noisettes': {
    name: 'Hazelnuts',
    aliases: ['noisettes', 'hazelnuts', 'filberts', 'cobnuts'],
    category: 'Nuts',
    concern: 'low',
    description: 'Hazelnuts are nutrient-dense nuts rich in healthy fats, vitamins, and minerals.',
    healthEffects: [
      'Rich in healthy monounsaturated fats',
      'Good source of vitamin E',
      'Contains antioxidants',
      'May help heart health',
      'High in fiber'
    ],
    whyConsider: [
      'Tree nut allergen - avoid if allergic',
      'High in calories (moderate portions)',
      'May contain aflatoxins if not stored properly'
    ],
    benefits: [
      'Heart-healthy fats',
      'Rich in antioxidants',
      'Good source of protein',
      'May improve brain function'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['nuts', 'tree nuts']
    }
  },
  'cacao maigre': {
    name: 'Low-Fat Cocoa',
    aliases: ['cacao maigre', 'cocoa powder', 'low-fat cocoa', 'cacao'],
    category: 'Flavoring',
    concern: 'low',
    description: 'Cocoa powder with reduced fat content. Rich in antioxidants and flavonoids.',
    healthEffects: [
      'Rich in antioxidants (flavonoids)',
      'May improve heart health',
      'Can boost mood',
      'May improve cognitive function',
      'Low in calories'
    ],
    whyConsider: [
      'May be processed with alkali (dutching) which reduces antioxidants',
      'Some brands may contain added sugars',
      'Check for processing method'
    ],
    benefits: [
      'High in antioxidants',
      'May lower blood pressure',
      'Can improve mood',
      'Rich in minerals (magnesium, iron)'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'lait écrémé en poudre': {
    name: 'Skimmed Milk Powder',
    aliases: ['lait écrémé en poudre', 'skimmed milk powder', 'dried skim milk', 'non-fat dry milk'],
    category: 'Dairy',
    concern: 'moderate',
    description: 'Dehydrated skimmed milk. Contains lactose and milk proteins.',
    healthEffects: [
      'Contains lactose (problematic for lactose intolerant)',
      'High in protein',
      'Contains calcium',
      'May cause digestive issues',
      'Processed ingredient'
    ],
    whyConsider: [
      'Not suitable for lactose intolerant individuals',
      'Dairy allergen',
      'Highly processed',
      'May contain added ingredients'
    ],
    benefits: [
      'Good source of protein',
      'High in calcium',
      'Contains B vitamins'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy', 'lactose']
    }
  },
  'lactoserum en poudre': {
    name: 'Whey Powder',
    aliases: ['lactoserum en poudre', 'whey powder', 'whey protein', 'lactose serum'],
    category: 'Dairy Protein',
    concern: 'moderate',
    description: 'Powdered whey protein from milk. High in protein but contains lactose.',
    healthEffects: [
      'High in protein',
      'Contains lactose',
      'May cause digestive issues',
      'Can trigger dairy allergies',
      'Often processed with additives'
    ],
    whyConsider: [
      'Dairy allergen',
      'Lactose intolerance risk',
      'Highly processed',
      'May contain additives',
      'Often from industrial sources'
    ],
    benefits: [
      'Excellent protein source',
      'Complete amino acid profile',
      'May support muscle recovery'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy', 'whey', 'lactose']
    }
  },
  'émulsifiants': {
    name: 'Emulsifiers',
    aliases: ['émulsifiants', 'emulsifiers', 'emulsifying agents'],
    category: 'Additive',
    concern: 'moderate',
    description: 'Substances that help mix oil and water. May affect gut bacteria.',
    healthEffects: [
      'May disrupt gut microbiome',
      'Can affect intestinal barrier',
      'May increase inflammation',
      'Linked to digestive issues',
      'Often synthetic'
    ],
    whyConsider: [
      'May affect gut health',
      'Often synthetic chemicals',
      'May increase inflammation',
      'Better to avoid when possible',
      'No nutritional value'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true, // Depends on specific emulsifier
      vegetarian: true,
      glutenFree: true
    }
  },
  'vanilline': {
    name: 'Vanillin',
    aliases: ['vanilline', 'vanillin', 'artificial vanilla', 'synthetic vanilla'],
    category: 'Flavoring',
    concern: 'low',
    description: 'Synthetic vanilla flavoring. Generally safe but artificial.',
    healthEffects: [
      'Generally recognized as safe',
      'May cause allergic reactions in rare cases',
      'Artificial flavoring',
      'No nutritional value'
    ],
    whyConsider: [
      'Artificial flavoring (not natural vanilla)',
      'No health benefits',
      'May cause sensitivity in some',
      'Natural vanilla is preferable'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'lecithin': {
    name: 'Lecithin',
    aliases: ['lecithin', 'lecithine', 'soy lecithin', 'sunflower lecithin'],
    category: 'Emulsifier',
    concern: 'low',
    description: 'Natural emulsifier. Usually from soy or sunflower. Generally safe.',
    healthEffects: [
      'Generally safe',
      'May help with cholesterol',
      'Rare allergic reactions',
      'May contain GMO if from soy'
    ],
    whyConsider: [
      'Soy allergy risk (if from soy)',
      'May be GMO (if from soy)',
      'Highly processed',
      'Often from industrial sources'
    ],
    benefits: [
      'May support brain health',
      'Can help with cholesterol',
      'Natural emulsifier'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['soy'] // If from soy
    }
  },
  'aspartame': {
    name: 'Aspartame',
    aliases: ['aspartame', 'nutrasweet', 'equal', 'canderel'],
    category: 'Artificial Sweetener',
    concern: 'high',
    description: 'Artificial sweetener. May be linked to various health concerns despite being approved.',
    healthEffects: [
      'May cause headaches',
      'Linked to metabolic issues',
      'May affect brain function',
      'Can cause digestive issues',
      'Potential cancer risk (controversial)'
    ],
    whyConsider: [
      'Artificial chemical sweetener',
      'May disrupt gut bacteria',
      'Linked to weight gain paradoxically',
      'May increase sweet cravings',
      'Better alternatives exist'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sucralose': {
    name: 'Sucralose',
    aliases: ['sucralose', 'splenda', 'sucralose sweetener'],
    category: 'Artificial Sweetener',
    concern: 'high',
    description: 'Artificial sweetener made from sugar. May affect gut health and metabolism.',
    healthEffects: [
      'May disrupt gut microbiome',
      'Can cause digestive issues',
      'May affect blood sugar regulation',
      'Linked to metabolic problems',
      'May cause headaches'
    ],
    whyConsider: [
      'Artificial sweetener',
      'May reduce beneficial gut bacteria',
      'Linked to glucose intolerance',
      'No nutritional benefits',
      'May increase overall calorie intake'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'huile de colza': {
    name: 'Canola Oil',
    aliases: ['huile de colza', 'canola oil', 'rapeseed oil'],
    category: 'Oil',
    concern: 'moderate',
    description: 'Highly processed oil from rapeseed. Often genetically modified.',
    healthEffects: [
      'High in omega-3 fatty acids',
      'Low in saturated fat',
      'Highly processed',
      'May contain trans fats from processing',
      'Often from GMO sources'
    ],
    whyConsider: [
      'Highly refined and processed',
      'Often genetically modified',
      'May contain processing contaminants',
      'Less stable than other oils',
      'Environmental concerns with GMO'
    ],
    benefits: [
      'Contains omega-3 fatty acids',
      'Low in saturated fat',
      'Neutral flavor for cooking'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'huile de soja': {
    name: 'Soybean Oil',
    aliases: ['huile de soja', 'soybean oil', 'soya oil'],
    category: 'Oil',
    concern: 'high',
    description: 'Highly processed oil from soybeans. Often genetically modified and inflammatory.',
    healthEffects: [
      'High in omega-6 fatty acids',
      'May promote inflammation',
      'Highly processed',
      'Often from GMO sources',
      'May contain hexane residues'
    ],
    whyConsider: [
      'High omega-6 to omega-3 ratio',
      'May contribute to inflammation',
      'Often genetically modified',
      'Highly processed with chemicals',
      'Environmental impact'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['soy']
    }
  },
  'huile de coco': {
    name: 'Coconut Oil',
    aliases: ['huile de coco', 'coconut oil', 'huile de noix de coco'],
    category: 'Oil',
    concern: 'moderate',
    description: 'Oil from coconuts. High in saturated fat but contains medium-chain triglycerides.',
    healthEffects: [
      'High in saturated fat (90%)',
      'Contains medium-chain triglycerides (MCTs)',
      'May raise LDL cholesterol',
      'May increase HDL cholesterol',
      'MCTs may boost metabolism'
    ],
    whyConsider: [
      'Very high saturated fat content',
      'May increase cardiovascular risk',
      'Environmental impact of coconut farming',
      'Often highly processed',
      'Expensive and not always sustainable'
    ],
    benefits: [
      'MCTs may support metabolism',
      'May increase HDL cholesterol',
      'Stable for high-heat cooking',
      'Contains lauric acid'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['coconut']
    }
  },
  'benzoate de sodium': {
    name: 'Sodium Benzoate',
    aliases: ['benzoate de sodium', 'sodium benzoate', 'e211'],
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative. May affect behavior and combine dangerously with vitamin C.',
    healthEffects: [
      'May cause hyperactivity in children',
      'Can affect behavior',
      'May cause allergic reactions',
      'Dangerous when combined with vitamin C',
      'May affect DNA'
    ],
    whyConsider: [
      'Synthetic preservative',
      'May affect children\'s behavior',
      'Creates benzene with vitamin C',
      'No nutritional value',
      'Better natural alternatives exist'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'glutamate monosodique': {
    name: 'Monosodium Glutamate (MSG)',
    aliases: ['glutamate monosodique', 'msg', 'monosodium glutamate', 'e621'],
    category: 'Flavor Enhancer',
    concern: 'moderate',
    description: 'Flavor enhancer. May cause symptoms in sensitive individuals.',
    healthEffects: [
      'May cause "MSG symptom complex"',
      'Can trigger headaches',
      'May cause flushing and sweating',
      'Linked to obesity in some studies',
      'May affect brain function'
    ],
    whyConsider: [
      'May cause sensitivity reactions',
      'Often hidden in processed foods',
      'May increase appetite',
      'No nutritional value',
      'Can be addictive'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'arachides': {
    name: 'Peanuts',
    aliases: ['arachides', 'peanuts', 'groundnuts', 'cacahuètes'],
    category: 'Legume',
    concern: 'moderate',
    description: 'Groundnuts that are technically legumes. Major allergen and often contaminated.',
    healthEffects: [
      'High in protein and healthy fats',
      'Rich in vitamins and minerals',
      'May be contaminated with aflatoxins',
      'Major allergen',
      'May cause severe reactions'
    ],
    whyConsider: [
      'Major allergen - can cause anaphylaxis',
      'Often contaminated with aflatoxins',
      'Highly processed forms common',
      'May contain hidden allergens',
      'Not suitable for nut-free diets'
    ],
    benefits: [
      'High in protein',
      'Good source of healthy fats',
      'Rich in niacin and folate',
      'May support heart health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['peanuts', 'nuts', 'legumes']
    }
  },
  'amandes': {
    name: 'Almonds',
    aliases: ['amandes', 'almonds', 'almond nuts'],
    category: 'Nuts',
    concern: 'low',
    description: 'Nutrient-dense tree nuts. Rich in healthy fats, vitamins, and minerals.',
    healthEffects: [
      'Rich in vitamin E and antioxidants',
      'High in healthy monounsaturated fats',
      'Good source of protein',
      'May support heart health',
      'Contains fiber'
    ],
    whyConsider: [
      'Tree nut allergen',
      'High in calories',
      'May cause digestive issues if not chewed well',
      'Some people sensitive to skins'
    ],
    benefits: [
      'Heart-healthy fats',
      'Rich in antioxidants',
      'May lower cholesterol',
      'Good for skin health',
      'May support weight management'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['nuts', 'tree nuts', 'almonds']
    }
  },
  'blé': {
    name: 'Wheat',
    aliases: ['blé', 'wheat', 'wheat flour', 'farine de blé'],
    category: 'Grain',
    concern: 'moderate',
    description: 'Common grain that contains gluten. May cause issues for sensitive individuals.',
    healthEffects: [
      'Contains gluten (problematic for celiac)',
      'May cause digestive issues',
      'Can trigger autoimmune responses',
      'Often highly processed',
      'May contain anti-nutrients'
    ],
    whyConsider: [
      'Contains gluten',
      'May cause celiac disease',
      'Highly processed modern wheat',
      'May contain pesticides',
      'Not suitable for gluten-free diets'
    ],
    benefits: [
      'Good source of carbohydrates',
      'Contains B vitamins',
      'Provides fiber',
      'Contains minerals'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: false,
      allergen: ['wheat', 'gluten']
    }
  },
  'oeufs': {
    name: 'Eggs',
    aliases: ['oeufs', 'eggs', 'egg', 'œufs'],
    category: 'Protein',
    concern: 'moderate',
    description: 'Eggs from chickens. Complete protein but common allergen.',
    healthEffects: [
      'Complete protein source',
      'Rich in vitamins (B12, D)',
      'Contains choline for brain health',
      'High in cholesterol',
      'Common allergen'
    ],
    whyConsider: [
      'Major allergen',
      'High in cholesterol',
      'May contain salmonella risk',
      'Environmental impact of factory farming',
      'May contain hormones/antibiotics'
    ],
    benefits: [
      'Complete protein',
      'Rich in nutrients',
      'Supports brain health',
      'Good source of healthy fats'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['eggs', 'egg']
    }
  },
  'colorants artificiels': {
    name: 'Artificial Colors',
    aliases: ['colorants artificiels', 'artificial colors', 'food dyes', 'colorants alimentaires'],
    category: 'Additive',
    concern: 'high',
    description: 'Synthetic food dyes. May affect behavior and linked to various health concerns.',
    healthEffects: [
      'May cause hyperactivity in children',
      'Linked to behavioral issues',
      'May cause allergic reactions',
      'Potential cancer risk',
      'May affect thyroid function'
    ],
    whyConsider: [
      'Synthetic chemicals',
      'May affect children\'s behavior',
      'No nutritional value',
      'Better natural alternatives exist',
      'Often from petroleum derivatives'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true, // Most are, but some may use animal-derived ingredients
      vegetarian: true,
      glutenFree: true
    }
  },
  'gomme xanthane': {
    name: 'Xanthan Gum',
    aliases: ['gomme xanthane', 'xanthan gum', 'xanthan', 'e415'],
    category: 'Thickener',
    concern: 'moderate',
    description: 'Thickener produced by fermentation. May cause digestive issues in some people.',
    healthEffects: [
      'May cause digestive issues',
      'Can cause bloating and gas',
      'May affect gut bacteria',
      'Rare allergic reactions',
      'Highly processed'
    ],
    whyConsider: [
      'May cause digestive discomfort',
      'Fermented with potential allergens',
      'Often overused in processed foods',
      'No nutritional value',
      'May mask poor quality ingredients'
    ],
    benefits: [
      'Thickens without adding many calories',
      'Stable in various conditions',
      'Vegan friendly'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'stevia': {
    name: 'Stevia',
    aliases: ['stevia', 'stevia sweetener', 'stevia extract'],
    category: 'Natural Sweetener',
    concern: 'low',
    description: 'Natural sweetener from stevia plant. Generally safe but highly processed forms exist.',
    healthEffects: [
      'Natural plant-based sweetener',
      'Zero calories',
      'May help with blood sugar control',
      'May have antioxidant properties',
      'Generally recognized as safe'
    ],
    whyConsider: [
      'Highly processed forms may contain additives',
      'Some people report aftertaste',
      'May affect gut bacteria',
      'Some forms contain artificial sweeteners'
    ],
    benefits: [
      'Zero calorie sweetener',
      'May help regulate blood sugar',
      'Natural alternative to sugar',
      'May have antioxidant effects'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sirop de glucose': {
    name: 'Glucose Syrup',
    aliases: ['sirop de glucose', 'glucose syrup', 'corn syrup', 'sirop de maïs'],
    category: 'Sweetener',
    concern: 'high',
    description: 'Highly processed sweetener from starch. High in calories and may affect metabolism.',
    healthEffects: [
      'High glycemic index',
      'Can cause rapid blood sugar spikes',
      'May contribute to insulin resistance',
      'Often highly processed',
      'May contain contaminants'
    ],
    whyConsider: [
      'Highly refined carbohydrates',
      'Spikes blood sugar quickly',
      'Often from genetically modified corn',
      'No nutritional value',
      'May contribute to metabolic issues'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sirop de fructose': {
    name: 'Fructose Syrup',
    aliases: ['sirop de fructose', 'fructose syrup', 'high fructose corn syrup', 'hfcs'],
    category: 'Sweetener',
    concern: 'very_high',
    description: 'Highly processed sweetener linked to metabolic issues and liver problems.',
    healthEffects: [
      'May cause fatty liver disease',
      'Linked to obesity and diabetes',
      'Can cause metabolic syndrome',
      'May increase uric acid levels',
      'Highly addictive'
    ],
    whyConsider: [
      'Major contributor to obesity epidemic',
      'Highly processed from corn',
      'May damage liver',
      'Linked to heart disease',
      'Often genetically modified source'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'maltodextrine': {
    name: 'Maltodextrin',
    aliases: ['maltodextrine', 'maltodextrin', 'glucose polymer'],
    category: 'Thickener',
    concern: 'moderate',
    description: 'Highly processed carbohydrate used as thickener. May affect blood sugar.',
    healthEffects: [
      'High glycemic index',
      'Can cause blood sugar spikes',
      'May feed harmful gut bacteria',
      'Highly processed',
      'No nutritional value'
    ],
    whyConsider: [
      'Highly refined carbohydrate',
      'May disrupt gut microbiome',
      'Often from genetically modified corn',
      'Used to bulk up processed foods',
      'May contribute to overeating'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'huile d\'olive': {
    name: 'Olive Oil',
    aliases: ['huile d\'olive', 'olive oil', 'huile d\'olives'],
    category: 'Oil',
    concern: 'low',
    description: 'Healthy oil from olives. Rich in monounsaturated fats and antioxidants.',
    healthEffects: [
      'Rich in antioxidants',
      'High in monounsaturated fats',
      'May protect heart health',
      'Contains anti-inflammatory compounds',
      'May reduce cholesterol'
    ],
    whyConsider: [
      'Extra virgin is preferable to refined',
      'Some brands may be adulterated',
      'High in calories',
      'May be rancid if not stored properly'
    ],
    benefits: [
      'Heart-healthy fats',
      'Rich in antioxidants',
      'May reduce inflammation',
      'Supports Mediterranean diet',
      'May improve cholesterol profile'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'beurre': {
    name: 'Butter',
    aliases: ['beurre', 'butter', 'beurre doux'],
    category: 'Fat',
    concern: 'moderate',
    description: 'Fat from milk. Contains saturated fat but also important nutrients.',
    healthEffects: [
      'Contains saturated fat',
      'Rich in fat-soluble vitamins',
      'Contains CLA (conjugated linoleic acid)',
      'May affect cholesterol levels',
      'Contains butyrate'
    ],
    whyConsider: [
      'High in saturated fat',
      'Not suitable for dairy-free diets',
      'May contain hormones/antibiotics',
      'Environmental impact of dairy farming',
      'May contribute to heart disease risk'
    ],
    benefits: [
      'Rich in vitamins A, D, E, K',
      'Contains butyrate for gut health',
      'Natural source of CLA',
      'May support hormone production'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy', 'lactose']
    }
  },
  'creme': {
    name: 'Cream',
    aliases: ['creme', 'cream', 'crème', 'heavy cream', 'whipping cream'],
    category: 'Dairy',
    concern: 'moderate',
    description: 'High-fat dairy product. Rich in saturated fat and calories.',
    healthEffects: [
      'High in saturated fat',
      'High in calories',
      'Contains fat-soluble vitamins',
      'May affect cholesterol',
      'Contains lactose'
    ],
    whyConsider: [
      'Very high in saturated fat',
      'High calorie density',
      'Not suitable for dairy-free diets',
      'May contain hormones/antibiotics',
      'Often used in unhealthy processed foods'
    ],
    benefits: [
      'Rich in fat-soluble vitamins',
      'Contains healthy fats',
      'May support nutrient absorption',
      'Contains CLA'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy', 'lactose']
    }
  },
  'sel': {
    name: 'Salt',
    aliases: ['sel', 'salt', 'sodium chloride', 'sel marin'],
    category: 'Mineral',
    concern: 'moderate',
    description: 'Essential mineral but excessive intake linked to health issues.',
    healthEffects: [
      'Essential for bodily functions',
      'May increase blood pressure',
      'Linked to heart disease',
      'Can cause water retention',
      'May affect kidney function'
    ],
    whyConsider: [
      'Most people consume too much',
      'Often added excessively in processing',
      'May be iodized or contain additives',
      'Can lead to hypertension',
      'Hidden in many processed foods'
    ],
    benefits: [
      'Essential for nerve function',
      'Supports electrolyte balance',
      'Important for hydration',
      'Contains iodine (in iodized salt)'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'vinaigre': {
    name: 'Vinegar',
    aliases: ['vinaigre', 'vinegar', 'acetic acid'],
    category: 'Acidulant',
    concern: 'low',
    description: 'Acidic liquid used for preservation and flavor. May have health benefits.',
    healthEffects: [
      'May help control blood sugar',
      'May aid digestion',
      'Contains acetic acid',
      'May help with weight management',
      'Antimicrobial properties'
    ],
    whyConsider: [
      'Some vinegars may contain sulfites',
      'Highly acidic (may affect tooth enamel)',
      'Some people sensitive to acidity',
      'May interact with certain medications'
    ],
    benefits: [
      'May improve insulin sensitivity',
      'Can help with digestion',
      'May reduce appetite',
      'Antimicrobial properties',
      'May lower cholesterol'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'citrate de sodium': {
    name: 'Sodium Citrate',
    aliases: ['citrate de sodium', 'sodium citrate', 'trisodium citrate', 'e331'],
    category: 'Acidulant',
    concern: 'low',
    description: 'Salt of citric acid used as acidity regulator. Generally safe.',
    healthEffects: [
      'Generally recognized as safe',
      'May cause digestive upset in high doses',
      'Can affect mineral balance',
      'May cause alkalosis in excessive amounts'
    ],
    whyConsider: [
      'May contribute to sodium intake',
      'Often used in processed foods',
      'No nutritional value',
      'May mask poor quality ingredients'
    ],
    benefits: [
      'Helps preserve food',
      'May help with kidney stones',
      'Used in some medications'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'phosphate': {
    name: 'Phosphates',
    aliases: ['phosphate', 'phosphates', 'phosphate additives', 'polyphosphates'],
    category: 'Additive',
    concern: 'high',
    description: 'Phosphorus compounds used in processed foods. May affect bone health and kidneys.',
    healthEffects: [
      'May affect calcium absorption',
      'Can weaken bones',
      'May damage kidneys',
      'Linked to cardiovascular issues',
      'May cause digestive problems'
    ],
    whyConsider: [
      'May lead to phosphorus overload',
      'Often added in excessive amounts',
      'May affect bone density',
      'Can cause electrolyte imbalance',
      'Common in processed meats and sodas'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'noix de cajou': {
    name: 'Cashews',
    aliases: ['noix de cajou', 'cashews', 'caju nuts', 'anacardium nuts'],
    category: 'Nuts',
    concern: 'low',
    description: 'Nutrient-dense nuts rich in healthy fats and minerals.',
    healthEffects: [
      'Rich in healthy monounsaturated fats',
      'Good source of magnesium',
      'Contains antioxidants',
      'May support heart health',
      'High in calories'
    ],
    whyConsider: [
      'Tree nut allergen',
      'High in calories (moderate portions)',
      'Often roasted in unhealthy oils',
      'May contain aflatoxins'
    ],
    benefits: [
      'Heart-healthy fats',
      'Rich in minerals (magnesium, copper)',
      'Good protein source',
      'May support bone health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['nuts', 'tree nuts', 'cashews']
    }
  },
  'noix': {
    name: 'Walnuts',
    aliases: ['noix', 'walnuts', 'noix communes'],
    category: 'Nuts',
    concern: 'low',
    description: 'Nutrient-dense nuts rich in omega-3 fatty acids and antioxidants.',
    healthEffects: [
      'Rich in omega-3 fatty acids',
      'High in antioxidants',
      'May support brain health',
      'Good source of healthy fats',
      'Contains melatonin'
    ],
    whyConsider: [
      'Tree nut allergen',
      'High in calories',
      'May become rancid quickly',
      'Some people sensitive to skins'
    ],
    benefits: [
      'Excellent omega-3 source',
      'Rich in antioxidants',
      'May support brain health',
      'Good for heart health',
      'Contains melatonin for sleep'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['nuts', 'tree nuts', 'walnuts']
    }
  },
  'pistaches': {
    name: 'Pistachios',
    aliases: ['pistaches', 'pistachios', 'pistachio nuts'],
    category: 'Nuts',
    concern: 'low',
    description: 'Nutrient-dense nuts. Good source of protein and healthy fats.',
    healthEffects: [
      'Good source of protein',
      'Rich in healthy fats',
      'High in antioxidants',
      'May support heart health',
      'Contains fiber'
    ],
    whyConsider: [
      'Tree nut allergen',
      'Often salted heavily',
      'High in calories',
      'May be contaminated with aflatoxins'
    ],
    benefits: [
      'High protein content',
      'Rich in antioxidants',
      'Good source of potassium',
      'May help with weight management',
      'Contains lutein for eye health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['nuts', 'tree nuts', 'pistachios']
    }
  },
  'sorbate de potassium': {
    name: 'Potassium Sorbate',
    aliases: ['sorbate de potassium', 'potassium sorbate', 'e202'],
    category: 'Preservative',
    concern: 'low',
    description: 'Synthetic preservative used to prevent mold and yeast growth.',
    healthEffects: [
      'Generally recognized as safe',
      'May cause allergic reactions in rare cases',
      'Can affect gut bacteria',
      'May cause skin irritation'
    ],
    whyConsider: [
      'Synthetic preservative',
      'May affect beneficial gut bacteria',
      'No nutritional value',
      'May cause sensitivity in some people'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'bicarbonate de sodium': {
    name: 'Baking Soda',
    aliases: ['bicarbonate de sodium', 'baking soda', 'sodium bicarbonate', 'bicarbonate'],
    category: 'Leavening Agent',
    concern: 'low',
    description: 'Sodium bicarbonate used for leavening. Generally safe but high sodium content.',
    healthEffects: [
      'High in sodium',
      'May affect acid-base balance',
      'Can cause alkalosis in high doses',
      'May cause digestive upset'
    ],
    whyConsider: [
      'Contributes to sodium intake',
      'Aluminum-free versions preferred',
      'May interact with medications',
      'Can be irritating if inhaled'
    ],
    benefits: [
      'Natural antacid',
      'Can help with indigestion',
      'Used in baking for texture',
      'Environmentally friendly'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'levure': {
    name: 'Yeast',
    aliases: ['levure', 'yeast', 'saccharomyces cerevisiae', 'baker\'s yeast'],
    category: 'Leavening Agent',
    concern: 'low',
    description: 'Microorganism used for fermentation and leavening. Generally safe.',
    healthEffects: [
      'Generally safe for most people',
      'May cause yeast sensitivity',
      'Can trigger reactions in immunocompromised',
      'May contain sulfites'
    ],
    whyConsider: [
      'May cause issues for yeast-sensitive people',
      'Can be allergenic',
      'May contain sulfites',
      'Some people avoid due to candida concerns'
    ],
    benefits: [
      'Natural leavening agent',
      'Provides B vitamins',
      'Supports fermentation',
      'Vegan friendly'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'poisson': {
    name: 'Fish',
    aliases: ['poisson', 'fish', 'seafood', 'poissons'],
    category: 'Protein',
    concern: 'moderate',
    description: 'Seafood rich in omega-3s but may contain mercury and other contaminants.',
    healthEffects: [
      'Rich in omega-3 fatty acids',
      'Good source of protein',
      'May contain mercury',
      'May contain microplastics',
      'Can cause allergic reactions'
    ],
    whyConsider: [
      'Major allergen',
      'Mercury contamination risk',
      'Overfishing concerns',
      'May contain antibiotics',
      'Some fish high in mercury'
    ],
    benefits: [
      'Excellent omega-3 source',
      'High-quality protein',
      'Rich in vitamins D and B12',
      'May support heart and brain health'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: false,
      glutenFree: true,
      allergen: ['fish', 'seafood']
    }
  },
  'crustaces': {
    name: 'Shellfish',
    aliases: ['crustaces', 'shellfish', 'crustaceans', 'crevettes', 'crabes'],
    category: 'Seafood',
    concern: 'moderate',
    description: 'Seafood rich in nutrients but major allergen and potential contaminant source.',
    healthEffects: [
      'Rich in protein and minerals',
      'Contains omega-3 fatty acids',
      'Major allergen',
      'May contain heavy metals',
      'Can cause severe reactions'
    ],
    whyConsider: [
      'Major allergen - can cause anaphylaxis',
      'May contain mercury and other toxins',
      'Often farmed with antibiotics',
      'Environmental impact',
      'Can be contaminated with pathogens'
    ],
    benefits: [
      'High in protein',
      'Rich in zinc and selenium',
      'Good source of omega-3s',
      'Contains astaxanthin antioxidant'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: false,
      glutenFree: true,
      allergen: ['shellfish', 'crustaceans']
    }
  },
  'soja': {
    name: 'Soy',
    aliases: ['soja', 'soy', 'soya', 'soybean'],
    category: 'Legume',
    concern: 'moderate',
    description: 'Nutrient-rich legume but often genetically modified and allergenic.',
    healthEffects: [
      'Complete protein source',
      'Contains isoflavones',
      'May affect thyroid function',
      'Common allergen',
      'Often genetically modified'
    ],
    whyConsider: [
      'Major allergen',
      'Often genetically modified',
      'May affect hormone balance',
      'Highly processed forms common',
      'Environmental impact of soy farming'
    ],
    benefits: [
      'Complete protein',
      'Rich in minerals',
      'Contains antioxidants',
      'May support bone health',
      'Good for vegetarian diets'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['soy', 'soybeans']
    }
  },
  'mais': {
    name: 'Corn',
    aliases: ['mais', 'corn', 'maize', 'cornstarch'],
    category: 'Grain',
    concern: 'moderate',
    description: 'Common grain often genetically modified. May cause digestive issues.',
    healthEffects: [
      'Often genetically modified',
      'May cause digestive issues',
      'High in carbohydrates',
      'May contain mycotoxins',
      'Common allergen'
    ],
    whyConsider: [
      'Often genetically modified',
      'May contain pesticides',
      'Highly processed forms common',
      'May cause digestive sensitivity',
      'Environmental impact'
    ],
    benefits: [
      'Good carbohydrate source',
      'Contains antioxidants',
      'Provides fiber',
      'Rich in vitamin C'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['corn']
    }
  },
  'riz': {
    name: 'Rice',
    aliases: ['riz', 'rice', 'white rice', 'brown rice'],
    category: 'Grain',
    concern: 'low',
    description: 'Common grain. White rice is highly processed while brown rice retains more nutrients.',
    healthEffects: [
      'Good carbohydrate source',
      'May contain arsenic',
      'White rice highly processed',
      'Brown rice more nutritious',
      'May cause blood sugar spikes'
    ],
    whyConsider: [
      'Arsenic contamination risk',
      'White rice lacks nutrients',
      'May be genetically modified',
      'High glycemic index (white rice)',
      'Often overconsumed'
    ],
    benefits: [
      'Good energy source',
      'Contains B vitamins',
      'Provides fiber (brown rice)',
      'Gluten-free',
      'Easy to digest'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'avocat': {
    name: 'Avocado',
    aliases: ['avocat', 'avocado', 'aguacate'],
    category: 'Fruit',
    concern: 'low',
    description: 'Nutrient-dense fruit rich in healthy fats. Excellent source of monounsaturated fats.',
    healthEffects: [
      'Rich in healthy monounsaturated fats',
      'High in fiber',
      'Contains potassium',
      'Rich in antioxidants',
      'May support heart health'
    ],
    whyConsider: [
      'High in calories',
      'Environmental impact of production',
      'May cause allergic reactions',
      'Often transported long distances'
    ],
    benefits: [
      'Heart-healthy fats',
      'Rich in fiber',
      'Good source of potassium',
      'Contains lutein for eye health',
      'May improve nutrient absorption'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'banane': {
    name: 'Banana',
    aliases: ['banane', 'banana', 'bananas'],
    category: 'Fruit',
    concern: 'low',
    description: 'Nutrient-rich fruit. Good source of potassium and natural sugars.',
    healthEffects: [
      'Rich in potassium',
      'Good source of vitamin B6',
      'Contains resistant starch',
      'Natural sugars',
      'May support heart health'
    ],
    whyConsider: [
      'High in natural sugars',
      'May cause digestive issues when unripe',
      'Often treated with chemicals',
      'Environmental transport impact'
    ],
    benefits: [
      'Excellent potassium source',
      'Good for digestion',
      'Natural energy source',
      'Supports blood pressure',
      'Rich in vitamin B6'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'chocolat': {
    name: 'Chocolate',
    aliases: ['chocolat', 'chocolate', 'cocoa', 'dark chocolate'],
    category: 'Flavoring',
    concern: 'moderate',
    description: 'Cocoa-based product. Dark chocolate has health benefits but often contains sugar and additives.',
    healthEffects: [
      'Contains antioxidants (flavonoids)',
      'May improve heart health',
      'Can boost mood',
      'May improve cognitive function',
      'Often high in sugar'
    ],
    whyConsider: [
      'Often high in added sugar',
      'May contain milk (if milk chocolate)',
      'Can be addictive',
      'Some brands use poor quality cocoa',
      'May contain caffeine'
    ],
    benefits: [
      'Rich in antioxidants',
      'May lower blood pressure',
      'Can improve mood',
      'May support brain health',
      'Contains minerals'
    ],
    dietaryInfo: {
      vegan: false, // Often contains milk
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk'] // If milk chocolate
    }
  },
  'cafeine': {
    name: 'Caffeine',
    aliases: ['cafeine', 'caffeine', 'caféine'],
    category: 'Stimulant',
    concern: 'moderate',
    description: 'Natural stimulant found in coffee, tea, and some foods. Can affect sleep and anxiety.',
    healthEffects: [
      'Stimulates central nervous system',
      'Can improve alertness',
      'May cause anxiety',
      'Can disrupt sleep',
      'May increase heart rate'
    ],
    whyConsider: [
      'Can cause dependency',
      'May affect sleep quality',
      'Can cause jitters and anxiety',
      'May increase blood pressure',
      'Can interact with medications'
    ],
    benefits: [
      'Improves alertness',
      'May enhance physical performance',
      'Can boost mood temporarily',
      'May protect against Parkinson\'s',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'theine': {
    name: 'Theine',
    aliases: ['theine', 'theanine', 'théine'],
    category: 'Amino Acid',
    concern: 'low',
    description: 'Amino acid found in tea. Has calming effects that balance caffeine.',
    healthEffects: [
      'Promotes relaxation',
      'May reduce anxiety',
      'Can improve focus',
      'Balances caffeine effects',
      'May support brain health'
    ],
    whyConsider: [
      'Often found with caffeine',
      'May cause mild drowsiness',
      'Effects vary by individual',
      'Quality depends on tea source'
    ],
    benefits: [
      'Reduces stress and anxiety',
      'Improves focus and concentration',
      'May enhance sleep quality',
      'Supports cognitive function',
      'Natural calming agent'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'gelatine': {
    name: 'Gelatin',
    aliases: ['gelatine', 'gelatin', 'gélatine'],
    category: 'Thickener',
    concern: 'moderate',
    description: 'Protein derived from animal bones. Used as thickener but not suitable for vegetarians.',
    healthEffects: [
      'Contains collagen',
      'May support joint health',
      'May improve skin elasticity',
      'Contains amino acids',
      'Not suitable for vegetarians'
    ],
    whyConsider: [
      'Animal-derived product',
      'Not suitable for vegetarians/vegans',
      'May contain residues',
      'Processing concerns',
      'May cause allergic reactions'
    ],
    benefits: [
      'Rich in glycine',
      'May support gut health',
      'Contains proline for collagen',
      'May improve hair and nails',
      'Supports connective tissue'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: false,
      glutenFree: true
    }
  },
  'pectine': {
    name: 'Pectin',
    aliases: ['pectine', 'pectin', 'pectine de fruits'],
    category: 'Thickener',
    concern: 'low',
    description: 'Natural fiber from fruits used as thickener. Generally safe and may have health benefits.',
    healthEffects: [
      'Natural soluble fiber',
      'May lower cholesterol',
      'Can improve digestion',
      'May help control blood sugar',
      'Generally safe'
    ],
    whyConsider: [
      'May cause digestive upset in high doses',
      'Often modified for industrial use',
      'May contain additives',
      'Quality varies by source'
    ],
    benefits: [
      'Supports digestive health',
      'May lower cholesterol',
      'Natural fiber source',
      'May help with weight management',
      'Supports gut bacteria'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'gomme guar': {
    name: 'Guar Gum',
    aliases: ['gomme guar', 'guar gum', 'guar flour', 'cyamopsis gum'],
    category: 'Thickener',
    concern: 'moderate',
    description: 'Natural thickener from guar beans. May cause digestive issues in sensitive individuals.',
    healthEffects: [
      'Natural soluble fiber',
      'May lower cholesterol',
      'Can cause bloating',
      'May improve blood sugar control',
      'Fermented by gut bacteria'
    ],
    whyConsider: [
      'May cause digestive discomfort',
      'Can cause gas and bloating',
      'Often used in large quantities',
      'May mask poor quality ingredients',
      'Quality depends on processing'
    ],
    benefits: [
      'Natural fiber source',
      'May support blood sugar control',
      'Can aid weight management',
      'Supports gut health',
      'May lower cholesterol'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'carraghénane': {
    name: 'Carrageenan',
    aliases: ['carraghénane', 'carrageenan', 'carrageen', 'chondrus crispus'],
    category: 'Thickener',
    concern: 'high',
    description: 'Seaweed-derived thickener. May cause inflammation and digestive issues.',
    healthEffects: [
      'May cause intestinal inflammation',
      'Linked to digestive issues',
      'May promote cancer development',
      'Can cause bloating',
      'May affect gut bacteria'
    ],
    whyConsider: [
      'May cause gastrointestinal inflammation',
      'Linked to ulcerative colitis',
      'Potential carcinogen',
      'Often degraded forms used',
      'Better alternatives exist'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'huile de tournesol': {
    name: 'Sunflower Oil',
    aliases: ['huile de tournesol', 'sunflower oil', 'huile de graines de tournesol'],
    category: 'Oil',
    concern: 'moderate',
    description: 'Oil from sunflower seeds. High in omega-6 fatty acids but often highly processed.',
    healthEffects: [
      'High in vitamin E',
      'Contains omega-6 fatty acids',
      'Often highly refined',
      'May promote inflammation',
      'Neutral flavor'
    ],
    whyConsider: [
      'High omega-6 to omega-3 ratio',
      'Highly processed',
      'May contain trans fats from processing',
      'Often from genetically modified seeds',
      'May oxidize easily'
    ],
    benefits: [
      'Rich in vitamin E',
      'Good source of healthy fats',
      'Stable for high-heat cooking',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'huile de sesame': {
    name: 'Sesame Oil',
    aliases: ['huile de sesame', 'sesame oil', 'huile de sésame'],
    category: 'Oil',
    concern: 'low',
    description: 'Oil from sesame seeds. Rich in antioxidants and healthy fats.',
    healthEffects: [
      'Rich in antioxidants',
      'Contains sesamin and sesamolin',
      'May lower cholesterol',
      'Stable for cooking',
      'Contains vitamin E'
    ],
    whyConsider: [
      'Sesame allergen',
      'May be highly processed',
      'Some people sensitive to taste',
      'May contain traces of seeds'
    ],
    benefits: [
      'Rich in antioxidants',
      'May support heart health',
      'Contains lignans',
      'Good for high-heat cooking',
      'May have anti-inflammatory effects'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['sesame']
    }
  },
  'huile d\'arachide': {
    name: 'Peanut Oil',
    aliases: ['huile d\'arachide', 'peanut oil', 'groundnut oil'],
    category: 'Oil',
    concern: 'moderate',
    description: 'Oil from peanuts. High in monounsaturated fats but major allergen.',
    healthEffects: [
      'High in monounsaturated fats',
      'Contains vitamin E',
      'Stable for frying',
      'Major allergen',
      'May contain aflatoxins'
    ],
    whyConsider: [
      'Major allergen - can cause anaphylaxis',
      'May contain aflatoxins',
      'Often highly refined',
      'Environmental concerns',
      'May be contaminated'
    ],
    benefits: [
      'Heart-healthy fats',
      'Good for cooking',
      'Contains resveratrol',
      'Stable at high temperatures'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['peanuts']
    }
  },
  'margarine': {
    name: 'Margarine',
    aliases: ['margarine', 'margarine végétale', 'marge'],
    category: 'Fat',
    concern: 'high',
    description: 'Processed spread made from vegetable oils. Often contains trans fats and additives.',
    healthEffects: [
      'Often contains trans fats',
      'May contain hydrogenated oils',
      'Can affect cholesterol levels',
      'May contain additives',
      'Highly processed'
    ],
    whyConsider: [
      'Often contains trans fats',
      'Highly processed',
      'May affect heart health',
      'Contains artificial additives',
      'Not as healthy as claimed'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'lactose': {
    name: 'Lactose',
    aliases: ['lactose', 'milk sugar', 'lactose powder'],
    category: 'Sugar',
    concern: 'moderate',
    description: 'Natural sugar found in milk. Problematic for lactose intolerant individuals.',
    healthEffects: [
      'Natural milk sugar',
      'May cause digestive issues',
      'Can cause bloating and gas',
      'May cause diarrhea',
      'Not suitable for lactose intolerant'
    ],
    whyConsider: [
      'Causes issues for lactose intolerant',
      'May be added to processed foods',
      'Can cause digestive discomfort',
      'May affect calcium absorption',
      'Often hidden in ingredients'
    ],
    benefits: [
      'Natural carbohydrate',
      'Contains some minerals',
      'Supports beneficial bacteria',
      'Easy to digest for some'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'lactose']
    }
  },
  'caseine': {
    name: 'Casein',
    aliases: ['caseine', 'casein', 'milk casein', 'caseinate'],
    category: 'Protein',
    concern: 'moderate',
    description: 'Milk protein. Complete protein but major allergen and may cause digestive issues.',
    healthEffects: [
      'Complete protein',
      'Slow-digesting protein',
      'May support muscle recovery',
      'Major allergen',
      'May cause digestive issues'
    ],
    whyConsider: [
      'Major allergen',
      'Not suitable for dairy-free diets',
      'May contain hormones/antibiotics',
      'Highly processed forms',
      'May cause digestive discomfort'
    ],
    benefits: [
      'Complete amino acid profile',
      'Slow release protein',
      'Supports muscle maintenance',
      'Contains calcium',
      'May support bone health'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy', 'casein']
    }
  },
  'albumine': {
    name: 'Albumin',
    aliases: ['albumine', 'albumin', 'egg albumin', 'egg white protein'],
    category: 'Protein',
    concern: 'moderate',
    description: 'Protein from egg whites. Complete protein but major allergen.',
    healthEffects: [
      'Complete protein',
      'High in essential amino acids',
      'Low in calories',
      'Major allergen',
      'May affect digestion'
    ],
    whyConsider: [
      'Major allergen',
      'Not suitable for egg-free diets',
      'May contain salmonella risk',
      'Highly processed forms',
      'May cause allergic reactions'
    ],
    benefits: [
      'Excellent protein quality',
      'Low in fat',
      'Supports muscle health',
      'Contains vitamins',
      'Easily digestible'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['eggs', 'egg']
    }
  },
  'fibres': {
    name: 'Fibers',
    aliases: ['fibres', 'fibers', 'dietary fiber', 'fiber'],
    category: 'Fiber',
    concern: 'low',
    description: 'Dietary fiber from various sources. Essential for digestive health.',
    healthEffects: [
      'Supports digestive health',
      'May lower cholesterol',
      'Can improve blood sugar control',
      'Supports gut bacteria',
      'May aid weight management'
    ],
    whyConsider: [
      'May cause digestive upset if increased suddenly',
      'Some fibers are highly processed',
      'Quality varies by source',
      'May interact with medications',
      'Added fiber not always as beneficial'
    ],
    benefits: [
      'Supports regular bowel movements',
      'May reduce heart disease risk',
      'Helps control blood sugar',
      'Supports healthy weight',
      'Feeds beneficial gut bacteria'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'vitamine c': {
    name: 'Vitamin C',
    aliases: ['vitamine c', 'vitamin c', 'ascorbic acid', 'acide ascorbique'],
    category: 'Vitamin',
    concern: 'low',
    description: 'Essential vitamin. Important for immune health but may cause issues when synthetic.',
    healthEffects: [
      'Supports immune system',
      'Antioxidant properties',
      'May reduce cold duration',
      'Supports collagen production',
      'May improve iron absorption'
    ],
    whyConsider: [
      'Often synthetic in supplements',
      'High doses may cause digestive upset',
      'May interact with medications',
      'Natural sources preferable',
      'Quality varies'
    ],
    benefits: [
      'Essential for immune health',
      'Powerful antioxidant',
      'Supports skin health',
      'May reduce chronic disease risk',
      'Natural antihistamine'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'vitamine d': {
    name: 'Vitamin D',
    aliases: ['vitamine d', 'vitamin d', 'cholecalciferol', 'ergocalciferol'],
    category: 'Vitamin',
    concern: 'low',
    description: 'Essential vitamin for bone health. Often deficient in modern diets.',
    healthEffects: [
      'Essential for calcium absorption',
      'Supports bone health',
      'May support immune function',
      'May reduce depression risk',
      'Important for muscle function'
    ],
    whyConsider: [
      'Often deficient in modern diets',
      'Synthetic forms may be less effective',
      'May interact with medications',
      'Over-supplementation can be harmful',
      'Quality varies by source'
    ],
    benefits: [
      'Supports bone density',
      'May boost immune system',
      'May improve mood',
      'Supports muscle strength',
      'May reduce autoimmune disease risk'
    ],
    dietaryInfo: {
      vegan: false, // Animal sources usually
      vegetarian: false,
      glutenFree: true
    }
  },
  'fer': {
    name: 'Iron',
    aliases: ['fer', 'iron', 'ferrous', 'fer elemental'],
    category: 'Mineral',
    concern: 'low',
    description: 'Essential mineral for oxygen transport. Important but can be problematic in excess.',
    healthEffects: [
      'Essential for oxygen transport',
      'Supports energy production',
      'Important for immune function',
      'May cause constipation',
      'Excess can be toxic'
    ],
    whyConsider: [
      'May cause digestive upset',
      'Excess can be harmful',
      'May interact with medications',
      'Not always well absorbed',
      'Different forms have different bioavailability'
    ],
    benefits: [
      'Prevents anemia',
      'Supports cognitive function',
      'Important for pregnancy',
      'Supports immune health',
      'Essential for growth'
    ],
    dietaryInfo: {
      vegan: true, // Plant sources exist
      vegetarian: true,
      glutenFree: true
    }
  },
  'calcium': {
    name: 'Calcium',
    aliases: ['calcium', 'calcium carbonate', 'calcium citrate'],
    category: 'Mineral',
    concern: 'low',
    description: 'Essential mineral for bones and teeth. Important for many bodily functions.',
    healthEffects: [
      'Essential for bone health',
      'Supports muscle function',
      'Important for nerve transmission',
      'May support blood pressure',
      'May reduce colon cancer risk'
    ],
    whyConsider: [
      'May cause kidney stones in excess',
      'Poor absorption in some forms',
      'May interact with medications',
      'Many people deficient',
      'Quality varies by source'
    ],
    benefits: [
      'Supports bone density',
      'Important for muscle contraction',
      'Supports blood clotting',
      'May reduce PMS symptoms',
      'Supports dental health'
    ],
    dietaryInfo: {
      vegan: true, // Plant sources exist
      vegetarian: true,
      glutenFree: true
    }
  },
  'magnesium': {
    name: 'Magnesium',
    aliases: ['magnesium', 'magnesium oxide', 'magnesium citrate', 'magnésium'],
    category: 'Mineral',
    concern: 'low',
    description: 'Essential mineral for many bodily functions. Often deficient in modern diets.',
    healthEffects: [
      'Supports muscle and nerve function',
      'Important for energy production',
      'May reduce blood pressure',
      'Supports bone health',
      'May improve sleep quality'
    ],
    whyConsider: [
      'Often deficient in modern diets',
      'May cause digestive upset in high doses',
      'Poor absorption in some forms',
      'May interact with medications',
      'Different forms vary in effectiveness'
    ],
    benefits: [
      'Supports relaxation',
      'May reduce migraine frequency',
      'Supports heart health',
      'Important for mental health',
      'Supports blood sugar control'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'huile vegetale': {
    name: 'Vegetable Oil',
    aliases: ['huile vegetale', 'vegetable oil', 'huile végétale'],
    category: 'Oil',
    concern: 'moderate',
    description: 'Generic term for various plant-based oils. Often highly processed and unspecified.',
    healthEffects: [
      'Often highly refined',
      'May contain trans fats',
      'High in omega-6 fatty acids',
      'May promote inflammation',
      'Unspecified source'
    ],
    whyConsider: [
      'Often highly processed',
      'May contain harmful trans fats',
      'Unspecified source quality',
      'May be rancid',
      'Better to use specific oils'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'huile de palmiste': {
    name: 'Palm Kernel Oil',
    aliases: ['huile de palmiste', 'palm kernel oil', 'huile de palm kernel'],
    category: 'Oil',
    concern: 'very_high',
    description: 'Oil from palm kernels. High in saturated fat and environmental impact.',
    healthEffects: [
      'Very high in saturated fat',
      'May raise LDL cholesterol',
      'Highly processed',
      'Contains medium-chain fats',
      'May affect heart health'
    ],
    whyConsider: [
      'Extremely high saturated fat content',
      'Deforestation and habitat destruction',
      'Environmental impact',
      'Often from unsustainable sources',
      'Highly processed'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'huile de mais': {
    name: 'Corn Oil',
    aliases: ['huile de mais', 'corn oil', 'maize oil'],
    category: 'Oil',
    concern: 'high',
    description: 'Oil from corn. Often genetically modified and highly processed.',
    healthEffects: [
      'High in omega-6 fatty acids',
      'Often from GMO corn',
      'Highly refined',
      'May promote inflammation',
      'Contains phytosterols'
    ],
    whyConsider: [
      'Often genetically modified',
      'High omega-6 to omega-3 ratio',
      'Highly processed',
      'Environmental concerns',
      'May contain pesticides'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['corn']
    }
  },
  'huile de soja raffinee': {
    name: 'Refined Soybean Oil',
    aliases: ['huile de soja raffinee', 'refined soybean oil', 'refined soy oil'],
    category: 'Oil',
    concern: 'very_high',
    description: 'Highly refined soybean oil. Inflammatory and often genetically modified.',
    healthEffects: [
      'Extremely high in omega-6',
      'Highly inflammatory',
      'Often from GMO sources',
      'May damage cell membranes',
      'Linked to metabolic issues'
    ],
    whyConsider: [
      'Extremely high omega-6 content',
      'Highly inflammatory',
      'Often genetically modified',
      'Extensively processed with chemicals',
      'Major contributor to inflammation'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['soy']
    }
  },
  'amidon': {
    name: 'Starch',
    aliases: ['amidon', 'starch', 'corn starch', 'wheat starch', 'potato starch'],
    category: 'Carbohydrate',
    concern: 'moderate',
    description: 'Carbohydrate from various sources. Often highly processed and may affect blood sugar.',
    healthEffects: [
      'Can cause blood sugar spikes',
      'Often highly processed',
      'May feed harmful bacteria',
      'Low in nutrients',
      'May cause digestive issues'
    ],
    whyConsider: [
      'Highly refined carbohydrate',
      'May cause rapid blood sugar changes',
      'Often from genetically modified sources',
      'Low nutritional value',
      'May contribute to overeating'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'amidon de mais': {
    name: 'Corn Starch',
    aliases: ['amidon de mais', 'corn starch', 'maize starch'],
    category: 'Carbohydrate',
    concern: 'moderate',
    description: 'Starch from corn. Often genetically modified and may affect gut health.',
    healthEffects: [
      'May cause digestive issues',
      'Often from GMO corn',
      'Highly processed',
      'May feed harmful gut bacteria',
      'Low nutritional value'
    ],
    whyConsider: [
      'Often genetically modified',
      'May cause digestive discomfort',
      'Highly processed',
      'May contain contaminants',
      'Poor for gut health'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['corn']
    }
  },
  'amidon de ble': {
    name: 'Wheat Starch',
    aliases: ['amidon de ble', 'wheat starch', 'wheat starch powder'],
    category: 'Carbohydrate',
    concern: 'moderate',
    description: 'Starch from wheat. Contains gluten and may affect digestion.',
    healthEffects: [
      'Contains gluten',
      'May cause digestive issues',
      'Highly processed',
      'May affect blood sugar',
      'Low in nutrients'
    ],
    whyConsider: [
      'Contains gluten',
      'Not suitable for celiac disease',
      'Highly processed wheat',
      'May cause digestive sensitivity',
      'Low nutritional value'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: false,
      allergen: ['wheat', 'gluten']
    }
  },
  'sucre inverti': {
    name: 'Invert Sugar',
    aliases: ['sucre inverti', 'invert sugar', 'invert sugar syrup'],
    category: 'Sweetener',
    concern: 'high',
    description: 'Processed sugar syrup. High in calories and may affect metabolism.',
    healthEffects: [
      'High in simple sugars',
      'Can cause blood sugar spikes',
      'Highly processed',
      'May promote tooth decay',
      'High calorie density'
    ],
    whyConsider: [
      'Highly refined sugar',
      'Spikes blood sugar quickly',
      'No nutritional benefits',
      'May contribute to obesity',
      'Often overused in processed foods'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sirop d\'erable': {
    name: 'Maple Syrup',
    aliases: ['sirop d\'erable', 'maple syrup', 'érable syrup'],
    category: 'Natural Sweetener',
    concern: 'moderate',
    description: 'Natural sweetener from maple trees. Contains minerals but high in sugar.',
    healthEffects: [
      'Contains some minerals',
      'Natural sweetener',
      'High in sugar content',
      'May have antioxidant properties',
      'Contains polyphenols'
    ],
    whyConsider: [
      'Still high in sugar',
      'May be adulterated',
      'Environmental impact of tapping',
      'High calorie for small amount',
      'May cause blood sugar issues'
    ],
    benefits: [
      'Contains zinc and manganese',
      'Natural source',
      'Contains antioxidants',
      'Better than refined sugar',
      'Contains polyphenols'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'miel': {
    name: 'Honey',
    aliases: ['miel', 'honey', 'honey bee'],
    category: 'Natural Sweetener',
    concern: 'moderate',
    description: 'Natural sweetener from bees. Contains antioxidants but high in sugar and potential allergens.',
    healthEffects: [
      'Contains antioxidants',
      'May have antibacterial properties',
      'High in sugar',
      'May cause allergic reactions',
      'Contains vitamins and minerals'
    ],
    whyConsider: [
      'High in sugar content',
      'May cause allergic reactions',
      'Not suitable for vegans',
      'May be adulterated',
      'Environmental impact on bees'
    ],
    benefits: [
      'Contains antioxidants',
      'May soothe sore throats',
      'Natural preservative',
      'Contains enzymes',
      'May support immune health'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['bees', 'honey']
    }
  },
  'jus de fruits': {
    name: 'Fruit Juice',
    aliases: ['jus de fruits', 'fruit juice', 'jus de fruit'],
    category: 'Beverage',
    concern: 'high',
    description: 'Concentrated fruit sugars. High in sugar with most fiber removed.',
    healthEffects: [
      'High in natural sugars',
      'Low in fiber compared to whole fruit',
      'May cause blood sugar spikes',
      'Contains vitamins',
      'May promote tooth decay'
    ],
    whyConsider: [
      'High sugar content without fiber',
      'May cause rapid blood sugar changes',
      'Often from concentrate',
      'May contain additives',
      'Can contribute to overconsumption'
    ],
    benefits: [
      'Contains vitamins',
      'Hydrating',
      'Natural source',
      'May provide antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'jus de fruits concentre': {
    name: 'Fruit Juice Concentrate',
    aliases: ['jus de fruits concentre', 'fruit juice concentrate', 'concentré de jus'],
    category: 'Sweetener',
    concern: 'high',
    description: 'Concentrated fruit juice used as sweetener. High in sugar and processed.',
    healthEffects: [
      'Very high in concentrated sugars',
      'May contain additives',
      'Highly processed',
      'May cause blood sugar issues',
      'Low in nutrients compared to volume'
    ],
    whyConsider: [
      'Extremely high sugar content',
      'Highly processed',
      'May contain preservatives',
      'Often from poor quality fruit',
      'Can mask poor product quality'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'aromes': {
    name: 'Flavors',
    aliases: ['aromes', 'flavors', 'artificial flavors', 'natural flavors', 'arômes'],
    category: 'Flavoring',
    concern: 'moderate',
    description: 'Flavor compounds added to foods. May be natural or artificial.',
    healthEffects: [
      'May contain allergens',
      'Some artificial flavors concerning',
      'May cause sensitivities',
      'Often proprietary blends',
      'May affect gut health'
    ],
    whyConsider: [
      'Often artificial chemicals',
      'May contain allergens',
      'Proprietary formulations',
      'May affect gut microbiome',
      'Better natural alternatives exist'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true, // Usually
      vegetarian: true,
      glutenFree: true
    }
  },
  'aromes naturels': {
    name: 'Natural Flavors',
    aliases: ['aromes naturels', 'natural flavors', 'arômes naturels'],
    category: 'Flavoring',
    concern: 'low',
    description: 'Flavors derived from natural sources. Generally safer than artificial.',
    healthEffects: [
      'From natural sources',
      'May contain allergens',
      'Generally safer than artificial',
      'May cause sensitivities',
      'Proprietary blends'
    ],
    whyConsider: [
      'Still may contain allergens',
      'Proprietary formulations',
      'Quality varies',
      'May include solvents',
      'Not always transparent'
    ],
    benefits: [
      'From natural sources',
      'Generally safer',
      'May provide some nutrients',
      'Better than artificial flavors'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'aromes artificiels': {
    name: 'Artificial Flavors',
    aliases: ['aromes artificiels', 'artificial flavors', 'arômes artificiels'],
    category: 'Flavoring',
    concern: 'high',
    description: 'Synthetic flavor compounds. May affect health and behavior.',
    healthEffects: [
      'Synthetic chemicals',
      'May affect behavior in children',
      'May cause allergic reactions',
      'May disrupt hormones',
      'May affect gut health'
    ],
    whyConsider: [
      'Synthetic chemicals',
      'May affect children\'s behavior',
      'Linked to health concerns',
      'No nutritional value',
      'Better natural alternatives exist'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'colorants': {
    name: 'Colorants',
    aliases: ['colorants', 'colorings', 'food colors', 'colorants alimentaires'],
    category: 'Additive',
    concern: 'high',
    description: 'Food colorings, often synthetic. May affect behavior and health.',
    healthEffects: [
      'May cause hyperactivity',
      'May cause allergic reactions',
      'Some linked to cancer',
      'May affect thyroid function',
      'Synthetic chemicals'
    ],
    whyConsider: [
      'Often synthetic chemicals',
      'May affect children\'s behavior',
      'Potential carcinogenic',
      'No nutritional value',
      'Better natural alternatives exist'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'colorants naturels': {
    name: 'Natural Colorants',
    aliases: ['colorants naturels', 'natural colors', 'natural colorings'],
    category: 'Natural Additive',
    concern: 'low',
    description: 'Colors from natural sources like plants and minerals.',
    healthEffects: [
      'From natural sources',
      'Generally safer',
      'May provide antioxidants',
      'May cause mild allergies',
      'More expensive'
    ],
    whyConsider: [
      'May still cause allergies',
      'More expensive than synthetic',
      'May fade over time',
      'Quality varies',
      'Not always stable'
    ],
    benefits: [
      'From natural sources',
      'May provide nutrients',
      'Generally safer',
      'Better for health',
      'Environmentally friendly'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'conservateurs': {
    name: 'Preservatives',
    aliases: ['conservateurs', 'preservatives', 'préservatifs'],
    category: 'Additive',
    concern: 'moderate',
    description: 'Substances that prevent spoilage. May affect health in various ways.',
    healthEffects: [
      'May cause allergic reactions',
      'Some linked to cancer',
      'May affect gut health',
      'May cause behavioral issues',
      'Synthetic chemicals'
    ],
    whyConsider: [
      'Often synthetic chemicals',
      'May affect gut microbiome',
      'Some carcinogenic',
      'No nutritional value',
      'May cause sensitivities'
    ],
    benefits: [
      'Prevent food spoilage',
      'Increase shelf life',
      'Reduce food waste'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'antioxydants': {
    name: 'Antioxidants',
    aliases: ['antioxydants', 'antioxidants', 'antioxidant additives'],
    category: 'Additive',
    concern: 'moderate',
    description: 'Substances that prevent oxidation. May be natural or synthetic.',
    healthEffects: [
      'May have health benefits',
      'Some synthetic ones concerning',
      'May affect hormones',
      'May cause allergic reactions',
      'Purpose is preservation'
    ],
    whyConsider: [
      'Some synthetic ones harmful',
      'May mask rancid oils',
      'Overuse in processed foods',
      'Natural alternatives better',
      'May interact with medications'
    ],
    benefits: [
      'Prevent oxidation',
      'May provide health benefits',
      'Extend shelf life',
      'Protect nutrients'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'vitamine e': {
    name: 'Vitamin E',
    aliases: ['vitamine e', 'vitamin e', 'tocopherol', 'tocopheryl'],
    category: 'Vitamin',
    concern: 'low',
    description: 'Essential antioxidant vitamin. Important for skin and immune health.',
    healthEffects: [
      'Powerful antioxidant',
      'Supports immune function',
      'Important for skin health',
      'May protect against heart disease',
      'Supports eye health'
    ],
    whyConsider: [
      'May interact with medications',
      'Excess can be harmful',
      'Different forms vary in effectiveness',
      'Synthetic forms less effective',
      'Quality varies'
    ],
    benefits: [
      'Powerful antioxidant',
      'Supports skin health',
      'May protect heart health',
      'Supports immune function',
      'Important for reproduction'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'betacarotene': {
    name: 'Beta-Carotene',
    aliases: ['betacarotene', 'beta-carotene', 'provitamin a'],
    category: 'Vitamin',
    concern: 'low',
    description: 'Precursor to vitamin A. Important antioxidant from plants.',
    healthEffects: [
      'Converts to vitamin A',
      'Powerful antioxidant',
      'Supports immune function',
      'May protect against cancer',
      'Supports skin health'
    ],
    whyConsider: [
      'Excess may cause yellow skin',
      'May interact with medications',
      'Not suitable for smokers',
      'Synthetic forms less effective',
      'Quality varies'
    ],
    benefits: [
      'Supports vision',
      'Powerful antioxidant',
      'Supports immune health',
      'May protect against cancer',
      'Natural source of vitamin A'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'zinc': {
    name: 'Zinc',
    aliases: ['zinc', 'zinc oxide', 'zinc citrate', 'zinc gluconate'],
    category: 'Mineral',
    concern: 'low',
    description: 'Essential mineral for immune function and wound healing.',
    healthEffects: [
      'Supports immune function',
      'Important for wound healing',
      'Supports DNA synthesis',
      'May reduce cold duration',
      'Important for growth'
    ],
    whyConsider: [
      'May cause nausea in high doses',
      'May interact with medications',
      'Poor absorption in some forms',
      'Often deficient in diets',
      'Different forms vary in effectiveness'
    ],
    benefits: [
      'Supports immune health',
      'Important for wound healing',
      'Supports hormone production',
      'May improve fertility',
      'Supports cognitive function'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'iode': {
    name: 'Iodine',
    aliases: ['iode', 'iodine', 'iodized salt', 'potassium iodide'],
    category: 'Mineral',
    concern: 'low',
    description: 'Essential mineral for thyroid function and development.',
    healthEffects: [
      'Essential for thyroid hormone',
      'Important for brain development',
      'Supports metabolism',
      'May prevent goiter',
      'Important during pregnancy'
    ],
    whyConsider: [
      'Deficiency common worldwide',
      'Excess can cause thyroid issues',
      'May interact with medications',
      'Quality varies by source',
      'Important for fetal development'
    ],
    benefits: [
      'Supports thyroid health',
      'Important for brain development',
      'Supports metabolism',
      'Prevents iodine deficiency disorders',
      'Essential for pregnancy'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'folate': {
    name: 'Folate',
    aliases: ['folate', 'folic acid', 'vitamin b9', 'folacine'],
    category: 'Vitamin',
    concern: 'low',
    description: 'Essential B vitamin for cell division and DNA synthesis.',
    healthEffects: [
      'Essential for cell division',
      'Important for pregnancy',
      'Supports red blood cell formation',
      'May reduce birth defects',
      'Supports mental health'
    ],
    whyConsider: [
      'Deficiency common',
      'Excess synthetic may mask B12 deficiency',
      'May interact with medications',
      'Important during pregnancy',
      'Different forms vary'
    ],
    benefits: [
      'Prevents neural tube defects',
      'Supports red blood cell health',
      'Important for pregnancy',
      'Supports mental health',
      'May reduce heart disease risk'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'biotine': {
    name: 'Biotin',
    aliases: ['biotine', 'biotin', 'vitamin b7', 'vitamin h'],
    category: 'Vitamin',
    concern: 'low',
    description: 'B vitamin important for metabolism and healthy hair/skin.',
    healthEffects: [
      'Supports metabolism',
      'Important for healthy hair',
      'Supports skin health',
      'Important for nail health',
      'Supports energy production'
    ],
    whyConsider: [
      'Rare deficiency',
      'Excess from supplements usually safe',
      'May interact with lab tests',
      'Quality varies by source',
      'Often added to supplements'
    ],
    benefits: [
      'Supports healthy hair',
      'Supports skin health',
      'Supports metabolism',
      'May improve nail health',
      'Supports energy production'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'salt': {
    name: 'Salt',
    aliases: ['salt', 'table salt', 'sodium chloride', 'sea salt'],
    category: 'Mineral',
    concern: 'moderate',
    description: 'Essential mineral but excessive intake linked to health issues.',
    healthEffects: [
      'Essential for bodily functions',
      'May increase blood pressure',
      'Linked to heart disease',
      'Can cause water retention',
      'May affect kidney function'
    ],
    whyConsider: [
      'Most people consume too much',
      'Often added excessively in processing',
      'May be iodized or contain additives',
      'Can lead to hypertension',
      'Hidden in many processed foods'
    ],
    benefits: [
      'Essential for nerve function',
      'Supports electrolyte balance',
      'Important for hydration',
      'Contains iodine (in iodized salt)'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'water': {
    name: 'Water',
    aliases: ['water', 'eau', 'agua', 'h2o'],
    category: 'Beverage',
    concern: 'low',
    description: 'Essential for life. Most basic nutrient required by the body.',
    healthEffects: [
      'Essential for all bodily functions',
      'Supports hydration',
      'Helps regulate body temperature',
      'Important for digestion',
      'Carries nutrients and oxygen'
    ],
    whyConsider: [
      'Quality may vary by source',
      'May contain contaminants',
      'Mineral content varies',
      'pH may affect health',
      'Most people don\'t drink enough'
    ],
    benefits: [
      'Essential for life',
      'Supports all bodily functions',
      'Zero calories',
      'Helps with detoxification',
      'Improves physical performance'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'milk': {
    name: 'Milk',
    aliases: ['milk', 'dairy milk', 'cow\'s milk', 'whole milk'],
    category: 'Dairy',
    concern: 'moderate',
    description: 'Nutrient-rich dairy product. Contains calcium and protein but may cause issues.',
    healthEffects: [
      'Good source of calcium',
      'Contains high-quality protein',
      'Rich in vitamins D and B12',
      'May support bone health',
      'Contains lactose'
    ],
    whyConsider: [
      'May cause lactose intolerance',
      'Contains saturated fat',
      'May contain hormones/antibiotics',
      'Environmental impact of dairy farming',
      'Common allergen'
    ],
    benefits: [
      'Excellent calcium source',
      'High-quality protein',
      'Contains vitamin D',
      'Supports bone health',
      'Contains probiotics'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy', 'lactose']
    }
  },
  'cheese': {
    name: 'Cheese',
    aliases: ['cheese', 'fromage', 'cheddar', 'mozzarella'],
    category: 'Dairy',
    concern: 'moderate',
    description: 'Fermented dairy product. Nutrient-dense but high in saturated fat.',
    healthEffects: [
      'High in calcium and protein',
      'Contains probiotics',
      'Rich in vitamins A and B12',
      'High in saturated fat',
      'Contains lactose (varies by type)'
    ],
    whyConsider: [
      'High in saturated fat',
      'High in calories',
      'May contain lactose',
      'May contain additives',
      'Not suitable for dairy-free diets'
    ],
    benefits: [
      'Excellent calcium source',
      'Contains probiotics',
      'High-quality protein',
      'Rich in nutrients',
      'May support gut health'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy']
    }
  },
  'butter': {
    name: 'Butter',
    aliases: ['butter', 'beurre', 'unsalted butter', 'salted butter'],
    category: 'Fat',
    concern: 'moderate',
    description: 'Fat from milk. Contains saturated fat but also important nutrients.',
    healthEffects: [
      'Contains saturated fat',
      'Rich in fat-soluble vitamins',
      'Contains CLA (conjugated linoleic acid)',
      'May affect cholesterol levels',
      'Contains butyrate'
    ],
    whyConsider: [
      'High in saturated fat',
      'Not suitable for dairy-free diets',
      'May contain hormones/antibiotics',
      'Environmental impact of dairy farming',
      'May contribute to heart disease risk'
    ],
    benefits: [
      'Rich in vitamins A, D, E, K',
      'Contains butyrate for gut health',
      'Natural source of CLA',
      'May support hormone production'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy', 'lactose']
    }
  },
  'eggs': {
    name: 'Eggs',
    aliases: ['eggs', 'egg', 'chicken eggs', 'whole eggs'],
    category: 'Protein',
    concern: 'moderate',
    description: 'Eggs from chickens. Complete protein but common allergen.',
    healthEffects: [
      'Complete protein source',
      'Rich in vitamins (B12, D)',
      'Contains choline for brain health',
      'High in cholesterol',
      'Common allergen'
    ],
    whyConsider: [
      'Major allergen',
      'High in cholesterol',
      'May contain salmonella risk',
      'Environmental impact of factory farming',
      'May contain hormones/antibiotics'
    ],
    benefits: [
      'Complete protein',
      'Rich in nutrients',
      'Supports brain health',
      'Good source of healthy fats'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['eggs', 'egg']
    }
  },
  'chicken': {
    name: 'Chicken',
    aliases: ['chicken', 'poulet', 'chicken meat', 'poultry'],
    category: 'Protein',
    concern: 'moderate',
    description: 'Lean poultry meat. Good protein source but quality varies.',
    healthEffects: [
      'Good source of lean protein',
      'Contains B vitamins',
      'Rich in selenium',
      'May contain antibiotics',
      'Quality varies by farming method'
    ],
    whyConsider: [
      'May contain antibiotics',
      'May contain hormones',
      'Environmental impact of factory farming',
      'May contain pathogens',
      'Quality varies greatly'
    ],
    benefits: [
      'Lean protein source',
      'Rich in B vitamins',
      'Contains selenium',
      'Supports muscle health',
      'Versatile cooking options'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: false,
      glutenFree: true
    }
  },
  'beef': {
    name: 'Beef',
    aliases: ['beef', 'boeuf', 'beef meat', 'red meat'],
    category: 'Protein',
    concern: 'moderate',
    description: 'Red meat from cattle. Rich in protein and nutrients but high in saturated fat.',
    healthEffects: [
      'Rich in high-quality protein',
      'Contains iron and zinc',
      'High in B vitamins',
      'High in saturated fat',
      'May contain hormones/antibiotics'
    ],
    whyConsider: [
      'High in saturated fat',
      'Linked to heart disease',
      'May contain hormones/antibiotics',
      'Environmental impact',
      'May increase cancer risk'
    ],
    benefits: [
      'Excellent protein source',
      'Rich in iron and zinc',
      'Contains B vitamins',
      'Supports muscle health',
      'Contains creatine'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: false,
      glutenFree: true
    }
  },
  'fish': {
    name: 'Fish',
    aliases: ['fish', 'poisson', 'seafood', 'fin fish'],
    category: 'Protein',
    concern: 'moderate',
    description: 'Seafood rich in omega-3s but may contain mercury and other contaminants.',
    healthEffects: [
      'Rich in omega-3 fatty acids',
      'Good source of protein',
      'May contain mercury',
      'May contain microplastics',
      'Can cause allergic reactions'
    ],
    whyConsider: [
      'Major allergen',
      'Mercury contamination risk',
      'Overfishing concerns',
      'May contain antibiotics',
      'Some fish high in mercury'
    ],
    benefits: [
      'Excellent omega-3 source',
      'High-quality protein',
      'Rich in vitamins D and B12',
      'May support heart and brain health'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: false,
      glutenFree: true,
      allergen: ['fish', 'seafood']
    }
  },
  'pork': {
    name: 'Pork',
    aliases: ['pork', 'porc', 'pig meat', 'swine'],
    category: 'Protein',
    concern: 'moderate',
    description: 'Meat from pigs. Good protein source but often processed.',
    healthEffects: [
      'Good protein source',
      'Rich in B vitamins',
      'Contains selenium',
      'May contain parasites',
      'Often processed heavily'
    ],
    whyConsider: [
      'May contain parasites',
      'Often highly processed',
      'May contain nitrates in processed forms',
      'Environmental impact',
      'May contain hormones'
    ],
    benefits: [
      'Good protein source',
      'Rich in B vitamins',
      'Contains selenium',
      'Supports muscle health',
      'Contains thiamine'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: false,
      glutenFree: true
    }
  },
  'rice': {
    name: 'Rice',
    aliases: ['rice', 'riz', 'white rice', 'brown rice', 'basmati rice'],
    category: 'Grain',
    concern: 'low',
    description: 'Common grain. White rice is highly processed while brown rice retains more nutrients.',
    healthEffects: [
      'Good carbohydrate source',
      'May contain arsenic',
      'White rice highly processed',
      'Brown rice more nutritious',
      'May cause blood sugar spikes'
    ],
    whyConsider: [
      'Arsenic contamination risk',
      'White rice lacks nutrients',
      'May be genetically modified',
      'High glycemic index (white rice)',
      'Often overconsumed'
    ],
    benefits: [
      'Good energy source',
      'Contains B vitamins',
      'Provides fiber (brown rice)',
      'Gluten-free',
      'Easy to digest'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'wheat': {
    name: 'Wheat',
    aliases: ['wheat', 'blé', 'wheat flour', 'whole wheat'],
    category: 'Grain',
    concern: 'moderate',
    description: 'Common grain that contains gluten. May cause issues for sensitive individuals.',
    healthEffects: [
      'Contains gluten (problematic for celiac)',
      'May cause digestive issues',
      'Can trigger autoimmune responses',
      'Often highly processed',
      'May contain anti-nutrients'
    ],
    whyConsider: [
      'Contains gluten',
      'May cause celiac disease',
      'Highly processed modern wheat',
      'May contain pesticides',
      'Not suitable for gluten-free diets'
    ],
    benefits: [
      'Good source of carbohydrates',
      'Contains B vitamins',
      'Provides fiber',
      'Contains minerals'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: false,
      allergen: ['wheat', 'gluten']
    }
  },
  'corn': {
    name: 'Corn',
    aliases: ['corn', 'mais', 'maize', 'sweet corn'],
    category: 'Grain',
    concern: 'moderate',
    description: 'Common grain often genetically modified. May cause digestive issues.',
    healthEffects: [
      'Often genetically modified',
      'May cause digestive issues',
      'High in carbohydrates',
      'May contain mycotoxins',
      'Common allergen'
    ],
    whyConsider: [
      'Often genetically modified',
      'May contain pesticides',
      'Highly processed forms common',
      'May cause digestive sensitivity',
      'Environmental impact'
    ],
    benefits: [
      'Good carbohydrate source',
      'Contains antioxidants',
      'Provides fiber',
      'Rich in vitamin C'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['corn']
    }
  },
  'oats': {
    name: 'Oats',
    aliases: ['oats', 'avoine', 'oatmeal', 'rolled oats'],
    category: 'Grain',
    concern: 'low',
    description: 'Nutrient-rich grain. Good source of fiber and beta-glucan.',
    healthEffects: [
      'High in soluble fiber',
      'Contains beta-glucan',
      'May lower cholesterol',
      'Good for blood sugar control',
      'May contain gluten cross-contamination'
    ],
    whyConsider: [
      'May contain gluten cross-contamination',
      'Some people sensitive to avenin',
      'May be contaminated with pesticides',
      'Quality varies by processing',
      'Often highly processed'
    ],
    benefits: [
      'High in soluble fiber',
      'May lower cholesterol',
      'Supports blood sugar control',
      'Good source of manganese',
      'Supports gut health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: false, // May be cross-contaminated
      allergen: ['gluten'] // Cross-contamination
    }
  },
  'quinoa': {
    name: 'Quinoa',
    aliases: ['quinoa', 'quinua', 'super grain'],
    category: 'Grain',
    concern: 'low',
    description: 'Nutrient-dense seed. Complete protein and rich in minerals.',
    healthEffects: [
      'Complete protein source',
      'Rich in minerals',
      'High in fiber',
      'Contains antioxidants',
      'Good for blood sugar control'
    ],
    whyConsider: [
      'May contain saponins if not rinsed',
      'Often imported long distances',
      'May be expensive',
      'Some people sensitive to oxalates',
      'May contain phytates'
    ],
    benefits: [
      'Complete protein',
      'Rich in minerals (iron, magnesium)',
      'High in fiber',
      'Gluten-free',
      'Contains all essential amino acids'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'potatoes': {
    name: 'Potatoes',
    aliases: ['potatoes', 'pomme de terre', 'spuds', 'white potatoes'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Starchy vegetable. Good carbohydrate source but glycemic index varies.',
    healthEffects: [
      'Good carbohydrate source',
      'Contains potassium',
      'Rich in vitamin C',
      'May cause blood sugar spikes',
      'Contains resistant starch'
    ],
    whyConsider: [
      'High glycemic index',
      'Often fried or processed',
      'May contain acrylamide when fried',
      'May cause digestive issues',
      'Quality varies by variety'
    ],
    benefits: [
      'Good potassium source',
      'Rich in vitamin C',
      'Contains fiber',
      'Supports gut health',
      'Versatile cooking options'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'tomatoes': {
    name: 'Tomatoes',
    aliases: ['tomatoes', 'tomate', 'tomato', 'cherry tomatoes'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Nutrient-rich fruit. Excellent source of lycopene and vitamin C.',
    healthEffects: [
      'Rich in lycopene',
      'High in vitamin C',
      'Contains antioxidants',
      'May support heart health',
      'Contains potassium'
    ],
    whyConsider: [
      'May cause acid reflux',
      'Some people sensitive to nightshades',
      'Quality varies by ripeness',
      'May contain pesticides',
      'Often transported long distances'
    ],
    benefits: [
      'Excellent lycopene source',
      'Rich in vitamin C',
      'May reduce cancer risk',
      'Supports heart health',
      'Contains folate'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'onions': {
    name: 'Onions',
    aliases: ['onions', 'oignon', 'red onions', 'white onions', 'yellow onions'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Flavorful vegetable. Contains antioxidants and sulfur compounds.',
    healthEffects: [
      'Contains sulfur compounds',
      'Rich in antioxidants',
      'May support heart health',
      'Contains quercetin',
      'May have antimicrobial properties'
    ],
    whyConsider: [
      'May cause digestive issues',
      'Strong flavor may be unpleasant',
      'May cause bad breath',
      'Some people sensitive to alliums',
      'May interact with blood thinners'
    ],
    benefits: [
      'Rich in antioxidants',
      'May support heart health',
      'Contains anti-inflammatory compounds',
      'May boost immune system',
      'Supports detoxification'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'garlic': {
    name: 'Garlic',
    aliases: ['garlic', 'ail', 'garlic cloves', 'fresh garlic'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Flavorful bulb vegetable. Contains allicin and sulfur compounds.',
    healthEffects: [
      'Contains allicin',
      'May support heart health',
      'Antimicrobial properties',
      'May lower blood pressure',
      'Contains antioxidants'
    ],
    whyConsider: [
      'Strong flavor and odor',
      'May cause digestive upset',
      'May thin blood (interacts with medications)',
      'Some people sensitive to alliums',
      'May cause heartburn'
    ],
    benefits: [
      'May support cardiovascular health',
      'Antimicrobial properties',
      'May boost immune system',
      'Contains antioxidants',
      'May help regulate blood sugar'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'broccoli': {
    name: 'Broccoli',
    aliases: ['broccoli', 'brocoli', 'broccoli florets'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Nutrient-dense cruciferous vegetable. Rich in vitamins and antioxidants.',
    healthEffects: [
      'Rich in vitamin C and K',
      'Contains sulforaphane',
      'High in fiber',
      'Contains antioxidants',
      'May support detoxification'
    ],
    whyConsider: [
      'May cause digestive gas',
      'Some people sensitive to cruciferous veggies',
      'May interact with blood thinners',
      'Quality varies by freshness',
      'May contain pesticides'
    ],
    benefits: [
      'Excellent nutrient density',
      'May support cancer prevention',
      'Rich in antioxidants',
      'Supports detoxification',
      'High in vitamin C'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'spinach': {
    name: 'Spinach',
    aliases: ['spinach', 'epinard', 'baby spinach', 'fresh spinach'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Leafy green vegetable. Rich in iron, folate, and antioxidants.',
    healthEffects: [
      'Rich in iron and folate',
      'High in vitamin K',
      'Contains lutein',
      'High in antioxidants',
      'Contains nitrates'
    ],
    whyConsider: [
      'High in oxalates',
      'May affect calcium absorption',
      'May contain nitrates',
      'Quality varies by freshness',
      'May accumulate heavy metals'
    ],
    benefits: [
      'Excellent iron source',
      'Rich in folate',
      'Supports eye health',
      'High in antioxidants',
      'Supports bone health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'carrots': {
    name: 'Carrots',
    aliases: ['carrots', 'carotte', 'baby carrots', 'carrot sticks'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Root vegetable rich in beta-carotene. Good source of vitamin A.',
    healthEffects: [
      'Rich in beta-carotene',
      'High in vitamin A',
      'Contains antioxidants',
      'Supports eye health',
      'Contains fiber'
    ],
    whyConsider: [
      'May contain pesticides',
      'Quality varies by freshness',
      'May be genetically modified',
      'Some people sensitive to carrots',
      'Often transported long distances'
    ],
    benefits: [
      'Excellent vitamin A source',
      'Supports eye health',
      'Rich in antioxidants',
      'Supports immune system',
      'Good for skin health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'apples': {
    name: 'Apples',
    aliases: ['apples', 'pomme', 'apple', 'fresh apples'],
    category: 'Fruit',
    concern: 'low',
    description: 'Popular fruit rich in fiber and antioxidants.',
    healthEffects: [
      'High in fiber',
      'Rich in antioxidants',
      'Contains quercetin',
      'May support heart health',
      'Good for gut health'
    ],
    whyConsider: [
      'May contain pesticides',
      'Quality varies by variety',
      'Some people sensitive to apples',
      'Often waxed',
      'May cause digestive issues'
    ],
    benefits: [
      'High in soluble fiber',
      'Rich in antioxidants',
      'May support heart health',
      'Supports gut health',
      'Contains vitamin C'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'bananas': {
    name: 'Bananas',
    aliases: ['bananas', 'banane', 'banana', 'ripe bananas'],
    category: 'Fruit',
    concern: 'low',
    description: 'Nutrient-rich fruit. Good source of potassium and natural sugars.',
    healthEffects: [
      'Rich in potassium',
      'Good source of vitamin B6',
      'Contains resistant starch',
      'Natural sugars',
      'May support heart health'
    ],
    whyConsider: [
      'High in natural sugars',
      'May cause digestive issues when unripe',
      'Often treated with chemicals',
      'Environmental transport impact'
    ],
    benefits: [
      'Excellent potassium source',
      'Good for digestion',
      'Natural energy source',
      'Supports blood pressure',
      'Rich in vitamin B6'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'oranges': {
    name: 'Oranges',
    aliases: ['oranges', 'orange', 'oranges frais'],
    category: 'Fruit',
    concern: 'low',
    description: 'Citrus fruit rich in vitamin C. Good source of antioxidants.',
    healthEffects: [
      'Very high in vitamin C',
      'Contains antioxidants',
      'Rich in folate',
      'May support immune health',
      'Contains fiber'
    ],
    whyConsider: [
      'May contain pesticides',
      'Some people sensitive to citrus',
      'May cause acid reflux',
      'Often treated with fungicides',
      'Quality varies by season'
    ],
    benefits: [
      'Excellent vitamin C source',
      'Rich in antioxidants',
      'Supports immune health',
      'Contains folate',
      'May support heart health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'strawberries': {
    name: 'Strawberries',
    aliases: ['strawberries', 'fraise', 'strawberry', 'fresh strawberries'],
    category: 'Fruit',
    concern: 'low',
    description: 'Berry rich in vitamin C and antioxidants.',
    healthEffects: [
      'Very high in vitamin C',
      'Rich in antioxidants',
      'Contains ellagic acid',
      'May support heart health',
      'Low in calories'
    ],
    whyConsider: [
      'Highly perishable',
      'May contain pesticides',
      'Some people allergic to strawberries',
      'Often transported long distances',
      'Quality varies by freshness'
    ],
    benefits: [
      'Excellent vitamin C source',
      'Rich in antioxidants',
      'May support heart health',
      'Low calorie',
      'Contains folate'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['strawberries']
    }
  },
  'blueberries': {
    name: 'Blueberries',
    aliases: ['blueberries', 'myrtille', 'blueberry', 'wild blueberries'],
    category: 'Fruit',
    concern: 'low',
    description: 'Antioxidant-rich berry. May support brain and heart health.',
    healthEffects: [
      'Very high in antioxidants',
      'Contains anthocyanins',
      'May support brain health',
      'May improve memory',
      'Low in calories'
    ],
    whyConsider: [
      'Expensive',
      'Highly perishable',
      'May contain pesticides',
      'Often transported long distances',
      'Quality varies by freshness'
    ],
    benefits: [
      'Highest antioxidant content',
      'May support brain health',
      'May improve memory',
      'Supports heart health',
      'Low calorie'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'almonds': {
    name: 'Almonds',
    aliases: ['almonds', 'amandes', 'almond nuts', 'raw almonds'],
    category: 'Nuts',
    concern: 'low',
    description: 'Nutrient-dense tree nuts. Rich in healthy fats, vitamins, and minerals.',
    healthEffects: [
      'Rich in vitamin E and antioxidants',
      'High in healthy monounsaturated fats',
      'Good source of protein',
      'May support heart health',
      'Contains fiber'
    ],
    whyConsider: [
      'Tree nut allergen',
      'High in calories',
      'May cause digestive issues if not chewed well',
      'Some people sensitive to skins'
    ],
    benefits: [
      'Heart-healthy fats',
      'Rich in antioxidants',
      'Good for skin health',
      'May lower cholesterol',
      'Supports weight management'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['nuts', 'tree nuts', 'almonds']
    }
  },
  'walnuts': {
    name: 'Walnuts',
    aliases: ['walnuts', 'noix', 'walnut', 'english walnuts'],
    category: 'Nuts',
    concern: 'low',
    description: 'Nutrient-dense nuts rich in omega-3 fatty acids and antioxidants.',
    healthEffects: [
      'Rich in omega-3 fatty acids',
      'High in antioxidants',
      'May support brain health',
      'Good source of healthy fats',
      'Contains melatonin'
    ],
    whyConsider: [
      'Tree nut allergen',
      'High in calories',
      'May become rancid quickly',
      'Some people sensitive to skins'
    ],
    benefits: [
      'Excellent omega-3 source',
      'Rich in antioxidants',
      'May support brain health',
      'Good for heart health',
      'Contains melatonin for sleep'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['nuts', 'tree nuts', 'walnuts']
    }
  },
  'peanuts': {
    name: 'Peanuts',
    aliases: ['peanuts', 'arachides', 'groundnuts', 'monkey nuts'],
    category: 'Legume',
    concern: 'moderate',
    description: 'Groundnuts that are technically legumes. Major allergen and often contaminated.',
    healthEffects: [
      'High in protein and healthy fats',
      'Rich in vitamins and minerals',
      'May be contaminated with aflatoxins',
      'Major allergen',
      'May cause severe reactions'
    ],
    whyConsider: [
      'Major allergen - can cause anaphylaxis',
      'Often contaminated with aflatoxins',
      'Highly processed forms common',
      'May contain hidden allergens',
      'Not suitable for nut-free diets'
    ],
    benefits: [
      'High in protein',
      'Good source of healthy fats',
      'Rich in niacin and folate',
      'May support heart health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['peanuts', 'nuts', 'legumes']
    }
  },
  'cashews': {
    name: 'Cashews',
    aliases: ['cashews', 'noix de cajou', 'cashew nuts', 'caju nuts'],
    category: 'Nuts',
    concern: 'low',
    description: 'Nutrient-dense nuts rich in healthy fats and minerals.',
    healthEffects: [
      'Rich in healthy monounsaturated fats',
      'Good source of magnesium',
      'Contains antioxidants',
      'May support heart health',
      'High in calories'
    ],
    whyConsider: [
      'Tree nut allergen',
      'High in calories (moderate portions)',
      'Often roasted in unhealthy oils',
      'May contain aflatoxins'
    ],
    benefits: [
      'Heart-healthy fats',
      'Rich in minerals (magnesium, copper)',
      'Good protein source',
      'May support bone health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['nuts', 'tree nuts', 'cashews']
    }
  },
  'olive oil': {
    name: 'Olive Oil',
    aliases: ['olive oil', 'huile d\'olive', 'extra virgin olive oil', 'virgin olive oil'],
    category: 'Oil',
    concern: 'low',
    description: 'Healthy oil from olives. Rich in monounsaturated fats and antioxidants.',
    healthEffects: [
      'Rich in antioxidants',
      'High in monounsaturated fats',
      'May protect heart health',
      'Contains anti-inflammatory compounds',
      'May reduce cholesterol'
    ],
    whyConsider: [
      'Extra virgin is preferable to refined',
      'Some brands may be adulterated',
      'High in calories',
      'May be rancid if not stored properly'
    ],
    benefits: [
      'Heart-healthy fats',
      'Rich in antioxidants',
      'May reduce inflammation',
      'Supports Mediterranean diet',
      'May improve cholesterol profile'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'coconut oil': {
    name: 'Coconut Oil',
    aliases: ['coconut oil', 'huile de coco', 'virgin coconut oil'],
    category: 'Oil',
    concern: 'moderate',
    description: 'Oil from coconuts. High in saturated fat but contains medium-chain triglycerides.',
    healthEffects: [
      'High in saturated fat (90%)',
      'Contains medium-chain triglycerides (MCTs)',
      'May raise LDL cholesterol',
      'May increase HDL cholesterol',
      'MCTs may boost metabolism'
    ],
    whyConsider: [
      'Very high saturated fat content',
      'May increase cardiovascular risk',
      'Environmental impact of coconut farming',
      'Often highly processed',
      'Expensive and not always sustainable'
    ],
    benefits: [
      'MCTs may support metabolism',
      'May increase HDL cholesterol',
      'Stable for high-heat cooking',
      'Contains lauric acid'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['coconut']
    }
  },
  'canola oil': {
    name: 'Canola Oil',
    aliases: ['canola oil', 'huile de colza', 'rapeseed oil', 'low erucic acid rapeseed oil'],
    category: 'Oil',
    concern: 'moderate',
    description: 'Highly processed oil from rapeseed. Often genetically modified.',
    healthEffects: [
      'High in omega-3 fatty acids',
      'Low in saturated fat',
      'Highly processed',
      'May contain trans fats from processing',
      'Often from GMO sources'
    ],
    whyConsider: [
      'Highly refined and processed',
      'Often genetically modified',
      'May contain processing contaminants',
      'Less stable than other oils',
      'Environmental concerns with GMO'
    ],
    benefits: [
      'Contains omega-3 fatty acids',
      'Low in saturated fat',
      'Neutral flavor for cooking'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'soybean oil': {
    name: 'Soybean Oil',
    aliases: ['soybean oil', 'huile de soja', 'soya oil', 'soya bean oil'],
    category: 'Oil',
    concern: 'high',
    description: 'Highly processed oil from soybeans. Often genetically modified and inflammatory.',
    healthEffects: [
      'High in omega-6 fatty acids',
      'May promote inflammation',
      'Highly processed',
      'Often from GMO sources',
      'May contain hexane residues'
    ],
    whyConsider: [
      'High omega-6 to omega-3 ratio',
      'May contribute to inflammation',
      'Often genetically modified',
      'Highly processed with chemicals',
      'Environmental impact'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['soy']
    }
  },
  'palm oil': {
    name: 'Palm Oil',
    aliases: ['palm oil', 'huile de palme', 'palm kernel oil', 'palm fruit oil'],
    category: 'Fat',
    concern: 'very_high',
    description: 'Palm oil is high in saturated fat and its production causes environmental destruction.',
    healthEffects: [
      'High in saturated fat (50%)',
      'May raise LDL cholesterol',
      'Linked to cardiovascular disease risk',
      'Often highly processed',
      'May contain contaminants'
    ],
    whyConsider: [
      'Deforestation and habitat destruction',
      'High saturated fat content',
      'Environmental impact',
      'Often from unsustainable sources',
      'May contain processing contaminants'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sunflower oil': {
    name: 'Sunflower Oil',
    aliases: ['sunflower oil', 'huile de tournesol', 'sunflower seed oil'],
    category: 'Oil',
    concern: 'moderate',
    description: 'Oil from sunflower seeds. High in omega-6 fatty acids but often highly processed.',
    healthEffects: [
      'High in vitamin E',
      'Contains omega-6 fatty acids',
      'Often highly refined',
      'May promote inflammation',
      'Neutral flavor'
    ],
    whyConsider: [
      'High omega-6 to omega-3 ratio',
      'Highly processed',
      'May contain trans fats from processing',
      'Often from genetically modified seeds',
      'May oxidize easily'
    ],
    benefits: [
      'Rich in vitamin E',
      'Good source of healthy fats',
      'Stable for high-heat cooking',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sesame oil': {
    name: 'Sesame Oil',
    aliases: ['sesame oil', 'huile de sesame', 'toasted sesame oil'],
    category: 'Oil',
    concern: 'low',
    description: 'Oil from sesame seeds. Rich in antioxidants and healthy fats.',
    healthEffects: [
      'Rich in antioxidants',
      'Contains sesamin and sesamolin',
      'May lower cholesterol',
      'Stable for cooking',
      'Contains vitamin E'
    ],
    whyConsider: [
      'Sesame allergen',
      'May be highly processed',
      'Some people sensitive to taste',
      'May contain traces of seeds'
    ],
    benefits: [
      'Rich in antioxidants',
      'May support heart health',
      'Contains lignans',
      'Good for high-heat cooking',
      'May have anti-inflammatory effects'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['sesame']
    }
  },
  'peanut oil': {
    name: 'Peanut Oil',
    aliases: ['peanut oil', 'huile d\'arachide', 'groundnut oil', 'arachis oil'],
    category: 'Oil',
    concern: 'moderate',
    description: 'Oil from peanuts. High in monounsaturated fats but major allergen.',
    healthEffects: [
      'High in monounsaturated fats',
      'Contains vitamin E',
      'Stable for frying',
      'Major allergen',
      'May contain aflatoxins'
    ],
    whyConsider: [
      'Major allergen - can cause anaphylaxis',
      'May contain aflatoxins',
      'Often highly refined',
      'Environmental concerns',
      'May be contaminated'
    ],
    benefits: [
      'Heart-healthy fats',
      'Good for cooking',
      'Contains resveratrol',
      'Stable at high temperatures'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['peanuts']
    }
  },
  'avocado': {
    name: 'Avocado',
    aliases: ['avocado', 'avocat', 'aguacate', 'butter fruit'],
    category: 'Fruit',
    concern: 'low',
    description: 'Nutrient-dense fruit rich in healthy fats. Excellent source of monounsaturated fats.',
    healthEffects: [
      'Rich in healthy monounsaturated fats',
      'High in fiber',
      'Contains potassium',
      'Rich in antioxidants',
      'May support heart health'
    ],
    whyConsider: [
      'High in calories',
      'Environmental impact of production',
      'May cause allergic reactions',
      'Often transported long distances'
    ],
    benefits: [
      'Heart-healthy fats',
      'Rich in fiber',
      'Good source of potassium',
      'Contains lutein for eye health',
      'May improve nutrient absorption'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'lettuce': {
    name: 'Lettuce',
    aliases: ['lettuce', 'salade', 'iceberg lettuce', 'romaine lettuce', 'leaf lettuce'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Leafy green vegetable. Low in calories but provides hydration and some nutrients.',
    healthEffects: [
      'Very low in calories',
      'High water content',
      'Contains some vitamins',
      'Provides fiber',
      'May contain nitrates'
    ],
    whyConsider: [
      'Low nutritional density',
      'Often contaminated with bacteria',
      'May contain pesticides',
      'Perishable',
      'May cause digestive issues'
    ],
    benefits: [
      'Low calorie',
      'High water content',
      'Provides hydration',
      'Contains some folate',
      'Supports digestion'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cucumber': {
    name: 'Cucumber',
    aliases: ['cucumber', 'concombre', 'cucumbers', 'english cucumber'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Refreshing vegetable high in water content. Contains some vitamins and minerals.',
    healthEffects: [
      'Very high water content (95%)',
      'Contains silica for skin health',
      'Low in calories',
      'Contains some vitamins',
      'May have diuretic effects'
    ],
    whyConsider: [
      'May contain bitter compounds',
      'Often waxed',
      'May contain pesticides',
      'Low nutritional density',
      'Some people sensitive to cucurbitacins'
    ],
    benefits: [
      'Excellent hydration source',
      'Very low calorie',
      'Supports skin health',
      'May help with digestion',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'bell peppers': {
    name: 'Bell Peppers',
    aliases: ['bell peppers', 'poivron', 'bell pepper', 'capsicum', 'sweet pepper'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Colorful vegetable rich in vitamin C. Excellent source of antioxidants.',
    healthEffects: [
      'Very high in vitamin C',
      'Rich in antioxidants',
      'Contains capsaicinoids',
      'May support immune health',
      'Contains vitamin A'
    ],
    whyConsider: [
      'Some people sensitive to nightshades',
      'May cause digestive issues',
      'Often transported long distances',
      'May contain pesticides',
      'Quality varies by color/ripeness'
    ],
    benefits: [
      'Excellent vitamin C source',
      'Rich in antioxidants',
      'Supports immune health',
      'May improve skin health',
      'Contains folate'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'zucchini': {
    name: 'Zucchini',
    aliases: ['zucchini', 'courgette', 'zucchini squash', 'summer squash'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Mild-flavored squash. Low in calories and good source of vitamins.',
    healthEffects: [
      'Low in calories',
      'Contains vitamin C',
      'Good source of manganese',
      'Contains antioxidants',
      'High water content'
    ],
    whyConsider: [
      'May contain pesticides',
      'Some people sensitive to nightshades',
      'Perishable',
      'May cause digestive issues',
      'Quality varies by freshness'
    ],
    benefits: [
      'Low calorie',
      'Good vitamin C source',
      'Supports eye health',
      'Contains antioxidants',
      'Supports hydration'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'mushrooms': {
    name: 'Mushrooms',
    aliases: ['mushrooms', 'champignons', 'button mushrooms', 'portobello mushrooms'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Fungi rich in nutrients and antioxidants. Good source of B vitamins.',
    healthEffects: [
      'Rich in B vitamins',
      'Contains antioxidants',
      'May support immune health',
      'Contains selenium',
      'Low in calories'
    ],
    whyConsider: [
      'May contain heavy metals',
      'Some people sensitive to mushrooms',
      'May cause digestive issues',
      'Quality varies greatly',
      'May be contaminated'
    ],
    benefits: [
      'Rich in B vitamins',
      'Supports immune health',
      'Contains antioxidants',
      'Low calorie',
      'May support cognitive health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'green beans': {
    name: 'Green Beans',
    aliases: ['green beans', 'haricots verts', 'string beans', 'snap beans'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Nutrient-rich legumes. Good source of vitamins and minerals.',
    healthEffects: [
      'Good source of vitamin K',
      'Contains folate',
      'Rich in fiber',
      'Contains antioxidants',
      'Low in calories'
    ],
    whyConsider: [
      'May contain lectins if not cooked properly',
      'Some people sensitive to legumes',
      'May cause digestive issues',
      'Perishable',
      'May contain pesticides'
    ],
    benefits: [
      'Rich in fiber',
      'Good vitamin K source',
      'Supports bone health',
      'Contains folate',
      'Low calorie'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'peas': {
    name: 'Peas',
    aliases: ['peas', 'petits pois', 'green peas', 'garden peas'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Nutrient-dense legumes. Good source of plant-based protein and fiber.',
    healthEffects: [
      'Good source of plant protein',
      'Rich in fiber',
      'Contains vitamin K',
      'High in folate',
      'Contains antioxidants'
    ],
    whyConsider: [
      'May contain lectins if not cooked properly',
      'Some people sensitive to legumes',
      'May cause digestive gas',
      'Often from cans (may contain BPA)',
      'May be genetically modified'
    ],
    benefits: [
      'Plant-based protein source',
      'Rich in fiber',
      'High in folate',
      'Supports blood sugar control',
      'Contains vitamin K'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sweet potato': {
    name: 'Sweet Potato',
    aliases: ['sweet potato', 'patate douce', 'yam', 'sweet potato'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Nutrient-rich root vegetable. Excellent source of beta-carotene and complex carbs.',
    healthEffects: [
      'Rich in beta-carotene',
      'High in vitamin A',
      'Contains complex carbohydrates',
      'Rich in fiber',
      'Contains antioxidants'
    ],
    whyConsider: [
      'May contain pesticides',
      'High glycemic index',
      'Often transported long distances',
      'May cause digestive issues',
      'Quality varies by variety'
    ],
    benefits: [
      'Excellent vitamin A source',
      'Rich in antioxidants',
      'Supports immune health',
      'Good fiber source',
      'Supports eye health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'beets': {
    name: 'Beets',
    aliases: ['beets', 'betterave', 'beetroot', 'red beets'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Root vegetable rich in antioxidants. Contains betalains and nitrates.',
    healthEffects: [
      'Rich in betalains (antioxidants)',
      'Contains nitrates',
      'May improve athletic performance',
      'Supports liver health',
      'Contains folate'
    ],
    whyConsider: [
      'May cause red urine/stools',
      'High in natural sugars',
      'May affect kidney stones',
      'Some people sensitive to oxalates',
      'May cause digestive issues'
    ],
    benefits: [
      'Powerful antioxidants',
      'May improve exercise performance',
      'Supports cardiovascular health',
      'Contains folate',
      'Supports detoxification'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'celery': {
    name: 'Celery',
    aliases: ['celery', 'celeri', 'celery stalks', 'celery sticks'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Low-calorie vegetable rich in water and some minerals.',
    healthEffects: [
      'Very low in calories',
      'High water content',
      'Contains apigenin',
      'May have anti-inflammatory effects',
      'Contains some vitamins'
    ],
    whyConsider: [
      'Low nutritional density',
      'Often heavily pesticide-treated',
      'May cause digestive issues',
      'Stringy texture unpleasant to some',
      'May contain nitrates'
    ],
    benefits: [
      'Very low calorie',
      'High hydration content',
      'May reduce inflammation',
      'Contains antioxidants',
      'Supports digestion'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'kale': {
    name: 'Kale',
    aliases: ['kale', 'chou kale', 'curly kale', 'dinosaur kale'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Nutrient-dense leafy green. Excellent source of vitamins and minerals.',
    healthEffects: [
      'Extremely nutrient-dense',
      'Very high in vitamin K',
      'Rich in vitamin C',
      'Contains antioxidants',
      'High in fiber'
    ],
    whyConsider: [
      'May contain goitrogens',
      'High in oxalates',
      'May cause digestive issues',
      'Strong flavor',
      'May interact with blood thinners'
    ],
    benefits: [
      'Extremely nutrient-dense',
      'Supports bone health',
      'Rich in antioxidants',
      'Supports detoxification',
      'May reduce cancer risk'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cauliflower': {
    name: 'Cauliflower',
    aliases: ['cauliflower', 'chou-fleur', 'cauliflower florets'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Nutrient-rich cruciferous vegetable. Low in carbs, high in vitamins.',
    healthEffects: [
      'Rich in vitamin C and K',
      'Contains sulforaphane',
      'Low in carbohydrates',
      'High in fiber',
      'May support detoxification'
    ],
    whyConsider: [
      'May cause digestive gas',
      'Some people sensitive to cruciferous veggies',
      'May interact with blood thinners',
      'Quality varies by freshness',
      'May contain pesticides'
    ],
    benefits: [
      'Rich in antioxidants',
      'May support cancer prevention',
      'Low carb vegetable',
      'High in vitamin C',
      'Supports detoxification'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'eggplant': {
    name: 'Eggplant',
    aliases: ['eggplant', 'aubergine', 'eggplant', 'brinjal'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Nutrient-rich nightshade vegetable. Contains antioxidants and fiber.',
    healthEffects: [
      'Contains nasunin (antioxidant)',
      'Rich in fiber',
      'Contains vitamin K',
      'May support brain health',
      'Low in calories'
    ],
    whyConsider: [
      'Some people sensitive to nightshades',
      'May contain solanine',
      'May cause digestive issues',
      'Often heavily pesticide-treated',
      'Quality varies by ripeness'
    ],
    benefits: [
      'Rich in antioxidants',
      'Supports brain health',
      'Good fiber source',
      'Low calorie',
      'Contains vitamin K'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'asparagus': {
    name: 'Asparagus',
    aliases: ['asparagus', 'asperge', 'asparagus spears'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Nutrient-dense vegetable rich in folate and antioxidants.',
    healthEffects: [
      'Very high in folate',
      'Rich in vitamin K',
      'Contains antioxidants',
      'May support heart health',
      'Contains inulin fiber'
    ],
    whyConsider: [
      'May cause digestive gas',
      'May contain purines',
      'Seasonal availability',
      'May cause allergic reactions',
      'Quality varies greatly'
    ],
    benefits: [
      'Excellent folate source',
      'Supports heart health',
      'Rich in antioxidants',
      'May support pregnancy health',
      'Contains prebiotic fiber'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'radishes': {
    name: 'Radishes',
    aliases: ['radishes', 'radis', 'red radishes', 'daikon radish'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Crisp root vegetable. Contains some vitamins and may have antimicrobial properties.',
    healthEffects: [
      'Contains some vitamin C',
      'May have antimicrobial properties',
      'Low in calories',
      'Contains antioxidants',
      'May support digestion'
    ],
    whyConsider: [
      'Low nutritional density',
      'May cause digestive issues',
      'Often heavily pesticide-treated',
      'Perishable',
      'Strong flavor may be unpleasant'
    ],
    benefits: [
      'Low calorie',
      'May support digestion',
      'Contains antioxidants',
      'Supports hydration',
      'May have antimicrobial effects'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cabbage': {
    name: 'Cabbage',
    aliases: ['cabbage', 'chou', 'green cabbage', 'red cabbage'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Cruciferous vegetable rich in vitamins and fiber.',
    healthEffects: [
      'Rich in vitamin C and K',
      'Contains sulforaphane',
      'High in fiber',
      'May support detoxification',
      'Contains antioxidants'
    ],
    whyConsider: [
      'May cause digestive gas',
      'May contain goitrogens',
      'Some people sensitive to cruciferous veggies',
      'May interact with blood thinners',
      'Quality varies by freshness'
    ],
    benefits: [
      'Rich in vitamin C',
      'Supports detoxification',
      'May reduce cancer risk',
      'High in fiber',
      'Supports gut health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'lemon': {
    name: 'Lemon',
    aliases: ['lemon', 'citron', 'lemon juice', 'fresh lemon'],
    category: 'Fruit',
    concern: 'low',
    description: 'Citrus fruit rich in vitamin C. Used for flavoring and health benefits.',
    healthEffects: [
      'Very high in vitamin C',
      'Contains citric acid',
      'May support immune health',
      'Contains limonene',
      'May aid digestion'
    ],
    whyConsider: [
      'Acidic (may affect tooth enamel)',
      'Some people sensitive to citrus',
      'May cause heartburn',
      'Often treated with fungicides',
      'Quality varies by freshness'
    ],
    benefits: [
      'Excellent vitamin C source',
      'Supports immune health',
      'May aid digestion',
      'Contains antioxidants',
      'Alkalizing effect in body'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'lime': {
    name: 'Lime',
    aliases: ['lime', 'citron vert', 'key lime', 'persian lime'],
    category: 'Fruit',
    concern: 'low',
    description: 'Citrus fruit similar to lemon. Rich in vitamin C and used for flavoring.',
    healthEffects: [
      'High in vitamin C',
      'Contains antioxidants',
      'May support immune health',
      'Contains limonene',
      'May aid digestion'
    ],
    whyConsider: [
      'Acidic nature',
      'Some people sensitive to citrus',
      'May cause heartburn',
      'Often treated with chemicals',
      'Quality varies'
    ],
    benefits: [
      'Good vitamin C source',
      'Supports immune health',
      'May aid digestion',
      'Contains antioxidants',
      'Supports detoxification'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'grapefruit': {
    name: 'Grapefruit',
    aliases: ['grapefruit', 'pamplemousse', 'pink grapefruit', 'white grapefruit'],
    category: 'Fruit',
    concern: 'moderate',
    description: 'Citrus fruit that may interact with medications. Rich in vitamin C and antioxidants.',
    healthEffects: [
      'High in vitamin C',
      'Contains naringenin',
      'May support weight loss',
      'Rich in antioxidants',
      'May lower cholesterol'
    ],
    whyConsider: [
      'May interact with many medications',
      'Acidic nature',
      'Some people sensitive to citrus',
      'May cause heartburn',
      'Quality varies by variety'
    ],
    benefits: [
      'Good vitamin C source',
      'May support weight management',
      'Rich in antioxidants',
      'May lower cholesterol',
      'Supports immune health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'grapes': {
    name: 'Grapes',
    aliases: ['grapes', 'raisin', 'grape', 'red grapes', 'green grapes'],
    category: 'Fruit',
    concern: 'low',
    description: 'Fruit rich in antioxidants. May support heart health.',
    healthEffects: [
      'Rich in antioxidants',
      'Contains resveratrol',
      'May support heart health',
      'Contains vitamin K',
      'Good source of fiber'
    ],
    whyConsider: [
      'High in natural sugars',
      'Often treated with pesticides',
      'May cause digestive issues',
      'Quality varies by season',
      'May be contaminated'
    ],
    benefits: [
      'Rich in antioxidants',
      'May support heart health',
      'Contains resveratrol',
      'Good fiber source',
      'Supports immune health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'pineapple': {
    name: 'Pineapple',
    aliases: ['pineapple', 'ananas', 'fresh pineapple', 'pineapple chunks'],
    category: 'Fruit',
    concern: 'low',
    description: 'Tropical fruit rich in vitamin C and bromelain enzyme.',
    healthEffects: [
      'High in vitamin C',
      'Contains bromelain enzyme',
      'May aid digestion',
      'Contains antioxidants',
      'Rich in manganese'
    ],
    whyConsider: [
      'High in natural sugars',
      'May cause mouth irritation',
      'Often transported long distances',
      'May cause allergic reactions',
      'Quality varies'
    ],
    benefits: [
      'Excellent vitamin C source',
      'Contains digestive enzymes',
      'May reduce inflammation',
      'Rich in antioxidants',
      'Supports immune health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'mango': {
    name: 'Mango',
    aliases: ['mango', 'mangue', 'fresh mango', 'mango fruit'],
    category: 'Fruit',
    concern: 'low',
    description: 'Tropical fruit rich in vitamin C and beta-carotene.',
    healthEffects: [
      'Very high in vitamin C',
      'Rich in beta-carotene',
      'Contains vitamin A',
      'Good source of fiber',
      'Contains antioxidants'
    ],
    whyConsider: [
      'High in natural sugars',
      'Often transported long distances',
      'May cause allergic reactions',
      'Quality varies by ripeness',
      'May contain pesticides'
    ],
    benefits: [
      'Excellent vitamin C source',
      'Rich in vitamin A',
      'Supports immune health',
      'Good fiber source',
      'Supports eye health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'watermelon': {
    name: 'Watermelon',
    aliases: ['watermelon', 'pastèque', 'watermelon slices'],
    category: 'Fruit',
    concern: 'low',
    description: 'Hydrating fruit high in water content and citrulline.',
    healthEffects: [
      'Very high water content (92%)',
      'Contains citrulline',
      'May improve exercise recovery',
      'Contains lycopene',
      'Low in calories'
    ],
    whyConsider: [
      'High in natural sugars',
      'Often heavily pesticide-treated',
      'Perishable',
      'May cause digestive issues',
      'Quality varies by ripeness'
    ],
    benefits: [
      'Excellent hydration source',
      'May support exercise recovery',
      'Contains lycopene',
      'Low calorie',
      'Rich in vitamin C'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'kiwi': {
    name: 'Kiwi',
    aliases: ['kiwi', 'kiwifruit', 'kiwi fruit', 'chinese gooseberry'],
    category: 'Fruit',
    concern: 'low',
    description: 'Nutrient-dense fruit rich in vitamin C and antioxidants.',
    healthEffects: [
      'Very high in vitamin C',
      'Contains actinidain enzyme',
      'Rich in fiber',
      'Contains antioxidants',
      'May aid digestion'
    ],
    whyConsider: [
      'May cause allergic reactions',
      'Often transported long distances',
      'May cause mouth irritation',
      'Quality varies',
      'May contain pesticides'
    ],
    benefits: [
      'Excellent vitamin C source',
      'Rich in fiber',
      'Contains digestive enzymes',
      'Supports immune health',
      'High in antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'pomegranate': {
    name: 'Pomegranate',
    aliases: ['pomegranate', 'grenade', 'pomegranate seeds', 'pomegranate juice'],
    category: 'Fruit',
    concern: 'low',
    description: 'Ancient fruit rich in antioxidants. May support heart health.',
    healthEffects: [
      'Very high in antioxidants',
      'Contains punicalagins',
      'May support heart health',
      'Rich in vitamin C',
      'May reduce inflammation'
    ],
    whyConsider: [
      'May cause digestive issues',
      'Seeds can be messy',
      'Often expensive',
      'Quality varies',
      'May contain pesticides'
    ],
    benefits: [
      'Extremely high in antioxidants',
      'May support heart health',
      'May reduce inflammation',
      'Supports prostate health',
      'Rich in vitamin C'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cranberries': {
    name: 'Cranberries',
    aliases: ['cranberries', 'canneberge', 'cranberry', 'fresh cranberries'],
    category: 'Fruit',
    concern: 'low',
    description: 'Berry rich in antioxidants. May support urinary tract health.',
    healthEffects: [
      'Rich in antioxidants',
      'Contains proanthocyanidins',
      'May support urinary tract health',
      'High in vitamin C',
      'May support heart health'
    ],
    whyConsider: [
      'Very tart taste',
      'Often processed with sugar',
      'May cause digestive issues',
      'Quality varies',
      'May contain pesticides'
    ],
    benefits: [
      'Rich in antioxidants',
      'May support urinary tract health',
      'Supports heart health',
      'High in vitamin C',
      'May reduce inflammation'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cherries': {
    name: 'Cherries',
    aliases: ['cherries', 'cerise', 'sweet cherries', 'tart cherries'],
    category: 'Fruit',
    concern: 'low',
    description: 'Berry rich in antioxidants. May support joint health and sleep.',
    healthEffects: [
      'Rich in antioxidants',
      'Contains melatonin',
      'May support joint health',
      'High in vitamin C',
      'May reduce inflammation'
    ],
    whyConsider: [
      'Seasonal availability',
      'May cause digestive issues',
      'Often expensive',
      'Quality varies greatly',
      'May contain pesticides'
    ],
    benefits: [
      'Rich in antioxidants',
      'May support joint health',
      'Contains melatonin for sleep',
      'May reduce inflammation',
      'Supports exercise recovery'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'raspberries': {
    name: 'Raspberries',
    aliases: ['raspberries', 'framboise', 'raspberry', 'red raspberries'],
    category: 'Fruit',
    concern: 'low',
    description: 'Delicate berry rich in fiber and antioxidants.',
    healthEffects: [
      'Very high in fiber',
      'Rich in antioxidants',
      'Contains ellagic acid',
      'May support blood sugar control',
      'High in manganese'
    ],
    whyConsider: [
      'Highly perishable',
      'May contain pesticides',
      'Often expensive',
      'Quality varies',
      'May cause digestive issues'
    ],
    benefits: [
      'Extremely high in fiber',
      'Rich in antioxidants',
      'May support blood sugar control',
      'Supports heart health',
      'May reduce cancer risk'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'blackberries': {
    name: 'Blackberries',
    aliases: ['blackberries', 'mure', 'blackberry', 'bramble berries'],
    category: 'Fruit',
    concern: 'low',
    description: 'Berry rich in antioxidants and fiber. May support brain health.',
    healthEffects: [
      'Very high in antioxidants',
      'Rich in fiber',
      'Contains anthocyanins',
      'May support brain health',
      'High in vitamin C'
    ],
    whyConsider: [
      'Highly perishable',
      'May contain pesticides',
      'Often expensive',
      'Quality varies',
      'May cause digestive issues'
    ],
    benefits: [
      'Extremely high in antioxidants',
      'Rich in fiber',
      'May support brain health',
      'Supports heart health',
      'May reduce inflammation'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'broccoli rabe': {
    name: 'Broccoli Rabe',
    aliases: ['broccoli rabe', 'rapini', 'broccoli raab', 'cime di rapa'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Nutrient-dense leafy vegetable related to broccoli. Rich in vitamins and minerals.',
    healthEffects: [
      'Very high in vitamin K',
      'Rich in vitamins A and C',
      'Contains sulforaphane',
      'High in fiber',
      'May support detoxification'
    ],
    whyConsider: [
      'Bitter taste may be unpleasant',
      'May cause digestive gas',
      'Some people sensitive to cruciferous veggies',
      'May interact with blood thinners',
      'Quality varies by freshness'
    ],
    benefits: [
      'Extremely nutrient-dense',
      'Rich in antioxidants',
      'May support cancer prevention',
      'Supports detoxification',
      'High in vitamins A, C, K'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'arugula': {
    name: 'Arugula',
    aliases: ['arugula', 'rocket', 'roquette', 'rucola'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Peppery leafy green rich in vitamins and minerals.',
    healthEffects: [
      'Rich in vitamins A, C, K',
      'Contains antioxidants',
      'High in nitrates',
      'May support bone health',
      'Contains glucosinolates'
    ],
    whyConsider: [
      'May contain goitrogens',
      'Strong peppery flavor',
      'Highly perishable',
      'May cause digestive issues',
      'Quality varies by freshness'
    ],
    benefits: [
      'Rich in vitamins A, C, K',
      'Contains antioxidants',
      'Supports bone health',
      'May support cardiovascular health',
      'Contains nitrates'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'endive': {
    name: 'Endive',
    aliases: ['endive', 'chicory', 'witloof', 'frisée'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Bitter leafy vegetable rich in fiber and vitamins.',
    healthEffects: [
      'Rich in vitamins A and K',
      'High in fiber',
      'Contains inulin',
      'May support gut health',
      'Contains antioxidants'
    ],
    whyConsider: [
      'Bitter taste may be unpleasant',
      'May cause digestive gas',
      'Highly perishable',
      'May interact with blood thinners',
      'Quality varies'
    ],
    benefits: [
      'Rich in vitamins A and K',
      'High in fiber',
      'Supports gut health',
      'Contains prebiotic fiber',
      'Supports detoxification'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'fennel': {
    name: 'Fennel',
    aliases: ['fennel', 'fenouil', 'fennel bulb', 'anise'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Aromatic vegetable rich in fiber and antioxidants.',
    healthEffects: [
      'Rich in vitamin C',
      'Contains anethole',
      'High in fiber',
      'May aid digestion',
      'Contains antioxidants'
    ],
    whyConsider: [
      'Strong anise flavor',
      'May cause digestive issues',
      'Some people sensitive to anethole',
      'May interact with estrogen-sensitive conditions',
      'Quality varies by freshness'
    ],
    benefits: [
      'May aid digestion',
      'Rich in vitamin C',
      'Contains antioxidants',
      'May reduce inflammation',
      'Supports bone health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'leeks': {
    name: 'Leeks',
    aliases: ['leeks', 'poireau', 'leek', 'green onion'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Mild onion relative rich in vitamins and minerals.',
    healthEffects: [
      'Rich in vitamins A and K',
      'Contains kaempferol',
      'May support heart health',
      'Contains antioxidants',
      'Good source of folate'
    ],
    whyConsider: [
      'May cause digestive issues',
      'Strong flavor when cooked',
      'Often sandy/dirty',
      'Some people sensitive to alliums',
      'May interact with blood thinners'
    ],
    benefits: [
      'Rich in vitamins A and K',
      'May support heart health',
      'Contains antioxidants',
      'Supports bone health',
      'Good folate source'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'shallots': {
    name: 'Shallots',
    aliases: ['shallots', 'échalote', 'shallot', 'eschalot'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Mild onion variety rich in antioxidants.',
    healthEffects: [
      'Rich in antioxidants',
      'Contains quercetin',
      'May support heart health',
      'Contains sulfur compounds',
      'Good source of vitamin C'
    ],
    whyConsider: [
      'May cause digestive issues',
      'Some people sensitive to alliums',
      'Strong flavor in large amounts',
      'May interact with blood thinners',
      'Quality varies'
    ],
    benefits: [
      'Rich in antioxidants',
      'May support heart health',
      'Contains anti-inflammatory compounds',
      'Supports immune health',
      'Contains quercetin'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'bok choy': {
    name: 'Bok Choy',
    aliases: ['bok choy', 'pak choi', 'chinese cabbage', 'choy sum'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Asian leafy vegetable rich in vitamins and minerals.',
    healthEffects: [
      'Rich in vitamins A, C, K',
      'Contains sulforaphane',
      'High in calcium',
      'May support bone health',
      'Contains antioxidants'
    ],
    whyConsider: [
      'May contain goitrogens',
      'Some people sensitive to cruciferous veggies',
      'May cause digestive gas',
      'Quality varies',
      'May contain pesticides'
    ],
    benefits: [
      'Rich in vitamins A, C, K',
      'High in calcium',
      'May support cancer prevention',
      'Supports bone health',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'napa cabbage': {
    name: 'Napa Cabbage',
    aliases: ['napa cabbage', 'chou chinois', 'napa', 'chinese leaf'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Mild Chinese cabbage rich in vitamins.',
    healthEffects: [
      'Rich in vitamins C and K',
      'High in calcium',
      'Contains antioxidants',
      'May support bone health',
      'Low in calories'
    ],
    whyConsider: [
      'May contain goitrogens',
      'Some people sensitive to cruciferous veggies',
      'May cause digestive gas',
      'Quality varies',
      'May be contaminated'
    ],
    benefits: [
      'Rich in vitamins C and K',
      'High in calcium',
      'Supports bone health',
      'Low calorie',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'rutabaga': {
    name: 'Rutabaga',
    aliases: ['rutabaga', 'rutabaga', 'swede', 'neep'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Root vegetable rich in vitamins and minerals.',
    healthEffects: [
      'Rich in vitamin C',
      'Good source of potassium',
      'Contains antioxidants',
      'May support thyroid health',
      'Good source of fiber'
    ],
    whyConsider: [
      'May contain goitrogens',
      'Strong flavor may be unpleasant',
      'May cause digestive issues',
      'Quality varies',
      'May be contaminated'
    ],
    benefits: [
      'Rich in vitamin C',
      'Good potassium source',
      'Supports thyroid health',
      'Contains antioxidants',
      'Good fiber source'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'parsnips': {
    name: 'Parsnips',
    aliases: ['parsnips', 'panais', 'parsnip', 'pastinaca sativa'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Root vegetable similar to carrots. Rich in fiber and vitamins.',
    healthEffects: [
      'Rich in vitamin C',
      'High in fiber',
      'Good source of folate',
      'Contains antioxidants',
      'May support heart health'
    ],
    whyConsider: [
      'May contain goitrogens',
      'Some people sensitive to nightshades',
      'May cause digestive issues',
      'Quality varies',
      'May be contaminated'
    ],
    benefits: [
      'Rich in vitamin C',
      'High in fiber',
      'Good folate source',
      'Contains antioxidants',
      'Supports heart health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'turnips': {
    name: 'Turnips',
    aliases: ['turnips', 'navet', 'turnip', 'white turnip'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Root vegetable rich in vitamin C and fiber.',
    healthEffects: [
      'Rich in vitamin C',
      'High in fiber',
      'Good source of potassium',
      'Contains antioxidants',
      'May support bone health'
    ],
    whyConsider: [
      'May contain goitrogens',
      'Strong flavor may be unpleasant',
      'May cause digestive issues',
      'Quality varies',
      'May be contaminated'
    ],
    benefits: [
      'Rich in vitamin C',
      'High in fiber',
      'Good potassium source',
      'Supports bone health',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'jicama': {
    name: 'Jicama',
    aliases: ['jicama', 'jícama', 'yam bean', 'mexican potato'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Crunchy root vegetable rich in fiber and vitamin C.',
    healthEffects: [
      'Very high in fiber',
      'Rich in vitamin C',
      'Low in calories',
      'Contains antioxidants',
      'Good prebiotic'
    ],
    whyConsider: [
      'May cause digestive gas',
      'Some people sensitive to legumes',
      'May be hard to find',
      'Quality varies',
      'May cause allergic reactions'
    ],
    benefits: [
      'Extremely high in fiber',
      'Rich in vitamin C',
      'Supports gut health',
      'Low calorie',
      'Good prebiotic fiber'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'kohlrabi': {
    name: 'Kohlrabi',
    aliases: ['kohlrabi', 'chou rave', 'kohlrabi cabbage', 'german turnip'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Cruciferous vegetable rich in vitamins C and K.',
    healthEffects: [
      'Very high in vitamin C',
      'Rich in vitamin K',
      'Contains sulforaphane',
      'High in fiber',
      'May support detoxification'
    ],
    whyConsider: [
      'May cause digestive gas',
      'Some people sensitive to cruciferous veggies',
      'May interact with blood thinners',
      'Quality varies',
      'May contain goitrogens'
    ],
    benefits: [
      'Very high in vitamin C',
      'Rich in vitamin K',
      'May support cancer prevention',
      'Supports detoxification',
      'High in fiber'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'daikon': {
    name: 'Daikon',
    aliases: ['daikon', 'daikon radish', 'mooli', 'white radish'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Large Asian radish rich in digestive enzymes.',
    healthEffects: [
      'Contains digestive enzymes',
      'Rich in vitamin C',
      'High in fiber',
      'May aid digestion',
      'Contains antioxidants'
    ],
    whyConsider: [
      'Strong flavor may be unpleasant',
      'May cause digestive issues',
      'Quality varies',
      'May be contaminated',
      'Some people sensitive to radishes'
    ],
    benefits: [
      'Contains digestive enzymes',
      'Rich in vitamin C',
      'May aid digestion',
      'High in fiber',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'rhubarb': {
    name: 'Rhubarb',
    aliases: ['rhubarb', 'rhubarbe', 'pie plant', 'rhubarb stalks'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Tart vegetable often used in desserts. Rich in antioxidants.',
    healthEffects: [
      'Rich in antioxidants',
      'High in vitamin K',
      'Contains fiber',
      'May support heart health',
      'Contains polyphenols'
    ],
    whyConsider: [
      'Leaves are toxic',
      'High in oxalates',
      'Tart flavor may be unpleasant',
      'May cause digestive issues',
      'Only stalks are edible'
    ],
    benefits: [
      'Rich in antioxidants',
      'High in vitamin K',
      'May support heart health',
      'Contains polyphenols',
      'Supports bone health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'artichokes': {
    name: 'Artichokes',
    aliases: ['artichokes', 'artichaut', 'artichoke', 'globe artichoke'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Nutrient-dense vegetable rich in fiber and antioxidants.',
    healthEffects: [
      'Very high in fiber',
      'Rich in vitamin C and K',
      'Contains cynarin',
      'May support liver health',
      'Contains antioxidants'
    ],
    whyConsider: [
      'Preparation can be time-consuming',
      'May cause digestive gas',
      'Choke must be removed',
      'Quality varies',
      'May interact with blood thinners'
    ],
    benefits: [
      'Extremely high in fiber',
      'Rich in vitamins C and K',
      'May support liver health',
      'Contains antioxidants',
      'Supports digestion'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'hearts of palm': {
    name: 'Hearts of Palm',
    aliases: ['hearts of palm', 'cœurs de palmier', 'palm hearts', 'palmito'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Tender palm vegetable harvested sustainably.',
    healthEffects: [
      'Low in calories',
      'Good source of fiber',
      'Contains some vitamins',
      'Rich in antioxidants',
      'Sustainable harvesting'
    ],
    whyConsider: [
      'Environmental impact of harvesting',
      'Often from cans (may contain BPA)',
      'Quality varies',
      'May be expensive',
      'Limited availability'
    ],
    benefits: [
      'Low calorie',
      'Good fiber source',
      'Rich in antioxidants',
      'Contains vitamin C',
      'Sustainable when harvested properly'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'bamboo shoots': {
    name: 'Bamboo Shoots',
    aliases: ['bamboo shoots', 'pousses de bambou', 'bamboo', 'takenoko'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Crunchy Asian vegetable rich in fiber.',
    healthEffects: [
      'High in fiber',
      'Low in calories',
      'Contains some vitamins',
      'May aid digestion',
      'Contains antioxidants'
    ],
    whyConsider: [
      'May contain natural toxins if not prepared properly',
      'Often from cans (may contain additives)',
      'Quality varies greatly',
      'May cause digestive issues',
      'Limited availability'
    ],
    benefits: [
      'High in fiber',
      'Low calorie',
      'May aid digestion',
      'Contains antioxidants',
      'Good prebiotic'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'seaweed': {
    name: 'Seaweed',
    aliases: ['seaweed', 'algues', 'nori', 'kelp', 'wakame'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Nutrient-dense sea vegetable rich in minerals and iodine.',
    healthEffects: [
      'Very high in iodine',
      'Rich in minerals',
      'Contains antioxidants',
      'May support thyroid health',
      'Good source of vitamin K'
    ],
    whyConsider: [
      'Very high in iodine (may affect thyroid)',
      'May contain heavy metals',
      'May be contaminated',
      'Quality varies greatly',
      'May cause digestive issues'
    ],
    benefits: [
      'Extremely mineral-rich',
      'Supports thyroid health',
      'Rich in antioxidants',
      'Contains vitamins A, C, E, K',
      'Good iodine source'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'dulse': {
    name: 'Dulse',
    aliases: ['dulse', 'dulse seaweed', 'palmaria palmata', 'red dulse'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Nutrient-rich red seaweed. Good source of iron and protein.',
    healthEffects: [
      'High in iron',
      'Good protein source',
      'Rich in minerals',
      'Contains antioxidants',
      'May support thyroid health'
    ],
    whyConsider: [
      'May contain heavy metals',
      'May be contaminated',
      'Quality varies',
      'May cause digestive issues',
      'Strong flavor'
    ],
    benefits: [
      'High in iron',
      'Good plant protein source',
      'Rich in minerals',
      'Supports thyroid health',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'nori': {
    name: 'Nori',
    aliases: ['nori', 'nori seaweed', 'laver', 'purple laver'],
    category: 'Vegetable',
    concern: 'low',
    description: 'Dried seaweed commonly used in sushi. Rich in vitamins and minerals.',
    healthEffects: [
      'Rich in vitamins A, C, B12',
      'High in protein',
      'Contains iodine',
      'Good source of iron',
      'Contains antioxidants'
    ],
    whyConsider: [
      'May contain heavy metals',
      'May be contaminated',
      'Often processed with salt',
      'Quality varies',
      'May cause allergic reactions'
    ],
    benefits: [
      'Rich in vitamins A, C, B12',
      'High in protein',
      'Good iron source',
      'Supports thyroid health',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'spices': {
    name: 'Spices',
    aliases: ['spices', 'épices', 'herbs and spices', 'seasonings'],
    category: 'Herb',
    concern: 'low',
    description: 'Aromatic plant substances used for flavoring. Rich in antioxidants.',
    healthEffects: [
      'Rich in antioxidants',
      'May have anti-inflammatory effects',
      'May support immune health',
      'Contain essential oils',
      'May aid digestion'
    ],
    whyConsider: [
      'May cause allergic reactions',
      'Some spices may interact with medications',
      'Quality varies greatly',
      'May be irradiated',
      'Some may cause digestive irritation'
    ],
    benefits: [
      'Rich in antioxidants',
      'May reduce inflammation',
      'Support immune health',
      'May aid digestion',
      'Contain antimicrobial compounds'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cumin': {
    name: 'Cumin',
    aliases: ['cumin', 'cumin seeds', 'jeera', 'cumin powder'],
    category: 'Spice',
    concern: 'low',
    description: 'Aromatic spice rich in antioxidants and may aid digestion.',
    healthEffects: [
      'Rich in antioxidants',
      'May aid digestion',
      'Contains thymol',
      'May have antimicrobial properties',
      'Supports iron absorption'
    ],
    whyConsider: [
      'Strong flavor may be unpleasant',
      'May cause digestive issues',
      'Quality varies',
      'May be contaminated',
      'Some people sensitive to strong spices'
    ],
    benefits: [
      'May aid digestion',
      'Rich in antioxidants',
      'Supports iron absorption',
      'May have antimicrobial effects',
      'Contains anti-inflammatory compounds'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'turmeric': {
    name: 'Turmeric',
    aliases: ['turmeric', 'curcuma', 'turmeric powder', 'curcumin'],
    category: 'Spice',
    concern: 'low',
    description: 'Golden spice containing curcumin. Powerful anti-inflammatory properties.',
    healthEffects: [
      'Contains curcumin',
      'Powerful anti-inflammatory',
      'Rich in antioxidants',
      'May support joint health',
      'May support brain health'
    ],
    whyConsider: [
      'Poor absorption without black pepper',
      'May cause digestive upset',
      'May interact with medications',
      'Quality varies greatly',
      'May stain skin/clothes'
    ],
    benefits: [
      'Powerful anti-inflammatory',
      'Rich in antioxidants',
      'May support joint health',
      'May support brain health',
      'May support liver health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'ginger': {
    name: 'Ginger',
    aliases: ['ginger', 'gingembre', 'ginger root', 'fresh ginger'],
    category: 'Spice',
    concern: 'low',
    description: 'Aromatic root spice known for digestive and anti-nausea properties.',
    healthEffects: [
      'May relieve nausea',
      'Anti-inflammatory properties',
      'May aid digestion',
      'Contains gingerol',
      'May support immune health'
    ],
    whyConsider: [
      'May cause heartburn',
      'May interact with blood thinners',
      'Strong flavor may be unpleasant',
      'May cause digestive upset in large amounts',
      'Quality varies'
    ],
    benefits: [
      'May relieve nausea',
      'Anti-inflammatory',
      'May aid digestion',
      'Supports immune health',
      'May reduce muscle pain'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cinnamon': {
    name: 'Cinnamon',
    aliases: ['cinnamon', 'cannelle', 'cinnamon sticks', 'cinnamon powder'],
    category: 'Spice',
    concern: 'low',
    description: 'Aromatic bark spice that may help regulate blood sugar.',
    healthEffects: [
      'May help regulate blood sugar',
      'Rich in antioxidants',
      'Anti-inflammatory properties',
      'May support heart health',
      'Contains coumarin'
    ],
    whyConsider: [
      'May contain coumarin (toxic in large amounts)',
      'Cassia cinnamon has more coumarin than Ceylon',
      'May interact with medications',
      'Quality varies',
      'May cause allergic reactions'
    ],
    benefits: [
      'May support blood sugar control',
      'Rich in antioxidants',
      'Anti-inflammatory',
      'May support heart health',
      'Contains antimicrobial compounds'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'black pepper': {
    name: 'Black Pepper',
    aliases: ['black pepper', 'poivre noir', 'peppercorns', 'piperine'],
    category: 'Spice',
    concern: 'low',
    description: 'Common spice that enhances nutrient absorption.',
    healthEffects: [
      'Contains piperine',
      'Enhances nutrient absorption',
      'May aid digestion',
      'Anti-inflammatory properties',
      'Antimicrobial effects'
    ],
    whyConsider: [
      'May cause digestive irritation',
      'Quality varies',
      'May be contaminated',
      'Some people sensitive to pepper',
      'May interact with medications'
    ],
    benefits: [
      'Enhances nutrient absorption',
      'May aid digestion',
      'Anti-inflammatory',
      'Antimicrobial',
      'May support brain health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cayenne pepper': {
    name: 'Cayenne Pepper',
    aliases: ['cayenne pepper', 'poivre de cayenne', 'cayenne', 'capsicum'],
    category: 'Spice',
    concern: 'low',
    description: 'Hot pepper spice rich in capsaicin. May support metabolism.',
    healthEffects: [
      'Contains capsaicin',
      'May boost metabolism',
      'May support heart health',
      'Anti-inflammatory properties',
      'May reduce pain'
    ],
    whyConsider: [
      'Very spicy/hot',
      'May cause digestive irritation',
      'May interact with medications',
      'Quality varies',
      'May cause allergic reactions'
    ],
    benefits: [
      'May boost metabolism',
      'May support heart health',
      'May reduce pain',
      'Anti-inflammatory',
      'May support weight management'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'paprika': {
    name: 'Paprika',
    aliases: ['paprika', 'paprika powder', 'piment doux', 'sweet paprika'],
    category: 'Spice',
    concern: 'low',
    description: 'Mild pepper spice rich in vitamin A.',
    healthEffects: [
      'Rich in vitamin A',
      'Contains capsaicin',
      'Good source of iron',
      'Contains antioxidants',
      'May support eye health'
    ],
    whyConsider: [
      'May be contaminated',
      'Quality varies',
      'Some varieties are hot',
      'May cause allergic reactions',
      'Color may indicate quality'
    ],
    benefits: [
      'Rich in vitamin A',
      'Supports eye health',
      'Good iron source',
      'Contains antioxidants',
      'May support immune health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cardamom': {
    name: 'Cardamom',
    aliases: ['cardamom', 'cardamome', 'cardamom pods', 'green cardamom'],
    category: 'Spice',
    concern: 'low',
    description: 'Aromatic spice that may aid digestion and freshen breath.',
    healthEffects: [
      'May aid digestion',
      'Contains cineole',
      'Antimicrobial properties',
      'May freshen breath',
      'Anti-inflammatory'
    ],
    whyConsider: [
      'May be expensive',
      'Quality varies greatly',
      'May be contaminated',
      'Strong flavor may be unpleasant',
      'Limited availability'
    ],
    benefits: [
      'May aid digestion',
      'Antimicrobial',
      'May freshen breath',
      'Anti-inflammatory',
      'May support oral health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cloves': {
    name: 'Cloves',
    aliases: ['cloves', 'clous de girofle', 'clove', 'clove buds'],
    category: 'Spice',
    concern: 'low',
    description: 'Aromatic spice buds rich in eugenol. Strong antimicrobial properties.',
    healthEffects: [
      'Rich in eugenol',
      'Strong antimicrobial properties',
      'May relieve tooth pain',
      'Anti-inflammatory',
      'May support immune health'
    ],
    whyConsider: [
      'Very strong flavor',
      'May cause digestive irritation',
      'May interact with blood thinners',
      'Quality varies',
      'May cause allergic reactions'
    ],
    benefits: [
      'Strong antimicrobial',
      'May relieve pain',
      'Anti-inflammatory',
      'May support immune health',
      'May support oral health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'nutmeg': {
    name: 'Nutmeg',
    aliases: ['nutmeg', 'noix de muscade', 'nutmeg powder', 'mace'],
    category: 'Spice',
    concern: 'moderate',
    description: 'Sweet spice containing myristicin. May be toxic in large amounts.',
    healthEffects: [
      'Contains myristicin',
      'May aid digestion',
      'May relieve pain',
      'Anti-inflammatory',
      'May support brain health'
    ],
    whyConsider: [
      'Toxic in large amounts (myristicin)',
      'May cause hallucinations in high doses',
      'May interact with medications',
      'Quality varies',
      'Strong flavor'
    ],
    benefits: [
      'May aid digestion',
      'May relieve pain',
      'Anti-inflammatory',
      'May support brain health',
      'Antimicrobial properties'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'saffron': {
    name: 'Saffron',
    aliases: ['saffron', 'safran', 'saffron threads', 'crocus'],
    category: 'Spice',
    concern: 'low',
    description: 'Expensive spice from crocus flowers. May have mood-enhancing properties.',
    healthEffects: [
      'May improve mood',
      'Rich in antioxidants',
      'May support eye health',
      'Anti-inflammatory',
      'Contains crocin'
    ],
    whyConsider: [
      'Extremely expensive',
      'Often adulterated',
      'Quality varies greatly',
      'Limited availability',
      'May cause allergic reactions'
    ],
    benefits: [
      'May improve mood',
      'Rich in antioxidants',
      'May support eye health',
      'Anti-inflammatory',
      'May support cognitive health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'vanilla': {
    name: 'Vanilla',
    aliases: ['vanilla', 'vanille', 'vanilla extract', 'vanilla bean'],
    category: 'Flavoring',
    concern: 'low',
    description: 'Aromatic flavoring from vanilla orchids. May have antioxidant properties.',
    healthEffects: [
      'Contains vanillin',
      'May have antioxidant properties',
      'May improve mood',
      'Contains some vitamins',
      'May aid digestion'
    ],
    whyConsider: [
      'Often artificial in processed foods',
      'Quality varies greatly',
      'May be contaminated',
      'Expensive pure vanilla',
      'May cause allergic reactions'
    ],
    benefits: [
      'May improve mood',
      'Contains antioxidants',
      'May aid digestion',
      'Natural flavoring',
      'May support cognitive health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'rosemary': {
    name: 'Rosemary',
    aliases: ['rosemary', 'romarin', 'rosemary herb', 'rosemary leaves'],
    category: 'Herb',
    concern: 'low',
    description: 'Aromatic herb rich in antioxidants. May support brain health.',
    healthEffects: [
      'Rich in antioxidants',
      'May support brain health',
      'Anti-inflammatory',
      'May improve memory',
      'Contains rosmarinic acid'
    ],
    whyConsider: [
      'Strong flavor may be unpleasant',
      'May interact with blood thinners',
      'Quality varies',
      'May cause allergic reactions',
      'Some people sensitive to strong herbs'
    ],
    benefits: [
      'May support brain health',
      'Rich in antioxidants',
      'Anti-inflammatory',
      'May improve memory',
      'May support digestion'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'thyme': {
    name: 'Thyme',
    aliases: ['thyme', 'thym', 'fresh thyme', 'thyme leaves'],
    category: 'Herb',
    concern: 'low',
    description: 'Aromatic herb with antimicrobial properties.',
    healthEffects: [
      'Antimicrobial properties',
      'Contains thymol',
      'Anti-inflammatory',
      'May support respiratory health',
      'Rich in antioxidants'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies',
      'May cause allergic reactions',
      'Strong flavor',
      'Some people sensitive to herbs'
    ],
    benefits: [
      'Antimicrobial',
      'May support respiratory health',
      'Anti-inflammatory',
      'Rich in antioxidants',
      'May support immune health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'oregano': {
    name: 'Oregano',
    aliases: ['oregano', 'origan', 'wild marjoram', 'oregano leaves'],
    category: 'Herb',
    concern: 'low',
    description: 'Aromatic herb rich in antioxidants and antimicrobial compounds.',
    healthEffects: [
      'Rich in antioxidants',
      'Strong antimicrobial properties',
      'Anti-inflammatory',
      'May support immune health',
      'Contains thymol and carvacrol'
    ],
    whyConsider: [
      'Strong flavor may be unpleasant',
      'May interact with medications',
      'Quality varies greatly',
      'May cause allergic reactions',
      'Some people sensitive to strong herbs'
    ],
    benefits: [
      'Strong antimicrobial',
      'Rich in antioxidants',
      'Anti-inflammatory',
      'May support immune health',
      'May aid digestion'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'basil': {
    name: 'Basil',
    aliases: ['basil', 'basilic', 'sweet basil', 'fresh basil'],
    category: 'Herb',
    concern: 'low',
    description: 'Aromatic herb rich in antioxidants. May have anti-inflammatory properties.',
    healthEffects: [
      'Rich in antioxidants',
      'Contains eugenol',
      'Anti-inflammatory',
      'May support immune health',
      'Contains vitamins A and K'
    ],
    whyConsider: [
      'Delicate flavor damaged by heat',
      'May interact with blood thinners',
      'Quality varies',
      'May cause allergic reactions',
      'Some people sensitive to herbs'
    ],
    benefits: [
      'Rich in antioxidants',
      'Anti-inflammatory',
      'May support immune health',
      'Contains vitamins A and K',
      'May aid digestion'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'parsley': {
    name: 'Parsley',
    aliases: ['parsley', 'persil', 'fresh parsley', 'flat leaf parsley'],
    category: 'Herb',
    concern: 'low',
    description: 'Nutrient-dense herb rich in vitamins and antioxidants.',
    healthEffects: [
      'Very high in vitamin K',
      'Rich in vitamin C',
      'Contains antioxidants',
      'May support bone health',
      'Contains folate'
    ],
    whyConsider: [
      'May interact with blood thinners',
      'Quality varies',
      'May cause kidney stones (oxalates)',
      'Some people sensitive to herbs',
      'May cause allergic reactions'
    ],
    benefits: [
      'Very high in vitamin K',
      'Rich in vitamin C',
      'Supports bone health',
      'Contains antioxidants',
      'Good folate source'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cilantro': {
    name: 'Cilantro',
    aliases: ['cilantro', 'coriandre', 'coriander leaves', 'fresh coriander'],
    category: 'Herb',
    concern: 'low',
    description: 'Aromatic herb that may help remove heavy metals from the body.',
    healthEffects: [
      'May help remove heavy metals',
      'Rich in antioxidants',
      'Anti-inflammatory',
      'Contains vitamins A and K',
      'May aid digestion'
    ],
    whyConsider: [
      'Some people have genetic sensitivity (soapy taste)',
      'May interact with medications',
      'Quality varies',
      'May cause allergic reactions',
      'Strong flavor'
    ],
    benefits: [
      'May help remove heavy metals',
      'Rich in antioxidants',
      'Anti-inflammatory',
      'May aid digestion',
      'Contains vitamins A and K'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'dill': {
    name: 'Dill',
    aliases: ['dill', 'aneth', 'dill weed', 'fresh dill'],
    category: 'Herb',
    concern: 'low',
    description: 'Aromatic herb that may aid digestion and have antimicrobial properties.',
    healthEffects: [
      'May aid digestion',
      'Antimicrobial properties',
      'Contains antioxidants',
      'May have diuretic effects',
      'Rich in vitamin A'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies',
      'May cause allergic reactions',
      'Some people sensitive to herbs',
      'Delicate flavor'
    ],
    benefits: [
      'May aid digestion',
      'Antimicrobial',
      'Contains antioxidants',
      'Rich in vitamin A',
      'May support immune health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'mint': {
    name: 'Mint',
    aliases: ['mint', 'menthe', 'peppermint', 'spearmint', 'fresh mint'],
    category: 'Herb',
    concern: 'low',
    description: 'Refreshing herb that may aid digestion and relieve nausea.',
    healthEffects: [
      'May relieve nausea',
      'May aid digestion',
      'Contains menthol',
      'Anti-inflammatory',
      'May freshen breath'
    ],
    whyConsider: [
      'May cause heartburn',
      'May interact with medications',
      'Quality varies',
      'May cause allergic reactions',
      'Strong flavor may be unpleasant'
    ],
    benefits: [
      'May relieve nausea',
      'May aid digestion',
      'Anti-inflammatory',
      'May freshen breath',
      'May support respiratory health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sage': {
    name: 'Sage',
    aliases: ['sage', 'sauge', 'fresh sage', 'sage leaves'],
    category: 'Herb',
    concern: 'low',
    description: 'Aromatic herb with antimicrobial properties. May support brain health.',
    healthEffects: [
      'Antimicrobial properties',
      'May support brain health',
      'Anti-inflammatory',
      'Contains antioxidants',
      'May improve memory'
    ],
    whyConsider: [
      'May interact with medications',
      'Strong flavor may be unpleasant',
      'Quality varies',
      'May cause allergic reactions',
      'Some people sensitive to strong herbs'
    ],
    benefits: [
      'Antimicrobial',
      'May support brain health',
      'Anti-inflammatory',
      'May improve memory',
      'Rich in antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'tarragon': {
    name: 'Tarragon',
    aliases: ['tarragon', 'estragon', 'french tarragon', 'fresh tarragon'],
    category: 'Herb',
    concern: 'low',
    description: 'Aromatic herb that may aid digestion and have antimicrobial properties.',
    healthEffects: [
      'May aid digestion',
      'Antimicrobial properties',
      'Anti-inflammatory',
      'Contains antioxidants',
      'May support sleep'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies',
      'May cause allergic reactions',
      'Some people sensitive to herbs',
      'Licorice-like flavor may be unpleasant'
    ],
    benefits: [
      'May aid digestion',
      'Antimicrobial',
      'Anti-inflammatory',
      'Contains antioxidants',
      'May support sleep'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'chives': {
    name: 'Chives',
    aliases: ['chives', 'ciboulette', 'fresh chives', 'chive'],
    category: 'Herb',
    concern: 'low',
    description: 'Mild onion herb rich in vitamins and antioxidants.',
    healthEffects: [
      'Rich in vitamins A and K',
      'Contains antioxidants',
      'May support bone health',
      'Contains sulfur compounds',
      'Mild antimicrobial properties'
    ],
    whyConsider: [
      'Some people sensitive to alliums',
      'May cause digestive issues',
      'Quality varies',
      'May interact with blood thinners',
      'Delicate flavor'
    ],
    benefits: [
      'Rich in vitamins A and K',
      'Supports bone health',
      'Contains antioxidants',
      'Mild antimicrobial',
      'Supports immune health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'fava beans': {
    name: 'Fava Beans',
    aliases: ['fava beans', 'fèves', 'broad beans', 'faba beans'],
    category: 'Legume',
    concern: 'moderate',
    description: 'Nutrient-rich legumes. Complete protein source but may cause issues.',
    healthEffects: [
      'Complete protein source',
      'Rich in fiber and folate',
      'High in iron and manganese',
      'May support heart health',
      'Contains L-dopa'
    ],
    whyConsider: [
      'May cause favism (genetic disorder)',
      'Contains lectins if not cooked properly',
      'Some people sensitive to legumes',
      'May cause digestive gas',
      'Quality varies'
    ],
    benefits: [
      'Complete protein',
      'Rich in folate',
      'High in iron',
      'Supports heart health',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'lentils': {
    name: 'Lentils',
    aliases: ['lentils', 'lentilles', 'red lentils', 'green lentils', 'brown lentils'],
    category: 'Legume',
    concern: 'low',
    description: 'Nutrient-dense legumes. Excellent plant-based protein and fiber source.',
    healthEffects: [
      'Excellent protein source',
      'Very high in fiber',
      'Rich in folate and iron',
      'Low glycemic index',
      'Contains antioxidants'
    ],
    whyConsider: [
      'May cause digestive gas',
      'Contains lectins if not cooked properly',
      'Some people sensitive to legumes',
      'May contain anti-nutrients',
      'Quality varies'
    ],
    benefits: [
      'Excellent protein source',
      'Very high in fiber',
      'Rich in minerals',
      'Supports blood sugar control',
      'Supports heart health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'chickpeas': {
    name: 'Chickpeas',
    aliases: ['chickpeas', 'pois chiches', 'garbanzo beans', 'ceci beans'],
    category: 'Legume',
    concern: 'low',
    description: 'Nutrient-rich legumes commonly known as garbanzo beans.',
    healthEffects: [
      'Good protein source',
      'Very high in fiber',
      'Rich in folate and manganese',
      'Contains resistant starch',
      'May support blood sugar control'
    ],
    whyConsider: [
      'May cause digestive gas',
      'Contains lectins if not cooked properly',
      'Some people sensitive to legumes',
      'Often from cans (may contain BPA)',
      'May contain anti-nutrients'
    ],
    benefits: [
      'Good protein source',
      'Very high in fiber',
      'Rich in minerals',
      'Supports blood sugar control',
      'May support weight management'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'black beans': {
    name: 'Black Beans',
    aliases: ['black beans', 'haricots noirs', 'turtle beans', 'frijoles negros'],
    category: 'Legume',
    concern: 'low',
    description: 'Nutrient-dense black legumes rich in antioxidants.',
    healthEffects: [
      'Good protein source',
      'Very high in fiber',
      'Rich in antioxidants',
      'High in folate',
      'May support heart health'
    ],
    whyConsider: [
      'May cause digestive gas',
      'Contains lectins if not cooked properly',
      'Some people sensitive to legumes',
      'Often from cans (may contain BPA)',
      'May contain anti-nutrients'
    ],
    benefits: [
      'Good protein source',
      'Very high in fiber',
      'Rich in antioxidants',
      'Supports heart health',
      'May support blood sugar control'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'kidney beans': {
    name: 'Kidney Beans',
    aliases: ['kidney beans', 'haricots rouges', 'red kidney beans', 'rajma'],
    category: 'Legume',
    concern: 'moderate',
    description: 'Popular red legumes. Must be cooked properly to avoid toxins.',
    healthEffects: [
      'Good protein source',
      'High in fiber',
      'Rich in folate and iron',
      'Contains antioxidants',
      'May support heart health'
    ],
    whyConsider: [
      'Must be cooked properly (toxins)',
      'May cause digestive gas',
      'Contains lectins if undercooked',
      'Some people sensitive to legumes',
      'Often from cans (may contain BPA)'
    ],
    benefits: [
      'Good protein source',
      'High in fiber',
      'Rich in minerals',
      'Supports heart health',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'pinto beans': {
    name: 'Pinto Beans',
    aliases: ['pinto beans', 'haricots pinto', 'pinto', 'frijoles pintos'],
    category: 'Legume',
    concern: 'low',
    description: 'Mild-flavored legumes commonly used in Mexican cuisine.',
    healthEffects: [
      'Good protein source',
      'High in fiber',
      'Rich in folate and manganese',
      'Contains resistant starch',
      'May support blood sugar control'
    ],
    whyConsider: [
      'May cause digestive gas',
      'Contains lectins if not cooked properly',
      'Some people sensitive to legumes',
      'Often from cans (may contain BPA)',
      'May contain anti-nutrients'
    ],
    benefits: [
      'Good protein source',
      'High in fiber',
      'Rich in minerals',
      'Supports blood sugar control',
      'May support weight management'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'navy beans': {
    name: 'Navy Beans',
    aliases: ['navy beans', 'haricots blancs', 'white beans', 'pea beans'],
    category: 'Legume',
    concern: 'low',
    description: 'Small white legumes commonly used in baked beans.',
    healthEffects: [
      'Good protein source',
      'Very high in fiber',
      'Rich in folate and thiamine',
      'Contains resistant starch',
      'May support heart health'
    ],
    whyConsider: [
      'May cause digestive gas',
      'Contains lectins if not cooked properly',
      'Some people sensitive to legumes',
      'Often from cans (may contain BPA)',
      'May contain anti-nutrients'
    ],
    benefits: [
      'Good protein source',
      'Very high in fiber',
      'Rich in B vitamins',
      'Supports heart health',
      'May support blood sugar control'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cannellini beans': {
    name: 'Cannellini Beans',
    aliases: ['cannellini beans', 'haricots cannellini', 'white kidney beans', 'fagioli'],
    category: 'Legume',
    concern: 'low',
    description: 'Large white Italian beans with creamy texture.',
    healthEffects: [
      'Good protein source',
      'High in fiber',
      'Rich in folate and manganese',
      'Contains resistant starch',
      'May support bone health'
    ],
    whyConsider: [
      'May cause digestive gas',
      'Contains lectins if not cooked properly',
      'Some people sensitive to legumes',
      'Often from cans (may contain BPA)',
      'May contain anti-nutrients'
    ],
    benefits: [
      'Good protein source',
      'High in fiber',
      'Rich in minerals',
      'Supports bone health',
      'May support blood sugar control'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'mung beans': {
    name: 'Mung Beans',
    aliases: ['mung beans', 'haricots mungo', 'green gram', 'moong dal'],
    category: 'Legume',
    concern: 'low',
    description: 'Small green legumes commonly used in Asian cuisine.',
    healthEffects: [
      'Good protein source',
      'High in fiber',
      'Rich in vitamins C and K',
      'Easy to digest',
      'Contains antioxidants'
    ],
    whyConsider: [
      'May cause digestive gas',
      'Contains lectins if not cooked properly',
      'Some people sensitive to legumes',
      'Quality varies',
      'May contain anti-nutrients'
    ],
    benefits: [
      'Good protein source',
      'Easy to digest',
      'Rich in vitamins',
      'Supports detoxification',
      'May support blood sugar control'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'edamame': {
    name: 'Edamame',
    aliases: ['edamame', 'fèves de soja', 'soybeans', 'green soybeans'],
    category: 'Legume',
    concern: 'moderate',
    description: 'Young soybeans. Complete protein but allergen and often genetically modified.',
    healthEffects: [
      'Complete protein source',
      'Rich in fiber and minerals',
      'Contains isoflavones',
      'May support bone health',
      'Contains antioxidants'
    ],
    whyConsider: [
      'Major allergen',
      'Often genetically modified',
      'May affect hormone balance',
      'Contains lectins if not cooked properly',
      'May cause digestive issues'
    ],
    benefits: [
      'Complete protein',
      'Rich in minerals',
      'May support bone health',
      'Contains antioxidants',
      'Good for vegetarian diets'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['soy', 'soybeans']
    }
  },
  'tempeh': {
    name: 'Tempeh',
    aliases: ['tempeh', 'tempeh', 'fermented soybeans', 'tempe'],
    category: 'Fermented Food',
    concern: 'moderate',
    description: 'Fermented soybean product. Complete protein with probiotics.',
    healthEffects: [
      'Complete protein source',
      'Contains probiotics',
      'Rich in fiber and minerals',
      'May support gut health',
      'Contains antioxidants'
    ],
    whyConsider: [
      'Major allergen',
      'Often genetically modified soybeans',
      'May affect hormone balance',
      'Fermentation may produce histamine',
      'Quality varies greatly'
    ],
    benefits: [
      'Complete protein',
      'Contains probiotics',
      'May support gut health',
      'Rich in minerals',
      'Fermented food benefits'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['soy', 'soybeans']
    }
  },
  'tofu': {
    name: 'Tofu',
    aliases: ['tofu', 'tofu', 'soybean curd', 'bean curd'],
    category: 'Soy Product',
    concern: 'moderate',
    description: 'Soybean curd. Complete protein but allergen and processing concerns.',
    healthEffects: [
      'Complete protein source',
      'Contains isoflavones',
      'May support bone health',
      'Contains some minerals',
      'Low in saturated fat'
    ],
    whyConsider: [
      'Major allergen',
      'Often genetically modified soybeans',
      'May affect hormone balance',
      'Processing may affect nutrients',
      'May contain additives'
    ],
    benefits: [
      'Complete protein',
      'Low in saturated fat',
      'May support bone health',
      'Contains antioxidants',
      'Good for vegetarian diets'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['soy', 'soybeans']
    }
  },
  'miso': {
    name: 'Miso',
    aliases: ['miso', 'miso', 'fermented soybean paste', 'miso paste'],
    category: 'Fermented Food',
    concern: 'moderate',
    description: 'Fermented soybean paste. Contains probiotics and complete protein.',
    healthEffects: [
      'Complete protein source',
      'Contains probiotics',
      'Rich in antioxidants',
      'May support gut health',
      'Contains vitamins and minerals'
    ],
    whyConsider: [
      'Major allergen',
      'Often genetically modified soybeans',
      'May affect hormone balance',
      'High in sodium',
      'Fermentation may produce histamine'
    ],
    benefits: [
      'Complete protein',
      'Contains probiotics',
      'Rich in antioxidants',
      'May support immune health',
      'Fermented food benefits'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['soy', 'soybeans']
    }
  },
  'natto': {
    name: 'Natto',
    aliases: ['natto', 'natto', 'fermented soybeans', 'nattokinase'],
    category: 'Fermented Food',
    concern: 'moderate',
    description: 'Fermented soybeans with nattokinase. Strong flavor and texture.',
    healthEffects: [
      'Complete protein source',
      'Contains nattokinase (may support circulation)',
      'Contains probiotics',
      'Rich in vitamins K2 and B12',
      'May support bone health'
    ],
    whyConsider: [
      'Major allergen',
      'Often genetically modified soybeans',
      'May affect hormone balance',
      'Strong smell and texture may be unpleasant',
      'Fermentation may produce histamine'
    ],
    benefits: [
      'Complete protein',
      'Contains nattokinase',
      'Rich in vitamin K2',
      'May support circulation',
      'Fermented food benefits'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['soy', 'soybeans']
    }
  },
  'quinoa flakes': {
    name: 'Quinoa Flakes',
    aliases: ['quinoa flakes', 'flocons de quinoa', 'quinoa cereal', 'rolled quinoa'],
    category: 'Grain',
    concern: 'low',
    description: 'Flaked quinoa. Complete protein and easy to prepare.',
    healthEffects: [
      'Complete protein source',
      'Rich in minerals',
      'High in fiber',
      'Contains antioxidants',
      'Good for blood sugar control'
    ],
    whyConsider: [
      'May contain saponins if not rinsed',
      'Often imported long distances',
      'May be expensive',
      'Some people sensitive to oxalates',
      'May contain phytates'
    ],
    benefits: [
      'Complete protein',
      'Rich in minerals (iron, magnesium)',
      'High in fiber',
      'Gluten-free',
      'Easy to digest'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'buckwheat': {
    name: 'Buckwheat',
    aliases: ['buckwheat', 'sarrasin', 'kasha', 'buckwheat groats'],
    category: 'Grain',
    concern: 'low',
    description: 'Nutrient-rich seed. Complete protein and gluten-free.',
    healthEffects: [
      'Complete protein source',
      'Rich in antioxidants',
      'High in fiber',
      'Contains rutin',
      'May support heart health'
    ],
    whyConsider: [
      'May cause digestive issues',
      'Strong flavor may be unpleasant',
      'Often confused with wheat (not related)',
      'Quality varies',
      'May contain anti-nutrients'
    ],
    benefits: [
      'Complete protein',
      'Rich in antioxidants',
      'High in fiber',
      'Gluten-free',
      'May support heart health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'amaranth': {
    name: 'Amaranth',
    aliases: ['amaranth', 'amaranthe', 'amaranth grain', 'ramdana'],
    category: 'Grain',
    concern: 'low',
    description: 'Ancient grain rich in complete protein and minerals.',
    healthEffects: [
      'Complete protein source',
      'Very high in minerals',
      'Rich in fiber',
      'Contains antioxidants',
      'High in lysine'
    ],
    whyConsider: [
      'May contain oxalates',
      'Strong flavor may be unpleasant',
      'May cause digestive issues',
      'Quality varies',
      'Less common (may be expensive)'
    ],
    benefits: [
      'Complete protein',
      'Very high in minerals',
      'Rich in fiber',
      'Gluten-free',
      'High in lysine'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'millet': {
    name: 'Millet',
    aliases: ['millet', 'millet', 'proso millet', 'finger millet'],
    category: 'Grain',
    concern: 'low',
    description: 'Nutrient-dense small grain. Gluten-free and rich in minerals.',
    healthEffects: [
      'Good protein source',
      'Rich in minerals',
      'High in fiber',
      'Contains antioxidants',
      'May support blood sugar control'
    ],
    whyConsider: [
      'May contain goitrogens',
      'Some varieties may cause digestive issues',
      'Less common in Western diets',
      'Quality varies',
      'May contain anti-nutrients'
    ],
    benefits: [
      'Good protein source',
      'Rich in minerals',
      'High in fiber',
      'Gluten-free',
      'May support blood sugar control'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'farro': {
    name: 'Farro',
    aliases: ['farro', 'farro', 'emmer wheat', 'spelt'],
    category: 'Grain',
    concern: 'moderate',
    description: 'Ancient wheat grain. More nutritious than modern wheat but contains gluten.',
    healthEffects: [
      'Good protein source',
      'Rich in fiber',
      'Contains vitamins and minerals',
      'More nutrients than modern wheat',
      'Contains gluten'
    ],
    whyConsider: [
      'Contains gluten',
      'Not suitable for celiac disease',
      'May cause digestive issues',
      'Quality varies',
      'May contain anti-nutrients'
    ],
    benefits: [
      'Good protein source',
      'Rich in fiber',
      'More nutritious than modern wheat',
      'Contains vitamins and minerals',
      'Supports gut health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: false,
      allergen: ['wheat', 'gluten']
    }
  },
  'bulgur': {
    name: 'Bulgur',
    aliases: ['bulgur', 'bulgur', 'bulgur wheat', 'burghul'],
    category: 'Grain',
    concern: 'moderate',
    description: 'Parboiled wheat grain. Contains gluten but more nutritious than refined wheat.',
    healthEffects: [
      'Good protein source',
      'High in fiber',
      'Rich in minerals',
      'Contains vitamins',
      'Contains gluten'
    ],
    whyConsider: [
      'Contains gluten',
      'Not suitable for celiac disease',
      'May cause digestive issues',
      'Quality varies',
      'May contain anti-nutrients'
    ],
    benefits: [
      'Good protein source',
      'High in fiber',
      'Rich in minerals',
      'Easy to digest',
      'Contains vitamins'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: false,
      allergen: ['wheat', 'gluten']
    }
  },
  'barley': {
    name: 'Barley',
    aliases: ['barley', 'orge', 'pearl barley', 'hulled barley'],
    category: 'Grain',
    concern: 'moderate',
    description: 'Nutrient-rich grain. Contains beta-glucan and some gluten.',
    healthEffects: [
      'Contains beta-glucan',
      'May lower cholesterol',
      'Good source of fiber',
      'Rich in vitamins and minerals',
      'Contains some gluten'
    ],
    whyConsider: [
      'Contains gluten',
      'Not suitable for celiac disease',
      'May cause digestive issues',
      'Quality varies',
      'Pearl barley is more processed'
    ],
    benefits: [
      'May lower cholesterol',
      'Good fiber source',
      'Rich in vitamins and minerals',
      'Supports heart health',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: false,
      allergen: ['wheat', 'gluten']
    }
  },
  'rye': {
    name: 'Rye',
    aliases: ['rye', 'seigle', 'rye grain', 'rye flour'],
    category: 'Grain',
    concern: 'moderate',
    description: 'Dense grain rich in fiber. Contains gluten but more nutritious than wheat.',
    healthEffects: [
      'Very high in fiber',
      'Rich in vitamins and minerals',
      'Contains antioxidants',
      'May support blood sugar control',
      'Contains gluten'
    ],
    whyConsider: [
      'Contains gluten',
      'Not suitable for celiac disease',
      'May cause digestive issues',
      'Strong flavor may be unpleasant',
      'Quality varies'
    ],
    benefits: [
      'Very high in fiber',
      'Rich in vitamins and minerals',
      'May support blood sugar control',
      'Supports gut health',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: false,
      allergen: ['wheat', 'gluten']
    }
  },
  'teff': {
    name: 'Teff',
    aliases: ['teff', 'teff', 'teff grain', 'ethiopian grain'],
    category: 'Grain',
    concern: 'low',
    description: 'Tiny Ethiopian grain. Complete protein and rich in minerals.',
    healthEffects: [
      'Complete protein source',
      'Very high in minerals',
      'Rich in fiber',
      'Contains antioxidants',
      'High in calcium'
    ],
    whyConsider: [
      'May contain oxalates',
      'Tiny size makes cooking time-consuming',
      'Less common (may be expensive)',
      'Quality varies',
      'May cause digestive issues'
    ],
    benefits: [
      'Complete protein',
      'Very high in minerals',
      'Rich in fiber',
      'Gluten-free',
      'High in calcium'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'freekeh': {
    name: 'Freekeh',
    aliases: ['freekeh', 'freekeh', 'farik', 'smoked wheat'],
    category: 'Grain',
    concern: 'moderate',
    description: 'Smoked green wheat. More nutritious than regular wheat but contains gluten.',
    healthEffects: [
      'High in protein',
      'Rich in fiber',
      'Contains more nutrients than regular wheat',
      'Contains antioxidants',
      'Contains gluten'
    ],
    whyConsider: [
      'Contains gluten',
      'Not suitable for celiac disease',
      'May cause digestive issues',
      'Smoked flavor may be unusual',
      'Quality varies'
    ],
    benefits: [
      'High in protein',
      'Rich in fiber',
      'More nutritious than regular wheat',
      'Contains antioxidants',
      'Supports gut health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: false,
      allergen: ['wheat', 'gluten']
    }
  },
  'sorghum': {
    name: 'Sorghum',
    aliases: ['sorghum', 'sorgho', 'sorghum grain', 'jowar'],
    category: 'Grain',
    concern: 'low',
    description: 'Drought-resistant grain. Gluten-free and rich in antioxidants.',
    healthEffects: [
      'Good protein source',
      'Rich in antioxidants',
      'High in fiber',
      'Contains tannins',
      'May support blood sugar control'
    ],
    whyConsider: [
      'May contain goitrogens',
      'Some varieties may cause digestive issues',
      'Less common in Western diets',
      'Quality varies',
      'May contain anti-nutrients'
    ],
    benefits: [
      'Good protein source',
      'Rich in antioxidants',
      'High in fiber',
      'Gluten-free',
      'May support blood sugar control'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'chia seeds': {
    name: 'Chia Seeds',
    aliases: ['chia seeds', 'graines de chia', 'chia', 'salba seeds'],
    category: 'Seed',
    concern: 'low',
    description: 'Nutrient-dense seeds rich in omega-3s and fiber.',
    healthEffects: [
      'Very high in fiber',
      'Rich in omega-3 fatty acids',
      'Complete protein source',
      'High in antioxidants',
      'Contains calcium and magnesium'
    ],
    whyConsider: [
      'May cause digestive issues if not soaked',
      'High in oxalates',
      'May interact with blood thinners',
      'Quality varies greatly',
      'May be contaminated'
    ],
    benefits: [
      'Very high in fiber',
      'Rich in omega-3s',
      'Complete protein',
      'High in antioxidants',
      'May support heart health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'flax seeds': {
    name: 'Flax Seeds',
    aliases: ['flax seeds', 'graines de lin', 'flaxseed', 'linseed'],
    category: 'Seed',
    concern: 'low',
    description: 'Nutrient-rich seeds high in omega-3s and fiber.',
    healthEffects: [
      'Rich in omega-3 fatty acids',
      'High in fiber',
      'Contains lignans',
      'May support heart health',
      'Contains antioxidants'
    ],
    whyConsider: [
      'Must be ground for nutrient absorption',
      'May cause digestive issues',
      'High in oxalates',
      'May interact with medications',
      'Quality varies'
    ],
    benefits: [
      'Rich in omega-3s',
      'High in fiber',
      'Contains lignans',
      'May support heart health',
      'May support hormone balance'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'hemp seeds': {
    name: 'Hemp Seeds',
    aliases: ['hemp seeds', 'graines de chanvre', 'hemp hearts', 'cannabis seeds'],
    category: 'Seed',
    concern: 'low',
    description: 'Nutrient-dense seeds. Complete protein and rich in healthy fats.',
    healthEffects: [
      'Complete protein source',
      'Rich in omega-3 and omega-6',
      'High in minerals',
      'Contains antioxidants',
      'Good source of vitamin E'
    ],
    whyConsider: [
      'May contain THC traces',
      'Quality varies greatly',
      'May be expensive',
      'Some people sensitive to seeds',
      'May be contaminated'
    ],
    benefits: [
      'Complete protein',
      'Rich in healthy fats',
      'High in minerals',
      'Good vitamin E source',
      'May support heart health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'pumpkin seeds': {
    name: 'Pumpkin Seeds',
    aliases: ['pumpkin seeds', 'graines de citrouille', 'pepitas', 'pumpkin pepitas'],
    category: 'Seed',
    concern: 'low',
    description: 'Nutrient-rich seeds high in minerals and healthy fats.',
    healthEffects: [
      'High in magnesium and zinc',
      'Rich in antioxidants',
      'Good source of healthy fats',
      'May support prostate health',
      'Contains tryptophan'
    ],
    whyConsider: [
      'High in calories',
      'May be roasted in unhealthy oils',
      'Quality varies',
      'Some people sensitive to seeds',
      'May be contaminated'
    ],
    benefits: [
      'High in minerals',
      'Rich in antioxidants',
      'May support prostate health',
      'Good healthy fat source',
      'May support sleep'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sunflower seeds': {
    name: 'Sunflower Seeds',
    aliases: ['sunflower seeds', 'graines de tournesol', 'sunflower kernels'],
    category: 'Seed',
    concern: 'low',
    description: 'Nutrient-rich seeds high in vitamin E and healthy fats.',
    healthEffects: [
      'Very high in vitamin E',
      'Good source of healthy fats',
      'Contains selenium',
      'Rich in antioxidants',
      'High in folate'
    ],
    whyConsider: [
      'High in calories',
      'Often salted heavily',
      'May be roasted in unhealthy oils',
      'Quality varies',
      'May be contaminated'
    ],
    benefits: [
      'Very high in vitamin E',
      'Rich in antioxidants',
      'Good selenium source',
      'Supports immune health',
      'May support skin health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sesame seeds': {
    name: 'Sesame Seeds',
    aliases: ['sesame seeds', 'graines de sésame', 'sesame', 'simsim'],
    category: 'Seed',
    concern: 'low',
    description: 'Nutrient-dense seeds rich in minerals and healthy fats.',
    healthEffects: [
      'High in calcium and iron',
      'Rich in healthy fats',
      'Contains sesamin and sesamolin',
      'May support bone health',
      'Contains antioxidants'
    ],
    whyConsider: [
      'Major allergen',
      'Often heavily processed',
      'Quality varies',
      'May be contaminated',
      'Some people sensitive to seeds'
    ],
    benefits: [
      'High in minerals',
      'Rich in healthy fats',
      'May support bone health',
      'Contains antioxidants',
      'May support heart health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['sesame']
    }
  },
  'poppy seeds': {
    name: 'Poppy Seeds',
    aliases: ['poppy seeds', 'graines de pavot', 'poppyseed', 'khus khus'],
    category: 'Seed',
    concern: 'low',
    description: 'Small seeds rich in minerals. Used for flavoring and nutrition.',
    healthEffects: [
      'High in calcium and manganese',
      'Contains healthy fats',
      'May support bone health',
      'Contains antioxidants',
      'Good source of B vitamins'
    ],
    whyConsider: [
      'May contain morphine traces',
      'Quality varies',
      'May be contaminated',
      'Some people sensitive to seeds',
      'Drug tests may detect morphine'
    ],
    benefits: [
      'High in minerals',
      'Rich in healthy fats',
      'Supports bone health',
      'Contains antioxidants',
      'Good B vitamin source'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'fennel seeds': {
    name: 'Fennel Seeds',
    aliases: ['fennel seeds', 'graines de fenouil', 'fennel seed', 'saunf'],
    category: 'Seed',
    concern: 'low',
    description: 'Aromatic seeds used for digestion and flavoring.',
    healthEffects: [
      'May aid digestion',
      'Contains anethole',
      'Antimicrobial properties',
      'May relieve colic',
      'Contains antioxidants'
    ],
    whyConsider: [
      'Strong flavor may be unpleasant',
      'May interact with medications',
      'Quality varies',
      'May cause allergic reactions',
      'Some people sensitive to anethole'
    ],
    benefits: [
      'May aid digestion',
      'Antimicrobial',
      'May relieve colic',
      'Contains antioxidants',
      'May support respiratory health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cumin seeds': {
    name: 'Cumin Seeds',
    aliases: ['cumin seeds', 'graines de cumin', 'cumin', 'jeera seeds'],
    category: 'Seed',
    concern: 'low',
    description: 'Aromatic seeds rich in antioxidants and may aid digestion.',
    healthEffects: [
      'Rich in antioxidants',
      'May aid digestion',
      'Contains thymol',
      'Antimicrobial properties',
      'Supports iron absorption'
    ],
    whyConsider: [
      'Strong flavor may be unpleasant',
      'May cause digestive issues',
      'Quality varies',
      'May be contaminated',
      'Some people sensitive to strong spices'
    ],
    benefits: [
      'May aid digestion',
      'Rich in antioxidants',
      'Supports iron absorption',
      'Antimicrobial',
      'May support immune health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'coriander seeds': {
    name: 'Coriander Seeds',
    aliases: ['coriander seeds', 'graines de coriandre', 'coriander seed', 'dhania seeds'],
    category: 'Seed',
    concern: 'low',
    description: 'Aromatic seeds used for digestion and flavoring.',
    healthEffects: [
      'May aid digestion',
      'Antimicrobial properties',
      'Contains antioxidants',
      'May reduce inflammation',
      'Supports liver health'
    ],
    whyConsider: [
      'Strong flavor may be unpleasant',
      'May interact with medications',
      'Quality varies',
      'May cause allergic reactions',
      'Some people sensitive to coriander'
    ],
    benefits: [
      'May aid digestion',
      'Antimicrobial',
      'Contains antioxidants',
      'May reduce inflammation',
      'Supports liver health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'mustard seeds': {
    name: 'Mustard Seeds',
    aliases: ['mustard seeds', 'graines de moutarde', 'mustard seed', 'sarson'],
    category: 'Seed',
    concern: 'low',
    description: 'Spicy seeds rich in antioxidants and minerals.',
    healthEffects: [
      'Rich in antioxidants',
      'Contains glucosinolates',
      'May support thyroid health',
      'Antimicrobial properties',
      'Contains omega-3s'
    ],
    whyConsider: [
      'Very spicy/hot',
      'May cause digestive issues',
      'Quality varies',
      'May interact with thyroid medications',
      'Some people sensitive to mustard'
    ],
    benefits: [
      'Rich in antioxidants',
      'May support thyroid health',
      'Antimicrobial',
      'Contains omega-3s',
      'May support metabolism'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['mustard']
    }
  },
  'fenugreek seeds': {
    name: 'Fenugreek Seeds',
    aliases: ['fenugreek seeds', 'graines de fenugrec', 'fenugreek', 'methi seeds'],
    category: 'Seed',
    concern: 'low',
    description: 'Bitter seeds used for health benefits and flavoring.',
    healthEffects: [
      'May support blood sugar control',
      'Contains antioxidants',
      'May increase milk production',
      'Anti-inflammatory',
      'Contains saponins'
    ],
    whyConsider: [
      'Very bitter taste',
      'May cause digestive issues',
      'May interact with blood sugar medications',
      'Quality varies',
      'Strong maple-like smell'
    ],
    benefits: [
      'May support blood sugar control',
      'May increase breast milk production',
      'Anti-inflammatory',
      'Contains antioxidants',
      'May support digestion'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'coconut milk': {
    name: 'Coconut Milk',
    aliases: ['coconut milk', 'lait de coco', 'coconut cream', 'coco milk'],
    category: 'Plant Milk',
    concern: 'moderate',
    description: 'Thick liquid from coconuts. Rich in saturated fat but contains MCTs.',
    healthEffects: [
      'Contains medium-chain triglycerides',
      'High in saturated fat',
      'Contains some vitamins',
      'May support metabolism',
      'Contains antioxidants'
    ],
    whyConsider: [
      'Very high in saturated fat',
      'High in calories',
      'May be heavily processed',
      'Environmental impact',
      'Often contains additives'
    ],
    benefits: [
      'Contains MCTs',
      'May support metabolism',
      'Contains antioxidants',
      'Good for cooking',
      'May support ketosis'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['coconut']
    }
  },
  'almond milk': {
    name: 'Almond Milk',
    aliases: ['almond milk', 'lait d\'amande', 'almond drink', 'almond beverage'],
    category: 'Plant Milk',
    concern: 'low',
    description: 'Plant-based milk made from almonds. Low in calories and nutrients.',
    healthEffects: [
      'Low in calories',
      'Contains some vitamin E',
      'Often fortified with calcium',
      'Contains some antioxidants',
      'Low in protein compared to dairy'
    ],
    whyConsider: [
      'Often heavily processed',
      'May contain additives and thickeners',
      'Low in protein',
      'May be fortified artificially',
      'Environmental impact of almonds'
    ],
    benefits: [
      'Low calorie',
      'Dairy-free alternative',
      'Contains vitamin E',
      'Often fortified with calcium',
      'Suitable for allergies'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['almonds']
    }
  },
  'oat milk': {
    name: 'Oat Milk',
    aliases: ['oat milk', 'lait d\'avoine', 'oat drink', 'oat beverage'],
    category: 'Plant Milk',
    concern: 'low',
    description: 'Plant-based milk made from oats. Good source of fiber.',
    healthEffects: [
      'Contains beta-glucan fiber',
      'May support heart health',
      'Often fortified with vitamins',
      'Creamy texture',
      'Contains some antioxidants'
    ],
    whyConsider: [
      'May contain gluten cross-contamination',
      'Often heavily processed',
      'May contain additives',
      'Quality varies',
      'May cause digestive issues'
    ],
    benefits: [
      'Contains beta-glucan',
      'May support heart health',
      'Good fiber source',
      'Creamy texture',
      'Dairy-free alternative'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: false, // May be cross-contaminated
      allergen: ['gluten'] // Cross-contamination
    }
  },
  'soy milk': {
    name: 'Soy Milk',
    aliases: ['soy milk', 'lait de soja', 'soy drink', 'soymilk'],
    category: 'Plant Milk',
    concern: 'moderate',
    description: 'Plant-based milk from soybeans. Contains complete protein.',
    healthEffects: [
      'Contains complete protein',
      'Rich in isoflavones',
      'Often fortified with calcium',
      'Contains antioxidants',
      'May support bone health'
    ],
    whyConsider: [
      'Major allergen',
      'Often genetically modified soybeans',
      'May affect hormone balance',
      'May contain additives',
      'Quality varies greatly'
    ],
    benefits: [
      'Complete protein',
      'Rich in isoflavones',
      'May support bone health',
      'Good dairy alternative',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['soy', 'soybeans']
    }
  },
  'rice milk': {
    name: 'Rice Milk',
    aliases: ['rice milk', 'lait de riz', 'rice drink', 'rice beverage'],
    category: 'Plant Milk',
    concern: 'low',
    description: 'Plant-based milk from rice. Mild flavor and naturally sweet.',
    healthEffects: [
      'Naturally sweet',
      'Low in protein',
      'Often fortified with vitamins',
      'Mild flavor',
      'Contains some antioxidants'
    ],
    whyConsider: [
      'Low in protein',
      'Often heavily processed',
      'May contain arsenic',
      'May contain additives',
      'Not suitable for blood sugar issues'
    ],
    benefits: [
      'Dairy-free alternative',
      'Mild flavor',
      'Often fortified with calcium',
      'Suitable for allergies',
      'Easy to digest'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cashew milk': {
    name: 'Cashew Milk',
    aliases: ['cashew milk', 'lait de cajou', 'cashew drink', 'cashew beverage'],
    category: 'Plant Milk',
    concern: 'low',
    description: 'Creamy plant-based milk made from cashews.',
    healthEffects: [
      'Creamy texture',
      'Contains some healthy fats',
      'Often fortified with vitamins',
      'Contains some antioxidants',
      'Low in calories'
    ],
    whyConsider: [
      'Major allergen',
      'Often heavily processed',
      'May contain additives',
      'Low in protein',
      'Environmental impact'
    ],
    benefits: [
      'Creamy texture',
      'Dairy-free alternative',
      'Contains healthy fats',
      'Suitable for most allergies',
      'Good for smoothies'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['cashews']
    }
  },
  'pistachio milk': {
    name: 'Pistachio Milk',
    aliases: ['pistachio milk', 'lait de pistache', 'pistachio drink', 'pistachio beverage'],
    category: 'Plant Milk',
    concern: 'low',
    description: 'Nutty plant-based milk made from pistachios.',
    healthEffects: [
      'Contains some healthy fats',
      'Rich in antioxidants',
      'Often fortified with vitamins',
      'Contains some fiber',
      'Low in calories'
    ],
    whyConsider: [
      'Major allergen',
      'Often heavily processed',
      'May contain additives',
      'Low in protein',
      'Expensive'
    ],
    benefits: [
      'Rich in antioxidants',
      'Dairy-free alternative',
      'Contains healthy fats',
      'Nutty flavor',
      'Suitable for many allergies'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['pistachios']
    }
  },
  'hemp milk': {
    name: 'Hemp Milk',
    aliases: ['hemp milk', 'lait de chanvre', 'hemp drink', 'hemp beverage'],
    category: 'Plant Milk',
    concern: 'low',
    description: 'Plant-based milk from hemp seeds. Contains complete protein.',
    healthEffects: [
      'Contains complete protein',
      'Rich in omega-3 and omega-6',
      'Often fortified with vitamins',
      'Contains some antioxidants',
      'Creamy texture'
    ],
    whyConsider: [
      'May contain THC traces',
      'Often heavily processed',
      'May contain additives',
      'Quality varies',
      'May be expensive'
    ],
    benefits: [
      'Complete protein',
      'Rich in healthy fats',
      'Dairy-free alternative',
      'Contains antioxidants',
      'Good for muscle health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'macadamia milk': {
    name: 'Macadamia Milk',
    aliases: ['macadamia milk', 'lait de macadamia', 'macadamia drink', 'macadamia beverage'],
    category: 'Plant Milk',
    concern: 'low',
    description: 'Creamy plant-based milk from macadamia nuts.',
    healthEffects: [
      'Creamy texture',
      'Rich in monounsaturated fats',
      'Often fortified with vitamins',
      'Contains some antioxidants',
      'Low in calories'
    ],
    whyConsider: [
      'Major allergen',
      'Often heavily processed',
      'May contain additives',
      'Low in protein',
      'Expensive'
    ],
    benefits: [
      'Very creamy texture',
      'Rich in healthy fats',
      'Dairy-free alternative',
      'Contains antioxidants',
      'Good for cooking'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['macadamia nuts']
    }
  },
  'pea protein': {
    name: 'Pea Protein',
    aliases: ['pea protein', 'protéine de pois', 'pea protein powder', 'pea protein isolate'],
    category: 'Protein Powder',
    concern: 'low',
    description: 'Plant-based protein powder from yellow peas.',
    healthEffects: [
      'Complete protein source',
      'Rich in branched-chain amino acids',
      'Easily digestible',
      'Contains some fiber',
      'Low in allergens'
    ],
    whyConsider: [
      'May cause digestive issues',
      'Often heavily processed',
      'May contain additives',
      'Quality varies greatly',
      'May be genetically modified'
    ],
    benefits: [
      'Complete protein',
      'Easily digestible',
      'Rich in BCAAs',
      'Low allergen risk',
      'Supports muscle health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'whey protein': {
    name: 'Whey Protein',
    aliases: ['whey protein', 'protéine de lactosérum', 'whey protein powder', 'whey isolate'],
    category: 'Protein Powder',
    concern: 'moderate',
    description: 'Protein powder from milk whey. Complete protein but dairy allergen.',
    healthEffects: [
      'Complete protein source',
      'Rich in branched-chain amino acids',
      'Contains immunoglobulins',
      'May support immune health',
      'Fast-absorbing protein'
    ],
    whyConsider: [
      'Major allergen',
      'Not suitable for dairy-free diets',
      'May contain lactose',
      'Often heavily processed',
      'Quality varies greatly'
    ],
    benefits: [
      'Complete protein',
      'Fast absorption',
      'Rich in BCAAs',
      'May support immune health',
      'Supports muscle recovery'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy', 'whey']
    }
  },
  'brown rice protein': {
    name: 'Brown Rice Protein',
    aliases: ['brown rice protein', 'protéine de riz brun', 'brown rice protein powder'],
    category: 'Protein Powder',
    concern: 'low',
    description: 'Plant-based protein powder from brown rice.',
    healthEffects: [
      'Good protein source',
      'Contains all essential amino acids',
      'Easily digestible',
      'Contains some fiber',
      'Low in allergens'
    ],
    whyConsider: [
      'Incomplete protein (low lysine)',
      'May contain arsenic',
      'Often heavily processed',
      'May contain additives',
      'Quality varies'
    ],
    benefits: [
      'Easily digestible',
      'Low allergen risk',
      'Contains some fiber',
      'Gluten-free',
      'Good for sensitive stomachs'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'collagen peptides': {
    name: 'Collagen Peptides',
    aliases: ['collagen peptides', 'peptides de collagène', 'collagen powder', 'hydrolyzed collagen'],
    category: 'Protein Powder',
    concern: 'moderate',
    description: 'Hydrolyzed collagen protein. Supports skin, joint, and gut health.',
    healthEffects: [
      'Supports skin elasticity',
      'May support joint health',
      'Supports gut health',
      'Contains glycine',
      'May support hair and nails'
    ],
    whyConsider: [
      'Animal-derived',
      'Not suitable for vegetarians/vegans',
      'Quality varies greatly',
      'May contain heavy metals',
      'Often expensive'
    ],
    benefits: [
      'Supports skin health',
      'May support joint health',
      'Supports gut health',
      'Contains glycine',
      'May support hair and nails'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: false,
      glutenFree: true
    }
  },
  'bone broth protein': {
    name: 'Bone Broth Protein',
    aliases: ['bone broth protein', 'protéine de bouillon d\'os', 'bone broth powder'],
    category: 'Protein Powder',
    concern: 'moderate',
    description: 'Concentrated bone broth protein. Rich in collagen and minerals.',
    healthEffects: [
      'Rich in collagen',
      'Contains glucosamine',
      'Supports gut health',
      'Contains minerals',
      'May support joint health'
    ],
    whyConsider: [
      'Animal-derived',
      'Not suitable for vegetarians/vegans',
      'May contain heavy metals',
      'Quality varies greatly',
      'Often expensive'
    ],
    benefits: [
      'Rich in collagen',
      'Supports gut health',
      'May support joint health',
      'Contains minerals',
      'Supports connective tissue'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: false,
      glutenFree: true
    }
  },
  'spirulina': {
    name: 'Spirulina',
    aliases: ['spirulina', 'spiruline', 'spirulina powder', 'blue-green algae'],
    category: 'Superfood',
    concern: 'low',
    description: 'Nutrient-dense blue-green algae. Rich in protein and antioxidants.',
    healthEffects: [
      'Very high in protein',
      'Rich in antioxidants',
      'Contains phycocyanin',
      'High in vitamins and minerals',
      'May support immune health'
    ],
    whyConsider: [
      'May contain heavy metals',
      'Strong taste may be unpleasant',
      'May cause digestive issues',
      'Quality varies greatly',
      'May interact with medications'
    ],
    benefits: [
      'Very high in protein',
      'Rich in antioxidants',
      'Supports immune health',
      'High in vitamins and minerals',
      'May support detoxification'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'chlorella': {
    name: 'Chlorella',
    aliases: ['chlorella', 'chlorelle', 'chlorella powder', 'green algae'],
    category: 'Superfood',
    concern: 'low',
    description: 'Green algae rich in chlorophyll and nutrients.',
    healthEffects: [
      'Rich in chlorophyll',
      'High in protein',
      'Contains antioxidants',
      'May support detoxification',
      'Contains vitamins and minerals'
    ],
    whyConsider: [
      'May contain heavy metals',
      'Cell wall may not be broken',
      'May cause digestive issues',
      'Quality varies greatly',
      'Strong taste'
    ],
    benefits: [
      'Rich in chlorophyll',
      'Supports detoxification',
      'High in protein',
      'Contains antioxidants',
      'May support immune health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'maca root': {
    name: 'Maca Root',
    aliases: ['maca root', 'racine de maca', 'maca powder', 'peruvian ginseng'],
    category: 'Superfood',
    concern: 'low',
    description: 'Adaptogenic root vegetable. May support hormone balance and energy.',
    healthEffects: [
      'May support hormone balance',
      'Adaptogenic properties',
      'May support energy levels',
      'Contains antioxidants',
      'Rich in minerals'
    ],
    whyConsider: [
      'May affect hormone levels',
      'Quality varies greatly',
      'May interact with medications',
      'Expensive',
      'May cause digestive issues'
    ],
    benefits: [
      'May support hormone balance',
      'Adaptogenic',
      'May support energy',
      'Contains antioxidants',
      'Rich in minerals'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'ashwagandha': {
    name: 'Ashwagandha',
    aliases: ['ashwagandha', 'ashwagandha root', 'withania somnifera', 'indian ginseng'],
    category: 'Adaptogen',
    concern: 'low',
    description: 'Adaptogenic herb. May reduce stress and support adrenal health.',
    healthEffects: [
      'May reduce stress and anxiety',
      'Adaptogenic properties',
      'May support thyroid health',
      'Anti-inflammatory',
      'May support sleep'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies greatly',
      'May cause drowsiness',
      'Not suitable during pregnancy',
      'May affect thyroid function'
    ],
    benefits: [
      'May reduce stress',
      'Adaptogenic',
      'May support thyroid health',
      'Anti-inflammatory',
      'May support sleep'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'rhodiola rosea': {
    name: 'Rhodiola Rosea',
    aliases: ['rhodiola rosea', 'rhodiola', 'golden root', 'arctic root'],
    category: 'Adaptogen',
    concern: 'low',
    description: 'Adaptogenic herb. May support mental performance and reduce fatigue.',
    healthEffects: [
      'May reduce fatigue',
      'May improve mental performance',
      'Adaptogenic properties',
      'May support mood',
      'Anti-inflammatory'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies greatly',
      'May cause insomnia',
      'Expensive',
      'Not suitable for bipolar disorder'
    ],
    benefits: [
      'May reduce fatigue',
      'May improve mental performance',
      'Adaptogenic',
      'May support mood',
      'Anti-inflammatory'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'holy basil': {
    name: 'Holy Basil',
    aliases: ['holy basil', 'basilic sacré', 'tulsi', 'sacred basil'],
    category: 'Adaptogen',
    concern: 'low',
    description: 'Adaptogenic herb. May support stress reduction and immune health.',
    healthEffects: [
      'May reduce stress',
      'Adaptogenic properties',
      'May support immune health',
      'Anti-inflammatory',
      'Contains antioxidants'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies',
      'May cause drowsiness',
      'Strong flavor',
      'Not suitable during pregnancy'
    ],
    benefits: [
      'May reduce stress',
      'Adaptogenic',
      'May support immune health',
      'Anti-inflammatory',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'reishi mushroom': {
    name: 'Reishi Mushroom',
    aliases: ['reishi mushroom', 'champignon reishi', 'lingzhi', 'mannentake'],
    category: 'Medicinal Mushroom',
    concern: 'low',
    description: 'Medicinal mushroom. May support immune health and stress reduction.',
    healthEffects: [
      'May support immune health',
      'Adaptogenic properties',
      'May support liver health',
      'Anti-inflammatory',
      'May support sleep'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies greatly',
      'May cause digestive issues',
      'Expensive',
      'May cause allergic reactions'
    ],
    benefits: [
      'May support immune health',
      'Adaptogenic',
      'May support liver health',
      'Anti-inflammatory',
      'May support sleep'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'lion\'s mane mushroom': {
    name: 'Lion\'s Mane Mushroom',
    aliases: ['lion\'s mane mushroom', 'champignon crinière de lion', 'yamabushitake', 'hedgehog mushroom'],
    category: 'Medicinal Mushroom',
    concern: 'low',
    description: 'Medicinal mushroom. May support cognitive function and nerve health.',
    healthEffects: [
      'May support cognitive function',
      'May support nerve health',
      'Anti-inflammatory',
      'May support immune health',
      'Contains antioxidants'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies greatly',
      'May cause digestive issues',
      'Expensive',
      'May cause allergic reactions'
    ],
    benefits: [
      'May support cognitive function',
      'May support nerve health',
      'Anti-inflammatory',
      'May support immune health',
      'Contains antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cordyceps mushroom': {
    name: 'Cordyceps Mushroom',
    aliases: ['cordyceps mushroom', 'champignon cordyceps', 'caterpillar fungus', 'dong chong xia cao'],
    category: 'Medicinal Mushroom',
    concern: 'low',
    description: 'Medicinal mushroom. May support energy and athletic performance.',
    healthEffects: [
      'May support energy levels',
      'May support athletic performance',
      'Adaptogenic properties',
      'May support lung health',
      'Anti-inflammatory'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies greatly (often mycelium)',
      'Expensive',
      'May cause digestive issues',
      'May cause allergic reactions'
    ],
    benefits: [
      'May support energy',
      'May support athletic performance',
      'Adaptogenic',
      'May support lung health',
      'Anti-inflammatory'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'turmeric latte mix': {
    name: 'Turmeric Latte Mix',
    aliases: ['turmeric latte mix', 'golden milk mix', 'turmeric latte powder', 'golden milk powder'],
    category: 'Beverage Mix',
    concern: 'low',
    description: 'Spiced beverage mix with turmeric. May support inflammation reduction.',
    healthEffects: [
      'Contains curcumin from turmeric',
      'May reduce inflammation',
      'Contains antioxidants',
      'May support joint health',
      'Often contains black pepper'
    ],
    whyConsider: [
      'May contain added sugars',
      'Quality varies greatly',
      'May contain additives',
      'Often heavily processed',
      'May interact with medications'
    ],
    benefits: [
      'May reduce inflammation',
      'Contains curcumin',
      'Rich in antioxidants',
      'May support joint health',
      'Comforting beverage'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'protein bar': {
    name: 'Protein Bar',
    aliases: ['protein bar', 'barre protéinée', 'protein snack bar', 'energy bar'],
    category: 'Snack',
    concern: 'moderate',
    description: 'Processed snack bar high in protein. May contain added sugars.',
    healthEffects: [
      'High in protein',
      'Convenient snack',
      'May support muscle maintenance',
      'Often fortified with vitamins',
      'Contains some fiber'
    ],
    whyConsider: [
      'May contain added sugars',
      'Often heavily processed',
      'May contain additives',
      'Quality varies greatly',
      'May contain allergens'
    ],
    benefits: [
      'High in protein',
      'Convenient snack',
      'May support muscle health',
      'Often fortified',
      'Portable nutrition'
    ],
    dietaryInfo: {
      vegan: false, // Often contains animal protein
      vegetarian: false, // Often contains gelatin
      glutenFree: false, // Often contains wheat
      allergen: [] // Varies by product
    }
  },
  'trail mix': {
    name: 'Trail Mix',
    aliases: ['trail mix', 'mélange de randonnée', 'trail mixture', 'hiking mix'],
    category: 'Snack',
    concern: 'moderate',
    description: 'Mix of nuts, seeds, and dried fruits. Nutrient-dense but high in calories.',
    healthEffects: [
      'High in healthy fats',
      'Contains antioxidants',
      'Good source of minerals',
      'Contains fiber',
      'May support heart health'
    ],
    whyConsider: [
      'High in calories',
      'May contain added sugars',
      'Often contains allergens',
      'Quality varies',
      'May become rancid'
    ],
    benefits: [
      'High in healthy fats',
      'Contains antioxidants',
      'Good mineral source',
      'Contains fiber',
      'Portable snack'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['nuts', 'seeds'] // Varies
    }
  },
  'dark chocolate bar': {
    name: 'Dark Chocolate Bar',
    aliases: ['dark chocolate bar', 'barre de chocolat noir', 'dark chocolate', 'bittersweet chocolate'],
    category: 'Snack',
    concern: 'moderate',
    description: 'Chocolate bar with high cocoa content. May support heart health.',
    healthEffects: [
      'Contains antioxidants (flavonoids)',
      'May support heart health',
      'May improve mood',
      'Contains minerals',
      'May support cognitive function'
    ],
    whyConsider: [
      'May contain added sugars',
      'Contains caffeine and theobromine',
      'May contain milk',
      'Quality varies greatly',
      'Addictive potential'
    ],
    benefits: [
      'Rich in antioxidants',
      'May support heart health',
      'May improve mood',
      'Contains minerals',
      'May support cognitive function'
    ],
    dietaryInfo: {
      vegan: false, // Often contains milk
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk'] // If milk chocolate
    }
  },
  'granola bar': {
    name: 'Granola Bar',
    aliases: ['granola bar', 'barre de granola', 'granola snack bar', 'oat bar'],
    category: 'Snack',
    concern: 'moderate',
    description: 'Oat-based snack bar. May contain added sugars and oils.',
    healthEffects: [
      'Contains fiber',
      'May contain antioxidants',
      'Convenient snack',
      'Contains some vitamins',
      'May support blood sugar'
    ],
    whyConsider: [
      'Often contains added sugars',
      'May contain unhealthy oils',
      'Often heavily processed',
      'May contain allergens',
      'Quality varies greatly'
    ],
    benefits: [
      'Contains fiber',
      'Convenient snack',
      'May support blood sugar',
      'Contains antioxidants',
      'Portable nutrition'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: false, // Often contains oats
      allergen: ['gluten'] // Often contains oats
    }
  },
  'rice cake': {
    name: 'Rice Cake',
    aliases: ['rice cake', 'galette de riz', 'rice cracker', 'puffed rice cake'],
    category: 'Snack',
    concern: 'low',
    description: 'Light snack made from puffed rice. Low in calories.',
    healthEffects: [
      'Low in calories',
      'Gluten-free',
      'Contains some vitamins',
      'Quick energy source',
      'Contains some fiber'
    ],
    whyConsider: [
      'Often flavored with unhealthy additives',
      'Low nutritional density',
      'May contain salt',
      'Quality varies',
      'May contain allergens'
    ],
    benefits: [
      'Low calorie',
      'Gluten-free',
      'Quick snack',
      'Contains some vitamins',
      'Light and crunchy'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'popcorn': {
    name: 'Popcorn',
    aliases: ['popcorn', 'pop-corn', 'popped corn', 'maize popcorn'],
    category: 'Snack',
    concern: 'low',
    description: 'Whole grain snack. High in fiber when air-popped.',
    healthEffects: [
      'High in fiber',
      'Whole grain',
      'Contains antioxidants',
      'Contains some vitamins',
      'Low in calories when air-popped'
    ],
    whyConsider: [
      'Often prepared with unhealthy oils',
      'May contain added salt',
      'May contain artificial flavors',
      'May contain allergens',
      'Quality varies'
    ],
    benefits: [
      'High in fiber',
      'Whole grain',
      'Contains antioxidants',
      'Low calorie when plain',
      'Satisfying snack'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['corn']
    }
  },
  'pretzel': {
    name: 'Pretzel',
    aliases: ['pretzel', 'bretzel', 'pretzel stick', 'soft pretzel'],
    category: 'Snack',
    concern: 'moderate',
    description: 'Baked snack made from wheat dough. Often high in salt.',
    healthEffects: [
      'Contains some vitamins',
      'Contains some fiber',
      'Quick energy source',
      'Contains some minerals',
      'Low in fat'
    ],
    whyConsider: [
      'High in salt',
      'Contains gluten',
      'Often heavily processed',
      'May contain unhealthy oils',
      'May contain additives'
    ],
    benefits: [
      'Low in fat',
      'Contains some fiber',
      'Quick snack',
      'Contains some vitamins',
      'Satisfying texture'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: false,
      allergen: ['wheat', 'gluten']
    }
  },
  'crackers': {
    name: 'Crackers',
    aliases: ['crackers', 'craquelins', 'cracker', 'savory crackers'],
    category: 'Snack',
    concern: 'moderate',
    description: 'Thin baked snack. Often made from refined flour.',
    healthEffects: [
      'Contains some vitamins',
      'Contains some fiber',
      'Quick snack',
      'Contains some minerals',
      'Low in moisture'
    ],
    whyConsider: [
      'Often made from refined flour',
      'May contain unhealthy oils',
      'High in salt',
      'May contain additives',
      'Low nutritional density'
    ],
    benefits: [
      'Convenient snack',
      'Long shelf life',
      'Contains some nutrients',
      'Versatile for toppings',
      'Quick energy'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: false, // Often contains wheat
      allergen: ['wheat', 'gluten'] // Often
    }
  },
  'chips': {
    name: 'Chips',
    aliases: ['chips', 'frites', 'potato chips', 'corn chips', 'crisps'],
    category: 'Snack',
    concern: 'high',
    description: 'Fried or baked thin snack. Often high in unhealthy fats and salt.',
    healthEffects: [
      'Contains some vitamins',
      'Contains some fiber',
      'Quick energy source',
      'Contains some minerals',
      'Satisfying texture'
    ],
    whyConsider: [
      'Often fried in unhealthy oils',
      'High in salt',
      'May contain trans fats',
      'Low nutritional density',
      'May contain additives'
    ],
    benefits: [
      'Satisfying snack',
      'Contains some nutrients',
      'Convenient',
      'Quick energy',
      'Versatile flavors'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: [] // Varies by type
    }
  },
  'candy': {
    name: 'Candy',
    aliases: ['candy', 'bonbon', 'sweets', 'candies', 'sugary candy'],
    category: 'Snack',
    concern: 'very_high',
    description: 'Sweet confection high in sugar. May cause dental and metabolic issues.',
    healthEffects: [
      'High in sugar',
      'May cause blood sugar spikes',
      'May cause tooth decay',
      'May promote obesity',
      'Contains some vitamins'
    ],
    whyConsider: [
      'Very high in sugar',
      'May cause dental problems',
      'May promote obesity',
      'Low nutritional value',
      'May contain artificial colors'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cookies': {
    name: 'Cookies',
    aliases: ['cookies', 'biscuits', 'cookie', 'chocolate chip cookies'],
    category: 'Snack',
    concern: 'high',
    description: 'Sweet baked good. Often high in sugar and unhealthy fats.',
    healthEffects: [
      'Contains some vitamins',
      'Contains some minerals',
      'Provides quick energy',
      'Contains some fiber',
      'Satisfying texture'
    ],
    whyConsider: [
      'High in sugar',
      'Often contains unhealthy fats',
      'May contain trans fats',
      'Low nutritional density',
      'May contain additives'
    ],
    benefits: [
      'Satisfying treat',
      'Contains some nutrients',
      'Quick energy',
      'Versatile flavors',
      'Long shelf life'
    ],
    dietaryInfo: {
      vegan: false, // Often contains eggs/butter
      vegetarian: true,
      glutenFree: false, // Often contains wheat
      allergen: ['wheat', 'gluten', 'eggs'] // Often
    }
  },
  'cake': {
    name: 'Cake',
    aliases: ['cake', 'gâteau', 'birthday cake', 'chocolate cake'],
    category: 'Dessert',
    concern: 'high',
    description: 'Sweet baked good. Often high in sugar, fats, and calories.',
    healthEffects: [
      'Contains some vitamins',
      'Contains some minerals',
      'Provides energy',
      'Contains some protein',
      'Satisfying texture'
    ],
    whyConsider: [
      'Very high in sugar',
      'High in unhealthy fats',
      'High in calories',
      'Low nutritional density',
      'May contain additives'
    ],
    benefits: [
      'Satisfying treat',
      'Contains some nutrients',
      'Social food',
      'Versatile flavors',
      'Comfort food'
    ],
    dietaryInfo: {
      vegan: false, // Often contains eggs/dairy
      vegetarian: false, // Often contains gelatin
      glutenFree: false, // Often contains wheat
      allergen: ['wheat', 'gluten', 'eggs', 'milk'] // Often
    }
  },
  'ice cream': {
    name: 'Ice Cream',
    aliases: ['ice cream', 'crème glacée', 'frozen dessert', 'gelato'],
    category: 'Dessert',
    concern: 'high',
    description: 'Frozen dairy dessert. High in sugar and saturated fat.',
    healthEffects: [
      'Contains calcium',
      'Contains some protein',
      'Provides some vitamins',
      'Satisfying cold treat',
      'Contains some minerals'
    ],
    whyConsider: [
      'High in sugar',
      'High in saturated fat',
      'High in calories',
      'May contain additives',
      'May contain artificial flavors'
    ],
    benefits: [
      'Contains calcium',
      'Satisfying treat',
      'Contains some protein',
      'Cold therapy potential',
      'Comfort food'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy']
    }
  },
  'yogurt': {
    name: 'Yogurt',
    aliases: ['yogurt', 'yaourt', 'yoghurt', 'greek yogurt'],
    category: 'Dairy',
    concern: 'moderate',
    description: 'Fermented dairy product. Contains probiotics but may be high in sugar.',
    healthEffects: [
      'Contains probiotics',
      'High in protein',
      'Rich in calcium',
      'Contains vitamins',
      'May support gut health'
    ],
    whyConsider: [
      'May contain added sugars',
      'May contain artificial flavors',
      'Not suitable for dairy-free diets',
      'May contain lactose',
      'Quality varies greatly'
    ],
    benefits: [
      'Contains probiotics',
      'High in protein',
      'Rich in calcium',
      'May support gut health',
      'Contains vitamins'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy', 'lactose']
    }
  },
  'cottage cheese': {
    name: 'Cottage Cheese',
    aliases: ['cottage cheese', 'fromage blanc', 'cottage cheese', 'farmer cheese'],
    category: 'Dairy',
    concern: 'moderate',
    description: 'Fresh cheese high in protein. Low in calories but dairy allergen.',
    healthEffects: [
      'High in protein',
      'Low in calories',
      'Rich in calcium',
      'Contains probiotics',
      'Contains vitamins'
    ],
    whyConsider: [
      'Major allergen',
      'Not suitable for dairy-free diets',
      'May contain lactose',
      'May contain additives',
      'Quality varies'
    ],
    benefits: [
      'High in protein',
      'Low in calories',
      'Rich in calcium',
      'Contains probiotics',
      'Good for weight management'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy', 'lactose']
    }
  },
  'feta cheese': {
    name: 'Feta Cheese',
    aliases: ['feta cheese', 'feta', 'fromage feta', 'greek cheese'],
    category: 'Dairy',
    concern: 'moderate',
    description: 'Brined cheese. High in sodium but contains calcium and protein.',
    healthEffects: [
      'Contains calcium',
      'Contains protein',
      'Contains probiotics',
      'Contains some vitamins',
      'Contains some minerals'
    ],
    whyConsider: [
      'Very high in sodium',
      'Major allergen',
      'Not suitable for dairy-free diets',
      'May contain lactose',
      'Quality varies'
    ],
    benefits: [
      'Contains calcium',
      'Contains protein',
      'Contains probiotics',
      'Contains some vitamins',
      'Unique flavor'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy', 'lactose']
    }
  },
  'goat cheese': {
    name: 'Goat Cheese',
    aliases: ['goat cheese', 'fromage de chèvre', 'chevre cheese', 'goat milk cheese'],
    category: 'Dairy',
    concern: 'moderate',
    description: 'Cheese from goat milk. May be easier to digest than cow milk cheese.',
    healthEffects: [
      'Contains calcium',
      'Contains protein',
      'Contains probiotics',
      'May be easier to digest',
      'Contains some vitamins'
    ],
    whyConsider: [
      'Major allergen',
      'Not suitable for dairy-free diets',
      'May contain lactose',
      'May contain additives',
      'Quality varies'
    ],
    benefits: [
      'Contains calcium',
      'Contains protein',
      'Contains probiotics',
      'May be easier to digest',
      'Contains some vitamins'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy', 'lactose']
    }
  },
  'blue cheese': {
    name: 'Blue Cheese',
    aliases: ['blue cheese', 'fromage bleu', 'roquefort', 'gorgonzola'],
    category: 'Dairy',
    concern: 'moderate',
    description: 'Cheese with blue mold. Strong flavor but contains calcium and protein.',
    healthEffects: [
      'Contains calcium',
      'Contains protein',
      'Contains probiotics',
      'Contains some vitamins',
      'Contains some minerals'
    ],
    whyConsider: [
      'Major allergen',
      'Not suitable for dairy-free diets',
      'May contain lactose',
      'Strong flavor may be unpleasant',
      'Quality varies'
    ],
    benefits: [
      'Contains calcium',
      'Contains protein',
      'Contains probiotics',
      'Contains some vitamins',
      'Unique flavor profile'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy', 'lactose']
    }
  },
  'parmesan cheese': {
    name: 'Parmesan Cheese',
    aliases: ['parmesan cheese', 'parmesan', 'parmigiano reggiano', 'grana padano'],
    category: 'Dairy',
    concern: 'moderate',
    description: 'Hard aged cheese. High in calcium and low in lactose.',
    healthEffects: [
      'Very high in calcium',
      'High in protein',
      'Low in lactose',
      'Contains vitamins',
      'Aged for better digestibility'
    ],
    whyConsider: [
      'Major allergen',
      'Not suitable for dairy-free diets',
      'High in sodium',
      'May contain additives',
      'Quality varies'
    ],
    benefits: [
      'Very high in calcium',
      'High in protein',
      'Low in lactose',
      'Aged for better digestibility',
      'Contains vitamins'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['milk', 'dairy']
    }
  },
  'coffee': {
    name: 'Coffee',
    aliases: ['coffee', 'café', 'coffee beans', 'brewed coffee'],
    category: 'Beverage',
    concern: 'moderate',
    description: 'Brewed beverage from coffee beans. Contains caffeine and antioxidants.',
    healthEffects: [
      'Rich in antioxidants',
      'Contains caffeine',
      'May support mental alertness',
      'May support liver health',
      'Contains some vitamins'
    ],
    whyConsider: [
      'Contains caffeine (may cause anxiety)',
      'May cause sleep disruption',
      'May increase heart rate',
      'May cause digestive issues',
      'Quality varies greatly'
    ],
    benefits: [
      'Rich in antioxidants',
      'May support mental alertness',
      'May reduce type 2 diabetes risk',
      'May support liver health',
      'Contains some vitamins'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'tea': {
    name: 'Tea',
    aliases: ['tea', 'thé', 'black tea', 'green tea', 'herbal tea'],
    category: 'Beverage',
    concern: 'low',
    description: 'Brewed beverage from tea leaves. Rich in antioxidants.',
    healthEffects: [
      'Rich in antioxidants',
      'May contain caffeine',
      'May support heart health',
      'Contains flavonoids',
      'May support immune health'
    ],
    whyConsider: [
      'May contain caffeine',
      'Quality varies greatly',
      'May contain fluoride',
      'Some teas may interact with medications',
      'May contain pesticides'
    ],
    benefits: [
      'Rich in antioxidants',
      'May support heart health',
      'May support immune health',
      'Contains flavonoids',
      'Hydrating beverage'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'green tea': {
    name: 'Green Tea',
    aliases: ['green tea', 'thé vert', 'green tea leaves', 'sencha'],
    category: 'Beverage',
    concern: 'low',
    description: 'Unfermented tea. Rich in catechins and antioxidants.',
    healthEffects: [
      'Very high in catechins',
      'Rich in antioxidants',
      'May support metabolism',
      'May support heart health',
      'Contains L-theanine'
    ],
    whyConsider: [
      'Contains caffeine',
      'May contain fluoride',
      'Quality varies greatly',
      'May interact with medications',
      'May contain pesticides'
    ],
    benefits: [
      'Very high in antioxidants',
      'May support metabolism',
      'May support heart health',
      'Contains L-theanine for calm focus',
      'May support weight management'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'black tea': {
    name: 'Black Tea',
    aliases: ['black tea', 'thé noir', 'black tea leaves', 'english breakfast tea'],
    category: 'Beverage',
    concern: 'low',
    description: 'Fermented tea. Contains caffeine and theaflavins.',
    healthEffects: [
      'Contains theaflavins',
      'Rich in antioxidants',
      'Contains caffeine',
      'May support heart health',
      'May support oral health'
    ],
    whyConsider: [
      'Contains caffeine',
      'May contain fluoride',
      'Quality varies greatly',
      'May contain pesticides',
      'May interact with medications'
    ],
    benefits: [
      'Rich in antioxidants',
      'May support heart health',
      'Contains caffeine for alertness',
      'May support oral health',
      'Traditional beverage'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'herbal tea': {
    name: 'Herbal Tea',
    aliases: ['herbal tea', 'thé aux herbes', 'tisane', 'herbal infusion'],
    category: 'Beverage',
    concern: 'low',
    description: 'Caffeine-free infusion of herbs. May have various health benefits.',
    healthEffects: [
      'Caffeine-free',
      'May have calming effects',
      'May support digestion',
      'Contains antioxidants',
      'May support relaxation'
    ],
    whyConsider: [
      'Quality varies greatly',
      'May contain pesticides',
      'Some herbs may interact with medications',
      'May cause allergic reactions',
      'Effects vary by herb used'
    ],
    benefits: [
      'Caffeine-free',
      'May support relaxation',
      'May aid digestion',
      'Contains antioxidants',
      'Hydrating beverage'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'soda': {
    name: 'Soda',
    aliases: ['soda', 'soda pop', 'soft drink', 'cola', 'soda drink'],
    category: 'Beverage',
    concern: 'very_high',
    description: 'Carbonated sweet beverage. High in sugar and may contain caffeine.',
    healthEffects: [
      'High in sugar',
      'Contains phosphoric acid',
      'May contain caffeine',
      'May affect bone health',
      'May cause tooth decay'
    ],
    whyConsider: [
      'Very high in sugar',
      'Contains phosphoric acid (affects bones)',
      'May cause tooth decay',
      'May promote obesity',
      'Contains artificial flavors/colors'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'diet soda': {
    name: 'Diet Soda',
    aliases: ['diet soda', 'diet soft drink', 'diet cola', 'zero calorie soda'],
    category: 'Beverage',
    concern: 'high',
    description: 'Carbonated beverage with artificial sweeteners. May affect metabolism.',
    healthEffects: [
      'Contains artificial sweeteners',
      'Contains phosphoric acid',
      'May contain caffeine',
      'May affect gut bacteria',
      'May increase sweet cravings'
    ],
    whyConsider: [
      'Contains artificial sweeteners',
      'May disrupt gut microbiome',
      'May increase sweet cravings',
      'May affect metabolism',
      'Contains phosphoric acid'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'energy drink': {
    name: 'Energy Drink',
    aliases: ['energy drink', 'boisson énergétique', 'energy beverage', 'caffeinated drink'],
    category: 'Beverage',
    concern: 'very_high',
    description: 'Beverage with high caffeine and sugar. May cause health issues.',
    healthEffects: [
      'Very high in caffeine',
      'High in sugar',
      'May cause heart palpitations',
      'May cause anxiety',
      'May affect sleep'
    ],
    whyConsider: [
      'Excessive caffeine content',
      'High in sugar',
      'May cause cardiovascular issues',
      'May cause dehydration',
      'May interact with medications'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sports drink': {
    name: 'Sports Drink',
    aliases: ['sports drink', 'boisson sportive', 'electrolyte drink', 'hydration drink'],
    category: 'Beverage',
    concern: 'high',
    description: 'Beverage designed for rehydration. Often high in sugar.',
    healthEffects: [
      'Contains electrolytes',
      'May aid rehydration',
      'Contains some vitamins',
      'High in sugar',
      'May contain artificial colors'
    ],
    whyConsider: [
      'High in sugar',
      'Often unnecessary for average exercise',
      'May contain artificial additives',
      'May promote overconsumption',
      'Quality varies'
    ],
    benefits: [
      'Contains electrolytes',
      'May aid rehydration during intense exercise',
      'Contains some vitamins',
      'Convenient for athletes',
      'May replace lost minerals'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'juice drink': {
    name: 'Juice Drink',
    aliases: ['juice drink', 'boisson aux fruits', 'fruit drink', 'juice beverage'],
    category: 'Beverage',
    concern: 'high',
    description: 'Beverage made with some juice but often high in sugar.',
    healthEffects: [
      'Contains some vitamins',
      'Contains some fruit',
      'High in sugar',
      'May contain artificial flavors',
      'Low in fiber'
    ],
    whyConsider: [
      'High in added sugar',
      'Low in actual fruit content',
      'May contain artificial additives',
      'No fiber benefits',
      'May promote overconsumption'
    ],
    benefits: [
      'Contains some vitamins',
      'Hydrating',
      'Some fruit content',
      'May provide some antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'ketchup': {
    name: 'Ketchup',
    aliases: ['ketchup', 'ketchup', 'catsup', 'tomato sauce'],
    category: 'Condiment',
    concern: 'high',
    description: 'Tomato-based condiment. Often high in sugar and salt.',
    healthEffects: [
      'Contains lycopene',
      'Contains some vitamins',
      'High in sugar',
      'High in salt',
      'Contains some antioxidants'
    ],
    whyConsider: [
      'Very high in sugar',
      'High in salt',
      'Low nutritional density',
      'Often contains additives',
      'May contain high fructose corn syrup'
    ],
    benefits: [
      'Contains lycopene',
      'Contains some vitamins',
      'May provide some antioxidants',
      'Flavor enhancer'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'mustard': {
    name: 'Mustard',
    aliases: ['mustard', 'moutarde', 'yellow mustard', 'dijon mustard'],
    category: 'Condiment',
    concern: 'low',
    description: 'Spicy condiment from mustard seeds. Contains antioxidants.',
    healthEffects: [
      'Contains antioxidants',
      'May have antimicrobial properties',
      'Contains some vitamins',
      'Low in calories',
      'May aid digestion'
    ],
    whyConsider: [
      'May contain allergens',
      'Some people sensitive to mustard',
      'Quality varies',
      'May contain additives',
      'Strong flavor'
    ],
    benefits: [
      'Contains antioxidants',
      'May have antimicrobial properties',
      'Low in calories',
      'May aid digestion',
      'Contains some vitamins'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['mustard']
    }
  },
  'mayonnaise': {
    name: 'Mayonnaise',
    aliases: ['mayonnaise', 'mayo', 'mayonnaise', 'egg mayonnaise'],
    category: 'Condiment',
    concern: 'moderate',
    description: 'Emulsified condiment made with eggs and oil. High in fat.',
    healthEffects: [
      'Contains healthy fats',
      'Contains some vitamins',
      'Contains choline',
      'High in calories',
      'Contains eggs'
    ],
    whyConsider: [
      'High in fat and calories',
      'Contains eggs (allergen)',
      'Often made with low-quality oils',
      'May contain additives',
      'Not suitable for egg-free diets'
    ],
    benefits: [
      'Contains healthy fats',
      'Contains choline',
      'Contains some vitamins',
      'Emulsifier for foods',
      'Satisfying texture'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['eggs']
    }
  },
  'salad dressing': {
    name: 'Salad Dressing',
    aliases: ['salad dressing', 'vinaigrette', 'dressing', 'salad sauce'],
    category: 'Condiment',
    concern: 'moderate',
    description: 'Sauce for salads. Often high in fat and calories.',
    healthEffects: [
      'May contain healthy fats',
      'Contains some vitamins',
      'May aid nutrient absorption',
      'Often high in calories',
      'May contain preservatives'
    ],
    whyConsider: [
      'Often high in fat and calories',
      'May contain added sugars',
      'May contain preservatives',
      'Quality varies greatly',
      'May contain allergens'
    ],
    benefits: [
      'May aid nutrient absorption',
      'Contains some vitamins',
      'Makes vegetables more palatable',
      'May contain healthy fats',
      'Adds flavor to meals'
    ],
    dietaryInfo: {
      vegan: false, // Often contains dairy/eggs
      vegetarian: false, // Often contains gelatin
      glutenFree: true,
      allergen: [] // Varies by type
    }
  },
  'soy sauce': {
    name: 'Soy Sauce',
    aliases: ['soy sauce', 'sauce soja', 'soya sauce', 'shoyu'],
    category: 'Condiment',
    concern: 'moderate',
    description: 'Fermented soy condiment. High in sodium but contains umami.',
    healthEffects: [
      'Contains antioxidants',
      'Contains some vitamins',
      'May support heart health',
      'High in sodium',
      'Contains some minerals'
    ],
    whyConsider: [
      'Very high in sodium',
      'Contains wheat (often)',
      'May contain preservatives',
      'Quality varies greatly',
      'May contain MSG'
    ],
    benefits: [
      'Contains antioxidants',
      'May support heart health',
      'Contains some vitamins',
      'Umami flavor enhancer',
      'Fermented food'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: false,
      allergen: ['soy', 'wheat']
    }
  },
  'hot sauce': {
    name: 'Hot Sauce',
    aliases: ['hot sauce', 'sauce piquante', 'hot pepper sauce', 'chili sauce'],
    category: 'Condiment',
    concern: 'low',
    description: 'Spicy condiment made with chili peppers. May aid metabolism.',
    healthEffects: [
      'Contains capsaicin',
      'May boost metabolism',
      'Rich in antioxidants',
      'May support heart health',
      'Low in calories'
    ],
    whyConsider: [
      'Very spicy',
      'May cause digestive irritation',
      'May interact with medications',
      'Quality varies',
      'May contain additives'
    ],
    benefits: [
      'May boost metabolism',
      'Rich in antioxidants',
      'May support heart health',
      'Low in calories',
      'May reduce pain'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'barbecue sauce': {
    name: 'Barbecue Sauce',
    aliases: ['barbecue sauce', 'sauce barbecue', 'bbq sauce', 'barbeque sauce'],
    category: 'Condiment',
    concern: 'high',
    description: 'Sweet and tangy condiment. Often high in sugar and salt.',
    healthEffects: [
      'Contains some antioxidants',
      'Contains some vitamins',
      'High in sugar',
      'High in salt',
      'May contain preservatives'
    ],
    whyConsider: [
      'Very high in sugar',
      'High in salt',
      'Low nutritional density',
      'May contain additives',
      'May contain high fructose corn syrup'
    ],
    benefits: [
      'Contains some antioxidants',
      'Contains some vitamins',
      'Flavor enhancer',
      'May contain some spices'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'relish': {
    name: 'Relish',
    aliases: ['relish', 'relish', 'pickle relish', 'sweet relish'],
    category: 'Condiment',
    concern: 'moderate',
    description: 'Chopped pickle condiment. Often high in sugar and salt.',
    healthEffects: [
      'Contains some vitamins',
      'May contain probiotics',
      'High in sugar',
      'High in salt',
      'Contains some fiber'
    ],
    whyConsider: [
      'High in sugar',
      'High in salt',
      'May contain artificial flavors',
      'Low nutritional density',
      'May contain preservatives'
    ],
    benefits: [
      'Contains some vitamins',
      'May contain probiotics',
      'Contains some fiber',
      'Adds flavor variety',
      'Low in calories'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'honey mustard': {
    name: 'Honey Mustard',
    aliases: ['honey mustard', 'moutarde au miel', 'honey mustard sauce'],
    category: 'Condiment',
    concern: 'moderate',
    description: 'Sweet mustard condiment. High in sugar but contains antioxidants.',
    healthEffects: [
      'Contains antioxidants from mustard',
      'Contains some vitamins',
      'High in sugar',
      'May contain probiotics',
      'Contains some minerals'
    ],
    whyConsider: [
      'High in sugar',
      'May contain allergens',
      'Quality varies',
      'May contain additives',
      'Not suitable for mustard-free diets'
    ],
    benefits: [
      'Contains antioxidants',
      'Contains some vitamins',
      'May contain probiotics',
      'Sweet and tangy flavor',
      'Contains some minerals'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['mustard']
    }
  },
  'peanut butter': {
    name: 'Peanut Butter',
    aliases: ['peanut butter', 'beurre de cacahuètes', 'peanut butter', 'groundnut butter'],
    category: 'Spread',
    concern: 'moderate',
    description: 'Ground peanut spread. High in healthy fats but major allergen.',
    healthEffects: [
      'High in healthy fats',
      'Good protein source',
      'Contains fiber',
      'Contains some vitamins',
      'Major allergen'
    ],
    whyConsider: [
      'Major allergen - can cause anaphylaxis',
      'High in calories',
      'Often contains added sugar',
      'May contain trans fats',
      'Quality varies greatly'
    ],
    benefits: [
      'High in healthy fats',
      'Good protein source',
      'Contains fiber',
      'Contains some vitamins',
      'May support heart health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['peanuts']
    }
  },
  'jam': {
    name: 'Jam',
    aliases: ['jam', 'confiture', 'fruit jam', 'preserves'],
    category: 'Spread',
    concern: 'high',
    description: 'Sweet fruit spread. High in sugar but contains some fruit.',
    healthEffects: [
      'Contains some fruit',
      'Contains some vitamins',
      'High in sugar',
      'Contains some fiber',
      'May contain pectin'
    ],
    whyConsider: [
      'Very high in sugar',
      'Low fruit content compared to sugar',
      'May contain artificial flavors',
      'May cause blood sugar spikes',
      'Often overconsumed'
    ],
    benefits: [
      'Contains some fruit',
      'Contains some vitamins',
      'Contains some fiber',
      'Natural pectin',
      'Spread for whole grains'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'tahini': {
    name: 'Tahini',
    aliases: ['tahini', 'tahini', 'sesame paste', 'sesame butter'],
    category: 'Spread',
    concern: 'low',
    description: 'Sesame seed paste. Rich in minerals and healthy fats.',
    healthEffects: [
      'High in calcium',
      'Rich in healthy fats',
      'Contains antioxidants',
      'Good source of vitamins',
      'Contains sesamin'
    ],
    whyConsider: [
      'Major allergen',
      'High in calories',
      'Strong flavor',
      'Quality varies',
      'May contain additives'
    ],
    benefits: [
      'High in calcium',
      'Rich in healthy fats',
      'Contains antioxidants',
      'Good vitamin source',
      'May support bone health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['sesame']
    }
  },
  'applesauce': {
    name: 'Applesauce',
    aliases: ['applesauce', 'compote de pommes', 'apple sauce', 'unsweetened applesauce'],
    category: 'Spread',
    concern: 'moderate',
    description: 'Pureed apples. May contain added sugar.',
    healthEffects: [
      'Contains some vitamins',
      'Contains some fiber',
      'May contain added sugar',
      'Contains some antioxidants',
      'Low in calories'
    ],
    whyConsider: [
      'Often contains added sugar',
      'Low nutritional density',
      'May contain preservatives',
      'Quality varies',
      'Often overconsumed'
    ],
    benefits: [
      'Contains vitamins',
      'Contains fiber',
      'Contains antioxidants',
      'Low in calories',
      'Easy to digest'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'salsa': {
    name: 'Salsa',
    aliases: ['salsa', 'salsa', 'pico de gallo', 'fresh salsa'],
    category: 'Condiment',
    concern: 'low',
    description: 'Fresh tomato-based condiment. Rich in vitamins and low in calories.',
    healthEffects: [
      'Rich in vitamin C',
      'Contains lycopene',
      'Low in calories',
      'Contains some vitamins',
      'May contain probiotics'
    ],
    whyConsider: [
      'May contain allergens',
      'Quality varies greatly',
      'May contain additives',
      'Perishable',
      'Spicy varieties may cause issues'
    ],
    benefits: [
      'Rich in vitamin C',
      'Contains lycopene',
      'Low in calories',
      'Contains antioxidants',
      'May contain probiotics'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'pesto': {
    name: 'Pesto',
    aliases: ['pesto', 'pesto', 'basil pesto', 'pesto sauce'],
    category: 'Condiment',
    concern: 'moderate',
    description: 'Basil-based sauce with pine nuts and cheese. High in fat.',
    healthEffects: [
      'Contains antioxidants from basil',
      'Contains healthy fats',
      'Rich in vitamins',
      'Contains some protein',
      'High in calories'
    ],
    whyConsider: [
      'High in fat and calories',
      'Contains cheese (dairy)',
      'Contains nuts (allergens)',
      'May contain additives',
      'Quality varies'
    ],
    benefits: [
      'Contains antioxidants',
      'Rich in vitamins',
      'Contains healthy fats',
      'Contains some protein',
      'Flavorful addition'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['nuts', 'dairy']
    }
  },
  'guacamole': {
    name: 'Guacamole',
    aliases: ['guacamole', 'guacamole', 'avocado dip', 'fresh guacamole'],
    category: 'Condiment',
    concern: 'low',
    description: 'Avocado-based dip. Rich in healthy fats and nutrients.',
    healthEffects: [
      'Rich in healthy fats',
      'High in fiber',
      'Contains potassium',
      'Rich in antioxidants',
      'Contains vitamins'
    ],
    whyConsider: [
      'High in calories',
      'Perishable',
      'May contain allergens',
      'Quality varies',
      'May brown quickly'
    ],
    benefits: [
      'Rich in healthy fats',
      'High in fiber',
      'Contains potassium',
      'Rich in antioxidants',
      'Supports heart health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'tzatziki': {
    name: 'Tzatziki',
    aliases: ['tzatziki', 'tzatziki', 'yogurt cucumber sauce', 'greek yogurt dip'],
    category: 'Condiment',
    concern: 'moderate',
    description: 'Greek yogurt-based sauce with cucumber. Contains probiotics.',
    healthEffects: [
      'Contains probiotics',
      'Contains some protein',
      'Low in calories',
      'Contains some vitamins',
      'May aid digestion'
    ],
    whyConsider: [
      'Contains dairy',
      'May contain garlic (strong flavor)',
      'Quality varies',
      'Perishable',
      'May contain additives'
    ],
    benefits: [
      'Contains probiotics',
      'Contains protein',
      'May aid digestion',
      'Low in calories',
      'Refreshing flavor'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      allergen: ['dairy']
    }
  },
  'mono and diglycerides': {
    name: 'Mono and Diglycerides',
    aliases: ['mono and diglycerides', 'monoglycerides', 'diglycerides', 'emulsifiers', 'e471'],
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifiers made from fats. Help mix oil and water in processed foods.',
    healthEffects: [
      'Generally recognized as safe',
      'May affect gut bacteria',
      'Can cause digestive issues',
      'Often from processed fats',
      'May promote inflammation'
    ],
    whyConsider: [
      'Often from hydrogenated fats',
      'May disrupt gut microbiome',
      'Common in processed foods',
      'No nutritional value',
      'May cause digestive discomfort'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true, // Usually from plant fats
      vegetarian: true,
      glutenFree: true
    }
  },
  'polysorbate 60': {
    name: 'Polysorbate 60',
    aliases: ['polysorbate 60', 'polysorbate', 'emulsifier e435', 'tween 60'],
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Synthetic emulsifier derived from sorbitol. Helps mix ingredients.',
    healthEffects: [
      'May disrupt gut bacteria',
      'Can cause digestive issues',
      'May increase intestinal permeability',
      'Synthetic compound',
      'May affect nutrient absorption'
    ],
    whyConsider: [
      'Synthetic emulsifier',
      'May affect gut health',
      'Common in processed foods',
      'May cause allergic reactions',
      'No nutritional value'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sodium aluminum phosphate': {
    name: 'Sodium Aluminum Phosphate',
    aliases: ['sodium aluminum phosphate', 'salp', 'leavening agent', 'baking powder'],
    category: 'Leavening Agent',
    concern: 'moderate',
    description: 'Leavening agent containing aluminum. Used in baked goods.',
    healthEffects: [
      'Contains aluminum',
      'May affect nervous system',
      'Can accumulate in body',
      'May affect bone health',
      'Linked to Alzheimer\'s concerns'
    ],
    whyConsider: [
      'Contains aluminum',
      'May be neurotoxic',
      'Accumulates in body over time',
      'Better alternatives exist',
      'Common in processed foods'
    ],
    benefits: [
      'Helps baked goods rise',
      'Improves texture',
      'Stable leavening'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'calcium propionate': {
    name: 'Calcium Propionate',
    aliases: ['calcium propionate', 'calcium propanoate', 'preservative e282', 'mold inhibitor'],
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative made from propionic acid. Prevents mold growth.',
    healthEffects: [
      'Generally recognized as safe',
      'May cause digestive issues',
      'Can affect gut bacteria',
      'May cause allergic reactions',
      'Synthetic preservative'
    ],
    whyConsider: [
      'Synthetic preservative',
      'May affect gut microbiome',
      'Common in bread and baked goods',
      'May cause behavioral issues in sensitive individuals',
      'No nutritional value'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sodium metabisulfite': {
    name: 'Sodium Metabisulfite',
    aliases: ['sodium metabisulfite', 'sodium metabisulphite', 'preservative e223', 'sulfite'],
    category: 'Preservative',
    concern: 'high',
    description: 'Sulfite preservative. Can cause severe reactions in sensitive individuals.',
    healthEffects: [
      'Can cause severe allergic reactions',
      'May trigger asthma attacks',
      'Can cause anaphylaxis',
      'May cause digestive issues',
      'Strong antioxidant properties'
    ],
    whyConsider: [
      'Can cause severe allergic reactions',
      'Triggers asthma in sensitive people',
      'Must be declared on labels',
      'Common in wine and processed foods',
      'May cause flushing and low blood pressure'
    ],
    benefits: [
      'Prevents oxidation',
      'Preserves color',
      'Antimicrobial properties'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['sulfites']
    }
  },
  'artificial color red 40': {
    name: 'Red 40',
    aliases: ['red 40', 'allura red', 'artificial red 40', 'e129', 'fd&c red no. 40'],
    category: 'Artificial Color',
    concern: 'very_high',
    description: 'Synthetic red food dye. Linked to various health concerns.',
    healthEffects: [
      'May cause hyperactivity in children',
      'Linked to cancer concerns',
      'May cause allergic reactions',
      'May affect thyroid function',
      'Petroleum-derived'
    ],
    whyConsider: [
      'Synthetic petroleum dye',
      'May cause behavioral issues',
      'Linked to cancer in animal studies',
      'May affect thyroid health',
      'Banned in some countries'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'artificial color yellow 5': {
    name: 'Yellow 5',
    aliases: ['yellow 5', 'tartrazine', 'artificial yellow 5', 'e102', 'fd&c yellow no. 5'],
    category: 'Artificial Color',
    concern: 'very_high',
    description: 'Synthetic yellow food dye. May cause allergic reactions and hyperactivity.',
    healthEffects: [
      'May cause hyperactivity in children',
      'Can cause allergic reactions',
      'May cause hives and swelling',
      'Linked to cancer concerns',
      'Petroleum-derived'
    ],
    whyConsider: [
      'Synthetic petroleum dye',
      'May cause severe allergic reactions',
      'Linked to behavioral issues',
      'May affect thyroid function',
      'Banned in some countries'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['artificial colors']
    }
  },
  'artificial color blue 1': {
    name: 'Blue 1',
    aliases: ['blue 1', 'brilliant blue', 'artificial blue 1', 'e133', 'fd&c blue no. 1'],
    category: 'Artificial Color',
    concern: 'very_high',
    description: 'Synthetic blue food dye. May affect brain development.',
    healthEffects: [
      'May affect brain development',
      'May cause allergic reactions',
      'Linked to cancer concerns',
      'Petroleum-derived',
      'May cause hyperactivity'
    ],
    whyConsider: [
      'Synthetic petroleum dye',
      'May affect neurological development',
      'Linked to behavioral issues',
      'May cause allergic reactions',
      'Better natural alternatives exist'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sucrose': {
    name: 'Sucrose',
    aliases: ['sucrose', 'table sugar', 'white sugar', 'cane sugar', 'beet sugar'],
    category: 'Sweetener',
    concern: 'high',
    description: 'Refined white sugar. High consumption linked to various health issues.',
    healthEffects: [
      'Can cause blood sugar spikes',
      'May contribute to weight gain',
      'Linked to increased risk of diabetes',
      'Can cause tooth decay',
      'May increase inflammation'
    ],
    whyConsider: [
      'High sugar content increases calorie density',
      'Provides empty calories with no nutrients',
      'Can lead to sugar addiction',
      'May contribute to metabolic syndrome',
      'Often hidden in processed foods'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'high fructose corn syrup': {
    name: 'High Fructose Corn Syrup',
    aliases: ['high fructose corn syrup', 'hfcs', 'corn syrup', 'fructose corn syrup', 'isoglucose'],
    category: 'Sweetener',
    concern: 'very_high',
    description: 'Highly processed sweetener from corn. Linked to obesity and metabolic issues.',
    healthEffects: [
      'May cause fatty liver disease',
      'Linked to obesity and diabetes',
      'Can cause metabolic syndrome',
      'May increase uric acid levels',
      'Highly addictive'
    ],
    whyConsider: [
      'Major contributor to obesity epidemic',
      'Highly processed from genetically modified corn',
      'May damage liver',
      'Linked to heart disease',
      'Often overconsumed'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'brown sugar': {
    name: 'Brown Sugar',
    aliases: ['brown sugar', 'brown sugar', 'raw sugar', 'demerara sugar'],
    category: 'Sweetener',
    concern: 'high',
    description: 'Partially refined sugar with molasses. Still high in sugar content.',
    healthEffects: [
      'Contains some minerals from molasses',
      'Can cause blood sugar spikes',
      'May contribute to weight gain',
      'Can cause tooth decay',
      'High in calories'
    ],
    whyConsider: [
      'Still high in sugar content',
      'May contain contaminants',
      'Not significantly healthier than white sugar',
      'Can lead to sugar addiction',
      'Often overconsumed'
    ],
    benefits: [
      'Contains small amounts of minerals',
      'May have slightly lower glycemic index',
      'Contains some antioxidants'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'dextrose': {
    name: 'Dextrose',
    aliases: ['dextrose', 'glucose', 'd-glucose', 'corn sugar'],
    category: 'Sweetener',
    concern: 'high',
    description: 'Simple sugar from corn. Quickly absorbed and may spike blood sugar.',
    healthEffects: [
      'High glycemic index',
      'Can cause rapid blood sugar spikes',
      'May contribute to insulin resistance',
      'Often from genetically modified corn',
      'Quick energy source'
    ],
    whyConsider: [
      'Highly refined sugar',
      'Spikes blood sugar quickly',
      'Often from genetically modified sources',
      'No nutritional benefits',
      'May contribute to metabolic issues'
    ],
    benefits: [
      'Quick energy source',
      'May help with hypoglycemia',
      'Used in sports nutrition'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'maltose': {
    name: 'Maltose',
    aliases: ['maltose', 'malt sugar', 'maltobiose', 'maltose syrup'],
    category: 'Sweetener',
    concern: 'moderate',
    description: 'Sugar from starch hydrolysis. Less sweet than sucrose.',
    healthEffects: [
      'Lower glycemic index than sucrose',
      'May cause digestive issues',
      'Can feed harmful gut bacteria',
      'Often highly processed',
      'No nutritional value'
    ],
    whyConsider: [
      'Highly refined carbohydrate',
      'May cause digestive discomfort',
      'Often from genetically modified sources',
      'Low nutritional value',
      'May contribute to overeating'
    ],
    benefits: [
      'Lower glycemic response than sucrose',
      'Natural fermentation product',
      'Used in brewing'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'erythritol': {
    name: 'Erythritol',
    aliases: ['erythritol', 'sugar alcohol', 'zero calorie sweetener', 'e968'],
    category: 'Sugar Alcohol',
    concern: 'low',
    description: 'Sugar alcohol from fermentation. Low calorie and may not cause digestive issues.',
    healthEffects: [
      'Low calorie sweetener',
      'May not cause digestive issues',
      'Does not raise blood sugar',
      'May have antioxidant properties',
      'Fermented from glucose'
    ],
    whyConsider: [
      'May cause digestive issues in some people',
      'May have laxative effect in large amounts',
      'Quality varies by source',
      'May be expensive',
      'Not as sweet as sugar'
    ],
    benefits: [
      'Zero calorie sweetener',
      'Does not affect blood sugar',
      'May not cause tooth decay',
      'May have prebiotic effects',
      'Natural fermentation product'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'xylitol': {
    name: 'Xylitol',
    aliases: ['xylitol', 'sugar alcohol', 'birch sugar', 'e967'],
    category: 'Sugar Alcohol',
    concern: 'low',
    description: 'Sugar alcohol from birch trees. May prevent tooth decay.',
    healthEffects: [
      'May prevent tooth decay',
      'Low calorie sweetener',
      'Does not raise blood sugar significantly',
      'May have prebiotic effects',
      'Can cause digestive issues'
    ],
    whyConsider: [
      'Can cause digestive issues in large amounts',
      'Toxic to dogs',
      'May have laxative effect',
      'Not as sweet as sugar',
      'May be expensive'
    ],
    benefits: [
      'May prevent cavities',
      'Low calorie sweetener',
      'Does not affect blood sugar much',
      'May have prebiotic effects',
      'Natural sweetener'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sorbitol': {
    name: 'Sorbitol',
    aliases: ['sorbitol', 'sugar alcohol', 'glucitol', 'e420'],
    category: 'Sugar Alcohol',
    concern: 'moderate',
    description: 'Sugar alcohol that may cause digestive issues. Used as sweetener and thickener.',
    healthEffects: [
      'Can cause digestive issues',
      'May have laxative effect',
      'Low calorie sweetener',
      'Does not raise blood sugar much',
      'May ferment in gut'
    ],
    whyConsider: [
      'Can cause bloating and gas',
      'May cause diarrhea in large amounts',
      'Femented by gut bacteria',
      'Not as sweet as sugar',
      'May cause abdominal pain'
    ],
    benefits: [
      'Low calorie sweetener',
      'Does not affect blood sugar significantly',
      'May have prebiotic effects',
      'Used as thickener',
      'Natural sugar alcohol'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'mannitol': {
    name: 'Mannitol',
    aliases: ['mannitol', 'sugar alcohol', 'mannite', 'e421'],
    category: 'Sugar Alcohol',
    concern: 'moderate',
    description: 'Sugar alcohol that may cause digestive issues. Used as sweetener.',
    healthEffects: [
      'Can cause digestive issues',
      'May have laxative effect',
      'Low calorie sweetener',
      'Does not raise blood sugar much',
      'Crystallizes well'
    ],
    whyConsider: [
      'Can cause bloating and gas',
      'May cause diarrhea in large amounts',
      'Not as sweet as sugar',
      'May cause abdominal pain',
      'Femented by gut bacteria'
    ],
    benefits: [
      'Low calorie sweetener',
      'Does not affect blood sugar significantly',
      'Used in medications',
      'Good for sugar-free chewing gum',
      'Natural sugar alcohol'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'citric acid': {
    name: 'Citric Acid',
    aliases: ['citric acid', 'acide citrique', 'e330', 'sour salt'],
    category: 'Acidulant',
    concern: 'low',
    description: 'Natural acid from citrus fruits. Used as preservative and flavor enhancer.',
    healthEffects: [
      'Natural preservative',
      'May help with mineral absorption',
      'Can affect tooth enamel',
      'May cause digestive upset in high doses',
      'Antioxidant properties'
    ],
    whyConsider: [
      'May cause tooth erosion',
      'Can cause stomach upset',
      'Often synthetic in processed foods',
      'May mask poor quality ingredients',
      'High concentrations irritating'
    ],
    benefits: [
      'Natural preservative',
      'May help with iron absorption',
      'Antioxidant properties',
      'Enhances flavor',
      'Used in cleaning'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'acetic acid': {
    name: 'Acetic Acid',
    aliases: ['acetic acid', 'vinegar acid', 'ethanoic acid', 'e260'],
    category: 'Acidulant',
    concern: 'low',
    description: 'Main acid in vinegar. Used as preservative and flavoring.',
    healthEffects: [
      'Natural preservative',
      'May help control blood sugar',
      'Antimicrobial properties',
      'May aid digestion',
      'Can affect tooth enamel'
    ],
    whyConsider: [
      'Can cause tooth erosion',
      'Strong acidic taste',
      'May cause digestive upset',
      'Irritating in high concentrations',
      'May interact with medications'
    ],
    benefits: [
      'Natural preservative',
      'May help with blood sugar control',
      'Antimicrobial properties',
      'May aid digestion',
      'Used in pickling'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'lactic acid': {
    name: 'Lactic Acid',
    aliases: ['lactic acid', 'acide lactique', 'e270', 'milk acid'],
    category: 'Acidulant',
    concern: 'low',
    description: 'Acid produced during fermentation. Used as preservative and flavoring.',
    healthEffects: [
      'Produced during fermentation',
      'May support gut health',
      'Natural preservative',
      'Can affect tooth enamel',
      'May cause digestive upset'
    ],
    whyConsider: [
      'Can cause tooth erosion',
      'May cause digestive upset in sensitive people',
      'Strong acidic taste',
      'May be synthetic in processed foods',
      'Quality varies'
    ],
    benefits: [
      'Natural fermentation product',
      'May support gut health',
      'Preservative properties',
      'Used in yogurt production',
      'May have antimicrobial effects'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'malic acid': {
    name: 'Malic Acid',
    aliases: ['malic acid', 'acide malique', 'e296', 'apple acid'],
    category: 'Acidulant',
    concern: 'low',
    description: 'Natural acid from apples. Used as flavor enhancer and preservative.',
    healthEffects: [
      'Natural from apples',
      'May support energy production',
      'Used in Krebs cycle',
      'Can affect tooth enamel',
      'May cause digestive upset'
    ],
    whyConsider: [
      'Can cause tooth erosion',
      'May cause digestive upset',
      'Strong sour taste',
      'May be synthetic in processed foods',
      'Quality varies'
    ],
    benefits: [
      'Natural from fruits',
      'May support energy metabolism',
      'Enhances fruit flavors',
      'Used in supplements',
      'Natural preservative'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'fumaric acid': {
    name: 'Fumaric Acid',
    aliases: ['fumaric acid', 'acide fumarique', 'e297', 'donitic acid'],
    category: 'Acidulant',
    concern: 'low',
    description: 'Natural acid used as flavor enhancer and preservative.',
    healthEffects: [
      'Natural acidulant',
      'Used in cellular energy production',
      'Can affect tooth enamel',
      'May cause digestive upset',
      'Synthetic versions available'
    ],
    whyConsider: [
      'Can cause tooth erosion',
      'May cause digestive upset',
      'Strong sour taste',
      'May be synthetic',
      'Limited natural sources'
    ],
    benefits: [
      'Natural acidulant',
      'Used in metabolism',
      'Enhances tart flavors',
      'Preservative properties',
      'Used in supplements'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sodium bicarbonate': {
    name: 'Sodium Bicarbonate',
    aliases: ['sodium bicarbonate', 'baking soda', 'bicarbonate of soda', 'e500'],
    category: 'Leavening Agent',
    concern: 'low',
    description: 'Baking soda. Used as leavening agent and pH regulator.',
    healthEffects: [
      'High in sodium',
      'May affect acid-base balance',
      'Can cause alkalosis in high doses',
      'May cause digestive upset',
      'Natural antacid'
    ],
    whyConsider: [
      'Contributes to sodium intake',
      'Aluminum-free versions preferred',
      'May interact with medications',
      'Can be irritating if inhaled',
      'Quality varies'
    ],
    benefits: [
      'Natural antacid',
      'Can help with indigestion',
      'Used in baking for texture',
      'Environmentally friendly',
      'Inexpensive'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'ammonium bicarbonate': {
    name: 'Ammonium Bicarbonate',
    aliases: ['ammonium bicarbonate', 'ammonium carbonate', 'baking ammonia', 'e503'],
    category: 'Leavening Agent',
    concern: 'moderate',
    description: 'Leavening agent that releases ammonia gas. May leave residue.',
    healthEffects: [
      'Releases ammonia during baking',
      'May leave ammonia residue',
      'Can cause digestive upset',
      'May affect respiratory system',
      'Synthetic compound'
    ],
    whyConsider: [
      'Releases ammonia gas',
      'May leave chemical residue',
      'Can cause respiratory irritation',
      'May affect sensitive individuals',
      'Better alternatives exist'
    ],
    benefits: [
      'Effective leavening agent',
      'Leaves no aftertaste',
      'Used in crisp cookies',
      'Natural compound'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sodium phosphate': {
    name: 'Sodium Phosphate',
    aliases: ['sodium phosphate', 'phosphate', 'sodium orthophosphate', 'e339'],
    category: 'Mineral',
    concern: 'high',
    description: 'Phosphorus compound used in processed foods. May affect kidney health.',
    healthEffects: [
      'May affect calcium absorption',
      'Can weaken bones',
      'May damage kidneys',
      'Linked to cardiovascular issues',
      'May cause digestive problems'
    ],
    whyConsider: [
      'May lead to phosphorus overload',
      'Often added in excessive amounts',
      'May affect bone density',
      'Can cause electrolyte imbalance',
      'Common in processed meats and sodas'
    ],
    benefits: [
      'Essential mineral',
      'Supports bone health',
      'Used in energy metabolism',
      'Supports DNA synthesis'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'tripotassium phosphate': {
    name: 'Tripotassium Phosphate',
    aliases: ['tripotassium phosphate', 'potassium phosphate', 'tkp', 'e340'],
    category: 'Mineral',
    concern: 'moderate',
    description: 'Potassium salt used as emulsifier and stabilizer in processed foods.',
    healthEffects: [
      'Provides potassium',
      'May affect mineral balance',
      'Can cause digestive upset',
      'May affect heart rhythm in high doses',
      'Often added to processed foods'
    ],
    whyConsider: [
      'May disrupt mineral balance',
      'Often added unnecessarily',
      'Can cause gastrointestinal issues',
      'Quality varies',
      'May interact with medications'
    ],
    benefits: [
      'Provides potassium',
      'May support blood pressure',
      'Used as emulsifier',
      'Supports nerve function'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'calcium carbonate': {
    name: 'Calcium Carbonate',
    aliases: ['calcium carbonate', 'limestone', 'chalk', 'e170'],
    category: 'Mineral',
    concern: 'low',
    description: 'Calcium supplement and anti-caking agent. May affect calcium absorption.',
    healthEffects: [
      'Provides calcium',
      'May affect stomach acid',
      'Can cause constipation',
      'May reduce iron absorption',
      'Used as antacid'
    ],
    whyConsider: [
      'May cause constipation',
      'Can affect mineral absorption',
      'May cause stomach upset',
      'Quality varies greatly',
      'May contain contaminants'
    ],
    benefits: [
      'Provides bioavailable calcium',
      'Supports bone health',
      'Used as antacid',
      'Inexpensive calcium source',
      'Natural mineral'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'magnesium carbonate': {
    name: 'Magnesium Carbonate',
    aliases: ['magnesium carbonate', 'magnesite', 'magnesium carbonate hydroxide', 'e504'],
    category: 'Mineral',
    concern: 'low',
    description: 'Magnesium supplement and anti-caking agent.',
    healthEffects: [
      'Provides magnesium',
      'May cause digestive upset',
      'Can act as antacid',
      'May cause diarrhea in high doses',
      'Used as laxative'
    ],
    whyConsider: [
      'May cause digestive issues',
      'Can affect mineral absorption',
      'Quality varies',
      'May interact with medications',
      'May contain contaminants'
    ],
    benefits: [
      'Provides magnesium',
      'Supports relaxation',
      'Used as antacid',
      'May support digestion',
      'Natural mineral'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'zinc oxide': {
    name: 'Zinc Oxide',
    aliases: ['zinc oxide', 'zinc white', 'chinese white', 'e523'],
    category: 'Mineral',
    concern: 'moderate',
    description: 'Zinc supplement. May be poorly absorbed and cause digestive issues.',
    healthEffects: [
      'Provides zinc',
      'Poorly absorbed form',
      'May cause nausea',
      'Can cause digestive upset',
      'May affect copper absorption'
    ],
    whyConsider: [
      'Poor bioavailability',
      'May cause stomach upset',
      'Can affect mineral balance',
      'Quality varies',
      'Better forms exist'
    ],
    benefits: [
      'Provides zinc',
      'Supports immune health',
      'Inexpensive',
      'Used in supplements',
      'Natural mineral'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'vitamin a palmitate': {
    name: 'Vitamin A Palmitate',
    aliases: ['vitamin a palmitate', 'retinyl palmitate', 'vitamin a acetate'],
    category: 'Vitamin',
    concern: 'moderate',
    description: 'Synthetic vitamin A. May be toxic in high doses.',
    healthEffects: [
      'Supports vision and immune health',
      'Can accumulate in body',
      'May be toxic in high doses',
      'Synthetic form',
      'May affect liver'
    ],
    whyConsider: [
      'Can be toxic in excess',
      'Synthetic form may be less effective',
      'May interact with medications',
      'Quality varies',
      'Natural forms preferable'
    ],
    benefits: [
      'Supports vision health',
      'Supports immune function',
      'Supports skin health',
      'Essential vitamin',
      'Supports reproduction'
    ],
    dietaryInfo: {
      vegan: false, // Usually from palm oil
      vegetarian: true,
      glutenFree: true
    }
  },
  'vitamin d3': {
    name: 'Vitamin D3',
    aliases: ['vitamin d3', 'cholecalciferol', 'vitamin d', 'colecalciferol'],
    category: 'Vitamin',
    concern: 'low',
    description: 'Essential vitamin for calcium absorption and bone health.',
    healthEffects: [
      'Essential for calcium absorption',
      'Supports bone health',
      'May support immune function',
      'May reduce depression risk',
      'Important for muscle function'
    ],
    whyConsider: [
      'Deficiency common',
      'Excess can cause toxicity',
      'May interact with medications',
      'Quality varies by source',
      'Important during pregnancy'
    ],
    benefits: [
      'Supports bone density',
      'May boost immune system',
      'May improve mood',
      'Supports muscle strength',
      'May reduce autoimmune disease risk'
    ],
    dietaryInfo: {
      vegan: false, // Usually from lanolin
      vegetarian: false,
      glutenFree: true
    }
  },
  'vitamin b12': {
    name: 'Vitamin B12',
    aliases: ['vitamin b12', 'cobalamin', 'cyanocobalamin', 'methylcobalamin'],
    category: 'Vitamin',
    concern: 'low',
    description: 'Essential B vitamin for nerve health and red blood cell formation.',
    healthEffects: [
      'Essential for nerve health',
      'Supports red blood cell formation',
      'Important for DNA synthesis',
      'May support cognitive function',
      'Deficiency common in vegetarians'
    ],
    whyConsider: [
      'Deficiency common in some diets',
      'Synthetic forms may be less effective',
      'May mask other deficiencies',
      'Quality varies greatly',
      'Important for vegetarians'
    ],
    benefits: [
      'Supports nerve health',
      'Supports red blood cell health',
      'Supports cognitive function',
      'Supports energy production',
      'Essential for vegetarians'
    ],
    dietaryInfo: {
      vegan: false, // Usually from animal sources
      vegetarian: false,
      glutenFree: true
    }
  },
  'niacinamide': {
    name: 'Niacinamide',
    aliases: ['niacinamide', 'nicotinamide', 'vitamin b3', 'niacin'],
    category: 'Vitamin',
    concern: 'low',
    description: 'Vitamin B3 for energy metabolism and skin health.',
    healthEffects: [
      'Supports energy metabolism',
      'May support skin health',
      'May lower cholesterol',
      'Supports nervous system',
      'May cause flushing in high doses'
    ],
    whyConsider: [
      'May cause flushing and itching',
      'Excess can damage liver',
      'May interact with medications',
      'Quality varies',
      'Different forms available'
    ],
    benefits: [
      'Supports energy production',
      'Supports skin health',
      'May support cardiovascular health',
      'Supports nervous system',
      'Essential vitamin'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'riboflavin': {
    name: 'Riboflavin',
    aliases: ['riboflavin', 'vitamin b2', 'lactoflavin', 'vitamin g'],
    category: 'Vitamin',
    concern: 'low',
    description: 'Vitamin B2 for energy metabolism and antioxidant protection.',
    healthEffects: [
      'Supports energy metabolism',
      'Antioxidant properties',
      'Supports eye health',
      'May prevent migraines',
      'Supports skin health'
    ],
    whyConsider: [
      'Deficiency can cause health issues',
      'May cause urine discoloration',
      'Quality varies',
      'May interact with medications',
      'Important in some diets'
    ],
    benefits: [
      'Supports energy production',
      'Antioxidant protection',
      'Supports eye health',
      'May prevent migraines',
      'Supports skin health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'thiamine': {
    name: 'Thiamine',
    aliases: ['thiamine', 'vitamin b1', 'thiamin', 'aneurin'],
    category: 'Vitamin',
    concern: 'low',
    description: 'Vitamin B1 for nerve health and energy metabolism.',
    healthEffects: [
      'Supports nerve health',
      'Supports energy metabolism',
      'Important for heart health',
      'May prevent beriberi',
      'Supports cognitive function'
    ],
    whyConsider: [
      'Deficiency can cause serious issues',
      'May be destroyed by heat',
      'Quality varies',
      'May interact with medications',
      'Important in some diets'
    ],
    benefits: [
      'Supports nerve health',
      'Supports energy metabolism',
      'Supports heart health',
      'Supports cognitive function',
      'Essential vitamin'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'pyridoxine': {
    name: 'Pyridoxine',
    aliases: ['pyridoxine', 'vitamin b6', 'pyridoxal', 'pyridoxamine'],
    category: 'Vitamin',
    concern: 'low',
    description: 'Vitamin B6 for protein metabolism and nervous system health.',
    healthEffects: [
      'Supports protein metabolism',
      'Supports nervous system',
      'May support mood',
      'May reduce nausea',
      'Supports immune health'
    ],
    whyConsider: [
      'Excess can cause nerve damage',
      'May interact with medications',
      'Quality varies',
      'May cause side effects',
      'Different forms available'
    ],
    benefits: [
      'Supports protein metabolism',
      'Supports nervous system',
      'May support mood',
      'May reduce morning sickness',
      'Supports immune health'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'ascorbic acid': {
    name: 'Ascorbic Acid',
    aliases: ['ascorbic acid', 'vitamin c', 'l-ascorbic acid', 'e300'],
    category: 'Vitamin',
    concern: 'low',
    description: 'Vitamin C for immune health and antioxidant protection.',
    healthEffects: [
      'Supports immune system',
      'Antioxidant properties',
      'May reduce cold duration',
      'Supports collagen production',
      'May improve iron absorption'
    ],
    whyConsider: [
      'May cause digestive upset in high doses',
      'May interact with medications',
      'Synthetic vs natural forms',
      'Quality varies',
      'May affect lab tests'
    ],
    benefits: [
      'Essential for immune health',
      'Powerful antioxidant',
      'Supports skin health',
      'May reduce chronic disease risk',
      'Natural antihistamine'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'tocopherol': {
    name: 'Tocopherol',
    aliases: ['tocopherol', 'vitamin e', 'alpha tocopherol', 'e306'],
    category: 'Vitamin',
    concern: 'low',
    description: 'Vitamin E for antioxidant protection and skin health.',
    healthEffects: [
      'Powerful antioxidant',
      'Supports immune function',
      'Important for skin health',
      'May protect against heart disease',
      'Supports eye health'
    ],
    whyConsider: [
      'May interact with medications',
      'Excess can be harmful',
      'Different forms vary in effectiveness',
      'Synthetic forms less effective',
      'Quality varies'
    ],
    benefits: [
      'Powerful antioxidant',
      'Supports skin health',
      'May protect heart health',
      'Supports immune function',
      'Important for reproduction'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'carboxymethylcellulose': {
    name: 'Carboxymethylcellulose',
    aliases: ['carboxymethylcellulose', 'cellulose gum', 'cmc', 'e466'],
    category: 'Thickener',
    concern: 'moderate',
    description: 'Modified cellulose used as thickener and stabilizer in processed foods.',
    healthEffects: [
      'May cause digestive issues',
      'Can ferment in gut',
      'May cause bloating',
      'Highly processed',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause gastrointestinal discomfort',
      'Fermented by gut bacteria',
      'Often overused in processed foods',
      'No nutritional benefits',
      'May mask poor quality ingredients'
    ],
    benefits: [
      'Effective thickener',
      'Stable in various conditions',
      'Vegan friendly',
      'Inexpensive',
      'Used in gluten-free products'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'microcrystalline cellulose': {
    name: 'Microcrystalline Cellulose',
    aliases: ['microcrystalline cellulose', 'cellulose powder', 'e460', 'avicel'],
    category: 'Anti-Caking Agent',
    concern: 'low',
    description: 'Purified cellulose used as anti-caking agent and filler.',
    healthEffects: [
      'Generally recognized as safe',
      'May cause digestive issues in large amounts',
      'No nutritional value',
      'May affect nutrient absorption',
      'Bulk-forming fiber'
    ],
    whyConsider: [
      'No nutritional benefits',
      'May cause digestive discomfort',
      'Often added to dilute products',
      'May affect nutrient bioavailability',
      'Highly processed'
    ],
    benefits: [
      'Prevents caking',
      'Adds bulk to low-calorie foods',
      'Safe and inert',
      'Used in pharmaceuticals',
      'Natural fiber source'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'silicon dioxide': {
    name: 'Silicon Dioxide',
    aliases: ['silicon dioxide', 'silica', 'e551', 'food grade silica'],
    category: 'Anti-Caking Agent',
    concern: 'low',
    description: 'Natural mineral used as anti-caking agent in powdered foods.',
    healthEffects: [
      'Generally recognized as safe',
      'May cause digestive issues',
      'May affect nutrient absorption',
      'Can accumulate in body',
      'Natural mineral'
    ],
    whyConsider: [
      'May cause gastrointestinal irritation',
      'Can affect mineral absorption',
      'May accumulate in tissues',
      'Quality varies',
      'May be contaminated'
    ],
    benefits: [
      'Effective anti-caking agent',
      'Natural mineral',
      'Inexpensive',
      'Used in many products',
      'Safe in small amounts'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'magnesium stearate': {
    name: 'Magnesium Stearate',
    aliases: ['magnesium stearate', 'magnesium salt', 'e470b', 'stearic acid magnesium salt'],
    category: 'Anti-Caking Agent',
    concern: 'low',
    description: 'Magnesium salt of stearic acid used as lubricant and anti-caking agent.',
    healthEffects: [
      'Generally recognized as safe',
      'May cause digestive issues',
      'May affect nutrient absorption',
      'Can accumulate in body',
      'Synthetic compound'
    ],
    whyConsider: [
      'May affect nutrient bioavailability',
      'Can cause gastrointestinal issues',
      'Often unnecessary in food',
      'Quality varies',
      'Better alternatives exist'
    ],
    benefits: [
      'Effective lubricant',
      'Prevents caking',
      'Used in supplements',
      'Inexpensive',
      'Safe in small amounts'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'calcium stearate': {
    name: 'Calcium Stearate',
    aliases: ['calcium stearate', 'calcium salt', 'e470', 'stearic acid calcium salt'],
    category: 'Anti-Caking Agent',
    concern: 'low',
    description: 'Calcium salt of stearic acid used as lubricant and anti-caking agent.',
    healthEffects: [
      'Generally recognized as safe',
      'May cause digestive issues',
      'May affect calcium balance',
      'Can accumulate in body',
      'Synthetic compound'
    ],
    whyConsider: [
      'May affect nutrient bioavailability',
      'Can cause gastrointestinal issues',
      'May affect calcium metabolism',
      'Often unnecessary',
      'Quality varies'
    ],
    benefits: [
      'Effective lubricant',
      'Prevents caking',
      'Provides some calcium',
      'Used in supplements',
      'Inexpensive'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'propylene glycol': {
    name: 'Propylene Glycol',
    aliases: ['propylene glycol', 'propane-1,2-diol', 'e1520', 'pg'],
    category: 'Humectant',
    concern: 'moderate',
    description: 'Synthetic humectant used to retain moisture in foods.',
    healthEffects: [
      'May cause digestive issues',
      'Can cause allergic reactions',
      'May affect kidney function',
      'Can accumulate in body',
      'Synthetic compound'
    ],
    whyConsider: [
      'May cause gastrointestinal discomfort',
      'Can cause allergic reactions',
      'May affect neurological function',
      'Often contaminated with toxins',
      'Better alternatives exist'
    ],
    benefits: [
      'Effective humectant',
      'Prevents drying',
      'Used in medications',
      'Helps maintain texture',
      'Inexpensive'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'glycerin': {
    name: 'Glycerin',
    aliases: ['glycerin', 'glycerol', 'e422', 'glycerine'],
    category: 'Humectant',
    concern: 'low',
    description: 'Natural humectant used to retain moisture and sweetness in foods.',
    healthEffects: [
      'Natural humectant',
      'May cause digestive issues in large amounts',
      'Can cause laxative effect',
      'May affect blood sugar',
      'Used in fermentation'
    ],
    whyConsider: [
      'May cause digestive discomfort',
      'Can have laxative effect',
      'May affect blood sugar levels',
      'Quality varies',
      'May be synthetic'
    ],
    benefits: [
      'Natural humectant',
      'Helps retain moisture',
      'Used in natural products',
      'Supports skin health',
      'Natural fermentation product'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sorbitan monostearate': {
    name: 'Sorbitan Monostearate',
    aliases: ['sorbitan monostearate', 'span 60', 'e491', 'sorbitan ester'],
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Synthetic emulsifier derived from sorbitol and stearic acid.',
    healthEffects: [
      'May disrupt gut bacteria',
      'Can cause digestive issues',
      'May increase intestinal permeability',
      'Synthetic compound',
      'May affect nutrient absorption'
    ],
    whyConsider: [
      'Synthetic emulsifier',
      'May affect gut health',
      'Common in processed foods',
      'May cause allergic reactions',
      'No nutritional value'
    ],
    benefits: [
      'Effective emulsifier',
      'Stable in various conditions',
      'Used in many products',
      'Inexpensive',
      'Helps maintain texture'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sorbitan monooleate': {
    name: 'Sorbitan Monooleate',
    aliases: ['sorbitan monooleate', 'span 80', 'e494', 'sorbitan ester'],
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Synthetic emulsifier derived from sorbitol and oleic acid.',
    healthEffects: [
      'May disrupt gut bacteria',
      'Can cause digestive issues',
      'May increase intestinal permeability',
      'Synthetic compound',
      'May affect nutrient absorption'
    ],
    whyConsider: [
      'Synthetic emulsifier',
      'May affect gut health',
      'Common in processed foods',
      'May cause allergic reactions',
      'No nutritional value'
    ],
    benefits: [
      'Effective emulsifier',
      'Stable in various conditions',
      'Used in many products',
      'Inexpensive',
      'Helps maintain texture'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'polysorbate 80': {
    name: 'Polysorbate 80',
    aliases: ['polysorbate 80', 'tween 80', 'e433', 'polyoxyethylene sorbitan monooleate'],
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Synthetic emulsifier used to mix oil and water in processed foods.',
    healthEffects: [
      'May disrupt gut bacteria',
      'Can cause digestive issues',
      'May increase intestinal permeability',
      'Synthetic compound',
      'May affect nutrient absorption'
    ],
    whyConsider: [
      'Synthetic emulsifier',
      'May affect gut health',
      'Common in processed foods',
      'May cause allergic reactions',
      'No nutritional value'
    ],
    benefits: [
      'Effective emulsifier',
      'Stable in various conditions',
      'Used in many products',
      'Helps maintain texture',
      'Inexpensive'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'polysorbate 20': {
    name: 'Polysorbate 20',
    aliases: ['polysorbate 20', 'tween 20', 'e432', 'polyoxyethylene sorbitan monolaurate'],
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Synthetic emulsifier used to mix oil and water in processed foods.',
    healthEffects: [
      'May disrupt gut bacteria',
      'Can cause digestive issues',
      'May increase intestinal permeability',
      'Synthetic compound',
      'May affect nutrient absorption'
    ],
    whyConsider: [
      'Synthetic emulsifier',
      'May affect gut health',
      'Common in processed foods',
      'May cause allergic reactions',
      'No nutritional value'
    ],
    benefits: [
      'Effective emulsifier',
      'Stable in various conditions',
      'Used in many products',
      'Helps maintain texture',
      'Inexpensive'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sucrose esters': {
    name: 'Sucrose Esters',
    aliases: ['sucrose esters', 'sucrose fatty acid esters', 'e473', 'sucrose ester'],
    category: 'Emulsifier',
    concern: 'low',
    description: 'Natural emulsifiers made from sucrose and fatty acids.',
    healthEffects: [
      'Generally recognized as safe',
      'Natural origin',
      'May cause digestive issues in large amounts',
      'No nutritional value',
      'Biodegradable'
    ],
    whyConsider: [
      'May cause digestive discomfort',
      'Quality varies',
      'May be contaminated',
      'No nutritional benefits',
      'May mask poor quality ingredients'
    ],
    benefits: [
      'Natural emulsifier',
      'Biodegradable',
      'Safe and effective',
      'Used in natural products',
      'Helps maintain texture'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'lecithin granules': {
    name: 'Lecithin Granules',
    aliases: ['lecithin granules', 'granulated lecithin', 'soy lecithin granules'],
    category: 'Emulsifier',
    concern: 'low',
    description: 'Natural emulsifier from soybeans, available in granular form.',
    healthEffects: [
      'Generally safe',
      'May help with cholesterol',
      'Rare allergic reactions',
      'May contain GMO if from soy',
      'Supports brain health'
    ],
    whyConsider: [
      'Soy allergy risk',
      'May be GMO',
      'Highly processed',
      'Often from industrial sources',
      'Quality varies'
    ],
    benefits: [
      'Natural emulsifier',
      'May support brain health',
      'Can help with cholesterol',
      'Vegan friendly',
      'Supports cell membranes'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['soy']
    }
  },
  'beta carotene': {
    name: 'Beta Carotene',
    aliases: ['beta carotene', 'provitamin a', 'carotene', 'e160a'],
    category: 'Colorant',
    concern: 'low',
    description: 'Natural orange pigment and vitamin A precursor.',
    healthEffects: [
      'Converts to vitamin A',
      'Powerful antioxidant',
      'Supports immune function',
      'May protect against cancer',
      'Supports skin health'
    ],
    whyConsider: [
      'Excess may cause yellow skin',
      'May affect smokers differently',
      'Synthetic vs natural forms',
      'Quality varies',
      'May interact with medications'
    ],
    benefits: [
      'Supports vision',
      'Powerful antioxidant',
      'Supports immune health',
      'May protect against cancer',
      'Natural source of vitamin A'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'annatto': {
    name: 'Annatto',
    aliases: ['annatto', 'achiote', 'e160b', 'bixin'],
    category: 'Colorant',
    concern: 'low',
    description: 'Natural orange-red colorant from achiote tree seeds.',
    healthEffects: [
      'Natural colorant',
      'Contains antioxidants',
      'May have antimicrobial properties',
      'Generally safe',
      'May cause allergic reactions'
    ],
    whyConsider: [
      'May cause allergic reactions',
      'Quality varies',
      'May be contaminated',
      'Strong color may stain',
      'Limited availability'
    ],
    benefits: [
      'Natural colorant',
      'Contains antioxidants',
      'May have antimicrobial properties',
      'Used in traditional cooking',
      'Safe alternative to synthetic colors'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'curcumin': {
    name: 'Curcumin',
    aliases: ['curcumin', 'turmeric extract', 'diferuloylmethane', 'e100'],
    category: 'Colorant',
    concern: 'low',
    description: 'Natural yellow colorant from turmeric with powerful health benefits.',
    healthEffects: [
      'Powerful anti-inflammatory',
      'Rich in antioxidants',
      'May support joint health',
      'May support brain health',
      'Natural colorant'
    ],
    whyConsider: [
      'Poor absorption without black pepper',
      'May cause digestive upset',
      'May interact with medications',
      'Quality varies greatly',
      'May stain skin/clothes'
    ],
    benefits: [
      'Powerful anti-inflammatory',
      'Rich in antioxidants',
      'May support joint health',
      'May support brain health',
      'Natural colorant'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'beet juice': {
    name: 'Beet Juice',
    aliases: ['beet juice', 'beetroot juice', 'red beet juice'],
    category: 'Colorant',
    concern: 'low',
    description: 'Natural red colorant from beet juice.',
    healthEffects: [
      'Natural colorant',
      'Contains betalains',
      'May support blood pressure',
      'Contains nitrates',
      'Antioxidant properties'
    ],
    whyConsider: [
      'May cause red urine/stools',
      'Quality varies',
      'May be highly processed',
      'May contain additives',
      'Perishable'
    ],
    benefits: [
      'Natural colorant',
      'May support cardiovascular health',
      'Contains antioxidants',
      'May improve exercise performance',
      'Supports detoxification'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'paprika oleoresin': {
    name: 'Paprika Oleoresin',
    aliases: ['paprika oleoresin', 'paprika extract', 'e160c', 'capsanthin'],
    category: 'Colorant',
    concern: 'low',
    description: 'Natural red colorant extracted from paprika.',
    healthEffects: [
      'Natural colorant',
      'Contains antioxidants',
      'May support immune health',
      'Contains vitamin A',
      'Generally safe'
    ],
    whyConsider: [
      'May cause allergic reactions',
      'Quality varies',
      'May be contaminated',
      'Strong color may stain',
      'May interact with medications'
    ],
    benefits: [
      'Natural colorant',
      'Contains antioxidants',
      'May support immune health',
      'Contains vitamin A',
      'Safe alternative to synthetic colors'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'titanium dioxide': {
    name: 'Titanium Dioxide',
    aliases: ['titanium dioxide', 'titanium oxide', 'e171', 'tio2'],
    category: 'Colorant',
    concern: 'high',
    description: 'White pigment used as colorant in foods and cosmetics.',
    healthEffects: [
      'May affect gut health',
      'Potential carcinogen',
      'May cause immune reactions',
      'Can accumulate in body',
      'Particle toxicity concerns'
    ],
    whyConsider: [
      'Potential carcinogenic',
      'May affect gut microbiome',
      'Particle toxicity',
      'Can accumulate in tissues',
      'Better alternatives exist'
    ],
    benefits: [
      'Bright white color',
      'Stable pigment',
      'Inexpensive',
      'Used in many products',
      'FDA approved (but controversial)'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'iron oxide': {
    name: 'Iron Oxide',
    aliases: ['iron oxide', 'iron oxides', 'e172', 'ferric oxide'],
    category: 'Colorant',
    concern: 'low',
    description: 'Natural mineral pigment used for coloring foods.',
    healthEffects: [
      'Natural mineral',
      'Generally recognized as safe',
      'May affect iron levels',
      'Can accumulate in body',
      'May cause digestive issues'
    ],
    whyConsider: [
      'May affect iron absorption',
      'Can accumulate in tissues',
      'Quality varies',
      'May be contaminated',
      'May cause constipation'
    ],
    benefits: [
      'Natural mineral pigment',
      'Provides iron',
      'Stable color',
      'Used in supplements',
      'Safe in small amounts'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'carbon black': {
    name: 'Carbon Black',
    aliases: ['carbon black', 'vegetable carbon', 'e153', 'carbo medicinalis'],
    category: 'Colorant',
    concern: 'low',
    description: 'Black pigment made from charred vegetable matter.',
    healthEffects: [
      'Natural pigment',
      'Generally recognized as safe',
      'May cause digestive issues',
      'Can accumulate in body',
      'May affect nutrient absorption'
    ],
    whyConsider: [
      'May cause gastrointestinal issues',
      'Can affect nutrient absorption',
      'Quality varies',
      'May be contaminated',
      'Strong black color'
    ],
    benefits: [
      'Natural pigment',
      'Used in traditional medicine',
      'Stable color',
      'Safe alternative to synthetic blacks',
      'Used in activated charcoal'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'brilliant black': {
    name: 'Brilliant Black',
    aliases: ['brilliant black', 'black pn', 'e151', 'food black 1'],
    category: 'Artificial Color',
    concern: 'high',
    description: 'Synthetic black food dye.',
    healthEffects: [
      'May cause hyperactivity',
      'May cause allergic reactions',
      'Linked to cancer concerns',
      'Petroleum-derived',
      'May affect gut health'
    ],
    whyConsider: [
      'Synthetic dye',
      'May cause behavioral issues',
      'Potential carcinogen',
      'May affect gut health',
      'Better alternatives exist'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'allura red ac': {
    name: 'Allura Red AC',
    aliases: ['allura red ac', 'red 40', 'e129', 'fd&c red no. 40'],
    category: 'Artificial Color',
    concern: 'very_high',
    description: 'Synthetic red food dye linked to various health concerns.',
    healthEffects: [
      'May cause hyperactivity in children',
      'Linked to cancer concerns',
      'May cause allergic reactions',
      'May affect thyroid function',
      'Petroleum-derived'
    ],
    whyConsider: [
      'Synthetic petroleum dye',
      'May cause behavioral issues',
      'Linked to cancer in animal studies',
      'May affect thyroid health',
      'Banned in some countries'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'tartrazine': {
    name: 'Tartrazine',
    aliases: ['tartrazine', 'yellow 5', 'e102', 'fd&c yellow no. 5'],
    category: 'Artificial Color',
    concern: 'very_high',
    description: 'Synthetic yellow food dye that may cause allergic reactions.',
    healthEffects: [
      'May cause hyperactivity in children',
      'Can cause allergic reactions',
      'May cause hives and swelling',
      'Linked to cancer concerns',
      'Petroleum-derived'
    ],
    whyConsider: [
      'Synthetic petroleum dye',
      'May cause severe allergic reactions',
      'Linked to behavioral issues',
      'May affect thyroid function',
      'Banned in some countries'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      allergen: ['artificial colors']
    }
  },
  'sunset yellow': {
    name: 'Sunset Yellow',
    aliases: ['sunset yellow', 'yellow 6', 'e110', 'fd&c yellow no. 6'],
    category: 'Artificial Color',
    concern: 'very_high',
    description: 'Synthetic orange-yellow food dye with health concerns.',
    healthEffects: [
      'May cause hyperactivity in children',
      'May cause allergic reactions',
      'Linked to cancer concerns',
      'May affect kidney function',
      'Petroleum-derived'
    ],
    whyConsider: [
      'Synthetic petroleum dye',
      'May cause behavioral issues',
      'Potential carcinogen',
      'May affect kidney health',
      'Banned in some countries'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'quinoline yellow': {
    name: 'Quinoline Yellow',
    aliases: ['quinoline yellow', 'e104', 'd&c yellow no. 10'],
    category: 'Artificial Color',
    concern: 'very_high',
    description: 'Synthetic yellow food dye with potential health risks.',
    healthEffects: [
      'May cause hyperactivity in children',
      'May cause allergic reactions',
      'Linked to cancer concerns',
      'May affect thyroid function',
      'Petroleum-derived'
    ],
    whyConsider: [
      'Synthetic petroleum dye',
      'May cause behavioral issues',
      'Potential carcinogen',
      'May affect thyroid health',
      'Banned in some countries'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'azorubine': {
    name: 'Azorubine',
    aliases: ['azorubine', 'carmoisine', 'e122', 'azorubin'],
    category: 'Artificial Color',
    concern: 'very_high',
    description: 'Synthetic red food dye banned in some countries.',
    healthEffects: [
      'May cause hyperactivity in children',
      'Linked to cancer concerns',
      'May cause allergic reactions',
      'May affect thyroid function',
      'Petroleum-derived'
    ],
    whyConsider: [
      'Synthetic petroleum dye',
      'May cause behavioral issues',
      'Potential carcinogen',
      'Banned in several countries',
      'May affect thyroid health'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'artificial amaranth': {
    name: 'Artificial Amaranth',
    aliases: ['artificial amaranth', 'amaranth', 'red 2', 'e123', 'fd&c red no. 2'],
    category: 'Artificial Color',
    concern: 'very_high',
    description: 'Synthetic red food dye banned in many countries due to cancer concerns.',
    healthEffects: [
      'Linked to cancer concerns',
      'May cause allergic reactions',
      'May affect thyroid function',
      'Petroleum-derived',
      'May cause chromosomal damage'
    ],
    whyConsider: [
      'Banned in many countries',
      'Strong carcinogen concerns',
      'May cause chromosomal damage',
      'May affect thyroid health',
      'Better alternatives exist'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'erythrosine': {
    name: 'Erythrosine',
    aliases: ['erythrosine', 'red 3', 'e127', 'fd&c red no. 3'],
    category: 'Artificial Color',
    concern: 'very_high',
    description: 'Synthetic red food dye with thyroid and cancer concerns.',
    healthEffects: [
      'May affect thyroid function',
      'Linked to cancer concerns',
      'May cause allergic reactions',
      'May affect thyroid hormone',
      'Petroleum-derived'
    ],
    whyConsider: [
      'May affect thyroid function',
      'Potential carcinogen',
      'May cause allergic reactions',
      'Banned in some countries',
      'May affect hormone balance'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'indigotine': {
    name: 'Indigotine',
    aliases: ['indigotine', 'indigo carmine', 'e132', 'fd&c blue no. 2'],
    category: 'Artificial Color',
    concern: 'high',
    description: 'Synthetic blue food dye that may cause allergic reactions.',
    healthEffects: [
      'May cause allergic reactions',
      'May cause hyperactivity',
      'Linked to cancer concerns',
      'Petroleum-derived',
      'May affect thyroid function'
    ],
    whyConsider: [
      'Synthetic petroleum dye',
      'May cause severe allergic reactions',
      'May cause behavioral issues',
      'Potential carcinogen',
      'May affect thyroid health'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'fast green': {
    name: 'Fast Green',
    aliases: ['fast green', 'green s', 'e143', 'fd&c green no. 3'],
    category: 'Artificial Color',
    concern: 'high',
    description: 'Synthetic green food dye with potential health risks.',
    healthEffects: [
      'May cause allergic reactions',
      'May cause hyperactivity',
      'Linked to cancer concerns',
      'Petroleum-derived',
      'May affect thyroid function'
    ],
    whyConsider: [
      'Synthetic petroleum dye',
      'May cause allergic reactions',
      'May cause behavioral issues',
      'Potential carcinogen',
      'May affect thyroid health'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'brown ht': {
    name: 'Brown HT',
    aliases: ['brown ht', 'chocolate brown ht', 'e155'],
    category: 'Artificial Color',
    concern: 'moderate',
    description: 'Synthetic brown food dye.',
    healthEffects: [
      'May cause allergic reactions',
      'May cause hyperactivity',
      'Linked to cancer concerns',
      'Petroleum-derived',
      'May affect gut health'
    ],
    whyConsider: [
      'Synthetic dye',
      'May cause allergic reactions',
      'May cause behavioral issues',
      'Potential carcinogen',
      'May affect gut health'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'black 7984': {
    name: 'Black 7984',
    aliases: ['black 7984', 'brilliant black bn', 'e151'],
    category: 'Artificial Color',
    concern: 'high',
    description: 'Synthetic black food dye.',
    healthEffects: [
      'May cause hyperactivity',
      'May cause allergic reactions',
      'Linked to cancer concerns',
      'Petroleum-derived',
      'May affect gut health'
    ],
    whyConsider: [
      'Synthetic dye',
      'May cause behavioral issues',
      'Potential carcinogen',
      'May affect gut health',
      'Better alternatives exist'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'acesulfame potassium': {
    name: 'Acesulfame Potassium',
    aliases: ['acesulfame potassium', 'acesulfame k', 'ace k', 'e950'],
    category: 'Artificial Sweetener',
    concern: 'moderate',
    description: 'Artificial sweetener that may affect gut health.',
    healthEffects: [
      'May disrupt gut bacteria',
      'May affect blood sugar regulation',
      'May increase sweet cravings',
      'May cause digestive issues',
      'Synthetic compound'
    ],
    whyConsider: [
      'Artificial sweetener',
      'May disrupt gut microbiome',
      'May affect metabolism',
      'No nutritional benefits',
      'May increase overall calorie intake'
    ],
    benefits: [
      'Zero calorie sweetener',
      'Stable at high temperatures',
      'Used in baking',
      'Does not cause tooth decay',
      'Safe for diabetics (short term)'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'neotame': {
    name: 'Neotame',
    aliases: ['neotame', 'e961', 'n-(n-(3,3-dimethylbutyl)-l-α-aspartyl)-l-phenylalanine methyl ester'],
    category: 'Artificial Sweetener',
    concern: 'moderate',
    description: 'Artificial sweetener derived from aspartame.',
    healthEffects: [
      'May disrupt gut bacteria',
      'May affect blood sugar regulation',
      'May increase sweet cravings',
      'May cause digestive issues',
      'Synthetic compound'
    ],
    whyConsider: [
      'Artificial sweetener',
      'May disrupt gut microbiome',
      'May affect metabolism',
      'No nutritional benefits',
      'May increase overall calorie intake'
    ],
    benefits: [
      'Very sweet (intense)',
      'Stable at high temperatures',
      'Used in baking',
      'Zero calories',
      'Safe for diabetics (short term)'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'advantame': {
    name: 'Advantame',
    aliases: ['advantame', 'e969', 'advantame sweetener'],
    category: 'Artificial Sweetener',
    concern: 'moderate',
    description: 'Artificial sweetener derived from aspartame and vanillin.',
    healthEffects: [
      'May disrupt gut bacteria',
      'May affect blood sugar regulation',
      'May increase sweet cravings',
      'May cause digestive issues',
      'Synthetic compound'
    ],
    whyConsider: [
      'Artificial sweetener',
      'May disrupt gut microbiome',
      'Limited long-term studies',
      'No nutritional benefits',
      'May increase overall calorie intake'
    ],
    benefits: [
      'Extremely sweet (intense)',
      'Stable at high temperatures',
      'Used in baking',
      'Zero calories',
      'Safe for diabetics (short term)'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'saccharin': {
    name: 'Saccharin',
    aliases: ['saccharin', 'saccharine', 'e954', 'sweet n low'],
    category: 'Artificial Sweetener',
    concern: 'high',
    description: 'First artificial sweetener, linked to bladder cancer in animal studies.',
    healthEffects: [
      'Linked to bladder cancer concerns',
      'May disrupt gut bacteria',
      'May affect blood sugar regulation',
      'May increase sweet cravings',
      'Synthetic compound'
    ],
    whyConsider: [
      'Linked to bladder cancer in animals',
      'Artificial sweetener',
      'May disrupt gut microbiome',
      'May affect metabolism',
      'No nutritional benefits'
    ],
    benefits: [
      'Zero calorie sweetener',
      'Stable at high temperatures',
      'Used in baking',
      'Does not cause tooth decay',
      'Safe for diabetics (short term)'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cyclamate': {
    name: 'Cyclamate',
    aliases: ['cyclamate', 'cyclamic acid', 'e952', 'sodium cyclamate'],
    category: 'Artificial Sweetener',
    concern: 'high',
    description: 'Artificial sweetener banned in some countries due to cancer concerns.',
    healthEffects: [
      'Linked to bladder cancer concerns',
      'May disrupt gut bacteria',
      'May affect blood sugar regulation',
      'May increase sweet cravings',
      'Synthetic compound'
    ],
    whyConsider: [
      'Banned in US due to cancer concerns',
      'Artificial sweetener',
      'May disrupt gut microbiome',
      'May affect metabolism',
      'No nutritional benefits'
    ],
    benefits: [
      'Zero calorie sweetener',
      'Stable at high temperatures',
      'Used in some countries',
      'Does not cause tooth decay',
      'Safe for diabetics (short term)'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'thaumatin': {
    name: 'Thaumatin',
    aliases: ['thaumatin', 'talin', 'e957', 'katemfe fruit extract'],
    category: 'Natural Sweetener',
    concern: 'low',
    description: 'Natural protein sweetener from African fruit, extremely sweet.',
    healthEffects: [
      'Natural protein',
      'Extremely sweet',
      'May cause allergic reactions',
      'No calories',
      'From tropical fruit'
    ],
    whyConsider: [
      'May cause allergic reactions',
      'Extremely sweet taste',
      'Quality varies',
      'Expensive',
      'Limited availability'
    ],
    benefits: [
      'Natural sweetener',
      'Zero calories',
      'Protein-based',
      'Does not affect blood sugar',
      'Safe for diabetics'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'glycyrrhizin': {
    name: 'Glycyrrhizin',
    aliases: ['glycyrrhizin', 'glycyrrhizic acid', 'licorice extract', 'e958'],
    category: 'Natural Sweetener',
    concern: 'moderate',
    description: 'Natural sweetener from licorice root that can affect blood pressure.',
    healthEffects: [
      'Natural from licorice',
      'Can cause high blood pressure',
      'May cause potassium depletion',
      'May cause edema',
      'Anti-inflammatory properties'
    ],
    whyConsider: [
      'Can cause hypertension',
      'May deplete potassium',
      'May cause edema',
      'May interact with medications',
      'Excess can be harmful'
    ],
    benefits: [
      'Natural sweetener',
      'Anti-inflammatory',
      'May support adrenal health',
      'Used in traditional medicine',
      'Soothing properties'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'steviol glycosides': {
    name: 'Steviol Glycosides',
    aliases: ['steviol glycosides', 'stevia extract', 'e960', 'reb a'],
    category: 'Natural Sweetener',
    concern: 'low',
    description: 'Natural sweeteners extracted from stevia plant.',
    healthEffects: [
      'Natural plant extract',
      'Zero calories',
      'May help with blood sugar control',
      'May have antioxidant properties',
      'Generally recognized as safe'
    ],
    whyConsider: [
      'Highly processed forms may contain additives',
      'Some people report aftertaste',
      'May affect gut bacteria',
      'Some forms contain artificial sweeteners',
      'Quality varies'
    ],
    benefits: [
      'Zero calorie sweetener',
      'May help regulate blood sugar',
      'Natural alternative to sugar',
      'May have antioxidant effects',
      'Safe for diabetics'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'lactitol': {
    name: 'Lactitol',
    aliases: ['lactitol', 'lactitol powder', 'e966', 'lactitol monohydrate'],
    category: 'Sugar Alcohol',
    concern: 'moderate',
    description: 'Sugar alcohol derived from lactose that may cause digestive issues.',
    healthEffects: [
      'Can cause digestive issues',
      'May have laxative effect',
      'Low calorie sweetener',
      'Does not raise blood sugar much',
      'From lactose'
    ],
    whyConsider: [
      'Can cause bloating and gas',
      'May cause diarrhea in large amounts',
      'Not suitable for lactose intolerant',
      'Not as sweet as sugar',
      'May cause abdominal pain'
    ],
    benefits: [
      'Low calorie sweetener',
      'Does not affect blood sugar significantly',
      'May have prebiotic effects',
      'Used in sugar-free products',
      'Natural sugar alcohol'
    ],
    dietaryInfo: {
      vegan: false,
      vegetarian: true,
      glutenFree: true
    }
  },
  'isomalt': {
    name: 'Isomalt',
    aliases: ['isomalt', 'isomaltitol', 'e953', 'hydrogenated isomaltulose'],
    category: 'Sugar Alcohol',
    concern: 'moderate',
    description: 'Sugar alcohol used as sweetener and thickener.',
    healthEffects: [
      'Can cause digestive issues',
      'May have laxative effect',
      'Low calorie sweetener',
      'Does not raise blood sugar much',
      'Used as bulking agent'
    ],
    whyConsider: [
      'Can cause bloating and gas',
      'May cause diarrhea in large amounts',
      'Not as sweet as sugar',
      'May cause abdominal pain',
      'Femented by gut bacteria'
    ],
    benefits: [
      'Low calorie sweetener',
      'Does not affect blood sugar significantly',
      'Used as thickener',
      'Stable in baking',
      'Sugar-free option'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'maltitol': {
    name: 'Maltitol',
    aliases: ['maltitol', 'maltitol powder', 'e965', 'hydrogenated maltose'],
    category: 'Sugar Alcohol',
    concern: 'moderate',
    description: 'Sugar alcohol from maltose that may cause digestive issues.',
    healthEffects: [
      'Can cause digestive issues',
      'May have laxative effect',
      'Low calorie sweetener',
      'Does not raise blood sugar much',
      'From starch'
    ],
    whyConsider: [
      'Can cause bloating and gas',
      'May cause diarrhea in large amounts',
      'Not as sweet as sugar',
      'May cause abdominal pain',
      'Femented by gut bacteria'
    ],
    benefits: [
      'Low calorie sweetener',
      'Does not affect blood sugar significantly',
      'Similar taste to sugar',
      'Used in sugar-free products',
      'Natural sugar alcohol'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'lactase enzyme': {
    name: 'Lactase Enzyme',
    aliases: ['lactase enzyme', 'lactase', 'beta-galactosidase', 'lactase supplement'],
    category: 'Enzyme',
    concern: 'low',
    description: 'Enzyme that breaks down lactose, used in dairy products.',
    healthEffects: [
      'Helps digest lactose',
      'Generally safe',
      'May cause allergic reactions',
      'Natural enzyme',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause allergic reactions',
      'Quality varies',
      'May be contaminated',
      'No nutritional benefits',
      'May mask poor quality dairy'
    ],
    benefits: [
      'Helps lactose intolerant individuals',
      'Natural enzyme',
      'Safe and effective',
      'Used in dairy products',
      'Improves digestibility'
    ],
    dietaryInfo: {
      vegan: false, // Often from fungal sources
      vegetarian: true,
      glutenFree: true
    }
  },
  'papain': {
    name: 'Papain',
    aliases: ['papain', 'papaya enzyme', 'papain enzyme', 'e1101'],
    category: 'Enzyme',
    concern: 'low',
    description: 'Protein-digesting enzyme from papaya used as meat tenderizer.',
    healthEffects: [
      'Helps digest proteins',
      'May cause allergic reactions',
      'Natural enzyme',
      'May cause mouth irritation',
      'Used in meat processing'
    ],
    whyConsider: [
      'May cause allergic reactions',
      'May cause mouth irritation',
      'Quality varies',
      'May be contaminated',
      'Strong proteolytic activity'
    ],
    benefits: [
      'Natural enzyme',
      'Helps with protein digestion',
      'Used as meat tenderizer',
      'May help with inflammation',
      'Used in brewing'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'bromelain': {
    name: 'Bromelain',
    aliases: ['bromelain', 'bromelaine', 'pineapple enzyme', 'ananas enzyme'],
    category: 'Enzyme',
    concern: 'low',
    description: 'Protein-digesting enzyme from pineapple used for meat tenderizing.',
    healthEffects: [
      'Helps digest proteins',
      'May reduce inflammation',
      'May support immune health',
      'Natural enzyme',
      'May cause allergic reactions'
    ],
    whyConsider: [
      'May cause allergic reactions',
      'May cause mouth irritation',
      'Quality varies',
      'May interact with medications',
      'Strong proteolytic activity'
    ],
    benefits: [
      'Natural enzyme',
      'May reduce inflammation',
      'May support immune health',
      'Helps with protein digestion',
      'Used as meat tenderizer'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'alpha amylase': {
    name: 'Alpha Amylase',
    aliases: ['alpha amylase', 'amylase', 'starch enzyme', 'e1100'],
    category: 'Enzyme',
    concern: 'low',
    description: 'Starch-digesting enzyme used in baking and brewing.',
    healthEffects: [
      'Helps digest starches',
      'Used in baking',
      'Natural enzyme',
      'Generally safe',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause allergic reactions',
      'Quality varies',
      'May be contaminated',
      'No nutritional benefits',
      'May affect blood sugar'
    ],
    benefits: [
      'Natural enzyme',
      'Helps with starch digestion',
      'Improves baking',
      'Used in brewing',
      'Safe and effective'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'pectin lyase': {
    name: 'Pectin Lyase',
    aliases: ['pectin lyase', 'pectin enzyme', 'protopectinase', 'e1104'],
    category: 'Enzyme',
    concern: 'low',
    description: 'Pectin-degrading enzyme used in fruit processing.',
    healthEffects: [
      'Breaks down pectin',
      'Used in fruit processing',
      'Natural enzyme',
      'Generally safe',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause allergic reactions',
      'Quality varies',
      'May be contaminated',
      'No nutritional benefits',
      'May affect fruit texture'
    ],
    benefits: [
      'Natural enzyme',
      'Used in fruit processing',
      'Improves juice extraction',
      'Safe and effective',
      'Used in winemaking'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'ethyl vanillin': {
    name: 'Ethyl Vanillin',
    aliases: ['ethyl vanillin', 'ethylvanillin', 'vanillyl ethyl ether', 'artificial vanilla'],
    category: 'Flavoring',
    concern: 'low',
    description: 'Synthetic vanilla flavoring, more potent than vanillin.',
    healthEffects: [
      'Generally recognized as safe',
      'Synthetic flavoring',
      'May cause allergic reactions',
      'No nutritional value',
      'More potent than natural vanilla'
    ],
    whyConsider: [
      'Synthetic flavoring',
      'No health benefits',
      'May cause sensitivity',
      'Cheaper than natural vanilla',
      'Often used in processed foods'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'methylcellulose': {
    name: 'Methylcellulose',
    aliases: ['methylcellulose', 'methyl cellulose', 'e461', 'cellulose methyl ether'],
    category: 'Thickener',
    concern: 'moderate',
    description: 'Modified cellulose used as thickener and emulsifier.',
    healthEffects: [
      'May cause digestive issues',
      'Can ferment in gut',
      'May cause bloating',
      'Highly processed',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause gastrointestinal discomfort',
      'Fermented by gut bacteria',
      'Often overused in processed foods',
      'No nutritional benefits',
      'May mask poor quality ingredients'
    ],
    benefits: [
      'Effective thickener',
      'Vegan friendly',
      'Used in gluten-free products',
      'Stable in various conditions',
      'Inexpensive'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'hydroxypropyl methylcellulose': {
    name: 'Hydroxypropyl Methylcellulose',
    aliases: ['hydroxypropyl methylcellulose', 'hypromellose', 'e464', 'hpmc'],
    category: 'Thickener',
    concern: 'moderate',
    description: 'Modified cellulose used as thickener, emulsifier, and coating agent.',
    healthEffects: [
      'May cause digestive issues',
      'Can ferment in gut',
      'May cause bloating',
      'Highly processed',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause gastrointestinal discomfort',
      'Fermented by gut bacteria',
      'Often overused in processed foods',
      'No nutritional benefits',
      'May mask poor quality ingredients'
    ],
    benefits: [
      'Effective thickener and emulsifier',
      'Used as coating agent',
      'Vegan friendly',
      'Stable in various conditions',
      'Used in pharmaceuticals'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'ethylcellulose': {
    name: 'Ethylcellulose',
    aliases: ['ethylcellulose', 'ethyl cellulose', 'e462', 'cellulose ethyl ether'],
    category: 'Coating Agent',
    concern: 'moderate',
    description: 'Modified cellulose used as coating agent and binder.',
    healthEffects: [
      'May cause digestive issues',
      'Can ferment in gut',
      'May cause bloating',
      'Highly processed',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause gastrointestinal discomfort',
      'Fermented by gut bacteria',
      'Often overused in processed foods',
      'No nutritional benefits',
      'May mask poor quality ingredients'
    ],
    benefits: [
      'Effective coating agent',
      'Used in pharmaceuticals',
      'Vegan friendly',
      'Stable in various conditions',
      'Used in controlled release products'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'calcium alginate': {
    name: 'Calcium Alginate',
    aliases: ['calcium alginate', 'alginate calcium', 'e404', 'calcium salt of alginic acid'],
    category: 'Thickener',
    concern: 'low',
    description: 'Natural thickener and stabilizer from seaweed.',
    healthEffects: [
      'Natural from seaweed',
      'Generally recognized as safe',
      'May cause digestive issues',
      'High in fiber',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause digestive discomfort',
      'May be contaminated',
      'Quality varies',
      'No nutritional benefits',
      'May mask poor quality ingredients'
    ],
    benefits: [
      'Natural thickener',
      'From seaweed',
      'Vegan friendly',
      'Used in molecular gastronomy',
      'Stable in various conditions'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sodium alginate': {
    name: 'Sodium Alginate',
    aliases: ['sodium alginate', 'alginate sodium', 'e401', 'sodium salt of alginic acid'],
    category: 'Thickener',
    concern: 'low',
    description: 'Natural thickener and stabilizer from seaweed.',
    healthEffects: [
      'Natural from seaweed',
      'Generally recognized as safe',
      'May cause digestive issues',
      'High in fiber',
      'Contains sodium'
    ],
    whyConsider: [
      'May cause digestive discomfort',
      'Contains sodium',
      'May be contaminated',
      'Quality varies',
      'No nutritional benefits'
    ],
    benefits: [
      'Natural thickener',
      'From seaweed',
      'Vegan friendly',
      'Used in molecular gastronomy',
      'Forms gels with calcium'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'agar': {
    name: 'Agar',
    aliases: ['agar', 'agar-agar', 'e406', 'japanese gelatin'],
    category: 'Gelling Agent',
    concern: 'low',
    description: 'Natural gelling agent from seaweed.',
    healthEffects: [
      'Natural from seaweed',
      'High in fiber',
      'May support gut health',
      'Generally recognized as safe',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause digestive issues',
      'May be contaminated',
      'Quality varies',
      'No nutritional benefits',
      'Strong gelling properties'
    ],
    benefits: [
      'Natural gelling agent',
      'From seaweed',
      'Vegan friendly',
      'High in fiber',
      'Used in microbiology'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'carrageenan': {
    name: 'Carrageenan',
    aliases: ['carrageenan', 'carrageen', 'e407', 'chondrus crispus'],
    category: 'Thickener',
    concern: 'high',
    description: 'Seaweed-derived thickener that may cause inflammation.',
    healthEffects: [
      'May cause intestinal inflammation',
      'Linked to digestive issues',
      'May promote cancer development',
      'Can cause bloating',
      'May affect gut bacteria'
    ],
    whyConsider: [
      'May cause gastrointestinal inflammation',
      'Linked to ulcerative colitis',
      'Potential carcinogen',
      'Often degraded forms used',
      'Better alternatives exist'
    ],
    benefits: [],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'locust bean gum': {
    name: 'Locust Bean Gum',
    aliases: ['locust bean gum', 'carob gum', 'e410', 'ceratonia siliqua'],
    category: 'Thickener',
    concern: 'moderate',
    description: 'Natural thickener from carob tree seeds.',
    healthEffects: [
      'Natural thickener',
      'May cause digestive issues',
      'Can ferment in gut',
      'May cause bloating',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause gastrointestinal discomfort',
      'Fermented by gut bacteria',
      'Often overused in processed foods',
      'No nutritional benefits',
      'May mask poor quality ingredients'
    ],
    benefits: [
      'Natural thickener',
      'From carob tree',
      'Vegan friendly',
      'Stable in various conditions',
      'Used in ice cream'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'tragacanth gum': {
    name: 'Tragacanth Gum',
    aliases: ['tragacanth gum', 'tragacanth', 'e413', 'astragalus gummifer'],
    category: 'Thickener',
    concern: 'moderate',
    description: 'Natural thickener from astragalus plant.',
    healthEffects: [
      'Natural thickener',
      'May cause digestive issues',
      'Can ferment in gut',
      'May cause bloating',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause gastrointestinal discomfort',
      'Fermented by gut bacteria',
      'Often overused in processed foods',
      'No nutritional benefits',
      'May mask poor quality ingredients'
    ],
    benefits: [
      'Natural thickener',
      'From astragalus plant',
      'Vegan friendly',
      'Used in traditional medicine',
      'Stable in various conditions'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'arabic gum': {
    name: 'Arabic Gum',
    aliases: ['arabic gum', 'gum arabic', 'e414', 'acacia gum'],
    category: 'Thickener',
    concern: 'low',
    description: 'Natural thickener from acacia tree sap.',
    healthEffects: [
      'Natural thickener',
      'Prebiotic properties',
      'May support gut health',
      'Generally recognized as safe',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause digestive issues',
      'May be contaminated',
      'Quality varies',
      'No nutritional benefits',
      'May mask poor quality ingredients'
    ],
    benefits: [
      'Natural thickener',
      'From acacia tree',
      'Prebiotic properties',
      'Vegan friendly',
      'Used in traditional medicine'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'tara gum': {
    name: 'Tara Gum',
    aliases: ['tara gum', 'tara flour', 'e417', 'caesalpinia spinosa'],
    category: 'Thickener',
    concern: 'moderate',
    description: 'Natural thickener from tara tree seeds.',
    healthEffects: [
      'Natural thickener',
      'May cause digestive issues',
      'Can ferment in gut',
      'May cause bloating',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause gastrointestinal discomfort',
      'Fermented by gut bacteria',
      'Often overused in processed foods',
      'No nutritional benefits',
      'May mask poor quality ingredients'
    ],
    benefits: [
      'Natural thickener',
      'From tara tree',
      'Vegan friendly',
      'Stable in various conditions',
      'Used in ice cream'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'gellan gum': {
    name: 'Gellan Gum',
    aliases: ['gellan gum', 'gellan', 'e418', 'bacterial polysaccharide'],
    category: 'Thickener',
    concern: 'moderate',
    description: 'Bacterial polysaccharide used as thickener and stabilizer.',
    healthEffects: [
      'Produced by bacteria',
      'May cause digestive issues',
      'Can ferment in gut',
      'May cause bloating',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause gastrointestinal discomfort',
      'Fermented by gut bacteria',
      'Often overused in processed foods',
      'No nutritional benefits',
      'May mask poor quality ingredients'
    ],
    benefits: [
      'Effective thickener',
      'Produced by fermentation',
      'Vegan friendly',
      'Stable in various conditions',
      'Used in many products'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'xanthan gum': {
    name: 'Xanthan Gum',
    aliases: ['xanthan gum', 'xanthan', 'e415', 'xanthan polysaccharide'],
    category: 'Thickener',
    concern: 'moderate',
    description: 'Bacterial polysaccharide used as thickener and stabilizer.',
    healthEffects: [
      'Produced by bacteria',
      'May cause digestive issues',
      'Can ferment in gut',
      'May cause bloating',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause gastrointestinal discomfort',
      'Fermented by gut bacteria',
      'Often overused in processed foods',
      'No nutritional benefits',
      'May mask poor quality ingredients'
    ],
    benefits: [
      'Effective thickener',
      'Produced by fermentation',
      'Vegan friendly',
      'Stable in various conditions',
      'Gluten-free alternative'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'propyl gallate': {
    name: 'Propyl Gallate',
    aliases: ['propyl gallate', 'propylgallate', 'e310', 'gallate propyl ester'],
    category: 'Antioxidant',
    concern: 'moderate',
    description: 'Synthetic antioxidant used to prevent oxidation in fats and oils.',
    healthEffects: [
      'Synthetic antioxidant',
      'May cause allergic reactions',
      'May affect hormone function',
      'Generally recognized as safe',
      'No nutritional value'
    ],
    whyConsider: [
      'Synthetic antioxidant',
      'May cause allergic reactions',
      'May affect hormones',
      'Quality varies',
      'No nutritional benefits'
    ],
    benefits: [
      'Prevents oxidation',
      'Extends shelf life',
      'Used in fats and oils',
      'Inexpensive',
      'Effective antioxidant'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'tert butylhydroquinone': {
    name: 'Tert Butylhydroquinone',
    aliases: ['tert butylhydroquinone', 'tbhq', 'e319', 'butylhydroquinone'],
    category: 'Antioxidant',
    concern: 'moderate',
    description: 'Synthetic antioxidant used to prevent oxidation in fats and oils.',
    healthEffects: [
      'Synthetic antioxidant',
      'May cause allergic reactions',
      'May affect neurological function',
      'Generally recognized as safe',
      'No nutritional value'
    ],
    whyConsider: [
      'Synthetic antioxidant',
      'May cause allergic reactions',
      'May affect neurological function',
      'Quality varies',
      'No nutritional benefits'
    ],
    benefits: [
      'Prevents oxidation',
      'Extends shelf life',
      'Used in fats and oils',
      'Inexpensive',
      'Effective antioxidant'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'butylated hydroxyanisole': {
    name: 'Butylated Hydroxyanisole',
    aliases: ['butylated hydroxyanisole', 'bha', 'e320', 'hydroxyanisole butylated'],
    category: 'Antioxidant',
    concern: 'high',
    description: 'Synthetic antioxidant linked to cancer concerns.',
    healthEffects: [
      'Linked to cancer concerns',
      'May cause allergic reactions',
      'May affect hormone function',
      'Synthetic antioxidant',
      'No nutritional value'
    ],
    whyConsider: [
      'Linked to cancer in animal studies',
      'Synthetic antioxidant',
      'May cause allergic reactions',
      'May affect hormones',
      'Better alternatives exist'
    ],
    benefits: [
      'Prevents oxidation',
      'Extends shelf life',
      'Used in fats and oils',
      'Inexpensive',
      'Effective antioxidant'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'butylated hydroxytoluene': {
    name: 'Butylated Hydroxytoluene',
    aliases: ['butylated hydroxytoluene', 'bht', 'e321', 'hydroxytoluene butylated'],
    category: 'Antioxidant',
    concern: 'high',
    description: 'Synthetic antioxidant linked to cancer and hormone disruption.',
    healthEffects: [
      'Linked to cancer concerns',
      'May cause allergic reactions',
      'May affect hormone function',
      'Synthetic antioxidant',
      'No nutritional value'
    ],
    whyConsider: [
      'Linked to cancer in animal studies',
      'Synthetic antioxidant',
      'May cause allergic reactions',
      'May affect hormones',
      'Better alternatives exist'
    ],
    benefits: [
      'Prevents oxidation',
      'Extends shelf life',
      'Used in fats and oils',
      'Inexpensive',
      'Effective antioxidant'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sodium erythorbate': {
    name: 'Sodium Erythorbate',
    aliases: ['sodium erythorbate', 'erythorbate sodium', 'e316', 'isoascorbic acid sodium salt'],
    category: 'Antioxidant',
    concern: 'low',
    description: 'Synthetic antioxidant related to vitamin C.',
    healthEffects: [
      'Related to vitamin C',
      'Generally recognized as safe',
      'May cause allergic reactions',
      'No nutritional value',
      'Synthetic compound'
    ],
    whyConsider: [
      'Synthetic antioxidant',
      'May cause allergic reactions',
      'Quality varies',
      'No nutritional benefits',
      'May mask poor quality ingredients'
    ],
    benefits: [
      'Prevents oxidation',
      'Related to vitamin C',
      'Extends shelf life',
      'Safe and effective',
      'Used in meat processing'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sodium nitrite': {
    name: 'Sodium Nitrite',
    aliases: ['sodium nitrite', 'nitrite sodium', 'e250', 'sodium salt of nitrous acid'],
    category: 'Preservative',
    concern: 'high',
    description: 'Preservative that can form carcinogenic compounds when heated.',
    healthEffects: [
      'Can form nitrosamines when heated',
      'Linked to cancer concerns',
      'May cause methemoglobinemia',
      'Used in meat processing',
      'Generally recognized as safe in small amounts'
    ],
    whyConsider: [
      'Can form carcinogenic compounds',
      'Linked to cancer',
      'May affect blood',
      'Often used in processed meats',
      'Better alternatives exist'
    ],
    benefits: [
      'Prevents botulism',
      'Preserves meat color',
      'Extends shelf life',
      'Used in traditional curing',
      'Regulated amounts'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sodium nitrate': {
    name: 'Sodium Nitrate',
    aliases: ['sodium nitrate', 'nitrate sodium', 'e251', 'chile saltpeter'],
    category: 'Preservative',
    concern: 'high',
    description: 'Preservative that can form carcinogenic compounds.',
    healthEffects: [
      'Can form nitrosamines',
      'Linked to cancer concerns',
      'May cause methemoglobinemia',
      'Used in meat processing',
      'Generally recognized as safe in small amounts'
    ],
    whyConsider: [
      'Can form carcinogenic compounds',
      'Linked to cancer',
      'May affect blood',
      'Often used in processed meats',
      'Better alternatives exist'
    ],
    benefits: [
      'Prevents botulism',
      'Preserves meat color',
      'Extends shelf life',
      'Used in traditional curing',
      'Regulated amounts'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'potassium nitrite': {
    name: 'Potassium Nitrite',
    aliases: ['potassium nitrite', 'nitrite potassium', 'e249', 'potassium salt of nitrous acid'],
    category: 'Preservative',
    concern: 'high',
    description: 'Preservative similar to sodium nitrite.',
    healthEffects: [
      'Can form nitrosamines when heated',
      'Linked to cancer concerns',
      'May cause methemoglobinemia',
      'Used in meat processing',
      'Generally recognized as safe in small amounts'
    ],
    whyConsider: [
      'Can form carcinogenic compounds',
      'Linked to cancer',
      'May affect blood',
      'Often used in processed meats',
      'Better alternatives exist'
    ],
    benefits: [
      'Prevents botulism',
      'Preserves meat color',
      'Extends shelf life',
      'Used in meat processing',
      'Regulated amounts'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'potassium nitrate': {
    name: 'Potassium Nitrate',
    aliases: ['potassium nitrate', 'nitrate potassium', 'e252', 'saltpeter'],
    category: 'Preservative',
    concern: 'high',
    description: 'Preservative used in meat curing.',
    healthEffects: [
      'Can form nitrosamines',
      'Linked to cancer concerns',
      'May cause methemoglobinemia',
      'Used in meat processing',
      'Generally recognized as safe in small amounts'
    ],
    whyConsider: [
      'Can form carcinogenic compounds',
      'Linked to cancer',
      'May affect blood',
      'Often used in processed meats',
      'Better alternatives exist'
    ],
    benefits: [
      'Prevents botulism',
      'Preserves meat color',
      'Extends shelf life',
      'Used in traditional curing',
      'Regulated amounts'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sodium benzoate': {
    name: 'Sodium Benzoate',
    aliases: ['sodium benzoate', 'benzoate sodium', 'e211', 'benzoic acid sodium salt'],
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative that may affect behavior and combine dangerously with vitamin C.',
    healthEffects: [
      'May cause hyperactivity in children',
      'Can affect behavior',
      'May cause allergic reactions',
      'Dangerous when combined with vitamin C',
      'May affect DNA'
    ],
    whyConsider: [
      'May affect children\'s behavior',
      'Creates benzene with vitamin C',
      'Synthetic preservative',
      'No nutritional value',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Effective preservative',
      'Prevents mold growth',
      'Inexpensive',
      'Used in many products',
      'Safe in small amounts'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'potassium benzoate': {
    name: 'Potassium Benzoate',
    aliases: ['potassium benzoate', 'benzoate potassium', 'e212', 'benzoic acid potassium salt'],
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative similar to sodium benzoate.',
    healthEffects: [
      'May cause hyperactivity in children',
      'Can affect behavior',
      'May cause allergic reactions',
      'Dangerous when combined with vitamin C',
      'May affect DNA'
    ],
    whyConsider: [
      'May affect children\'s behavior',
      'Creates benzene with vitamin C',
      'Synthetic preservative',
      'No nutritional value',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Effective preservative',
      'Prevents mold growth',
      'Less sodium than sodium benzoate',
      'Inexpensive',
      'Used in many products'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'calcium benzoate': {
    name: 'Calcium Benzoate',
    aliases: ['calcium benzoate', 'benzoate calcium', 'e213', 'benzoic acid calcium salt'],
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative similar to sodium benzoate.',
    healthEffects: [
      'May cause hyperactivity in children',
      'Can affect behavior',
      'May cause allergic reactions',
      'Dangerous when combined with vitamin C',
      'May affect DNA'
    ],
    whyConsider: [
      'May affect children\'s behavior',
      'Creates benzene with vitamin C',
      'Synthetic preservative',
      'No nutritional value',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Effective preservative',
      'Prevents mold growth',
      'Provides calcium',
      'Inexpensive',
      'Used in many products'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'benzoic acid': {
    name: 'Benzoic Acid',
    aliases: ['benzoic acid', 'e210', 'benzenecarboxylic acid', 'carboxybenzene'],
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative similar to benzoates.',
    healthEffects: [
      'May cause hyperactivity in children',
      'Can affect behavior',
      'May cause allergic reactions',
      'Dangerous when combined with vitamin C',
      'May affect DNA'
    ],
    whyConsider: [
      'May affect children\'s behavior',
      'Creates benzene with vitamin C',
      'Synthetic preservative',
      'No nutritional value',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Effective preservative',
      'Prevents mold growth',
      'Inexpensive',
      'Used in many products',
      'Safe in small amounts'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sorbic acid': {
    name: 'Sorbic Acid',
    aliases: ['sorbic acid', 'e200', '2,4-hexadienoic acid', 'hexa-2,4-dienoic acid'],
    category: 'Preservative',
    concern: 'low',
    description: 'Natural preservative effective against mold and yeast.',
    healthEffects: [
      'Natural preservative',
      'Generally recognized as safe',
      'May cause allergic reactions',
      'Effective against mold and yeast',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause allergic reactions',
      'Quality varies',
      'No nutritional benefits',
      'May mask poor quality ingredients',
      'Strong preservative'
    ],
    benefits: [
      'Effective against mold and yeast',
      'Natural origin',
      'Safe and effective',
      'Used in many products',
      'Vegan friendly'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'potassium sorbate': {
    name: 'Potassium Sorbate',
    aliases: ['potassium sorbate', 'sorbate potassium', 'e202', 'sorbic acid potassium salt'],
    category: 'Preservative',
    concern: 'low',
    description: 'Synthetic preservative effective against mold and yeast.',
    healthEffects: [
      'Generally recognized as safe',
      'May cause allergic reactions',
      'Effective against mold and yeast',
      'No nutritional value',
      'Synthetic compound'
    ],
    whyConsider: [
      'May cause allergic reactions',
      'Quality varies',
      'No nutritional benefits',
      'May mask poor quality ingredients',
      'Strong preservative'
    ],
    benefits: [
      'Effective preservative',
      'Prevents mold and yeast growth',
      'Safe and effective',
      'Used in many products',
      'Inexpensive'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'calcium sorbate': {
    name: 'Calcium Sorbate',
    aliases: ['calcium sorbate', 'sorbate calcium', 'e203', 'sorbic acid calcium salt'],
    category: 'Preservative',
    concern: 'low',
    description: 'Synthetic preservative effective against mold and yeast.',
    healthEffects: [
      'Generally recognized as safe',
      'May cause allergic reactions',
      'Effective against mold and yeast',
      'Provides calcium',
      'No nutritional value'
    ],
    whyConsider: [
      'May cause allergic reactions',
      'Quality varies',
      'No nutritional benefits',
      'May mask poor quality ingredients',
      'Strong preservative'
    ],
    benefits: [
      'Effective preservative',
      'Prevents mold and yeast growth',
      'Provides calcium',
      'Safe and effective',
      'Used in many products'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'propylparaben': {
    name: 'Propylparaben',
    aliases: ['propylparaben', 'propyl paraben', 'e216', 'propyl p-hydroxybenzoate'],
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative that may disrupt hormones.',
    healthEffects: [
      'May disrupt hormone function',
      'May cause allergic reactions',
      'Linked to cancer concerns',
      'Synthetic preservative',
      'No nutritional value'
    ],
    whyConsider: [
      'May disrupt hormones',
      'May cause allergic reactions',
      'Synthetic preservative',
      'No nutritional benefits',
      'Better alternatives exist'
    ],
    benefits: [
      'Effective preservative',
      'Prevents microbial growth',
      'Inexpensive',
      'Used in many products',
      'Safe in small amounts'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'methylparaben': {
    name: 'Methylparaben',
    aliases: ['methylparaben', 'methyl paraben', 'e218', 'methyl p-hydroxybenzoate'],
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative that may disrupt hormones.',
    healthEffects: [
      'May disrupt hormone function',
      'May cause allergic reactions',
      'Linked to cancer concerns',
      'Synthetic preservative',
      'No nutritional value'
    ],
    whyConsider: [
      'May disrupt hormones',
      'May cause allergic reactions',
      'Synthetic preservative',
      'No nutritional benefits',
      'Better alternatives exist'
    ],
    benefits: [
      'Effective preservative',
      'Prevents microbial growth',
      'Inexpensive',
      'Used in many products',
      'Safe in small amounts'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'ethylparaben': {
    name: 'Ethylparaben',
    aliases: ['ethylparaben', 'ethyl paraben', 'e214', 'ethyl p-hydroxybenzoate'],
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative that may disrupt hormones.',
    healthEffects: [
      'May disrupt hormone function',
      'May cause allergic reactions',
      'Linked to cancer concerns',
      'Synthetic preservative',
      'No nutritional value'
    ],
    whyConsider: [
      'May disrupt hormones',
      'May cause allergic reactions',
      'Synthetic preservative',
      'No nutritional benefits',
      'Better alternatives exist'
    ],
    benefits: [
      'Effective preservative',
      'Prevents microbial growth',
      'Inexpensive',
      'Used in many products',
      'Safe in small amounts'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sodium ethyl p-hydroxybenzoate': {
    name: 'Sodium Ethyl P-Hydroxybenzoate',
    aliases: ['sodium ethyl p-hydroxybenzoate', 'ethylparaben sodium', 'e215', 'sodium ethylparaben'],
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative that may disrupt hormones.',
    healthEffects: [
      'May disrupt hormone function',
      'May cause allergic reactions',
      'Linked to cancer concerns',
      'Synthetic preservative',
      'Contains sodium'
    ],
    whyConsider: [
      'May disrupt hormones',
      'May cause allergic reactions',
      'Synthetic preservative',
      'No nutritional benefits',
      'Better alternatives exist'
    ],
    benefits: [
      'Effective preservative',
      'Prevents microbial growth',
      'Inexpensive',
      'Used in many products',
      'Safe in small amounts'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'sodium propyl p-hydroxybenzoate': {
    name: 'Sodium Propyl P-Hydroxybenzoate',
    aliases: ['sodium propyl p-hydroxybenzoate', 'propylparaben sodium', 'e217', 'sodium propylparaben'],
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative that may disrupt hormones.',
    healthEffects: [
      'May disrupt hormone function',
      'May cause allergic reactions',
      'Linked to cancer concerns',
      'Synthetic preservative',
      'Contains sodium'
    ],
    whyConsider: [
      'May disrupt hormones',
      'May cause allergic reactions',
      'Synthetic preservative',
      'No nutritional benefits',
      'Better alternatives exist'
    ],
    benefits: [
      'Effective preservative',
      'Prevents microbial growth',
      'Inexpensive',
      'Used in many products',
      'Safe in small amounts'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'dimethylpolysiloxane': {
    name: 'Dimethylpolysiloxane',
    aliases: ['dimethylpolysiloxane', 'simethicone', 'e900', 'polydimethylsiloxane'],
    category: 'Anti-Foaming Agent',
    concern: 'low',
    description: 'Silicone-based anti-foaming agent used in processed foods.',
    healthEffects: [
      'Generally recognized as safe',
      'May cause digestive issues',
      'Silicone compound',
      'No nutritional value',
      'Inert compound'
    ],
    whyConsider: [
      'May cause digestive discomfort',
      'Silicone compound',
      'No nutritional benefits',
      'May mask poor quality ingredients',
      'Quality varies'
    ],
    benefits: [
      'Effective anti-foaming agent',
      'Safe and inert',
      'Used in many products',
      'Inexpensive',
      'Does not affect taste'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'magnesium sulfate': {
    name: 'Magnesium Sulfate',
    aliases: ['magnesium sulfate', 'epsom salt', 'e518', 'magnesium sulphate'],
    category: 'Mineral',
    concern: 'low',
    description: 'Magnesium supplement used as mineral supplement.',
    healthEffects: [
      'Provides magnesium',
      'May cause digestive upset',
      'Can act as laxative',
      'May affect mineral balance',
      'Used as supplement'
    ],
    whyConsider: [
      'May cause digestive issues',
      'Can have laxative effect',
      'May affect mineral absorption',
      'Quality varies',
      'May interact with medications'
    ],
    benefits: [
      'Provides magnesium',
      'Supports relaxation',
      'Used as supplement',
      'Natural mineral',
      'Used in bath products'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'zinc sulfate': {
    name: 'Zinc Sulfate',
    aliases: ['zinc sulfate', 'zinc sulphate', 'zinc sulfate monohydrate', 'white vitriol'],
    category: 'Mineral',
    concern: 'low',
    description: 'Zinc supplement used as mineral supplement.',
    healthEffects: [
      'Provides zinc',
      'May cause nausea',
      'Can cause digestive upset',
      'May affect copper absorption',
      'Used as supplement'
    ],
    whyConsider: [
      'May cause digestive issues',
      'May affect mineral balance',
      'Quality varies',
      'May interact with medications',
      'Not the best absorbed form'
    ],
    benefits: [
      'Provides zinc',
      'Supports immune health',
      'Used as supplement',
      'Inexpensive',
      'Natural mineral'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'ferrous sulfate': {
    name: 'Ferrous Sulfate',
    aliases: ['ferrous sulfate', 'iron sulfate', 'iron sulphate', 'green vitriol'],
    category: 'Mineral',
    concern: 'moderate',
    description: 'Iron supplement that may cause digestive upset.',
    healthEffects: [
      'Provides iron',
      'May cause constipation',
      'Can cause digestive upset',
      'May stain teeth',
      'Used as supplement'
    ],
    whyConsider: [
      'May cause digestive issues',
      'May cause constipation',
      'May stain teeth',
      'Not the best absorbed form',
      'May interact with medications'
    ],
    benefits: [
      'Provides iron',
      'Supports red blood cell health',
      'Used as supplement',
      'Inexpensive',
      'Effective for iron deficiency'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'cupric sulfate': {
    name: 'Cupric Sulfate',
    aliases: ['cupric sulfate', 'copper sulfate', 'copper sulphate', 'blue vitriol'],
    category: 'Mineral',
    concern: 'moderate',
    description: 'Copper supplement used in small amounts.',
    healthEffects: [
      'Provides copper',
      'May cause digestive upset',
      'Can be toxic in high doses',
      'May affect zinc absorption',
      'Used as supplement'
    ],
    whyConsider: [
      'May cause digestive issues',
      'Toxic in high doses',
      'May affect mineral balance',
      'Quality varies',
      'May interact with medications'
    ],
    benefits: [
      'Provides copper',
      'Supports connective tissue',
      'Used as supplement',
      'Natural mineral',
      'Essential trace mineral'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'manganese sulfate': {
    name: 'Manganese Sulfate',
    aliases: ['manganese sulfate', 'manganese sulphate', 'manganic sulfate'],
    category: 'Mineral',
    concern: 'low',
    description: 'Manganese supplement used as mineral supplement.',
    healthEffects: [
      'Provides manganese',
      'May cause digestive upset',
      'Can accumulate in body',
      'May affect iron absorption',
      'Used as supplement'
    ],
    whyConsider: [
      'May cause digestive issues',
      'May affect mineral balance',
      'Quality varies',
      'May accumulate in body',
      'May interact with medications'
    ],
    benefits: [
      'Provides manganese',
      'Supports bone health',
      'Used as supplement',
      'Natural mineral',
      'Essential trace mineral'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'copper gluconate': {
    name: 'Copper Gluconate',
    aliases: ['copper gluconate', 'copper gluconate', 'copper d-gluconate'],
    category: 'Mineral',
    concern: 'low',
    description: 'Copper supplement that may be better absorbed than sulfate form.',
    healthEffects: [
      'Provides copper',
      'May be better absorbed',
      'May cause digestive upset',
      'Can be toxic in high doses',
      'Used as supplement'
    ],
    whyConsider: [
      'May cause digestive issues',
      'Toxic in high doses',
      'May affect mineral balance',
      'Quality varies',
      'May interact with medications'
    ],
    benefits: [
      'Provides copper',
      'Supports connective tissue',
      'May be better absorbed',
      'Used as supplement',
      'Essential trace mineral'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'chromium picolinate': {
    name: 'Chromium Picolinate',
    aliases: ['chromium picolinate', 'chromium polynicotinate', 'chromium picolinate supplement'],
    category: 'Mineral',
    concern: 'low',
    description: 'Chromium supplement that may help with blood sugar control.',
    healthEffects: [
      'May support blood sugar control',
      'Provides chromium',
      'May cause digestive upset',
      'May affect insulin function',
      'Used as supplement'
    ],
    whyConsider: [
      'May cause digestive issues',
      'May interact with medications',
      'Quality varies greatly',
      'Expensive',
      'Limited evidence for benefits'
    ],
    benefits: [
      'May support blood sugar control',
      'Provides chromium',
      'Used as supplement',
      'May support metabolism',
      'Essential trace mineral'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'selenium yeast': {
    name: 'Selenium Yeast',
    aliases: ['selenium yeast', 'selenium enriched yeast', 'selenomethionine', 'selenium supplement'],
    category: 'Mineral',
    concern: 'low',
    description: 'Selenium supplement from yeast that may support antioxidant function.',
    healthEffects: [
      'Provides selenium',
      'May support antioxidant function',
      'May support thyroid health',
      'May cause digestive upset',
      'Used as supplement'
    ],
    whyConsider: [
      'May cause digestive issues',
      'May interact with medications',
      'Quality varies greatly',
      'Expensive',
      'Toxic in high doses'
    ],
    benefits: [
      'Provides selenium',
      'May support antioxidant function',
      'May support thyroid health',
      'Natural form',
      'Used as supplement'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'lutein': {
    name: 'Lutein',
    aliases: ['lutein', 'xanthophyll', 'lutein supplement', 'marigold extract'],
    category: 'Antioxidant',
    concern: 'low',
    description: 'Antioxidant that supports eye health.',
    healthEffects: [
      'Supports eye health',
      'Antioxidant properties',
      'May protect against macular degeneration',
      'May support skin health',
      'Natural pigment'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies greatly',
      'Expensive',
      'Limited absorption',
      'May cause digestive issues'
    ],
    benefits: [
      'Supports eye health',
      'Antioxidant properties',
      'May protect vision',
      'Supports skin health',
      'Natural carotenoid'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'zeaxanthin': {
    name: 'Zeaxanthin',
    aliases: ['zeaxanthin', 'zeaxanthin supplement', 'marigold extract', 'corn extract'],
    category: 'Antioxidant',
    concern: 'low',
    description: 'Antioxidant that supports eye health, often paired with lutein.',
    healthEffects: [
      'Supports eye health',
      'Antioxidant properties',
      'May protect against macular degeneration',
      'May support skin health',
      'Natural pigment'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies greatly',
      'Expensive',
      'Limited absorption',
      'May cause digestive issues'
    ],
    benefits: [
      'Supports eye health',
      'Antioxidant properties',
      'May protect vision',
      'Supports skin health',
      'Natural carotenoid'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'astaxanthin': {
    name: 'Astaxanthin',
    aliases: ['astaxanthin', 'astaxanthin supplement', 'haematococcus pluvialis', 'salmon pigment'],
    category: 'Antioxidant',
    concern: 'low',
    description: 'Powerful antioxidant from algae that supports skin and joint health.',
    healthEffects: [
      'Powerful antioxidant',
      'May support skin health',
      'May support joint health',
      'May support eye health',
      'Natural pigment'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies greatly',
      'Expensive',
      'Limited absorption',
      'May cause digestive issues'
    ],
    benefits: [
      'Powerful antioxidant',
      'May support skin health',
      'May support joint health',
      'May support eye health',
      'Natural carotenoid'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'coenzyme q10': {
    name: 'Coenzyme Q10',
    aliases: ['coenzyme q10', 'coq10', 'ubiquinone', 'ubiquinol'],
    category: 'Antioxidant',
    concern: 'low',
    description: 'Antioxidant that supports energy production and heart health.',
    healthEffects: [
      'Supports energy production',
      'Antioxidant properties',
      'May support heart health',
      'May support gum health',
      'Natural compound'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies greatly',
      'Expensive',
      'Limited absorption',
      'May cause digestive issues'
    ],
    benefits: [
      'Supports energy production',
      'Antioxidant properties',
      'May support heart health',
      'May support gum health',
      'Essential for cells'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'resveratrol': {
    name: 'Resveratrol',
    aliases: ['resveratrol', 'resveratrol supplement', 'grape extract', 'japanese knotweed'],
    category: 'Antioxidant',
    concern: 'low',
    description: 'Antioxidant from grapes that may support heart health.',
    healthEffects: [
      'Antioxidant properties',
      'May support heart health',
      'May activate longevity genes',
      'May support brain health',
      'Natural compound'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies greatly',
      'Expensive',
      'Limited absorption',
      'May cause digestive issues'
    ],
    benefits: [
      'Antioxidant properties',
      'May support heart health',
      'May support brain health',
      'May support longevity',
      'Natural phytoalexin'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'quercetin': {
    name: 'Quercetin',
    aliases: ['quercetin', 'quercetin supplement', 'quercitin', 'flavonoid'],
    category: 'Antioxidant',
    concern: 'low',
    description: 'Flavonoid antioxidant that may support immune and heart health.',
    healthEffects: [
      'Antioxidant properties',
      'May support immune health',
      'May support heart health',
      'May reduce inflammation',
      'Natural flavonoid'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies greatly',
      'Limited absorption',
      'May cause digestive issues',
      'Expensive'
    ],
    benefits: [
      'Antioxidant properties',
      'May support immune health',
      'May support heart health',
      'May reduce inflammation',
      'Natural flavonoid'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'rutin': {
    name: 'Rutin',
    aliases: ['rutin', 'rutin supplement', 'rutoside', 'quercetin-3-rutinoside'],
    category: 'Antioxidant',
    concern: 'low',
    description: 'Flavonoid that may support blood vessel health.',
    healthEffects: [
      'May support blood vessel health',
      'Antioxidant properties',
      'May reduce inflammation',
      'May support eye health',
      'Natural flavonoid'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies greatly',
      'Limited absorption',
      'May cause digestive issues',
      'Expensive'
    ],
    benefits: [
      'May support blood vessel health',
      'Antioxidant properties',
      'May reduce inflammation',
      'May support eye health',
      'Natural flavonoid'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'hesperidin': {
    name: 'Hesperidin',
    aliases: ['hesperidin', 'hesperidin supplement', 'citrus flavonoid', 'vitamin p'],
    category: 'Antioxidant',
    concern: 'low',
    description: 'Citrus flavonoid that may support blood vessel health.',
    healthEffects: [
      'May support blood vessel health',
      'Antioxidant properties',
      'May reduce inflammation',
      'May support immune health',
      'Natural flavonoid'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies greatly',
      'Limited absorption',
      'May cause digestive issues',
      'Expensive'
    ],
    benefits: [
      'May support blood vessel health',
      'Antioxidant properties',
      'May reduce inflammation',
      'May support immune health',
      'Natural flavonoid'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'naringin': {
    name: 'Naringin',
    aliases: ['naringin', 'naringin supplement', 'grapefruit flavonoid', 'aurantiin'],
    category: 'Antioxidant',
    concern: 'low',
    description: 'Grapefruit flavonoid that may support metabolic health.',
    healthEffects: [
      'May support metabolic health',
      'Antioxidant properties',
      'May support liver health',
      'May reduce inflammation',
      'Natural flavonoid'
    ],
    whyConsider: [
      'May interact with medications',
      'Quality varies greatly',
      'Limited absorption',
      'May cause digestive issues',
      'Expensive'
    ],
    benefits: [
      'May support metabolic health',
      'Antioxidant properties',
      'May support liver health',
      'May reduce inflammation',
      'Natural flavonoid'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'genistein': {
    name: 'Genistein',
    aliases: ['genistein', 'genistein supplement', 'soy isoflavone', 'phytoestrogen'],
    category: 'Phytoestrogen',
    concern: 'moderate',
    description: 'Soy isoflavone that may affect hormone balance.',
    healthEffects: [
      'May affect hormone balance',
      'Antioxidant properties',
      'May support bone health',
      'May support heart health',
      'Phytoestrogen'
    ],
    whyConsider: [
      'May affect hormone balance',
      'May interact with hormone therapy',
      'Quality varies greatly',
      'May cause digestive issues',
      'Limited research'
    ],
    benefits: [
      'May support bone health',
      'Antioxidant properties',
      'May support heart health',
      'Natural phytoestrogen',
      'May support menopausal symptoms'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'daidzein': {
    name: 'Daidzein',
    aliases: ['daidzein', 'daidzein supplement', 'soy isoflavone', 'phytoestrogen'],
    category: 'Phytoestrogen',
    concern: 'moderate',
    description: 'Soy isoflavone that may affect hormone balance.',
    healthEffects: [
      'May affect hormone balance',
      'Antioxidant properties',
      'May support bone health',
      'May support heart health',
      'Phytoestrogen'
    ],
    whyConsider: [
      'May affect hormone balance',
      'May interact with hormone therapy',
      'Quality varies greatly',
      'May cause digestive issues',
      'Limited research'
    ],
    benefits: [
      'May support bone health',
      'Antioxidant properties',
      'May support heart health',
      'Natural phytoestrogen',
      'May support menopausal symptoms'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  },
  'glycitein': {
    name: 'Glycitein',
    aliases: ['glycitein', 'glycitein supplement', 'soy isoflavone', 'phytoestrogen'],
    category: 'Phytoestrogen',
    concern: 'moderate',
    description: 'Soy isoflavone that may affect hormone balance.',
    healthEffects: [
      'May affect hormone balance',
      'Antioxidant properties',
      'May support bone health',
      'May support heart health',
      'Phytoestrogen'
    ],
    whyConsider: [
      'May affect hormone balance',
      'May interact with hormone therapy',
      'Quality varies greatly',
      'May cause digestive issues',
      'Limited research'
    ],
    benefits: [
      'May support bone health',
      'Antioxidant properties',
      'May support heart health',
      'Natural phytoestrogen',
      'May support menopausal symptoms'
    ],
    dietaryInfo: {
      vegan: true,
      vegetarian: true,
      glutenFree: true
    }
  }
};

/**
 * Get ingredient information by name (case-insensitive, handles variations)
 */
export function getIngredientInfo(name: string): IngredientInfo | null {
  const normalized = name.toLowerCase().trim();
  
  // Direct match
  if (INGREDIENTS_DATABASE[normalized]) {
    return INGREDIENTS_DATABASE[normalized];
  }
  
  // Check aliases
  for (const [key, info] of Object.entries(INGREDIENTS_DATABASE)) {
    if (info.aliases.some(alias => alias.toLowerCase() === normalized)) {
      return info;
    }
    // Partial match
    if (normalized.includes(key) || key.includes(normalized)) {
      return info;
    }
  }
  
  return null;
}

/**
 * Get concern level color
 */
export function getIngredientConcernColor(concern: IngredientInfo['concern']): string {
  switch (concern) {
    case 'very_high':
      return 'bg-red-600 text-white';
    case 'high':
      return 'bg-orange-500 text-white';
    case 'moderate':
      return 'bg-yellow-500 text-white';
    case 'low':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
}

/**
 * Get concern level text
 */
export function getIngredientConcernText(concern: IngredientInfo['concern']): string {
  switch (concern) {
    case 'very_high':
      return 'Very High Concern';
    case 'high':
      return 'High Concern';
    case 'moderate':
      return 'Moderate Concern';
    case 'low':
      return 'Low Concern';
    default:
      return 'Unknown';
  }
}

