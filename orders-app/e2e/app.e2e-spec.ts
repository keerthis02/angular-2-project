import { OrdersAppPage } from './app.po';

describe('orders-app App', () => {
  let page: OrdersAppPage;

  beforeEach(() => {
    page = new OrdersAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
