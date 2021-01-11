import { expect } from 'chai'

import Db from '../../src/db'

const connection = new Db()

describe('database', () => {
    it('should return a Db object to show that a connection has been established', () => {
        expect(connection).to.be.a('object')
    })
})
