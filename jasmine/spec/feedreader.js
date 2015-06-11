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
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('Each feed has a URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
             });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Each feed has a valid name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
             });
         });
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    describe("The menu ", function() {
        it('is hidden by default', function() {
            console.log($('.menu-hidden .menu').css("transform"));
            //expect($('.feed-list').offset().left).toBeLessThan(0);
            //expect($('.menu-hidden .menu').css("transform")).toBeDefined();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        it('is visible when the menu icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            console.log($('.menu-hidden .menu').css("transform"));
            console.log($('.feed-list').position());
            console.log($('body').hasClass('menu-hidden'));
            //expect($('.feed-list').is(":visible")).toBeTruthy();
            //expect($('.menu-hidden .menu').css("transform")).toBeUndefined();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            console.log($('.feed-list').offset());
            $('.menu-icon-link').trigger('click');
            //expect($('.feed-list li').is(":hidden")).toBeTruthy();
            //expect($('.menu-hidden .menu').css("transform")).toBeDefined();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        })
    });
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe("Initial Entries", function(){
        beforeEach(function(done) {
            loadFeed(0,function() {
                done();
            });
        });

        it('has at least a single .entry element within the .feed container', function(done) {
            console.log($('.feed .entry').length);
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

    describe('New Feed Selection', function() {
        var name = '';
        var newName = '';
        var firstEntry = '';
        var newEntry = '';
        var currentIndex;

        function findIndex(name) {
            for (var i=0; i<allFeeds.length; i++) {
                if (allFeeds[i].name === name) {
                    return i;
                }
            }
            return -1;
        }

        beforeEach(function(done) {
            loadFeed(0, function() {
                name = $('h1').html();
                firstEntry = $('.entry-link').first().attr('href');
                console.log(name + ":" + firstEntry);
                /*
                currentIndex = findIndex(name);
                if (currentIndex === 0) {
                    currentIndex++;
                } else {
                    currentIndex--;
                }
                console.log('currentIndex:'+currentIndex);*/
                loadFeed(1,function() {
                    newName = $('.header-title').html();
                    newEntry = $('.entry-link').first().attr('href');
                    console.log(newName + ":" + newEntry);
                });

                done();
            })

        });

        it('When a new feed is loaded, the content actually changes', function(done) {
           // loadFeed(1,function() {
           //     newName = $('.header-title').html();
           //     newEntry = $('.entry-link').first().attr('href');
           //     console.log(newName + ":" + newEntry);
                expect(name).not.toBe(newName);
                expect(firstEntry).not.toBe(newEntry);
                done();
            //});
        });
    });
}());
