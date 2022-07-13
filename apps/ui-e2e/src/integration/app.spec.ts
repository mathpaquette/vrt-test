import { getGreeting } from '../support/app.po';

describe('ui', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should display welcome message', () => {

    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome ui');


    //cy.vrtTrack("Whole page with default params");

    cy.get("h1").vrtTrack("Separate element with default params");

    // cy.vrtTrack("Whole page with additional options", {
    //   viewport: "1920x1080",
    //   os: "MacOS",
    //   device: "Cloud agent",
    //   customTags: "Cloud, DarkTheme, Auth",
    //   diffTollerancePercent: 1,
    //   ignoreAreas: [{ x: 1, y: 2, width: 100, height: 200 }],
    //   retryLimit: 2,
    //   keepScreenshot: false, // Keep screenshot local copy, false by default
    // });

  });
});
