```html
<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>Admin</title>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css/normalize.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/metismenujs/dist/metismenujs.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/onoffcanvas/dist/onoffcanvas.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/elektron/dist/elektron.min.css">

</head>

<body class="elk-app">

  <!-- BEGIN .elk-header -->
  <header class="elk-header ">
    <a class="onoffcanvas-toggler is-animated" href="#elk-side" data-toggle="onoffcanvas"></a>
  </header>
  <!-- END:  .elk-header -->
  <!-- BEGIN .elk-container -->
  <div class="elk-container">

    <!-- BEGIN .elk-side -->
    <aside class="elk-side " id="elk-side" aria-expanded=false>

      <!-- BEGIN .elk-side-content -->
      <div class="elk-side-content ">
        <!-- BEGIN .elk-side-nav -->
        <nav class="elk-side-nav">

          <!-- BEGIN: elk-side-nav-content -->
          <ul class="metismenu" id="metismenu">

            <li>
              <a class="active" href="index.html">
                <span class="has-icon">
                  <i class="fa fa-cogs"></i>
                </span>
                <span class="nav-title">Dashboard</span>
              </a>
            </li>

            <li>
              <a href="#" class="has-arrow" aria-expanded=false>
                <span class="has-icon">
                  <i class="fa fa-pagelines"></i>
                </span>
                <span class="nav-title">Menu</span>
              </a>
              <ul aria-expanded=false>
                <li>
                  <a href="#">Menu Item</a>
                </li>
              </ul>
            </li>

          </ul>
          <!-- END: elk-side-nav-content -->
        </nav>
        <!-- END: .elk-side-nav -->
      </div>
      <!-- END: .elk-side-content -->
      <!-- BEGIN .elk-side-footer -->
      <footer class="elk-side-footer">
        ...
      </footer>
      <!-- END .elk-side-footer -->

    </aside>
    <!-- END: .elk-side -->

    <!-- BEGIN .elk-main -->
    <div class="elk-main">

      <!-- BEGIN .elk-main-heading -->
      <header class="elk-main-header">
        ...
      </header>
      <!-- END: .elk-main-header -->
      <!-- BEGIN .elk-main-content -->
      <div class="elk-main-content">

        ...

      </div>
      <!-- END: .elk-main-content -->
      <!-- BEGIN .elk-main-footer -->
      <footer class="elk-main-footer">
        ...
      </footer>

      <!-- END: .elk-main-footer -->

    </div>
    <!-- END: .elk-main -->

  </div>
  <!-- END: .elk-container -->

  <!-- begin .elk-footer -->
  <footer class="elk-footer ">
    ...
  </footer>
  <!-- END: .elk-footer -->

  <script src="https://cdn.jsdelivr.net/npm/metismenujs" charset="utf-8"></script>
  <script src="https://cdn.jsdelivr.net/npm/onoffcanvas/dist/onoffcanvas.min.js" charset="utf-8"></script>
  <script src="https://cdn.jsdelivr.net/npm/elektron" charset="utf-8"></script>
</body>

</html>
```
