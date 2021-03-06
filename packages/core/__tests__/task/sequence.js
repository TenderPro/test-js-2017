import { sequence } from '@tpro/core/task'

describe('Функция sequence(startingValue, step)', () => {
    var startingValue = 10,
        step = 3;

    var generator = sequence(startingValue, step);
    it("должна возвращать другую функцию", () => {
        expect(generator).toBeInstanceOf(Function);
    });

    describe("Эта функция", () => {
        beforeEach(() => {
            generator = sequence(startingValue, step);
        });
        it('при первом вызове должна возвращать начальное значение', () => {
            expect(generator()).toEqual(startingValue);
        });
        it('при последующих вызовах должна возвращать значение, увеличенное на величину шага', () => {
            generator();
            expect(generator()).toEqual(startingValue + step);
            expect(generator()).toEqual(startingValue + step * 2);
        });
    });

    describe("Её параметры", () => {
        var generator2;
        beforeEach(() => {
            generator2 = sequence();
        });

        it("должны быть необязательными", () => {
            expect(generator2).toBeTruthy();
        });

        it("начальное значение должно быть равно 0 по умолчанию", () => {
            expect(generator2()).toBe(0);
        });

        it("шаг должен быть равен 1 по умолчанию", () => {
            var g = sequence(4);
            expect(g()).toBe(4);
            expect(g()).toBe(5);
            expect(generator2()).toBe(0);
            expect(generator2()).toBe(1);
            expect(generator2()).toBe(2);
        });
    });

    it("можно создать любое количество независимых генераторов", () => {
        var generator = sequence(1, 5);
        var generator2 = sequence(1, 5);
        expect(generator).toBeTruthy();
        expect(generator2).toBeTruthy();
        expect(generator).not.toBe(generator2);
        generator();
        expect(generator()).not.toEqual(generator2());
    });

})
