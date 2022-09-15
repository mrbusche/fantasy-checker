describe('find fantasy adds and drops', () => {
    it('checks an espn league', () => {
        const espnLeagueId = 532836;
        cy.visit(`https://fantasy.espn.com/football/league/transactioncounter?leagueId=${espnLeagueId}`);
        cy.get('.Table__TBODY').eq(1).should(($div) => {
            const text = $div.text();

            expect(text).to.eq('000120000330001222100320102251100010101622100060000010000121');
        })
    })

})
