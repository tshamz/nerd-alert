const styles = {
  ul: 'style="font-size: 18px;font-family: Verdana,Geneva,sans-serif;line-height: 1.5;color: #4e4e4e;padding-left: 24px"',
  h2: 'style="font-size: 34px;margin-bottom: 0;"',
  p: 'style="font-size: 18px;font-family: Verdana,Geneva,sans-serif;line-height: 1.5;color: #4e4e4e;"'
};

module.exports = {
  "body": `<div style="width: 500px; margin: 0 auto;">
  <img style="width: 100%" src="https://www.tylershambora.com/images/nerd-alert.gif">
  <p ${styles.p}><strong>Welcome to Nerd Alert™.</strong> </p>
  <p ${styles.p}></p>
  <h2 ${styles.h2}>[TITLE]</h2>
  <hr>
  <p ${styles.p}>[DESCRIPTION]</p>
  <ul ${styles.ul}>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <h2 ${styles.h2}>[TITLE]</h2>
  <hr>
  <p ${styles.p}>[DESCRIPTION]</p>
  <ul ${styles.ul}>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <h2 ${styles.h2}>[TITLE]</h2>
  <hr>
  <p ${styles.p}>[DESCRIPTION]</p>
  <ul ${styles.ul}>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <h2 ${styles.h2}>Odds 'n Ends</h2>
  <hr>
  <ul ${styles.ul}>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <hr>
  <p ${styles.p}>That concludes another edition of Nerd Alert™. I hope you all enjoyed reading it as much as I did writing it.</p>
  <p ${styles.p}>- <a href="https://github.com/tshamz">@tshamz</a></p>
  <p ${styles.p}><em>(Yeah, I ripped off this layout from "It's 2pm". <a href="http://boingboing.net/2005/03/24/early-apple-sound-de.html">So sue me</a>.)</em></p>
</div>`
}
