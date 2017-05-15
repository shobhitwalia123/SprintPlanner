import { SprintPlannerPage } from './app.po';

describe('sprint-planner App', function() {
  let page: SprintPlannerPage;

  beforeEach(() => {
    page = new SprintPlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
