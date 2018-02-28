const styles = {
  ul: 'style="font-size: 18px;font-family: Verdana,Geneva,sans-serif;line-height: 1.5;color: #4e4e4e;padding-left: 24px"',
  h2: 'style="font-size: 34px;margin-bottom: 0;"',
  p: 'style="font-size: 18px;font-family: Verdana,Geneva,sans-serif;line-height: 1.5;color: #4e4e4e;"'
};

module.exports = {
  "body": `<div style="width: 500px; margin: 0 auto;">
  <img style="width: 100%" src="https://www.tylershambora.com/images/nerd-alert.gif">
  <p ${styles.p}><strong>Welcome to Nerd Alert™.</strong> Last issue we covered <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">promises</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">fetch</a>, and <a href="https://www.shopfystash.com/">Shop'fy Stash</a>. I was even able to sneak in <a href="https://www.instagram.com/p/BUHwPwSjmQx/">this</a> instagram post from <a href="https://www.instagram.com/snoopdogg/">snoopdogg</a>!</p>
  <p ${styles.p}>In this issue we'll take trip down memory late and look at the history of CSS, do a bit of a deep dive into accessibility (a11y) and see just how important it is, and finally we'll innudate you with so many cheatsheets you may feel like turning yourself in to the principal's office.</p>
  <p ${styles.p}></p>
  <h2 ${styles.h2}>🕰 History of CSS (abridged)</h2>
  <hr>
  <p ${styles.p}>Do you enjoy looking at the webpages on the internet? Do you give thanks every day to whatever god you pray to that you don't have to use websites that look like <a href="https://3.bp.blogspot.com/-M6xItcvyhp0/VC7oymceIyI/AAAAAAAACko/x6rN4Js7g2M/s1600/FirstWebsite.png">this</a>? Well, it didn't always used to be like this and we have cascading style sheets (CSS) to thank. Pay your elders a little respect and learn a little more on what exactly it took for the web to look as pretty as it does today.</p>
  <ul ${styles.ul}>
    <li>An approachable article covering <a href="https://css-tricks.com/look-back-history-css/">A Look Back at the History of CSS</a></li>
    <li>This is a video I push on most developers from <a href="https://twitter.com/fat">@fat</a> called <a href="https://www.youtube.com/watch?v=iniwPUEbPUM">Cascading Shit Show</a>. I find it very entertaining and I hope you will too!</li>
    <li>For a little nerdier fare, we have this A List Apart article on <a href="https://alistapart.com/article/the-story-of-css-grid-from-its-creators">The Story of CSS Grid, from Its Creators</a></li>
    <li>Finally, a nice little reminder on what it was like writing css when you first got started: <a href="https://css-tricks.com/5-things-css-developers-wish-knew-started/">5 things CSS developers wish they knew before they started</a></li>
  </ul>
  <h2 ${styles.h2}>👓 A11y Complience</h2>
  <hr>
  <p ${styles.p}>Accessibility used to be something that only librarians and old people cared about. Total snoozefest 💤. However, after a number of high profile companies, including Safeway and Bank of America, were sued over Americans With Disabilities Act violations, litigation around the subject has been rapidly picking up. Now a11y is no longer something for the dorks but rather something that everybody needs to be up to speed on. Plus it has this cool abbreviation, "a11y". Just try typing it out. You'll feel like you found a glitch in the matrix.</p>
  <ul ${styles.ul}>
    <li>A story about how accessibility was tackled at <a href="http://tech.trivago.com/2017/09/26/accessibility-at-trivago">trivago</a> (even though they're still unable to find their spokesperson a frickin' <a href="http://www.theplaidzebra.com/wp-content/uploads/2014/08/TriviagoGuyMeme3.png">belt</a>...)</li>
    <li><a href="http://pa11y.org/">Pa11y</a>, a suite of tools and resources to help make web pages more accessible</li>
    <li><a href="https://github.com/github/accessibilityjs"><code>accessibilityjs</code></a>, a client side accessibility error scanner from github</li>
    <li><a href="https://medium.com/alistapart/writing-html-with-accessibility-in-mind-a62026493412">Writing HTML with accessibility in mind</a></li>
    <li><a href="https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939">Writing CSS with Accessibility in Mind</a></li>
    <li><a href="https://medium.com/@matuzo/writing-javascript-with-accessibility-in-mind-a1f6a5f467b9">Writing JavaScript with accessibility in mind</a></li>
  </ul>
  <h2 ${styles.h2}>📝 Cheatsheets, Lists, and Ultimate Guides, Oh My!</h2>
  <hr>
  <ul ${styles.ul}>
    <li><a href="https://medium.com/level-up-web/the-mega-html5-cheatsheet-e8c479b1c521">The Mega HTML5 Cheatsheet</a></li>
    <li><a href="https://github.com/mbeaudru/modern-js-cheatsheet#spread-operator-">Modern JavaScript Cheatsheet</a></li>
    <li><a href="https://devhints.io/es6">ES2015+ cheatsheet</a></li>
    <li><a href="https://github.com/joshbuchea/HEAD">A list of everything that <em>could</em> go in the <code>&lt;head&gt;</code> of your document</a></li>
    <li><a href="https://axesslab.com/alt-texts/">Alt-texts: The Ultimate Guide</a></li>
    <li><a href="https://www.campaignmonitor.com/css/grid/align-content/">The Ultimate Guide to CSS</a></li>
  </ul>
  <h2 ${styles.h2}>🗿 Odds 'n Ends</h2>
  <hr>
  <ul ${styles.ul}>
    <li>For those of you that aren't using <a href="https://support.google.com/chrome/answer/157179?hl=en">keyboard shortcuts in Chrome</a>, prepare to have to have your mind blown. For those of you that aren't using Chrome, take a second to reevaluate your life decisions.</li>
    <li>A <a href="https://codepen.io/yemon/pen/BwOOWZ">Netflix style animation</a> in under 60 lines of code</li>
    <li>This little hack right <a href="https://www.youtube.com/watch?v=ht5oFxpADt4">here</a> was the basis on which modern responsive web development was formed</li>
    <li>🔥🔥🔥HOT!!!🔥🔥🔥 <a href="https://developers.google.com/web/updates/2017/08/devtools-release-notes">What's New In DevTools</a> There's some really cool stuff in here (and you can start using it right now!)
    </li>
    <li>Another great article from <a href="https://hackernoon.com/@david.gilbertson">David Gilbertson</a> on his <a href="https://hackernoon.com/my-approach-to-using-z-index-eca67feb079c">approach to using z-index</a></li>
    <li>Interested in taking advantage of ES6 arrow functions, but not entirely sure how? Read this article on <a href="https://medium.freecodecamp.org/arrow-functions-in-javascript-2f8bf7df5077">how you can use ES6 Arrow Functions to make your JavaScript easier to read</a> and hit the ground running</li>
    <li>An article on how to write useful, meaningful comments: <a href="https://css-tricks.com/the-art-of-comments">The Art of Comments</a></li>
    <li>And finally, I leave you with <a href="https://www.instagram.com/p/Ba6xKqalh8R/">this</a>. Thanks for reading!</li>
  </ul>
  <hr>
  <p ${styles.p}>That concludes another edition of Nerd Alert™. I hope you all enjoyed reading it as much as I did writing it.</p>
  <p ${styles.p}>- <a href="https://github.com/tshamz">@tshamz</a></p>
  <p ${styles.p}><em>(Yeah, I ripped off this layout from "It's 2pm". <a href="http://boingboing.net/2005/03/24/early-apple-sound-de.html">So sue me</a>.)</em></p>
</div>`
}
