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
&lt;div class="elk-app is-fixed">
  ...
&lt;/div>
```

#### elk-main fixed
All that's needed to be done is to add `.is-fixed` class to `elk-app` and `is-fixed` class to `elk-main` elements. For example :

```html
  &lt;div class="elk-app is-fixed">
    &lt;div class="elk-main is-fixed">
      ...
    &lt;/div>
  &lt;/div>
```

#### sticky top bar

```html
&lt;!-- BEGIN .elk-header -->
&lt;header class="elk-header is-sticky">
    &lt;a href="#elk-side" data-toggle="onoffcanvas" class="onoffcanvas-toggler" aria-expanded=false></a>
    &lt;span>APP HEADER</span>
&lt;/header>
&lt;!-- END:  .elk-header -->
```

#### sticky bottom bar
```html
<!-- begin .elk-footer -->
&lt;footer class="elk-footer is-sticky is-bottom">
    &lt;p>
      elektron v1.0.0 2018
    &lt;/p>
&lt;/footer>
<!-- END: .elk-footer -->
```
