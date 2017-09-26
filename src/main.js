'use strict';

/**
 * Class Animal and Rabbit used to demonstrate real world
 * implementation of Object Oriented Programming concepts
 */
export class Animal {
    constructor(name, food) {
        this._name = name;
        this._food = food;
    }

    eats() {
        return `${this._name} eats ${this._food}`;
    }

}

export class Rabbit extends Animal {
    constructor(name, food, ears) {
        super(name, food);
        this._ears = ears;
    }

    eats() {
        return `${this._name} eat ${this._food} and usually have two ${this._ears}`;
    }

    jumps() {
        return `Rabbits jump`;
    }

}