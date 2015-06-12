/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test ensures every feed has a URL defined
         * and the URL is not empty
         */
        it('Each feed has a URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* This test loops through each feed
         * and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Each feed has a valid name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    // Test suite "The menu"
    describe('The menu ', function() {
        // This test ensures the menu element is hidden by default.
        it('is hidden by default', function() {
            /* class '.menu-hidden .menu' translate menu off visible screen
             * Check if this class is attached to 'body' to determine if menu is hidden or not. */
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        // This test ensures the menu changes visibility when the menu icon is clicked.
        it('is visible when the menu icon is clicked', function() {
            // Trigger a click event on menu icon.
            $('.menu-icon-link').trigger('click');
            // Once clicked, menu should appear. Test this behavoir by checking if 'menu-hidden' class is attached to 'body'.
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            // 'click' event toggles 'menu-hidden' class. Test by checking 'menu-hidden' is detached after another click.
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    // Test suite "Initial Entries". This test ensures every feed has at least one entry
    describe('Initial Entries', function(){
        // loadFeed() is a synchronous. Use Jasmine asynchronous done() function.
        beforeEach(function(done) {
            // Asynchronous loading. Load first feed
            loadFeed(0, function() {
                done();
            });
        });

        it('has at least a single .entry element within the .feed container', function(done) {
            // Check if number of feed entries is greater than 0
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });

    /* Test suite "New Feed Selection. This test ensures when a new feed is load
     * by the loadFeed function, the content actually changes.
     */
    describe('New Feed Selection', function() {
        var name = '';
        var newName = '';
        var firstEntry = '';
        var newEntry = '';
        var currentIndex;

        beforeEach(function(done) {
            // Load first feed, assign feed name and first displayed URL to variables
            loadFeed(0, function() {
                name = $('h1').html();
                firstEntry = $('.entry-link').first().attr('href');
                done();
            });

        });

        it('When a new feed is loaded, the content actually changes', function(done) {
            /*Load another feed. Assign feed name and the first displayed URL to another set of variables
            Now check if the names and first URLs are different from the first load or not*/
             loadFeed(3, function() {
                newName = $('h1').html();
                newEntry = $('.entry-link').first().attr('href');
                expect(name).not.toBe(newName);
                expect(firstEntry).not.toBe(newEntry);
                done();
            });
        });
    });
}());