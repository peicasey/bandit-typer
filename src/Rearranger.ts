/*Keyboard.getOrderedListOfChars() -- returns a list of chars in order from most used to least used (according to standard English, alphabetical only) 
Keyboard.getOrderedListOfKeyPositions() -- returns a list of positions from most used to least used (according to a normalized distribution from the key-mashing session)

pseudocode:

totalKeystrokes = length(keymash)

for char of alphabeticals:
    freq[char] = keymash.count(char) / totalKeystrokes

return alphabeticals.sortedby(freq) 
You can call Keyboard.rearrange() and I'll take care of the rest.
the Keyboard class should have a HashMap or something that maps positions to the char they represent
HashMap charsByPositions;

Let's index positions as (row, col) where row is the row of the keyboard (bottomrow=0) and col is 0-indexed number of the key in its row. 

Ex: R in querty is (2, 3), X is (0, 1).
calling rearrange() will rewrite the map object, and then you can just redisplay the keyboard however that works
*/

export class Rearranger {

  keyFrequencies: Map<string, number> = new Map();

  constructor(keymashString: string) {
    // initialize keyFrequencies
    
    keymashString = keymashString ? keymashString.replace(/[^A-Za-z]/g, '') : '';

    for (let char of this.getOrderedListOfChars()) { // basically, we're smoothing the values by pretending each letter gets used at least once
        this.keyFrequencies.set(char, 1);
    }

    for (let char of keymashString.toUpperCase()) {
        this.keyFrequencies.set(char, (this.keyFrequencies.get(char) || 0) + 1);
    }

    // normalize

    let n = keymashString.length;

    this.keyFrequencies.forEach((value, key) => {
      this.keyFrequencies.set(key,  value / (n + 26)); // divide by n+26 because of smoothing (above)
    });

  }

  getKeyFrequencies() {
    return this.keyFrequencies;
  }

  getRearrangedLayout() {

    if (this.keyFrequencies.size === 0) {
      return [
        '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
        '{tab} q w e r t y u i o p [ ] \\',
        '{lock} a s d f g h j k l ; \' {enter}',
        '{shift} z x c v b n m , . / {shift}',
        '.com @ {space}'
      ];
    }

    let positionsToChars = this.rearrange();

    type Position = { row: number; col: number };

    function row(map: Map<Position, string>, rowIndex: number): string {

      const filteredPositions = Array.from(map.entries())
          .filter(([key, value]) => key.row === rowIndex)
          .map(([key, value]) => ({ col: key.col, char: value }));

      filteredPositions.sort((a, b) => a.col - b.col);

      const chars = filteredPositions.map(position => position.char);

      return chars.join(' ');
    }

    let rearrangedLayout = [
      '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
      ('{tab} ' + row(positionsToChars, 2) + ' [ ] \\'),
      ('{lock} ' + row(positionsToChars, 1) + ' ; \' {enter}'),
      ('{shift} ' + row(positionsToChars, 0) + ' , . / {shift}'),
      '.com @ {space}'
    ]
    
    return rearrangedLayout;

  }

  getRearrangedLayoutLower() {

    if (this.keyFrequencies.size === 0) {
      return [
        '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
        '{tab} q w e r t y u i o p [ ] \\',
        '{lock} a s d f g h j k l ; \' {enter}',
        '{shift} z x c v b n m , . / {shift}',
        '.com @ {space}'
      ];
    }

    let positionsToChars = this.rearrange();

    type Position = { row: number; col: number };

    function row(map: Map<Position, string>, rowIndex: number): string {

      const filteredPositions = Array.from(map.entries())
          .filter(([key, value]) => key.row === rowIndex)
          .map(([key, value]) => ({ col: key.col, char: value }));

      filteredPositions.sort((a, b) => a.col - b.col);

      const chars = filteredPositions.map(position => position.char);

      return chars.join(' ');
    }

    let rearrangedLayout = [
      '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
      ('{tab} ' + row(positionsToChars, 2).toLowerCase() + ' [ ] \\'),
      ('{lock} ' + row(positionsToChars, 1).toLowerCase() + ' ; \' {enter}'),
      ('{shift} ' + row(positionsToChars, 0).toLowerCase() + ' , . / {shift}'),
      '.com @ {space}'
    ]

    return rearrangedLayout;

  }

  private qwertyPositions = new Map([
    ['Q', {row: 2, col: 0}],
    ['W', {row: 2, col: 1}],
    ['E', {row: 2, col: 2}],
    ['R', {row: 2, col: 3}],
    ['T', {row: 2, col: 4}],
    ['Y', {row: 2, col: 5}],
    ['U', {row: 2, col: 6}],
    ['I', {row: 2, col: 7}],
    ['O', {row: 2, col: 8}],
    ['P', {row: 2, col: 9}],
    ['A', {row: 1, col: 0}],
    ['S', {row: 1, col: 1}],
    ['D', {row: 1, col: 2}],
    ['F', {row: 1, col: 3}],
    ['G', {row: 1, col: 4}],
    ['H', {row: 1, col: 5}],
    ['J', {row: 1, col: 6}],
    ['K', {row: 1, col: 7}],
    ['L', {row: 1, col: 8}],
    ['Z', {row: 0, col: 0}],
    ['X', {row: 0, col: 1}],
    ['C', {row: 0, col: 2}],
    ['V', {row: 0, col: 3}],
    ['B', {row: 0, col: 4}],
    ['N', {row: 0, col: 5}],
    ['M', {row: 0, col: 6}],
  ]);

  private getOrderedListOfChars() {
    return ['E', 'A', 'R', 'I', 'O', 'T', 'N', 'S', 'L', 'C', 'U', 'D', 'P', 'M', 'H', 'G', 'B', 'F', 'Y', 'W', 'K', 'V', 'X', 'Z', 'J', 'Q'];
  }
  
  private getOrderedListOfKeyPositions() {

    const sortedChars = Array.from(this.keyFrequencies.entries()).sort((a, b) => b[1] - a[1]).map(entry => entry[0]);

    const positions = sortedChars.map(char => {
        return this.qwertyPositions.get(char);
    });

    return positions;
  }
  
  private rearrange() {
    // returns a Map of positions to chars
  
    let charsByUsage = this.getOrderedListOfChars();
  
    let positionsByUsage = this.getOrderedListOfKeyPositions();

    let rearrangedPositions = new Map()

    for (let i = 0; i < charsByUsage.length; i++) {
      rearrangedPositions.set(positionsByUsage[i], charsByUsage[i]);
    }

    return rearrangedPositions;
  
  }

}