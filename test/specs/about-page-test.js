describe('the IF site', function () {
  it('should have an About page', function () {
    browser.url('https://projectsbyif.com/');
    browser.click('=About');
    expect(browser.getTitle()).toBe('The services we use should respect our rights - IF');
    expect(browser.getText('.team')).toContain('Nat Buckley');
  });
});
