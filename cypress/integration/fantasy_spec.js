describe('find fantasy adds and drops', () => {
    it('checks an espn league', () => {
        const espnLeagueId = 532836;
        cy.visit(`https://fantasy.espn.com/football/league/transactioncounter?leagueId=${espnLeagueId}`);
        cy.get('.Table__TBODY').eq(1).should(($div) => {
            const text = $div.text();

            expect(text).to.eq('20448030322930841861143175173201715239408511330141213510218100427230119126');
        })
    })

})
