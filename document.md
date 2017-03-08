### Class structure
| class | required                                              | multiple |
|-------|-------------------------------------------------------|----------|
| .app  | not required for ember.js project, otherwise required | no       |
| .app-wrap | required                                            | no       |
| .app-heading | no                                    | yes      |
| .app-container | required | no |
| .app-footer | no | yes |
| .app-side | no | yes|
| .side-content | no (required, if .app-side ) | no|
| .side-footer | no | no |
| .app-main | required | no |
| .main-heading | no | yes |
| .main-content | required | no |
| .main-footer | no | yes |

### Fixed Page Options

#### app fixed
Elektron is fluid by default. Can be used as fixed on will. All that's needed to be done is to add `.app-is-fixed` class to `body` element.

#### main fixed
All that's needed to be done is to add `.main-is-fixed` class to `body` element.
