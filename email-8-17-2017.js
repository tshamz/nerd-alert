const styles = {
  ul: 'style="font-size: 18px;font-family: Verdana,Geneva,sans-serif;line-height: 1.5;color: #4e4e4e;padding-left: 24px"',
  h2: 'style="font-size: 34px;margin-bottom: 0;"',
  p: 'style="font-size: 18px;font-family: Verdana,Geneva,sans-serif;line-height: 1.5;color: #4e4e4e;"'
};

module.exports = {
  "body": `<div style="width: 500px; margin: 0 auto;">
  <img style="width: 100%" src="https://www.tylershambora.com/images/nerd-alert.gif">
  <p ${styles.p}><strong>Welcome to Nerd Alert™.</strong> Last issue we covered <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS grids</a> and all things grid related. There was even a <a href="http://shoptalkshow.com/episodes/262-css-grid-rachel-andrew-jen-simmons/">podcast</a> and a <a href="http://cssgridgarden.com/">game</a>!</p>
  <p ${styles.p}>In this issue we'll be looking at some of the new features in ES6, specifically promises and <code>fetch()</code>. If you love commitment, then you'll love promises. And if you love jQuery's <code>$.get()</code>, then you'll love <code>fetch()</code>. </p>
  <p ${styles.p}>I've also found a new (<a href="https://www.youtube.com/watch?v=QUf2pmpMfO4">at least new for me, back off!</a>) Shopify resource that I'm very excited to share with everyone. If you love emails, and if you love Shopify apps, then you're gonna love this one! And even if you don't love emails, you're still gonna love this one!</p>
  <p ${styles.p}><em>Side note: I hadn't anticipated such demand for this email so you might find this edition especially nerdy. In the coming issues I'll make sure to include more accessable nerd content so that everyone can enjoy!</em></p>
  <h2 ${styles.h2}>💍 Promises</h2>
  <hr>
  <p ${styles.p}>Let's start with promises. To be honest, most of you are probably familiar with promises and just don't know it. Have you ever used <code>.done()</code>, or <code>.fail()</code> with a <code>$.get()</code>? Then you've used the jQuery flavor of promises! Promises are an alternative to callbacks when we're working with asynchronous code. They make your code very pretty and ES6 has support for them natively. Because many of the actions we do in JavaScript involve waiting for indiscriminate periods of time (e.g. API requests, elements in the DOM being ready, API requests, and did I mention <strong>API requests</strong>?), knowing how to use promises to handle the sequencing of these actions is extremely important. Read up, because I can guarantee promises are gonna be in your future.</p>
  <ul ${styles.ul}>
    <li>Google Developers', <a href="https://developers.google.com/web/fundamentals/getting-started/primers/promises">JavaScript Promises: an Introduction</a> by Jake Archibald is a good intro to the concept of promises</li>
    <li>Ponyfoo has a more in depth article on promises, <a href="https://ponyfoo.com/articles/es6-promises-in-depth">ES6 Promises in Depth</a> (preview of <code>fetch()</code> in this one)</li>
    <li>I've been reading a lot of Axel Rauschmayer recently and his, <a href="http://exploringjs.com/es6/ch_promises.html">Promises for asynchronous programming</a> is a deeeeeeep dive into promises</li>
    <li>Last but not least, our trusty MDN article on the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></li>
  </ul>
  <h2 ${styles.h2}>🐕 <code>fetch()</code></h2>
  <hr>
  <p ${styles.p}>Do you hate including the entire jQuery library just so you can use <code>$.get</code>? Wish using <code>XMLHttpRequest()</code> didn't require an 15 additional lines of code? Do you find the lack of native promises in your AJAX requests to be troubling? Then you should try <code>fetch()</code>! New in ES6, <code>fetch()</code> does all of the things listed above (makes AJAX requests, returns promises, single line of code) all from the comfort of your browser! <a href="https://www.youtube.com/watch?v=08drNP-tZbI">Gretchen, cheer up!</a> <a href="https://www.youtube.com/watch?v=Pubd-spHN-0">Fetch has finally happened!</a></p>
  <ul ${styles.ul}>
    <li>These three articles from David Walsh (<a href="https://davidwalsh.name/fetch">fetch API</a>), Google Developers (<a href="https://developers.google.com/web/updates/2015/03/introduction-to-fetch">
Introduction to <code>fetch()</code></a>), and scotch.io (<a href="https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data">How to Use the JavaScript Fetch API to Get Data
</a>), all do a good job covering <code>fetch()</code>. Start here.</li>
    <li>Jake Archibald goes a little more in depth in his, <a href="https://jakearchibald.com/2015/thats-so-fetch/">That's so fetch!</a> article (hey! that's my joke!)</li>
    <li>And as always, MDN on <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Using Fetch</a></li>
    <li><strong>Bonus!</strong> <code>async</code>/<code>await</code> is mentioned a few times in the articles above and it's intimately tied to promises and <code>fetch()</code> so if you're feeling particularly saucy, read <a href="https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9">6 Reasons Why JavaScript’s Async/Await Blows Promises Away</a></li>
  </ul>
  <h2 ${styles.h2}>🛍 Shop'fy Stash</h2>
  <hr>
  <p ${styles.p}>The strangest thing happened to me the other day. I was sitting at my desk thinking about the next edition of Nert Alert™ and how I'd like to include more stuff on Shopify. Just then, an email popped into my inbox.</p>
  <p ${styles.p}>"Nice to meet you !" the subject line read. And while this subject line was nothing special, (clearly this person hadn't pre-enrolled up for my "Tyler Shambora Performance Emoji Marketing Seminar" (Fall 2017)), I have to admit, my interest was piqued.
  <p ${styles.p}>I opened the email and at first glance, it looked like any other 3rd party Shopify spam. However, after reaching the bottom of the message, I read, "Three apps, selected for you". Three apps? Selected just for me??? Yah rite. <a href="https://www.thesun.co.uk/wp-content/uploads/2016/04/1912617.main_image.gif?strip=all">You don't know me!</a></p>
  <p ${styles.p}>Long story short, they did know me. The apps were pretty cool and so was their site. It's basically a hub for Shopify resources categorized by function. I signed up for their weekly email and if you ignore the somewhat broken English and their weird spelling of "Shopify" as "Shop'fy", it's been a pretty good read. I'd suggest checking it out and signing up for the email.</p>
  <p ${styles.p}><em>Side note: if anyone knows how I got on their email list or was responsible for putting me on it, please make yourself known. I swear, I'm not mad! I just want to thank you!</em></p>
  <ul ${styles.ul}>
    <li><a href="http://www.shopfystash.com">Shop'fy Stash</a></li>
    <li><strong>Bonus!</strong> I also found this article from tuts+ that talks about <a href="https://webdesign.tutsplus.com/articles/whats-new-for-shopify-theme-developers-in-2017--cms-29176">What’s New for Shopify Theme Developers in 2017</a>, so I thought I'd share that as well</li>
  </ul>
  <h2 ${styles.h2}>Odds 'n Ends</h2>
  <hr>
  <ul ${styles.ul}>
    <li><a href="https://zachholman.com/posts/only-90s-developers/">Only 90s Web Developers Remember This</a>!!! Number 3 will blow your mind!!! (shout out to Annie Winger for introducing me to Zach Holman)</li>
    <li>If we're being honest, I could listen to <a href="https://twitter.com/fat">@fat</a> read the nutrition facts from a Clif Bar. Alternatively, I could also read an article from him on a framework I don't use to build a site I don't visit. (<a href="https://medium.com/bumpers/isnt-our-code-just-the-best-f028a78f33a9">Isn’t our code just the *BEST* 🙄</a>)</li>
    <li>This is a good explanation on exactly how resources are loaded in your browser from some site I've never heard of before called..."CSS Tricks" (<a href="https://css-tricks.com/the-critical-request">The Critical Request</a>)</li>
    <li>This article by Patrick McKenzie is a bit of a marathon, but it give some really good life advice for being and developer (<a href="http://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/">Don't Call Yourself A Programmer, And Other Career Advice</a>)</li>
    <li>And because I was cleaning out my bookmarks and found <a href="https://www.instagram.com/p/BUHwPwSjmQx/">this</a></li>
  </ul>
  <hr>
  <p ${styles.p}>That concludes another edition of Nerd Alert™. I hope you all enjoyed reading it as much as I did writing it. <strong>Learn the ES6 stuff</strong>. We have a login(s) for a <a href="https://es6.io/">Wes Bos Course</a> that can be found <a href="https://github.com/BVAccel/development-resources#wes-bos">here</a>, Babel is now available in all our projects, and browsers are starting to support these features out of the box, so do yourself a favor and get familiar with it.</p>
  <p ${styles.p}>- <a href="https://github.com/tshamz">@tshamz</a></p>
  <p ${styles.p}><em>(I ripped off this layout from "It's 2pm". <a href="http://boingboing.net/2005/03/24/early-apple-sound-de.html">So sue me</a>.)</em></p>
</div>`
}
