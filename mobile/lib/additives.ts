/**
 * Additive information database
 * Contains details about food additives, their health effects, and concerns
 */

export interface AdditiveInfo {
  code: string;
  name: string;
  category: string;
  concern: 'low' | 'moderate' | 'high' | 'very_high';
  description: string;
  healthEffects: string[];
  whyAvoid: string[];
  benefits?: string[];
  alternatives?: string;
}

export const ADDITIVES_DATABASE: Record<string, AdditiveInfo> = {
  'E322': {
    code: 'E322',
    name: 'Lecithins',
    category: 'Emulsifier',
    concern: 'low',
    description: 'Natural emulsifier derived from soybeans, sunflowers, or eggs. Generally considered safe.',
    healthEffects: [
      'May help with cholesterol levels',
      'Generally well-tolerated',
      'Rare allergic reactions in sensitive individuals'
    ],
    whyAvoid: [
      'May contain traces of allergens (soy, eggs)',
      'Often derived from genetically modified soy'
    ],
    alternatives: 'Look for products without emulsifiers or use natural alternatives'
  },
  'E322I': {
    code: 'E322I',
    name: 'Lecithins (Soy)',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Soy-derived lecithin used as an emulsifier. May contain GMO soy and allergens.',
    healthEffects: [
      'Possible allergic reactions in soy-sensitive individuals',
      'May contain traces of pesticides if not organic',
      'Often from genetically modified sources'
    ],
    whyAvoid: [
      'Soy allergy risk',
      'GMO concerns',
      'May contain pesticide residues',
      'Highly processed ingredient'
    ],
    alternatives: 'Choose products with organic lecithin or no emulsifiers'
  },
  'E621': {
    code: 'E621',
    name: 'Monosodium Glutamate (MSG)',
    category: 'Flavor Enhancer',
    concern: 'moderate',
    description: 'Common flavor enhancer that can cause reactions in sensitive individuals.',
    healthEffects: [
      'May cause headaches in sensitive people',
      'Can trigger migraines',
      'May cause nausea or dizziness',
      'Linked to increased appetite'
    ],
    whyAvoid: [
      'Can cause adverse reactions',
      'May increase food cravings',
      'Often used to mask low-quality ingredients',
      'May contribute to overeating'
    ],
    alternatives: 'Use natural flavor enhancers like herbs, spices, or umami-rich foods'
  },
  'E951': {
    code: 'E951',
    name: 'Aspartame',
    category: 'Artificial Sweetener',
    concern: 'very_high',
    description: 'Artificial sweetener that has been controversial due to potential health risks.',
    healthEffects: [
      'May cause headaches and migraines',
      'Linked to mood changes',
      'Potential neurological effects',
      'May affect gut bacteria'
    ],
    whyAvoid: [
      'Controversial safety profile',
      'May cause adverse reactions',
      'Linked to increased cravings for sweet foods',
      'May disrupt natural appetite regulation',
      'Potential long-term health concerns'
    ],
    alternatives: 'Use natural sweeteners like stevia, honey, or maple syrup in moderation'
  },
  'E952': {
    code: 'E952',
    name: 'Cyclamate',
    category: 'Artificial Sweetener',
    concern: 'high',
    description: 'Artificial sweetener banned in some countries due to safety concerns.',
    healthEffects: [
      'Banned in US due to cancer concerns',
      'May cause digestive issues',
      'Potential long-term health risks'
    ],
    whyAvoid: [
      'Banned in multiple countries',
      'Safety concerns',
      'May cause digestive problems',
      'Limited long-term safety data'
    ],
    alternatives: 'Choose products with natural sweeteners or no added sweeteners'
  },
  'E954': {
    code: 'E954',
    name: 'Saccharin',
    category: 'Artificial Sweetener',
    concern: 'moderate',
    description: 'One of the oldest artificial sweeteners, with some safety concerns.',
    healthEffects: [
      'May have bitter aftertaste',
      'Potential bladder concerns in high doses',
      'May affect taste perception'
    ],
    whyAvoid: [
      'Safety concerns in high doses',
      'May increase cravings for sweet foods',
      'Artificial taste',
      'May disrupt natural appetite'
    ],
    alternatives: 'Use natural sweeteners or reduce overall sweetness'
  },
  'E102': {
    code: 'E102',
    name: 'Tartrazine (Yellow 5)',
    category: 'Artificial Color',
    concern: 'high',
    description: 'Yellow artificial food coloring linked to hyperactivity and allergic reactions.',
    healthEffects: [
      'Linked to hyperactivity in children',
      'May cause allergic reactions',
      'Can trigger asthma attacks',
      'May cause skin rashes'
    ],
    whyAvoid: [
      'Hyperactivity in children',
      'Allergic reactions',
      'Asthma triggers',
      'No nutritional value',
      'Purely cosmetic ingredient'
    ],
    alternatives: 'Choose products with natural colors from fruits and vegetables'
  },
  'E104': {
    code: 'E104',
    name: 'Quinoline Yellow',
    category: 'Artificial Color',
    concern: 'high',
    description: 'Yellow food coloring that may cause allergic reactions and hyperactivity.',
    healthEffects: [
      'May cause allergic reactions',
      'Linked to hyperactivity',
      'Potential skin sensitivity',
      'Asthma triggers'
    ],
    whyAvoid: [
      'Hyperactivity concerns',
      'Allergic reactions',
      'No health benefits',
      'Purely for appearance'
    ],
    alternatives: 'Look for naturally colored products'
  },
  'E110': {
    code: 'E110',
    name: 'Sunset Yellow (Yellow 6)',
    category: 'Artificial Color',
    concern: 'high',
    description: 'Orange-yellow food coloring associated with hyperactivity and allergic reactions.',
    healthEffects: [
      'Hyperactivity in children',
      'Allergic reactions',
      'May cause skin rashes',
      'Asthma triggers'
    ],
    whyAvoid: [
      'Behavioral effects in children',
      'Allergic reactions',
      'No nutritional value',
      'Artificial coloring'
    ],
    alternatives: 'Choose naturally colored foods'
  },
  'E122': {
    code: 'E122',
    name: 'Azorubine (Carmoisine)',
    category: 'Artificial Color',
    concern: 'high',
    description: 'Red food coloring that may cause allergic reactions and hyperactivity.',
    healthEffects: [
      'Hyperactivity in children',
      'Allergic reactions',
      'May cause skin irritation',
      'Asthma concerns'
    ],
    whyAvoid: [
      'Behavioral effects',
      'Allergic reactions',
      'Purely cosmetic',
      'No health benefits'
    ],
    alternatives: 'Use natural red colors from beets or berries'
  },
  'E124': {
    code: 'E124',
    name: 'Ponceau 4R (Red 7)',
    category: 'Artificial Color',
    concern: 'high',
    description: 'Red food coloring linked to hyperactivity and allergic reactions.',
    healthEffects: [
      'Hyperactivity in children',
      'Allergic reactions',
      'Skin sensitivity',
      'Asthma triggers'
    ],
    whyAvoid: [
      'Behavioral effects',
      'Allergic reactions',
      'Artificial coloring',
      'No nutritional value'
    ],
    alternatives: 'Choose products with natural red colors'
  },
  'E129': {
    code: 'E129',
    name: 'Allura Red (Red 40)',
    category: 'Artificial Color',
    concern: 'high',
    description: 'Red food coloring that may cause hyperactivity and allergic reactions.',
    healthEffects: [
      'Hyperactivity in children',
      'Allergic reactions',
      'May cause skin rashes',
      'Potential behavioral effects'
    ],
    whyAvoid: [
      'Hyperactivity concerns',
      'Allergic reactions',
      'No health benefits',
      'Purely for appearance'
    ],
    alternatives: 'Use natural red colors from fruits and vegetables'
  },
  'E211': {
    code: 'E211',
    name: 'Sodium Benzoate',
    category: 'Preservative',
    concern: 'moderate',
    description: 'Common preservative that may form benzene when combined with vitamin C.',
    healthEffects: [
      'May form benzene (carcinogen) with vitamin C',
      'Potential hyperactivity in children',
      'May cause allergic reactions',
      'Can trigger asthma'
    ],
    whyAvoid: [
      'Benzene formation risk',
      'Hyperactivity concerns',
      'Allergic reactions',
      'Asthma triggers'
    ],
    alternatives: 'Choose products with natural preservatives or no preservatives'
  },
  'E220': {
    code: 'E220',
    name: 'Sulfur Dioxide',
    category: 'Preservative',
    concern: 'high',
    description: 'Preservative that can cause severe reactions in sensitive individuals, especially asthmatics.',
    healthEffects: [
      'Severe asthma attacks',
      'Breathing difficulties',
      'Headaches and nausea',
      'Allergic reactions'
    ],
    whyAvoid: [
      'Dangerous for asthmatics',
      'Severe allergic reactions',
      'Breathing problems',
      'Headaches and nausea'
    ],
    alternatives: 'Avoid if you have asthma or sulfite sensitivity'
  },
  'E249': {
    code: 'E249',
    name: 'Potassium Nitrite',
    category: 'Preservative',
    concern: 'very_high',
    description: 'Preservative used in processed meats, linked to cancer risk when consumed in high amounts.',
    healthEffects: [
      'Linked to increased cancer risk',
      'May form nitrosamines (carcinogens)',
      'Can cause headaches',
      'Potential cardiovascular effects'
    ],
    whyAvoid: [
      'Cancer risk',
      'Forms carcinogenic compounds',
      'No safe level established',
      'Better to avoid processed meats'
    ],
    alternatives: 'Choose fresh, unprocessed meats without nitrites'
  },
  'E250': {
    code: 'E250',
    name: 'Sodium Nitrite',
    category: 'Preservative',
    concern: 'very_high',
    description: 'Common in processed meats, can form cancer-causing nitrosamines.',
    healthEffects: [
      'Increased cancer risk',
      'Forms nitrosamines (carcinogens)',
      'May cause headaches',
      'Potential long-term health risks'
    ],
    whyAvoid: [
      'Cancer risk',
      'Carcinogenic compound formation',
      'No safe consumption level',
      'Avoid processed meats'
    ],
    alternatives: 'Choose nitrate/nitrite-free processed meats or fresh alternatives'
  },
  'E251': {
    code: 'E251',
    name: 'Sodium Nitrate',
    category: 'Preservative',
    concern: 'very_high',
    description: 'Preservative in processed meats that can convert to nitrites and form carcinogens.',
    healthEffects: [
      'Converts to nitrites in body',
      'Forms cancer-causing compounds',
      'Increased cancer risk',
      'Long-term health concerns'
    ],
    whyAvoid: [
      'Cancer risk',
      'Forms carcinogenic nitrosamines',
      'Better to avoid',
      'No safe level'
    ],
    alternatives: 'Choose fresh meats or nitrate-free processed options'
  },
  'E252': {
    code: 'E252',
    name: 'Potassium Nitrate',
    category: 'Preservative',
    concern: 'very_high',
    description: 'Preservative that can form cancer-causing compounds in processed meats.',
    healthEffects: [
      'Forms nitrosamines (carcinogens)',
      'Increased cancer risk',
      'Long-term health concerns',
      'No established safe level'
    ],
    whyAvoid: [
      'Cancer risk',
      'Carcinogenic compound formation',
      'Avoid processed meats',
      'Better alternatives available'
    ],
    alternatives: 'Choose fresh, unprocessed meats'
  },
  'E150D': {
    code: 'E150D',
    name: 'Caramel Color IV (Ammonia Sulfite Process)',
    category: 'Artificial Color',
    concern: 'moderate',
    description: 'Caramel coloring made using ammonia and sulfites. May contain compounds of concern.',
    healthEffects: [
      'May contain 4-methylimidazole (4-MEI)',
      'Potential carcinogenic compounds',
      'May cause allergic reactions in sulfite-sensitive individuals',
      'Linked to hyperactivity in some studies'
    ],
    whyAvoid: [
      'Contains potentially harmful compounds',
      'Sulfite sensitivity risk',
      'No nutritional value',
      'Purely for appearance',
      'Better alternatives available'
    ],
    alternatives: 'Choose products with natural coloring or caramel made without ammonia'
  },
  'E170': {
    code: 'E170',
    name: 'Calcium Carbonate',
    category: 'Acidity Regulator / Color',
    concern: 'low',
    description: 'Natural mineral compound used as an acidity regulator and white colorant. Generally safe.',
    healthEffects: [
      'Generally recognized as safe',
      'Source of calcium',
      'May help with bone health',
      'Rare digestive issues in high amounts'
    ],
    whyAvoid: [
      'No significant concerns for most people',
      'May cause constipation in excessive amounts',
      'Can interfere with iron absorption if taken with meals'
    ],
    benefits: [
      'Provides calcium',
      'Natural mineral',
      'Generally safe'
    ],
    alternatives: 'No need to avoid - generally safe additive'
  },
  'E412': {
    code: 'E412',
    name: 'Guar Gum',
    category: 'Thickener / Stabilizer',
    concern: 'low',
    description: 'Natural thickener derived from guar beans. Generally safe and may have health benefits.',
    healthEffects: [
      'May help lower cholesterol',
      'Can aid digestion',
      'May help with blood sugar control',
      'Generally well-tolerated',
      'Rare digestive issues in high amounts'
    ],
    whyAvoid: [
      'May cause bloating in sensitive individuals',
      'Can interfere with nutrient absorption in very high doses',
      'May cause digestive discomfort if consumed in excess'
    ],
    benefits: [
      'Natural plant-based thickener',
      'May have health benefits',
      'Generally safe'
    ],
    alternatives: 'No need to avoid - natural and generally safe'
  },
  'E451': {
    code: 'E451',
    name: 'Triphosphates',
    category: 'Emulsifier / Stabilizer',
    concern: 'moderate',
    description: 'Phosphate compounds used as emulsifiers and stabilizers. High phosphate intake may be concerning.',
    healthEffects: [
      'High phosphate intake may affect bone health',
      'May contribute to cardiovascular issues',
      'Can interfere with mineral absorption',
      'May affect kidney function in sensitive individuals'
    ],
    whyAvoid: [
      'High phosphate intake concerns',
      'May affect bone density',
      'Can interfere with calcium absorption',
      'Better to limit processed foods with phosphates'
    ],
    alternatives: 'Choose products with natural emulsifiers or limit processed foods'
  },
  'E500': {
    code: 'E500',
    name: 'Sodium Carbonate',
    category: 'Acidity Regulator / Raising Agent',
    concern: 'low',
    description: 'Common baking soda compound used as an acidity regulator. Generally safe in normal amounts.',
    healthEffects: [
      'Generally recognized as safe',
      'Common in baking',
      'May help with acid reflux in small amounts',
      'High amounts may cause digestive issues'
    ],
    whyAvoid: [
      'No significant concerns in normal amounts',
      'High sodium content',
      'May cause digestive issues in excessive amounts'
    ],
    benefits: [
      'Natural compound',
      'Common in baking',
      'Generally safe'
    ],
    alternatives: 'No need to avoid - commonly used and generally safe'
  },
  'E501': {
    code: 'E501',
    name: 'Potassium Carbonate',
    category: 'Acidity Regulator / Raising Agent',
    concern: 'low',
    description: 'Potassium salt used as an acidity regulator. Generally safe and provides potassium.',
    healthEffects: [
      'Generally recognized as safe',
      'Source of potassium',
      'May help with blood pressure',
      'Rare digestive issues in high amounts'
    ],
    whyAvoid: [
      'No significant concerns',
      'May cause digestive issues in excessive amounts',
      'Should be avoided by those with kidney problems'
    ],
    benefits: [
      'Provides potassium',
      'Natural compound',
      'Generally safe'
    ],
    alternatives: 'No need to avoid - generally safe additive'
  },
  'E635': {
    code: 'E635',
    name: 'Disodium 5\'-Ribonucleotides',
    category: 'Flavor Enhancer',
    concern: 'moderate',
    description: 'Flavor enhancer that works synergistically with MSG. May cause reactions in sensitive individuals.',
    healthEffects: [
      'May enhance MSG effects',
      'Can cause headaches in sensitive people',
      'May trigger migraines',
      'Potential digestive issues',
      'May increase appetite'
    ],
    whyAvoid: [
      'May cause adverse reactions',
      'Often used with MSG (double effect)',
      'May increase food cravings',
      'Used to mask low-quality ingredients',
      'No nutritional value'
    ],
    alternatives: 'Choose products with natural flavors or avoid processed foods with flavor enhancers'
  },
  // Additional common additives
  'E100': {
    code: 'E100',
    name: 'Curcumin',
    category: 'Natural Color',
    concern: 'low',
    description: 'Natural yellow color from turmeric. Generally safe and may have health benefits.',
    healthEffects: [
      'Natural antioxidant',
      'May have anti-inflammatory properties',
      'Generally well-tolerated',
      'Rare allergic reactions'
    ],
    whyAvoid: [],
    benefits: [
      'Natural colorant',
      'May have health benefits',
      'From turmeric'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E101': {
    code: 'E101',
    name: 'Riboflavin (Vitamin B2)',
    category: 'Natural Color / Vitamin',
    concern: 'low',
    description: 'Natural yellow color and essential vitamin. Generally safe and beneficial.',
    healthEffects: [
      'Essential vitamin (B2)',
      'Important for energy metabolism',
      'Natural colorant',
      'Generally safe'
    ],
    whyAvoid: [],
    benefits: [
      'Provides vitamin B2',
      'Natural colorant',
      'Essential nutrient'
    ],
    alternatives: 'No need to avoid - beneficial vitamin'
  },
  'E200': {
    code: 'E200',
    name: 'Sorbic Acid',
    category: 'Preservative',
    concern: 'low',
    description: 'Natural preservative derived from berries. Generally safe and effective.',
    healthEffects: [
      'Generally recognized as safe',
      'Natural preservative',
      'Rare allergic reactions',
      'Well-tolerated'
    ],
    whyAvoid: [
      'No significant concerns',
      'Rare skin sensitivity'
    ],
    benefits: [
      'Natural preservative',
      'Effective and safe',
      'From natural sources'
    ],
    alternatives: 'No need to avoid - natural and safe preservative'
  },
  'E202': {
    code: 'E202',
    name: 'Potassium Sorbate',
    category: 'Preservative',
    concern: 'low',
    description: 'Potassium salt of sorbic acid. Natural preservative generally considered safe.',
    healthEffects: [
      'Generally recognized as safe',
      'Natural preservative',
      'Rare allergic reactions',
      'Well-tolerated'
    ],
    whyAvoid: [
      'No significant concerns',
      'Rare skin sensitivity'
    ],
    benefits: [
      'Natural preservative',
      'Effective and safe'
    ],
    alternatives: 'No need to avoid - natural and safe'
  },
  'E300': {
    code: 'E300',
    name: 'Ascorbic Acid (Vitamin C)',
    category: 'Antioxidant / Vitamin',
    concern: 'low',
    description: 'Natural antioxidant and essential vitamin. Beneficial and safe.',
    healthEffects: [
      'Essential vitamin (C)',
      'Powerful antioxidant',
      'Supports immune system',
      'Generally safe'
    ],
    whyAvoid: [],
    benefits: [
      'Provides vitamin C',
      'Natural antioxidant',
      'Essential nutrient',
      'Health benefits'
    ],
    alternatives: 'No need to avoid - beneficial vitamin'
  },
  'E330': {
    code: 'E330',
    name: 'Citric Acid',
    category: 'Acidity Regulator / Preservative',
    concern: 'low',
    description: 'Natural acid from citrus fruits. Common and generally safe.',
    healthEffects: [
      'Natural compound',
      'Generally recognized as safe',
      'Common in foods',
      'Rare digestive issues in high amounts'
    ],
    whyAvoid: [
      'No significant concerns',
      'May cause tooth enamel erosion in excessive amounts'
    ],
    benefits: [
      'Natural acid',
      'From citrus fruits',
      'Common and safe'
    ],
    alternatives: 'No need to avoid - natural and safe'
  },
  'E407': {
    code: 'E407',
    name: 'Carrageenan',
    category: 'Thickener / Stabilizer',
    concern: 'moderate',
    description: 'Natural thickener from seaweed. Some concerns about degraded carrageenan.',
    healthEffects: [
      'May cause digestive issues in sensitive individuals',
      'Degraded carrageenan may be concerning',
      'Potential inflammation concerns',
      'Generally well-tolerated in food-grade form'
    ],
    whyAvoid: [
      'May cause digestive issues',
      'Some health concerns',
      'Better alternatives available'
    ],
    alternatives: 'Choose products with natural thickeners like agar or pectin'
  },
  'E415': {
    code: 'E415',
    name: 'Xanthan Gum',
    category: 'Thickener / Stabilizer',
    concern: 'low',
    description: 'Natural thickener from fermentation. Generally safe and effective.',
    healthEffects: [
      'Generally recognized as safe',
      'May help with blood sugar',
      'Well-tolerated',
      'Rare digestive issues'
    ],
    whyAvoid: [
      'No significant concerns',
      'May cause bloating in sensitive individuals'
    ],
    benefits: [
      'Natural thickener',
      'Effective and safe',
      'May have health benefits'
    ],
    alternatives: 'No need to avoid - generally safe'
  },
  'E471': {
    code: 'E471',
    name: 'Mono- and Diglycerides of Fatty Acids',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifiers that may affect gut health. Often from palm oil.',
    healthEffects: [
      'May disrupt gut microbiome',
      'Can affect intestinal barrier',
      'May increase inflammation',
      'Often from palm oil (environmental concerns)'
    ],
    whyAvoid: [
      'May affect gut health',
      'Palm oil concerns',
      'Better to limit processed foods',
      'May increase inflammation'
    ],
    alternatives: 'Choose products with natural emulsifiers or limit processed foods'
  },
  'E950': {
    code: 'E950',
    name: 'Acesulfame Potassium',
    category: 'Artificial Sweetener',
    concern: 'moderate',
    description: 'Artificial sweetener that may affect taste and appetite.',
    healthEffects: [
      'May affect taste perception',
      'May increase cravings for sweet foods',
      'Potential digestive issues',
      'May affect gut bacteria'
    ],
    whyAvoid: [
      'May increase sweet cravings',
      'Artificial sweetener',
      'May affect gut health',
      'Better alternatives available'
    ],
    alternatives: 'Use natural sweeteners or reduce overall sweetness'
  },
  'E955': {
    code: 'E955',
    name: 'Sucralose',
    category: 'Artificial Sweetener',
    concern: 'moderate',
    description: 'Artificial sweetener made from sugar. May affect gut bacteria and metabolism.',
    healthEffects: [
      'May affect gut bacteria',
      'May affect blood sugar regulation',
      'Potential digestive issues',
      'May increase cravings'
    ],
    whyAvoid: [
      'May affect gut microbiome',
      'May disrupt metabolism',
      'Artificial sweetener',
      'Better alternatives available'
    ],
    alternatives: 'Use natural sweeteners like stevia or reduce overall sweetness'
  },
  'E133': {
    code: 'E133',
    name: 'Brilliant Blue FCF',
    category: 'Artificial Color',
    concern: 'high',
    description: 'Synthetic blue food coloring that may cause hyperactivity and allergic reactions.',
    healthEffects: [
      'Linked to hyperactivity in children',
      'May cause allergic reactions',
      'Potential behavioral effects',
      'May cause skin sensitivity'
    ],
    whyAvoid: [
      'Hyperactivity concerns',
      'Allergic reactions',
      'No nutritional value',
      'Purely cosmetic ingredient'
    ],
    alternatives: 'Use natural blue colors from sources like spirulina or avoid artificial colors'
  },
  'E160A': {
    code: 'E160A',
    name: 'Carotene (Mixed Carotenoids)',
    category: 'Natural Color',
    concern: 'low',
    description: 'Natural color from carrots and other vegetables. Generally safe and beneficial.',
    healthEffects: [
      'Natural antioxidants',
      'May support vision health',
      'Generally well-tolerated',
      'Rare allergic reactions'
    ],
    whyAvoid: [],
    benefits: [
      'Natural colorant',
      'Provides antioxidants',
      'May support eye health',
      'From natural sources'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E262': {
    code: 'E262',
    name: 'Sodium Acetate',
    category: 'Acidity Regulator / Preservative',
    concern: 'low',
    description: 'Sodium salt used as an acidity regulator. Generally safe in normal amounts.',
    healthEffects: [
      'Generally recognized as safe',
      'Common in foods',
      'May cause digestive issues in high amounts',
      'Well-tolerated in normal quantities'
    ],
    whyAvoid: [
      'No significant concerns in normal amounts',
      'High sodium content'
    ],
    alternatives: 'No need to avoid - generally safe additive'
  },
  'E270': {
    code: 'E270',
    name: 'Lactic Acid',
    category: 'Acidity Regulator / Preservative',
    concern: 'low',
    description: 'Natural acid produced by fermentation. Generally safe and may have benefits.',
    healthEffects: [
      'Natural fermentation product',
      'May support gut health',
      'Generally safe',
      'Rare digestive issues in high amounts'
    ],
    whyAvoid: [],
    benefits: [
      'Natural acid',
      'May support digestion',
      'From fermentation',
      'Generally safe'
    ],
    alternatives: 'No need to avoid - natural and potentially beneficial'
  },
  'E306': {
    code: 'E306',
    name: 'Vitamin E (Tocopherols)',
    category: 'Antioxidant / Vitamin',
    concern: 'low',
    description: 'Natural antioxidant and essential vitamin. Beneficial for health.',
    healthEffects: [
      'Essential vitamin (E)',
      'Powerful antioxidant',
      'Supports immune system',
      'May protect cells from damage'
    ],
    whyAvoid: [],
    benefits: [
      'Provides vitamin E',
      'Natural antioxidant',
      'Essential nutrient',
      'Health benefits'
    ],
    alternatives: 'No need to avoid - beneficial vitamin'
  },
  'E322II': {
    code: 'E322II',
    name: 'Lecithins (Sunflower)',
    category: 'Emulsifier',
    concern: 'low',
    description: 'Natural emulsifier derived from sunflower seeds. Generally considered safe.',
    healthEffects: [
      'May help with cholesterol levels',
      'Generally well-tolerated',
      'Rare allergic reactions in sensitive individuals',
      'From natural source'
    ],
    whyAvoid: [
      'May contain traces of allergens',
      'Rare sunflower allergy'
    ],
    benefits: [
      'Natural emulsifier',
      'May have health benefits',
      'From sunflower seeds'
    ],
    alternatives: 'No need to avoid - generally safe natural additive'
  },
  'E375': {
    code: 'E375',
    name: 'Niacin (Vitamin B3)',
    category: 'Color Retention Agent / Vitamin',
    concern: 'low',
    description: 'Essential vitamin used as a color retention agent. Beneficial and safe.',
    healthEffects: [
      'Essential vitamin (B3)',
      'Important for energy metabolism',
      'Supports nervous system',
      'May cause flushing in high doses'
    ],
    whyAvoid: [],
    benefits: [
      'Provides vitamin B3',
      'Essential nutrient',
      'Supports metabolism',
      'Natural vitamin'
    ],
    alternatives: 'No need to avoid - beneficial vitamin'
  },
  'E385': {
    code: 'E385',
    name: 'Calcium Disodium EDTA',
    category: 'Antioxidant / Preservative',
    concern: 'moderate',
    description: 'Synthetic compound used as antioxidant. Some concerns about mineral depletion.',
    healthEffects: [
      'May deplete essential minerals',
      'Potential digestive issues',
      'May affect nutrient absorption',
      'Generally recognized as safe in small amounts'
    ],
    whyAvoid: [
      'May affect mineral balance',
      'Potential nutrient depletion',
      'Better alternatives available'
    ],
    alternatives: 'Use natural antioxidants like vitamin C or E'
  },
  'E422': {
    code: 'E422',
    name: 'Glycerol (Glycerin)',
    category: 'Humectant / Sweetener',
    concern: 'low',
    description: 'Natural humectant and sweetener. Generally safe and effective.',
    healthEffects: [
      'Natural compound',
      'Generally recognized as safe',
      'May cause digestive issues in high amounts',
      'Well-tolerated in normal quantities'
    ],
    whyAvoid: [
      'No significant concerns',
      'May cause laxative effects in excessive amounts'
    ],
    benefits: [
      'Natural humectant',
      'Effective sweetener',
      'Generally safe'
    ],
    alternatives: 'No need to avoid - natural and safe'
  },
  'E440': {
    code: 'E440',
    name: 'Pectins',
    category: 'Thickener / Stabilizer',
    concern: 'low',
    description: 'Natural thickener from fruits. Generally safe and may have health benefits.',
    healthEffects: [
      'Natural fiber from fruits',
      'May support digestive health',
      'Generally safe',
      'Rare allergic reactions'
    ],
    whyAvoid: [],
    benefits: [
      'Natural thickener',
      'Provides dietary fiber',
      'May support digestion',
      'From fruit sources'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E162': {
    code: 'E162',
    name: 'Beetroot Red (Betanin)',
    category: 'Color',
    concern: 'low',
    description: 'Natural red pigment extracted from beetroot. Water-soluble and stable in acidic conditions.',
    healthEffects: [
      'Natural pigment from beets',
      'Contains antioxidants',
      'Generally recognized as safe',
      'May have mild laxative effects in high amounts'
    ],
    whyAvoid: [],
    benefits: [
      'Natural red color',
      'From vegetable source',
      'Antioxidant properties',
      'Stable in acidic foods'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E163': {
    code: 'E163',
    name: 'Anthocyanins',
    category: 'Color',
    concern: 'low',
    description: 'Natural pigments from berries and grapes. Powerful antioxidants with potential health benefits.',
    healthEffects: [
      'Powerful antioxidants',
      'May support heart health',
      'Anti-inflammatory properties',
      'Generally recognized as safe'
    ],
    whyAvoid: [],
    benefits: [
      'Natural colors from fruits',
      'Antioxidant properties',
      'May support cardiovascular health',
      'From berry sources'
    ],
    alternatives: 'No need to avoid - highly beneficial natural pigments'
  },
  'E171': {
    code: 'E171',
    name: 'Titanium Dioxide',
    category: 'Color / Anti-caking Agent',
    concern: 'high',
    description: 'White pigment used in foods, toothpaste, and cosmetics. Controversial due to potential genotoxicity.',
    healthEffects: [
      'May cause DNA damage',
      'Potential carcinogenic effects',
      'Can accumulate in body tissues',
      'Particle size may affect absorption'
    ],
    whyAvoid: [
      'Potential genotoxic effects',
      'May cause gastrointestinal inflammation',
      'Nano-particle form may cross biological barriers',
      'Banned in some countries for food use'
    ],
    benefits: [
      'Bright white color',
      'Stable pigment',
      'Prevents caking in powders'
    ],
    alternatives: 'Use natural white colors or avoid white coloring altogether'
  },
  'E210': {
    code: 'E210',
    name: 'Benzoic Acid',
    category: 'Preservative',
    concern: 'moderate',
    description: 'Natural preservative found in cranberries. Synthetic version used as antibacterial agent.',
    healthEffects: [
      'Effective against bacteria and fungi',
      'May cause allergic reactions',
      'Generally recognized as safe in small amounts',
      'May affect behavior in sensitive individuals'
    ],
    whyAvoid: [
      'May cause skin reactions',
      'Potential endocrine disruptor',
      'May affect behavior and hyperactivity'
    ],
    benefits: [
      'Natural preservative',
      'Effective antibacterial agent',
      'From natural sources (cranberries)'
    ],
    alternatives: 'Use natural preservatives like vinegar or salt'
  },
  'E260': {
    code: 'E260',
    name: 'Acetic Acid (Vinegar)',
    category: 'Acidity Regulator / Preservative',
    concern: 'low',
    description: 'The main acid in vinegar. Used as acidity regulator and preservative. Natural and beneficial.',
    healthEffects: [
      'Natural acid from fermentation',
      'May support digestion',
      'Antimicrobial properties',
      'Generally recognized as safe'
    ],
    whyAvoid: [],
    benefits: [
      'Natural acidity regulator',
      'Antimicrobial properties',
      'May support digestion',
      'From natural fermentation'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E296': {
    code: 'E296',
    name: 'Malic Acid',
    category: 'Acidity Regulator / Flavor Enhancer',
    concern: 'low',
    description: 'Natural acid found in apples and other fruits. Used to enhance flavors and regulate acidity.',
    healthEffects: [
      'Natural acid from fruits',
      'May support energy production',
      'Generally recognized as safe',
      'May cause digestive issues in high amounts'
    ],
    whyAvoid: [
      'May cause digestive discomfort in sensitive individuals'
    ],
    benefits: [
      'Natural flavor enhancer',
      'From fruit sources',
      'May support metabolism',
      'Enhances fruit flavors'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E325': {
    code: 'E325',
    name: 'Sodium Lactate',
    category: 'Acidity Regulator / Humectant',
    concern: 'low',
    description: 'Salt of lactic acid. Used as acidity regulator and humectant. Natural compound from fermentation.',
    healthEffects: [
      'Natural compound from lactic acid fermentation',
      'May moisturize skin when used topically',
      'Generally recognized as safe',
      'May cause digestive issues in high amounts'
    ],
    whyAvoid: [
      'May contain traces of allergens',
      'High sodium content'
    ],
    benefits: [
      'Natural humectant',
      'From fermentation process',
      'May have moisturizing properties',
      'Generally safe'
    ],
    alternatives: 'No need to avoid - natural and safe'
  },
  'E334': {
    code: 'E334',
    name: 'Tartaric Acid',
    category: 'Acidity Regulator / Antioxidant',
    concern: 'low',
    description: 'Natural acid found in grapes and wine. Used as acidity regulator and antioxidant.',
    healthEffects: [
      'Natural acid from grapes',
      'Antioxidant properties',
      'Generally recognized as safe',
      'May cause digestive issues in high amounts'
    ],
    whyAvoid: [],
    benefits: [
      'Natural acidity regulator',
      'Antioxidant properties',
      'From grape sources',
      'Enhances fruit flavors'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E338': {
    code: 'E338',
    name: 'Phosphoric Acid',
    category: 'Acidity Regulator / Antioxidant',
    concern: 'moderate',
    description: 'Mineral acid used in soft drinks. May affect bone health and nutrient absorption.',
    healthEffects: [
      'Can affect calcium absorption',
      'May contribute to bone loss',
      'Strong acid that can erode tooth enamel',
      'Generally recognized as safe in small amounts'
    ],
    whyAvoid: [
      'May affect bone health',
      'Contributes to tooth decay',
      'Can deplete essential minerals'
    ],
    benefits: [
      'Effective acidity regulator',
      'Antioxidant properties',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural acids like citric acid or vinegar'
  },
  'E460': {
    code: 'E460',
    name: 'Cellulose (Microcrystalline Cellulose)',
    category: 'Bulking Agent / Anti-caking Agent',
    concern: 'low',
    description: 'Natural fiber from plant cell walls. Used as bulking agent and anti-caking agent.',
    healthEffects: [
      'Natural dietary fiber',
      'Generally recognized as safe',
      'May support digestive health',
      'Insoluble fiber'
    ],
    whyAvoid: [],
    benefits: [
      'Natural fiber source',
      'May support digestion',
      'Prevents caking in powders',
      'From plant sources'
    ],
    alternatives: 'No need to avoid - natural and beneficial fiber'
  },
  'E472A': {
    code: 'E472A',
    name: 'Acetic Acid Esters of Mono- and Diglycerides',
    category: 'Emulsifier',
    concern: 'low',
    description: 'Emulsifier made from glycerol, fatty acids, and acetic acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural fatty acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E150C': {
    code: 'E150C',
    name: 'Ammonia Caramel',
    category: 'Color',
    concern: 'moderate',
    description: 'Brown color produced by heating sugars with ammonia. Used in beers, sauces, and confectionery.',
    healthEffects: [
      'May contain contaminants from manufacturing',
      'Potential to form harmful compounds',
      'Generally recognized as safe in small amounts',
      'May affect behavior in sensitive individuals'
    ],
    whyAvoid: [
      'May contain 4-methylimidazole (potential carcinogen)',
      'Manufacturing process creates potentially harmful compounds',
      'Associated with hyperactivity in some studies'
    ],
    benefits: [
      'Provides brown color',
      'Stable in various conditions',
      'Widely used in beverages and foods'
    ],
    alternatives: 'Use natural caramel or malt extracts'
  },
  'E160D': {
    code: 'E160D',
    name: 'Lycopene',
    category: 'Color',
    concern: 'low',
    description: 'Natural red pigment from tomatoes and other red fruits. Powerful antioxidant with potential health benefits.',
    healthEffects: [
      'Powerful antioxidant',
      'May reduce risk of certain cancers',
      'May support prostate health',
      'Generally recognized as safe'
    ],
    whyAvoid: [],
    benefits: [
      'Natural red color',
      'Antioxidant properties',
      'May support cardiovascular health',
      'From natural sources like tomatoes'
    ],
    alternatives: 'No need to avoid - highly beneficial natural pigment'
  },
  'E161G': {
    code: 'E161G',
    name: 'Canthaxanthin',
    category: 'Color',
    concern: 'moderate',
    description: 'Orange-red pigment found in some algae and used in animal feed. Some concerns about retinal toxicity.',
    healthEffects: [
      'May accumulate in retina',
      'Potential vision problems with high doses',
      'Used in animal feed for pigmentation',
      'Generally recognized as safe in small amounts'
    ],
    whyAvoid: [
      'May cause retinal deposits',
      'Potential vision concerns',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Bright orange-red color',
      'Stable pigment',
      'Used in aquaculture'
    ],
    alternatives: 'Use natural carotenoids like beta-carotene'
  },
  'E173': {
    code: 'E173',
    name: 'Aluminium',
    category: 'Color',
    concern: 'high',
    description: 'Metallic aluminum powder used as decorative color in some foods. Not intended for consumption.',
    healthEffects: [
      'Not intended for consumption',
      'May cause digestive irritation',
      'Potential neurotoxicity concerns',
      'Poorly absorbed but may accumulate'
    ],
    whyAvoid: [
      'Not suitable for food consumption',
      'Potential toxicity concerns',
      'May cause gastrointestinal issues'
    ],
    benefits: [
      'Decorative metallic appearance',
      'Stable in various conditions'
    ],
    alternatives: 'Avoid metallic decorations or use natural edible decorations'
  },
  'E234': {
    code: 'E234',
    name: 'Nisin',
    category: 'Preservative',
    concern: 'low',
    description: 'Natural preservative produced by bacteria. Used in cheese and other dairy products.',
    healthEffects: [
      'Natural antibacterial peptide',
      'Produced by Lactococcus lactis',
      'Generally recognized as safe',
      'Rare allergic reactions'
    ],
    whyAvoid: [],
    benefits: [
      'Natural preservative',
      'Effective against harmful bacteria',
      'Safe in recommended amounts',
      'Used in dairy products'
    ],
    alternatives: 'No need to avoid - natural and safe preservative'
  },
  'E280': {
    code: 'E280',
    name: 'Propionic Acid',
    category: 'Preservative',
    concern: 'low',
    description: 'Natural acid found in fermented foods. Used as preservative against mold and bacteria.',
    healthEffects: [
      'Natural acid from fermentation',
      'Effective against mold and bacteria',
      'Generally recognized as safe',
      'Rare allergic reactions'
    ],
    whyAvoid: [
      'May cause skin reactions in sensitive individuals'
    ],
    benefits: [
      'Natural preservative',
      'Effective against microorganisms',
      'From natural fermentation',
      'Safe in recommended amounts'
    ],
    alternatives: 'No need to avoid - natural and effective'
  },
  'E326': {
    code: 'E326',
    name: 'Potassium Lactate',
    category: 'Acidity Regulator / Humectant',
    concern: 'low',
    description: 'Potassium salt of lactic acid. Used as acidity regulator and humectant.',
    healthEffects: [
      'Natural compound from lactic acid',
      'Provides potassium',
      'Generally recognized as safe',
      'May cause digestive issues in high amounts'
    ],
    whyAvoid: [
      'May contain traces of allergens',
      'Potential digestive issues'
    ],
    benefits: [
      'Natural humectant',
      'Provides potassium',
      'From fermentation process',
      'Generally safe'
    ],
    alternatives: 'No need to avoid - natural and safe'
  },
  'E339': {
    code: 'E339',
    name: 'Sodium Phosphates',
    category: 'Emulsifier / Stabilizer / Acidity Regulator',
    concern: 'moderate',
    description: 'Sodium salts of phosphoric acid. Used as emulsifiers, stabilizers, and acidity regulators.',
    healthEffects: [
      'Effective emulsifier and stabilizer',
      'May affect calcium absorption',
      'Generally recognized as safe in small amounts',
      'High sodium content'
    ],
    whyAvoid: [
      'May affect mineral balance',
      'High sodium content',
      'Potential to affect kidney health'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture and stability',
      'Widely used in processed foods'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E400': {
    code: 'E400',
    name: 'Alginic Acid',
    category: 'Thickener / Stabilizer',
    concern: 'low',
    description: 'Natural polysaccharide from brown algae. Used as thickener and stabilizer.',
    healthEffects: [
      'Natural polysaccharide from seaweed',
      'Generally recognized as safe',
      'May support digestive health',
      'Soluble fiber'
    ],
    whyAvoid: [],
    benefits: [
      'Natural thickener',
      'Provides dietary fiber',
      'From seaweed sources',
      'Stable in various conditions'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E406': {
    code: 'E406',
    name: 'Agar',
    category: 'Thickener / Gelling Agent',
    concern: 'low',
    description: 'Natural gelling agent from red seaweed. Used in desserts and microbiology.',
    healthEffects: [
      'Natural polysaccharide from seaweed',
      'Generally recognized as safe',
      'High in fiber',
      'May support digestion'
    ],
    whyAvoid: [],
    benefits: [
      'Natural gelling agent',
      'Provides dietary fiber',
      'From natural seaweed',
      'Used in desserts and jellies'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E420': {
    code: 'E420',
    name: 'Sorbitol',
    category: 'Sweetener / Humectant',
    concern: 'moderate',
    description: 'Sugar alcohol used as sweetener and humectant. May cause digestive issues in sensitive individuals.',
    healthEffects: [
      'Sugar alcohol sweetener',
      'May cause digestive issues',
      'Lower glycemic index than sugar',
      'Generally recognized as safe'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'May cause bloating and gas',
      'Excessive consumption not recommended'
    ],
    benefits: [
      'Low-calorie sweetener',
      'Humectant properties',
      'Does not promote tooth decay',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural sweeteners like stevia or erythritol'
  },
  'E421': {
    code: 'E421',
    name: 'Mannitol',
    category: 'Sweetener / Anti-caking Agent',
    concern: 'moderate',
    description: 'Sugar alcohol used as sweetener and anti-caking agent. May cause digestive issues.',
    healthEffects: [
      'Sugar alcohol sweetener',
      'May cause digestive issues',
      'Generally recognized as safe',
      'Lower glycemic impact than sugar'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'May cause diarrhea in high amounts',
      'Potential laxative effect'
    ],
    benefits: [
      'Low-calorie sweetener',
      'Prevents caking in powders',
      'Does not promote tooth decay',
      'Stable compound'
    ],
    alternatives: 'Use natural sweeteners or avoid artificial sweeteners'
  },
  'E461': {
    code: 'E461',
    name: 'Methyl Cellulose',
    category: 'Emulsifier / Thickener',
    concern: 'low',
    description: 'Modified cellulose used as emulsifier and thickener. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Modified plant fiber',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Not absorbed by the body'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential gastrointestinal issues'
    ],
    benefits: [
      'Effective thickener and emulsifier',
      'Stable in various conditions',
      'From plant sources',
      'Generally safe'
    ],
    alternatives: 'Use natural thickeners like guar gum'
  },
  'E570': {
    code: 'E570',
    name: 'Stearic Acid',
    category: 'Emulsifier / Anti-caking Agent',
    concern: 'low',
    description: 'Natural fatty acid used as emulsifier and anti-caking agent. Generally safe.',
    healthEffects: [
      'Natural fatty acid',
      'Generally recognized as safe',
      'Essential for cell membranes',
      'Rare allergic reactions'
    ],
    whyAvoid: [],
    benefits: [
      'Natural emulsifier',
      'Prevents caking in powders',
      'From natural sources',
      'Essential fatty acid'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E620': {
    code: 'E620',
    name: 'Glutamic Acid',
    category: 'Flavour Enhancer',
    concern: 'low',
    description: 'Amino acid used as flavor enhancer. Natural component of many foods.',
    healthEffects: [
      'Essential amino acid',
      'Natural component of proteins',
      'Generally recognized as safe',
      'Rare allergic reactions'
    ],
    whyAvoid: [],
    benefits: [
      'Essential amino acid',
      'Enhances natural flavors',
      'From natural sources',
      'Important for metabolism'
    ],
    alternatives: 'No need to avoid - natural and beneficial amino acid'
  },
  'E900': {
    code: 'E900',
    name: 'Dimethyl Polysiloxane',
    category: 'Anti-foaming Agent',
    concern: 'moderate',
    description: 'Silicone-based anti-foaming agent. Some concerns about environmental persistence.',
    healthEffects: [
      'Effective anti-foaming agent',
      'Generally recognized as safe',
      'Poorly absorbed by the body',
      'May cause digestive issues in high amounts'
    ],
    whyAvoid: [
      'Environmental persistence concerns',
      'Potential digestive issues',
      'Synthetic compound'
    ],
    benefits: [
      'Effective anti-foaming agent',
      'Stable in various conditions',
      'Widely used in food processing'
    ],
    alternatives: 'Use natural anti-foaming agents'
  },
  'E901': {
    code: 'E901',
    name: 'White and Yellow Beeswax',
    category: 'Glazing Agent',
    concern: 'low',
    description: 'Natural wax from bees used as glazing agent. Generally safe but may contain contaminants.',
    healthEffects: [
      'Natural wax from bees',
      'Generally recognized as safe',
      'May contain pesticide residues',
      'Rare allergic reactions'
    ],
    whyAvoid: [
      'May contain pesticide residues',
      'Potential allergen (bee products)'
    ],
    benefits: [
      'Natural glazing agent',
      'From natural sources',
      'Provides shiny appearance',
      'Used in confectionery'
    ],
    alternatives: 'Use carnauba wax or avoid glazing'
  },
  'E903': {
    code: 'E903',
    name: 'Carnauba Wax',
    category: 'Glazing Agent',
    concern: 'low',
    description: 'Natural wax from carnauba palm used as glazing agent. Generally safe.',
    healthEffects: [
      'Natural wax from palm trees',
      'Generally recognized as safe',
      'Not absorbed by the body',
      'Rare allergic reactions'
    ],
    whyAvoid: [],
    benefits: [
      'Natural glazing agent',
      'Provides shiny appearance',
      'From plant sources',
      'Used in confectionery and fruits'
    ],
    alternatives: 'No need to avoid - natural and safe'
  },
  'E904': {
    code: 'E904',
    name: 'Shellac',
    category: 'Glazing Agent',
    concern: 'moderate',
    description: 'Natural resin from lac insects used as glazing agent. Some concerns about insect origin.',
    healthEffects: [
      'Natural resin from insects',
      'Generally recognized as safe',
      'May cause reactions in sensitive individuals',
      'Not absorbed by the body'
    ],
    whyAvoid: [
      'From insect sources (potential allergen)',
      'Some people prefer to avoid animal-derived products'
    ],
    benefits: [
      'Natural glazing agent',
      'Provides shiny appearance',
      'Stable in various conditions',
      'Used in confectionery'
    ],
    alternatives: 'Use plant-based glazing agents like carnauba wax'
  },
  'E920': {
    code: 'E920',
    name: 'L-Cysteine',
    category: 'Dough Conditioner',
    concern: 'low',
    description: 'Amino acid used as dough conditioner. May be derived from hair or feathers.',
    healthEffects: [
      'Essential amino acid',
      'Used as dough conditioner',
      'Generally recognized as safe',
      'Rare allergic reactions'
    ],
    whyAvoid: [
      'May be derived from animal sources',
      'Potential allergen concerns'
    ],
    benefits: [
      'Essential amino acid',
      'Improves dough quality',
      'Natural amino acid'
    ],
    alternatives: 'Use plant-based dough conditioners'
  },
  'E938': {
    code: 'E938',
    name: 'Argon',
    category: 'Packaging Gas',
    concern: 'low',
    description: 'Inert gas used in food packaging to prevent oxidation. Completely safe.',
    healthEffects: [
      'Inert noble gas',
      'No toxicity concerns',
      'Used in food packaging',
      'Naturally occurring gas'
    ],
    whyAvoid: [],
    benefits: [
      'Prevents food oxidation',
      'Extends shelf life',
      'Safe and inert',
      'Naturally occurring'
    ],
    alternatives: 'No need to avoid - completely safe gas'
  },
  'E941': {
    code: 'E941',
    name: 'Nitrogen',
    category: 'Packaging Gas / Propellant',
    concern: 'low',
    description: 'Inert gas used in food packaging and as propellant. Completely safe.',
    healthEffects: [
      'Inert gas',
      'Makes up 78% of air',
      'No toxicity concerns',
      'Essential for life'
    ],
    whyAvoid: [],
    benefits: [
      'Prevents food oxidation',
      'Used as propellant in whipped cream',
      'Safe and abundant',
      'Essential atmospheric gas'
    ],
    alternatives: 'No need to avoid - completely safe and natural'
  },
  'E942': {
    code: 'E942',
    name: 'Nitrous Oxide',
    category: 'Propellant',
    concern: 'moderate',
    description: 'Gas used as propellant in whipped cream. May cause vitamin B12 depletion with excessive use.',
    healthEffects: [
      'Used as propellant',
      'May deplete vitamin B12 with excessive use',
      'Generally recognized as safe in small amounts',
      'Recreational abuse can be dangerous'
    ],
    whyAvoid: [
      'May cause vitamin B12 depletion',
      'Potential for abuse',
      'Excessive consumption not recommended'
    ],
    benefits: [
      'Creates whipped cream texture',
      'Safe in recommended amounts',
      'Widely used in food industry'
    ],
    alternatives: 'Use nitrous oxide-free whipped cream or natural whipping methods'
  },
  'E948': {
    code: 'E948',
    name: 'Oxygen',
    category: 'Packaging Gas',
    concern: 'low',
    description: 'Gas used in modified atmosphere packaging. Essential for life.',
    healthEffects: [
      'Essential for human life',
      'Used in food packaging',
      'No toxicity concerns',
      'Naturally occurring gas'
    ],
    whyAvoid: [],
    benefits: [
      'Essential for life',
      'Used in some packaging',
      'Safe and necessary',
      'Naturally abundant'
    ],
    alternatives: 'No need to avoid - essential gas'
  },
  'E953': {
    code: 'E953',
    name: 'Isomalt',
    category: 'Sweetener',
    concern: 'low',
    description: 'Sugar substitute used as sweetener. Lower glycemic index than sugar.',
    healthEffects: [
      'Sugar substitute',
      'Lower glycemic impact than sugar',
      'May cause digestive issues in high amounts',
      'Generally recognized as safe'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Excessive consumption not recommended'
    ],
    benefits: [
      'Low-calorie sweetener',
      'Does not promote tooth decay',
      'Stable in heat',
      'Suitable for diabetics'
    ],
    alternatives: 'Use natural sweeteners like stevia'
  },
  'E960': {
    code: 'E960',
    name: 'Steviol Glycosides',
    category: 'Sweetener',
    concern: 'low',
    description: 'Natural sweeteners from stevia plant. Much sweeter than sugar with no calories.',
    healthEffects: [
      'Natural sweeteners from stevia',
      'No calories',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals'
    ],
    whyAvoid: [],
    benefits: [
      'Natural sweetener',
      'Zero calories',
      'Much sweeter than sugar',
      'From plant sources'
    ],
    alternatives: 'No need to avoid - natural and beneficial sweetener'
  },
  'E967': {
    code: 'E967',
    name: 'Xylitol',
    category: 'Sweetener',
    concern: 'moderate',
    description: 'Sugar alcohol used as sweetener. May cause digestive issues but good for dental health.',
    healthEffects: [
      'Sugar alcohol sweetener',
      'May reduce risk of tooth decay',
      'May cause digestive issues',
      'Generally recognized as safe'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'May cause bloating and gas',
      'Excessive consumption not recommended'
    ],
    benefits: [
      'Low-calorie sweetener',
      'May prevent tooth decay',
      'Does not affect blood sugar',
      'Natural sweetener'
    ],
    alternatives: 'Use other natural sweeteners like stevia or erythritol'
  },
  'E968': {
    code: 'E968',
    name: 'Erythritol',
    category: 'Sweetener',
    concern: 'low',
    description: 'Sugar alcohol used as sweetener. Well-tolerated and good for dental health.',
    healthEffects: [
      'Sugar alcohol sweetener',
      'Generally well-tolerated',
      'May reduce risk of tooth decay',
      'Lower glycemic impact than sugar'
    ],
    whyAvoid: [
      'May cause digestive issues in very high amounts'
    ],
    benefits: [
      'Low-calorie sweetener',
      'Well-tolerated by most people',
      'Does not promote tooth decay',
      'Zero glycemic index'
    ],
    alternatives: 'No need to avoid - generally well-tolerated sweetener'
  },
  'E120': {
    code: 'E120',
    name: 'Cochineal (Carminic Acid)',
    category: 'Color',
    concern: 'moderate',
    description: 'Natural red pigment from cochineal insects. Used in foods and cosmetics.',
    healthEffects: [
      'Natural pigment from insects',
      'May cause allergic reactions',
      'Generally recognized as safe in small amounts',
      'Rare severe reactions'
    ],
    whyAvoid: [
      'From insect sources (potential allergen)',
      'Some people prefer to avoid animal-derived products',
      'May cause reactions in sensitive individuals'
    ],
    benefits: [
      'Natural red color',
      'Stable in various conditions',
      'From natural sources'
    ],
    alternatives: 'Use plant-based red colors like beet juice or paprika'
  },
  'E132': {
    code: 'E132',
    name: 'Indigo Carmine',
    category: 'Color',
    concern: 'moderate',
    description: 'Synthetic blue color. Some concerns about potential toxicity.',
    healthEffects: [
      'Synthetic color',
      'May cause allergic reactions',
      'Potential carcinogenic effects',
      'Generally permitted in small amounts'
    ],
    whyAvoid: [
      'Artificial coloring',
      'May cause allergic reactions',
      'Potential health concerns',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Bright blue color',
      'Stable coloring agent'
    ],
    alternatives: 'Use natural blue colors like spirulina or blueberry extract'
  },
  'E150B': {
    code: 'E150B',
    name: 'Caustic Sulphite Caramel',
    category: 'Color',
    concern: 'moderate',
    description: 'Brown color produced by heating sugars with sulfite. Used in beers and sauces.',
    healthEffects: [
      'May contain sulfite residues',
      'Potential allergic reactions',
      'Generally recognized as safe in small amounts',
      'May affect behavior in sensitive individuals'
    ],
    whyAvoid: [
      'May contain sulfite residues',
      'Potential allergen (sulfites)',
      'Manufacturing process may create contaminants'
    ],
    benefits: [
      'Provides brown color',
      'Stable in various conditions',
      'Used in beverages and sauces'
    ],
    alternatives: 'Use natural caramel or malt extracts'
  },
  'E160B': {
    code: 'E160B',
    name: 'Annatto (Bixin, Norbixin)',
    category: 'Color',
    concern: 'low',
    description: 'Natural orange-yellow pigment from annatto seeds. Generally safe and may have health benefits.',
    healthEffects: [
      'Natural pigment from seeds',
      'May have antioxidant properties',
      'Generally recognized as safe',
      'Rare allergic reactions'
    ],
    whyAvoid: [],
    benefits: [
      'Natural color from annatto seeds',
      'May have antioxidant properties',
      'Stable in various conditions',
      'From natural plant source'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E160C': {
    code: 'E160C',
    name: 'Paprika Extract',
    category: 'Color',
    concern: 'low',
    description: 'Natural red-orange pigment from paprika and red peppers. Contains antioxidants and beneficial compounds.',
    healthEffects: [
      'Natural pigment from peppers',
      'Contains antioxidants',
      'May support immune function',
      'Generally recognized as safe'
    ],
    whyAvoid: [],
    benefits: [
      'Natural red-orange color',
      'From pepper sources',
      'Antioxidant properties',
      'May support health'
    ],
    alternatives: 'No need to avoid - highly beneficial natural pigment'
  },
  'E161B': {
    code: 'E161B',
    name: 'Lutein',
    category: 'Color',
    concern: 'low',
    description: 'Natural yellow pigment found in marigolds and egg yolks. Important for eye health.',
    healthEffects: [
      'Important for eye health',
      'May protect against macular degeneration',
      'Powerful antioxidant',
      'Generally recognized as safe'
    ],
    whyAvoid: [],
    benefits: [
      'Supports eye health',
      'Antioxidant properties',
      'Natural pigment',
      'May protect vision'
    ],
    alternatives: 'No need to avoid - beneficial for eye health'
  },
  'E164': {
    code: 'E164',
    name: 'Saffron',
    category: 'Color / Flavoring',
    concern: 'low',
    description: 'Natural yellow pigment and flavoring from saffron crocus. Expensive but highly beneficial.',
    healthEffects: [
      'Powerful antioxidant',
      'May have anti-inflammatory effects',
      'May support brain health',
      'Generally recognized as safe'
    ],
    whyAvoid: [],
    benefits: [
      'Natural yellow color and flavor',
      'Powerful antioxidant',
      'May support cognitive function',
      'From natural flower source'
    ],
    alternatives: 'No need to avoid - highly beneficial natural spice'
  },
  'E180': {
    code: 'E180',
    name: 'Litholrubine BK',
    category: 'Color',
    concern: 'moderate',
    description: 'Synthetic red color. Some concerns about potential toxicity and allergenicity.',
    healthEffects: [
      'Synthetic color',
      'May cause allergic reactions',
      'Potential carcinogenic effects',
      'Generally permitted in small amounts'
    ],
    whyAvoid: [
      'Artificial coloring',
      'May cause allergic reactions',
      'Potential health concerns',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Bright red color',
      'Stable coloring agent'
    ],
    alternatives: 'Use natural red colors like beet juice or paprika'
  },
  'E201': {
    code: 'E201',
    name: 'Sodium Sorbate',
    category: 'Preservative',
    concern: 'low',
    description: 'Sodium salt of sorbic acid. Effective preservative against mold and yeast.',
    healthEffects: [
      'Effective against mold and yeast',
      'Generally recognized as safe',
      'May cause skin reactions',
      'Rare allergic reactions'
    ],
    whyAvoid: [
      'May cause skin reactions',
      'Potential digestive issues in high amounts'
    ],
    benefits: [
      'Effective preservation',
      'Prevents mold growth',
      'Safe in recommended amounts',
      'Widely used and studied'
    ],
    alternatives: 'Use natural preservatives like vinegar'
  },
  'E203': {
    code: 'E203',
    name: 'Calcium Sorbate',
    category: 'Preservative',
    concern: 'low',
    description: 'Calcium salt of sorbic acid. Effective preservative against mold and yeast.',
    healthEffects: [
      'Effective against mold and yeast',
      'Generally recognized as safe',
      'May cause skin reactions',
      'Rare allergic reactions'
    ],
    whyAvoid: [
      'May cause skin reactions',
      'Potential digestive issues in high amounts'
    ],
    benefits: [
      'Effective preservation',
      'Prevents mold growth',
      'Safe in recommended amounts',
      'Provides calcium'
    ],
    alternatives: 'Use natural preservatives like vinegar'
  },
  'E213': {
    code: 'E213',
    name: 'Calcium Benzoate',
    category: 'Preservative',
    concern: 'moderate',
    description: 'Calcium salt of benzoic acid. Used as preservative but may cause reactions in sensitive individuals.',
    healthEffects: [
      'Effective antibacterial agent',
      'May cause allergic reactions',
      'Generally recognized as safe in small amounts',
      'May affect behavior in sensitive individuals'
    ],
    whyAvoid: [
      'May cause skin reactions',
      'Potential endocrine disruptor',
      'May affect behavior and hyperactivity'
    ],
    benefits: [
      'Effective preservation',
      'Prevents bacterial growth',
      'Safe in recommended amounts'
    ],
    alternatives: 'Use natural preservatives like vinegar or salt'
  },
  'E221': {
    code: 'E221',
    name: 'Sodium Sulphite',
    category: 'Preservative / Antioxidant',
    concern: 'high',
    description: 'Sodium salt of sulfur dioxide. Used as preservative but can cause severe reactions.',
    healthEffects: [
      'Effective preservative',
      'Can cause severe allergic reactions',
      'May trigger asthma',
      'Damages vitamin B1',
      'Generally recognized as safe for most'
    ],
    whyAvoid: [
      'Can cause severe allergic reactions',
      'May trigger asthma attacks',
      'Damages vitamin B1',
      'May cause digestive issues'
    ],
    benefits: [
      'Effective preservation',
      'Prevents oxidation',
      'Stable compound'
    ],
    alternatives: 'Use sulfite-free alternatives'
  },
  'E222': {
    code: 'E222',
    name: 'Sodium Hydrogen Sulphite',
    category: 'Preservative / Antioxidant',
    concern: 'high',
    description: 'Sodium bisulfite used as preservative and antioxidant. Can cause severe reactions.',
    healthEffects: [
      'Effective preservative and antioxidant',
      'Can cause severe allergic reactions',
      'May trigger asthma',
      'Damages vitamin B1',
      'Generally recognized as safe for most'
    ],
    whyAvoid: [
      'Can cause severe allergic reactions',
      'May trigger asthma attacks',
      'Damages vitamin B1',
      'May cause digestive issues'
    ],
    benefits: [
      'Effective preservation',
      'Prevents oxidation',
      'Stable compound'
    ],
    alternatives: 'Use sulfite-free alternatives'
  },
  'E223': {
    code: 'E223',
    name: 'Sodium Metabisulphite',
    category: 'Preservative / Antioxidant',
    concern: 'high',
    description: 'Sodium metabisulfite used as preservative and antioxidant. Can cause severe reactions.',
    healthEffects: [
      'Effective preservative and antioxidant',
      'Can cause severe allergic reactions',
      'May trigger asthma',
      'Damages vitamin B1',
      'Generally recognized as safe for most'
    ],
    whyAvoid: [
      'Can cause severe allergic reactions',
      'May trigger asthma attacks',
      'Damages vitamin B1',
      'May cause digestive issues'
    ],
    benefits: [
      'Effective preservation',
      'Prevents oxidation',
      'Stable compound'
    ],
    alternatives: 'Use sulfite-free alternatives'
  },
  'E224': {
    code: 'E224',
    name: 'Potassium Metabisulphite',
    category: 'Preservative / Antioxidant',
    concern: 'high',
    description: 'Potassium metabisulfite used as preservative and antioxidant. Can cause severe reactions.',
    healthEffects: [
      'Effective preservative and antioxidant',
      'Can cause severe allergic reactions',
      'May trigger asthma',
      'Damages vitamin B1',
      'Generally recognized as safe for most'
    ],
    whyAvoid: [
      'Can cause severe allergic reactions',
      'May trigger asthma attacks',
      'Damages vitamin B1',
      'May cause digestive issues'
    ],
    benefits: [
      'Effective preservation',
      'Prevents oxidation',
      'Provides potassium'
    ],
    alternatives: 'Use sulfite-free alternatives'
  },
  'E281': {
    code: 'E281',
    name: 'Sodium Propionate',
    category: 'Preservative',
    concern: 'low',
    description: 'Sodium salt of propionic acid. Effective against mold and bacteria.',
    healthEffects: [
      'Effective against mold and bacteria',
      'Generally recognized as safe',
      'May cause skin reactions',
      'Rare allergic reactions'
    ],
    whyAvoid: [
      'May cause skin reactions',
      'Potential digestive issues in high amounts'
    ],
    benefits: [
      'Effective preservation',
      'Prevents mold growth',
      'Safe in recommended amounts',
      'Widely used in baked goods'
    ],
    alternatives: 'Use natural preservatives like vinegar'
  },
  'E282': {
    code: 'E282',
    name: 'Calcium Propionate',
    category: 'Preservative',
    concern: 'low',
    description: 'Calcium salt of propionic acid. Effective against mold and bacteria.',
    healthEffects: [
      'Effective against mold and bacteria',
      'Generally recognized as safe',
      'May cause skin reactions',
      'Rare allergic reactions'
    ],
    whyAvoid: [
      'May cause skin reactions',
      'Potential digestive issues in high amounts'
    ],
    benefits: [
      'Effective preservation',
      'Prevents mold growth',
      'Provides calcium',
      'Safe in recommended amounts'
    ],
    alternatives: 'Use natural preservatives like vinegar'
  },
  'E283': {
    code: 'E283',
    name: 'Potassium Propionate',
    category: 'Preservative',
    concern: 'low',
    description: 'Potassium salt of propionic acid. Effective against mold and bacteria.',
    healthEffects: [
      'Effective against mold and bacteria',
      'Generally recognized as safe',
      'May cause skin reactions',
      'Rare allergic reactions'
    ],
    whyAvoid: [
      'May cause skin reactions',
      'Potential digestive issues in high amounts'
    ],
    benefits: [
      'Effective preservation',
      'Prevents mold growth',
      'Provides potassium',
      'Safe in recommended amounts'
    ],
    alternatives: 'Use natural preservatives like vinegar'
  },
  'E327': {
    code: 'E327',
    name: 'Calcium Lactate',
    category: 'Acidity Regulator / Firming Agent',
    concern: 'low',
    description: 'Calcium salt of lactic acid. Used as acidity regulator and firming agent.',
    healthEffects: [
      'Natural compound from lactic acid',
      'Provides calcium',
      'Generally recognized as safe',
      'May cause digestive issues in high amounts'
    ],
    whyAvoid: [
      'May contain traces of allergens',
      'Potential digestive issues'
    ],
    benefits: [
      'Natural acidity regulator',
      'Provides calcium',
      'From fermentation process',
      'Generally safe'
    ],
    alternatives: 'No need to avoid - natural and safe'
  },
  'E341': {
    code: 'E341',
    name: 'Calcium Phosphates',
    category: 'Emulsifier / Stabilizer / Anti-caking Agent',
    concern: 'low',
    description: 'Calcium salts of phosphoric acid. Used as emulsifiers, stabilizers, and anti-caking agents.',
    healthEffects: [
      'Effective emulsifier and stabilizer',
      'Provides calcium',
      'Generally recognized as safe',
      'May affect mineral absorption in high amounts'
    ],
    whyAvoid: [
      'May affect mineral balance in high amounts'
    ],
    benefits: [
      'Effective emulsifier',
      'Provides calcium',
      'Prevents caking in powders',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E343': {
    code: 'E343',
    name: 'Magnesium Phosphates',
    category: 'Emulsifier / Stabilizer / Anti-caking Agent',
    concern: 'low',
    description: 'Magnesium salts of phosphoric acid. Used as emulsifiers, stabilizers, and anti-caking agents.',
    healthEffects: [
      'Effective emulsifier and stabilizer',
      'Provides magnesium',
      'Generally recognized as safe',
      'May affect mineral absorption in high amounts'
    ],
    whyAvoid: [
      'May affect mineral balance in high amounts'
    ],
    benefits: [
      'Effective emulsifier',
      'Provides magnesium',
      'Prevents caking in powders',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E401': {
    code: 'E401',
    name: 'Sodium Alginate',
    category: 'Thickener / Stabilizer / Gelling Agent',
    concern: 'low',
    description: 'Sodium salt of alginic acid from brown seaweed. Used as thickener and stabilizer.',
    healthEffects: [
      'Natural polysaccharide from seaweed',
      'Generally recognized as safe',
      'May support digestive health',
      'Soluble fiber'
    ],
    whyAvoid: [],
    benefits: [
      'Natural thickener',
      'Provides dietary fiber',
      'From seaweed sources',
      'Stable in various conditions'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E402': {
    code: 'E402',
    name: 'Potassium Alginate',
    category: 'Thickener / Stabilizer / Gelling Agent',
    concern: 'low',
    description: 'Potassium salt of alginic acid from brown seaweed. Used as thickener and stabilizer.',
    healthEffects: [
      'Natural polysaccharide from seaweed',
      'Generally recognized as safe',
      'May support digestive health',
      'Soluble fiber'
    ],
    whyAvoid: [],
    benefits: [
      'Natural thickener',
      'Provides dietary fiber',
      'Provides potassium',
      'From seaweed sources'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E403': {
    code: 'E403',
    name: 'Ammonium Alginate',
    category: 'Thickener / Stabilizer / Gelling Agent',
    concern: 'low',
    description: 'Ammonium salt of alginic acid from brown seaweed. Used as thickener and stabilizer.',
    healthEffects: [
      'Natural polysaccharide from seaweed',
      'Generally recognized as safe',
      'May support digestive health',
      'Soluble fiber'
    ],
    whyAvoid: [],
    benefits: [
      'Natural thickener',
      'Provides dietary fiber',
      'From seaweed sources',
      'Stable in various conditions'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E404': {
    code: 'E404',
    name: 'Calcium Alginate',
    category: 'Thickener / Stabilizer / Gelling Agent',
    concern: 'low',
    description: 'Calcium salt of alginic acid from brown seaweed. Used as thickener and stabilizer.',
    healthEffects: [
      'Natural polysaccharide from seaweed',
      'Generally recognized as safe',
      'May support digestive health',
      'Soluble fiber'
    ],
    whyAvoid: [],
    benefits: [
      'Natural thickener',
      'Provides dietary fiber',
      'Provides calcium',
      'From seaweed sources'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E405': {
    code: 'E405',
    name: 'Propane-1,2-diol Alginate',
    category: 'Thickener / Stabilizer / Emulsifier',
    concern: 'low',
    description: 'Propylene glycol ester of alginic acid. Used as thickener, stabilizer, and emulsifier.',
    healthEffects: [
      'Modified alginate from seaweed',
      'Generally recognized as safe',
      'May support digestive health',
      'Soluble fiber'
    ],
    whyAvoid: [],
    benefits: [
      'Effective thickener and emulsifier',
      'Provides dietary fiber',
      'From seaweed sources',
      'Stable in various conditions'
    ],
    alternatives: 'No need to avoid - generally safe and beneficial'
  },
  'E214': {
    code: 'E214',
    name: 'Ethyl p-hydroxybenzoate',
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative effective against bacteria and fungi. May cause allergic reactions.',
    healthEffects: [
      'Effective against bacteria and fungi',
      'May cause allergic reactions',
      'Generally recognized as safe in small amounts',
      'May affect hormone function'
    ],
    whyAvoid: [
      'May cause skin reactions',
      'Potential endocrine disruptor',
      'May affect behavior and hyperactivity'
    ],
    benefits: [
      'Effective preservation',
      'Prevents microbial growth',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural preservatives like vinegar or salt'
  },
  'E215': {
    code: 'E215',
    name: 'Sodium Ethyl p-hydroxybenzoate',
    category: 'Preservative',
    concern: 'moderate',
    description: 'Sodium salt of ethyl p-hydroxybenzoate. Used as preservative but may cause reactions.',
    healthEffects: [
      'Effective preservative',
      'May cause allergic reactions',
      'Generally recognized as safe in small amounts',
      'May affect hormone function'
    ],
    whyAvoid: [
      'May cause skin reactions',
      'Potential endocrine disruptor',
      'May affect behavior and hyperactivity'
    ],
    benefits: [
      'Effective preservation',
      'Prevents microbial growth',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural preservatives like vinegar or salt'
  },
  'E216': {
    code: 'E216',
    name: 'Propyl p-hydroxybenzoate',
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative effective against bacteria and fungi. May cause allergic reactions.',
    healthEffects: [
      'Effective against bacteria and fungi',
      'May cause allergic reactions',
      'Generally recognized as safe in small amounts',
      'May affect hormone function'
    ],
    whyAvoid: [
      'May cause skin reactions',
      'Potential endocrine disruptor',
      'May affect behavior and hyperactivity'
    ],
    benefits: [
      'Effective preservation',
      'Prevents microbial growth',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural preservatives like vinegar or salt'
  },
  'E217': {
    code: 'E217',
    name: 'Sodium Propyl p-hydroxybenzoate',
    category: 'Preservative',
    concern: 'moderate',
    description: 'Sodium salt of propyl p-hydroxybenzoate. Used as preservative but may cause reactions.',
    healthEffects: [
      'Effective preservative',
      'May cause allergic reactions',
      'Generally recognized as safe in small amounts',
      'May affect hormone function'
    ],
    whyAvoid: [
      'May cause skin reactions',
      'Potential endocrine disruptor',
      'May affect behavior and hyperactivity'
    ],
    benefits: [
      'Effective preservation',
      'Prevents microbial growth',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural preservatives like vinegar or salt'
  },
  'E218': {
    code: 'E218',
    name: 'Methyl p-hydroxybenzoate',
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative effective against bacteria and fungi. May cause allergic reactions.',
    healthEffects: [
      'Effective against bacteria and fungi',
      'May cause allergic reactions',
      'Generally recognized as safe in small amounts',
      'May affect hormone function'
    ],
    whyAvoid: [
      'May cause skin reactions',
      'Potential endocrine disruptor',
      'May affect behavior and hyperactivity'
    ],
    benefits: [
      'Effective preservation',
      'Prevents microbial growth',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural preservatives like vinegar or salt'
  },
  'E219': {
    code: 'E219',
    name: 'Sodium Methyl p-hydroxybenzoate',
    category: 'Preservative',
    concern: 'moderate',
    description: 'Sodium salt of methyl p-hydroxybenzoate. Used as preservative but may cause reactions.',
    healthEffects: [
      'Effective preservative',
      'May cause allergic reactions',
      'Generally recognized as safe in small amounts',
      'May affect hormone function'
    ],
    whyAvoid: [
      'May cause skin reactions',
      'Potential endocrine disruptor',
      'May affect behavior and hyperactivity'
    ],
    benefits: [
      'Effective preservation',
      'Prevents microbial growth',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural preservatives like vinegar or salt'
  },
  'E225': {
    code: 'E225',
    name: 'Potassium Sulphite',
    category: 'Preservative / Antioxidant',
    concern: 'high',
    description: 'Potassium salt of sulfur dioxide. Used as preservative but can cause severe reactions.',
    healthEffects: [
      'Effective preservative and antioxidant',
      'Can cause severe allergic reactions',
      'May trigger asthma',
      'Damages vitamin B1',
      'Generally recognized as safe for most'
    ],
    whyAvoid: [
      'Can cause severe allergic reactions',
      'May trigger asthma attacks',
      'Damages vitamin B1',
      'May cause digestive issues'
    ],
    benefits: [
      'Effective preservation',
      'Prevents oxidation',
      'Provides potassium'
    ],
    alternatives: 'Use sulfite-free alternatives'
  },
  'E226': {
    code: 'E226',
    name: 'Calcium Sulphite',
    category: 'Preservative / Antioxidant',
    concern: 'high',
    description: 'Calcium salt of sulfur dioxide. Used as preservative but can cause severe reactions.',
    healthEffects: [
      'Effective preservative and antioxidant',
      'Can cause severe allergic reactions',
      'May trigger asthma',
      'Damages vitamin B1',
      'Generally recognized as safe for most'
    ],
    whyAvoid: [
      'Can cause severe allergic reactions',
      'May trigger asthma attacks',
      'Damages vitamin B1',
      'May cause digestive issues'
    ],
    benefits: [
      'Effective preservation',
      'Prevents oxidation',
      'Provides calcium'
    ],
    alternatives: 'Use sulfite-free alternatives'
  },
  'E227': {
    code: 'E227',
    name: 'Calcium Hydrogen Sulphite',
    category: 'Preservative / Antioxidant',
    concern: 'high',
    description: 'Calcium bisulfite used as preservative and antioxidant. Can cause severe reactions.',
    healthEffects: [
      'Effective preservative and antioxidant',
      'Can cause severe allergic reactions',
      'May trigger asthma',
      'Damages vitamin B1',
      'Generally recognized as safe for most'
    ],
    whyAvoid: [
      'Can cause severe allergic reactions',
      'May trigger asthma attacks',
      'Damages vitamin B1',
      'May cause digestive issues'
    ],
    benefits: [
      'Effective preservation',
      'Prevents oxidation',
      'Provides calcium'
    ],
    alternatives: 'Use sulfite-free alternatives'
  },
  'E228': {
    code: 'E228',
    name: 'Potassium Hydrogen Sulphite',
    category: 'Preservative / Antioxidant',
    concern: 'high',
    description: 'Potassium bisulfite used as preservative and antioxidant. Can cause severe reactions.',
    healthEffects: [
      'Effective preservative and antioxidant',
      'Can cause severe allergic reactions',
      'May trigger asthma',
      'Damages vitamin B1',
      'Generally recognized as safe for most'
    ],
    whyAvoid: [
      'Can cause severe allergic reactions',
      'May trigger asthma attacks',
      'Damages vitamin B1',
      'May cause digestive issues'
    ],
    benefits: [
      'Effective preservation',
      'Prevents oxidation',
      'Provides potassium'
    ],
    alternatives: 'Use sulfite-free alternatives'
  },
  'E230': {
    code: 'E230',
    name: 'Biphenyl',
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative used on citrus fruits. Some concerns about potential toxicity.',
    healthEffects: [
      'Effective against mold on citrus fruits',
      'May cause allergic reactions',
      'Potential carcinogenic effects',
      'Generally permitted in small amounts'
    ],
    whyAvoid: [
      'Potential carcinogenic effects',
      'May cause skin reactions',
      'Synthetic preservative'
    ],
    benefits: [
      'Effective preservation of citrus fruits',
      'Prevents mold growth',
      'Widely used in fruit industry'
    ],
    alternatives: 'Use natural preservation methods'
  },
  'E231': {
    code: 'E231',
    name: 'Orthophenyl Phenol',
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative used on citrus fruits. Some concerns about potential toxicity.',
    healthEffects: [
      'Effective against mold on citrus fruits',
      'May cause allergic reactions',
      'Potential carcinogenic effects',
      'Generally permitted in small amounts'
    ],
    whyAvoid: [
      'Potential carcinogenic effects',
      'May cause skin reactions',
      'Synthetic preservative'
    ],
    benefits: [
      'Effective preservation of citrus fruits',
      'Prevents mold growth',
      'Widely used in fruit industry'
    ],
    alternatives: 'Use natural preservation methods'
  },
  'E232': {
    code: 'E232',
    name: 'Sodium Orthophenyl Phenol',
    category: 'Preservative',
    concern: 'moderate',
    description: 'Sodium salt of orthophenyl phenol. Used as preservative on citrus fruits.',
    healthEffects: [
      'Effective preservative on citrus fruits',
      'May cause allergic reactions',
      'Potential carcinogenic effects',
      'Generally permitted in small amounts'
    ],
    whyAvoid: [
      'Potential carcinogenic effects',
      'May cause skin reactions',
      'Synthetic preservative'
    ],
    benefits: [
      'Effective preservation of citrus fruits',
      'Prevents mold growth',
      'Widely used in fruit industry'
    ],
    alternatives: 'Use natural preservation methods'
  },
  'E233': {
    code: 'E233',
    name: 'Thiabendazole',
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative used on citrus fruits and bananas. Some concerns about potential toxicity.',
    healthEffects: [
      'Effective against mold and fungi on fruits',
      'May cause allergic reactions',
      'Potential carcinogenic effects',
      'Generally permitted in small amounts'
    ],
    whyAvoid: [
      'Potential carcinogenic effects',
      'May cause skin reactions',
      'Synthetic preservative'
    ],
    benefits: [
      'Effective preservation of fruits',
      'Prevents mold growth',
      'Widely used in fruit industry'
    ],
    alternatives: 'Use natural preservation methods'
  },
  'E235': {
    code: 'E235',
    name: 'Natamycin',
    category: 'Preservative',
    concern: 'low',
    description: 'Natural antifungal agent produced by bacteria. Used on cheese and other foods.',
    healthEffects: [
      'Natural antifungal agent',
      'Produced by Streptomyces species',
      'Generally recognized as safe',
      'Rare allergic reactions'
    ],
    whyAvoid: [],
    benefits: [
      'Natural preservative',
      'Effective against fungi and mold',
      'Safe in recommended amounts',
      'Used in dairy products'
    ],
    alternatives: 'No need to avoid - natural and safe preservative'
  },
  'E239': {
    code: 'E239',
    name: 'Hexamethylene Tetramine',
    category: 'Preservative',
    concern: 'moderate',
    description: 'Synthetic preservative used in some foods. Some concerns about formaldehyde release.',
    healthEffects: [
      'Effective preservative',
      'May release formaldehyde in body',
      'Potential carcinogenic effects',
      'Generally permitted in small amounts'
    ],
    whyAvoid: [
      'May release formaldehyde',
      'Potential carcinogenic effects',
      'Better alternatives exist'
    ],
    benefits: [
      'Effective preservation',
      'Prevents microbial growth',
      'Stable compound'
    ],
    alternatives: 'Use natural preservatives like vinegar or salt'
  },
  'E261': {
    code: 'E261',
    name: 'Potassium Acetate',
    category: 'Acidity Regulator / Preservative',
    concern: 'low',
    description: 'Potassium salt of acetic acid. Used as acidity regulator and mild preservative.',
    healthEffects: [
      'Natural compound from acetic acid',
      'Provides potassium',
      'Generally recognized as safe',
      'Rare allergic reactions'
    ],
    whyAvoid: [],
    benefits: [
      'Natural acidity regulator',
      'Provides potassium',
      'Mild preservative effect',
      'From natural sources'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E263': {
    code: 'E263',
    name: 'Calcium Acetate',
    category: 'Acidity Regulator / Stabilizer',
    concern: 'low',
    description: 'Calcium salt of acetic acid. Used as acidity regulator and stabilizer.',
    healthEffects: [
      'Natural compound from acetic acid',
      'Provides calcium',
      'Generally recognized as safe',
      'Rare allergic reactions'
    ],
    whyAvoid: [],
    benefits: [
      'Natural acidity regulator',
      'Provides calcium',
      'Stabilizer in various foods',
      'From natural sources'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E297': {
    code: 'E297',
    name: 'Fumaric Acid',
    category: 'Acidity Regulator',
    concern: 'low',
    description: 'Natural acid found in plants. Used as acidity regulator in foods and beverages.',
    healthEffects: [
      'Natural acid found in plants',
      'Generally recognized as safe',
      'May cause digestive issues in high amounts',
      'Rare allergic reactions'
    ],
    whyAvoid: [
      'May cause digestive discomfort in sensitive individuals'
    ],
    benefits: [
      'Natural acidity regulator',
      'From plant sources',
      'Stable in various conditions'
    ],
    alternatives: 'No need to avoid - natural and safe'
  },
  'E340': {
    code: 'E340',
    name: 'Potassium Phosphates',
    category: 'Emulsifier / Stabilizer / Acidity Regulator',
    concern: 'moderate',
    description: 'Potassium salts of phosphoric acid. Used as emulsifiers, stabilizers, and acidity regulators.',
    healthEffects: [
      'Effective emulsifier and stabilizer',
      'Provides potassium',
      'Generally recognized as safe in small amounts',
      'May affect mineral absorption in high amounts'
    ],
    whyAvoid: [
      'May affect mineral balance in high amounts',
      'Potential to affect kidney health'
    ],
    benefits: [
      'Effective emulsifier',
      'Provides potassium',
      'Improves texture and stability',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E342': {
    code: 'E342',
    name: 'Ammonium Phosphates',
    category: 'Emulsifier / Stabilizer / Acidity Regulator',
    concern: 'moderate',
    description: 'Ammonium salts of phosphoric acid. Used as emulsifiers, stabilizers, and acidity regulators.',
    healthEffects: [
      'Effective emulsifier and stabilizer',
      'Generally recognized as safe in small amounts',
      'May affect mineral absorption in high amounts',
      'May cause digestive issues'
    ],
    whyAvoid: [
      'May affect mineral balance in high amounts',
      'Potential digestive issues'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture and stability',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E352': {
    code: 'E352',
    name: 'Calcium Malates',
    category: 'Acidity Regulator / Anti-caking Agent',
    concern: 'low',
    description: 'Calcium salts of malic acid. Used as acidity regulators and anti-caking agents.',
    healthEffects: [
      'Natural acid salts',
      'Provides calcium',
      'Generally recognized as safe',
      'Rare allergic reactions'
    ],
    whyAvoid: [],
    benefits: [
      'Natural acidity regulator',
      'Provides calcium',
      'Prevents caking in powders',
      'From natural sources'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E380': {
    code: 'E380',
    name: 'Triammonium Citrate',
    category: 'Acidity Regulator / Emulsifier',
    concern: 'low',
    description: 'Ammonium salt of citric acid. Used as acidity regulator and emulsifier.',
    healthEffects: [
      'Natural acid salt',
      'Generally recognized as safe',
      'May cause digestive issues in high amounts',
      'Rare allergic reactions'
    ],
    whyAvoid: [
      'May cause digestive discomfort in sensitive individuals'
    ],
    benefits: [
      'Natural acidity regulator',
      'Effective emulsifier',
      'From natural sources',
      'Stable in various conditions'
    ],
    alternatives: 'No need to avoid - natural and safe'
  },
  'E381': {
    code: 'E381',
    name: 'Ferric Ammonium Citrate',
    category: 'Acidity Regulator',
    concern: 'low',
    description: 'Iron-ammonium salt of citric acid. Used as acidity regulator and iron supplement.',
    healthEffects: [
      'Natural acid salt with iron',
      'Provides iron',
      'Generally recognized as safe',
      'May cause digestive issues in high amounts'
    ],
    whyAvoid: [
      'May cause digestive discomfort in sensitive individuals',
      'High iron content not suitable for everyone'
    ],
    benefits: [
      'Natural acidity regulator',
      'Provides iron',
      'From natural sources',
      'Stable in various conditions'
    ],
    alternatives: 'No need to avoid - beneficial for iron supplementation'
  },
  'E408': {
    code: 'E408',
    name: 'Bakers Yeast Glycan',
    category: 'Emulsifier / Stabilizer',
    concern: 'low',
    description: 'Natural emulsifier from bakers yeast. Used in baked goods.',
    healthEffects: [
      'Natural emulsifier from yeast',
      'Generally recognized as safe',
      'May cause reactions in yeast-sensitive individuals',
      'Rare allergic reactions'
    ],
    whyAvoid: [
      'May cause reactions in yeast-sensitive individuals'
    ],
    benefits: [
      'Natural emulsifier',
      'Improves texture in baked goods',
      'From natural sources',
      'Generally safe'
    ],
    alternatives: 'No need to avoid - natural and safe emulsifier'
  },
  'E409': {
    code: 'E409',
    name: 'Arabinogalactan',
    category: 'Emulsifier / Stabilizer',
    concern: 'low',
    description: 'Natural polysaccharide from larch trees. Used as emulsifier and stabilizer.',
    healthEffects: [
      'Natural polysaccharide from trees',
      'Generally recognized as safe',
      'May support immune function',
      'Soluble fiber'
    ],
    whyAvoid: [],
    benefits: [
      'Natural emulsifier and stabilizer',
      'Provides dietary fiber',
      'May support immune health',
      'From natural plant sources'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E410': {
    code: 'E410',
    name: 'Locust Bean Gum',
    category: 'Thickener / Stabilizer / Gelling Agent',
    concern: 'low',
    description: 'Natural thickener from carob seeds. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Natural polysaccharide from carob seeds',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Soluble fiber'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'May cause bloating or gas'
    ],
    benefits: [
      'Natural thickener',
      'Provides dietary fiber',
      'From natural plant sources',
      'Stable in various conditions'
    ],
    alternatives: 'No need to avoid - generally safe and beneficial'
  },
  'E413': {
    code: 'E413',
    name: 'Tragacanth',
    category: 'Thickener / Stabilizer / Emulsifier',
    concern: 'low',
    description: 'Natural gum from tragacanth shrubs. Used as thickener, stabilizer, and emulsifier.',
    healthEffects: [
      'Natural gum from shrubs',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Soluble fiber'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen'
    ],
    benefits: [
      'Natural thickener and emulsifier',
      'Provides dietary fiber',
      'Stable in various conditions',
      'From natural plant sources'
    ],
    alternatives: 'No need to avoid - generally safe and beneficial'
  },
  'E414': {
    code: 'E414',
    name: 'Acacia Gum (Gum Arabic)',
    category: 'Emulsifier / Stabilizer / Thickener',
    concern: 'low',
    description: 'Natural gum from acacia trees. Used as emulsifier, stabilizer, and thickener.',
    healthEffects: [
      'Natural gum from acacia trees',
      'Generally recognized as safe',
      'May support digestive health',
      'Soluble fiber'
    ],
    whyAvoid: [],
    benefits: [
      'Natural emulsifier and stabilizer',
      'Provides dietary fiber',
      'From natural plant sources',
      'Stable in various conditions'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E416': {
    code: 'E416',
    name: 'Karaya Gum',
    category: 'Thickener / Stabilizer / Emulsifier',
    concern: 'low',
    description: 'Natural gum from karaya trees. Used as thickener, stabilizer, and emulsifier.',
    healthEffects: [
      'Natural gum from trees',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Soluble fiber'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen'
    ],
    benefits: [
      'Natural thickener and emulsifier',
      'Provides dietary fiber',
      'From natural plant sources',
      'Stable in various conditions'
    ],
    alternatives: 'No need to avoid - generally safe and beneficial'
  },
  'E417': {
    code: 'E417',
    name: 'Tara Gum',
    category: 'Thickener / Stabilizer',
    concern: 'low',
    description: 'Natural thickener from tara seeds. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Natural polysaccharide from tara seeds',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Soluble fiber'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'May cause bloating or gas'
    ],
    benefits: [
      'Natural thickener',
      'Provides dietary fiber',
      'From natural plant sources',
      'Stable in various conditions'
    ],
    alternatives: 'No need to avoid - generally safe and beneficial'
  },
  'E418': {
    code: 'E418',
    name: 'Gellan Gum',
    category: 'Thickener / Stabilizer / Gelling Agent',
    concern: 'low',
    description: 'Natural gelling agent produced by fermentation. Used as thickener and stabilizer.',
    healthEffects: [
      'Produced by natural fermentation',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Soluble fiber'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen for some individuals'
    ],
    benefits: [
      'Excellent thickener and gelling agent',
      'Stable in various conditions',
      'From natural fermentation',
      'Generally safe'
    ],
    alternatives: 'No need to avoid - generally safe thickener'
  },
  'E419': {
    code: 'E419',
    name: 'Gum Ghatti',
    category: 'Emulsifier / Stabilizer',
    concern: 'low',
    description: 'Natural gum from ghatti trees. Used as emulsifier and stabilizer.',
    healthEffects: [
      'Natural gum from trees',
      'Generally recognized as safe',
      'May support digestive health',
      'Soluble fiber'
    ],
    whyAvoid: [],
    benefits: [
      'Natural emulsifier and stabilizer',
      'Provides dietary fiber',
      'From natural plant sources',
      'Stable in various conditions'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E424': {
    code: 'E424',
    name: 'Curdlan',
    category: 'Thickener / Stabilizer / Gelling Agent',
    concern: 'low',
    description: 'Natural gelling agent produced by bacteria. Used as thickener and stabilizer.',
    healthEffects: [
      'Produced by natural fermentation',
      'Generally recognized as safe',
      'May support immune function',
      'Soluble fiber'
    ],
    whyAvoid: [],
    benefits: [
      'Natural gelling agent',
      'Provides dietary fiber',
      'From natural fermentation',
      'Stable in various conditions'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E425': {
    code: 'E425',
    name: 'Konjac',
    category: 'Thickener / Gelling Agent',
    concern: 'low',
    description: 'Natural thickener from konjac root. High in soluble fiber.',
    healthEffects: [
      'Natural polysaccharide from konjac root',
      'High in soluble fiber',
      'May support digestive health',
      'Generally recognized as safe'
    ],
    whyAvoid: [],
    benefits: [
      'Natural thickener and gelling agent',
      'High in dietary fiber',
      'May support digestion',
      'From natural plant sources'
    ],
    alternatives: 'No need to avoid - natural and beneficial'
  },
  'E426': {
    code: 'E426',
    name: 'Soybean Hemocellulose',
    category: 'Emulsifier / Stabilizer',
    concern: 'low',
    description: 'Natural emulsifier from soybean. Generally safe but may cause reactions in soy-sensitive individuals.',
    healthEffects: [
      'Natural emulsifier from soybeans',
      'Generally recognized as safe',
      'May cause reactions in soy-sensitive individuals',
      'Soluble fiber'
    ],
    whyAvoid: [
      'May cause reactions in soy-sensitive individuals',
      'Common allergen (soy)'
    ],
    benefits: [
      'Natural emulsifier',
      'Provides dietary fiber',
      'From natural plant sources',
      'Generally safe for most people'
    ],
    alternatives: 'No need to avoid unless soy-sensitive - natural and beneficial'
  },
  'E428': {
    code: 'E428',
    name: 'Gelatine',
    category: 'Gelling Agent / Thickener',
    concern: 'moderate',
    description: 'Protein from animal bones and skin. Used as gelling agent but not suitable for vegetarians.',
    healthEffects: [
      'Protein from animal sources',
      'Generally recognized as safe',
      'May cause reactions in sensitive individuals',
      'Complete protein'
    ],
    whyAvoid: [
      'From animal sources (not suitable for vegetarians/vegans)',
      'May cause reactions in sensitive individuals',
      'Potential allergen'
    ],
    benefits: [
      'Natural gelling agent',
      'Provides protein',
      'Stable in various conditions',
      'Used in desserts and jellies'
    ],
    alternatives: 'Use plant-based gelling agents like agar or pectin'
  },
  'E429': {
    code: 'E429',
    name: 'Peptones',
    category: 'Flavour Enhancer',
    concern: 'moderate',
    description: 'Protein hydrolysates used as flavor enhancers. May cause reactions in sensitive individuals.',
    healthEffects: [
      'Protein hydrolysates',
      'Used as flavor enhancers',
      'May cause allergic reactions',
      'Generally recognized as safe'
    ],
    whyAvoid: [
      'May cause allergic reactions',
      'Potential allergen',
      'From animal or plant sources'
    ],
    benefits: [
      'Enhances natural flavors',
      'Provides amino acids',
      'Used in various food products',
      'Generally safe'
    ],
    alternatives: 'Use natural flavor enhancers like herbs and spices'
  },
  'E430': {
    code: 'E430',
    name: 'Polyoxyethylene (8) Stearate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Synthetic emulsifier. Some concerns about potential toxicity.',
    healthEffects: [
      'Synthetic emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues',
      'Potential contaminant concerns'
    ],
    whyAvoid: [
      'Synthetic emulsifier',
      'Potential digestive issues',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Effective emulsifier',
      'Stable in various conditions',
      'Widely used in food industry'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E431': {
    code: 'E431',
    name: 'Polyoxyethylene (40) Stearate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Synthetic emulsifier. Some concerns about potential toxicity.',
    healthEffects: [
      'Synthetic emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues',
      'Potential contaminant concerns'
    ],
    whyAvoid: [
      'Synthetic emulsifier',
      'Potential digestive issues',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Effective emulsifier',
      'Stable in various conditions',
      'Widely used in food industry'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E432': {
    code: 'E432',
    name: 'Polyoxyethylene Sorbitan Monolaurate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Synthetic emulsifier derived from sorbitol and lauric acid.',
    healthEffects: [
      'Synthetic emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues',
      'Potential contaminant concerns'
    ],
    whyAvoid: [
      'Synthetic emulsifier',
      'Potential digestive issues',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Effective emulsifier',
      'Stable in various conditions',
      'Widely used in food industry'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E433': {
    code: 'E433',
    name: 'Polyoxyethylene Sorbitan Monooleate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Synthetic emulsifier derived from sorbitol and oleic acid.',
    healthEffects: [
      'Synthetic emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues',
      'Potential contaminant concerns'
    ],
    whyAvoid: [
      'Synthetic emulsifier',
      'Potential digestive issues',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Effective emulsifier',
      'Stable in various conditions',
      'Widely used in food industry'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E434': {
    code: 'E434',
    name: 'Polyoxyethylene Sorbitan Monopalmitate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Synthetic emulsifier derived from sorbitol and palmitic acid.',
    healthEffects: [
      'Synthetic emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues',
      'Potential contaminant concerns'
    ],
    whyAvoid: [
      'Synthetic emulsifier',
      'Potential digestive issues',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Effective emulsifier',
      'Stable in various conditions',
      'Widely used in food industry'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E435': {
    code: 'E435',
    name: 'Polyoxyethylene Sorbitan Monostearate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Synthetic emulsifier derived from sorbitol and stearic acid.',
    healthEffects: [
      'Synthetic emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues',
      'Potential contaminant concerns'
    ],
    whyAvoid: [
      'Synthetic emulsifier',
      'Potential digestive issues',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Effective emulsifier',
      'Stable in various conditions',
      'Widely used in food industry'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E436': {
    code: 'E436',
    name: 'Polyoxyethylene Sorbitan Tristearate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Synthetic emulsifier derived from sorbitol and stearic acid.',
    healthEffects: [
      'Synthetic emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues',
      'Potential contaminant concerns'
    ],
    whyAvoid: [
      'Synthetic emulsifier',
      'Potential digestive issues',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Effective emulsifier',
      'Stable in various conditions',
      'Widely used in food industry'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E441': {
    code: 'E441',
    name: 'Gelatine',
    category: 'Gelling Agent / Thickener',
    concern: 'moderate',
    description: 'Protein from animal bones and skin. Used as gelling agent but not suitable for vegetarians.',
    healthEffects: [
      'Protein from animal sources',
      'Generally recognized as safe',
      'May cause reactions in sensitive individuals',
      'Complete protein'
    ],
    whyAvoid: [
      'From animal sources (not suitable for vegetarians/vegans)',
      'May cause reactions in sensitive individuals',
      'Potential allergen'
    ],
    benefits: [
      'Natural gelling agent',
      'Provides protein',
      'Stable in various conditions',
      'Used in desserts and jellies'
    ],
    alternatives: 'Use plant-based gelling agents like agar or pectin'
  },
  'E442': {
    code: 'E442',
    name: 'Ammonium Phosphatides',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier derived from phospholipids. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Derived from natural sources'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E443': {
    code: 'E443',
    name: 'Sodium Carboxymethyl Cellulose',
    category: 'Thickener / Stabilizer / Emulsifier',
    concern: 'moderate',
    description: 'Modified cellulose used as thickener and stabilizer. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Modified plant fiber',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Not absorbed by the body'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential gastrointestinal issues'
    ],
    benefits: [
      'Effective thickener and emulsifier',
      'Stable in various conditions',
      'From plant sources',
      'Generally safe'
    ],
    alternatives: 'Use natural thickeners like guar gum'
  },
  'E444': {
    code: 'E444',
    name: 'Sucrose Acetate Isobutyrate',
    category: 'Emulsifier / Stabilizer',
    concern: 'moderate',
    description: 'Synthetic emulsifier derived from sugar. Used in beverages. Generally safe in small amounts.',
    healthEffects: [
      'Synthetic emulsifier',
      'Generally recognized as safe in small amounts',
      'May cause digestive issues',
      'Derived from sugar'
    ],
    whyAvoid: [
      'Synthetic emulsifier',
      'Potential digestive issues',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Effective emulsifier',
      'Stable in beverages',
      'From sugar derivatives'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E445': {
    code: 'E445',
    name: 'Glycerol Esters of Wood Rosin',
    category: 'Emulsifier / Stabilizer',
    concern: 'moderate',
    description: 'Emulsifier derived from wood rosin. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Derived from natural wood rosin',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Stable in various conditions'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Stable in various conditions',
      'From natural sources'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E446': {
    code: 'E446',
    name: 'Succistearin',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Synthetic emulsifier. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Synthetic emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Stable in various conditions'
    ],
    whyAvoid: [
      'Synthetic emulsifier',
      'Potential digestive issues',
      'Better natural alternatives exist'
    ],
    benefits: [
      'Effective emulsifier',
      'Stable in various conditions',
      'Widely used in food industry'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E452': {
    code: 'E452',
    name: 'Polyphosphates',
    category: 'Emulsifier / Stabilizer / Acidity Regulator',
    concern: 'moderate',
    description: 'Complex phosphates used as emulsifiers and stabilizers. May affect mineral absorption.',
    healthEffects: [
      'Effective emulsifier and stabilizer',
      'May affect calcium absorption',
      'Generally recognized as safe in small amounts',
      'May affect kidney function in high amounts'
    ],
    whyAvoid: [
      'May affect mineral balance',
      'Potential to affect kidney health',
      'May deplete calcium'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture and stability',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E459': {
    code: 'E459',
    name: 'Beta-cyclodextrin',
    category: 'Emulsifier / Stabilizer',
    concern: 'low',
    description: 'Cyclic oligosaccharide used as emulsifier and stabilizer. Generally safe.',
    healthEffects: [
      'Cyclic sugar derivative',
      'Generally recognized as safe',
      'May cause digestive issues in high amounts',
      'Stable compound'
    ],
    whyAvoid: [
      'May cause digestive discomfort in high amounts'
    ],
    benefits: [
      'Effective emulsifier and stabilizer',
      'Stable in various conditions',
      'From natural sugar sources'
    ],
    alternatives: 'No need to avoid - generally safe and beneficial'
  },
  'E462': {
    code: 'E462',
    name: 'Ethyl Cellulose',
    category: 'Emulsifier / Thickener',
    concern: 'moderate',
    description: 'Modified cellulose used as emulsifier and thickener. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Modified plant fiber',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Not absorbed by the body'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential gastrointestinal issues'
    ],
    benefits: [
      'Effective thickener and emulsifier',
      'Stable in various conditions',
      'From plant sources',
      'Generally safe'
    ],
    alternatives: 'Use natural thickeners like guar gum'
  },
  'E463': {
    code: 'E463',
    name: 'Hydroxypropyl Cellulose',
    category: 'Emulsifier / Thickener',
    concern: 'moderate',
    description: 'Modified cellulose used as emulsifier and thickener. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Modified plant fiber',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Not absorbed by the body'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential gastrointestinal issues'
    ],
    benefits: [
      'Effective thickener and emulsifier',
      'Stable in various conditions',
      'From plant sources',
      'Generally safe'
    ],
    alternatives: 'Use natural thickeners like guar gum'
  },
  'E464': {
    code: 'E464',
    name: 'Hydroxypropyl Methyl Cellulose',
    category: 'Emulsifier / Thickener / Stabilizer',
    concern: 'moderate',
    description: 'Modified cellulose used as emulsifier, thickener, and stabilizer. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Modified plant fiber',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Not absorbed by the body'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential gastrointestinal issues'
    ],
    benefits: [
      'Effective thickener and emulsifier',
      'Stable in various conditions',
      'From plant sources',
      'Generally safe'
    ],
    alternatives: 'Use natural thickeners like guar gum'
  },
  'E465': {
    code: 'E465',
    name: 'Ethyl Methyl Cellulose',
    category: 'Emulsifier / Thickener / Stabilizer',
    concern: 'moderate',
    description: 'Modified cellulose used as emulsifier, thickener, and stabilizer. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Modified plant fiber',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Not absorbed by the body'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential gastrointestinal issues'
    ],
    benefits: [
      'Effective thickener and emulsifier',
      'Stable in various conditions',
      'From plant sources',
      'Generally safe'
    ],
    alternatives: 'Use natural thickeners like guar gum'
  },
  'E466': {
    code: 'E466',
    name: 'Carboxy Methyl Cellulose',
    category: 'Thickener / Stabilizer / Emulsifier',
    concern: 'moderate',
    description: 'Modified cellulose used as thickener, stabilizer, and emulsifier. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Modified plant fiber',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Not absorbed by the body'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential gastrointestinal issues'
    ],
    benefits: [
      'Effective thickener and emulsifier',
      'Stable in various conditions',
      'From plant sources',
      'Generally safe'
    ],
    alternatives: 'Use natural thickeners like guar gum'
  },
  'E467': {
    code: 'E467',
    name: 'Ethyl Hydroxyethyl Cellulose',
    category: 'Emulsifier / Thickener',
    concern: 'moderate',
    description: 'Modified cellulose used as emulsifier and thickener. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Modified plant fiber',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Not absorbed by the body'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential gastrointestinal issues'
    ],
    benefits: [
      'Effective thickener and emulsifier',
      'Stable in various conditions',
      'From plant sources',
      'Generally safe'
    ],
    alternatives: 'Use natural thickeners like guar gum'
  },
  'E468': {
    code: 'E468',
    name: 'Crosslinked Sodium Carboxymethyl Cellulose',
    category: 'Thickener / Stabilizer',
    concern: 'moderate',
    description: 'Modified cellulose used as thickener and stabilizer. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Modified plant fiber',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Not absorbed by the body'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential gastrointestinal issues'
    ],
    benefits: [
      'Effective thickener and stabilizer',
      'Stable in various conditions',
      'From plant sources',
      'Generally safe'
    ],
    alternatives: 'Use natural thickeners like guar gum'
  },
  'E469': {
    code: 'E469',
    name: 'Enzymically Hydrolysed Carboxymethylcellulose',
    category: 'Thickener / Stabilizer',
    concern: 'moderate',
    description: 'Enzymatically modified cellulose used as thickener and stabilizer. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Modified plant fiber',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Not absorbed by the body'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential gastrointestinal issues'
    ],
    benefits: [
      'Effective thickener and stabilizer',
      'Stable in various conditions',
      'From plant sources',
      'Generally safe'
    ],
    alternatives: 'Use natural thickeners like guar gum'
  },
  'E470': {
    code: 'E470',
    name: 'Sodium/Potassium/Calcium Salts of Fatty Acids',
    category: 'Emulsifier / Anti-caking Agent',
    concern: 'moderate',
    description: 'Salts of fatty acids used as emulsifiers and anti-caking agents. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Salts of natural fatty acids',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural sources'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Prevents caking in powders',
      'From natural fatty acids',
      'Generally safe'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E470A': {
    code: 'E470A',
    name: 'Sodium/Potassium Salts of Fatty Acids',
    category: 'Emulsifier / Anti-caking Agent',
    concern: 'moderate',
    description: 'Sodium and potassium salts of fatty acids used as emulsifiers and anti-caking agents.',
    healthEffects: [
      'Salts of natural fatty acids',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural sources'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Prevents caking in powders',
      'From natural fatty acids',
      'Generally safe'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E470B': {
    code: 'E470B',
    name: 'Magnesium Salts of Fatty Acids',
    category: 'Emulsifier / Anti-caking Agent',
    concern: 'moderate',
    description: 'Magnesium salts of fatty acids used as emulsifiers and anti-caking agents.',
    healthEffects: [
      'Salts of natural fatty acids',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural sources'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Prevents caking in powders',
      'Provides magnesium',
      'From natural fatty acids'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E472B': {
    code: 'E472B',
    name: 'Lactic Acid Esters of Mono- and Diglycerides',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from glycerol, fatty acids, and lactic acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural fatty acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E472C': {
    code: 'E472C',
    name: 'Citric Acid Esters of Mono- and Diglycerides',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from glycerol, fatty acids, and citric acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural fatty acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E472D': {
    code: 'E472D',
    name: 'Tartaric Acid Esters of Mono- and Diglycerides',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from glycerol, fatty acids, and tartaric acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural fatty acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E472E': {
    code: 'E472E',
    name: 'Diacetyl Tartaric Acid Esters of Mono- and Diglycerides',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from glycerol, fatty acids, and diacetyl tartaric acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural fatty acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E472F': {
    code: 'E472F',
    name: 'Mixed Acetic and Tartaric Acid Esters of Mono- and Diglycerides',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from glycerol, fatty acids, acetic and tartaric acids. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural fatty acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E473': {
    code: 'E473',
    name: 'Sucrose Esters of Fatty Acids',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from sucrose and fatty acids. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural sugar and fatty acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'From natural sources',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E474': {
    code: 'E474',
    name: 'Sucroglycerides',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from sucrose and glycerol. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural sugar sources'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'From natural sources',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E475': {
    code: 'E475',
    name: 'Polyglycerol Esters of Fatty Acids',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from polyglycerol and fatty acids. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural fatty acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E476': {
    code: 'E476',
    name: 'Polyglycerol Polyricinoleate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from polyglycerol and ricinoleic acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From castor oil'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E477': {
    code: 'E477',
    name: 'Propane-1,2-diol Esters of Fatty Acids',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from propylene glycol and fatty acids. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural fatty acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E478': {
    code: 'E478',
    name: 'Lactylated Fatty Acid Esters of Glycerol and Propane-1,2-diol',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from lactylated fatty acids, glycerol, and propylene glycol. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural fatty acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E479B': {
    code: 'E479B',
    name: 'Thermally Oxidized Soya Bean Oil Interacted with Mono- and Diglycerides',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from thermally oxidized soybean oil and mono/diglycerides. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From soybean oil'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential soy allergen',
      'From processed oil'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E481': {
    code: 'E481',
    name: 'Sodium Stearoyl-2-lactylate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from stearic acid and lactic acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural fatty acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E482': {
    code: 'E482',
    name: 'Calcium Stearoyl-2-lactylate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from stearic acid and lactic acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural fatty acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Provides calcium',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E483': {
    code: 'E483',
    name: 'Stearyl Tartrate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from stearyl alcohol and tartaric acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E484': {
    code: 'E484',
    name: 'Stearyl Citrate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from stearyl alcohol and citric acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E485': {
    code: 'E485',
    name: 'Sodium Stearoyl Fumarate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from stearic acid and fumaric acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E486': {
    code: 'E486',
    name: 'Calcium Stearoyl Fumarate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from stearic acid and fumaric acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural acids'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Provides calcium',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E487': {
    code: 'E487',
    name: 'Sodium Laurylsulfate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier used in food processing. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Surface-active agent'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential skin irritation'
    ],
    benefits: [
      'Effective emulsifier',
      'Stable in various conditions',
      'Widely used in food processing'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E488': {
    code: 'E488',
    name: 'Ethoxylated Mono- and Diglycerides',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from mono- and diglycerides with ethylene oxide. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Modified natural fats'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E489': {
    code: 'E489',
    name: 'Methyl Glucoside-Coconut Oil Ester',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from methyl glucoside and coconut oil. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From natural sources'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'From natural sources',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E490': {
    code: 'E490',
    name: 'Propane-1,2-diol',
    category: 'Humectant / Solvent',
    concern: 'moderate',
    description: 'Humectant and solvent used in food processing. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective humectant',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'Used as solvent'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential skin irritation'
    ],
    benefits: [
      'Effective humectant',
      'Stable in various conditions',
      'Widely used in food processing'
    ],
    alternatives: 'Use natural humectants like glycerin'
  },
  'E491': {
    code: 'E491',
    name: 'Sorbitan Monostearate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from sorbitol and stearic acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From sugar derivatives'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E492': {
    code: 'E492',
    name: 'Sorbitan Tristearate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from sorbitol and stearic acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From sugar derivatives'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E493': {
    code: 'E493',
    name: 'Sorbitan Monolaurate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from sorbitol and lauric acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From sugar derivatives'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E494': {
    code: 'E494',
    name: 'Sorbitan Monooleate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from sorbitol and oleic acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From sugar derivatives'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E495': {
    code: 'E495',
    name: 'Sorbitan Monopalmitate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from sorbitol and palmitic acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From sugar derivatives'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
  'E496': {
    code: 'E496',
    name: 'Sorbitan Trioleate',
    category: 'Emulsifier',
    concern: 'moderate',
    description: 'Emulsifier made from sorbitol and oleic acid. Generally safe but may cause digestive issues.',
    healthEffects: [
      'Effective emulsifier',
      'Generally recognized as safe',
      'May cause digestive issues in sensitive individuals',
      'From sugar derivatives'
    ],
    whyAvoid: [
      'May cause digestive discomfort',
      'Potential allergen concerns'
    ],
    benefits: [
      'Effective emulsifier',
      'Improves texture',
      'Stable in various conditions'
    ],
    alternatives: 'Use natural emulsifiers like lecithin'
  },
};

/**
 * Retrieves detailed information about a food additive by its E-code
 * @param code - The additive code (e.g., "E621", "E102"). Case-insensitive and trims whitespace
 * @returns The additive information object containing name, category, concern level, health effects, and more, or null if not found
 * @example
 * ```typescript
 * const msgInfo = getAdditiveInfo("E621");
 * if (msgInfo) {
 *   console.log(`${msgInfo.name} has ${msgInfo.concern} concern level`);
 * }
 * ```
 */
export function getAdditiveInfo(code: string): AdditiveInfo | null {
  // Normalize code (remove spaces, convert to uppercase)
  const normalizedCode = code.trim().toUpperCase();
  return ADDITIVES_DATABASE[normalizedCode] || null;
}

/**
 * Returns Tailwind CSS classes for displaying concern level colors in UI components
 * @param concern - The concern level of the additive ('low' | 'moderate' | 'high' | 'very_high')
 * @returns Tailwind CSS classes for background and text colors suitable for badges/buttons
 * @example
 * ```typescript
 * const colorClasses = getConcernColor('very_high'); // "bg-red-600 text-white"
 * return <span className={`px-2 py-1 rounded ${colorClasses}`}>Very High</span>;
 * ```
 */
export function getConcernColor(concern: AdditiveInfo['concern']): string {
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
 * Converts concern level enum values to human-readable text labels
 * @param concern - The concern level of the additive ('low' | 'moderate' | 'high' | 'very_high')
 * @returns A human-readable string describing the concern level
 * @example
 * ```typescript
 * const text = getConcernText('moderate'); // "Moderate Concern"
 * console.log(`This additive has ${text.toLowerCase()}`);
 * ```
 */
export function getConcernText(concern: AdditiveInfo['concern']): string {
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

/**
 * Returns hex color values for concern levels (React Native compatible)
 * @param concern - The concern level of the additive ('low' | 'moderate' | 'high' | 'very_high')
 * @returns A hex color string for the concern level
 * @example
 * ```typescript
 * const color = getConcernColorHex('high'); // "#EF4444"
 * ```
 */
export function getConcernColorHex(concern: AdditiveInfo['concern']): string {
  switch (concern) {
    case 'very_high':
      return '#EF4444'; // Red
    case 'high':
      return '#F97316'; // Orange
    case 'moderate':
      return '#F59E0B'; // Yellow
    case 'low':
      return '#10B981'; // Green
    default:
      return '#6B7280'; // Gray
  }
}

/**
 * Returns background and text color objects for concern levels (React Native compatible)
 * @param concern - The concern level of the additive ('low' | 'moderate' | 'high' | 'very_high')
 * @returns An object with backgroundColor and textColor hex values
 * @example
 * ```typescript
 * const colors = getConcernColors('high'); // { backgroundColor: '#F97316', textColor: '#FFFFFF' }
 * ```
 */
export function getConcernColors(concern: AdditiveInfo['concern']): { backgroundColor: string; textColor: string } {
  return {
    backgroundColor: getConcernColorHex(concern),
    textColor: '#FFFFFF'
  };
}

/**
 * Searches for additives by name or code using a query string
 * @param query - Search term to match against additive names or codes (case-insensitive)
 * @returns Array of additive information objects that match the search query
 * @example
 * ```typescript
 * const results = searchAdditives('msg'); // Returns additives containing 'msg' in name or code
 * const colors = searchAdditives('color'); // Returns color-related additives
 * ```
 */
export function searchAdditives(query: string): AdditiveInfo[] {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];

  return Object.values(ADDITIVES_DATABASE).filter(additive =>
    additive.name.toLowerCase().includes(normalizedQuery) ||
    additive.code.toLowerCase().includes(normalizedQuery) ||
    additive.category.toLowerCase().includes(normalizedQuery)
  );
}

/**
 * Filters additives by concern level
 * @param concernLevel - The concern level to filter by ('low' | 'moderate' | 'high' | 'very_high')
 * @returns Array of additive information objects with the specified concern level
 * @example
 * ```typescript
 * const highConcern = getAdditivesByConcern('high'); // Returns all high concern additives
 * const safeAdditives = getAdditivesByConcern('low'); // Returns low concern additives
 * ```
 */
export function getAdditivesByConcern(concernLevel: AdditiveInfo['concern']): AdditiveInfo[] {
  return Object.values(ADDITIVES_DATABASE).filter(additive => additive.concern === concernLevel);
}

/**
 * Groups additives by their category
 * @returns Object with category names as keys and arrays of additives as values
 * @example
 * ```typescript
 * const categories = getAdditivesByCategory();
 * console.log(categories['Artificial Color']); // Array of artificial color additives
 * console.log(Object.keys(categories)); // All available categories
 * ```
 */
export function getAdditivesByCategory(): Record<string, AdditiveInfo[]> {
  const categories: Record<string, AdditiveInfo[]> = {};

  Object.values(ADDITIVES_DATABASE).forEach(additive => {
    if (!categories[additive.category]) {
      categories[additive.category] = [];
    }
    categories[additive.category].push(additive);
  });

  return categories;
}

/**
 * Gets all unique categories from the additives database
 * @returns Array of unique category names
 * @example
 * ```typescript
 * const categories = getAllCategories();
 * console.log(categories); // ['Artificial Color', 'Preservative', 'Emulsifier', ...]
 * ```
 */
export function getAllCategories(): string[] {
  const categories = new Set(Object.values(ADDITIVES_DATABASE).map(additive => additive.category));
  return Array.from(categories).sort();
}

/**
 * Gets additives that are considered beneficial or have health benefits
 * @returns Array of additive information objects that have benefits listed
 * @example
 * ```typescript
 * const beneficial = getBeneficialAdditives();
 * console.log(beneficial.map(a => a.name)); // Natural vitamins, antioxidants, etc.
 * ```
 */
export function getBeneficialAdditives(): AdditiveInfo[] {
  return Object.values(ADDITIVES_DATABASE).filter(additive =>
    additive.benefits && additive.benefits.length > 0
  );
}

/**
 * Checks if an additive code exists in the database
 * @param code - The additive code to check
 * @returns True if the additive exists, false otherwise
 * @example
 * ```typescript
 * if (additiveExists('E621')) {
 *   console.log('MSG is in the database');
 * }
 * ```
 */
export function additiveExists(code: string): boolean {
  const normalizedCode = code.trim().toUpperCase();
  return normalizedCode in ADDITIVES_DATABASE;
}

/**
 * Gets a random additive from the database (useful for testing or examples)
 * @returns A randomly selected additive information object
 * @example
 * ```typescript
 * const randomAdditive = getRandomAdditive();
 * console.log(`Random additive: ${randomAdditive.name}`);
 * ```
 */
export function getRandomAdditive(): AdditiveInfo {
  const additives = Object.values(ADDITIVES_DATABASE);
  const randomIndex = Math.floor(Math.random() * additives.length);
  return additives[randomIndex];
}

/**
 * Validates if a string is a properly formatted additive code
 * @param code - The string to validate as an additive code
 * @returns True if the code matches E-number format (E followed by 2-4 digits, optional letter suffix)
 * @example
 * ```typescript
 * isValidAdditiveCode('E621'); // true
 * isValidAdditiveCode('621'); // false
 * isValidAdditiveCode('E102I'); // true
 * isValidAdditiveCode('MSG'); // false
 * ```
 */
export function isValidAdditiveCode(code: string): boolean {
  const normalizedCode = code.trim().toUpperCase();
  // E-number format: E followed by 2-4 digits, optional letter suffix
  const eNumberRegex = /^E\d{2,4}[A-Z]?$/;
  return eNumberRegex.test(normalizedCode);
}

/**
 * Validates additive information object structure and required fields
 * @param additive - The additive information object to validate
 * @returns Object with isValid boolean and array of validation errors if any
 * @example
 * ```typescript
 * const result = validateAdditiveInfo(additiveData);
 * if (!result.isValid) {
 *   console.log('Validation errors:', result.errors);
 * }
 * ```
 */
export function validateAdditiveInfo(additive: Partial<AdditiveInfo>): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!additive.code || typeof additive.code !== 'string') {
    errors.push('Code is required and must be a string');
  } else if (!isValidAdditiveCode(additive.code)) {
    errors.push('Code must be in E-number format (E followed by 2-4 digits)');
  }

  if (!additive.name || typeof additive.name !== 'string' || additive.name.trim().length === 0) {
    errors.push('Name is required and must be a non-empty string');
  }

  if (!additive.category || typeof additive.category !== 'string' || additive.category.trim().length === 0) {
    errors.push('Category is required and must be a non-empty string');
  }

  if (!additive.concern || !['low', 'moderate', 'high', 'very_high'].includes(additive.concern)) {
    errors.push('Concern must be one of: low, moderate, high, very_high');
  }

  if (!additive.description || typeof additive.description !== 'string' || additive.description.trim().length === 0) {
    errors.push('Description is required and must be a non-empty string');
  }

  if (!Array.isArray(additive.healthEffects)) {
    errors.push('Health effects must be an array');
  } else if (additive.healthEffects.length === 0) {
    errors.push('At least one health effect must be provided');
  } else if (!additive.healthEffects.every(effect => typeof effect === 'string')) {
    errors.push('All health effects must be strings');
  }

  if (!Array.isArray(additive.whyAvoid)) {
    errors.push('Why avoid must be an array');
  } else if (!additive.whyAvoid.every(reason => typeof reason === 'string')) {
    errors.push('All why avoid reasons must be strings');
  }

  if (additive.benefits && (!Array.isArray(additive.benefits) || !additive.benefits.every(benefit => typeof benefit === 'string'))) {
    errors.push('Benefits must be an array of strings if provided');
  }

  if (additive.alternatives && typeof additive.alternatives !== 'string') {
    errors.push('Alternatives must be a string if provided');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Sanitizes and normalizes an additive code for consistent database lookup
 * @param code - The additive code to sanitize
 * @returns Normalized code or null if invalid
 * @example
 * ```typescript
 * sanitizeAdditiveCode(' e621 '); // 'E621'
 * sanitizeAdditiveCode('621'); // null (invalid format)
 * sanitizeAdditiveCode('E102i'); // 'E102I'
 * ```
 */
export function sanitizeAdditiveCode(code: string): string | null {
  if (!code || typeof code !== 'string') return null;

  const sanitized = code.trim().toUpperCase();
  return isValidAdditiveCode(sanitized) ? sanitized : null;
}

/**
 * Type guard to check if a value is a valid concern level
 * @param value - The value to check
 * @returns True if the value is a valid concern level
 * @example
 * ```typescript
 * if (isConcernLevel(someValue)) {
 *   const color = getConcernColor(someValue); // TypeScript knows it's valid
 * }
 * ```
 */
export function isConcernLevel(value: any): value is AdditiveInfo['concern'] {
  return ['low', 'moderate', 'high', 'very_high'].includes(value);
}

/**
 * Gets database statistics and integrity information
 * @returns Object containing database statistics and validation results
 * @example
 * ```typescript
 * const stats = getDatabaseStats();
 * console.log(`Database contains ${stats.totalAdditives} additives`);
 * if (stats.invalidAdditives.length > 0) {
 *   console.log('Invalid additives found:', stats.invalidAdditives);
 * }
 * ```
 */
export function getDatabaseStats(): {
  totalAdditives: number;
  categories: string[];
  concernLevels: Record<AdditiveInfo['concern'], number>;
  invalidAdditives: Array<{ code: string; errors: string[] }>;
} {
  const additives = Object.values(ADDITIVES_DATABASE);
  const invalidAdditives: Array<{ code: string; errors: string[] }> = [];
  const concernLevels: Record<AdditiveInfo['concern'], number> = {
    low: 0,
    moderate: 0,
    high: 0,
    very_high: 0
  };

  additives.forEach(additive => {
    const validation = validateAdditiveInfo(additive);
    if (!validation.isValid) {
      invalidAdditives.push({ code: additive.code, errors: validation.errors });
    }
    concernLevels[additive.concern]++;
  });

  const categories = getAllCategories();

  return {
    totalAdditives: additives.length,
    categories,
    concernLevels,
    invalidAdditives
  };
}

// Performance optimizations with memoization

/**
 * Memoization cache for expensive operations
 */
const memoizationCache = new Map<string, any>();

/**
 * Clears all memoization caches (useful for testing or when database is updated)
 */
export function clearMemoizationCache(): void {
  memoizationCache.clear();
}

/**
 * Memoized version of getAdditivesByCategory for better performance on repeated calls
 * @returns Memoized result of getAdditivesByCategory()
 */
export function getAdditivesByCategoryMemoized(): Record<string, AdditiveInfo[]> {
  const cacheKey = 'additivesByCategory';
  if (memoizationCache.has(cacheKey)) {
    return memoizationCache.get(cacheKey);
  }

  const result = getAdditivesByCategory();
  memoizationCache.set(cacheKey, result);
  return result;
}

/**
 * Memoized version of getAllCategories for better performance
 * @returns Memoized result of getAllCategories()
 */
export function getAllCategoriesMemoized(): string[] {
  const cacheKey = 'allCategories';
  if (memoizationCache.has(cacheKey)) {
    return memoizationCache.get(cacheKey);
  }

  const result = getAllCategories();
  memoizationCache.set(cacheKey, result);
  return result;
}

/**
 * Memoized version of getBeneficialAdditives for better performance
 * @returns Memoized result of getBeneficialAdditives()
 */
export function getBeneficialAdditivesMemoized(): AdditiveInfo[] {
  const cacheKey = 'beneficialAdditives';
  if (memoizationCache.has(cacheKey)) {
    return memoizationCache.get(cacheKey);
  }

  const result = getBeneficialAdditives();
  memoizationCache.set(cacheKey, result);
  return result;
}

/**
 * Memoized version of getDatabaseStats for better performance
 * @returns Memoized result of getDatabaseStats()
 */
export function getDatabaseStatsMemoized(): {
  totalAdditives: number;
  categories: string[];
  concernLevels: Record<AdditiveInfo['concern'], number>;
  invalidAdditives: Array<{ code: string; errors: string[] }>;
} {
  const cacheKey = 'databaseStats';
  if (memoizationCache.has(cacheKey)) {
    return memoizationCache.get(cacheKey);
  }

  const result = getDatabaseStats();
  memoizationCache.set(cacheKey, result);
  return result;
}

/**
 * Fast lookup for commonly accessed additives (creates a lookup table on first access)
 * @param codes - Array of additive codes to look up
 * @returns Array of additive information objects (null for not found codes)
 */
export function batchGetAdditives(codes: string[]): (AdditiveInfo | null)[] {
  return codes.map(code => getAdditiveInfo(code));
}

/**
 * Pre-warms the memoization cache by calling commonly used functions
 * Useful to call at application startup for better performance
 */
export function warmUpCache(): void {
  getAdditivesByCategoryMemoized();
  getAllCategoriesMemoized();
  getBeneficialAdditivesMemoized();
  getDatabaseStatsMemoized();
}

/**
 * Performance monitoring helper - measures execution time of a function
 * @param fn - Function to measure
 * @param functionName - Name for logging purposes
 * @returns Result of the function execution
 */
export async function measurePerformance<T>(
  fn: () => T | Promise<T>,
  functionName: string = 'anonymous'
): Promise<T> {
  const startTime = performance.now();
  const result = await fn();
  const endTime = performance.now();
  const duration = endTime - startTime;

  console.log(`${functionName} took ${duration.toFixed(2)}ms to execute`);

  return result;
}

// Integration functions for health analysis system

/**
 * Analyzes additives for health impact using the detailed database
 * Provides more comprehensive analysis than the basic health analyzer
 * @param additives - Array of additive codes or objects
 * @returns Detailed analysis including score impact, concerns, and recommendations
 * @example
 * ```typescript
 * const analysis = analyzeAdditivesDetailed(['E621', 'E102', 'E200']);
 * console.log(`Health score impact: ${analysis.totalImpact}`);
 * console.log(`Main concerns: ${analysis.concerns.join(', ')}`);
 * ```
 */
export function analyzeAdditivesDetailed(additives: (string | { code: string })[]): {
  totalImpact: number;
  concerns: string[];
  recommendations: string[];
  warnings: string[];
  highRiskAdditives: AdditiveInfo[];
  beneficialAdditives: AdditiveInfo[];
} {
  const concerns: string[] = [];
  const recommendations: string[] = [];
  const warnings: string[] = [];
  const highRiskAdditives: AdditiveInfo[] = [];
  const beneficialAdditives: AdditiveInfo[] = [];
  let totalImpact = 0;

  additives.forEach((additive) => {
    const code = typeof additive === 'string' ? additive : additive.code;
    const info = getAdditiveInfo(code);

    if (info) {
      // Calculate impact based on concern level
      let impact = 0;
      switch (info.concern) {
        case 'very_high':
          impact = -8;
          highRiskAdditives.push(info);
          break;
        case 'high':
          impact = -5;
          highRiskAdditives.push(info);
          break;
        case 'moderate':
          impact = -3;
          break;
        case 'low':
          impact = -1;
          break;
      }

      totalImpact += impact;

      // Add concerns from the detailed database
      if (info.whyAvoid && info.whyAvoid.length > 0) {
        concerns.push(...info.whyAvoid);
      }

      // Generate recommendations
      if (info.alternatives) {
        recommendations.push(`${info.name}: ${info.alternatives}`);
      }

      // Add warnings for high-risk additives
      if (info.concern === 'very_high' || info.concern === 'high') {
        warnings.push(`${info.name} (${info.code}): ${info.healthEffects.join(', ')}`);
      }

      // Track beneficial additives
      if (info.benefits && info.benefits.length > 0) {
        beneficialAdditives.push(info);
      }
    }
  });

  return {
    totalImpact,
    concerns: [...new Set(concerns)], // Remove duplicates
    recommendations: [...new Set(recommendations)],
    warnings,
    highRiskAdditives,
    beneficialAdditives
  };
}

/**
 * Calculates additive risk score for a product based on its additive profile
 * @param additives - Array of additive codes
 * @param weights - Optional custom weights for different concern levels
 * @returns Risk score object with overall score and breakdown
 * @example
 * ```typescript
 * const risk = calculateAdditiveRiskScore(['E621', 'E102', 'E200']);
 * console.log(`Risk score: ${risk.overall}/${risk.maxPossible}`);
 * ```
 */
export function calculateAdditiveRiskScore(
  additives: string[],
  weights: Partial<Record<AdditiveInfo['concern'], number>> = {}
): {
  overall: number;
  maxPossible: number;
  breakdown: Record<AdditiveInfo['concern'], number>;
  riskLevel: 'low' | 'moderate' | 'high' | 'very_high';
} {
  const defaultWeights = {
    very_high: 4,
    high: 3,
    moderate: 2,
    low: 1
  };

  const customWeights = { ...defaultWeights, ...weights };
  const breakdown: Record<AdditiveInfo['concern'], number> = {
    very_high: 0,
    high: 0,
    moderate: 0,
    low: 0
  };

  let totalScore = 0;
  let maxScore = 0;

  additives.forEach(code => {
    const info = getAdditiveInfo(code);
    if (info) {
      const weight = customWeights[info.concern];
      breakdown[info.concern] += weight;
      totalScore += weight;
      maxScore += customWeights.very_high; // Max weight for comparison
    }
  });

  // Determine risk level based on score
  let riskLevel: 'low' | 'moderate' | 'high' | 'very_high';
  const scoreRatio = totalScore / Math.max(maxScore, 1);

  if (scoreRatio >= 0.75) riskLevel = 'very_high';
  else if (scoreRatio >= 0.5) riskLevel = 'high';
  else if (scoreRatio >= 0.25) riskLevel = 'moderate';
  else riskLevel = 'low';

  return {
    overall: totalScore,
    maxPossible: maxScore,
    breakdown,
    riskLevel
  };
}

/**
 * Finds additive combinations that are commonly problematic together
 * @param additives - Array of additive codes to check for combinations
 * @returns Array of problematic combinations found
 * @example
 * ```typescript
 * const combinations = findProblematicCombinations(['E621', 'E635', 'E211']);
 * combinations.forEach(combo => console.log(`${combo.combination}: ${combo.concern}`));
 * ```
 */
export function findProblematicCombinations(additives: string[]): Array<{
  combination: string;
  concern: string;
  description: string;
}> {
  const combinations: Array<{
    combination: string;
    concern: string;
    description: string;
  }> = [];

  // Common problematic combinations
  const problematicCombos = [
    {
      codes: ['E621', 'E635'],
      concern: 'MSG and Ribonucleotides combination',
      description: 'Both are flavor enhancers that may have synergistic effects on appetite and reactions'
    },
    {
      codes: ['E211', 'E300'],
      concern: 'Sodium Benzoate and Vitamin C',
      description: 'Can form benzene, a known carcinogen, when combined'
    },
    {
      codes: ['E102', 'E104', 'E110'],
      concern: 'Multiple artificial colors',
      description: 'Combined artificial colors may increase hyperactivity risk in children'
    },
    {
      codes: ['E951', 'E952', 'E954'],
      concern: 'Multiple artificial sweeteners',
      description: 'Combining different artificial sweeteners may affect gut health'
    }
  ];

  problematicCombos.forEach(combo => {
    const foundCodes = combo.codes.filter(code => additives.includes(code));
    if (foundCodes.length >= 2) {
      combinations.push({
        combination: foundCodes.join(' + '),
        concern: combo.concern,
        description: combo.description
      });
    }
  });

  return combinations;
}

/**
 * Generates personalized recommendations based on additive sensitivity profile
 * @param additives - Array of additive codes in the product
 * @param sensitivities - User's sensitivity profile
 * @returns Personalized recommendations and warnings
 * @example
 * ```typescript
 * const recommendations = getPersonalizedRecommendations(
 *   ['E621', 'E220', 'E102'],
 *   { asthma: true, hyperactivity: true }
 * );
 * ```
 */
export function getPersonalizedRecommendations(
  additives: string[],
  sensitivities: {
    asthma?: boolean;
    hyperactivity?: boolean;
    allergies?: string[];
    pregnancy?: boolean;
    children?: boolean;
  }
): {
  avoid: string[];
  warnings: string[];
  alternatives: string[];
  safeAdditives: string[];
} {
  const avoid: string[] = [];
  const warnings: string[] = [];
  const alternatives: string[] = [];
  const safeAdditives: string[] = [];

  additives.forEach(code => {
    const info = getAdditiveInfo(code);
    if (!info) return;

    let shouldAvoid = false;
    let warning = '';

    // Check asthma sensitivity
    if (sensitivities.asthma && (
      code === 'E220' || // Sulfur dioxide
      code === 'E221' || // Sodium sulfite
      code === 'E222' || // Sodium bisulfite
      code === 'E223' || // Sodium metabisulfite
      code === 'E224'    // Potassium metabisulfite
    )) {
      shouldAvoid = true;
      warning = `${info.name} can trigger severe asthma attacks`;
    }

    // Check hyperactivity sensitivity
    if (sensitivities.hyperactivity && (
      code === 'E102' || // Tartrazine
      code === 'E104' || // Quinoline Yellow
      code === 'E110' || // Sunset Yellow
      code === 'E122' || // Azorubine
      code === 'E124' || // Ponceau 4R
      code === 'E129'    // Allura Red
    )) {
      warning = `${info.name} may increase hyperactivity in sensitive individuals`;
    }

    // Check pregnancy concerns
    if (sensitivities.pregnancy && (
      info.concern === 'very_high' || info.concern === 'high'
    )) {
      warning = `${info.name} has high concern level - consult healthcare provider`;
    }

    // Check children concerns
    if (sensitivities.children && (
      code.startsWith('E1') && // Many artificial colors
      ['E102', 'E104', 'E110', 'E122', 'E124', 'E129'].includes(code)
    )) {
      warning = `${info.name} may affect children's behavior and health`;
    }

    if (shouldAvoid) {
      avoid.push(info.name);
      if (info.alternatives) {
        alternatives.push(info.alternatives);
      }
    } else if (warning) {
      warnings.push(warning);
    } else if (info.concern === 'low' || (info.benefits && info.benefits.length > 0)) {
      safeAdditives.push(info.name);
    }
  });

  return {
    avoid,
    warnings,
    alternatives,
    safeAdditives
  };
}

// Advanced scoring and risk assessment functions

/**
 * Calculates comprehensive additive health score using multiple factors
 * @param additives - Array of additive codes
 * @param options - Scoring options and weights
 * @returns Detailed health score breakdown
 * @example
 * ```typescript
 * const score = calculateComprehensiveHealthScore(['E621', 'E102', 'E200'], {
 *   weightByCategory: true,
 *   considerCombinations: true
 * });
 * console.log(`Health score: ${score.totalScore}/100`);
 * ```
 */
export function calculateComprehensiveHealthScore(
  additives: string[],
  options: {
    weightByCategory?: boolean;
    considerCombinations?: boolean;
    sensitivityProfile?: {
      asthma?: boolean;
      hyperactivity?: boolean;
      allergies?: string[];
    };
  } = {}
): {
  totalScore: number;
  categoryBreakdown: Record<string, number>;
  concernBreakdown: Record<AdditiveInfo['concern'], number>;
  riskFactors: string[];
  recommendations: string[];
} {
  const categoryBreakdown: Record<string, number> = {};
  const concernBreakdown: Record<AdditiveInfo['concern'], number> = {
    very_high: 0,
    high: 0,
    moderate: 0,
    low: 0
  };
  const riskFactors: string[] = [];
  const recommendations: string[] = [];

  let baseScore = 100;
  let totalPenalty = 0;

  additives.forEach(code => {
    const info = getAdditiveInfo(code);
    if (!info) return;

    // Base penalty by concern level
    const basePenalty = {
      very_high: 15,
      high: 10,
      moderate: 5,
      low: 2
    }[info.concern] || 0;

    // Category weighting
    let categoryMultiplier = 1;
    if (options.weightByCategory) {
      const categoryWeights: Record<string, number> = {
        'Artificial Color': 1.5,
        'Artificial Sweetener': 1.3,
        'Preservative': 1.2,
        'Flavor Enhancer': 1.4,
        'Emulsifier': 1.1,
        'Antioxidant': 0.8,
        'Thickener / Stabilizer': 0.9,
        'Acidity Regulator': 0.7,
        'Natural Color': 0.6,
        'Vitamin': 0.5
      };
      categoryMultiplier = categoryWeights[info.category] || 1;
    }

    // Sensitivity adjustments
    let sensitivityMultiplier = 1;
    if (options.sensitivityProfile) {
      if (options.sensitivityProfile.asthma && info.category === 'Preservative') {
        sensitivityMultiplier = 2;
        riskFactors.push(`${info.name}: Asthma trigger`);
      }
      if (options.sensitivityProfile.hyperactivity && info.category === 'Artificial Color') {
        sensitivityMultiplier = 1.8;
        riskFactors.push(`${info.name}: May affect behavior`);
      }
    }

    const finalPenalty = basePenalty * categoryMultiplier * sensitivityMultiplier;
    totalPenalty += finalPenalty;

    // Update breakdowns
    concernBreakdown[info.concern] += finalPenalty;
    categoryBreakdown[info.category] = (categoryBreakdown[info.category] || 0) + finalPenalty;

    // Add recommendations
    if (info.alternatives) {
      recommendations.push(info.alternatives);
    }
  });

  // Check for problematic combinations
  if (options.considerCombinations) {
    const combinations = findProblematicCombinations(additives);
    combinations.forEach(combo => {
      totalPenalty += 5; // Additional penalty for combinations
      riskFactors.push(combo.concern);
    });
  }

  const totalScore = Math.max(0, baseScore - totalPenalty);

  return {
    totalScore: Math.round(totalScore),
    categoryBreakdown,
    concernBreakdown,
    riskFactors: [...new Set(riskFactors)],
    recommendations: [...new Set(recommendations)]
  };
}

/**
 * Assesses cumulative risk from multiple additives in a product
 * @param additives - Array of additive codes
 * @returns Risk assessment with severity levels and mitigation strategies
 * @example
 * ```typescript
 * const assessment = assessCumulativeRisk(['E621', 'E635', 'E211', 'E102']);
 * console.log(`Overall risk: ${assessment.overallRisk}`);
 * assessment.mitigationStrategies.forEach(strategy => console.log(strategy));
 * ```
 */
export function assessCumulativeRisk(additives: string[]): {
  overallRisk: 'low' | 'moderate' | 'high' | 'very_high';
  riskFactors: Array<{
    factor: string;
    severity: 'low' | 'moderate' | 'high' | 'very_high';
    description: string;
  }>;
  mitigationStrategies: string[];
  safeThreshold: number;
} {
  const riskFactors: Array<{
    factor: string;
    severity: 'low' | 'moderate' | 'high' | 'very_high';
    description: string;
  }> = [];
  const mitigationStrategies: string[] = [];

  let totalRiskScore = 0;

  // Analyze individual additives
  additives.forEach(code => {
    const info = getAdditiveInfo(code);
    if (!info) return;

    const riskScore = {
      very_high: 4,
      high: 3,
      moderate: 2,
      low: 1
    }[info.concern] || 0;

    totalRiskScore += riskScore;

    if (riskScore >= 3) {
      riskFactors.push({
        factor: info.name,
        severity: info.concern,
        description: info.healthEffects.join(', ')
      });
    }
  });

  // Check for combinations
  const combinations = findProblematicCombinations(additives);
  combinations.forEach(combo => {
    totalRiskScore += 2; // Additional risk for combinations
    riskFactors.push({
      factor: combo.concern,
      severity: 'high',
      description: combo.description
    });
  });

  // Determine overall risk
  let overallRisk: 'low' | 'moderate' | 'high' | 'very_high';
  const averageRisk = totalRiskScore / Math.max(additives.length, 1);

  if (averageRisk >= 3.5) overallRisk = 'very_high';
  else if (averageRisk >= 2.5) overallRisk = 'high';
  else if (averageRisk >= 1.5) overallRisk = 'moderate';
  else overallRisk = 'low';

  // Generate mitigation strategies
  if (overallRisk === 'very_high') {
    mitigationStrategies.push('Avoid this product entirely');
    mitigationStrategies.push('Look for products with no or minimal additives');
    mitigationStrategies.push('Consult healthcare professional for personalized advice');
  } else if (overallRisk === 'high') {
    mitigationStrategies.push('Limit consumption of this type of product');
    mitigationStrategies.push('Choose products with natural alternatives when available');
    mitigationStrategies.push('Check labels carefully for concerning additives');
  } else if (overallRisk === 'moderate') {
    mitigationStrategies.push('Consume occasionally rather than regularly');
    mitigationStrategies.push('Balance with nutrient-rich foods');
  } else {
    mitigationStrategies.push('Generally safe for regular consumption');
  }

  // Safe threshold based on number of additives
  const safeThreshold = Math.max(1, Math.floor(additives.length * 0.3));

  return {
    overallRisk,
    riskFactors,
    mitigationStrategies,
    safeThreshold
  };
}

/**
 * Analyzes additive load by category to identify patterns
 * @param additives - Array of additive codes
 * @returns Category analysis with insights and patterns
 * @example
 * ```typescript
 * const analysis = analyzeAdditiveLoad(['E621', 'E635', 'E200', 'E202', 'E102', 'E110']);
 * console.log(`Most common category: ${analysis.dominantCategory}`);
 * ```
 */
export function analyzeAdditiveLoad(additives: string[]): {
  dominantCategory: string;
  categoryDistribution: Record<string, number>;
  categoryInsights: Array<{
    category: string;
    count: number;
    concern: 'low' | 'moderate' | 'high' | 'very_high';
    insight: string;
  }>;
  processingLevel: 'minimal' | 'light' | 'moderate' | 'heavy' | 'ultra_processed';
} {
  const categoryDistribution: Record<string, number> = {};
  const categoryConcerns: Record<string, { count: number; totalConcern: number }> = {};

  additives.forEach(code => {
    const info = getAdditiveInfo(code);
    if (!info) return;

    categoryDistribution[info.category] = (categoryDistribution[info.category] || 0) + 1;

    if (!categoryConcerns[info.category]) {
      categoryConcerns[info.category] = { count: 0, totalConcern: 0 };
    }
    categoryConcerns[info.category].count++;

    const concernScore = {
      very_high: 4,
      high: 3,
      moderate: 2,
      low: 1
    }[info.concern] || 0;

    categoryConcerns[info.category].totalConcern += concernScore;
  });

  // Find dominant category
  const dominantCategory = Object.entries(categoryDistribution)
    .sort(([,a], [,b]) => b - a)[0]?.[0] || 'Unknown';

  // Generate insights
  const categoryInsights: Array<{
    category: string;
    count: number;
    concern: 'low' | 'moderate' | 'high' | 'very_high';
    insight: string;
  }> = [];

  Object.entries(categoryConcerns).forEach(([category, data]) => {
    const averageConcern = data.totalConcern / data.count;
    let concern: 'low' | 'moderate' | 'high' | 'very_high';
    let insight = '';

    if (averageConcern >= 3.5) {
      concern = 'very_high';
      insight = `${category} additives are generally concerning - consider avoiding products with multiple ${category.toLowerCase()}s`;
    } else if (averageConcern >= 2.5) {
      concern = 'high';
      insight = `Multiple ${category.toLowerCase()} additives present - be cautious with regular consumption`;
    } else if (averageConcern >= 1.5) {
      concern = 'moderate';
      insight = `${category} additives are moderately concerning - balance with natural alternatives`;
    } else {
      concern = 'low';
      insight = `${category} additives are generally safe - focus on other aspects of the product`;
    }

    categoryInsights.push({
      category,
      count: data.count,
      concern,
      insight
    });
  });

  // Determine processing level
  let processingLevel: 'minimal' | 'light' | 'moderate' | 'heavy' | 'ultra_processed';
  const totalAdditives = additives.length;

  if (totalAdditives === 0) processingLevel = 'minimal';
  else if (totalAdditives <= 2) processingLevel = 'light';
  else if (totalAdditives <= 5) processingLevel = 'moderate';
  else if (totalAdditives <= 10) processingLevel = 'heavy';
  else processingLevel = 'ultra_processed';

  return {
    dominantCategory,
    categoryDistribution,
    categoryInsights,
    processingLevel
  };
}

// Comparison and recommendation utilities

/**
 * Compares two products based on their additive profiles
 * @param product1 - First product with additives array
 * @param product2 - Second product with additives array
 * @returns Detailed comparison analysis
 * @example
 * ```typescript
 * const comparison = compareProducts(
 *   { name: 'Product A', additives: ['E621', 'E102'] },
 *   { name: 'Product B', additives: ['E200', 'E300'] }
 * );
 * console.log(`${comparison.betterChoice} is better`);
 * ```
 */
export function compareProducts(
  product1: { name: string; additives: string[] },
  product2: { name: string; additives: string[] }
): {
  betterChoice: string;
  difference: number;
  analysis: {
    product1: { score: number; riskLevel: string; highRiskCount: number };
    product2: { score: number; riskLevel: string; highRiskCount: number };
  };
  uniqueAdditives: {
    product1Only: string[];
    product2Only: string[];
    shared: string[];
  };
  recommendations: string[];
} {
  const score1 = calculateAdditiveRiskScore(product1.additives);
  const score2 = calculateAdditiveRiskScore(product2.additives);

  const analysis = {
    product1: {
      score: score1.overall,
      riskLevel: score1.riskLevel,
      highRiskCount: score1.breakdown.very_high + score1.breakdown.high
    },
    product2: {
      score: score2.overall,
      riskLevel: score2.riskLevel,
      highRiskCount: score2.breakdown.very_high + score2.breakdown.high
    }
  };

  // Determine better choice (lower score is better)
  const betterChoice = score1.overall < score2.overall ? product1.name : product2.name;
  const difference = Math.abs(score1.overall - score2.overall);

  // Find unique additives
  const product1Set = new Set(product1.additives);
  const product2Set = new Set(product2.additives);

  const uniqueAdditives = {
    product1Only: product1.additives.filter(code => !product2Set.has(code)),
    product2Only: product2.additives.filter(code => !product1Set.has(code)),
    shared: product1.additives.filter(code => product2Set.has(code))
  };

  // Generate recommendations
  const recommendations: string[] = [];
  if (difference > 5) {
    recommendations.push(`Choose ${betterChoice} for significantly better additive profile`);
  }

  if (analysis.product1.highRiskCount > analysis.product2.highRiskCount) {
    recommendations.push(`${product1.name} has more high-risk additives`);
  } else if (analysis.product2.highRiskCount > analysis.product1.highRiskCount) {
    recommendations.push(`${product2.name} has more high-risk additives`);
  }

  return {
    betterChoice,
    difference,
    analysis,
    uniqueAdditives,
    recommendations
  };
}

/**
 * Finds healthier alternatives for concerning additives
 * @param additives - Array of additive codes to find alternatives for
 * @returns Alternative suggestions with reasoning
 * @example
 * ```typescript
 * const alternatives = findHealthierAlternatives(['E621', 'E102', 'E211']);
 * alternatives.forEach(alt => console.log(`${alt.original} -> ${alt.alternatives.join(', ')}`));
 * ```
 */
export function findHealthierAlternatives(additives: string[]): Array<{
  original: string;
  concern: string;
  alternatives: string[];
  reasoning: string;
}> {
  const alternatives: Array<{
    original: string;
    concern: string;
    alternatives: string[];
    reasoning: string;
  }> = [];

  additives.forEach(code => {
    const info = getAdditiveInfo(code);
    if (!info || info.concern === 'low') return;

    const alt: any = {
      original: info.name,
      concern: info.concern,
      alternatives: [],
      reasoning: ''
    };

    // Find alternatives based on category and concern level
    if (info.category === 'Artificial Color') {
      alt.alternatives = [
        'Natural colors from fruits and vegetables',
        'Beet juice (E162)',
        'Carrot extract (E160a)',
        'Turmeric (E100)'
      ];
      alt.reasoning = 'Natural colors are generally safer and provide additional nutrients';
    } else if (info.category === 'Artificial Sweetener') {
      alt.alternatives = [
        'Stevia (natural sweetener)',
        'Honey or maple syrup (in moderation)',
        'Fruit-based sweeteners',
        'Reduced sugar products'
      ];
      alt.reasoning = 'Natural sweeteners avoid artificial chemical concerns';
    } else if (info.category === 'Flavor Enhancer' && code === 'E621') {
      alt.alternatives = [
        'Natural herbs and spices',
        'Garlic, onion, ginger',
        'Citrus zest',
        'Fresh herbs (basil, oregano, thyme)'
      ];
      alt.reasoning = 'Fresh ingredients provide authentic flavor without chemical enhancement';
    } else if (info.category === 'Preservative') {
      alt.alternatives = [
        'Natural preservatives (vitamin C, E)',
        'Proper refrigeration',
        'Smaller package sizes',
        'Natural acids (citric, lactic)'
      ];
      alt.reasoning = 'Natural preservation methods avoid chemical preservatives';
    } else {
      alt.alternatives = ['Products without this additive', 'Natural alternatives when available'];
      alt.reasoning = 'Reducing processed food additives generally improves health profile';
    }

    alternatives.push(alt);
  });

  return alternatives;
}

/**
 * Generates product improvement suggestions based on additive profile
 * @param additives - Current additive codes in the product
 * @param targetConcern - Target maximum concern level
 * @returns Improvement suggestions and expected benefits
 * @example
 * ```typescript
 * const improvements = suggestProductImprovements(['E621', 'E102', 'E211'], 'moderate');
 * improvements.forEach(suggestion => console.log(suggestion.description));
 * ```
 */
export function suggestProductImprovements(
  additives: string[],
  targetConcern: AdditiveInfo['concern'] = 'moderate'
): Array<{
  type: 'remove' | 'replace' | 'reduce';
  additive: string;
  description: string;
  expectedBenefit: string;
  priority: 'high' | 'medium' | 'low';
}> {
  const suggestions: Array<{
    type: 'remove' | 'replace' | 'reduce';
    additive: string;
    description: string;
    expectedBenefit: string;
    priority: 'high' | 'medium' | 'low';
  }> = [];

  const concernPriority = {
    very_high: 3,
    high: 2,
    moderate: 1,
    low: 0
  };

  const targetPriority = concernPriority[targetConcern] || 1;

  additives.forEach(code => {
    const info = getAdditiveInfo(code);
    if (!info) return;

    const currentPriority = concernPriority[info.concern];
    if (currentPriority <= targetPriority) return;

    let type: 'remove' | 'replace' | 'reduce' = 'remove';
    let description = '';
    let expectedBenefit = '';

    if (info.alternatives) {
      type = 'replace';
      description = `Replace ${info.name} with natural alternatives`;
      expectedBenefit = 'Reduced chemical exposure and potential health concerns';
    } else {
      type = 'remove';
      description = `Remove ${info.name} from the formulation`;
      expectedBenefit = `Eliminate ${info.concern} concern level additive`;
    }

    const priority = currentPriority >= 3 ? 'high' : currentPriority >= 2 ? 'medium' : 'low';

    suggestions.push({
      type,
      additive: info.name,
      description,
      expectedBenefit,
      priority
    });
  });

  // Sort by priority
  return suggestions.sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });
}

