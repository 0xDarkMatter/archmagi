/**
 * Unified dice roller for D&D 5E with polymorphic behavior
 */

// Base dice rolling mechanism
function rollDice(notation) {
  /*
   ################################################
   #                                              #
   #    .....INVOKING PROBABILITY MATRIX.....     #
   #                                              #
   ################################################
   */
  
  const pattern = /^(\d+)?d(\d+)([+-]\d+)?$/;
  const match = notation.match(pattern);
  
  if (!match) throw new Error(`Invalid dice notation: ${notation}`);
  
  const count = parseInt(match[1] || 1);
  const sides = parseInt(match[2]);
  const mod = match[3] ? parseInt(match[3]) : 0;
  
  const dice = Array.from({length: count}, () => 
    Math.floor(Math.random() * sides) + 1
  );
  
  return {
    total: dice.reduce((sum, die) => sum + die, 0) + mod,
    dice: dice,
    modifier: mod,
    notation: notation
  };
}

// Unified roll function with type-specific behavior
function roll(type, options = {}) {
  // Default options
  const {
    notation = null,
    modifier = 0,
    dc = null,
    advantage = false,
    disadvantage = false,
    isCritical = false
  } = options;
  
  // Derive notation if not provided directly
  const rollNotation = notation || 
    (type !== 'damage' ? `1d20${modifier !== 0 ? (modifier > 0 ? '+' + modifier : modifier) : ''}` : null);
  
  // Handle advantage/disadvantage
  let result;
  if (type !== 'damage' && (advantage || disadvantage)) {
    const roll1 = rollDice(rollNotation);
    const roll2 = rollDice(rollNotation);
    
    const useFirst = (advantage && !disadvantage) ? 
      roll1.total > roll2.total : 
      (disadvantage && !advantage) ? 
        roll1.total < roll2.total : 
        true;
        
    result = {
      ...useFirst ? roll1 : roll2,
      advantageRolls: [roll1, roll2],
      keptRoll: useFirst ? 1 : 2,
      advantage: advantage && !disadvantage,
      disadvantage: disadvantage && !advantage
    };
  } else {
    result = rollDice(rollNotation);
  }
  
  // Add type-specific properties
  switch (type) {
    case 'check':
    case 'save':
      return {
        ...result,
        type: type,
        dc: dc,
        success: result.total >= dc
      };
      
    case 'attack':
      const naturalRoll = Array.isArray(result.advantageRolls) 
        ? result.advantageRolls[result.keptRoll - 1].dice[0]
        : result.dice[0];
        
      return {
        ...result,
        type: 'attack',
        critical: naturalRoll === 20 ? 'hit' : (naturalRoll === 1 ? 'miss' : 'none')
      };
      
    case 'damage':
      if (isCritical && notation) {
        // For critical hits, double the dice
        const pattern = /^(\d+)?d(\d+)([+-]\d+)?$/;
        const match = notation.match(pattern);
        
        if (match) {
          const count = parseInt(match[1] || 1) * 2;
          const sides = parseInt(match[2]);
          const mod = match[3] ? match[3] : '';
          
          const critNotation = `${count}d${sides}${mod}`;
          const critRoll = rollDice(critNotation);
          
          return {
            ...critRoll,
            type: 'damage',
            critical: true,
            originalNotation: notation
          };
        }
      }
      return { ...result, type: 'damage', critical: isCritical };
      
    case 'initiative':
      return { ...result, type: 'initiative' };
      
    case 'death_save':
      let outcome;
      if (result.dice[0] === 1) outcome = 'critical_failure';
      else if (result.dice[0] === 20) outcome = 'critical_success';
      else if (result.total >= 10) outcome = 'success';
      else outcome = 'failure';
      
      return {
        ...result,
        type: 'death_save',
        result: outcome
      };
      
    default:
      return { ...result, type: type || 'generic' };
  }
}

// Convenience methods that use the unified function
function rollCheck(modifier, dc, hasAdvantage = false, hasDisadvantage = false) {
  return roll('check', { modifier, dc, advantage: hasAdvantage, disadvantage: hasDisadvantage });
}

function rollSave(modifier, dc, hasAdvantage = false, hasDisadvantage = false) {
  return roll('save', { modifier, dc, advantage: hasAdvantage, disadvantage: hasDisadvantage });
}

function rollAttack(attackBonus, hasAdvantage = false, hasDisadvantage = false) {
  return roll('attack', { modifier: attackBonus, advantage: hasAdvantage, disadvantage: hasDisadvantage });
}

function rollDamage(notation, isCritical = false) {
  return roll('damage', { notation, isCritical });
}

function rollInitiative(modifier) {
  return roll('initiative', { modifier });
}

function rollDeathSave(modifier = 0) {
  return roll('death_save', { modifier });
}