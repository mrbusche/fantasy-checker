describe('find fantasy adds and drops', () => {
    it('checks an espn league', () => {
        const espnLeagueId = 532836;
        cy.visit(`https://fantasy.espn.com/football/league/transactioncounter?leagueId=${espnLeagueId}`);
        cy.get('.Table__TBODY').eq(1).should(($div) => {
            const text = $div.text();

            expect(text).to.eq('2033111111514235009101024111122633014121444032133301420133208821020761034077114');
        })
    })

})
