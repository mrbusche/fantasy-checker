describe('find fantasy adds and drops', () => {
    it('checks an espn league', () => {
        const espnLeagueId = 532836;
        cy.visit(`https://fantasy.espn.com/football/league/transactioncounter?leagueId=${espnLeagueId}`);
        cy.get('.Table__TBODY').eq(1).should(($div) => {
            const text = $div.text();

            expect(text).to.eq('100000109664101121001021003142001011006422100010001120102220');
        })
    })

})
