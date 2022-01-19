import { add } from './add';

describe('add()', () => {
    it('should correctly add numbers together', () => {
        const a = Math.floor(Math.random() * 10000);
        const b = Math.floor(Math.random() * 10000);
        const expected_result = a + b;
        const result = add(a, b);

        expect(result).toEqual(expected_result);
    });
});
