const assert = require('assert')

describe('Youtube page', () => {
    it('should have the right title', async () => {
        await browser.url('https://www.youtube.com/')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'YouTube')
    })
})