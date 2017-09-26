import { describe, it } from 'mocha';
import { assert, equal, notEqual } from 'chai';
import { Animal, Rabbit } from "../src/main.js";

describe('OOP Implementation in JavaScript', () => {

    describe('handle valid inputs', () => {
      /**
       * Declare variables to be used in test
       * @type { Rabbit, Animal }
       */
      const rabbit = new Rabbit();
      const animal = new Animal();

    it('should return true if Rabbit is of type "object"', () => {
        const expected = 'object';
        assert.equal(typeof rabbit, expected);
    });

    it('should return true if Animal is of type "object"', () => {
      const expected = 'object';
      assert.equal(typeof animal, expected);
    });

    it('should return true if Animal is an instanceof "Object"', () => {
      const expected = true;
      const checkInstance = animal instanceof Object;
      assert.equal(checkInstance, expected);
    });

    it('should return true if Rabbit is an instanceof "Object"', () => {
      const expected = true;
      const checkInstance = rabbit instanceof Object;
      assert.equal(checkInstance, expected);
    });

    it('should return "Rabbits eat Carrots and usually have two ears"', () => {
      const rabbit = new Rabbit('Rabbits', 'Carrots', 'ears');
      const expected = "Rabbits eat Carrots and usually have two ears";
      const rabbitEats = rabbit.eats();
      assert.equal(rabbitEats, expected);
    });

    it('should return "Rabbits jump"', () => {
      const expected = "Rabbits jump";
      const rabbitJumps = rabbit.jumps();
      assert.equal(rabbitJumps, expected);
    });

  });

    describe('handle invalid inputs', () => {
        /**
         * Declare variables to be used in test
         * @type { Rabbit, Animal }
         */
        const rabbit = new Rabbit();
        const animal = new Animal();

        it('should return true if Animal is not of type "Array"', () => {
            const notExpected = 'Array';
            assert.notEqual(typeof animal, notExpected);
        });

        it('should return true if Rabbit is not of type "Array"', () => {
            const notExpected = 'Array';
            assert.notEqual(typeof rabbit, notExpected);
        });

        it('should return true if Animal is not of type "undefined"', () => {
            const notExpected = undefined;
            assert.notEqual(typeof animal, notExpected);
        });

        it('should return false', () => {
            const notExpected = false;
            const rabbitJumps = rabbit.jumps();
            assert.notEqual(rabbitJumps, notExpected);
        });
    });

});