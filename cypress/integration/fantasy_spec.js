describe('find fantasy adds and drops', () => {
    it('checks an espn league', () => {
        const espnLeagueId = 532836;
        cy.visit(`https://fantasy.espn.com/football/league/transactioncounter?leagueId=${espnLeagueId}`);
        cy.get('.Table__TBODY').eq(1).should(($div) => {
            const text = $div.text();

            expect(text).to.eq('407517360434044961151425551108273502219371050121123640221925121098221001292234019192812');
        })
    })

})
