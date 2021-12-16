### Class structure
| class | required                                              | multiple |
|-------|-------------------------------------------------------|----------|
| .elk-app  | required | no       |
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
&lt;body class="elk-app is-fixed"&gt;
  ...
&lt;/body&gt;
```

#### elk-main fixed
All that's needed to be done is to add `.is-fixed` class to `elk-app` and `is-fixed` class to `elk-main` elements. For example :

```html
 &lt;body class="elk-app is-fixed"&gt;
    &lt;div class="elk-main is-fixed"&gt;
      ...
    &lt;/div&gt;
  &lt;/body&gt;
```

#### sticky top bar

```html
&lt;!-- BEGIN .elk-header --&gt;
&lt;header class="elk-header is-sticky"&gt;
    &lt;a href="#elk-side" data-toggle="onoffcanvas" class="onoffcanvas-toggler" aria-expanded=false&gt;&lt;/a&gt;
    &lt;span&gt;APP HEADER&lt;/span&gt;
&lt;/header&gt;
&lt;!-- END:  .elk-header --&gt;
```

#### sticky bottom bar
```html
&lt;!-- begin .elk-footer --&gt;
 &lt;footer class="elk-footer is-sticky is-bottom"&gt;
    &lt;p&gt;
      elektron v0.5.2 2018
    &lt;/p&gt;
&lt;/footer&gt;
&lt;!-- END: .elk-footer --&gt;
```
