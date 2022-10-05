---
title: sticky header 2
layout: ../layouts/MdLayout.astro
hasElkFooter: true
hasElkHeader: true
elkAppClasses: elk-test
elkMainClasses: elk-test
elkSideClasses: elk-test
---
<!-- BEGIN .elk-header -->
<header class="elk-header">
  <a class="onoffcanvas-toggler is-animated" href="#elk-top-nav" data-toggle="onoffcanvas"></a>
  <a href="index.html">
    <img src="assets/img/logo.svg" alt="Elektron Logo">
  </a>
</header>
<!-- END:  .elk-header -->

<!-- BEGIN .elk-header -->
<header class="elk-header is-sticky">
  <nav class="elk-top-nav is-hoverable onoffcanvas is-top" id="elk-top-nav">
    <ul class="metismenu" id="menu1">
      <li>
        <a class="{{#is title " Dashboard "}} active{{/is}}" href="index.html">
          <span class="has-icon">
            <i class="fa fa-cogs"></i>
          </span>
          <span class="nav-title">Dashboard</span>
        </a>
      </li>

      <li>
        <a href="#" class="has-arrow">
          <span class="has-icon">
            <i class="fa fa-pagelines"></i>
          </span>
          <span class="nav-title">Blank Pages</span>
        </a>
        <ul>
          <li>
            <a href="no-footers.html">No Footers</a>
          </li>
          <li>
            <a href="no-headers.html">No Headers</a>
          </li>
          <li>
            <a href="no-headers-footers.html">No Headers & Footers</a>
          </li>
          <li>
            <a href="app-is-fixed.html">App Fixed</a>
          </li>
          <li>
            <a href="main-is-fixed.html">Main Fixed</a>
          </li>
          <li>
            <a href="sticky-header.html">Sticky Header</a>
          </li>
          <li>
            <a href="sticky-header-2.html">Sticky Header 2</a>
          </li>
          <li>
            <a href="sticky-footer.html">Sticky Footer</a>
          </li>
        </ul>
      </li>

      <li>
      <a href="#" class="has-arrow">
        <span class="has-icon"><i class="fa fa-list"></i></span>
        <span class="nav-title">elk-side</span>
      </a>
      <ul>
        <li><a{{#is title "is-mini"}} class=active{{/is}} href="app-side-is-mini.html">is-mini</a></li>
        <li><a{{#is title "is-hoverable"}} class=active{{/is}} href="app-side-is-hoverable.html">is-hoverable</a></li>
        <li>
          <a href="#" class="has-arrow">is-fixed</a>
          <ul>
            <li><a{{#is title "app-side fixed"}} class=active{{/is}} href="app-side-is-fixed.html">Default</a></li>
            <li><a{{#is title "elk-side hoverable"}} class=active{{/is}} href="app-side-is-fixed-is-hoverable.html">Hoverable</a></li>
          </ul>
        </li>

        <li>
          <a href="#" class="has-arrow">is-sticky</a>
          <ul>
            <li><a{{#is title "is-sticky"}} class=active{{/is}} href="app-side-is-sticky.html">Default</a></li>
            <li><a{{#is title "is-sticky is-mini"}} class=active{{/is}} href="app-side-is-sticky-is-mini.html">mini</a></li>
            <li><a{{#is title "is-sticky is-hoverable"}} class=active{{/is}} href="app-side-is-sticky-is-hoverable.html">hoverable</a></li>
          </ul>
        </li>

      </ul>
    </li>
    </ul>
  </nav>
</header>
<!-- END:  .elk-header -->

<!-- BEGIN .app-container -->
<div class="elk-container">

  {{!--
  <!-- BEGIN .app-side -->
  <aside class="app-side" id="app-side">

    <!-- BEGIN .side-content -->
    <div class="side-content ">

      {{> elk-side-nav}}

    </div>
    <!-- END: .side-content -->

    <!-- BEGIN .side-footer -->
    <footer class="side-footer">
      SIDE FOOTER
    </footer>
    <!-- END .side-footer -->

  </aside>
  <!-- END: .app-side -->--}}

  <!-- BEGIN .app-main -->
  <div class="elk-main">

    <!-- BEGIN .main-heading -->
    <header class="elk-main-header">
      MAIN HEADING
    </header>
    <!-- END: .main-heading -->

    <!-- BEGIN .main-content -->
    <div class="elk-main-content">
      <label class="elk-switch">
        <input name="dark" class="elk-switch-input" type="checkbox">
        <span class="elk-switch-indicator"></span>
      </label>
      <h4>Code</h4>
      <p>Supported browser :
        <a href="http://caniuse.com/#feat=css-sticky">http://caniuse.com/#feat=css-sticky</a>
      </p>
      <h5>HTML</h5>
      <p>
        <pre><code class="language-html">&lt;!-- BEGIN .elk-header --&gt;
&lt;header class=&quot;elk-header is-sticky&quot; data-theme=dark&gt;
  &lt;a href=&quot;#app-side&quot;
  data-toggle=&quot;onoffcanvas&quot;
  class=&quot;onoffcanvas-toggler&quot;
  aria-expanded=false&gt;&lt;/a&gt;
  &lt;span&gt;APP HEADER&lt;/span&gt;
&lt;/header&gt;
&lt;!-- END:  .elk-header --&gt;
</code></pre>
      </p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>

    </div>
    <!-- END: .main-content -->

    <!-- BEGIN .main-footer -->
    <footer class="main-footer">
      main footer
    </footer>
    <!-- END: .main-footer -->

  </div>
  <!-- END: .app-main -->

</div>
<!-- END: .app-container -->

<!-- begin .app-footer -->
<footer class="elk-footer ">
  <p>
    elektron v0.3.3 2018
  </p>
</footer>
<!-- END: .app-footer -->
