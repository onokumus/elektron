### Class structure
| class | required                                              | multiple |
|-------|-------------------------------------------------------|----------|
| .elk-app  | not required for ember.js project, otherwise required | no       |
| .elk-wrap | required                                            | no       |
| .elk-header | no                                    | yes      |
| .elk-container | required | no |
| .elk-footer | no | yes |
| .elk-side | no | yes|
| .elk-side-header | no | yes|
| .elk-side-content | no (required, if .app-side ) | no|
| .elk-side-footer | no | no |
| .elk-main | required | no |
| .elk-main-header | no | yes |
| .elk-main-content | required | no |
| .elk-main-footer | no | yes |

### Fixed Page Options

#### elk-app fixed
Elektron is fluid by default. Can be used as fixed on will. All that's needed to be done is to add `.is-fixed` class to `elk-app` element.

```html
<div class="elk-app is-fixed">
  ...
</div>
```

#### elk-main fixed
All that's needed to be done is to add `.is-fixed` class to `elk-app` and `is-fixed` class to `elk-main` elements. For example :

```html
 <div class="elk-app is-fixed">
    <div class="elk-main is-fixed">
      ...
    </div>
  </div>
```

#### sticky top bar

```html
<!-- BEGIN .elk-header -->
<header class="elk-header is-sticky">
    <a href="#elk-side" data-toggle="onoffcanvas" class="onoffcanvas-toggler" aria-expanded=false></a>
    <span>APP HEADER</span>
</header>
<!-- END:  .elk-header -->
```

#### sticky bottom bar
```html
<!-- begin .elk-footer -->
<footer class="elk-footer is-sticky is-bottom">
    <p>
      elektron v1.0.0 2018
    </p>
</footer>
<!-- END: .elk-footer -->
```
