/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function ()
{
	/* This is our first test suite - a test suite just contains
	 * a related set of tests. This suite is all about the RSS
	 * feeds definitions, the allFeeds variable in our application.
	 */
	describe('RSS Feeds', function ()
	{
		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty. Experiment with this before you get started on
		 * the rest of this project. What happens when you change
		 * allFeeds in app.js to be an empty array and refresh the
		 * page?
		 */
		it('are defined', function ()
		{
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		/* 'allfeeds url' is a test that loops through each feed
		in the allFeeds object and ensures it has a URL defined
	and that the URL is not empty.*/
		it('allfeeds url', function ()
		{
			for (var allFeed of allFeeds)
			{
				expect(allFeed['url']).toBeDefined();
				expect(allFeeds['url']).not.toBe("");

			}
		});

		/* 'allfeeds name' is a test that loops through each feed
		 in the allFeeds object and ensures it has a name defined
		  and that the name is not empty.*/
		it('allfeeds name', function ()
		{
			for (var feedName of allFeeds)
			{
				expect(feedName['name']).toBeDefined();
				expect(allFeeds['name']).not.toBe("");

			}
		});

	});


	/*"The menu" is a test suit */
	describe('The menu', function ()
	{

		/* 'hiddenByDefault'is a test that ensures the menu element is
		  hidden by default.*/
		it('hiddenByDefault', function ()
		{
			expect(document.querySelector('.menu-hidden')).not.toBe(null);
		});


		/* 'toggle when clicked' is a test that ensures the menu changes
		 visibility when the menu icon is clicked.*/
		it('toggle when clicked', function ()
		{
			let toggleLink = document.querySelector('.menu-icon-link');
			toggleLink.click();
			expect(document.querySelector('.menu-hidden')).toBe(null);
			toggleLink.click();
			expect(document.querySelector('.menu-hidden')).not.toBe(null);
		});
	});


	/* Initial Entries" is a test suit*/
	describe('Initial Entries', function ()
	{    
		beforeEach(function (done)
		{     
			setTimeout(function ()
			{
				done();
			}, 4000)
		});
		/* 'has feed' is a test that ensures when the loadFeed function is called
and completes its work, there is at least a single .entry element within
the .feed container.*/
		it('has Feed', function ()
		{
			let feedContainer = document.querySelector('.feed');
			expect(feedContainer.innerHTML.length).not.toBe(0);    
		});
	});

	/* "New Feed Selection" is a test suit in which content that is by
  default content is present and new content when loadFeed changes the
  content will changes*/
	describe('New Feed Selection', function ()
	{
		let content, newContent;    
		beforeEach(function (done)
		{     
			setTimeout(function ()
			{
				let feedContainer = document.querySelector('.feed');
				content = feedContainer.innerHTML;
				loadFeed(1);
				setTimeout(function ()
				{
					let newContent = feedContainer.innerHTML;
					done();
				}, 1000)
			}, 1000)
		});

		/*'loadFeed content changes' is a test that ensures when a new feed is loaded
			by the loadFeed function that the content actually changes.*/

		it('loadFeed content changes', function ()
		{
			expect(content).not.toBe(newContent);
		});
	});

}());
