# Testing Feed Reader Project

To run the test:
Open index.html file to start feed reader testing. When all tests pass, the "Jasmine" section should show "7 sepcs, 0 fails". If certain test fails, red messages will show up with details of the failed test.

Testing specs:
1. Test suite "RSS Feed" contains 3 tests. First tests if feeds are defined. The 2nd and 3rd loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. Test suite "The menu" contains 2 tests. The first tests if feed list menu is hidden by default. The second tests if menu icon is clicked,
the feed menu list shows up. It goes away when menu icon is clicked on more time. Tests use jQuery to trigger click events and check if 'menu-hidden' class is attached to 'body' element.
3. Test suite "Initial entries" has one test. It test there is at least a single .entry element within .feed container. loadFeed is asynchronous. So beforeEach() and done() are used for this test.
4. Test  suite "New Feed Selection" has one test. It loads the first feed on the feed list and then load another feed on the feed list. Then it checks if the names and the first urls of the two feeds are different or not. It passes when they are different.

Review:
Tips:
Let's think about why you need beforeEach for asynchronous functions. In Jasmine, it is recommended to run asynchronous functions in beforeEach as you do. This is simply because you can run it and call "done" there. With "dine", "it" statement knows they can run. If you do not use beforeEach, you need to implement a proper timer in "it" statement. In this project you test everything in the call back of the asynchronous function itself so that a timer is unnecessary.
In short, using beforeEach reduces tasks of programmers:)

It also means you do not need to call "done" like line 86(do not forget deleting the argument "done" as well if you take it away) unless your test has to inform they are done to other tests. The functionality of "done" is very simple. It just says "I'm done, so you can go". If no one needs to know it, it is unnecessary.