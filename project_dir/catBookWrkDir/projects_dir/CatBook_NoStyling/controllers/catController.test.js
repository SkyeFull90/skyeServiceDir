const { expect } = require('chai');
const sinon = require('sinon');
const Cat = require('../models/catModel');
const catController = require('./catController');

describe('Cat Controller', () => {
    describe('getAllCats', () => {
        it('should fetch all cats and render home view', async () => {
            const mockCats = [{ name: 'Whiskers' }, { name: 'Fluffy' }]; // Mocked cat data
            const mockRender = sinon.stub();
            const mockResponse = { render: mockRender };

            sinon.stub(Cat, 'find').resolves(mockCats);

            await catController.getAllCats({}, mockResponse);

            sinon.assert.calledWithExactly(mockRender, 'home', { cats: mockCats });

            Cat.find.restore(); // Restore the original function after the test
        });
    });


    describe('editPage', () => {
        it('should render the edit page for a specific cat', async () => {
            const mockCat = { _id: 'some_id', name: 'Fluffy', age: 5, favoriteFood: 'Salmon', funFact: 'Likes to nap' };
            const mockRequest = { params: { id: 'some_id' } };
            const mockRender = sinon.stub();
            const mockResponse = { render: mockRender };

            sinon.stub(Cat, 'findById').resolves(mockCat);

            await catController.editPage(mockRequest, mockResponse);

            sinon.assert.calledWithExactly(mockRender, 'edit', { cat: mockCat });

            Cat.findById.restore();
        });
    });
});
