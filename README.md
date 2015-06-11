# Testing Feed Reader Project

1. Test suite "RSS Feed" contains 3 tests. First tests if feeds are defined. The 2nd and 3rd loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. Test suite "The menu" contains 2 tests. The first tests if feed list menu is hidden by default. The second tests if menu icon is clicked,
the feed menu list shows up. It goes away when menu icon is clicked on more time. Tests use jQuery to trigger click events and check if 'menu-hidden' class is attached to 'body' element.
3. Test suite "Initial entries" has one test. It test there is at least a single .entry element within .feed container. loadFeed is asynchronous. So beforeEach() and done() are used for this test.
4. Test  suite "New Feed Selection" has one test. It loads the first feed on the feed list and then load another feed on the feed list. Then it checks if the names and the first urls of the two feeds are different or not. It passes when they are different.